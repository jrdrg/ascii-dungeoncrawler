// Compiled by ClojureScript 1.7.170 {}
goog.provide('ascii_dungeoncrawler.core');
goog.require('cljs.core');
goog.require('ascii_dungeoncrawler.systems.render');
goog.require('ascii_dungeoncrawler.pixi');
goog.require('ascii_dungeoncrawler.systems.sprite');
goog.require('ascii_dungeoncrawler.systems.tilemap');
goog.require('ascii_dungeoncrawler.systems.input');
goog.require('ascii_dungeoncrawler.systems.collision');
goog.require('ascii_dungeoncrawler.ecs');
goog.require('ascii_dungeoncrawler.systems.ai');
goog.require('ascii_dungeoncrawler.systems.movement');
cljs.core.enable_console_print_BANG_.call(null);
cljs.core.println.call(null,"Loaded.");
if(typeof ascii_dungeoncrawler.core.running !== 'undefined'){
} else {
ascii_dungeoncrawler.core.running = cljs.core.atom.call(null,null);
}
if(typeof ascii_dungeoncrawler.core.last_timestamp !== 'undefined'){
} else {
ascii_dungeoncrawler.core.last_timestamp = cljs.core.atom.call(null,null);
}
if(typeof ascii_dungeoncrawler.core.debug_state !== 'undefined'){
} else {
ascii_dungeoncrawler.core.debug_state = cljs.core.atom.call(null,null);
}
if(typeof ascii_dungeoncrawler.core.renderer !== 'undefined'){
} else {
ascii_dungeoncrawler.core.renderer = ascii_dungeoncrawler.pixi.create_renderer_BANG_.call(null);
}
ascii_dungeoncrawler.core.initial_state = (function ascii_dungeoncrawler$core$initial_state(renderer,stage){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"systems","systems",-1015374944),new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"entities","entities",1940967403),new cljs.core.Keyword(null,"fps","fps",683533296),new cljs.core.Keyword(null,"update-fn","update-fn",711087313),new cljs.core.Keyword(null,"render","render",-1408033454),new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.Keyword(null,"last-entity-id","last-entity-id",-1219697349),new cljs.core.Keyword(null,"screens","screens",-1375990980)],[new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"input","input",556931961),ascii_dungeoncrawler.systems.input.input_system,new cljs.core.Keyword(null,"render","render",-1408033454),ascii_dungeoncrawler.systems.render.mk_render_system.call(null,renderer,stage),new cljs.core.Keyword(null,"sprite","sprite",172516848),ascii_dungeoncrawler.systems.sprite.mk_sprite_system.call(null,renderer,stage),new cljs.core.Keyword(null,"movement","movement",1777030977),ascii_dungeoncrawler.systems.movement.movement_system,new cljs.core.Keyword(null,"collision","collision",-201625508),ascii_dungeoncrawler.systems.collision.collision_system,new cljs.core.Keyword(null,"tilemap","tilemap",407449043),ascii_dungeoncrawler.systems.tilemap.mk_tilemap_system.call(null,stage),new cljs.core.Keyword(null,"ai","ai",760454697),ascii_dungeoncrawler.systems.ai.ai_system], null),new cljs.core.Keyword(null,"game","game",-441523833),cljs.core.PersistentArrayMap.EMPTY,null,null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"renderer","renderer",336841071),renderer,new cljs.core.Keyword(null,"stage","stage",1843544772),stage,new cljs.core.Keyword(null,"sprites","sprites",-1835833922),null], null),cljs.core.PersistentArrayMap.EMPTY,(0),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"systems","systems",-1015374944),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.Keyword(null,"render","render",-1408033454)], null),new cljs.core.Keyword(null,"on-enter","on-enter",-928988216),null,new cljs.core.Keyword(null,"on-leave","on-leave",-1679614417),null], null),new cljs.core.Keyword(null,"game","game",-441523833),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"systems","systems",-1015374944),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.Keyword(null,"ai","ai",760454697),new cljs.core.Keyword(null,"movement","movement",1777030977),new cljs.core.Keyword(null,"tilemap","tilemap",407449043),new cljs.core.Keyword(null,"collision","collision",-201625508),new cljs.core.Keyword(null,"sprite","sprite",172516848),new cljs.core.Keyword(null,"render","render",-1408033454)], null),new cljs.core.Keyword(null,"on-enter","on-enter",-928988216),null,new cljs.core.Keyword(null,"on-leave","on-leave",-1679614417),null], null),new cljs.core.Keyword(null,"game-over","game-over",-607322695),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"systems","systems",-1015374944),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.Keyword(null,"render","render",-1408033454)], null),new cljs.core.Keyword(null,"on-enter","on-enter",-928988216),null,new cljs.core.Keyword(null,"on-leave","on-leave",-1679614417),null], null)], null)]);
});
ascii_dungeoncrawler.core.mk_tree = (function ascii_dungeoncrawler$core$mk_tree(idx){
return (function (state){
return ascii_dungeoncrawler.ecs.add_entity.call(null,state,[cljs.core.str("tree"),cljs.core.str(idx)].join(''),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(112),((208) + (idx * (16)))], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sprite","sprite",172516848),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"char","char",-641587586),"T",new cljs.core.Keyword(null,"draw?","draw?",1765298547),true,new cljs.core.Keyword(null,"color","color",1011675173),(65280)], null)], null)], null));
});
});
ascii_dungeoncrawler.core.mk_tree2 = (function ascii_dungeoncrawler$core$mk_tree2(idx){
return (function (state){
return ascii_dungeoncrawler.ecs.add_entity.call(null,state,[cljs.core.str("tree2"),cljs.core.str(idx)].join(''),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(896),((208) + (idx * (16)))], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sprite","sprite",172516848),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"char","char",-641587586),"T",new cljs.core.Keyword(null,"draw?","draw?",1765298547),true,new cljs.core.Keyword(null,"color","color",1011675173),(65280)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"collidable","collidable",232142278),true], null)], null));
});
});
ascii_dungeoncrawler.core.mk_x = (function ascii_dungeoncrawler$core$mk_x(idx){
return (function (state){
return ascii_dungeoncrawler.ecs.add_entity.call(null,state,[cljs.core.str("x"),cljs.core.str(idx)].join(''),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((208) + (idx * (16))),(144)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"collidable","collidable",232142278),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sprite","sprite",172516848),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"char","char",-641587586),"#",new cljs.core.Keyword(null,"draw?","draw?",1765298547),true,new cljs.core.Keyword(null,"color","color",1011675173),(5601177)], null)], null)], null));
});
});
ascii_dungeoncrawler.core.test_add_starting_entities = (function ascii_dungeoncrawler$core$test_add_starting_entities(state){
return ascii_dungeoncrawler.ecs.add_entity.call(null,ascii_dungeoncrawler.ecs.add_entity.call(null,cljs.core.apply.call(null,cljs.core.comp,cljs.core.map.call(null,ascii_dungeoncrawler.core.mk_tree2,cljs.core.range.call(null,(20)))).call(null,cljs.core.apply.call(null,cljs.core.comp,cljs.core.map.call(null,ascii_dungeoncrawler.core.mk_tree,cljs.core.range.call(null,(15)))).call(null,cljs.core.apply.call(null,cljs.core.comp,cljs.core.map.call(null,ascii_dungeoncrawler.core.mk_x,cljs.core.range.call(null,(20)))).call(null,ascii_dungeoncrawler.ecs.add_entity.call(null,ascii_dungeoncrawler.ecs.add_entity.call(null,ascii_dungeoncrawler.ecs.add_entity.call(null,state,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sprite","sprite",172516848),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"char","char",-641587586),"@",new cljs.core.Keyword(null,"draw?","draw?",1765298547),true,new cljs.core.Keyword(null,"color","color",1011675173),(16755200)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(40),(80)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"velocity","velocity",-581524355),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"velocity","velocity",-581524355),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.Keyword(null,"acceleration","acceleration",-1213888421),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"collidable","collidable",232142278)], null)], null)),new cljs.core.Keyword(null,"text1","text1",-652161132),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text","text",-1790561697),"Test text",new cljs.core.Keyword(null,"color","color",1011675173),(5601177)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(60),(70)], null)], null)], null)], null)),new cljs.core.Keyword(null,"tree1","tree1",2001814939),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(100),(200)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sprite","sprite",172516848),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"char","char",-641587586),"T",new cljs.core.Keyword(null,"draw?","draw?",1765298547),true,new cljs.core.Keyword(null,"color","color",1011675173),(65280)], null)], null)], null))))),new cljs.core.Keyword(null,"enemy1","enemy1",-921641202),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(196),(144)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cause-damage","cause-damage",1641940021),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dmg","dmg",-401654239),(1)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ai","ai",760454697),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"behavior","behavior",1202392908),new cljs.core.Keyword(null,"search-player","search-player",687656380)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sprite","sprite",172516848),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"char","char",-641587586),"X",new cljs.core.Keyword(null,"draw?","draw?",1765298547),true,new cljs.core.Keyword(null,"color","color",1011675173),(13395600)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"collidable","collidable",232142278)], null)], null)),new cljs.core.Keyword(null,"enemy2","enemy2",1098466701),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(216),(150)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cause-damage","cause-damage",1641940021),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dmg","dmg",-401654239),(1)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ai","ai",760454697),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"behavior","behavior",1202392908),new cljs.core.Keyword(null,"search-player","search-player",687656380)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sprite","sprite",172516848),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"char","char",-641587586),"X",new cljs.core.Keyword(null,"draw?","draw?",1765298547),true,new cljs.core.Keyword(null,"color","color",1011675173),(13395600)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"collidable","collidable",232142278)], null)], null));
});
/**
 * DOM element to render the canvas into
 */
