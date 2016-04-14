(ns ascii-dungeoncrawler.core
  (:require [ascii-dungeoncrawler.pixi :as pixi]
            [ascii-dungeoncrawler.ecs :as ecs]
            [ascii-dungeoncrawler.systems.render :refer [mk-render-system]]
            [ascii-dungeoncrawler.systems.input :refer [input-system]]
            [ascii-dungeoncrawler.systems.movement :refer [movement-system]]
            [ascii-dungeoncrawler.systems.collision :refer [collision-system on-damaged]]
            [ascii-dungeoncrawler.systems.sprite :refer [mk-sprite-system]]
            [ascii-dungeoncrawler.systems.tilemap :refer [mk-tilemap-system]]))

(enable-console-print!)

(println "Loaded.")

;; True if the game is running
(defonce running (atom nil))
(defonce last-timestamp (atom nil))
(defonce debug-state (atom nil))

(defonce renderer (pixi/create-renderer!))


(defn initial-state
  [renderer stage]
  {:render {:renderer renderer
            :stage stage
            :sprites nil}
   :fps nil
   :last-entity-id 0
   :entities {}
   :components {}
   :systems {:input input-system
             :render (mk-render-system renderer stage)
             :sprite (mk-sprite-system renderer stage)
             :movement movement-system
             :collision collision-system
             :tilemap (mk-tilemap-system stage)
             }
   :screens {:title {:systems [:input
                               :render]
                     :on-enter nil
                     :on-leave nil}
             :game {:systems [:input
                              :movement
                              :collision
                              :tilemap
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

(defn mk-tree [idx]
  (fn [state] (ecs/add-entity state (str "tree" idx) [[:position {:pos [112 (+ 208 (* idx 16))]}]
                                                      [:sprite {:char "T" :draw? true :color 0x00ff00}]
                                                      ])))

(defn mk-tree2 [idx]
  (fn [state] (ecs/add-entity state (str "tree2" idx) [[:position {:pos [896 (+ 208 (* idx 16))]}]
                                                      [:sprite {:char "T" :draw? true :color 0x00ff00}]
                                                      [:collidable true]
                                                      ])))

(defn mk-x [idx]
  (fn [state] (ecs/add-entity state (str "x" idx) [[:position {:pos [(+ 208 (* idx 16)) 144]}]
                                                   [:collidable true]
                                                   [:sprite {:char "#" :draw? true :color 0x557799}]
                                                   ])))

(defn test-add-starting-entities
  [state]
  (-> state
      (ecs/add-entity :player [[:player]
                               [:input]
                               [:sprite {:char "@" :draw? true :color 0xffaa00}]
                               [:position {:pos [40 80]}]
                               [:velocity {:velocity [0 0]
                                           :acceleration [0 0]}]
                               [:collidable]])

      (ecs/add-entity :text1 [[:text {:text "Test text" :color 0x557799}]
                              [:position {:pos [60 70] }]])

      (ecs/add-entity :tree1 [[:position {:pos [100 200]}]
                              [:sprite {:char "T" :draw? true :color 0x00ff00}]])

      ((apply comp (map mk-x (range 20))))
      ((apply comp (map mk-tree (range 15))))
      ((apply comp (map mk-tree2 (range 20))))

      (ecs/add-entity :enemy1 [[:position {:pos [196 144]}]
                               [:cause-damage {:dmg 1}]
                               [:input]
                               [:ai {:behavior :search-player}]
                               [:sprite {:char "X" :draw? true :color 0xcc6690}]
                               [:collidable]])
      (ecs/add-entity :enemy2 [[:position {:pos [216 150]}]
                               [:cause-damage {:dmg 1}]
                               [:input]
                               [:ai {:behavior :search-player}]
                               [:sprite {:char "X" :draw? true :color 0xcc6690}]
                               [:collidable]])

      ))



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
        systems (map (fn [system-id]
                       (-> state :systems system-id))
                     system-ids)
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
  (let [{:keys [renderer stage]} (:render state)
        update-fn (:update-fn state)]
    (->> state
         (update-fn)
         (reset! debug-state))))


(defn update-fps
  "Updates frames per second in the state."
  [state]
  (let [now (.now js/performance)
        prev (or @last-timestamp now)
        diff (/ (- now prev) 1000)
        fps (/ 1 diff)]
    (reset! last-timestamp now)
    (assoc state :fps fps)))


(defn game-loop
  [state]
  (when state
    (request-animation #(-> state
                            (next-state)
                            (update-fps)
                            (game-loop)))))


(defn scale-stage!
  [stage]
  (aset stage "scale" (js/PIXI.Point. 2 2))
  stage)

(defn start-game!
  []
  (let [stage (pixi/create-container)
        view (.-view renderer)
        state (mk-update-fn (initial-state renderer stage))
        test-state (test-add-starting-entities state)
        ]

    (reset! running true)
    (set! (.-innerHTML (app-element)) nil)
    (append-to-dom! view)

    (game-loop test-state)))


;; Load images and then start running everything
(pixi/load-images! start-game!)
