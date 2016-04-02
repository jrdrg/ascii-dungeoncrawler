(ns ascii-dungeoncrawler.systems.collision
  (:require [ascii-dungeoncrawler.constants :refer [tile-size]]
            [ascii-dungeoncrawler.ecs :as ecs]))


(defn between?
  [min value max]
  (and
   (<= min value)
   (>= max value)))


(defn rect-intersects?
  [[left1 top1 right1 bottom1] [left2 top2 right2 bottom2]]

  (let [c1 (<= left1 right2)
        c2 (>= right1 left2)
        c3 (<= top1 bottom2)
        c4 (>= bottom1 top2)]
    (and c1 c2 c3 c4)))


(defn collides?
  [[x1 y1] [x2 y2]]

  (let [x1m (+ x1 tile-size)
        y1m (+ y1 tile-size)
        x2m (+ x2 tile-size)
        y2m (+ y2 tile-size)]
    (rect-intersects? [x1 y1 x1m y1m] [x2 y2 x2m y2m])))


(defn moved?
  [pos next-pos]
  (not (= pos next-pos)))


(defn collides-with-any?
  [{:keys [x y]} entities]

  (let [entity->pos (fn [[entity-id [{pos :pos}]]]
                      (let [{x1 :x y1 :y} pos]
                        [x1 y1]))
        collision? (some #(when (collides? [x y] (entity->pos %)) %)
                         entities)]
    collision?))


(defn mk-update-position-component-data
  "Returns a function that checks if the entity is colliding with any
  of the other entities in entities-with-position before returning a
  component map with updated position values."
  [entities-with-position]

  (fn [component-map [entity-id [{:keys [pos next-pos]}] :as entity]]
    (let [{x1 :x y1 :y} pos
          {x2 :x y2 :y} next-pos]
      (if (and
           (moved? pos (or next-pos pos))
           (not (collides-with-any? next-pos
                                    (remove #{entity} entities-with-position))))
        (-> component-map
            (assoc-in [entity-id :pos] next-pos))
        component-map))))


(defn collision-system
  "Handle collisions between entities, and update positions appropriately."
  [state]
  (let [entities (ecs/entities-with-components state [:position])
        update-position-component-data (mk-update-position-component-data entities)]
    (-> state
        (update-in [:components :position] #(reduce update-position-component-data % entities)))))
