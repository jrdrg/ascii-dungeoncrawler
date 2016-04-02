(ns ascii-dungeoncrawler.pixi)

(def tile-width 80)
(def tile-height 40)

(def width (* tile-width 16))
(def height (* tile-height 16))

(defonce textures (atom nil))


(defn render!
  [renderer stage]
  (.render renderer stage))


;; Create pixi objects

(defn create-container
  "Creates a PIXI container."
  ([]
   (js/PIXI.Container.))
  ([options]
   (js/PIXI.Container. (clj->js options))))


(defn create-renderer!
  "Creates a renderer"
  ([]
   (create-renderer! {"backgroundColor" 0x330000}))
  ([options]
   (.autoDetectRenderer js/PIXI width height (clj->js options))))


(defn load-images!
  "Loads the tileset image and calls done when complete. Stores a flag in an
  atom so it doesn't load each time boot-reload triggers."
  [done]
  (if (= @textures true)
    (done)
    (do
      (.load (.add js/PIXI.loader "img/cga.png")
             (do
               (reset! textures true)
               (println "Initialized base image.")
               done)))))


(defn texture-from-cache
  "Returns a texture from the TextureCache"
  [path]
  (aget js/PIXI.utils.TextureCache path))


(defn create-text!
  ([text {:keys [x y]}]
   (create-text! text
                {:x x :y y}
                {"font" "16px monospace" "fill" 0xffffff "align" "center"}))
  ([text {:keys [x y]} options]
   (let [pixi-text (js/PIXI.Text. text (clj->js options))]
     (aset pixi-text "x" x)
     (aset pixi-text "y" y)
     pixi-text)))


(defn text-sprite!
  "Returns a sprite created from the provided ASCII character"
  ([char]
   (let [sprite (.fromFrame js/PIXI.Sprite char)]
     sprite))
  ([char {:keys [x y]}]
   (let [sprite (text-sprite! char)]
     (aset sprite "x" x)
     (aset sprite "y" y)
     sprite)))


(defn move!
  [object {:keys [x y]}]
  (aset object "x" x)
  (aset object "y" y)
  object)


;; Add/remove from containers

(defn add-child!
  [container child]
  (.addChild container child)
  container)


(defn remove-child!
  [container child]
  (.removeChild container child)
  container)
