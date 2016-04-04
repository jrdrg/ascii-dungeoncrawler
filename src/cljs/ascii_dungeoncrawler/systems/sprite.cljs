(ns ascii-dungeoncrawler.systems.sprite
  (:require [ascii-dungeoncrawler.constants :refer [tile-size img-path]]
            [ascii-dungeoncrawler.pixi :as pixi]
            [ascii-dungeoncrawler.ecs :as ecs]))

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


;;;;;;;;;;;;;;;;;;;;
;; Initialization
;;;;;;;;;;;;;;;;;;;;

(defn generate-base-texture!
  "Creates a texture with all required alphanumeric symbols and returns it"
  [renderer]
  (let [container (pixi/create-container)
        texture (pixi/texture-from-cache img-path)]
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




;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; System helper functions
;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn component->sprite!
  "Moves a sprite's position based on its position component, and creates
  a new sprite if it doesn't exist."
  [stage {:keys [sprite char draw? color]} {position :pos}]

  (if sprite
    (-> (pixi/move! sprite position)
        (pixi/change-color! color))
    (let [sprite (pixi/char-sprite! char position)]
      (pixi/add-child! stage sprite)
      (pixi/change-color! sprite color))))


(defn mk-update-sprite-component-data
  "Returns a function to update the sprite component data."
  [stage]
  (fn update-sprite-component-data
    [component-map [entity-id [sprite-data position-data]]]
    (-> component-map
        (assoc-in [entity-id :sprite] (component->sprite! stage sprite-data position-data)))))


(defn mk-update-text-component-data
  [stage]
  (fn update-text-component-data
    [component-map [entity-id [text-data position-data]]]
    (-> component-map
        )))

;;;;;;;;;;;;
;; System
;;;;;;;;;;;;

(defn mk-sprite-system
  "Main system function. Handles drawing sprites (and text) to the pixi stage."
  [renderer stage]
  (let [sprite-texture (init-text-sprites! renderer stage)
        update-sprite-components (mk-update-sprite-component-data stage)
        update-text-components (mk-update-text-component-data stage)]
    (fn [state]
      (let [sprite-entities (ecs/entities-with-components state [:sprite :position])
            text-entities (ecs/entities-with-components state [:text :position])]
        (-> state
            (update-in [:components :sprite]
                       #(reduce update-sprite-components % sprite-entities))
            (update-in [:components :text]
                       #(reduce update-text-components % text-entities)))))))
