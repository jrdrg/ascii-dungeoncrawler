// Compiled by ClojureScript 1.7.170 {}
goog.provide('ascii_dungeoncrawler.systems.collision');
goog.require('cljs.core');
goog.require('ascii_dungeoncrawler.constants');
goog.require('ascii_dungeoncrawler.utils');
goog.require('ascii_dungeoncrawler.ecs');
ascii_dungeoncrawler.systems.collision.on_damaged = (function ascii_dungeoncrawler$systems$collision$on_damaged(entity1,entity2){
return null;
});
ascii_dungeoncrawler.systems.collision.on_blocked = (function ascii_dungeoncrawler$systems$collision$on_blocked(entity1,entity2){
return null;
});
ascii_dungeoncrawler.systems.collision.between_QMARK_ = (function ascii_dungeoncrawler$systems$collision$between_QMARK_(min,value,max){
return ((min <= value)) && ((max >= value));
});
/**
 * Returns [x y w h] of a rectangle at [x y] with height and width equal to tile-size.
 */
ascii_dungeoncrawler.systems.collision.get_tile_rect = (function ascii_dungeoncrawler$systems$collision$get_tile_rect(x,y){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,(x + ascii_dungeoncrawler.constants.tile_size),(y + ascii_dungeoncrawler.constants.tile_size)], null);
});
ascii_dungeoncrawler.systems.collision.rect_intersects_QMARK_ = (function ascii_dungeoncrawler$systems$collision$rect_intersects_QMARK_(p__7518,p__7519){
var vec__7522 = p__7518;
var left1 = cljs.core.nth.call(null,vec__7522,(0),null);
var top1 = cljs.core.nth.call(null,vec__7522,(1),null);
var right1 = cljs.core.nth.call(null,vec__7522,(2),null);
var bottom1 = cljs.core.nth.call(null,vec__7522,(3),null);
var vec__7523 = p__7519;
var left2 = cljs.core.nth.call(null,vec__7523,(0),null);
var top2 = cljs.core.nth.call(null,vec__7523,(1),null);
var right2 = cljs.core.nth.call(null,vec__7523,(2),null);
var bottom2 = cljs.core.nth.call(null,vec__7523,(3),null);
var c1 = (left1 < right2);
var c2 = (right1 > left2);
var c3 = (top1 < bottom2);
var c4 = (bottom1 > top2);
return (c1) && (c2) && (c3) && (c4);
});
ascii_dungeoncrawler.systems.collision.collides_QMARK_ = (function ascii_dungeoncrawler$systems$collision$collides_QMARK_(p__7524,p__7525){
var vec__7530 = p__7524;
var x1 = cljs.core.nth.call(null,vec__7530,(0),null);
var y1 = cljs.core.nth.call(null,vec__7530,(1),null);
var vec__7531 = p__7525;
var x2 = cljs.core.nth.call(null,vec__7531,(0),null);
var y2 = cljs.core.nth.call(null,vec__7531,(1),null);
var vec__7532 = ascii_dungeoncrawler.systems.collision.get_tile_rect.call(null,x1,y1);
var _ = cljs.core.nth.call(null,vec__7532,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__7532,(1),null);
var x1m = cljs.core.nth.call(null,vec__7532,(2),null);
var y1m = cljs.core.nth.call(null,vec__7532,(3),null);
var vec__7533 = ascii_dungeoncrawler.systems.collision.get_tile_rect.call(null,x2,y2);
var ___$2 = cljs.core.nth.call(null,vec__7533,(0),null);
var ___$3 = cljs.core.nth.call(null,vec__7533,(1),null);
var x2m = cljs.core.nth.call(null,vec__7533,(2),null);
var y2m = cljs.core.nth.call(null,vec__7533,(3),null);
return ascii_dungeoncrawler.systems.collision.rect_intersects_QMARK_.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [x1,y1,x1m,y1m], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [x2,y2,x2m,y2m], null));
});
ascii_dungeoncrawler.systems.collision.moved_QMARK_ = (function ascii_dungeoncrawler$systems$collision$moved_QMARK_(pos,next_pos){
return cljs.core.not_EQ_.call(null,pos,next_pos);
});
/**
 * Transforms a vector of entity position component data to [x y] form.
 *   Data is in the form [:entity-id [{:pos {:x 1 :y 1}}]]
 */
