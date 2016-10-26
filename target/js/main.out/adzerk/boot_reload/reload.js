// Compiled by ClojureScript 1.7.170 {}
goog.provide('adzerk.boot_reload.reload');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.Uri');
goog.require('goog.async.DeferredList');
goog.require('goog.net.jsloader');
adzerk.boot_reload.reload.page_uri = (new goog.Uri(window.location.href));
adzerk.boot_reload.reload.ends_with_QMARK_ = (function adzerk$boot_reload$reload$ends_with_QMARK_(s,pat){
return cljs.core._EQ_.call(null,pat,cljs.core.subs.call(null,s,(cljs.core.count.call(null,s) - cljs.core.count.call(null,pat))));
});
adzerk.boot_reload.reload.reload_page_BANG_ = (function adzerk$boot_reload$reload$reload_page_BANG_(){
return window.location.reload();
});
adzerk.boot_reload.reload.normalize_href_or_uri = (function adzerk$boot_reload$reload$normalize_href_or_uri(href_or_uri){
var uri = (new goog.Uri(href_or_uri));
return adzerk.boot_reload.reload.page_uri.resolve(uri).getPath();
});
adzerk.boot_reload.reload.changed_href_QMARK_ = (function adzerk$boot_reload$reload$changed_href_QMARK_(href_or_uri,changed){
if(cljs.core.truth_(href_or_uri)){
var path = adzerk.boot_reload.reload.normalize_href_or_uri.call(null,href_or_uri);
if(cljs.core.truth_(cljs.core.not_empty.call(null,cljs.core.filter.call(null,((function (path){
return (function (p1__6273_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,adzerk.boot_reload.reload.normalize_href_or_uri.call(null,p1__6273_SHARP_),path);
});})(path))
,changed)))){
return goog.Uri.parse(path);
} else {
return null;
}
} else {
return null;
}
});
adzerk.boot_reload.reload.reload_css = (function adzerk$boot_reload$reload$reload_css(changed){
var sheets = document.styleSheets;
var seq__6278 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),sheets.length));
var chunk__6279 = null;
var count__6280 = (0);
var i__6281 = (0);
while(true){
if((i__6281 < count__6280)){
var s = cljs.core._nth.call(null,chunk__6279,i__6281);
var temp__4425__auto___6282 = (sheets[s]);
if(cljs.core.truth_(temp__4425__auto___6282)){
var sheet_6283 = temp__4425__auto___6282;
var temp__4425__auto___6284__$1 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,sheet_6283.href,changed);
if(cljs.core.truth_(temp__4425__auto___6284__$1)){
var href_uri_6285 = temp__4425__auto___6284__$1;
sheet_6283.ownerNode.href = href_uri_6285.makeUnique().toString();
} else {
}
} else {
}

var G__6286 = seq__6278;
var G__6287 = chunk__6279;
var G__6288 = count__6280;
var G__6289 = (i__6281 + (1));
seq__6278 = G__6286;
chunk__6279 = G__6287;
count__6280 = G__6288;
i__6281 = G__6289;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__6278);
if(temp__4425__auto__){
var seq__6278__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6278__$1)){
var c__5791__auto__ = cljs.core.chunk_first.call(null,seq__6278__$1);
var G__6290 = cljs.core.chunk_rest.call(null,seq__6278__$1);
var G__6291 = c__5791__auto__;
var G__6292 = cljs.core.count.call(null,c__5791__auto__);
var G__6293 = (0);
seq__6278 = G__6290;
chunk__6279 = G__6291;
count__6280 = G__6292;
i__6281 = G__6293;
continue;
} else {
var s = cljs.core.first.call(null,seq__6278__$1);
var temp__4425__auto___6294__$1 = (sheets[s]);
if(cljs.core.truth_(temp__4425__auto___6294__$1)){
var sheet_6295 = temp__4425__auto___6294__$1;
var temp__4425__auto___6296__$2 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,sheet_6295.href,changed);
if(cljs.core.truth_(temp__4425__auto___6296__$2)){
var href_uri_6297 = temp__4425__auto___6296__$2;
sheet_6295.ownerNode.href = href_uri_6297.makeUnique().toString();
} else {
}
} else {
}

