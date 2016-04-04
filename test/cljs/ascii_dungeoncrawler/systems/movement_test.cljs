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
                                            :entity3 {:pos [50 50]}}}})

(def speed movement/speed)


(deftest should-update-position
  (testing "Movement system should update position based on the keys in the input component"
    (let [expected-component-data {:entity1 {:pos [1 2]
                                             :next-pos [1 (- 2 speed)]}
                                   :entity2 {:pos [10 20]
                                             :next-pos [(- 10 speed) (+ 20 speed)]}
                                   :entity3 {:pos [50 50]
                                             :next-pos [(+ 50 speed) 50]}}
          new-state (movement/movement-system initial-state)]

      (are [expected actual] (= expected actual)
        expected-component-data (-> new-state :components :position)))))


(deftest should-ignore-unknown-keys
  (testing "If a non-movement key is pressed, the position should not be updated"
    (let [expected-component-data {:entity1 {:pos [1 2]
                                             :next-pos [1 (- 2 speed)]}
                                   :entity2 {:pos [10 20]
                                             :next-pos [10 20]}
                                   :entity3 {:pos [50 50]
                                             :next-pos [(+ 50 speed) 50]}}
          state-with-unknown-key (assoc-in initial-state [:components :input :entity2] #{:some-key})
          new-state (movement/movement-system state-with-unknown-key)]

      (are [expected actual] (= expected actual)
        expected-component-data (-> new-state :components :position)))))
