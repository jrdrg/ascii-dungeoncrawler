(ns ascii-dungeoncrawler.systems.render
  (:require [ascii-dungeoncrawler.pixi :as pixi]))


(defn mk-render-system
  [renderer stage]
  (fn [state]
    (pixi/render! renderer stage)
    state))
