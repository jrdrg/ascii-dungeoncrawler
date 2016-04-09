(ns ascii-dungeoncrawler.systems.collision
  (:require [ascii-dungeoncrawler.constants :refer [tile-size]]
            [ascii-dungeoncrawler.utils :refer [add-vectors]]
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


(defn get-tile-rect
  "Returns [x y w h] of a rectangle at [x y] with height and width equal to tile-size."
  [x y]
  [x y (+ x tile-size) (+ y tile-size)])


(defn rect-intersects?
  [[left1 top1 right1 bottom1] [left2 top2 right2 bottom2]]

  (let [c1 (< left1 right2)
        c2 (> right1 left2)
        c3 (< top1 bottom2)
        c4 (> bottom1 top2)]
    (and c1 c2 c3 c4)))


(defn collides?
  [[x1 y1] [x2 y2]]

  (let [[_ _ x1m y1m] (get-tile-rect x1 y1)
        [_ _ x2m y2m] (get-tile-rect x2 y2)]
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


(defn order-coords
  [min1 max1 min2 max2]
  (if (< min1 min2)
    [min1 max1 min2 max2  1]
    [min2 max2 min1 max1 -1]))


(defn intersect-amounts
  "Returns a vector representing the amount that the two rectangles overlap by."
  [[x1 y1] [x2 y2]]
  (if (collides? [x1 y1] [x2 y2])
    (let [[_ _ x1m y1m] (get-tile-rect x1 y1)
          [_ _ x2m y2m] (get-tile-rect x2 y2)
          [x1' x1m' x2' x2m' sign-x] (order-coords x1 x1m x2 x2m)
          [y1' y1m' y2' y2m' sign-y] (order-coords y1 y1m y2 y2m)
          x-amount (* sign-x (- x1m' x2'))
          y-amount (* sign-y (- y1m' y2'))]
      [x-amount y-amount])
    [0 0]))


(defn adjust-position
  "Given [x1 y1] and its velocity, returns a new vector [x1' y1'] representing the new position
  to avoid collision with [x2 y2]. Adjusts the dimension with the smallest intersection amount first."
  [p1 p2 [vel-x vel-y]]
  (let [neg (partial * -1)
        [int-x int-y] (intersect-amounts p1 p2)
        [abs-int-x abs-int-y] (mapv #(.abs js/Math %) [int-x int-y])]
    (cond
      (< abs-int-x abs-int-y)
      (let [x-adjusted (add-vectors p1 [(neg int-x) 0])
            [_ intersect-y] (intersect-amounts x-adjusted p2)]
        (add-vectors x-adjusted [0 (neg intersect-y)]))
      (> abs-int-x abs-int-y)
      (let [y-adjusted (add-vectors p1 [0 (neg int-y)])
            [intersect-x _] (intersect-amounts y-adjusted p2)]
        (add-vectors y-adjusted [(neg intersect-x) 0]))
      :else p1)
    ))


(defn update-entity-position
  [component-map entity-id position]
  (assoc-in component-map [entity-id :pos] position))


(defn update-entity-velocity-if-stopped
  [component-map entity-id stopped?]
  (if stopped?
    (assoc-in component-map [entity-id :velocity] [0 0])
    component-map))


(defn calculate-next-position
  [position next-pos velocity other-entities]
  (let [adjusted (reduce (fn [accum-pos [entity-id [position-data _]]]
                           (let [{other-pos :pos} position-data]
                             (if (collides? accum-pos other-pos)
                               (adjust-position accum-pos other-pos velocity)
                               accum-pos)))
                         next-pos
                         other-entities)]
    adjusted))


(defn mk-update-position-component-data
  "Returns a function that checks if the entity is colliding with any
  of the other entities in entities-with-position before returning a
  component map with updated position values."
  [entities-with-position]

  (fn [component-map [entity-id [position-data velocity-data] :as entity]]
    (let [{:keys [pos next-pos]} position-data
          {:keys [velocity acceleration]} velocity-data
          other-entities (remove #{entity} entities-with-position)
          real-next-pos (calculate-next-position pos next-pos velocity other-entities)
          stopped? (not (= next-pos real-next-pos))
          ]
      (if (moved? pos (or next-pos pos))
        (-> component-map
            (update-entity-position entity-id (calculate-next-position pos next-pos velocity other-entities)))
        component-map))))


;;;;;;;;;;;
;; System
;;;;;;;;;;;

(defn collision-system
  "Handle collisions between entities, and update positions/velocities appropriately."
  [state]
  (let [entities (ecs/entities-with-components state [:position] [:velocity :collidable])
        get-velocity (fn [[_ [_ velocity _]]] velocity)
        update-position-component-data (mk-update-position-component-data entities)]

    (-> state
        (update-in [:components :position]
                   #(->> (filter get-velocity entities)
                         (reduce update-position-component-data %))))))