ascii_dungeoncrawler.core.app_element = (function ascii_dungeoncrawler$core$app_element(){
return document.getElementById("app");
});
ascii_dungeoncrawler.core.request_animation = (function ascii_dungeoncrawler$core$request_animation(fn){
return window.requestAnimationFrame(fn);
});
ascii_dungeoncrawler.core.append_to_dom_BANG_ = (function ascii_dungeoncrawler$core$append_to_dom_BANG_(element){
return ascii_dungeoncrawler.core.app_element.call(null).appendChild(element);
});
/**
 * Returns an ordered list of the systems in the current screen.
 */
ascii_dungeoncrawler.core.get_systems_in_screen = (function ascii_dungeoncrawler$core$get_systems_in_screen(var_args){
var args7860 = [];
var len__6046__auto___7863 = arguments.length;
var i__6047__auto___7864 = (0);
while(true){
if((i__6047__auto___7864 < len__6046__auto___7863)){
args7860.push((arguments[i__6047__auto___7864]));

var G__7865 = (i__6047__auto___7864 + (1));
i__6047__auto___7864 = G__7865;
continue;
} else {
}
break;
}

var G__7862 = args7860.length;
switch (G__7862) {
case 1:
return ascii_dungeoncrawler.core.get_systems_in_screen.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return ascii_dungeoncrawler.core.get_systems_in_screen.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7860.length)].join('')));

}
});

