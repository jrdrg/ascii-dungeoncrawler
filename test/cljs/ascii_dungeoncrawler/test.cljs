(ns ascii-dungeoncrawler.test
  (:require-macros [expectations.cljs :as ecljs])
  (:require [expectations :refer-macros [expect]]
            ;; [cljs.test :refer-macros [deftest is testing run-tests run-all-tests]]
            [ascii-dungeoncrawler.ecs-test]))


;; (run-all-tests #"ascii-dungeoncrawler.*-test")
;; (run-tests)

;; (ecljs/run-all-tests)

(defn -main []
  (println "Running tests")
  (ecljs/run-all-tests))


(enable-console-print!)
(set! *main-cli-fn* -main)
