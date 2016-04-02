(ns ascii-dungeoncrawler.systems.input
  (:require [ascii-dungeoncrawler.ecs :as ecs]))

(defonce keyState (atom nil))

(def state-keys-down [:keys-down])

(def arrow-keys {38 :up
                 40 :down
                 37 :left
                 39 :right
                 32 :space})


(defn keyCode->arrow
  [keyCode]
  (or (get arrow-keys keyCode) (String.fromCharCode keyCode)))


(defn keydown
  [e]
  (.preventDefault e)
  (let [keyCode (keyCode->arrow (aget e "keyCode"))]
    (swap! keyState update-in [:keys] #(conj % (keyword keyCode)))))


(defn keyup
  [e]
  (.preventDefault e)
  (let [keyCode (keyCode->arrow (aget e "keyCode"))]
    (swap! keyState update-in [:keys] #(disj % (keyword keyCode)))))


(defn init-keyboard-events!
  []
  (println "Initializing keyboard event handlers")
  (.addEventListener js/document "keydown" keydown)
  (.addEventListener js/document "keyup" keyup)
  (reset! keyState {:keys #{}
                    :remove-keydown #(.removeEventListener js/document "keydown" keydown)
                    :remove-keyup #(.removeEventListener js/document "keyup" keyup)}))


(defn reset-key-state!
  "Debug method to be used from REPL in case input event listeners should be changed"
  []
  (println "Resetting key handlers")
  (doseq [handler [:remove-keydown :remove-keyup]]
    ((handler @keyState)))
  (init-keyboard-events!))


(defn map-input-key
  [key]
  (condp contains? key
    #{:up :W} :up
    #{:down :S} :down
    #{:left :A} :left
    #{:right :D} :right
    key))


(defn input-system
  [state]
  (let [entities (ecs/entities-with-components state [:input :player])
        keys (:keys @keyState)
        input-data (get-in state [:components :input])]
    (if keys
      (-> state
          (assoc-in [:components :input] (reduce (fn [accum [entity-id _]]
                                                   (-> accum
                                                       (assoc entity-id (->> keys (map map-input-key) (set)))))
                                                 input-data
                                                 entities)))
      (do
        (init-keyboard-events!)
        state))))