var G__6298 = cljs.core.next.call(null,seq__6278__$1);
var G__6299 = null;
var G__6300 = (0);
var G__6301 = (0);
seq__6278 = G__6298;
chunk__6279 = G__6299;
count__6280 = G__6300;
i__6281 = G__6301;
continue;
}
} else {
return null;
}
}
break;
}
});
adzerk.boot_reload.reload.reload_img = (function adzerk$boot_reload$reload$reload_img(changed){
var images = document.images;
var seq__6306 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),images.length));
var chunk__6307 = null;
var count__6308 = (0);
var i__6309 = (0);
while(true){
if((i__6309 < count__6308)){
var s = cljs.core._nth.call(null,chunk__6307,i__6309);
var temp__4425__auto___6310 = (images[s]);
if(cljs.core.truth_(temp__4425__auto___6310)){
var image_6311 = temp__4425__auto___6310;
var temp__4425__auto___6312__$1 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,image_6311.src,changed);
if(cljs.core.truth_(temp__4425__auto___6312__$1)){
var href_uri_6313 = temp__4425__auto___6312__$1;
image_6311.src = href_uri_6313.makeUnique().toString();
} else {
}
} else {
}

var G__6314 = seq__6306;
var G__6315 = chunk__6307;
var G__6316 = count__6308;
var G__6317 = (i__6309 + (1));
seq__6306 = G__6314;
chunk__6307 = G__6315;
count__6308 = G__6316;
i__6309 = G__6317;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__6306);
if(temp__4425__auto__){
var seq__6306__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6306__$1)){
var c__5791__auto__ = cljs.core.chunk_first.call(null,seq__6306__$1);
var G__6318 = cljs.core.chunk_rest.call(null,seq__6306__$1);
var G__6319 = c__5791__auto__;
var G__6320 = cljs.core.count.call(null,c__5791__auto__);
var G__6321 = (0);
seq__6306 = G__6318;
chunk__6307 = G__6319;
count__6308 = G__6320;
i__6309 = G__6321;
continue;
} else {
var s = cljs.core.first.call(null,seq__6306__$1);
var temp__4425__auto___6322__$1 = (images[s]);
if(cljs.core.truth_(temp__4425__auto___6322__$1)){
var image_6323 = temp__4425__auto___6322__$1;
var temp__4425__auto___6324__$2 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,image_6323.src,changed);
if(cljs.core.truth_(temp__4425__auto___6324__$2)){
var href_uri_6325 = temp__4425__auto___6324__$2;
image_6323.src = href_uri_6325.makeUnique().toString();
} else {
}
} else {
}

