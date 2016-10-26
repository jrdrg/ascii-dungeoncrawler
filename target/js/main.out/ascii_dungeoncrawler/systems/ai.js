// Compiled by ClojureScript 1.7.170 {}
goog.provide('ascii_dungeoncrawler.systems.ai');
goog.require('cljs.core');
goog.require('ascii_dungeoncrawler.ecs');
ascii_dungeoncrawler.systems.ai.determine_next_position = (function ascii_dungeoncrawler$systems$ai$determine_next_position(position_component_map,p__7824){
var vec__7827 = p__7824;
var entity_id = cljs.core.nth.call(null,vec__7827,(0),null);
var vec__7828 = cljs.core.nth.call(null,vec__7827,(1),null);
var ai_data = cljs.core.nth.call(null,vec__7828,(0),null);
var position_data = cljs.core.nth.call(null,vec__7828,(1),null);
var velocity_data = cljs.core.nth.call(null,vec__7828,(2),null);
return null;
});
ascii_dungeoncrawler.systems.ai.ai_system = (function ascii_dungeoncrawler$systems$ai$ai_system(state){
var entities = ascii_dungeoncrawler.ecs.entities_with_components.call(null,state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ai","ai",760454697),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"velocity","velocity",-581524355)], null));
return state;
});

//# sourceMappingURL=ai.js.map