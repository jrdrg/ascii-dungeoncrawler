(ns ascii-dungeoncrawler.systems.ai
  (:require [ascii-dungeoncrawler.ecs :as ecs]))



(defn determine-next-position
 [position-component-map [entity-id [ai-data position-data velocity-data]]]
 )


(defn ai-system
  [state]
  (let [entities (ecs/entities-with-components state [:ai :position :velocity])]
    state))