ascii_dungeoncrawler.systems.collision.entity__GT_pos = (function ascii_dungeoncrawler$systems$collision$entity__GT_pos(p__7534){
var vec__7540 = p__7534;
var entity_id = cljs.core.nth.call(null,vec__7540,(0),null);
var vec__7541 = cljs.core.nth.call(null,vec__7540,(1),null);
var map__7542 = cljs.core.nth.call(null,vec__7541,(0),null);
var map__7542__$1 = ((((!((map__7542 == null)))?((((map__7542.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7542.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7542):map__7542);
var vec__7543 = cljs.core.get.call(null,map__7542__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));
var x = cljs.core.nth.call(null,vec__7543,(0),null);
var y = cljs.core.nth.call(null,vec__7543,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null);
});
/**
 * Returns a map of all collisions for the given [x y] coordinates.
 */
ascii_dungeoncrawler.systems.collision.get_collisions = (function ascii_dungeoncrawler$systems$collision$get_collisions(p__7546,entities){
var vec__7554 = p__7546;
var x = cljs.core.nth.call(null,vec__7554,(0),null);
var y = cljs.core.nth.call(null,vec__7554,(1),null);
var collided_with_QMARK_ = cljs.core.partial.call(null,cljs.core.filter,((function (vec__7554,x,y){
return (function (p1__7545_SHARP_){
return ascii_dungeoncrawler.systems.collision.collides_QMARK_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),ascii_dungeoncrawler.systems.collision.entity__GT_pos.call(null,p1__7545_SHARP_));
});})(vec__7554,x,y))
);
var get_position = cljs.core.partial.call(null,cljs.core.map,((function (collided_with_QMARK_,vec__7554,x,y){
return (function (p__7555){
var vec__7556 = p__7555;
var entity_id = cljs.core.nth.call(null,vec__7556,(0),null);
var vec__7557 = cljs.core.nth.call(null,vec__7556,(1),null);
var map__7558 = cljs.core.nth.call(null,vec__7557,(0),null);
var map__7558__$1 = ((((!((map__7558 == null)))?((((map__7558.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7558.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7558):map__7558);
var vec__7559 = cljs.core.get.call(null,map__7558__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));
var px = cljs.core.nth.call(null,vec__7559,(0),null);
var py = cljs.core.nth.call(null,vec__7559,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [entity_id,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [px,py], null)], null);
});})(collided_with_QMARK_,vec__7554,x,y))
);
var collisions__GT_vec = cljs.core.comp.call(null,get_position,collided_with_QMARK_);
return collisions__GT_vec.call(null,entities);
});
ascii_dungeoncrawler.systems.collision.order_coords = (function ascii_dungeoncrawler$systems$collision$order_coords(min1,max1,min2,max2){
if((min1 < min2)){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [min1,max1,min2,max2,(1)], null);
} else {
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [min2,max2,min1,max1,(-1)], null);
}
});
/**
 * Returns a vector representing the amount that the two rectangles overlap by.
 */
ascii_dungeoncrawler.systems.collision.intersect_amounts = (function ascii_dungeoncrawler$systems$collision$intersect_amounts(p__7561,p__7562){
var vec__7569 = p__7561;
var x1 = cljs.core.nth.call(null,vec__7569,(0),null);
var y1 = cljs.core.nth.call(null,vec__7569,(1),null);
var vec__7570 = p__7562;
var x2 = cljs.core.nth.call(null,vec__7570,(0),null);
var y2 = cljs.core.nth.call(null,vec__7570,(1),null);
if(cljs.core.truth_(ascii_dungeoncrawler.systems.collision.collides_QMARK_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x1,y1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x2,y2], null)))){
var vec__7571 = ascii_dungeoncrawler.systems.collision.get_tile_rect.call(null,x1,y1);
var _ = cljs.core.nth.call(null,vec__7571,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__7571,(1),null);
var x1m = cljs.core.nth.call(null,vec__7571,(2),null);
var y1m = cljs.core.nth.call(null,vec__7571,(3),null);
var vec__7572 = ascii_dungeoncrawler.systems.collision.get_tile_rect.call(null,x2,y2);
var ___$2 = cljs.core.nth.call(null,vec__7572,(0),null);
var ___$3 = cljs.core.nth.call(null,vec__7572,(1),null);
var x2m = cljs.core.nth.call(null,vec__7572,(2),null);
var y2m = cljs.core.nth.call(null,vec__7572,(3),null);
var vec__7573 = ascii_dungeoncrawler.systems.collision.order_coords.call(null,x1,x1m,x2,x2m);
var x1_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__7573,(0),null);
var x1m_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__7573,(1),null);
var x2_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__7573,(2),null);
var x2m_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__7573,(3),null);
var sign_x = cljs.core.nth.call(null,vec__7573,(4),null);
var vec__7574 = ascii_dungeoncrawler.systems.collision.order_coords.call(null,y1,y1m,y2,y2m);
var y1_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__7574,(0),null);
var y1m_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__7574,(1),null);
var y2_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__7574,(2),null);
var y2m_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__7574,(3),null);
var sign_y = cljs.core.nth.call(null,vec__7574,(4),null);
var x_amount = (sign_x * (x1m_SINGLEQUOTE_ - x2_SINGLEQUOTE_));
var y_amount = (sign_y * (y1m_SINGLEQUOTE_ - y2_SINGLEQUOTE_));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_amount,y_amount], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null);
}
});
/**
 * Given [x1 y1] and its velocity, returns a new vector [x1' y1'] representing the new position
 *   to avoid collision with [x2 y2]. Adjusts the dimension with the smallest intersection amount first.
 */
