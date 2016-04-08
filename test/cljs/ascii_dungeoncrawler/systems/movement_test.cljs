(ns ascii-dungeoncrawler.systems.movement-test
  (:require [cljs.test :refer-macros [deftest is testing are]]
            [ascii-dungeoncrawler.systems.movement :as movement]))


(def initial-state {:entities {:entity1 #{:input :player :position :velocity}
                               :entity2 #{:input :position :velocity}
                               :entity3 #{:input :position :velocity}
                               :entity4 #{:some-other-component}}
                    :components {:input {:entity1 #{:up}
                                         :entity2 #{:down :left}
                                         :entity3 #{:right}}
                                 :position {:entity1 {:pos [1 2]}
                                            :entity2 {:pos [10 20]}
                                            :entity3 {:pos [50 50]}}
                                 :velocity {:entity1 {:velocity [0 0]
                                                      :acceleration [0 0]}}}})

(def speed movement/speed)


(deftest should-update-position
  (testing "Movement system should update position based on the velocity, and velocity based on the input keys"
    (let [existing-velocity-state (assoc-in initial-state [:components :velocity] {:entity1 {:velocity [0 -3]}
                                                                                   :entity2 {:velocity [-3 3]}
                                                                                   :entity3 {:velocity [3 0]}})
          expected-position-data {:entity1 {:pos [1 2]
                                            :next-pos [1 (- 2 speed)]}
                                  :entity2 {:pos [10 20]
                                            :next-pos [(- 10 speed) (+ 20 speed)]}
                                  :entity3 {:pos [50 50]
                                            :next-pos [(+ 50 speed) 50]}}
          expected-velocity-data {:entity1 {:velocity [0 -3]
                                            :acceleration [0 -3]}
                                  :entity2 {:velocity [-3 3]
                                            :acceleration [-3 3]}
                                  :entity3 {:velocity [3 0]
                                            :acceleration [3 0]}}]

      (are [expected actual] (= expected actual)
        expected-position-data (-> (movement/movement-system existing-velocity-state) :components :position)
        expected-velocity-data (-> (movement/movement-system initial-state) :components :velocity)))))


;; (deftest should-ignore-unknown-keys
;;   (testing "If a non-movement key is pressed, the position should not be updated, but the velocity should be."
;;     (let [expected-position-data {:entity1 {:pos [1 2]
;;                                              :next-pos [1 (- 2 speed)]}
;;                                    :entity2 {:pos [10 20]
;;                                              :next-pos [10 20]}
;;                                    :entity3 {:pos [50 50]
;;                                              :next-pos [(+ 50 speed) 50]}}
;;           expected-velocity-data {:entity1 {:velocity [0 -3]
;;                                             :acceleration [0 -3]}
;;                                   :entity2 {:velocity [0 0]
;;                                             :acceleration [0 0]}
;;                                   :entity3 {:velocity [3 0]
;;                                             :acceleration [3 0]}}
;;           state-with-unknown-key (assoc-in initial-state [:components :input :entity2] #{:some-key})
;;           new-state (movement/movement-system state-with-unknown-key)]

;;       (are [expected actual] (= expected actual)
;;         expected-position-data (-> new-state :components :position)
;;         expected-velocity-data (-> new-state :components :velocity)))))
