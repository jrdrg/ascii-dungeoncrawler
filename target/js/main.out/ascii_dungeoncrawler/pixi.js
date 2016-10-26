// Compiled by ClojureScript 1.7.170 {}
goog.provide('ascii_dungeoncrawler.pixi');
goog.require('cljs.core');
goog.require('ascii_dungeoncrawler.constants');
ascii_dungeoncrawler.pixi.tile_width = (80);
ascii_dungeoncrawler.pixi.tile_height = (40);
ascii_dungeoncrawler.pixi.width = (ascii_dungeoncrawler.pixi.tile_width * ascii_dungeoncrawler.constants.tile_size);
ascii_dungeoncrawler.pixi.height = (ascii_dungeoncrawler.pixi.tile_height * ascii_dungeoncrawler.constants.tile_size);
if(typeof ascii_dungeoncrawler.pixi.textures !== 'undefined'){
} else {
ascii_dungeoncrawler.pixi.textures = cljs.core.atom.call(null,null);
}
ascii_dungeoncrawler.pixi.render_BANG_ = (function ascii_dungeoncrawler$pixi$render_BANG_(renderer,stage){
return renderer.render(stage);
});
/**
 * Creates a PIXI container.
 */
ascii_dungeoncrawler.pixi.create_container_BANG_ = (function ascii_dungeoncrawler$pixi$create_container_BANG_(var_args){
var args6102 = [];
var len__6046__auto___6105 = arguments.length;
var i__6047__auto___6106 = (0);
while(true){
if((i__6047__auto___6106 < len__6046__auto___6105)){
args6102.push((arguments[i__6047__auto___6106]));

var G__6107 = (i__6047__auto___6106 + (1));
i__6047__auto___6106 = G__6107;
continue;
} else {
}
break;
}

var G__6104 = args6102.length;
switch (G__6104) {
case 0:
return ascii_dungeoncrawler.pixi.create_container_BANG_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return ascii_dungeoncrawler.pixi.create_container_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args6102.length)].join('')));

}
});

ascii_dungeoncrawler.pixi.create_container_BANG_.cljs$core$IFn$_invoke$arity$0 = (function (){
return (new PIXI.Container());
});

ascii_dungeoncrawler.pixi.create_container_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (options){
return (new PIXI.Container(cljs.core.clj__GT_js.call(null,options)));
});

ascii_dungeoncrawler.pixi.create_container_BANG_.cljs$lang$maxFixedArity = 1;
/**
 * Creates a renderer
 */
ascii_dungeoncrawler.pixi.create_renderer_BANG_ = (function ascii_dungeoncrawler$pixi$create_renderer_BANG_(var_args){
var args6109 = [];
var len__6046__auto___6112 = arguments.length;
var i__6047__auto___6113 = (0);
while(true){
if((i__6047__auto___6113 < len__6046__auto___6112)){
args6109.push((arguments[i__6047__auto___6113]));

var G__6114 = (i__6047__auto___6113 + (1));
i__6047__auto___6113 = G__6114;
continue;
} else {
}
break;
}

var G__6111 = args6109.length;
switch (G__6111) {
case 0:
return ascii_dungeoncrawler.pixi.create_renderer_BANG_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return ascii_dungeoncrawler.pixi.create_renderer_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args6109.length)].join('')));

}
});

ascii_dungeoncrawler.pixi.create_renderer_BANG_.cljs$core$IFn$_invoke$arity$0 = (function (){
return ascii_dungeoncrawler.pixi.create_renderer_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 1, ["backgroundColor",(3342336)], null));
});

ascii_dungeoncrawler.pixi.create_renderer_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (options){
return PIXI.autoDetectRenderer(ascii_dungeoncrawler.pixi.width,ascii_dungeoncrawler.pixi.height,cljs.core.clj__GT_js.call(null,options));
});

ascii_dungeoncrawler.pixi.create_renderer_BANG_.cljs$lang$maxFixedArity = 1;
/**
 * Loads the tileset image and calls done when complete. Stores a flag in an
 *   atom so it doesn't load each time boot-reload triggers.
 */
ascii_dungeoncrawler.pixi.load_images_BANG_ = (function ascii_dungeoncrawler$pixi$load_images_BANG_(done){
if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,ascii_dungeoncrawler.pixi.textures),true)){
return done.call(null);
} else {
return PIXI.loader.add(ascii_dungeoncrawler.constants.img_path).load((function (){
cljs.core.reset_BANG_.call(null,ascii_dungeoncrawler.pixi.textures,true);

cljs.core.println.call(null,"Initialized base image.");

return done;
})()
);
}
});
/**
 * Returns a texture from the TextureCache
 */
