// Compiled by ClojureScript 1.7.170 {}
goog.provide('ascii_dungeoncrawler.systems.tilemap');
goog.require('cljs.core');
goog.require('ascii_dungeoncrawler.constants');
goog.require('ascii_dungeoncrawler.mapdata');
goog.require('ascii_dungeoncrawler.pixi');
goog.require('ascii_dungeoncrawler.systems.collision');
goog.require('ascii_dungeoncrawler.ecs');
cljs.core.enable_console_print_BANG_.call(null);
ascii_dungeoncrawler.systems.tilemap.initial_map = ascii_dungeoncrawler.mapdata.tile_map;
ascii_dungeoncrawler.systems.tilemap.tile_info = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"sprite","sprite",172516848),String.fromCodePoint.call(null,(176)),new cljs.core.Keyword(null,"color","color",1011675173),(13141),new cljs.core.Keyword(null,"walkable","walkable",-1315135173),true], null),new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"sprite","sprite",172516848),String.fromCodePoint.call(null,(177)),new cljs.core.Keyword(null,"color","color",1011675173),(16742297),new cljs.core.Keyword(null,"walkable","walkable",-1315135173),false], null),new cljs.core.Keyword(null,"s","s",1705939918),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"sprite","sprite",172516848),String.fromCodePoint.call(null,(219)),new cljs.core.Keyword(null,"color","color",1011675173),(16742297),new cljs.core.Keyword(null,"walkable","walkable",-1315135173),false], null)], null);
ascii_dungeoncrawler.systems.tilemap.initial_tilemap_state = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container","container",-1736937707),null,new cljs.core.Keyword(null,"map","map",1371690461),null], null);
ascii_dungeoncrawler.systems.tilemap.state__GT_map_data = (function ascii_dungeoncrawler$systems$tilemap$state__GT_map_data(state){
return cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tilemap","tilemap",407449043),new cljs.core.Keyword(null,"map","map",1371690461)], null));
});
ascii_dungeoncrawler.systems.tilemap.tile_at = (function ascii_dungeoncrawler$systems$tilemap$tile_at(tile_data,tile_x,tile_y){
return cljs.core.get_in.call(null,tile_data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tile_y,tile_x], null));
});
/**
 * Returns the tile-info data at tile index [x y]
 */
ascii_dungeoncrawler.systems.tilemap.tile_info_at = (function ascii_dungeoncrawler$systems$tilemap$tile_info_at(tile_data,tile_x,tile_y){
return cljs.core.get.call(null,ascii_dungeoncrawler.systems.tilemap.tile_info,ascii_dungeoncrawler.systems.tilemap.tile_at.call(null,tile_data,tile_x,tile_y));
});
/**
 * Given a tile position, [7 3], returns the pixel coordinates, i.e. [112, 48]
 */
ascii_dungeoncrawler.systems.tilemap.tile__GT_position = (function ascii_dungeoncrawler$systems$tilemap$tile__GT_position(x,y){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x * ascii_dungeoncrawler.constants.tile_size),(y * ascii_dungeoncrawler.constants.tile_size)], null);
});
/**
 * Given an entity position, i.e. [123, 52] returns the tile position, i.e. [7 3]
 */
ascii_dungeoncrawler.systems.tilemap.entity__GT_tile_pos = (function ascii_dungeoncrawler$systems$tilemap$entity__GT_tile_pos(entity_x,entity_y){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.quot.call(null,entity_x,ascii_dungeoncrawler.constants.tile_size),cljs.core.quot.call(null,entity_y,ascii_dungeoncrawler.constants.tile_size)], null);
});
/**
 * Gets the 8 surrounding tiles of x, y
 */
ascii_dungeoncrawler.systems.tilemap.neighbors = (function ascii_dungeoncrawler$systems$tilemap$neighbors(var_args){
var args7621 = [];
var len__6046__auto___7633 = arguments.length;
var i__6047__auto___7634 = (0);
while(true){
if((i__6047__auto___7634 < len__6046__auto___7633)){
args7621.push((arguments[i__6047__auto___7634]));

var G__7635 = (i__6047__auto___7634 + (1));
i__6047__auto___7634 = G__7635;
continue;
} else {
}
break;
}

var G__7623 = args7621.length;
switch (G__7623) {
case 2:
return ascii_dungeoncrawler.systems.tilemap.neighbors.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ascii_dungeoncrawler.systems.tilemap.neighbors.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7621.length)].join('')));

}
});

