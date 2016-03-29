(ns ascii-dungeoncrawler.systems.input
  (:require [ascii-dungeoncrawler.ecs :as ecs]))

(defonce keyState (atom nil))

(def state-keys-down [:keys-down])

(def arrow-keys {38 :up
                 40 :down
                 37 :left
                 39 :right})

(defn keyCode->arrow
  [keyCode]
  (or (get arrow-keys keyCode) (String.fromCharCode keyCode)))


(defn keydown
  [e]
  (.preventDefault e)
  (let [keyCode (keyCode->arrow (aget e "keyCode"))]
    (println (str "key down " keyCode " " (aget e "keyCode")))
    (swap! keyState update-in [:keys] #(conj % (keyword keyCode)))))


(defn keyup
  [e]
  (.preventDefault e)
  (let [keyCode (keyCode->arrow (aget e "keyCode"))]
    (println (str "key up " keyCode))
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


(defn input-system
  [state]
  (let [entity-ids (ecs/entities-with-components state [:input])
        keys (:keys @keyState)
        keys->state (fn [key] state)]
    (if keys
      ;; for every entity in entity-ids, assoc (:keys keyState)
      (assoc-in state state-keys-down {}) ;;
      (do
        (init-keyboard-events!)
        state))))
