(ns ascii-dungeoncrawler.ecs
  (:require [clojure.set :refer [intersection]]))



(defn state-component-path
  [component-id]
  [:components component-id])


(defn state-entity-path
  [entity-id]
  [:entities entity-id])


(defn entity-has-component?
  "Returns true if the entity has the specified component."
  [state entity-id component-id]
  (contains? (or (get-in state [:entities entity-id]) #{}) component-id))


(defn get-component
  [state entity-id component-id]
  (get-in state [:entities entity-id component-id]))


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


(defn add-entity
  "Adds an entity with given id to state."
  ([state components]
   (let [entity-id 1]
     (add-entity state entity-id components)))

  ([state entity-id components]
   (let [add-component-data (fn [accum component]
                              (add-component-to-entity accum entity-id component))]
     (reduce add-component-data state components))))


(defn rm-entity
  "Removes the entity from state."
  [state entity-id]
  (let [components (-> state (get-in [:entities entity-id])) ;; this is a set
        removed-from-entities (update state :entities dissoc entity-id)
        remove-component (fn [accum component]
                           (update-in accum [:components component] dissoc entity-id))]
    (reduce remove-component removed-from-entities components)))



(defn mk-add-entity-data-to-list
  "Returns a function which can be used to reduce a list of entity component data."
  [state component-ids optional-component-ids]

  (fn [list [entity-id]]
    (let [ok? (every? #(entity-has-component? state entity-id %) component-ids)
          get-component-data #(get-in state [:components % entity-id] nil)]
      (if ok?
        (conj list (vector entity-id (mapv get-component-data (into component-ids optional-component-ids))))
        list))))


(defn entities-with-components
  "Returns the ids and data of all entities that have all the requested components.
  Loop through the first component's entities. For each entity, check if the id exists in all
  the other component sets, if so then add a vector with data for each component in the
  order requested."

  ([state component-ids]
   (entities-with-components state component-ids nil))

  ([state component-ids optional-component-ids]
   (let [first-component-map (get-in state [:components (first component-ids)])]
     (reduce (mk-add-entity-data-to-list state component-ids optional-component-ids) [] first-component-map))))