ascii_dungeoncrawler.systems.tilemap.neighbors.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
var iter__5760__auto__ = (function ascii_dungeoncrawler$systems$tilemap$iter__7624(s__7625){
return (new cljs.core.LazySeq(null,(function (){
var s__7625__$1 = s__7625;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__7625__$1);
if(temp__4425__auto__){
var xs__4977__auto__ = temp__4425__auto__;
var x_offset = cljs.core.first.call(null,xs__4977__auto__);
var iterys__5756__auto__ = ((function (s__7625__$1,x_offset,xs__4977__auto__,temp__4425__auto__){
return (function ascii_dungeoncrawler$systems$tilemap$iter__7624_$_iter__7626(s__7627){
return (new cljs.core.LazySeq(null,((function (s__7625__$1,x_offset,xs__4977__auto__,temp__4425__auto__){
return (function (){
var s__7627__$1 = s__7627;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__7627__$1);
if(temp__4425__auto____$1){
var s__7627__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__7627__$2)){
var c__5758__auto__ = cljs.core.chunk_first.call(null,s__7627__$2);
var size__5759__auto__ = cljs.core.count.call(null,c__5758__auto__);
var b__7629 = cljs.core.chunk_buffer.call(null,size__5759__auto__);
if((function (){var i__7628 = (0);
while(true){
if((i__7628 < size__5759__auto__)){
var y_offset = cljs.core._nth.call(null,c__5758__auto__,i__7628);
cljs.core.chunk_append.call(null,b__7629,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + x_offset),(y + y_offset)], null));

var G__7637 = (i__7628 + (1));
i__7628 = G__7637;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7629),ascii_dungeoncrawler$systems$tilemap$iter__7624_$_iter__7626.call(null,cljs.core.chunk_rest.call(null,s__7627__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7629),null);
}
} else {
var y_offset = cljs.core.first.call(null,s__7627__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + x_offset),(y + y_offset)], null),ascii_dungeoncrawler$systems$tilemap$iter__7624_$_iter__7626.call(null,cljs.core.rest.call(null,s__7627__$2)));
}
} else {
return null;
}
break;
}
});})(s__7625__$1,x_offset,xs__4977__auto__,temp__4425__auto__))
,null,null));
});})(s__7625__$1,x_offset,xs__4977__auto__,temp__4425__auto__))
;
var fs__5757__auto__ = cljs.core.seq.call(null,iterys__5756__auto__.call(null,cljs.core.range.call(null,(-1),(2))));
if(fs__5757__auto__){
return cljs.core.concat.call(null,fs__5757__auto__,ascii_dungeoncrawler$systems$tilemap$iter__7624.call(null,cljs.core.rest.call(null,s__7625__$1)));
} else {
var G__7638 = cljs.core.rest.call(null,s__7625__$1);
s__7625__$1 = G__7638;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5760__auto__.call(null,cljs.core.range.call(null,(-1),(2)));
});

ascii_dungeoncrawler.systems.tilemap.neighbors.cljs$core$IFn$_invoke$arity$1 = (function (p__7630){
var vec__7631 = p__7630;
var pos_x = cljs.core.nth.call(null,vec__7631,(0),null);
var pos_y = cljs.core.nth.call(null,vec__7631,(1),null);
var vec__7632 = ascii_dungeoncrawler.systems.tilemap.entity__GT_tile_pos;
var x = cljs.core.nth.call(null,vec__7632,(0),null);
var y = cljs.core.nth.call(null,vec__7632,(1),null);
var pos_x__$1 = pos_y;
return ascii_dungeoncrawler.systems.tilemap.neighbors.call(null,x,y);
});

