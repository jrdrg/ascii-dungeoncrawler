// Compiled by ClojureScript 1.7.170 {}
goog.provide('ascii_dungeoncrawler.ecs');
goog.require('cljs.core');
goog.require('clojure.set');
ascii_dungeoncrawler.ecs.state_component_path = (function ascii_dungeoncrawler$ecs$state_component_path(component_id){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"components","components",-1073188942),component_id], null);
});
ascii_dungeoncrawler.ecs.state_entity_path = (function ascii_dungeoncrawler$ecs$state_entity_path(entity_id){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"entities","entities",1940967403),entity_id], null);
});
/**
 * Returns true if the entity has the specified component.
 */
ascii_dungeoncrawler.ecs.entity_has_component_QMARK_ = (function ascii_dungeoncrawler$ecs$entity_has_component_QMARK_(state,entity_id,component_id){
return cljs.core.contains_QMARK_.call(null,(function (){var or__4988__auto__ = cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"entities","entities",1940967403),entity_id], null));
if(cljs.core.truth_(or__4988__auto__)){
return or__4988__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})(),component_id);
});
ascii_dungeoncrawler.ecs.get_component = (function ascii_dungeoncrawler$ecs$get_component(state,entity_id,component_id){
return cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"entities","entities",1940967403),entity_id,component_id], null));
});
ascii_dungeoncrawler.ecs.add_component_to_entity = (function ascii_dungeoncrawler$ecs$add_component_to_entity(state,entity_id,p__7368){
var vec__7370 = p__7368;
var component_id = cljs.core.nth.call(null,vec__7370,(0),null);
var component_state = cljs.core.nth.call(null,vec__7370,(1),null);
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"entities","entities",1940967403),entity_id], null),((function (vec__7370,component_id,component_state){
return (function (p1__7366_SHARP_){
return cljs.core.conj.call(null,(function (){var or__4988__auto__ = p1__7366_SHARP_;
if(cljs.core.truth_(or__4988__auto__)){
return or__4988__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})(),component_id);
});})(vec__7370,component_id,component_state))
),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"components","components",-1073188942),component_id], null),((function (vec__7370,component_id,component_state){
return (function (p1__7367_SHARP_){
return cljs.core.conj.call(null,(function (){var or__4988__auto__ = p1__7367_SHARP_;
if(cljs.core.truth_(or__4988__auto__)){
return or__4988__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),cljs.core.PersistentArrayMap.fromArray([entity_id,component_state], true, false));
});})(vec__7370,component_id,component_state))
);
});
ascii_dungeoncrawler.ecs.remove_component_from_entity = (function ascii_dungeoncrawler$ecs$remove_component_from_entity(state,entity_id,component_id){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"entities","entities",1940967403),entity_id], null),(function (p1__7371_SHARP_){
return cljs.core.disj.call(null,(function (){var or__4988__auto__ = p1__7371_SHARP_;
if(cljs.core.truth_(or__4988__auto__)){
return or__4988__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})(),component_id);
})),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"components","components",-1073188942),component_id], null),(function (p1__7372_SHARP_){
return cljs.core.dissoc.call(null,(function (){var or__4988__auto__ = p1__7372_SHARP_;
if(cljs.core.truth_(or__4988__auto__)){
return or__4988__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),entity_id);
}));
});
/**
 * Adds an entity with given id to state.
 */
ascii_dungeoncrawler.ecs.add_entity = (function ascii_dungeoncrawler$ecs$add_entity(var_args){
var args7373 = [];
var len__6046__auto___7376 = arguments.length;
var i__6047__auto___7377 = (0);
while(true){
if((i__6047__auto___7377 < len__6046__auto___7376)){
args7373.push((arguments[i__6047__auto___7377]));

var G__7378 = (i__6047__auto___7377 + (1));
i__6047__auto___7377 = G__7378;
continue;
} else {
}
break;
}

var G__7375 = args7373.length;
switch (G__7375) {
case 2:
return ascii_dungeoncrawler.ecs.add_entity.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return ascii_dungeoncrawler.ecs.add_entity.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7373.length)].join('')));

}
});

ascii_dungeoncrawler.ecs.add_entity.cljs$core$IFn$_invoke$arity$2 = (function (state,components){
var entity_id = (1);
return ascii_dungeoncrawler.ecs.add_entity.call(null,state,entity_id,components);
});

