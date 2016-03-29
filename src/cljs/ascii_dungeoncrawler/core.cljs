(ns ascii-dungeoncrawler.core
  (:require [ascii-dungeoncrawler.pixi :as pixi]
            [ascii-dungeoncrawler.ecs :as ecs]
            [ascii-dungeoncrawler.systems.render :refer [mk-render-system]]
            [ascii-dungeoncrawler.systems.input :refer [input-system]]
            [ascii-dungeoncrawler.systems.sprite :refer [mk-sprite-system]]))

(enable-console-print!)

(println "Loaded.")

;; True if the game is running
(defonce running (atom nil))
(defonce debug-state (atom nil))


(defn initial-state
  [renderer stage]
  {:render {:renderer renderer
            :stage stage
            :sprites nil}
   :entities {}
   :components {}
   :systems {:input input-system
             :render (mk-render-system renderer stage)
             :sprite (mk-sprite-system renderer stage)
             }
   :screens {:title {:systems [:input
                               :render]
                     :on-enter nil
                     :on-leave nil}
             :game {:systems [:input
                              :sprite
                              :render]
                    :on-enter nil
                    :on-leave nil}
             :game-over {:systems [:input
                                   :render]
                         :on-enter nil
                         :on-leave nil}}
   :current-screen :game
   :update-fn nil
   })


(defn test-add-starting-entities
  [state]
  (-> state
      (ecs/add-entity :entity1 [[:text {:text "Test text" :color 0x557799}]
                                [:input]
                                [:sprite {:char "@" :draw true :color 0xff0000}]
                                [:moveable {}]
                                [:position {:x 40 :y 80}]
                                [:renderable]])
      (ecs/add-entity :entity2 [[:moveable {}]
                                [:position {:x 100 :y 200}]
                                [:renderable]])
      (ecs/add-entity :entity3 [[:position {:x 200 :y 150}]
                                [:sprite {:char "X" :draw true :color 0x00ff00}]])))



(defn app-element
  "DOM element to render the canvas into"
  []
  (.getElementById js/document "app"))


(defn request-animation
  [fn]
  (.requestAnimationFrame js/window fn))


(defn append-to-dom!
  [element]
  (.appendChild (app-element) element))


(defn get-systems-in-screen
  "Returns an ordered list of the systems in the current screen."
  ([state]
   (let [current-screen (:current-screen state)]
     (get-systems-in-screen state current-screen)))
  ([state screen]
   (-> state :screens screen :systems)))


(defn mk-update-fn
  "Creates an update function for the current screen."
  [state]
  (let [current-screen (:current-screen state)
        system-ids (get-systems-in-screen state)
        systems (map (fn [system-id] (-> state :systems system-id)) system-ids)
        update-fn (apply comp (reverse systems))]
    (assoc state :update-fn update-fn)))


(defn change-screen
  "Changes the current screen. Calls the on-leave method of the previous screen, and
  the on-enter method of the new screen."
  [state new-screen]
  (let [current-screen (:current-screen state)
        exit-fn (get-in state [:screens current-screen :on-leave])
        enter-fn (get-in state [:screens new-screen :on-enter])]
    (-> state
        (exit-fn)
        (enter-fn)
        (assoc :current-screen new-screen)
        (mk-update-fn))))


(defn next-state
  [state]
  (let [{:keys [renderer stage]} (-> state :render)
        update-fn (-> state :update-fn)]
    (->> state
         (update-fn)
         (reset! debug-state))))


(defn game-loop
  [state]
  (when state
    (request-animation #(-> state
                            (next-state)
                            (game-loop)))))


(defn scale-stage!
  [stage]
  (aset stage "scale" (js/PIXI.Point. 2 2))
  stage)

(defn start-game!
  []
  (let [stage (pixi/create-container)
        renderer (pixi/create-renderer)
        view (.-view renderer)
        state (mk-update-fn (initial-state renderer stage))
        test-state (test-add-starting-entities state)
        ]

    (reset! running true)
    (set! (.-innerHTML (app-element)) nil)
    (append-to-dom! view)

    (game-loop test-state)
    ))


;; Load images and then start running everything
(pixi/load-images! (fn []
                     (start-game!)))
