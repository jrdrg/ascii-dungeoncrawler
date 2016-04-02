(set-env!
 :source-paths #{"src/cljs"}
 :resource-paths #{"public"}

 :dependencies '[[org.clojure/clojure "1.7.0"]
                 [org.clojure/clojurescript "1.7.170"]
                 [adzerk/boot-cljs "1.7.170-3"]
                 [adzerk/boot-reload "0.4.1"]
                 [adzerk/boot-test          "1.1.0"  :scope "test"]
                 [pandeiro/boot-http "0.7.0"]
                 [adzerk/boot-cljs-repl "0.3.0"]
                 [com.cemerick/piggieback "0.2.1"]     ;; needed by bREPL
                 [weasel "0.7.0"]                      ;; needed by bREPL
                 [org.clojure/tools.nrepl "0.2.12"]    ;; needed by bREPL
                 [crisptrutski/boot-cljs-test "0.2.2-SNAPSHOT"]
                 [expectations "2.1.4"]
                 [seancorfield/boot-expectations "1.0.7"]])

(require '[adzerk.boot-cljs :refer [cljs]]
         '[adzerk.boot-reload :refer [reload]]
         '[adzerk.boot-test :refer [test]]
         '[pandeiro.boot-http :refer [serve]]
         '[adzerk.boot-cljs-repl :refer [cljs-repl start-repl]]
         '[crisptrutski.boot-cljs-test :refer [test-cljs prep-cljs-tests run-cljs-tests]]
         '[seancorfield.boot-expectations :refer :all])

(task-options!
 ;; repl {:init-ns 'ascii-dungeoncrawler.core}
 test-cljs {:js-env :phantom}
 run-cljs-tests {:js-env :phantom}
 expectations {:include #"ascii-dungeoncrawler"})


(deftask dev
  []
  (comp
   (serve :dir "target")
   (watch)
   (reload)
   (cljs-repl)
   (cljs)
   (target :dir #{"target"})))


(deftask run-tests
  []
  (comp
   (watch)
   (test-cljs)))

(deftask run-expectations
  []
  (set-env! :source-paths #(conj % "test/cljs"))
  (comp
   ;; (watch)
   (cljs)
   (expectations)
   (target :dir #{"target"})
   ))

(deftask dev-tests
  []
  (set-env! :source-paths #(conj % "test/cljs"))
  (comp
   (serve :dir "target")
   (watch)
   (reload)
   (test-cljs)
   (cljs-repl)
   ;; (prep-cljs-tests :out-file "output.js"
   ;;                  :suite-ns 'cljs-test.suite)
   (cljs)
   ;; (run-cljs-tests)
   (target :dir #{"target"})))
