(ns ascii-dungeoncrawler.systems.input-test
  (:require [cljs.test :refer-macros [deftest is testing are]]
            [ascii-dungeoncrawler.systems.input :as input]))


(def initial-state {:entities {:entity1 #{:input :player}
                               :entity2 #{:input}
                               :entity3 #{:some-other-component}}
                    :components {:input {:entity1 #{:A}
                                         :entity2 nil}}})


(deftest should-update-components-with-keys
  (testing "Running the input system should populate only entities having a player component with the keys being pressed"
      (with-redefs [input/keyState (atom {:keys #{:up :b}})]
        (let [expected-component-data {:entity1 #{:up :b}
                                       :entity2 nil}
              new-state (input/input-system initial-state)]

          (are [expected actual] (= expected actual)
            expected-component-data (-> new-state :components :input))))))


(deftest same-key-mappings-should-be-unique
  (testing "If two keys with the same mapping are pressed, only one input should be registered"
      (with-redefs [input/keyState (atom {:keys #{:up :W}})]
        (let [expected-component-data {:entity1 #{:up}
                                       :entity2 nil}
              new-state (input/input-system initial-state)]

          (are [expected actual] (= expected actual)
            expected-component-data (-> new-state :components :input))))))
