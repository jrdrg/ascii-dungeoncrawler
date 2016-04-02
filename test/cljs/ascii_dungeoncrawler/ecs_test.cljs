(ns ascii-dungeoncrawler.ecs-test
  (:require [cljs.test :refer-macros [deftest is testing are]]
            [ascii-dungeoncrawler.ecs :as ecs]))

(enable-console-print!)


(def empty-state {:entities {}
                  :components {}})


(def initial-state {:entities {:entity1 #{:component1 :component2 :component3}}
                    :components {:component1 {:entity1 nil}
                                 :component2 {:entity1 {:a 1 :b 2}}
                                 :component3 {:entity1 nil}}})


(deftest get-entities-with-components-returns-vector
  (testing "Getting entities by component should return a vector"
      (let [expected [[:entity1 [{:a 1 :b 2} nil]]]
            actual (ecs/entities-with-components initial-state [:component2 :component3])]
        (is (= expected actual)))))


(deftest add-same-entity-should-overwrite
  (testing "Adding an entity with the same key should overwrite the previous value"
    (let [expected-state {:entities {:entity1 #{:component1 :component2}
                                     :entity2 #{:component2}}
                          :components {:component1 {:entity1 nil}
                                       :component2 {:entity1 {:a 1 :b 2}
                                                    :entity2 {:c 1 :d 1}}}}
          actual-state (-> initial-state
                           (ecs/add-entity :entity1 [[:component1] [:component2 {:a 1 :b 2}]])
                           (ecs/add-entity :entity2 [[:component2 {:c 1 :d 1}]]))]

      (are [expected actual] (= expected actual)
        (:entities expected-state) (:entities actual-state)
        (:components expected-state) (:components actual-state)))))


(deftest rm-entity-should-remove-the-entity
  (let [starting-state {:entities {:entity1 #{:component1 :component2}
                                   :entity2 #{:component2 :component3}}
                        :components {:component1 {:entity1 {:a 1 :b 2}}
                                     :component2 {:entity1 nil
                                                  :entity2 nil}
                                     :component3 {:entity2 {:c 1 :d 1}}}}
        expected-state {:entities {:entity2 #{:component2 :component3}}
                        :components {:component1 {}
                                     :component2 {:entity2 nil}
                                     :component3 {:entity2 {:c 1 :d 1}}}}
        actual-state (-> starting-state
                         (ecs/rm-entity :entity1))]

    (is (= expected-state actual-state))))


(deftest adding-component-to-entity
  (let [starting-state {:entities {}
                        :components {}}
        expected-state {:entities {:entity1 #{:component1}}
                        :components {:component1 {:entity1 nil}}}
        actual-state (-> starting-state
                         (ecs/add-component-to-entity :entity1 [:component1]))]

    (is (= expected-state actual-state))))
