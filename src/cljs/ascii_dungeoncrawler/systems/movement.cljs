(ns ascii-dungeoncrawler.systems.movement
  (:require [ascii-dungeoncrawler.ecs :as ecs]))


(def speed 3)

(def movement-offsets {:up    [0 (* speed -1)]
                       :down  [0 speed]
                       :left  [(* speed -1) 0]
                       :right [speed 0]})

(defn pos->map
  [[x y]]
  {:x x :y y})


(defn new-position
  [{:keys [x y]} key]
  (let [[offset-x offset-y] (get movement-offsets key [0 0])]
    (pos->map
     [(+ x offset-x) (+ y offset-y)])))


(defn mk-update-position-fn
  [key]
  (fn [current-position]
    (new-position current-position key)))


(defn update-position-component-data
  "Given a position component map and a set of input data for an entity, returns a new
  position component map with the entity's position updated to reflect that input data."
  [component-map [entity-id [input-data {:keys [pos]}]]]
  (if (seq input-data)
    (let [new-pos (apply comp (map mk-update-position-fn input-data))]
      (-> component-map
          (assoc-in [entity-id :next-pos] (new-pos pos))))
    component-map))


(defn movement-system
  "System to handle moving entities based on input commands."
  [state]
  (let [entities (ecs/entities-with-components state [:input :position])]
    (-> state
        (update-in [:components :position] #(reduce update-position-component-data % entities)))))