ascii_dungeoncrawler.core.get_systems_in_screen.cljs$core$IFn$_invoke$arity$1 = (function (state){
var current_screen = new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691).cljs$core$IFn$_invoke$arity$1(state);
return ascii_dungeoncrawler.core.get_systems_in_screen.call(null,state,current_screen);
});

ascii_dungeoncrawler.core.get_systems_in_screen.cljs$core$IFn$_invoke$arity$2 = (function (state,screen){
return new cljs.core.Keyword(null,"systems","systems",-1015374944).cljs$core$IFn$_invoke$arity$1(screen.call(null,new cljs.core.Keyword(null,"screens","screens",-1375990980).cljs$core$IFn$_invoke$arity$1(state)));
});

ascii_dungeoncrawler.core.get_systems_in_screen.cljs$lang$maxFixedArity = 2;
/**
 * Creates an update function for the current screen.
 */
ascii_dungeoncrawler.core.mk_update_fn = (function ascii_dungeoncrawler$core$mk_update_fn(state){
var current_screen = new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691).cljs$core$IFn$_invoke$arity$1(state);
var system_ids = ascii_dungeoncrawler.core.get_systems_in_screen.call(null,state);
var systems = cljs.core.map.call(null,((function (current_screen,system_ids){
return (function (system_id){
return system_id.call(null,new cljs.core.Keyword(null,"systems","systems",-1015374944).cljs$core$IFn$_invoke$arity$1(state));
});})(current_screen,system_ids))
,system_ids);
var update_fn = cljs.core.apply.call(null,cljs.core.comp,cljs.core.reverse.call(null,systems));
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"update-fn","update-fn",711087313),update_fn);
});
/**
 * Changes the current screen. Calls the on-leave method of the previous screen, and
 *   the on-enter method of the new screen.
 */
