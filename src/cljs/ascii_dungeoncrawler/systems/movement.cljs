(ns ascii-dungeoncrawler.systems.movement
  (:require [ascii-dungeoncrawler.utils :refer [add-vectors]]
            [ascii-dungeoncrawler.ecs :as ecs]))

(enable-console-print!)

(def speed 3)
;; (def max-velocity 10)
;; (def max-acceleration 7)
(def max-velocity 7)
(def max-acceleration 4)

(def slow-down 0.9)

(def movement-offsets {:up    [0 (* speed -1)]
                       :down  [0 speed]
                       :left  [(* speed -1) 0]
                       :right [speed 0]})


(defn decrease-speed
  "Decreases velocity by a certain percentage each frame."
  [velocity]
  (if (> (.abs js/Math velocity) 1)
    (* slow-down velocity)
    0))


(defn new-position
  [pos vel]
  (add-vectors pos vel))


(defn new-velocity
  [vel accel]
  (add-vectors vel accel max-velocity))


(defn new-acceleration
  [[x y] key]
  (let [accel (get movement-offsets key [0 0])]
    (add-vectors [x y] accel)))


(defn mk-update-acceleration-fn
  [key]
  (fn [current-acceleration]
    (new-acceleration current-acceleration key)))


(defn update-position-component-data
  "Given a position component map and a set of input data for an entity, returns a new
  position component map with the entity's position updated to reflect that input data."
  [component-map [entity-id [input-data {:keys [pos]} {:keys [velocity]}]]]

  (if (or (seq input-data)
          (not= velocity [0 0]))
    (-> component-map
        (assoc-in [entity-id :next-pos] (new-position pos velocity)))
    component-map))


(defn update-velocity-component-data
  "Given a velocity component map and a set of input data for an entity, returns a new
  velocity component map with the entity's velocity updated to reflect that input data."
  [component-map [entity-id [input-data _ {:keys [velocity acceleration]}]]]

  (if (or (seq input-data)
          (not= velocity [0 0])
          (not= acceleration [0 0]))
    (let [update-accel (apply comp (map mk-update-acceleration-fn input-data))
          next-accel (update-accel [0 0])
          next-velocity (new-velocity (mapv decrease-speed velocity) next-accel)]

      (-> component-map
          (assoc-in [entity-id :velocity] next-velocity)
          (assoc-in [entity-id :acceleration] next-accel)))

    component-map))


(defn movement-system
  "System to handle moving entities based on input commands."
  [state]
  (let [entities (ecs/entities-with-components state [:input :position :velocity])]
    (-> state
        (update-in [:components :velocity] #(reduce update-velocity-component-data % entities))
        (update-in [:components :position] #(reduce update-position-component-data % entities)))))
