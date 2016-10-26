// Compiled by ClojureScript 1.7.170 {}
goog.provide('ascii_dungeoncrawler.systems.input');
goog.require('cljs.core');
goog.require('ascii_dungeoncrawler.ecs');
if(typeof ascii_dungeoncrawler.systems.input.keyState !== 'undefined'){
} else {
ascii_dungeoncrawler.systems.input.keyState = cljs.core.atom.call(null,null);
}
ascii_dungeoncrawler.systems.input.state_keys_down = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"keys-down","keys-down",318034904)], null);
ascii_dungeoncrawler.systems.input.arrow_keys = new cljs.core.PersistentArrayMap(null, 5, [(38),new cljs.core.Keyword(null,"up","up",-269712113),(40),new cljs.core.Keyword(null,"down","down",1565245570),(37),new cljs.core.Keyword(null,"left","left",-399115937),(39),new cljs.core.Keyword(null,"right","right",-452581833),(32),new cljs.core.Keyword(null,"space","space",348133475)], null);
ascii_dungeoncrawler.systems.input.keyCode__GT_arrow = (function ascii_dungeoncrawler$systems$input$keyCode__GT_arrow(keyCode){
var or__4988__auto__ = cljs.core.get.call(null,ascii_dungeoncrawler.systems.input.arrow_keys,keyCode);
if(cljs.core.truth_(or__4988__auto__)){
return or__4988__auto__;
} else {
return String.fromCharCode.call(null,keyCode);
}
});
ascii_dungeoncrawler.systems.input.keydown = (function ascii_dungeoncrawler$systems$input$keydown(e){
e.preventDefault();

var keyCode = ascii_dungeoncrawler.systems.input.keyCode__GT_arrow.call(null,(e["keyCode"]));
return cljs.core.swap_BANG_.call(null,ascii_dungeoncrawler.systems.input.keyState,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"keys","keys",1068423698)], null),((function (keyCode){
return (function (p1__7780_SHARP_){
return cljs.core.conj.call(null,p1__7780_SHARP_,cljs.core.keyword.call(null,keyCode));
});})(keyCode))
);
});
ascii_dungeoncrawler.systems.input.keyup = (function ascii_dungeoncrawler$systems$input$keyup(e){
e.preventDefault();

var keyCode = ascii_dungeoncrawler.systems.input.keyCode__GT_arrow.call(null,(e["keyCode"]));
return cljs.core.swap_BANG_.call(null,ascii_dungeoncrawler.systems.input.keyState,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"keys","keys",1068423698)], null),((function (keyCode){
return (function (p1__7781_SHARP_){
return cljs.core.disj.call(null,p1__7781_SHARP_,cljs.core.keyword.call(null,keyCode));
});})(keyCode))
);
});
ascii_dungeoncrawler.systems.input.init_keyboard_events_BANG_ = (function ascii_dungeoncrawler$systems$input$init_keyboard_events_BANG_(){
cljs.core.println.call(null,"Initializing keyboard event handlers");

document.addEventListener("keydown",ascii_dungeoncrawler.systems.input.keydown);

document.addEventListener("keyup",ascii_dungeoncrawler.systems.input.keyup);

return cljs.core.reset_BANG_.call(null,ascii_dungeoncrawler.systems.input.keyState,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"keys","keys",1068423698),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"remove-keydown","remove-keydown",-89726530),(function (){
return document.removeEventListener("keydown",ascii_dungeoncrawler.systems.input.keydown);
}),new cljs.core.Keyword(null,"remove-keyup","remove-keyup",598041619),(function (){
return document.removeEventListener("keyup",ascii_dungeoncrawler.systems.input.keyup);
})], null));
});
/**
 * Debug method to be used from REPL in case input event listeners should be changed
 */