var G__6326 = cljs.core.next.call(null,seq__6306__$1);
var G__6327 = null;
var G__6328 = (0);
var G__6329 = (0);
seq__6306 = G__6326;
chunk__6307 = G__6327;
count__6308 = G__6328;
i__6309 = G__6329;
continue;
}
} else {
return null;
}
}
break;
}
});
adzerk.boot_reload.reload.reload_js = (function adzerk$boot_reload$reload$reload_js(changed,p__6332){
var map__6335 = p__6332;
var map__6335__$1 = ((((!((map__6335 == null)))?((((map__6335.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6335.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6335):map__6335);
var on_jsload = cljs.core.get.call(null,map__6335__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),cljs.core.identity);
var js_files = cljs.core.filter.call(null,((function (map__6335,map__6335__$1,on_jsload){
return (function (p1__6330_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,p1__6330_SHARP_,".js");
});})(map__6335,map__6335__$1,on_jsload))
,changed);
if(cljs.core.seq.call(null,js_files)){
goog.async.DeferredList.gatherResults(cljs.core.clj__GT_js.call(null,cljs.core.map.call(null,((function (js_files,map__6335,map__6335__$1,on_jsload){
return (function (p1__6331_SHARP_){
return goog.net.jsloader.load(goog.Uri.parse(p1__6331_SHARP_).makeUnique());
});})(js_files,map__6335,map__6335__$1,on_jsload))
,js_files))).addCallbacks(((function (js_files,map__6335,map__6335__$1,on_jsload){
return (function() { 
var G__6337__delegate = function (_){
return on_jsload.call(null);
};
var G__6337 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__6338__i = 0, G__6338__a = new Array(arguments.length -  0);
while (G__6338__i < G__6338__a.length) {G__6338__a[G__6338__i] = arguments[G__6338__i + 0]; ++G__6338__i;}
  _ = new cljs.core.IndexedSeq(G__6338__a,0);
} 
return G__6337__delegate.call(this,_);};
G__6337.cljs$lang$maxFixedArity = 0;
G__6337.cljs$lang$applyTo = (function (arglist__6339){
var _ = cljs.core.seq(arglist__6339);
return G__6337__delegate(_);
});
G__6337.cljs$core$IFn$_invoke$arity$variadic = G__6337__delegate;
return G__6337;
})()
;})(js_files,map__6335,map__6335__$1,on_jsload))
,((function (js_files,map__6335,map__6335__$1,on_jsload){
return (function (e){
return console.error("Load failed:",e.message);
});})(js_files,map__6335,map__6335__$1,on_jsload))
);

if(cljs.core.truth_((window["jQuery"]))){
return jQuery(document).trigger("page-load");
} else {
return null;
}
} else {
return null;
}
});
adzerk.boot_reload.reload.reload_html = (function adzerk$boot_reload$reload$reload_html(changed){
var page_path = adzerk.boot_reload.reload.page_uri.getPath();
var html_path = (cljs.core.truth_(adzerk.boot_reload.reload.ends_with_QMARK_.call(null,page_path,"/"))?[cljs.core.str(page_path),cljs.core.str("index.html")].join(''):page_path);
if(cljs.core.truth_(adzerk.boot_reload.reload.changed_href_QMARK_.call(null,html_path,changed))){
return adzerk.boot_reload.reload.reload_page_BANG_.call(null);
} else {
return null;
}
});
adzerk.boot_reload.reload.group_log = (function adzerk$boot_reload$reload$group_log(title,things_to_log){
console.groupCollapsed(title);

var seq__6344_6348 = cljs.core.seq.call(null,things_to_log);
var chunk__6345_6349 = null;
var count__6346_6350 = (0);
var i__6347_6351 = (0);
while(true){
if((i__6347_6351 < count__6346_6350)){
var t_6352 = cljs.core._nth.call(null,chunk__6345_6349,i__6347_6351);
console.log(t_6352);

var G__6353 = seq__6344_6348;
var G__6354 = chunk__6345_6349;
var G__6355 = count__6346_6350;
var G__6356 = (i__6347_6351 + (1));
seq__6344_6348 = G__6353;
chunk__6345_6349 = G__6354;
count__6346_6350 = G__6355;
i__6347_6351 = G__6356;
continue;
} else {
var temp__4425__auto___6357 = cljs.core.seq.call(null,seq__6344_6348);
if(temp__4425__auto___6357){
var seq__6344_6358__$1 = temp__4425__auto___6357;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6344_6358__$1)){
var c__5791__auto___6359 = cljs.core.chunk_first.call(null,seq__6344_6358__$1);
var G__6360 = cljs.core.chunk_rest.call(null,seq__6344_6358__$1);
var G__6361 = c__5791__auto___6359;
var G__6362 = cljs.core.count.call(null,c__5791__auto___6359);
var G__6363 = (0);
seq__6344_6348 = G__6360;
chunk__6345_6349 = G__6361;
count__6346_6350 = G__6362;
i__6347_6351 = G__6363;
continue;
} else {
var t_6364 = cljs.core.first.call(null,seq__6344_6358__$1);
console.log(t_6364);

var G__6365 = cljs.core.next.call(null,seq__6344_6358__$1);
var G__6366 = null;
var G__6367 = (0);
var G__6368 = (0);
seq__6344_6348 = G__6365;
chunk__6345_6349 = G__6366;
count__6346_6350 = G__6367;
i__6347_6351 = G__6368;
continue;
}
} else {
}
}
break;
}

return console.groupEnd();
});
adzerk.boot_reload.reload.reload = (function adzerk$boot_reload$reload$reload(changed,opts){
adzerk.boot_reload.reload.group_log.call(null,"Reload",changed);

var G__6370 = changed;
adzerk.boot_reload.reload.reload_js.call(null,G__6370,opts);

adzerk.boot_reload.reload.reload_html.call(null,G__6370);

adzerk.boot_reload.reload.reload_css.call(null,G__6370);

adzerk.boot_reload.reload.reload_img.call(null,G__6370);

return G__6370;
});

//# sourceMappingURL=reload.js.map