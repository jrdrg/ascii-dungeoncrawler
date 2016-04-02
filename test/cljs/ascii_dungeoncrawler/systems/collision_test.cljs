(ns ascii-dungeoncrawler.systems.collision-test
  (:require [cljs.test :refer-macros [deftest is testing are]]
            [ascii-dungeoncrawler.systems.collision :as collision]))



(deftest between-test
  (testing "Check if a number is between two other numbers"
    (are [actual expected] (= actual expected)
      (collision/between? 2 3 6)   true
      (collision/between? 4 3 5)   false
      (collision/between? 0 0 0)   true
      (collision/between? -5 4 10) true
      (collision/between? 6 6 7)   true)))


(deftest rect-intersects-test
  (testing "Check if two rectangles intersect"
    (are [actual expected] (= actual expected)
      (collision/rect-intersects? [1 1 10 10] [5 5 15 15])     true
      (collision/rect-intersects? [1 1 10 10] [1 1 20 20])     true
      (collision/rect-intersects? [1 1 10 10] [1 5 50 50])     true
      (collision/rect-intersects? [1 1 10 10] [1 10 10 20])    true
      (collision/rect-intersects? [10 10 20 20] [1 1 10 10])   true
      (collision/rect-intersects? [10 10 20 20] [10 20 50 50]) true
      (collision/rect-intersects? [1 1 10 10] [10 1 30 30])    true
      (collision/rect-intersects? [10 10 20 20] [1 1 5 5])     false
      (collision/rect-intersects? [1 1 10 10] [11 11 20 20])   false
      (collision/rect-intersects? [10 10 20 20] [10 30 50 50]) false)))


(deftest collides-test
  (testing "Check if two sprites of size <tile-size> collide"
    (are [actual expected] (= actual expected)
      (collision/collides? [1 1] [14 14]) true
      (collision/collides? [1 1] [18 18]) false)))
