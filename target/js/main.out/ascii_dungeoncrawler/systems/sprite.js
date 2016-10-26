// Compiled by ClojureScript 1.7.170 {}
goog.provide('ascii_dungeoncrawler.systems.sprite');
goog.require('cljs.core');
goog.require('ascii_dungeoncrawler.constants');
goog.require('ascii_dungeoncrawler.pixi');
goog.require('ascii_dungeoncrawler.ecs');
ascii_dungeoncrawler.systems.sprite.tiles_per_row = (32);
ascii_dungeoncrawler.systems.sprite.character_range = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(32),(255)], null);
ascii_dungeoncrawler.systems.sprite.ascii_symbols = cljs.core.map.call(null,String.fromCodePoint,cljs.core.apply.call(null,cljs.core.range,ascii_dungeoncrawler.systems.sprite.character_range));
ascii_dungeoncrawler.systems.sprite.character_positions = cljs.core.map.call(null,cljs.core.vector,ascii_dungeoncrawler.systems.sprite.ascii_symbols,cljs.core.range.call(null),cljs.core.iterate.call(null,(function (p1__7395_SHARP_){
return (ascii_dungeoncrawler.constants.tile_size + p1__7395_SHARP_);
}),(0)));
/**
 * Returns the 2-d coordinates given the index
 */
ascii_dungeoncrawler.systems.sprite.char_coords = (function ascii_dungeoncrawler$systems$sprite$char_coords(index){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(ascii_dungeoncrawler.constants.tile_size * cljs.core.mod.call(null,index,ascii_dungeoncrawler.systems.sprite.tiles_per_row)),new cljs.core.Keyword(null,"y","y",-1757859776),(ascii_dungeoncrawler.constants.tile_size * cljs.core.quot.call(null,index,ascii_dungeoncrawler.systems.sprite.tiles_per_row))], null);
});
/**
 * Creates a sprite from sprite-texture with the given frame rectangle.
 */
ascii_dungeoncrawler.systems.sprite.sprite_from_texture_BANG_ = (function ascii_dungeoncrawler$systems$sprite$sprite_from_texture_BANG_(var_args){
var args7396 = [];
var len__6046__auto___7399 = arguments.length;
var i__6047__auto___7400 = (0);
while(true){
if((i__6047__auto___7400 < len__6046__auto___7399)){
args7396.push((arguments[i__6047__auto___7400]));

var G__7401 = (i__6047__auto___7400 + (1));
i__6047__auto___7400 = G__7401;
continue;
} else {
}
break;
}

var G__7398 = args7396.length;
switch (G__7398) {
case 4:
return ascii_dungeoncrawler.systems.sprite.sprite_from_texture_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return ascii_dungeoncrawler.systems.sprite.sprite_from_texture_BANG_.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7396.length)].join('')));

}
});

ascii_dungeoncrawler.systems.sprite.sprite_from_texture_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (sprite_texture,x,y,tile_size){
return ascii_dungeoncrawler.systems.sprite.sprite_from_texture_BANG_.call(null,sprite_texture,x,y,tile_size,tile_size);
});

ascii_dungeoncrawler.systems.sprite.sprite_from_texture_BANG_.cljs$core$IFn$_invoke$arity$5 = (function (sprite_texture,x,y,w,h){
var rect = (new PIXI.Rectangle(x,y,w,h));
return (new PIXI.Texture(sprite_texture,rect));
});

ascii_dungeoncrawler.systems.sprite.sprite_from_texture_BANG_.cljs$lang$maxFixedArity = 5;
/**
 * Creates a texture with all required alphanumeric symbols and returns it
 */
ascii_dungeoncrawler.systems.sprite.generate_base_texture_BANG_ = (function ascii_dungeoncrawler$systems$sprite$generate_base_texture_BANG_(renderer){
var container = ascii_dungeoncrawler.pixi.create_container_BANG_.call(null);
var texture = ascii_dungeoncrawler.pixi.texture_from_cache.call(null,ascii_dungeoncrawler.constants.img_path);
ascii_dungeoncrawler.pixi.add_child_BANG_.call(null,container,texture);

return texture;
});
/**
 * Renders all alphanumeric characters to a texture for use as sprites
 */
