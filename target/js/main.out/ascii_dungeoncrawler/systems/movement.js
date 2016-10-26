// Compiled by ClojureScript 1.7.170 {}
goog.provide('ascii_dungeoncrawler.systems.movement');
goog.require('cljs.core');
goog.require('ascii_dungeoncrawler.utils');
goog.require('ascii_dungeoncrawler.ecs');
cljs.core.enable_console_print_BANG_.call(null);
ascii_dungeoncrawler.systems.movement.speed = (3);
ascii_dungeoncrawler.systems.movement.max_velocity = (7);
ascii_dungeoncrawler.systems.movement.max_acceleration = (5);
ascii_dungeoncrawler.systems.movement.slow_down = 0.9;
ascii_dungeoncrawler.systems.movement.movement_offsets = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"up","up",-269712113),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(ascii_dungeoncrawler.systems.movement.speed * (-1))], null),new cljs.core.Keyword(null,"down","down",1565245570),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),ascii_dungeoncrawler.systems.movement.speed], null),new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(ascii_dungeoncrawler.systems.movement.speed * (-1)),(0)], null),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ascii_dungeoncrawler.systems.movement.speed,(0)], null)], null);
/**
 * Decreases velocity by a certain percentage each frame.
 */
ascii_dungeoncrawler.systems.movement.decrease_speed = (function ascii_dungeoncrawler$systems$movement$decrease_speed(velocity){
if((Math.abs(velocity) > (1))){
return (ascii_dungeoncrawler.systems.movement.slow_down * velocity);
} else {
return (0);
}
});
ascii_dungeoncrawler.systems.movement.new_position = (function ascii_dungeoncrawler$systems$movement$new_position(pos,vel){
return ascii_dungeoncrawler.utils.add_vectors.call(null,pos,vel);
});
ascii_dungeoncrawler.systems.movement.new_velocity = (function ascii_dungeoncrawler$systems$movement$new_velocity(vel,accel){
return ascii_dungeoncrawler.utils.add_vectors.call(null,vel,accel,ascii_dungeoncrawler.systems.movement.max_velocity);
});
ascii_dungeoncrawler.systems.movement.new_acceleration = (function ascii_dungeoncrawler$systems$movement$new_acceleration(p__7831,key){
var vec__7833 = p__7831;
var x = cljs.core.nth.call(null,vec__7833,(0),null);
var y = cljs.core.nth.call(null,vec__7833,(1),null);
var accel = cljs.core.get.call(null,ascii_dungeoncrawler.systems.movement.movement_offsets,key,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null));
return ascii_dungeoncrawler.utils.add_vectors.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),accel);
});
ascii_dungeoncrawler.systems.movement.mk_update_acceleration_fn = (function ascii_dungeoncrawler$systems$movement$mk_update_acceleration_fn(key){
return (function (current_acceleration){
return ascii_dungeoncrawler.systems.movement.new_acceleration.call(null,current_acceleration,key);
});
});
/**
 * Given a position component map and a set of input data for an entity, returns a new
 *   position component map with the entity's position updated to reflect that input data.
 */
ascii_dungeoncrawler.systems.movement.update_position_component_data = (function ascii_dungeoncrawler$systems$movement$update_position_component_data(component_map,p__7834){
var vec__7841 = p__7834;
var entity_id = cljs.core.nth.call(null,vec__7841,(0),null);
var vec__7842 = cljs.core.nth.call(null,vec__7841,(1),null);
var input_data = cljs.core.nth.call(null,vec__7842,(0),null);
var map__7843 = cljs.core.nth.call(null,vec__7842,(1),null);
var map__7843__$1 = ((((!((map__7843 == null)))?((((map__7843.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7843.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7843):map__7843);
var pos = cljs.core.get.call(null,map__7843__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));
var map__7844 = cljs.core.nth.call(null,vec__7842,(2),null);
var map__7844__$1 = ((((!((map__7844 == null)))?((((map__7844.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7844.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7844):map__7844);
var velocity = cljs.core.get.call(null,map__7844__$1,new cljs.core.Keyword(null,"velocity","velocity",-581524355));
if((cljs.core.seq.call(null,input_data)) || (cljs.core.not_EQ_.call(null,velocity,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null)))){
return cljs.core.assoc_in.call(null,component_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [entity_id,new cljs.core.Keyword(null,"next-pos","next-pos",1805528106)], null),ascii_dungeoncrawler.systems.movement.new_position.call(null,pos,velocity));
} else {
return component_map;
}
});
/**
 * Given a velocity component map and a set of input data for an entity, returns a new
 *   velocity component map with the entity's velocity updated to reflect that input data.
 */
ascii_dungeoncrawler.systems.movement.update_velocity_component_data = (function ascii_dungeoncrawler$systems$movement$update_velocity_component_data(component_map,p__7847){
var vec__7852 = p__7847;
var entity_id = cljs.core.nth.call(null,vec__7852,(0),null);
var vec__7853 = cljs.core.nth.call(null,vec__7852,(1),null);
var input_data = cljs.core.nth.call(null,vec__7853,(0),null);
var _ = cljs.core.nth.call(null,vec__7853,(1),null);
var map__7854 = cljs.core.nth.call(null,vec__7853,(2),null);
var map__7854__$1 = ((((!((map__7854 == null)))?((((map__7854.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7854.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7854):map__7854);
var velocity = cljs.core.get.call(null,map__7854__$1,new cljs.core.Keyword(null,"velocity","velocity",-581524355));
var acceleration = cljs.core.get.call(null,map__7854__$1,new cljs.core.Keyword(null,"acceleration","acceleration",-1213888421));
if((cljs.core.seq.call(null,input_data)) || (cljs.core.not_EQ_.call(null,velocity,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null))) || (cljs.core.not_EQ_.call(null,acceleration,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null)))){
var update_accel = cljs.core.apply.call(null,cljs.core.comp,cljs.core.map.call(null,ascii_dungeoncrawler.systems.movement.mk_update_acceleration_fn,input_data));
var next_accel = update_accel.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null));
var next_velocity = ascii_dungeoncrawler.systems.movement.new_velocity.call(null,cljs.core.mapv.call(null,ascii_dungeoncrawler.systems.movement.decrease_speed,velocity),next_accel);
return cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,component_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [entity_id,new cljs.core.Keyword(null,"velocity","velocity",-581524355)], null),next_velocity),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [entity_id,new cljs.core.Keyword(null,"acceleration","acceleration",-1213888421)], null),next_accel);
} else {
return component_map;
}
});
/**
 * System to handle moving entities based on input commands.
 */
ascii_dungeoncrawler.systems.movement.movement_system = (function ascii_dungeoncrawler$systems$movement$movement_system(state){
var entities = ascii_dungeoncrawler.ecs.entities_with_components.call(null,state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"velocity","velocity",-581524355)], null));
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.Keyword(null,"velocity","velocity",-581524355)], null),((function (entities){
return (function (p1__7856_SHARP_){
return cljs.core.reduce.call(null,ascii_dungeoncrawler.systems.movement.update_velocity_component_data,p1__7856_SHARP_,entities);
});})(entities))
),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.Keyword(null,"position","position",-2011731912)], null),((function (entities){
return (function (p1__7857_SHARP_){
return cljs.core.reduce.call(null,ascii_dungeoncrawler.systems.movement.update_position_component_data,p1__7857_SHARP_,entities);
});})(entities))
);
});

//# sourceMappingURL=movement.js.map