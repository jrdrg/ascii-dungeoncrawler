// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4425__auto__)){
var ns = temp__4425__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__7173_7187 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__7174_7188 = null;
var count__7175_7189 = (0);
var i__7176_7190 = (0);
while(true){
if((i__7176_7190 < count__7175_7189)){
var f_7191 = cljs.core._nth.call(null,chunk__7174_7188,i__7176_7190);
cljs.core.println.call(null,"  ",f_7191);

var G__7192 = seq__7173_7187;
var G__7193 = chunk__7174_7188;
var G__7194 = count__7175_7189;
var G__7195 = (i__7176_7190 + (1));
seq__7173_7187 = G__7192;
chunk__7174_7188 = G__7193;
count__7175_7189 = G__7194;
i__7176_7190 = G__7195;
continue;
} else {
var temp__4425__auto___7196 = cljs.core.seq.call(null,seq__7173_7187);
if(temp__4425__auto___7196){
var seq__7173_7197__$1 = temp__4425__auto___7196;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7173_7197__$1)){
var c__5791__auto___7198 = cljs.core.chunk_first.call(null,seq__7173_7197__$1);
var G__7199 = cljs.core.chunk_rest.call(null,seq__7173_7197__$1);
var G__7200 = c__5791__auto___7198;
var G__7201 = cljs.core.count.call(null,c__5791__auto___7198);
var G__7202 = (0);
seq__7173_7187 = G__7199;
chunk__7174_7188 = G__7200;
count__7175_7189 = G__7201;
i__7176_7190 = G__7202;
continue;
} else {
var f_7203 = cljs.core.first.call(null,seq__7173_7197__$1);
cljs.core.println.call(null,"  ",f_7203);

var G__7204 = cljs.core.next.call(null,seq__7173_7197__$1);
var G__7205 = null;
var G__7206 = (0);
var G__7207 = (0);
seq__7173_7187 = G__7204;
chunk__7174_7188 = G__7205;
count__7175_7189 = G__7206;
i__7176_7190 = G__7207;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_7208 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4988__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4988__auto__)){
return or__4988__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_7208);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_7208)))?cljs.core.second.call(null,arglists_7208):arglists_7208));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__7177 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__7178 = null;
var count__7179 = (0);
var i__7180 = (0);
while(true){
if((i__7180 < count__7179)){
var vec__7181 = cljs.core._nth.call(null,chunk__7178,i__7180);
var name = cljs.core.nth.call(null,vec__7181,(0),null);
var map__7182 = cljs.core.nth.call(null,vec__7181,(1),null);
var map__7182__$1 = ((((!((map__7182 == null)))?((((map__7182.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7182.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7182):map__7182);
var doc = cljs.core.get.call(null,map__7182__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__7182__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__7209 = seq__7177;
var G__7210 = chunk__7178;
var G__7211 = count__7179;
var G__7212 = (i__7180 + (1));
seq__7177 = G__7209;
chunk__7178 = G__7210;
count__7179 = G__7211;
i__7180 = G__7212;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__7177);
if(temp__4425__auto__){
var seq__7177__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7177__$1)){
var c__5791__auto__ = cljs.core.chunk_first.call(null,seq__7177__$1);
var G__7213 = cljs.core.chunk_rest.call(null,seq__7177__$1);
var G__7214 = c__5791__auto__;
var G__7215 = cljs.core.count.call(null,c__5791__auto__);
var G__7216 = (0);
seq__7177 = G__7213;
chunk__7178 = G__7214;
count__7179 = G__7215;
i__7180 = G__7216;
continue;
} else {
var vec__7184 = cljs.core.first.call(null,seq__7177__$1);
var name = cljs.core.nth.call(null,vec__7184,(0),null);
var map__7185 = cljs.core.nth.call(null,vec__7184,(1),null);
var map__7185__$1 = ((((!((map__7185 == null)))?((((map__7185.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7185.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7185):map__7185);
var doc = cljs.core.get.call(null,map__7185__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__7185__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__7217 = cljs.core.next.call(null,seq__7177__$1);
var G__7218 = null;
var G__7219 = (0);
var G__7220 = (0);
seq__7177 = G__7217;
chunk__7178 = G__7218;
count__7179 = G__7219;
i__7180 = G__7220;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map