ascii_dungeoncrawler.systems.collision.adjust_position = (function ascii_dungeoncrawler$systems$collision$adjust_position(p1,p2,p__7576){
var vec__7582 = p__7576;
var vel_x = cljs.core.nth.call(null,vec__7582,(0),null);
var vel_y = cljs.core.nth.call(null,vec__7582,(1),null);
var neg = cljs.core.partial.call(null,cljs.core._STAR_,(-1));
var vec__7583 = ascii_dungeoncrawler.systems.collision.intersect_amounts.call(null,p1,p2);
var int_x = cljs.core.nth.call(null,vec__7583,(0),null);
var int_y = cljs.core.nth.call(null,vec__7583,(1),null);
var vec__7584 = cljs.core.mapv.call(null,((function (neg,vec__7583,int_x,int_y,vec__7582,vel_x,vel_y){
return (function (p1__7575_SHARP_){
return Math.abs(p1__7575_SHARP_);
});})(neg,vec__7583,int_x,int_y,vec__7582,vel_x,vel_y))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [int_x,int_y], null));
var abs_int_x = cljs.core.nth.call(null,vec__7584,(0),null);
var abs_int_y = cljs.core.nth.call(null,vec__7584,(1),null);
if((abs_int_x < abs_int_y)){
var x_adjusted = ascii_dungeoncrawler.utils.add_vectors.call(null,p1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [neg.call(null,int_x),(0)], null));
var vec__7585 = ascii_dungeoncrawler.systems.collision.intersect_amounts.call(null,x_adjusted,p2);
var _ = cljs.core.nth.call(null,vec__7585,(0),null);
var intersect_y = cljs.core.nth.call(null,vec__7585,(1),null);
return ascii_dungeoncrawler.utils.add_vectors.call(null,x_adjusted,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),neg.call(null,intersect_y)], null));
} else {
if((abs_int_x > abs_int_y)){
var y_adjusted = ascii_dungeoncrawler.utils.add_vectors.call(null,p1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),neg.call(null,int_y)], null));
var vec__7586 = ascii_dungeoncrawler.systems.collision.intersect_amounts.call(null,y_adjusted,p2);
var intersect_x = cljs.core.nth.call(null,vec__7586,(0),null);
var _ = cljs.core.nth.call(null,vec__7586,(1),null);
return ascii_dungeoncrawler.utils.add_vectors.call(null,y_adjusted,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [neg.call(null,intersect_x),(0)], null));
} else {
return p1;

}
}
});
ascii_dungeoncrawler.systems.collision.update_entity_position = (function ascii_dungeoncrawler$systems$collision$update_entity_position(component_map,entity_id,position){
return cljs.core.assoc_in.call(null,component_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [entity_id,new cljs.core.Keyword(null,"pos","pos",-864607220)], null),cljs.core.mapv.call(null,(function (p1__7587_SHARP_){
return Math.round(p1__7587_SHARP_);
}),position));
});
ascii_dungeoncrawler.systems.collision.update_entity_velocity_if_stopped = (function ascii_dungeoncrawler$systems$collision$update_entity_velocity_if_stopped(component_map,entity_id,stopped_QMARK_){
if(cljs.core.truth_(stopped_QMARK_)){
return cljs.core.assoc_in.call(null,component_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [entity_id,new cljs.core.Keyword(null,"velocity","velocity",-581524355)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null));
} else {
return component_map;
}
});
ascii_dungeoncrawler.systems.collision.calculate_next_position = (function ascii_dungeoncrawler$systems$collision$calculate_next_position(position,next_pos,velocity,other_entities){
var adjusted = cljs.core.reduce.call(null,(function (accum_pos,p__7593){
var vec__7594 = p__7593;
var entity_id = cljs.core.nth.call(null,vec__7594,(0),null);
var vec__7595 = cljs.core.nth.call(null,vec__7594,(1),null);
var position_data = cljs.core.nth.call(null,vec__7595,(0),null);
var _ = cljs.core.nth.call(null,vec__7595,(1),null);
var collidable_data = cljs.core.nth.call(null,vec__7595,(2),null);
var map__7596 = position_data;
var map__7596__$1 = ((((!((map__7596 == null)))?((((map__7596.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7596.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7596):map__7596);
var other_pos = cljs.core.get.call(null,map__7596__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));
if(cljs.core.truth_((function (){var and__4976__auto__ = collidable_data;
if(cljs.core.truth_(and__4976__auto__)){
return ascii_dungeoncrawler.systems.collision.collides_QMARK_.call(null,accum_pos,other_pos);
} else {
return and__4976__auto__;
}
})())){
return ascii_dungeoncrawler.systems.collision.adjust_position.call(null,accum_pos,other_pos,velocity);
} else {
return accum_pos;
}
}),next_pos,other_entities);
return adjusted;
});
/**
 * Returns a function that checks if the entity is colliding with any
 *   of the other entities in entities-with-position before returning a
 *   component map with updated position values.
 */
ascii_dungeoncrawler.systems.collision.mk_update_position_component_data = (function ascii_dungeoncrawler$systems$collision$mk_update_position_component_data(entities_with_position){
return (function (component_map,p__7605){
var vec__7606 = p__7605;
var entity_id = cljs.core.nth.call(null,vec__7606,(0),null);
var vec__7607 = cljs.core.nth.call(null,vec__7606,(1),null);
var position_data = cljs.core.nth.call(null,vec__7607,(0),null);
var velocity_data = cljs.core.nth.call(null,vec__7607,(1),null);
var entity = vec__7606;
var map__7608 = position_data;
var map__7608__$1 = ((((!((map__7608 == null)))?((((map__7608.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7608.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7608):map__7608);
var pos = cljs.core.get.call(null,map__7608__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));
var next_pos = cljs.core.get.call(null,map__7608__$1,new cljs.core.Keyword(null,"next-pos","next-pos",1805528106));
var map__7609 = velocity_data;
var map__7609__$1 = ((((!((map__7609 == null)))?((((map__7609.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7609.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7609):map__7609);
var velocity = cljs.core.get.call(null,map__7609__$1,new cljs.core.Keyword(null,"velocity","velocity",-581524355));
var acceleration = cljs.core.get.call(null,map__7609__$1,new cljs.core.Keyword(null,"acceleration","acceleration",-1213888421));
var other_entities = cljs.core.remove.call(null,cljs.core.PersistentHashSet.fromArray([entity], true),entities_with_position);
var real_next_pos = ascii_dungeoncrawler.systems.collision.calculate_next_position.call(null,pos,next_pos,velocity,other_entities);
var stopped_QMARK_ = cljs.core.not_EQ_.call(null,next_pos,real_next_pos);
if(cljs.core.truth_(ascii_dungeoncrawler.systems.collision.moved_QMARK_.call(null,pos,(function (){var or__4988__auto__ = next_pos;
if(cljs.core.truth_(or__4988__auto__)){
return or__4988__auto__;
} else {
return pos;
}
})()))){
return ascii_dungeoncrawler.systems.collision.update_entity_position.call(null,component_map,entity_id,real_next_pos);
} else {
return component_map;
}
});
});
/**
 * Handle collisions between entities, and update positions/velocities appropriately.
 */
ascii_dungeoncrawler.systems.collision.collision_system = (function ascii_dungeoncrawler$systems$collision$collision_system(state){
var entities = ascii_dungeoncrawler.ecs.entities_with_components.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",-2011731912)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"velocity","velocity",-581524355),new cljs.core.Keyword(null,"collidable","collidable",232142278)], null));
var get_velocity = ((function (entities){
return (function (p__7616){
var vec__7617 = p__7616;
var _ = cljs.core.nth.call(null,vec__7617,(0),null);
var vec__7618 = cljs.core.nth.call(null,vec__7617,(1),null);
var ___$1 = cljs.core.nth.call(null,vec__7618,(0),null);
var velocity = cljs.core.nth.call(null,vec__7618,(1),null);
var ___$2 = cljs.core.nth.call(null,vec__7618,(2),null);
return velocity;
});})(entities))
;
var update_position_component_data = ascii_dungeoncrawler.systems.collision.mk_update_position_component_data.call(null,entities);
return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.Keyword(null,"position","position",-2011731912)], null),((function (entities,get_velocity,update_position_component_data){
return (function (p1__7612_SHARP_){
return cljs.core.reduce.call(null,update_position_component_data,p1__7612_SHARP_,cljs.core.filter.call(null,get_velocity,entities));
});})(entities,get_velocity,update_position_component_data))
);
});

//# sourceMappingURL=collision.js.map