ascii_dungeoncrawler.systems.tilemap.neighbors.cljs$lang$maxFixedArity = 2;
ascii_dungeoncrawler.systems.tilemap.get_tilemap_key = (function ascii_dungeoncrawler$systems$tilemap$get_tilemap_key(path){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tilemap","tilemap",407449043),path], null);
});
ascii_dungeoncrawler.systems.tilemap.update_in_state = (function ascii_dungeoncrawler$systems$tilemap$update_in_state(state,path,value){
return cljs.core.assoc_in.call(null,state,ascii_dungeoncrawler.systems.tilemap.get_tilemap_key.call(null,path),value);
});
ascii_dungeoncrawler.systems.tilemap.set_tilemap = (function ascii_dungeoncrawler$systems$tilemap$set_tilemap(state,tilemap){
return ascii_dungeoncrawler.systems.tilemap.update_in_state.call(null,state,new cljs.core.Keyword(null,"map","map",1371690461),tilemap);
});
ascii_dungeoncrawler.systems.tilemap.make_tile_BANG_ = (function ascii_dungeoncrawler$systems$tilemap$make_tile_BANG_(tile,p__7639){
var vec__7643 = p__7639;
var x = cljs.core.nth.call(null,vec__7643,(0),null);
var y = cljs.core.nth.call(null,vec__7643,(1),null);
var map__7644 = cljs.core.get.call(null,ascii_dungeoncrawler.systems.tilemap.tile_info,tile,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sprite","sprite",172516848),"?",new cljs.core.Keyword(null,"color","color",1011675173),(16711680)], null));
var map__7644__$1 = ((((!((map__7644 == null)))?((((map__7644.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7644.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7644):map__7644);
var sprite = cljs.core.get.call(null,map__7644__$1,new cljs.core.Keyword(null,"sprite","sprite",172516848));
var color = cljs.core.get.call(null,map__7644__$1,new cljs.core.Keyword(null,"color","color",1011675173));
return ascii_dungeoncrawler.pixi.char_sprite_BANG_.call(null,sprite,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),color);
});
ascii_dungeoncrawler.systems.tilemap.create_tile_sprites_BANG_ = (function ascii_dungeoncrawler$systems$tilemap$create_tile_sprites_BANG_(container,map){
var y_size = cljs.core.count.call(null,map);
var seq__7664_7682 = cljs.core.seq.call(null,cljs.core.range.call(null,y_size));
var chunk__7666_7683 = null;
var count__7667_7684 = (0);
var i__7668_7685 = (0);
while(true){
if((i__7668_7685 < count__7667_7684)){
var y_7686 = cljs.core._nth.call(null,chunk__7666_7683,i__7668_7685);
var row_7687 = cljs.core.get.call(null,map,y_7686);
var x_size_7688 = cljs.core.count.call(null,row_7687);
var seq__7670_7689 = cljs.core.seq.call(null,cljs.core.range.call(null,x_size_7688));
var chunk__7672_7690 = null;
var count__7673_7691 = (0);
var i__7674_7692 = (0);
while(true){
if((i__7674_7692 < count__7673_7691)){
var x_7693 = cljs.core._nth.call(null,chunk__7672_7690,i__7674_7692);
var tile_7694 = cljs.core.get.call(null,row_7687,x_7693);
var sprite_7695 = ascii_dungeoncrawler.systems.tilemap.make_tile_BANG_.call(null,tile_7694,ascii_dungeoncrawler.systems.tilemap.tile__GT_position.call(null,x_7693,y_7686));
ascii_dungeoncrawler.pixi.add_child_BANG_.call(null,container,sprite_7695);

var G__7696 = seq__7670_7689;
var G__7697 = chunk__7672_7690;
var G__7698 = count__7673_7691;
var G__7699 = (i__7674_7692 + (1));
seq__7670_7689 = G__7696;
chunk__7672_7690 = G__7697;
count__7673_7691 = G__7698;
i__7674_7692 = G__7699;
continue;
} else {
var temp__4425__auto___7700 = cljs.core.seq.call(null,seq__7670_7689);
if(temp__4425__auto___7700){
var seq__7670_7701__$1 = temp__4425__auto___7700;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7670_7701__$1)){
var c__5791__auto___7702 = cljs.core.chunk_first.call(null,seq__7670_7701__$1);
var G__7703 = cljs.core.chunk_rest.call(null,seq__7670_7701__$1);
var G__7704 = c__5791__auto___7702;
var G__7705 = cljs.core.count.call(null,c__5791__auto___7702);
var G__7706 = (0);
seq__7670_7689 = G__7703;
chunk__7672_7690 = G__7704;
count__7673_7691 = G__7705;
i__7674_7692 = G__7706;
continue;
} else {
var x_7707 = cljs.core.first.call(null,seq__7670_7701__$1);
var tile_7708 = cljs.core.get.call(null,row_7687,x_7707);
var sprite_7709 = ascii_dungeoncrawler.systems.tilemap.make_tile_BANG_.call(null,tile_7708,ascii_dungeoncrawler.systems.tilemap.tile__GT_position.call(null,x_7707,y_7686));
ascii_dungeoncrawler.pixi.add_child_BANG_.call(null,container,sprite_7709);

var G__7710 = cljs.core.next.call(null,seq__7670_7701__$1);
var G__7711 = null;
var G__7712 = (0);
var G__7713 = (0);
seq__7670_7689 = G__7710;
chunk__7672_7690 = G__7711;
count__7673_7691 = G__7712;
i__7674_7692 = G__7713;
continue;
}
} else {
}
}
break;
}

var G__7714 = seq__7664_7682;
var G__7715 = chunk__7666_7683;
var G__7716 = count__7667_7684;
var G__7717 = (i__7668_7685 + (1));
seq__7664_7682 = G__7714;
chunk__7666_7683 = G__7715;
count__7667_7684 = G__7716;
i__7668_7685 = G__7717;
continue;
} else {
var temp__4425__auto___7718 = cljs.core.seq.call(null,seq__7664_7682);
if(temp__4425__auto___7718){
var seq__7664_7719__$1 = temp__4425__auto___7718;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7664_7719__$1)){
var c__5791__auto___7720 = cljs.core.chunk_first.call(null,seq__7664_7719__$1);
var G__7721 = cljs.core.chunk_rest.call(null,seq__7664_7719__$1);
var G__7722 = c__5791__auto___7720;
var G__7723 = cljs.core.count.call(null,c__5791__auto___7720);
var G__7724 = (0);
seq__7664_7682 = G__7721;
chunk__7666_7683 = G__7722;
count__7667_7684 = G__7723;
i__7668_7685 = G__7724;
continue;
} else {
var y_7725 = cljs.core.first.call(null,seq__7664_7719__$1);
var row_7726 = cljs.core.get.call(null,map,y_7725);
var x_size_7727 = cljs.core.count.call(null,row_7726);
var seq__7676_7728 = cljs.core.seq.call(null,cljs.core.range.call(null,x_size_7727));
var chunk__7678_7729 = null;
var count__7679_7730 = (0);
var i__7680_7731 = (0);
while(true){
if((i__7680_7731 < count__7679_7730)){
var x_7732 = cljs.core._nth.call(null,chunk__7678_7729,i__7680_7731);
var tile_7733 = cljs.core.get.call(null,row_7726,x_7732);
var sprite_7734 = ascii_dungeoncrawler.systems.tilemap.make_tile_BANG_.call(null,tile_7733,ascii_dungeoncrawler.systems.tilemap.tile__GT_position.call(null,x_7732,y_7725));
ascii_dungeoncrawler.pixi.add_child_BANG_.call(null,container,sprite_7734);

var G__7735 = seq__7676_7728;
var G__7736 = chunk__7678_7729;
var G__7737 = count__7679_7730;
var G__7738 = (i__7680_7731 + (1));
seq__7676_7728 = G__7735;
chunk__7678_7729 = G__7736;
count__7679_7730 = G__7737;
i__7680_7731 = G__7738;
continue;
} else {
var temp__4425__auto___7739__$1 = cljs.core.seq.call(null,seq__7676_7728);
if(temp__4425__auto___7739__$1){
var seq__7676_7740__$1 = temp__4425__auto___7739__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7676_7740__$1)){
var c__5791__auto___7741 = cljs.core.chunk_first.call(null,seq__7676_7740__$1);
var G__7742 = cljs.core.chunk_rest.call(null,seq__7676_7740__$1);
var G__7743 = c__5791__auto___7741;
var G__7744 = cljs.core.count.call(null,c__5791__auto___7741);
var G__7745 = (0);
seq__7676_7728 = G__7742;
chunk__7678_7729 = G__7743;
count__7679_7730 = G__7744;
i__7680_7731 = G__7745;
continue;
} else {
var x_7746 = cljs.core.first.call(null,seq__7676_7740__$1);
var tile_7747 = cljs.core.get.call(null,row_7726,x_7746);
var sprite_7748 = ascii_dungeoncrawler.systems.tilemap.make_tile_BANG_.call(null,tile_7747,ascii_dungeoncrawler.systems.tilemap.tile__GT_position.call(null,x_7746,y_7725));
ascii_dungeoncrawler.pixi.add_child_BANG_.call(null,container,sprite_7748);

var G__7749 = cljs.core.next.call(null,seq__7676_7740__$1);
var G__7750 = null;
var G__7751 = (0);
var G__7752 = (0);
seq__7676_7728 = G__7749;
chunk__7678_7729 = G__7750;
count__7679_7730 = G__7751;
i__7680_7731 = G__7752;
continue;
}
} else {
}
}
break;
}

var G__7753 = cljs.core.next.call(null,seq__7664_7719__$1);
var G__7754 = null;
var G__7755 = (0);
var G__7756 = (0);
seq__7664_7682 = G__7753;
chunk__7666_7683 = G__7754;
count__7667_7684 = G__7755;
i__7668_7685 = G__7756;
continue;
}
} else {
}
}
break;
}

return container;
});
ascii_dungeoncrawler.systems.tilemap.initialize_BANG_ = (function ascii_dungeoncrawler$systems$tilemap$initialize_BANG_(state,stage){
cljs.core.println.call(null,"Initializing tile map state");

var tile_container = ascii_dungeoncrawler.pixi.create_container_BANG_.call(null);
ascii_dungeoncrawler.pixi.add_child_BANG_.call(null,stage,tile_container);

return ascii_dungeoncrawler.systems.tilemap.update_in_state.call(null,ascii_dungeoncrawler.systems.tilemap.set_tilemap.call(null,state,ascii_dungeoncrawler.systems.tilemap.initial_map),new cljs.core.Keyword(null,"container","container",-1736937707),ascii_dungeoncrawler.systems.tilemap.create_tile_sprites_BANG_.call(null,tile_container,ascii_dungeoncrawler.systems.tilemap.initial_map));
});
ascii_dungeoncrawler.systems.tilemap.get_intersecting_tile = (function ascii_dungeoncrawler$systems$tilemap$get_intersecting_tile(tile_data,tile_x,tile_y){
var tile = ascii_dungeoncrawler.systems.tilemap.tile_info_at.call(null,tile_data,tile_x,tile_y);
if(new cljs.core.Keyword(null,"walkable","walkable",-1315135173).cljs$core$IFn$_invoke$arity$1(tile) === false){
return ascii_dungeoncrawler.systems.tilemap.tile__GT_position.call(null,tile_x,tile_y);
} else {
return null;
}
});
ascii_dungeoncrawler.systems.tilemap.collide_with_tile = (function ascii_dungeoncrawler$systems$tilemap$collide_with_tile(tile_data,velocity,position,p__7757){
var vec__7759 = p__7757;
var tile_x = cljs.core.nth.call(null,vec__7759,(0),null);
var tile_y = cljs.core.nth.call(null,vec__7759,(1),null);
var intersecting_tile = ascii_dungeoncrawler.systems.tilemap.get_intersecting_tile.call(null,tile_data,tile_x,tile_y);
if(cljs.core.truth_((function (){var and__4976__auto__ = intersecting_tile;
if(cljs.core.truth_(and__4976__auto__)){
return ascii_dungeoncrawler.systems.collision.collides_QMARK_.call(null,position,intersecting_tile);
} else {
return and__4976__auto__;
}
})())){
return ascii_dungeoncrawler.systems.collision.adjust_position.call(null,position,intersecting_tile,velocity);
} else {
return position;
}
});
ascii_dungeoncrawler.systems.tilemap.calculate_next_position = (function ascii_dungeoncrawler$systems$tilemap$calculate_next_position(p__7760,velocity,tile_data){
var vec__7762 = p__7760;
var next_x = cljs.core.nth.call(null,vec__7762,(0),null);
var next_y = cljs.core.nth.call(null,vec__7762,(1),null);
var next_pos = vec__7762;
var adjust_position = cljs.core.partial.call(null,ascii_dungeoncrawler.systems.tilemap.collide_with_tile,tile_data,velocity);
var adjusted = cljs.core.reduce.call(null,adjust_position,next_pos,cljs.core.apply.call(null,ascii_dungeoncrawler.systems.tilemap.neighbors,ascii_dungeoncrawler.systems.tilemap.entity__GT_tile_pos.call(null,next_x,next_y)));
return adjusted;
});
ascii_dungeoncrawler.systems.tilemap.mk_update_entity_position_data = (function ascii_dungeoncrawler$systems$tilemap$mk_update_entity_position_data(tile_data){
return (function (component_map,p__7770){
var vec__7771 = p__7770;
var entity_id = cljs.core.nth.call(null,vec__7771,(0),null);
var vec__7772 = cljs.core.nth.call(null,vec__7771,(1),null);
var map__7773 = cljs.core.nth.call(null,vec__7772,(0),null);
var map__7773__$1 = ((((!((map__7773 == null)))?((((map__7773.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7773.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7773):map__7773);
var pos = cljs.core.get.call(null,map__7773__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));
var next_pos = cljs.core.get.call(null,map__7773__$1,new cljs.core.Keyword(null,"next-pos","next-pos",1805528106));
var map__7774 = cljs.core.nth.call(null,vec__7772,(1),null);
var map__7774__$1 = ((((!((map__7774 == null)))?((((map__7774.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7774.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7774):map__7774);
var velocity = cljs.core.get.call(null,map__7774__$1,new cljs.core.Keyword(null,"velocity","velocity",-581524355));
return cljs.core.assoc_in.call(null,component_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [entity_id,new cljs.core.Keyword(null,"next-pos","next-pos",1805528106)], null),ascii_dungeoncrawler.systems.tilemap.calculate_next_position.call(null,next_pos,velocity,tile_data));
});
});
ascii_dungeoncrawler.systems.tilemap.tilemap_collision_system = (function ascii_dungeoncrawler$systems$tilemap$tilemap_collision_system(state){
var tile_data = cljs.core.get_in.call(null,state,ascii_dungeoncrawler.systems.tilemap.get_tilemap_key.call(null,new cljs.core.Keyword(null,"map","map",1371690461)));
var entities = ascii_dungeoncrawler.ecs.entities_with_components.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"velocity","velocity",-581524355)], null));
var update_entity_position_data = ascii_dungeoncrawler.systems.tilemap.mk_update_entity_position_data.call(null,tile_data);
return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.Keyword(null,"position","position",-2011731912)], null),((function (tile_data,entities,update_entity_position_data){
return (function (p1__7777_SHARP_){
return cljs.core.reduce.call(null,update_entity_position_data,p1__7777_SHARP_,entities);
});})(tile_data,entities,update_entity_position_data))
);
});
ascii_dungeoncrawler.systems.tilemap.mk_tilemap_render_system = (function ascii_dungeoncrawler$systems$tilemap$mk_tilemap_render_system(stage){
return (function (state){
var tile_data = cljs.core.get_in.call(null,state,ascii_dungeoncrawler.systems.tilemap.get_tilemap_key.call(null,new cljs.core.Keyword(null,"map","map",1371690461)));
if(cljs.core.truth_(tile_data)){
return state;
} else {
return ascii_dungeoncrawler.systems.tilemap.initialize_BANG_.call(null,state,stage);
}
});
});
ascii_dungeoncrawler.systems.tilemap.mk_tilemap_system = (function ascii_dungeoncrawler$systems$tilemap$mk_tilemap_system(stage){
var system = cljs.core.comp.call(null,ascii_dungeoncrawler.systems.tilemap.mk_tilemap_render_system.call(null,stage),ascii_dungeoncrawler.systems.tilemap.tilemap_collision_system);
return system;
});

//# sourceMappingURL=tilemap.js.map