ascii_dungeoncrawler.pixi.texture_from_cache = (function ascii_dungeoncrawler$pixi$texture_from_cache(path){
return (PIXI.utils.TextureCache[path]);
});
ascii_dungeoncrawler.pixi.move_BANG_ = (function ascii_dungeoncrawler$pixi$move_BANG_(object,p__6116){
var vec__6118 = p__6116;
var x = cljs.core.nth.call(null,vec__6118,(0),null);
var y = cljs.core.nth.call(null,vec__6118,(1),null);
(object["x"] = x);

(object["y"] = y);

return object;
});
ascii_dungeoncrawler.pixi.change_color_BANG_ = (function ascii_dungeoncrawler$pixi$change_color_BANG_(sprite,color){
if(cljs.core.truth_(color)){
(sprite["tint"] = color);

return sprite;
} else {
return sprite;
}
});
ascii_dungeoncrawler.pixi.create_text_BANG_ = (function ascii_dungeoncrawler$pixi$create_text_BANG_(var_args){
var args6119 = [];
var len__6046__auto___6126 = arguments.length;
var i__6047__auto___6127 = (0);
while(true){
if((i__6047__auto___6127 < len__6046__auto___6126)){
args6119.push((arguments[i__6047__auto___6127]));

var G__6128 = (i__6047__auto___6127 + (1));
i__6047__auto___6127 = G__6128;
continue;
} else {
}
break;
}

var G__6121 = args6119.length;
switch (G__6121) {
case 2:
return ascii_dungeoncrawler.pixi.create_text_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return ascii_dungeoncrawler.pixi.create_text_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args6119.length)].join('')));

}
});

ascii_dungeoncrawler.pixi.create_text_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (text,p__6122){
var vec__6123 = p__6122;
var x = cljs.core.nth.call(null,vec__6123,(0),null);
var y = cljs.core.nth.call(null,vec__6123,(1),null);
return ascii_dungeoncrawler.pixi.create_text_BANG_.call(null,text,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),new cljs.core.PersistentArrayMap(null, 3, ["font","16px monospace","fill",(16777215),"align","center"], null));
});

ascii_dungeoncrawler.pixi.create_text_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (text,p__6124,options){
var vec__6125 = p__6124;
var x = cljs.core.nth.call(null,vec__6125,(0),null);
var y = cljs.core.nth.call(null,vec__6125,(1),null);
var pixi_text = (new PIXI.Text(text,cljs.core.clj__GT_js.call(null,options)));
return ascii_dungeoncrawler.pixi.move_BANG_.call(null,pixi_text,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
});

ascii_dungeoncrawler.pixi.create_text_BANG_.cljs$lang$maxFixedArity = 3;
/**
 * Returns a sprite created from the provided ASCII character
 */
ascii_dungeoncrawler.pixi.char_sprite_BANG_ = (function ascii_dungeoncrawler$pixi$char_sprite_BANG_(var_args){
var args6130 = [];
var len__6046__auto___6137 = arguments.length;
var i__6047__auto___6138 = (0);
while(true){
if((i__6047__auto___6138 < len__6046__auto___6137)){
args6130.push((arguments[i__6047__auto___6138]));

var G__6139 = (i__6047__auto___6138 + (1));
i__6047__auto___6138 = G__6139;
continue;
} else {
}
break;
}

var G__6132 = args6130.length;
switch (G__6132) {
case 1:
return ascii_dungeoncrawler.pixi.char_sprite_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return ascii_dungeoncrawler.pixi.char_sprite_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return ascii_dungeoncrawler.pixi.char_sprite_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args6130.length)].join('')));

}
});

ascii_dungeoncrawler.pixi.char_sprite_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (char$){
var sprite = PIXI.Sprite.fromFrame(char$);
return sprite;
});

ascii_dungeoncrawler.pixi.char_sprite_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (char$,p__6133){
var vec__6134 = p__6133;
var x = cljs.core.nth.call(null,vec__6134,(0),null);
var y = cljs.core.nth.call(null,vec__6134,(1),null);
var sprite = ascii_dungeoncrawler.pixi.char_sprite_BANG_.call(null,char$);
return ascii_dungeoncrawler.pixi.move_BANG_.call(null,sprite,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
});

ascii_dungeoncrawler.pixi.char_sprite_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (char$,p__6135,color){
var vec__6136 = p__6135;
var x = cljs.core.nth.call(null,vec__6136,(0),null);
var y = cljs.core.nth.call(null,vec__6136,(1),null);
var sprite = ascii_dungeoncrawler.pixi.char_sprite_BANG_.call(null,char$,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
return ascii_dungeoncrawler.pixi.change_color_BANG_.call(null,sprite,color);
});

ascii_dungeoncrawler.pixi.char_sprite_BANG_.cljs$lang$maxFixedArity = 3;
ascii_dungeoncrawler.pixi.add_child_BANG_ = (function ascii_dungeoncrawler$pixi$add_child_BANG_(container,child){
container.addChild(child);

return container;
});
ascii_dungeoncrawler.pixi.remove_child_BANG_ = (function ascii_dungeoncrawler$pixi$remove_child_BANG_(container,child){
container.removeChild(child);

return container;
});

//# sourceMappingURL=pixi.js.map