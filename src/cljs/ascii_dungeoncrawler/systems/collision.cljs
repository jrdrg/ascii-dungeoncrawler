(ns ascii-dungeoncrawler.systems.collision
  (:require [ascii-dungeoncrawler.constants :refer [tile-size]]
            [ascii-dungeoncrawler.ecs :as ecs]))


(defn on-damaged
  [entity1 entity2]
  )

(defn on-blocked
  [entity1 entity2]
  )


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


(defn entity->pos
  "Transforms a vector of entity position component data to [x y] form.
  Data is in the form [:entity-id [{:pos {:x 1 :y 1}}]]"
  [[entity-id [{[x y] :pos}]]]
  [x y])


(defn get-collisions
  "Returns a map of all collisions for the given [x y] coordinates."
  [[x y] entities]

  (let [collided-with? (partial filter #(collides? [x y] (entity->pos %)))
        get-position (partial map (fn [[entity-id [{[px py] :pos}]]]
                                    [entity-id [px py]]))
        collisions->vec (comp get-position collided-with?)]
    (collisions->vec entities)))


(defn collides-with-any?
  "True if a <tile-size> rectangle at [x y] collides with any of entities"
  [[x y] entities]

  (let [collision? #(when (collides? [x y] (entity->pos %)) %)]
    (some collision? entities)))


(defn mk-update-position-component-data
  "Returns a function that checks if the entity is colliding with any
  of the other entities in entities-with-position before returning a
  component map with updated position values."
  [entities-with-position]

  (fn [component-map [entity-id [{:keys [pos next-pos]} {:keys [velocity acceleration]}] :as entity]]
    (let [[x1 y1] pos
          [vx vy] velocity
          [ax ay] acceleration
          ]
      (if (and
           (moved? pos (or next-pos pos))
           (not (collides-with-any? next-pos
                                    (remove #{entity} entities-with-position))))
        (-> component-map
            (assoc-in [entity-id :pos] next-pos))
        component-map))))


;;;;;;;;;;;
;; System
;;;;;;;;;;;

(defn collision-system
  "Handle collisions between entities, and update positions/velocities appropriately."
  [state]
  (let [entities (ecs/entities-with-components state [:position] [:velocity])
        get-velocity (fn [[entity-id _]] (ecs/get-component state entity-id :velocity))
        update-position-component-data (mk-update-position-component-data entities)]

    (-> state
        (update-in [:components :position] #(->> (filter get-velocity entities)
                                                 (reduce update-position-component-data %))))))
