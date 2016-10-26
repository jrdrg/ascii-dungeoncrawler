(ns ascii-dungeoncrawler.utils)


(defn clamp
  [val min max]
  (.max js/Math min (.min js/Math val max)))


(defn add-vectors
  "Adds two [x y] vectors. Optionally, clamps the values between -max and +max."
  ([[x1 y1] [x2 y2]]
   (mapv + [x1 y1] [x2 y2]))

  ([[x1 y1] [x2 y2] max]
   [(-> x1 (+ x2) (clamp (* -1 max) max))
    (-> y1 (+ y2) (clamp (* -1 max) max))]))
