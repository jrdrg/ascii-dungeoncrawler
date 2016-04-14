(ns ascii-dungeoncrawler.systems.tilemap
  (:require [ascii-dungeoncrawler.constants :refer [tile-size]]
            [ascii-dungeoncrawler.mapdata :refer [tile-map]]
            [ascii-dungeoncrawler.pixi :as pixi]
            [ascii-dungeoncrawler.systems.collision :as collision]
            [ascii-dungeoncrawler.ecs :as ecs]))

(enable-console-print!)


(def initial-map tile-map)

(def tile-info {:x {:sprite (String.fromCodePoint 176) :color 0x003355}
                :w {:sprite (String.fromCodePoint 177) :color 0xff7799}
                :s {:sprite (String.fromCodePoint 219) :color 0xff7799}})



(def initial-tilemap-state {:container nil
                            :map nil})


(defn tile-coords
  [[x y]]
  [(* x tile-size) (* y tile-size)])


(defn create-container!
  [state]
  (let []
    ))


(defn get-tilemap-key
  [path]
  [:tilemap path])


(defn update-in-state
  [state path value]
  (assoc-in state (get-tilemap-key path) value))


(defn set-tilemap
  [state tilemap]
  (-> state
      (assoc-in (get-tilemap-key :map) tilemap)))


(defn make-tile!
  [tile [x y]]
  (let [{:keys [sprite color]} (get tile-info tile {:sprite "?" :color 0xff0000})]
    (pixi/char-sprite! sprite [x y] color)))


(defn create-tile-sprites!
  [container map]
  (let [y-size (count map)]
    (doseq [y (range y-size) :let [row (get map y)
                                   x-size (count row)]]
      (doseq [x (range x-size) :let [tile (get row x)
                                     sprite (make-tile! tile (tile-coords [x y]))]]
        (pixi/add-child! container sprite)
        ))
    container))


(defn initialize!
  [state stage]
  (println "Initializing tile map state")
  (let [tile-container (pixi/create-container)
        tile-sprites (create-tile-sprites! tile-container initial-map)]
    (pixi/add-child! stage tile-container)
    (-> state
       (set-tilemap initial-map)
       (update-in-state :container tile-sprites))))



(defn tilemap-collision-system
  [state]
  (let [current-map nil
        entities (ecs/entities-with-components state [:input :position :velocity])]
    state))


(defn mk-tilemap-render-system
  [stage]
  (fn [state]
    (let [tile-data (get-in state (get-tilemap-key :map))]
      (if tile-data
        (-> state)
        (initialize! state stage)))))


(defn mk-tilemap-system
  [stage]
  (let [system (comp (mk-tilemap-render-system stage)
                     tilemap-collision-system)]
    (fn [state]
      (system state))))
