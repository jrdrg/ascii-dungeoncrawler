(ns adzerk.boot-reload (:require [adzerk.boot-reload.client :as client]))
(client/connect "ws://localhost:51227" {:on-jsload (fn* [] (+))})