ascii_dungeoncrawler.systems.input.reset_key_state_BANG_ = (function ascii_dungeoncrawler$systems$input$reset_key_state_BANG_(){
cljs.core.println.call(null,"Resetting key handlers");

var seq__7786_7790 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"remove-keydown","remove-keydown",-89726530),new cljs.core.Keyword(null,"remove-keyup","remove-keyup",598041619)], null));
var chunk__7787_7791 = null;
var count__7788_7792 = (0);
var i__7789_7793 = (0);
while(true){
if((i__7789_7793 < count__7788_7792)){
var handler_7794 = cljs.core._nth.call(null,chunk__7787_7791,i__7789_7793);
handler_7794.call(null,cljs.core.deref.call(null,ascii_dungeoncrawler.systems.input.keyState)).call(null);

var G__7795 = seq__7786_7790;
var G__7796 = chunk__7787_7791;
var G__7797 = count__7788_7792;
var G__7798 = (i__7789_7793 + (1));
seq__7786_7790 = G__7795;
chunk__7787_7791 = G__7796;
count__7788_7792 = G__7797;
i__7789_7793 = G__7798;
continue;
} else {
var temp__4425__auto___7799 = cljs.core.seq.call(null,seq__7786_7790);
if(temp__4425__auto___7799){
var seq__7786_7800__$1 = temp__4425__auto___7799;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7786_7800__$1)){
var c__5791__auto___7801 = cljs.core.chunk_first.call(null,seq__7786_7800__$1);
var G__7802 = cljs.core.chunk_rest.call(null,seq__7786_7800__$1);
var G__7803 = c__5791__auto___7801;
var G__7804 = cljs.core.count.call(null,c__5791__auto___7801);
var G__7805 = (0);
seq__7786_7790 = G__7802;
chunk__7787_7791 = G__7803;
count__7788_7792 = G__7804;
i__7789_7793 = G__7805;
continue;
} else {
var handler_7806 = cljs.core.first.call(null,seq__7786_7800__$1);
handler_7806.call(null,cljs.core.deref.call(null,ascii_dungeoncrawler.systems.input.keyState)).call(null);

var G__7807 = cljs.core.next.call(null,seq__7786_7800__$1);
var G__7808 = null;
var G__7809 = (0);
var G__7810 = (0);
seq__7786_7790 = G__7807;
chunk__7787_7791 = G__7808;
count__7788_7792 = G__7809;
i__7789_7793 = G__7810;
continue;
}
} else {
}
}
break;
}

return ascii_dungeoncrawler.systems.input.init_keyboard_events_BANG_.call(null);
});
ascii_dungeoncrawler.systems.input.map_input_key = (function ascii_dungeoncrawler$systems$input$map_input_key(key){
var pred__7814 = cljs.core.contains_QMARK_;
var expr__7815 = key;
if(cljs.core.truth_(pred__7814.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"W","W",-2035370425),null,new cljs.core.Keyword(null,"up","up",-269712113),null], null), null),expr__7815))){
return new cljs.core.Keyword(null,"up","up",-269712113);
} else {
if(cljs.core.truth_(pred__7814.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"down","down",1565245570),null,new cljs.core.Keyword(null,"S","S",1267293308),null], null), null),expr__7815))){
return new cljs.core.Keyword(null,"down","down",1565245570);
} else {
if(cljs.core.truth_(pred__7814.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"A","A",-1688942394),null,new cljs.core.Keyword(null,"left","left",-399115937),null], null), null),expr__7815))){
return new cljs.core.Keyword(null,"left","left",-399115937);
} else {
if(cljs.core.truth_(pred__7814.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"D","D",-8015893),null,new cljs.core.Keyword(null,"right","right",-452581833),null], null), null),expr__7815))){
return new cljs.core.Keyword(null,"right","right",-452581833);
} else {
return key;
}
}
}
}
});
ascii_dungeoncrawler.systems.input.mk_update_input_component_data = (function ascii_dungeoncrawler$systems$input$mk_update_input_component_data(keys){
return (function (component_map,p__7819){
var vec__7820 = p__7819;
var entity_id = cljs.core.nth.call(null,vec__7820,(0),null);
var _ = cljs.core.nth.call(null,vec__7820,(1),null);
return cljs.core.assoc.call(null,component_map,entity_id,cljs.core.set.call(null,cljs.core.map.call(null,ascii_dungeoncrawler.systems.input.map_input_key,keys)));
});
});
ascii_dungeoncrawler.systems.input.input_system = (function ascii_dungeoncrawler$systems$input$input_system(state){
var entities = ascii_dungeoncrawler.ecs.entities_with_components.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.Keyword(null,"player","player",-97687400)], null));
var keys = new cljs.core.Keyword(null,"keys","keys",1068423698).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ascii_dungeoncrawler.systems.input.keyState));
var update_input_component_data = ascii_dungeoncrawler.systems.input.mk_update_input_component_data.call(null,keys);
if(cljs.core.truth_(keys)){
return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.Keyword(null,"input","input",556931961)], null),((function (entities,keys,update_input_component_data){
return (function (p1__7821_SHARP_){
return cljs.core.reduce.call(null,update_input_component_data,p1__7821_SHARP_,entities);
});})(entities,keys,update_input_component_data))
);
} else {
ascii_dungeoncrawler.systems.input.init_keyboard_events_BANG_.call(null);

return state;
}
});

//# sourceMappingURL=input.js.map