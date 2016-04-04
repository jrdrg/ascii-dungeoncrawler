(ns ascii-dungeoncrawler.systems.movement
  (:require [ascii-dungeoncrawler.ecs :as ecs]))


(def speed 3)

(def movement-offsets {:up    [0 (* speed -1)]
                       :down  [0 speed]
                       :left  [(* speed -1) 0]
                       :right [speed 0]})

(defn pos->map
  [[x y]]
  ;; {:x x :y y}
  [x y])


(defn new-position
  [[x y] key]
  (let [[vel-x vel-y] (get movement-offsets key [0 0])]
    (pos->map
     [(+ x vel-x) (+ y vel-y)])))


(defn velocity
  [[x y] key]
  (let [[vel-x vel-y] (get movement-offsets key [0 0])]
    (pos->map
     [vel-x vel-y])))


(defn acceleration
  [[old-x old-y] [x y]]
  (pos->map [x y]))


(defn mk-update-position-fn
  [key]
  (fn [current-position]
    (new-position current-position key)))


(defn mk-update-velocity-fn
  [key]
  (fn [current-velocity]
    (velocity current-velocity key)))


(defn update-position-component-data
  "Given a position component map and a set of input data for an entity, returns a new
  position component map with the entity's position updated to reflect that input data."
  [component-map [entity-id [input-data {:keys [pos]} {:keys [velocity acceleration]}]]]
  (if (seq input-data)
    (let [new-pos (apply comp (map mk-update-position-fn input-data))
          velocity (apply comp (map mk-update-velocity-fn input-data))]
      (-> component-map
          ;; (assoc-in [entity-id :velocity] (velocity pos))
          (assoc-in [entity-id :next-pos] (new-pos pos))))
    component-map))


(defn update-velocity-component-data
  "Given a velocity component map and a set of input data for an entity, returns a new
  velocity component map with the entity's velocity updated to reflect that input data."
  [component-map [entity-id [input-data pos vel]]]
  (if (seq input-data)
    (let [velocity-fn (apply comp (map mk-update-velocity-fn input-data))
          velocity (velocity-fn vel)]
      (-> component-map
          (assoc-in [entity-id :velocity] velocity)
          (update-in [entity-id :acceleration] #(acceleration % velocity))))
    component-map))


(defn movement-system
  "System to handle moving entities based on input commands."
  [state]
  (let [entities (ecs/entities-with-components state [:input :position :velocity])]
    (-> state
        (update-in [:components :position] #(reduce update-position-component-data % entities))
        ;; (update-in [:components :velocity] #(reduce update-velocity-component-data % entities))
        )))
