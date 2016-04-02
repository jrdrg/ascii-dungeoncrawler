(ns ascii-dungeoncrawler.systems.movement-test
  (:require [cljs.test :refer-macros [deftest is testing are]]
            [ascii-dungeoncrawler.systems.movement :as movement]))


(def initial-state {:entities {:entity1 #{:input :player :position}
                               :entity2 #{:input :position}
                               :entity3 #{:input :position}
                               :entity4 #{:some-other-component}}
                    :components {:input {:entity1 #{:up}
                                         :entity2 #{:down :left}
                                         :entity3 #{:right}}
                                 :position {:entity1 {:pos {:x 1 :y 2}}
                                            :entity2 {:pos {:x 10 :y 20}}
                                            :entity3 {:pos {:x 50 :y 50}}}}})

(def speed movement/speed)


(deftest should-update-position
  (testing "Movement system should update position based on the keys in the input component"
    (let [expected-component-data {:entity1 {:pos {:x 1 :y 2}
                                             :next-pos {:x 1 :y (- 2 speed)}}
                                   :entity2 {:pos {:x 10 :y 20}
                                             :next-pos {:x (- 10 speed) :y (+ 20 speed)}}
                                   :entity3 {:pos {:x 50 :y 50}
                                             :next-pos {:x (+ 50 speed) :y 50}}}
          new-state (movement/movement-system initial-state)]
      (are [expected actual] (= expected actual)
        expected-component-data (-> new-state :components :position)))))


(deftest should-ignore-unknown-keys
  (testing "If a non-movement key is pressed, the position should not be updated"
    (let [expected-component-data {:entity1 {:pos {:x 1 :y 2}
                                             :next-pos {:x 1 :y (- 2 speed)}}
                                   :entity2 {:pos {:x 10 :y 20}
                                             :next-pos {:x 10 :y 20}}
                                   :entity3 {:pos {:x 50 :y 50}
                                             :next-pos {:x (+ 50 speed) :y 50}}}
          state-with-unknown-key (assoc-in initial-state [:components :input :entity2] #{:some-key})
          new-state (movement/movement-system state-with-unknown-key)]
      (are [expected actual] (= expected actual)
        expected-component-data (-> new-state :components :position)))))
