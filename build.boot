(set-env!
 :source-paths #{"src/cljs"}
 :resource-paths #{"public"}

 :dependencies '[[org.clojure/clojure "1.7.0"]
                 [org.clojure/clojurescript "1.7.170"]
                 [adzerk/boot-cljs "1.7.170-3"]
                 [adzerk/boot-reload "0.4.1"]
                 [pandeiro/boot-http "0.7.0"]
                 [adzerk/boot-cljs-repl "0.3.0"]
                 [com.cemerick/piggieback "0.2.1"]     ;; needed by bREPL
                 [weasel "0.7.0"]                      ;; needed by bREPL
                 [org.clojure/tools.nrepl "0.2.12"]    ;; needed by bREPL
                 ])


(require '[adzerk.boot-cljs :refer [cljs]]
         '[adzerk.boot-reload :refer [reload]]
         '[pandeiro.boot-http :refer [serve]]
         '[adzerk.boot-cljs-repl :refer [cljs-repl start-repl]])



(deftask dev
  []
  (comp
   (serve :dir "target")
   (watch)
   (reload)
   (cljs-repl)
   (cljs :asset-path "public/js/out")
   (target :dir #{"target"})))
