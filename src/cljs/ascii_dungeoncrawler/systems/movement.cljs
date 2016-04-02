(ns ascii-dungeoncrawler.systems.movement
  (:require [ascii-dungeoncrawler.ecs :as ecs]))


(def speed 3)

(defn new-position
  [{:keys [x y]} key]
  (let [pos->map (fn [[x y]] {:x x :y y})]
    (pos->map (condp = key
                :up    [x (- y speed)]
                :down  [x (+ y speed)]
                :left  [(- x speed) y]
                :right [(+ x speed) y]
                [x y]))))


(defn mk-update-position-fn
  [key]
  (fn [current-position]
    (new-position current-position key)))


(defn movement-system
  [state]
  (let [entities (ecs/entities-with-components state [:input :position])
        update-position (fn [accum [entity-id [input-data _]]]
                          (if (seq input-data)
                            (let [new-pos (apply comp (map mk-update-position-fn input-data))]
                              (-> accum
                                  (update-in [:components :position entity-id] new-pos)))
                            accum))]
    (reduce update-position state entities)))
