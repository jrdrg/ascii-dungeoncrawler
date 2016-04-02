(ns ascii-dungeoncrawler.systems.sprite
  (:require [ascii-dungeoncrawler.pixi :as pixi]
            [ascii-dungeoncrawler.ecs :as ecs]))

(def tile-size 16)
(def tiles-per-row 32)
(def character-range [32 127])
(def ascii-symbols (map String.fromCodePoint (apply range character-range)))
(def character-positions (map #(vector % %2 %3)
                              ascii-symbols (range) (iterate #(+ tile-size %) 0) ))



(defn char-coords
  "Returns the 2-d coordinates given the index"
  [index]
  {:x (* tile-size (mod index tiles-per-row))
   :y (* tile-size (quot index tiles-per-row))})


(defn sprite-from-texture!
  "Creates a sprite from sprite-texture with the given frame rectangle."
  ([sprite-texture x y tile-size]
   (sprite-from-texture! sprite-texture x y tile-size tile-size))
  ([sprite-texture x y w h]
   (let [rect (js/PIXI.Rectangle. x y w h)]
     (js/PIXI.Texture. sprite-texture rect))))


(defn generate-base-texture!
  "Creates a texture with all required alphanumeric symbols and returns it"
  [renderer]
  (let [container (pixi/create-container)
        texture (pixi/texture-from-cache "img/cga.png")]
    (pixi/add-child! container texture)
    texture))


(defn init-text-sprites!
  "Renders all alphanumeric characters to a texture for use as sprites"
  [renderer stage]
  (let [base-texture (generate-base-texture! renderer)
        sprite (js/PIXI.Sprite. base-texture)]

    (println "Initializing text sprites")
    (println (str "height " (.-height base-texture) " width " (.-width base-texture)))

    ;; Create a texture for each character in the image
    (doseq [[char index _] character-positions
            :let [{:keys [x y]} (char-coords index)
                  char-texture (sprite-from-texture! base-texture x y tile-size)]]
      (.addTextureToCache js/PIXI.Texture char-texture char))
    (println "Images initialized.")))



(defn component->sprite!
  "Moves a sprite's position based on its position component, and creates
  a new sprite if it doesn't exist."
  [stage {:keys [sprite char draw? color]} {position :pos}]
  (let [change-color! (fn [spr col]
                        (if col
                          (do
                            (aset spr "tint" col)
                            spr)
                          spr))]
    (if sprite
      (-> (pixi/move! sprite position)
          (change-color! color))
      (let [sprite (pixi/text-sprite! char position)]
        (pixi/add-child! stage sprite)
        (change-color! sprite color)))))


(defn mk-sprite-system
  "Main system function. Handles drawing sprites to the pixi stage."
  [renderer stage]
  (let [sprite-texture (init-text-sprites! renderer stage)]
    (fn [state]
      (let [entities (ecs/entities-with-components state [:sprite :position])
            update-sprite-components (fn [accum [entity-id [sprite-data position-data]]]
                                       (let [sprite (component->sprite! stage sprite-data position-data)]
                                         (-> accum
                                             (assoc-in [:components :sprite entity-id :sprite] sprite))))]
        (reduce update-sprite-components state entities)))))