ascii_dungeoncrawler.ecs.add_entity.cljs$core$IFn$_invoke$arity$3 = (function (state,entity_id,components){
var add_component_data = (function (accum,component){
return ascii_dungeoncrawler.ecs.add_component_to_entity.call(null,accum,entity_id,component);
});
return cljs.core.reduce.call(null,add_component_data,state,components);
});

ascii_dungeoncrawler.ecs.add_entity.cljs$lang$maxFixedArity = 3;
/**
 * Removes the entity from state.
 */
ascii_dungeoncrawler.ecs.rm_entity = (function ascii_dungeoncrawler$ecs$rm_entity(state,entity_id){
var components = cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"entities","entities",1940967403),entity_id], null));
var removed_from_entities = cljs.core.update.call(null,state,new cljs.core.Keyword(null,"entities","entities",1940967403),cljs.core.dissoc,entity_id);
var remove_component = ((function (components,removed_from_entities){
return (function (accum,component){
return cljs.core.update_in.call(null,accum,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"components","components",-1073188942),component], null),cljs.core.dissoc,entity_id);
});})(components,removed_from_entities))
;
return cljs.core.reduce.call(null,remove_component,removed_from_entities,components);
});
/**
 * Returns a function which can be used to reduce a list of entity component data.
 */
ascii_dungeoncrawler.ecs.mk_add_entity_data_to_list = (function ascii_dungeoncrawler$ecs$mk_add_entity_data_to_list(state,component_ids,optional_component_ids){
return (function (list,p__7384){
var vec__7385 = p__7384;
var entity_id = cljs.core.nth.call(null,vec__7385,(0),null);
var ok_QMARK_ = cljs.core.every_QMARK_.call(null,((function (vec__7385,entity_id){
return (function (p1__7380_SHARP_){
return ascii_dungeoncrawler.ecs.entity_has_component_QMARK_.call(null,state,entity_id,p1__7380_SHARP_);
});})(vec__7385,entity_id))
,component_ids);
var get_component_data = ((function (ok_QMARK_,vec__7385,entity_id){
return (function (p1__7381_SHARP_){
return cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"components","components",-1073188942),p1__7381_SHARP_,entity_id], null),null);
});})(ok_QMARK_,vec__7385,entity_id))
;
if(ok_QMARK_){
return cljs.core.conj.call(null,list,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[entity_id,cljs.core.mapv.call(null,get_component_data,cljs.core.into.call(null,component_ids,optional_component_ids))],null)));
} else {
return list;
}
});
});
/**
 * Returns the ids and data of all entities that have all the requested components.
 *   Loop through the first component's entities. For each entity, check if the id exists in all
 *   the other component sets, if so then add a vector with data for each component in the
 *   order requested.
 */
ascii_dungeoncrawler.ecs.entities_with_components = (function ascii_dungeoncrawler$ecs$entities_with_components(var_args){
var args7386 = [];
var len__6046__auto___7389 = arguments.length;
var i__6047__auto___7390 = (0);
while(true){
if((i__6047__auto___7390 < len__6046__auto___7389)){
args7386.push((arguments[i__6047__auto___7390]));

var G__7391 = (i__6047__auto___7390 + (1));
i__6047__auto___7390 = G__7391;
continue;
} else {
}
break;
}

var G__7388 = args7386.length;
switch (G__7388) {
case 2:
return ascii_dungeoncrawler.ecs.entities_with_components.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return ascii_dungeoncrawler.ecs.entities_with_components.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7386.length)].join('')));

}
});

ascii_dungeoncrawler.ecs.entities_with_components.cljs$core$IFn$_invoke$arity$2 = (function (state,component_ids){
return ascii_dungeoncrawler.ecs.entities_with_components.call(null,state,component_ids,null);
});

ascii_dungeoncrawler.ecs.entities_with_components.cljs$core$IFn$_invoke$arity$3 = (function (state,component_ids,optional_component_ids){
var first_component_map = cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"components","components",-1073188942),cljs.core.first.call(null,component_ids)], null));
return cljs.core.reduce.call(null,ascii_dungeoncrawler.ecs.mk_add_entity_data_to_list.call(null,state,component_ids,optional_component_ids),cljs.core.PersistentVector.EMPTY,first_component_map);
});

ascii_dungeoncrawler.ecs.entities_with_components.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=ecs.js.map