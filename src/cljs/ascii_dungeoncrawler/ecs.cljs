(ns ascii-dungeoncrawler.ecs
  (:require [clojure.set :refer [intersection]]))


;; :entities #{:1234 #{:moveable :renderable}}
;;
;; :components #{:moveable
;;               {:1234 {:x 10
;;                       :y 10}}
;;               {:7890 {:x 40
;;                       :y 10}}
;;               :renderable {:1234 {:sprite "test.jpg"}
;;                            :7890 {:sprite "something.png"}}
;;               }


(defn state-component-path
  [component-id]
  [:components component-id])

(defn state-entity-path
  [entity-id]
  [:entities entity-id])


(defn entity-has-component?
  [state entity-id component-id]
  (contains? (or (get-in state [:entities entity-id]) #{}) component-id))


(defn add-component-to-entity
  [state entity-id [component-id component-state]]
  (-> state
      (update-in [:entities entity-id]
                 #(conj (or % #{}) component-id))
      (update-in [:components component-id]
                 #(conj (or % {}) {entity-id component-state}))))


(defn remove-component-from-entity
  [state entity-id component-id]
  (-> state
      (update-in [:entities entity-id]
                 #(disj (or % #{}) component-id))
      (update-in [:components component-id]
                 #(dissoc (or % {}) entity-id))))



(defn add-component-data
  [entity-id]
  (fn [state component]
    (add-component-to-entity state entity-id component)))


(defn add-entity
  "Adds an entity with given id to state"
  [state entity-id components]
  (let [add-components (add-component-data entity-id)]
    (reduce add-components state components)))


(defn rm-entity
  [state entity-id]
  (let [components (-> state :entities)]
    (-> state
        (update-in [:entities]
                   #(disj entity-id))
        ;; TODO: this is wrong, should be ->> instead
        (reduce #(update-in [:components %] dissoc entity-id))
        )))


(defn entities-with-component
  "Returns the ids of the entities that have the given component"
  [state component-id]
  (get-in state [:components component-id]))


(defn entities-with-components
  "Returns the ids and data of all entities that have all the requested components.
  Loop through the first component's entities. For each entity, check if the id exists in all
  the other component sets, if so then add a vector with data for each component in the
  order requested."
  [state component-ids]
  (let [first-component (entities-with-component state (first component-ids))
        add-entity-data (fn [accum [entity-id _]] ;; don't need entity data since we're just checking for the presence of the id
                          (let [ok? (every? #(entity-has-component? state entity-id %) component-ids)]
                            (if ok?
                              (conj accum (vector entity-id
                                                  (mapv #(-> state :components % entity-id)
                                                        component-ids)))
                              accum)))]
    (reduce add-entity-data [] first-component)))