ascii_dungeoncrawler.systems.sprite.init_text_sprites_BANG_ = (function ascii_dungeoncrawler$systems$sprite$init_text_sprites_BANG_(renderer,stage){
var base_texture = ascii_dungeoncrawler.systems.sprite.generate_base_texture_BANG_.call(null,renderer);
var sprite = (new PIXI.Sprite(base_texture));
cljs.core.println.call(null,"Initializing text sprites");

cljs.core.println.call(null,[cljs.core.str("height "),cljs.core.str(base_texture.height),cljs.core.str(" width "),cljs.core.str(base_texture.width)].join(''));

var seq__7415_7427 = cljs.core.seq.call(null,ascii_dungeoncrawler.systems.sprite.character_positions);
var chunk__7417_7428 = null;
var count__7418_7429 = (0);
var i__7419_7430 = (0);
while(true){
if((i__7419_7430 < count__7418_7429)){
var vec__7421_7431 = cljs.core._nth.call(null,chunk__7417_7428,i__7419_7430);
var char_7432 = cljs.core.nth.call(null,vec__7421_7431,(0),null);
var index_7433 = cljs.core.nth.call(null,vec__7421_7431,(1),null);
var __7434 = cljs.core.nth.call(null,vec__7421_7431,(2),null);
var map__7422_7435 = ascii_dungeoncrawler.systems.sprite.char_coords.call(null,index_7433);
var map__7422_7436__$1 = ((((!((map__7422_7435 == null)))?((((map__7422_7435.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7422_7435.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7422_7435):map__7422_7435);
var x_7437 = cljs.core.get.call(null,map__7422_7436__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y_7438 = cljs.core.get.call(null,map__7422_7436__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var char_texture_7439 = ascii_dungeoncrawler.systems.sprite.sprite_from_texture_BANG_.call(null,base_texture,x_7437,y_7438,ascii_dungeoncrawler.constants.tile_size);
PIXI.Texture.addTextureToCache(char_texture_7439,char_7432);

var G__7440 = seq__7415_7427;
var G__7441 = chunk__7417_7428;
var G__7442 = count__7418_7429;
var G__7443 = (i__7419_7430 + (1));
seq__7415_7427 = G__7440;
chunk__7417_7428 = G__7441;
count__7418_7429 = G__7442;
i__7419_7430 = G__7443;
continue;
} else {
var temp__4425__auto___7444 = cljs.core.seq.call(null,seq__7415_7427);
if(temp__4425__auto___7444){
var seq__7415_7445__$1 = temp__4425__auto___7444;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7415_7445__$1)){
var c__5791__auto___7446 = cljs.core.chunk_first.call(null,seq__7415_7445__$1);
var G__7447 = cljs.core.chunk_rest.call(null,seq__7415_7445__$1);
var G__7448 = c__5791__auto___7446;
var G__7449 = cljs.core.count.call(null,c__5791__auto___7446);
var G__7450 = (0);
seq__7415_7427 = G__7447;
chunk__7417_7428 = G__7448;
count__7418_7429 = G__7449;
i__7419_7430 = G__7450;
continue;
} else {
var vec__7424_7451 = cljs.core.first.call(null,seq__7415_7445__$1);
var char_7452 = cljs.core.nth.call(null,vec__7424_7451,(0),null);
var index_7453 = cljs.core.nth.call(null,vec__7424_7451,(1),null);
var __7454 = cljs.core.nth.call(null,vec__7424_7451,(2),null);
var map__7425_7455 = ascii_dungeoncrawler.systems.sprite.char_coords.call(null,index_7453);
var map__7425_7456__$1 = ((((!((map__7425_7455 == null)))?((((map__7425_7455.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7425_7455.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7425_7455):map__7425_7455);
var x_7457 = cljs.core.get.call(null,map__7425_7456__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y_7458 = cljs.core.get.call(null,map__7425_7456__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var char_texture_7459 = ascii_dungeoncrawler.systems.sprite.sprite_from_texture_BANG_.call(null,base_texture,x_7457,y_7458,ascii_dungeoncrawler.constants.tile_size);
PIXI.Texture.addTextureToCache(char_texture_7459,char_7452);

var G__7460 = cljs.core.next.call(null,seq__7415_7445__$1);
var G__7461 = null;
var G__7462 = (0);
var G__7463 = (0);
seq__7415_7427 = G__7460;
chunk__7417_7428 = G__7461;
count__7418_7429 = G__7462;
i__7419_7430 = G__7463;
continue;
}
} else {
}
}
break;
}

return cljs.core.println.call(null,"Images initialized.");
});
/**
 * Moves a sprite's position based on its position component, and creates
 *   a new sprite if it doesn't exist.
 */
ascii_dungeoncrawler.systems.sprite.component__GT_sprite_BANG_ = (function ascii_dungeoncrawler$systems$sprite$component__GT_sprite_BANG_(stage,p__7464,p__7465){
var map__7470 = p__7464;
var map__7470__$1 = ((((!((map__7470 == null)))?((((map__7470.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7470.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7470):map__7470);
var sprite = cljs.core.get.call(null,map__7470__$1,new cljs.core.Keyword(null,"sprite","sprite",172516848));
var char$ = cljs.core.get.call(null,map__7470__$1,new cljs.core.Keyword(null,"char","char",-641587586));
var draw_QMARK_ = cljs.core.get.call(null,map__7470__$1,new cljs.core.Keyword(null,"draw?","draw?",1765298547));
var color = cljs.core.get.call(null,map__7470__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var map__7471 = p__7465;
var map__7471__$1 = ((((!((map__7471 == null)))?((((map__7471.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7471.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7471):map__7471);
var position = cljs.core.get.call(null,map__7471__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));
if(cljs.core.truth_(sprite)){
return ascii_dungeoncrawler.pixi.change_color_BANG_.call(null,ascii_dungeoncrawler.pixi.move_BANG_.call(null,sprite,position),color);
} else {
var sprite__$1 = ascii_dungeoncrawler.pixi.char_sprite_BANG_.call(null,char$,position);
ascii_dungeoncrawler.pixi.add_child_BANG_.call(null,stage,sprite__$1);

return ascii_dungeoncrawler.pixi.change_color_BANG_.call(null,sprite__$1,color);
}
});
/**
 * Returns a function to update the sprite component data.
 */
ascii_dungeoncrawler.systems.sprite.mk_update_sprite_component_data = (function ascii_dungeoncrawler$systems$sprite$mk_update_sprite_component_data(stage){
return (function ascii_dungeoncrawler$systems$sprite$mk_update_sprite_component_data_$_update_sprite_component_data(component_map,p__7479){
var vec__7482 = p__7479;
var entity_id = cljs.core.nth.call(null,vec__7482,(0),null);
var vec__7483 = cljs.core.nth.call(null,vec__7482,(1),null);
var sprite_data = cljs.core.nth.call(null,vec__7483,(0),null);
var position_data = cljs.core.nth.call(null,vec__7483,(1),null);
return cljs.core.assoc_in.call(null,component_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [entity_id,new cljs.core.Keyword(null,"sprite","sprite",172516848)], null),ascii_dungeoncrawler.systems.sprite.component__GT_sprite_BANG_.call(null,stage,sprite_data,position_data));
});
});
ascii_dungeoncrawler.systems.sprite.mk_update_text_component_data = (function ascii_dungeoncrawler$systems$sprite$mk_update_text_component_data(stage){
return (function ascii_dungeoncrawler$systems$sprite$mk_update_text_component_data_$_update_text_component_data(component_map,p__7489){
var vec__7492 = p__7489;
var entity_id = cljs.core.nth.call(null,vec__7492,(0),null);
var vec__7493 = cljs.core.nth.call(null,vec__7492,(1),null);
var text_data = cljs.core.nth.call(null,vec__7493,(0),null);
var position_data = cljs.core.nth.call(null,vec__7493,(1),null);
return component_map;
});
});
/**
 * Main system function. Handles drawing sprites (and text) to the pixi stage.
 */
ascii_dungeoncrawler.systems.sprite.mk_sprite_system = (function ascii_dungeoncrawler$systems$sprite$mk_sprite_system(renderer,stage){
var sprite_texture = ascii_dungeoncrawler.systems.sprite.init_text_sprites_BANG_.call(null,renderer,stage);
var update_sprite_components = ascii_dungeoncrawler.systems.sprite.mk_update_sprite_component_data.call(null,stage);
var update_text_components = ascii_dungeoncrawler.systems.sprite.mk_update_text_component_data.call(null,stage);
return ((function (sprite_texture,update_sprite_components,update_text_components){
return (function (state){
var sprite_entities = ascii_dungeoncrawler.ecs.entities_with_components.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sprite","sprite",172516848),new cljs.core.Keyword(null,"position","position",-2011731912)], null));
var text_entities = ascii_dungeoncrawler.ecs.entities_with_components.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"position","position",-2011731912)], null));
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.Keyword(null,"sprite","sprite",172516848)], null),((function (sprite_entities,text_entities,sprite_texture,update_sprite_components,update_text_components){
return (function (p1__7494_SHARP_){
return cljs.core.reduce.call(null,update_sprite_components,p1__7494_SHARP_,sprite_entities);
});})(sprite_entities,text_entities,sprite_texture,update_sprite_components,update_text_components))
),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.Keyword(null,"text","text",-1790561697)], null),((function (sprite_entities,text_entities,sprite_texture,update_sprite_components,update_text_components){
return (function (p1__7495_SHARP_){
return cljs.core.reduce.call(null,update_text_components,p1__7495_SHARP_,text_entities);
});})(sprite_entities,text_entities,sprite_texture,update_sprite_components,update_text_components))
);
});
;})(sprite_texture,update_sprite_components,update_text_components))
});

//# sourceMappingURL=sprite.js.map