ascii_dungeoncrawler.core.change_screen = (function ascii_dungeoncrawler$core$change_screen(state,new_screen){
var current_screen = new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691).cljs$core$IFn$_invoke$arity$1(state);
var exit_fn = cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"screens","screens",-1375990980),current_screen,new cljs.core.Keyword(null,"on-leave","on-leave",-1679614417)], null));
var enter_fn = cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"screens","screens",-1375990980),new_screen,new cljs.core.Keyword(null,"on-enter","on-enter",-928988216)], null));
return ascii_dungeoncrawler.core.mk_update_fn.call(null,cljs.core.assoc.call(null,enter_fn.call(null,exit_fn.call(null,state)),new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new_screen));
});
ascii_dungeoncrawler.core.next_state = (function ascii_dungeoncrawler$core$next_state(state){
var map__7869 = new cljs.core.Keyword(null,"render","render",-1408033454).cljs$core$IFn$_invoke$arity$1(state);
var map__7869__$1 = ((((!((map__7869 == null)))?((((map__7869.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7869.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7869):map__7869);
var renderer = cljs.core.get.call(null,map__7869__$1,new cljs.core.Keyword(null,"renderer","renderer",336841071));
var stage = cljs.core.get.call(null,map__7869__$1,new cljs.core.Keyword(null,"stage","stage",1843544772));
var update_fn = new cljs.core.Keyword(null,"update-fn","update-fn",711087313).cljs$core$IFn$_invoke$arity$1(state);
return cljs.core.reset_BANG_.call(null,ascii_dungeoncrawler.core.debug_state,update_fn.call(null,state));
});
/**
 * Updates frames per second in the state.
 */
ascii_dungeoncrawler.core.update_fps = (function ascii_dungeoncrawler$core$update_fps(state){
var now = performance.now();
var prev = (function (){var or__4988__auto__ = cljs.core.deref.call(null,ascii_dungeoncrawler.core.last_timestamp);
if(cljs.core.truth_(or__4988__auto__)){
return or__4988__auto__;
} else {
return now;
}
})();
var diff = ((now - prev) / (1000));
var fps = ((1) / diff);
cljs.core.reset_BANG_.call(null,ascii_dungeoncrawler.core.last_timestamp,now);

return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"fps","fps",683533296),fps);
});
ascii_dungeoncrawler.core.game_loop = (function ascii_dungeoncrawler$core$game_loop(state){
if(cljs.core.truth_(state)){
return ascii_dungeoncrawler.core.request_animation.call(null,(function (){
return ascii_dungeoncrawler$core$game_loop.call(null,ascii_dungeoncrawler.core.update_fps.call(null,ascii_dungeoncrawler.core.next_state.call(null,state)));
}));
} else {
return null;
}
});
ascii_dungeoncrawler.core.scale_stage_BANG_ = (function ascii_dungeoncrawler$core$scale_stage_BANG_(stage){
(stage["scale"] = (new PIXI.Point((2),(2))));

return stage;
});
ascii_dungeoncrawler.core.start_game_BANG_ = (function ascii_dungeoncrawler$core$start_game_BANG_(){
var stage = ascii_dungeoncrawler.pixi.create_container_BANG_.call(null);
var view = ascii_dungeoncrawler.core.renderer.view;
var state = ascii_dungeoncrawler.core.mk_update_fn.call(null,ascii_dungeoncrawler.core.initial_state.call(null,ascii_dungeoncrawler.core.renderer,stage));
var test_state = ascii_dungeoncrawler.core.test_add_starting_entities.call(null,state);
cljs.core.reset_BANG_.call(null,ascii_dungeoncrawler.core.running,true);

ascii_dungeoncrawler.core.app_element.call(null).innerHTML = null;

ascii_dungeoncrawler.core.append_to_dom_BANG_.call(null,view);

return ascii_dungeoncrawler.core.game_loop.call(null,test_state);
});
ascii_dungeoncrawler.pixi.load_images_BANG_.call(null,ascii_dungeoncrawler.core.start_game_BANG_);

//# sourceMappingURL=core.js.map