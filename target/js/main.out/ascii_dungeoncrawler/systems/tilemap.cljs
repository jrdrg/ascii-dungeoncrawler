(ns ascii-dungeoncrawler.systems.tilemap
  (:require [ascii-dungeoncrawler.constants :refer [tile-size]]
            [ascii-dungeoncrawler.mapdata :refer [tile-map]]
            [ascii-dungeoncrawler.pixi :as pixi]
            [ascii-dungeoncrawler.systems.collision :as collision]
            [ascii-dungeoncrawler.ecs :as ecs]))

(enable-console-print!)


(def initial-map tile-map)

(def tile-info {:x {:sprite (String.fromCodePoint 176) :color 0x003355 :walkable true}
                :w {:sprite (String.fromCodePoint 177) :color 0xff7799 :walkable false}
                :s {:sprite (String.fromCodePoint 219) :color 0xff7799 :walkable false}})



(def initial-tilemap-state {:container nil
                            :map nil})


(defn state->map-data
  [state]
  (get-in state [:tilemap :map]))


(defn tile-at
  [tile-data tile-x tile-y]
  (get-in tile-data [tile-y tile-x]))


(defn tile-info-at
  "Returns the tile-info data at tile index [x y]"
  [tile-data tile-x tile-y]
  (get tile-info (tile-at tile-data tile-x tile-y)))


(defn tile->position
  "Given a tile position, [7 3], returns the pixel coordinates, i.e. [112, 48]"
  [x y]
  [(* x tile-size) (* y tile-size)])


(defn entity->tile-pos
  "Given an entity position, i.e. [123, 52] returns the tile position, i.e. [7 3]"
  [entity-x entity-y]
  [(quot entity-x tile-size)
   (quot entity-y tile-size)])


(defn neighbors
  "Gets the 8 surrounding tiles of x, y"
  ([x y]
   (for [x-offset (range -1 2)
         y-offset (range -1 2)
         ;; :when (not= [x-offset y-offset] [0 0])
         ]
     [(+ x x-offset) (+ y y-offset)]))
  ([[pos-x pos-y]]
   (let [[x y] entity->tile-pos pos-x pos-y]
     (neighbors x y))))


(defn get-tilemap-key
  [path]
  [:tilemap path])


(defn update-in-state
  [state path value]
  (assoc-in state (get-tilemap-key path) value))


(defn set-tilemap
  [state tilemap]
  (update-in-state state :map tilemap))


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
                                     sprite (make-tile! tile (tile->position x y))]]
        (pixi/add-child! container sprite)
        ))
    container))


(defn initialize!
  [state stage]
  (println "Initializing tile map state")
  (let [tile-container (pixi/create-container!)]
    (pixi/add-child! stage tile-container)
    (-> state
        (set-tilemap initial-map)
        (update-in-state :container
                         (create-tile-sprites! tile-container initial-map)))))


(defn get-intersecting-tile
  [tile-data tile-x tile-y]
  (let [tile (tile-info-at tile-data tile-x tile-y)]
    (when (false? (:walkable tile))
      (tile->position tile-x tile-y))))



(defn collide-with-tile
  [tile-data velocity position [tile-x tile-y]]
  (let [intersecting-tile (get-intersecting-tile tile-data tile-x tile-y)]
    (if (and intersecting-tile (collision/collides? position intersecting-tile))
      (collision/adjust-position position intersecting-tile velocity)
      position)))


(defn calculate-next-position
  [[next-x next-y :as next-pos] velocity tile-data]
  (let [adjust-position (partial collide-with-tile tile-data velocity)
        adjusted (reduce adjust-position
                         next-pos
                         (apply neighbors (entity->tile-pos next-x next-y)))]
    adjusted))


(defn mk-update-entity-position-data
  [tile-data]
  (fn [component-map [entity-id [{:keys [pos next-pos]} {:keys [velocity]}]]]
    (assoc-in component-map
              [entity-id :next-pos]
              (calculate-next-position next-pos velocity tile-data))))


(defn tilemap-collision-system
  [state]
  (let [tile-data (get-in state (get-tilemap-key :map))
        entities (ecs/entities-with-components state [:position :velocity])
        update-entity-position-data (mk-update-entity-position-data tile-data)
        ]
    (update-in state
               [:components :position]
               #(reduce update-entity-position-data
                        % entities))))


(defn mk-tilemap-render-system
  [stage]
  (fn [state]
    (let [tile-data (get-in state (get-tilemap-key :map))]
      (if tile-data
        state
        (initialize! state stage)))))


(defn mk-tilemap-system
  [stage]
  (let [system (comp (mk-tilemap-render-system stage)
                     tilemap-collision-system)]
    system))
