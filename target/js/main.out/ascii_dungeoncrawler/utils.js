// Compiled by ClojureScript 1.7.170 {}
goog.provide('ascii_dungeoncrawler.utils');
goog.require('cljs.core');
ascii_dungeoncrawler.utils.clamp = (function ascii_dungeoncrawler$utils$clamp(val,min,max){
return Math.max(min,Math.min(val,max));
});
/**
 * Adds two [x y] vectors. Optionally, clamps the values between -max and +max.
 */
ascii_dungeoncrawler.utils.add_vectors = (function ascii_dungeoncrawler$utils$add_vectors(var_args){
var args7501 = [];
var len__6046__auto___7512 = arguments.length;
var i__6047__auto___7513 = (0);
while(true){
if((i__6047__auto___7513 < len__6046__auto___7512)){
args7501.push((arguments[i__6047__auto___7513]));

var G__7514 = (i__6047__auto___7513 + (1));
i__6047__auto___7513 = G__7514;
continue;
} else {
}
break;
}

var G__7503 = args7501.length;
switch (G__7503) {
case 2:
return ascii_dungeoncrawler.utils.add_vectors.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return ascii_dungeoncrawler.utils.add_vectors.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7501.length)].join('')));

}
});

ascii_dungeoncrawler.utils.add_vectors.cljs$core$IFn$_invoke$arity$2 = (function (p__7504,p__7505){
var vec__7506 = p__7504;
var x1 = cljs.core.nth.call(null,vec__7506,(0),null);
var y1 = cljs.core.nth.call(null,vec__7506,(1),null);
var vec__7507 = p__7505;
var x2 = cljs.core.nth.call(null,vec__7507,(0),null);
var y2 = cljs.core.nth.call(null,vec__7507,(1),null);
return cljs.core.mapv.call(null,cljs.core._PLUS_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x1,y1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x2,y2], null));
});

ascii_dungeoncrawler.utils.add_vectors.cljs$core$IFn$_invoke$arity$3 = (function (p__7508,p__7509,max){
var vec__7510 = p__7508;
var x1 = cljs.core.nth.call(null,vec__7510,(0),null);
var y1 = cljs.core.nth.call(null,vec__7510,(1),null);
var vec__7511 = p__7509;
var x2 = cljs.core.nth.call(null,vec__7511,(0),null);
var y2 = cljs.core.nth.call(null,vec__7511,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ascii_dungeoncrawler.utils.clamp.call(null,(x1 + x2),((-1) * max),max),ascii_dungeoncrawler.utils.clamp.call(null,(y1 + y2),((-1) * max),max)], null);
});

ascii_dungeoncrawler.utils.add_vectors.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=utils.js.map