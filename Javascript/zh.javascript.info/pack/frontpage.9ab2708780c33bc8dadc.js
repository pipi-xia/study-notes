var frontpage = function(t) {
var e = {};
function n(r) {
if (e[r]) return e[r].exports;
var o = e[r] = {
i: r,
l: !1,
exports: {}
};
return t[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports;
}
return n.m = t, n.c = e, n.d = function(t, e, r) {
n.o(t, e) || Object.defineProperty(t, e, {
enumerable: !0,
get: r
});
}, n.r = function(t) {
"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
value: "Module"
}), Object.defineProperty(t, "__esModule", {
value: !0
});
}, n.t = function(t, e) {
if (1 & e && (t = n(t)), 8 & e) return t;
if (4 & e && "object" == typeof t && t && t.__esModule) return t;
var r = Object.create(null);
if (n.r(r), Object.defineProperty(r, "default", {
enumerable: !0,
value: t
}), 2 & e && "string" != typeof t) for (var o in t) n.d(r, o, function(e) {
return t[e];
}.bind(null, o));
return r;
}, n.n = function(t) {
var e = t && t.__esModule ? function() {
return t.default;
} : function() {
return t;
};
return n.d(e, "a", e), e;
}, n.o = function(t, e) {
return Object.prototype.hasOwnProperty.call(t, e);
}, n.p = "/pack/", n(n.s = 349);
}({
0: function(t, e, n) {
"use strict";
t.exports = {
lang: "zh",
currency: {
code: "CNY",
sign: "元"
},
env: "production",
ordersMail: "https://zh.javascript.info/pack/orders@javascript.info",
providers: [ {
name: "Facebook",
id: "facebook"
}, {
name: "Google+",
id: "google"
}, {
name: "Github",
id: "github"
} ],
stripeKey: "pk_live_ukCHHaAAUHELtXYFa9EwbROW",
automationGhGroup: "js-tasks-ru"
};
},
14: function(t, e, n) {
"use strict";
function r(t) {
if (t = t || {}, this.elem = t.elem, this.size = t.size || "medium", this.class = t.class ? " " + t.class : "", 
this.elemClass = t.elemClass, "medium" != this.size && "small" != this.size && "large" != this.size) throw new Error("Unsupported size: " + this.size);
this.elem || (this.elem = document.createElement("div"));
}
r.prototype.start = function() {
this.elemClass && this.elem.classList.toggle(this.elemClass), this.elem.insertAdjacentHTML("beforeend", '<span class="spinner spinner_active spinner_' + this.size + this.class + '"><span class="spinner__dot spinner__dot_1"></span><span class="spinner__dot spinner__dot_2"></span><span class="spinner__dot spinner__dot_3"></span></span>');
}, r.prototype.stop = function() {
let t = this.elem.querySelector(".spinner");
t && (t.remove(), this.elemClass && this.elem.classList.toggle(this.elemClass));
}, window.Spinner = r, t.exports = r;
},
18: function(t, e, n) {
"use strict";
t.exports = n(19);
},
19: function(t, e, n) {
"use strict";
var r = n(20), o = n(21);
function s(t) {
return Object.prototype.toString.call(t);
}
function i(t) {
return "[object String]" === s(t);
}
function c(t) {
return !isNaN(t) && isFinite(t);
}
function a(t) {
return !0 === t || !1 === t;
}
function u(t) {
return "[object Object]" === s(t);
}
var l = Array.isArray || function(t) {
return "[object Array]" === s(t);
}, f = Array.prototype.forEach;
function h(t, e, n) {
if (null !== t) if (f && t.forEach === f) t.forEach(e, n); else if (t.length === +t.length) for (var r = 0, o = t.length; r < o; r += 1) e.call(n, t[r], r, t); else for (var s in t) Object.prototype.hasOwnProperty.call(t, s) && e.call(n, t[s], s, t);
}
var p = /%[sdj%]/g;
function d(t) {
var e = 1, n = arguments, r = n.length;
return String(t).replace(p, function(t) {
if ("%%" === t) return "%";
if (e >= r) return t;
switch (t) {
case "%s":
return String(n[e++]);

case "%d":
return Number(n[e++]);

case "%j":
return JSON.stringify(n[e++]);

default:
return t;
}
});
}
var m = "en";
function v(t) {
var e = {};
return h(t || {}, function(t, n) {
t && "object" == typeof t ? h(v(t), function(t, r) {
e[n + "." + r] = t;
}) : e[n] = t;
}), e;
}
var g = "#@$";
function _(t, e) {
return t + g + e;
}
function b(t, e, n) {
var r = _(e, n), o = t._storage;
if (o.hasOwnProperty(r)) return r;
if (e === t._defaultLocale) return null;
var s = t._fallbacks_cache;
if (s.hasOwnProperty(r)) return s[r];
for (var i, c = t._fallbacks[e] || [ t._defaultLocale ], a = 0, u = c.length; a < u; a++) if (i = _(c[a], n), 
o.hasOwnProperty(i)) return s[r] = i, s[r];
return s[r] = null, null;
}
function y(t, e, n) {
var r = o.indexOf(t, e);
return -1 === r ? d('[pluralizer for "%s" locale not found]', t) : void 0 === n[r] ? d('[plural form %d ("%s") not found in translation]', r, o.forms(t)[r]) : n[r];
}
function w(t) {
if (!(this instanceof w)) return new w(t);
this._defaultLocale = t ? String(t) : m, this._fallbacks = {}, this._fallbacks_cache = {}, 
this._storage = {}, this._plurals_cache = {};
}
w.prototype.addPhrase = function(t, e, n, r) {
var o, s = this;
if (a(r)) o = r ? 1 / 0 : 0; else if (c(r)) {
if ((o = Math.floor(r)) < 0) throw new TypeError("Invalid flatten level (should be >= 0).");
} else o = 1 / 0;
if (u(n) && o > 0) return h(n, function(n, r) {
s.addPhrase(t, (e ? e + "." : "") + r, n, o - 1);
}), this;
if (i(n)) this._storage[_(t, e)] = {
translation: n,
locale: t,
raw: !1
}; else {
if (!(l(n) || c(n) || a(n) || 0 === o && u(n))) throw new TypeError("Invalid translation - [String|Object|Array|Number|Boolean] expected.");
this._storage[_(t, e)] = {
translation: n,
locale: t,
raw: !0
};
}
return s._fallbacks_cache = {}, this;
}, w.prototype.setFallback = function(t, e) {
var n = this._defaultLocale;
if (n === t) throw new Error("Default locale can't have fallbacks");
var r = l(e) ? e.slice() : [ e ];
return r[r.length - 1] !== n && r.push(n), this._fallbacks[t] = r, this._fallbacks_cache = {}, 
this;
};
var F = /#\{|\(\(|\\\\/;
w.prototype.translate = function(t, e, n) {
var o, a = b(this, t, e);
return a ? (o = this._storage[a]).raw ? o.translation : (o.hasOwnProperty("compiled") || (o.compiled = function(t, e, n) {
var o, s, i, c, a, u;
return F.test(e) ? 1 === (o = r.parse(e)).length && "literal" === o[0].type ? o[0].text : (t._plurals_cache[n] || (t._plurals_cache[n] = new w(n)), 
u = t._plurals_cache[n], (s = []).push([ 'var str = "", strict, strict_exec, forms, forms_exec, plrl, cache, loc, loc_plzr, anchor;' ]), 
s.push("params = flatten(params);"), h(o, function(t) {
if ("literal" !== t.type) {
if ("variable" === t.type) return i = t.anchor, void s.push(d('str += ("undefined" === typeof (params[%j])) ? "[missed variable: %s]" : params[%j];', i, i, i));
if ("plural" !== t.type) throw new Error("Unknown node type");
i = t.anchor, c = {}, h(t.strict, function(e, o) {
var s = r.parse(e);
if (1 === s.length && "literal" === s[0].type) return c[o] = !1, void (t.strict[o] = s[0].text);
c[o] = !0, u.hasPhrase(n, e, !0) || u.addPhrase(n, e, e);
}), a = {}, h(t.forms, function(e, o) {
var s, i = r.parse(e);
if (1 === i.length && "literal" === i[0].type) return s = i[0].text, t.forms[o] = s, 
void (a[s] = !1);
a[e] = !0, u.hasPhrase(n, e, !0) || u.addPhrase(n, e, e);
}), s.push(d("loc = %j;", n)), s.push(d("loc_plzr = %j;", n.split(/[-_]/)[0])), 
s.push(d("anchor = params[%j];", i)), s.push(d("cache = this._plurals_cache[loc];")), 
s.push(d("strict = %j;", t.strict)), s.push(d("strict_exec = %j;", c)), s.push(d("forms = %j;", t.forms)), 
s.push(d("forms_exec = %j;", a)), s.push("if (+(anchor) != anchor) {"), s.push(d('  str += "[invalid plurals amount: %s(" + anchor + ")]";', i)), 
s.push("} else {"), s.push("  if (strict[anchor] !== undefined) {"), s.push("    plrl = strict[anchor];"), 
s.push("    str += strict_exec[anchor] ? cache.t(loc, plrl, params) : plrl;"), s.push("  } else {"), 
s.push("    plrl = pluralizer(loc_plzr, +anchor, forms);"), s.push("    str += forms_exec[plrl] ? cache.t(loc, plrl, params) : plrl;"), 
s.push("  }"), s.push("}");
} else s.push(d("str += %j;", t.text));
}), s.push("return str;"), new Function("params", "flatten", "pluralizer", s.join("\n"))) : e;
}(this, o.translation, o.locale)), "[object Function]" !== s(o.compiled) ? o.compiled : ((c(n) || i(n)) && (n = {
count: n,
value: n
}), o.compiled.call(this, n, v, y))) : t + ": No translation for [" + e + "]";
}, w.prototype.hasPhrase = function(t, e, n) {
return n ? this._storage.hasOwnProperty(_(t, e)) : !!b(this, t, e);
}, w.prototype.getLocale = function(t, e, n) {
if (n) return this._storage.hasOwnProperty(_(t, e)) ? t : null;
var r = b(this, t, e);
return r ? r.split(g, 2)[0] : null;
}, w.prototype.t = w.prototype.translate, w.prototype.stringify = function(t) {
var e = this, n = {};
h(this._storage, function(t, e) {
n[e.split(g)[1]] = !0;
});
var r = {};
h(n, function(n, o) {
var s = b(e, t, o);
if (s) {
var i = e._storage[s].locale;
r[i] || (r[i] = {}), r[i][o] = e._storage[s].translation;
}
});
var o = {
fallback: {},
locales: r
}, s = (e._fallbacks[t] || []).slice(0, -1);
return s.length && (o.fallback[t] = s), JSON.stringify(o);
}, w.prototype.load = function(t) {
var e = this;
return i(t) && (t = JSON.parse(t)), h(t.locales, function(t, n) {
h(t, function(t, r) {
e.addPhrase(n, r, t, 0);
});
}), h(t.fallback, function(t, n) {
e.setFallback(n, t);
}), this;
}, t.exports = w;
},
20: function(t, e, n) {
"use strict";
t.exports = function() {
function t(t, e, n, r, o, s) {
this.message = t, this.expected = e, this.found = n, this.offset = r, this.line = o, 
this.column = s, this.name = "SyntaxError";
}
return function(t, e) {
function n() {
this.constructor = t;
}
n.prototype = e.prototype, t.prototype = new n();
}(t, Error), {
SyntaxError: t,
parse: function(e) {
var n, r = arguments.length > 1 ? arguments[1] : {}, o = {}, s = {
start: lt
}, i = lt, c = o, a = "((", u = {
type: "literal",
value: "((",
description: '"(("'
}, l = "))", f = {
type: "literal",
value: "))",
description: '"))"'
}, h = null, p = function(t, e) {
return {
type: "plural",
forms: function(t) {
for (var e = [], n = 0; n < t.length; n++) void 0 === t[n].strict && e.push(t[n].text);
return e;
}(t),
strict: function(t) {
for (var e = {}, n = 0; n < t.length; n++) void 0 !== t[n].strict && (e[t[n].strict] = t[n].text);
return e;
}(t),
anchor: e || "count"
};
}, d = "|", m = {
type: "literal",
value: "|",
description: '"|"'
}, v = function(t, e) {
return [ t ].concat(e);
}, g = function(t) {
return [ t ];
}, _ = "=", b = {
type: "literal",
value: "=",
description: '"="'
}, y = /^[0-9]/, w = {
type: "class",
value: "[0-9]",
description: "[0-9]"
}, F = " ", x = {
type: "literal",
value: " ",
description: '" "'
}, k = function(t, e) {
return {
strict: t.join(""),
text: e.join("")
};
}, E = function() {
return {
text: it()
};
}, j = "\\", O = {
type: "literal",
value: "\\",
description: '"\\\\"'
}, S = /^[\\|)(]/, C = {
type: "class",
value: "[\\\\|)(]",
description: "[\\\\|)(]"
}, A = function(t) {
return t;
}, T = void 0, L = {
type: "any",
description: "any character"
}, z = function() {
return it();
}, M = ":", q = {
type: "literal",
value: ":",
description: '":"'
}, P = function(t) {
return t;
}, N = "#{", U = {
type: "literal",
value: "#{",
description: '"#{"'
}, D = "}", R = {
type: "literal",
value: "}",
description: '"}"'
}, H = function(t) {
return {
type: "variable",
anchor: t
};
}, $ = ".", I = {
type: "literal",
value: ".",
description: '"."'
}, J = function() {
return it();
}, B = /^[a-zA-Z_$]/, X = {
type: "class",
value: "[a-zA-Z_$]",
description: "[a-zA-Z_$]"
}, G = /^[a-zA-Z0-9_$]/, V = {
type: "class",
value: "[a-zA-Z0-9_$]",
description: "[a-zA-Z0-9_$]"
}, Z = function(t) {
return t;
}, W = function(t) {
return {
type: "literal",
text: t.join("")
};
}, K = /^[\\#()|]/, Y = {
type: "class",
value: "[\\\\#()|]",
description: "[\\\\#()|]"
}, Q = 0, tt = 0, et = 0, nt = {
line: 1,
column: 1,
seenCR: !1
}, rt = 0, ot = [], st = 0;
if ("startRule" in r) {
if (!(r.startRule in s)) throw new Error("Can't start parsing from rule \"" + r.startRule + '".');
i = s[r.startRule];
}
function it() {
return e.substring(tt, Q);
}
function ct(t) {
return et !== t && (et > t && (et = 0, nt = {
line: 1,
column: 1,
seenCR: !1
}), function(t, n, r) {
var o, s;
for (o = n; o < r; o++) "\n" === (s = e.charAt(o)) ? (t.seenCR || t.line++, t.column = 1, 
t.seenCR = !1) : "\r" === s || "\u2028" === s || "\u2029" === s ? (t.line++, t.column = 1, 
t.seenCR = !0) : (t.column++, t.seenCR = !1);
}(nt, et, t), et = t), nt;
}
function at(t) {
Q < rt || (Q > rt && (rt = Q, ot = []), ot.push(t));
}
function ut(n, r, o) {
var s = ct(o), i = o < e.length ? e.charAt(o) : null;
return null !== r && function(t) {
var e = 1;
for (t.sort(function(t, e) {
return t.description < e.description ? -1 : t.description > e.description ? 1 : 0;
}); e < t.length; ) t[e - 1] === t[e] ? t.splice(e, 1) : e++;
}(r), new t(null !== n ? n : function(t, e) {
var n, r = new Array(t.length);
for (n = 0; n < t.length; n++) r[n] = t[n].description;
return "Expected " + (t.length > 1 ? r.slice(0, -1).join(", ") + " or " + r[t.length - 1] : r[0]) + " but " + (e ? '"' + function(t) {
function e(t) {
return t.charCodeAt(0).toString(16).toUpperCase();
}
return t.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\x08/g, "\\b").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\f/g, "\\f").replace(/\r/g, "\\r").replace(/[\x00-\x07\x0B\x0E\x0F]/g, function(t) {
return "\\x0" + e(t);
}).replace(/[\x10-\x1F\x80-\xFF]/g, function(t) {
return "\\x" + e(t);
}).replace(/[\u0180-\u0FFF]/g, function(t) {
return "\\u0" + e(t);
}).replace(/[\u1080-\uFFFF]/g, function(t) {
return "\\u" + e(t);
});
}(e) + '"' : "end of input") + " found.";
}(r, i), r, i, o, s.line, s.column);
}
function lt() {
var t, e;
for (t = [], (e = gt()) === o && (e = ft()) === o && (e = dt()); e !== o; ) t.push(e), 
(e = gt()) === o && (e = ft()) === o && (e = dt());
return t;
}
function ft() {
var t, n, r, s, i;
return t = Q, e.substr(Q, 2) === a ? (n = a, Q += 2) : (n = o, 0 === st && at(u)), 
n !== o && (r = function t() {
var n, r, s, i;
return n = Q, (r = ht()) !== o ? (124 === e.charCodeAt(Q) ? (s = d, Q++) : (s = o, 
0 === st && at(m)), s !== o && (i = t()) !== o ? (tt = n, r = v(r, i), n = r) : (Q = n, 
n = c)) : (Q = n, n = c), n === o && (n = Q, (r = ht()) !== o && (tt = n, r = g(r)), 
n = r), n;
}()) !== o ? (e.substr(Q, 2) === l ? (s = l, Q += 2) : (s = o, 0 === st && at(f)), 
s !== o ? ((i = function() {
var t, n, r;
return t = Q, 58 === e.charCodeAt(Q) ? (n = M, Q++) : (n = o, 0 === st && at(q)), 
n !== o && (r = mt()) !== o ? (tt = t, n = P(r), t = n) : (Q = t, t = c), t;
}()) === o && (i = h), i !== o ? (tt = t, t = n = p(r, i)) : (Q = t, t = c)) : (Q = t, 
t = c)) : (Q = t, t = c), t;
}
function ht() {
var t, n, r, s, i, a;
if (t = Q, 61 === e.charCodeAt(Q) ? (n = _, Q++) : (n = o, 0 === st && at(b)), n !== o) {
if (r = [], y.test(e.charAt(Q)) ? (s = e.charAt(Q), Q++) : (s = o, 0 === st && at(w)), 
s !== o) for (;s !== o; ) r.push(s), y.test(e.charAt(Q)) ? (s = e.charAt(Q), Q++) : (s = o, 
0 === st && at(w)); else r = c;
if (r !== o) if (32 === e.charCodeAt(Q) ? (s = F, Q++) : (s = o, 0 === st && at(x)), 
s === o && (s = h), s !== o) {
if (i = [], (a = pt()) !== o) for (;a !== o; ) i.push(a), a = pt(); else i = c;
i !== o ? (tt = t, t = n = k(r, i)) : (Q = t, t = c);
} else Q = t, t = c; else Q = t, t = c;
} else Q = t, t = c;
if (t === o) {
if (t = Q, n = [], (r = pt()) !== o) for (;r !== o; ) n.push(r), r = pt(); else n = c;
n !== o && (tt = t, n = E()), t = n;
}
return t;
}
function pt() {
var t, n, r;
return t = Q, 92 === e.charCodeAt(Q) ? (n = j, Q++) : (n = o, 0 === st && at(O)), 
n !== o ? (S.test(e.charAt(Q)) ? (r = e.charAt(Q), Q++) : (r = o, 0 === st && at(C)), 
r !== o ? (tt = t, t = n = A(r)) : (Q = t, t = c)) : (Q = t, t = c), t === o && (t = Q, 
n = Q, st++, 124 === e.charCodeAt(Q) ? (r = d, Q++) : (r = o, 0 === st && at(m)), 
r === o && (e.substr(Q, 2) === l ? (r = l, Q += 2) : (r = o, 0 === st && at(f))), 
st--, r === o ? n = T : (Q = n, n = c), n !== o ? (e.length > Q ? (r = e.charAt(Q), 
Q++) : (r = o, 0 === st && at(L)), r !== o ? (tt = t, t = n = z()) : (Q = t, t = c)) : (Q = t, 
t = c)), t;
}
function dt() {
var t, n, r, s;
return t = Q, e.substr(Q, 2) === N ? (n = N, Q += 2) : (n = o, 0 === st && at(U)), 
n !== o && (r = mt()) !== o ? (125 === e.charCodeAt(Q) ? (s = D, Q++) : (s = o, 
0 === st && at(R)), s !== o ? (tt = t, t = n = H(r)) : (Q = t, t = c)) : (Q = t, 
t = c), t;
}
function mt() {
var t, n, r, s;
if (t = Q, vt() !== o) if (46 === e.charCodeAt(Q) ? (n = $, Q++) : (n = o, 0 === st && at(I)), 
n !== o) {
if (r = [], (s = mt()) !== o) for (;s !== o; ) r.push(s), s = mt(); else r = c;
r !== o ? (tt = t, t = J()) : (Q = t, t = c);
} else Q = t, t = c; else Q = t, t = c;
return t === o && (t = vt()), t;
}
function vt() {
var t, n, r, s;
if (t = Q, B.test(e.charAt(Q)) ? (n = e.charAt(Q), Q++) : (n = o, 0 === st && at(X)), 
n !== o) {
for (r = [], G.test(e.charAt(Q)) ? (s = e.charAt(Q), Q++) : (s = o, 0 === st && at(V)); s !== o; ) r.push(s), 
G.test(e.charAt(Q)) ? (s = e.charAt(Q), Q++) : (s = o, 0 === st && at(V));
r !== o ? (tt = t, t = n = z()) : (Q = t, t = c);
} else Q = t, t = c;
return t;
}
function gt() {
var t, e, n, r, s;
if (t = Q, e = [], n = Q, r = Q, st++, (s = ft()) === o && (s = dt()), st--, s === o ? r = T : (Q = r, 
r = c), r !== o && (s = _t()) !== o ? (tt = n, n = r = Z(s)) : (Q = n, n = c), n !== o) for (;n !== o; ) e.push(n), 
n = Q, r = Q, st++, (s = ft()) === o && (s = dt()), st--, s === o ? r = T : (Q = r, 
r = c), r !== o && (s = _t()) !== o ? (tt = n, n = r = Z(s)) : (Q = n, n = c); else e = c;
return e !== o && (tt = t, e = W(e)), t = e;
}
function _t() {
var t, n, r;
return t = Q, 92 === e.charCodeAt(Q) ? (n = j, Q++) : (n = o, 0 === st && at(O)), 
n !== o ? (K.test(e.charAt(Q)) ? (r = e.charAt(Q), Q++) : (r = o, 0 === st && at(Y)), 
r !== o ? (tt = t, t = n = A(r)) : (Q = t, t = c)) : (Q = t, t = c), t === o && (e.length > Q ? (t = e.charAt(Q), 
Q++) : (t = o, 0 === st && at(L))), t;
}
if ((n = i()) !== o && Q === e.length) return n;
throw n !== o && Q < e.length && at({
type: "end",
description: "end of input"
}), ut(null, ot, rt);
}
};
}();
},
21: function(t, e, n) {
"use strict";
var r = {};
function o(t) {
var e;
return r[t] ? t : (e = t.toLowerCase().replace("_", "-"), r[e] ? e : (e = e.split("-")[0], 
r[e] ? e : null));
}
function s(t, e) {
var n = o(t);
if (!n) return -1;
if (!r[n].cFn) return 0;
var s = String(e), i = s.indexOf(".") < 0 ? "" : s.split(".")[1], c = i.length, a = +e, u = +s.split(".")[0], l = 0 === i.length ? 0 : +i.replace(/0+$/, "");
return r[n].cFn(a, u, c, +i, l);
}
function i(t, e) {
var n = o(t);
if (!n) return -1;
if (!r[n].oFn) return 0;
var s = String(e), i = s.indexOf(".") < 0 ? "" : s.split(".")[1], c = i.length, a = +e, u = +s.split(".")[0], l = 0 === i.length ? 0 : +i.replace(/0+$/, "");
return r[n].oFn(a, u, c, +i, l);
}
t.exports = function(t, e) {
var n = o(t);
return n ? r[n].c[s(n, e)] : null;
}, t.exports.indexOf = s, t.exports.forms = function(t) {
var e = o(t);
return r[e] ? r[e].c : null;
}, t.exports.ordinal = function(t, e) {
var n = o(t);
return r[n] ? r[n].o[i(n, e)] : null;
}, t.exports.ordinal.indexOf = i, t.exports.ordinal.forms = function(t) {
var e = o(t);
return r[e] ? r[e].o : null;
};
var c = [ "zero", "one", "two", "few", "many", "other" ];
function a(t) {
return c[t];
}
function u(t, e) {
var n;
for (e.c = e.c ? e.c.map(a) : [ "other" ], e.o = e.o ? e.o.map(a) : [ "other" ], 
n = 0; n < t.length; n++) r[t[n]] = e;
}
function l(t, e, n) {
return t <= n && n <= e && n % 1 == 0;
}
function f(t, e) {
return t.indexOf(e) >= 0;
}
u([ "af", "asa", "bem", "bez", "bg", "brx", "ce", "cgg", "chr", "ckb", "dv", "ee", "el", "eo", "es", "eu", "fo", "fur", "gsw", "ha", "haw", "jgo", "jmc", "kaj", "kcg", "kkj", "kl", "ks", "ksb", "ku", "ky", "lb", "lg", "mas", "mgo", "ml", "mn", "nah", "nb", "nd", "nn", "nnh", "no", "nr", "ny", "nyn", "om", "or", "os", "pap", "ps", "rm", "rof", "rwk", "saq", "sdh", "seh", "sn", "so", "ss", "ssy", "st", "syr", "ta", "te", "teo", "tig", "tk", "tn", "tr", "ts", "ug", "uz", "ve", "vo", "vun", "wae", "xh", "xog" ], {
c: [ 1, 5 ],
cFn: function(t) {
return 1 === t ? 0 : 1;
}
}), u([ "ak", "bh", "guw", "ln", "mg", "nso", "pa", "ti", "wa" ], {
c: [ 1, 5 ],
cFn: function(t) {
return l(0, 1, t) ? 0 : 1;
}
}), u([ "am", "fa", "kn", "zu" ], {
c: [ 1, 5 ],
cFn: function(t, e) {
return 0 === e || 1 === t ? 0 : 1;
}
}), u([ "ar", "ars" ], {
c: [ 0, 1, 2, 3, 4, 5 ],
cFn: function(t) {
var e = t % 100;
return 0 === t ? 0 : 1 === t ? 1 : 2 === t ? 2 : l(3, 10, e) ? 3 : l(11, 99, e) ? 4 : 5;
}
}), u([ "as", "bn" ], {
c: [ 1, 5 ],
cFn: function(t, e) {
return 0 === e || 1 === t ? 0 : 1;
},
o: [ 1, 2, 3, 4, 5 ],
oFn: function(t) {
return f([ 1, 5, 7, 8, 9, 10 ], t) ? 0 : f([ 2, 3 ], t) ? 1 : 4 === t ? 2 : 6 === t ? 3 : 4;
}
}), u([ "ast", "de", "et", "fi", "fy", "gl", "ji", "nl", "sw", "ur", "yi" ], {
c: [ 1, 5 ],
cFn: function(t, e, n) {
return 1 === e && 0 === n ? 0 : 1;
}
}), u([ "az" ], {
c: [ 1, 5 ],
cFn: function(t) {
return 1 === t ? 0 : 1;
},
o: [ 1, 3, 4, 5 ],
oFn: function(t, e) {
var n = e % 10, r = e % 100, o = e % 1e3;
return f([ 1, 2, 5, 7, 8 ], n) || f([ 20, 50, 70, 80 ], r) ? 0 : f([ 3, 4 ], n) || f([ 100, 200, 300, 400, 500, 600, 700, 800, 900 ], o) ? 1 : 0 === e || 6 === n || f([ 40, 60, 90 ], r) ? 2 : 3;
}
}), u([ "be" ], {
c: [ 1, 3, 4, 5 ],
cFn: function(t) {
var e = t % 10, n = t % 100;
return 1 === e && 11 !== n ? 0 : l(2, 4, e) && !l(12, 14, n) ? 1 : 0 === e || l(5, 9, e) || l(11, 14, n) ? 2 : 3;
},
o: [ 3, 5 ],
oFn: function(t) {
var e = t % 100;
return f([ 2, 3 ], t % 10) && !f([ 12, 13 ], e) ? 0 : 1;
}
}), u([ "bm", "bo", "dz", "id", "ig", "ii", "in", "ja", "jbo", "jv", "jw", "kde", "kea", "km", "ko", "lkt", "my", "nqo", "root", "sah", "ses", "sg", "th", "to", "wo", "yo", "yue", "zh" ], {}), 
u([ "br" ], {
c: [ 1, 2, 3, 4, 5 ],
cFn: function(t) {
var e = t % 10, n = t % 100, r = t % 1e6;
return 1 !== e || f([ 11, 71, 91 ], n) ? 2 !== e || f([ 12, 72, 92 ], n) ? !l(3, 4, e) && 9 !== e || l(10, 19, n) || l(70, 79, n) || l(90, 99, n) ? 0 !== t && 0 === r ? 3 : 4 : 2 : 1 : 0;
}
}), u([ "bs", "hr", "sh", "sr" ], {
c: [ 1, 3, 5 ],
cFn: function(t, e, n, r) {
var o = e % 10, s = e % 100, i = r % 10, c = r % 100;
return 0 === n && 1 === o && 11 !== s || 1 === i && 11 !== c ? 0 : 0 === n && l(2, 4, o) && !l(12, 14, s) || l(2, 4, i) && !l(12, 14, c) ? 1 : 2;
}
}), u([ "ca" ], {
c: [ 1, 5 ],
cFn: function(t, e, n) {
return 1 === e && 0 === n ? 0 : 1;
},
o: [ 1, 2, 3, 5 ],
oFn: function(t) {
return f([ 1, 3 ], t) ? 0 : 2 === t ? 1 : 4 === t ? 2 : 3;
}
}), u([ "cs", "sk" ], {
c: [ 1, 3, 4, 5 ],
cFn: function(t, e, n) {
return 1 === e && 0 === n ? 0 : l(2, 4, e) && 0 === n ? 1 : 0 !== n ? 2 : 3;
}
}), u([ "cy" ], {
c: [ 0, 1, 2, 3, 4, 5 ],
cFn: function(t) {
return 0 === t ? 0 : 1 === t ? 1 : 2 === t ? 2 : 3 === t ? 3 : 6 === t ? 4 : 5;
},
o: [ 0, 1, 2, 3, 4, 5 ],
oFn: function(t) {
return f([ 0, 7, 8, 9 ], t) ? 0 : 1 === t ? 1 : 2 === t ? 2 : f([ 3, 4 ], t) ? 3 : f([ 5, 6 ], t) ? 4 : 5;
}
}), u([ "da" ], {
c: [ 1, 5 ],
cFn: function(t, e, n, r, o) {
return 1 === t || 0 !== o && f([ 0, 1 ], e) ? 0 : 1;
}
}), u([ "dsb", "hsb" ], {
c: [ 1, 2, 3, 5 ],
cFn: function(t, e, n, r) {
var o = e % 100, s = r % 100;
return 0 === n && 1 === o || 1 === s ? 0 : 0 === n && 2 === o || 2 === s ? 1 : 0 === n && l(3, 4, o) || l(3, 4, s) ? 2 : 3;
}
}), u([ "en" ], {
c: [ 1, 5 ],
cFn: function(t, e, n) {
return 1 === e && 0 === n ? 0 : 1;
},
o: [ 1, 2, 3, 5 ],
oFn: function(t) {
var e = t % 10, n = t % 100;
return 1 === e && 11 !== n ? 0 : 2 === e && 12 !== n ? 1 : 3 === e && 13 !== n ? 2 : 3;
}
}), u([ "ff", "kab" ], {
c: [ 1, 5 ],
cFn: function(t, e) {
return f([ 0, 1 ], e) ? 0 : 1;
}
}), u([ "fil", "tl" ], {
c: [ 1, 5 ],
cFn: function(t, e, n, r) {
var o = e % 10, s = r % 10;
return 0 === n && f([ 1, 2, 3 ], e) || 0 === n && !f([ 4, 6, 9 ], o) || 0 !== n && !f([ 4, 6, 9 ], s) ? 0 : 1;
},
o: [ 1, 5 ],
oFn: function(t) {
return 1 === t ? 0 : 1;
}
}), u([ "fr", "hy" ], {
c: [ 1, 5 ],
cFn: function(t, e) {
return f([ 0, 1 ], e) ? 0 : 1;
},
o: [ 1, 5 ],
oFn: function(t) {
return 1 === t ? 0 : 1;
}
}), u([ "ga" ], {
c: [ 1, 2, 3, 4, 5 ],
cFn: function(t) {
return 1 === t ? 0 : 2 === t ? 1 : l(3, 6, t) ? 2 : l(7, 10, t) ? 3 : 4;
},
o: [ 1, 5 ],
oFn: function(t) {
return 1 === t ? 0 : 1;
}
}), u([ "gd" ], {
c: [ 1, 2, 3, 5 ],
cFn: function(t) {
return f([ 1, 11 ], t) ? 0 : f([ 2, 12 ], t) ? 1 : l(3, 10, t) || l(13, 19, t) ? 2 : 3;
}
}), u([ "gu", "hi" ], {
c: [ 1, 5 ],
cFn: function(t, e) {
return 0 === e || 1 === t ? 0 : 1;
},
o: [ 1, 2, 3, 4, 5 ],
oFn: function(t) {
return 1 === t ? 0 : f([ 2, 3 ], t) ? 1 : 4 === t ? 2 : 6 === t ? 3 : 4;
}
}), u([ "gv" ], {
c: [ 1, 2, 3, 4, 5 ],
cFn: function(t, e, n) {
var r = e % 10;
return 0 === n && 1 === r ? 0 : 0 === n && 2 === r ? 1 : 0 === n && f([ 0, 20, 40, 60, 80 ], e % 100) ? 2 : 0 !== n ? 3 : 4;
}
}), u([ "he", "iw" ], {
c: [ 1, 2, 4, 5 ],
cFn: function(t, e, n) {
var r = t % 10;
return 1 === e && 0 === n ? 0 : 2 === e && 0 === n ? 1 : 0 !== n || l(0, 10, t) || 0 !== r ? 3 : 2;
}
}), u([ "hu" ], {
c: [ 1, 5 ],
cFn: function(t) {
return 1 === t ? 0 : 1;
},
o: [ 1, 5 ],
oFn: function(t) {
return f([ 1, 5 ], t) ? 0 : 1;
}
}), u([ "is" ], {
c: [ 1, 5 ],
cFn: function(t, e, n, r, o) {
return 0 === o && 1 === e % 10 && 11 !== e % 100 || 0 !== o ? 0 : 1;
}
}), u([ "it" ], {
c: [ 1, 5 ],
cFn: function(t, e, n) {
return 1 === e && 0 === n ? 0 : 1;
},
o: [ 4, 5 ],
oFn: function(t) {
return f([ 11, 8, 80, 800 ], t) ? 0 : 1;
}
}), u([ "iu", "kw", "naq", "se", "sma", "smi", "smj", "smn", "sms" ], {
c: [ 1, 2, 5 ],
cFn: function(t) {
return 1 === t ? 0 : 2 === t ? 1 : 2;
}
}), u([ "ka" ], {
c: [ 1, 5 ],
cFn: function(t) {
return 1 === t ? 0 : 1;
},
o: [ 1, 4, 5 ],
oFn: function(t, e) {
var n = e % 100;
return 1 === e ? 0 : 0 === e || l(2, 20, n) || 40 === n || 60 === n || 80 === n ? 1 : 2;
}
}), u([ "kk" ], {
c: [ 1, 5 ],
cFn: function(t) {
return 1 === t ? 0 : 1;
},
o: [ 4, 5 ],
oFn: function(t) {
var e = t % 10;
return 6 === e || 9 === e || 0 === e && 0 !== t ? 0 : 1;
}
}), u([ "ksh" ], {
c: [ 0, 1, 5 ],
cFn: function(t) {
return 0 === t ? 0 : 1 === t ? 1 : 2;
}
}), u([ "lag" ], {
c: [ 0, 1, 5 ],
cFn: function(t, e) {
return 0 === t ? 0 : f([ 0, 1 ], e) && 0 !== t ? 1 : 2;
}
}), u([ "lo", "ms", "vi" ], {
o: [ 1, 5 ],
oFn: function(t) {
return 1 === t ? 0 : 1;
}
}), u([ "lt" ], {
c: [ 1, 3, 4, 5 ],
cFn: function(t, e, n, r) {
var o = t % 10, s = t % 100;
return 1 !== o || l(11, 19, s) ? l(2, 9, o) && !l(11, 19, s) ? 1 : 0 !== r ? 2 : 3 : 0;
}
}), u([ "lv", "prg" ], {
c: [ 0, 1, 5 ],
cFn: function(t, e, n, r) {
var o = t % 10, s = t % 100, i = r % 100, c = r % 10;
return 0 === o || l(11, 19, s) || 2 === n && l(11, 19, i) ? 0 : 1 === o && 11 !== s || 2 === n && 1 === c && 11 !== i || 2 !== n && 1 === c ? 1 : 2;
}
}), u([ "mk" ], {
c: [ 1, 5 ],
cFn: function(t, e, n, r) {
return 0 === n && 1 === e % 10 || 1 === r % 10 ? 0 : 1;
},
o: [ 1, 2, 4, 5 ],
oFn: function(t, e) {
var n = e % 10, r = e % 100;
return 1 === n && 11 !== r ? 0 : 2 === n && 12 !== r ? 1 : f([ 7, 8 ], n) && !f([ 17, 18 ], r) ? 2 : 3;
}
}), u([ "mo", "ro" ], {
c: [ 1, 3, 5 ],
cFn: function(t, e, n) {
return 1 === e && 0 === n ? 0 : 0 !== n || 0 === t || 1 !== t && l(1, 19, t % 100) ? 1 : 2;
},
o: [ 1, 5 ],
oFn: function(t) {
return 1 === t ? 0 : 1;
}
}), u([ "mr" ], {
c: [ 1, 5 ],
cFn: function(t, e) {
return 0 === e || 1 === t ? 0 : 1;
},
o: [ 1, 2, 3, 5 ],
oFn: function(t) {
return 1 === t ? 0 : f([ 2, 3 ], t) ? 1 : 4 === t ? 2 : 3;
}
}), u([ "mt" ], {
c: [ 1, 3, 4, 5 ],
cFn: function(t) {
var e = t % 100;
return 1 === t ? 0 : 0 === t || l(2, 10, e) ? 1 : l(11, 19, e) ? 2 : 3;
}
}), u([ "ne" ], {
c: [ 1, 5 ],
cFn: function(t) {
return 1 === t ? 0 : 1;
},
o: [ 1, 5 ],
oFn: function(t) {
return l(1, 4, t) ? 0 : 1;
}
}), u([ "pl" ], {
c: [ 1, 3, 4, 5 ],
cFn: function(t, e, n) {
var r = e % 10, o = e % 100;
return 1 === e && 0 === n ? 0 : 0 === n && l(2, 4, r) && !l(12, 14, o) ? 1 : 0 === n && 1 !== e && l(0, 1, r) || 0 === n && l(5, 9, r) || 0 === n && l(12, 14, o) ? 2 : 3;
}
}), u([ "pt" ], {
c: [ 1, 5 ],
cFn: function(t) {
return l(0, 2, t) && 2 !== t ? 0 : 1;
}
}), u([ "pt-pt" ], {
c: [ 1, 5 ],
cFn: function(t, e, n) {
return 1 === t && 0 === n ? 0 : 1;
}
}), u([ "ru" ], {
c: [ 1, 3, 4, 5 ],
cFn: function(t, e, n) {
var r = e % 10, o = e % 100;
return 0 === n && 1 === r && 11 !== o ? 0 : 0 === n && l(2, 4, r) && !l(12, 14, o) ? 1 : 0 === n && 0 === r || 0 === n && l(5, 9, r) || 0 === n && l(11, 14, o) ? 2 : 3;
}
}), u([ "shi" ], {
c: [ 1, 3, 5 ],
cFn: function(t, e) {
return 0 === e || 1 === t ? 0 : l(2, 10, t) ? 1 : 2;
}
}), u([ "si" ], {
c: [ 1, 5 ],
cFn: function(t, e, n, r) {
return f([ 0, 1 ], t) || 0 === e && 1 === r ? 0 : 1;
}
}), u([ "sl" ], {
c: [ 1, 2, 3, 5 ],
cFn: function(t, e, n) {
var r = e % 100;
return 0 === n && 1 === r ? 0 : 0 === n && 2 === r ? 1 : 0 === n && l(3, 4, r) || 0 !== n ? 2 : 3;
}
}), u([ "sq" ], {
c: [ 1, 5 ],
cFn: function(t) {
return 1 === t ? 0 : 1;
},
o: [ 1, 4, 5 ],
oFn: function(t) {
return 1 === t ? 0 : 4 === t % 10 && 14 !== t % 100 ? 1 : 2;
}
}), u([ "sv" ], {
c: [ 1, 5 ],
cFn: function(t, e, n) {
return 1 === e && 0 === n ? 0 : 1;
},
o: [ 1, 5 ],
oFn: function(t) {
var e = t % 100;
return f([ 1, 2 ], t % 10) && !f([ 11, 12 ], e) ? 0 : 1;
}
}), u([ "tzm" ], {
c: [ 1, 5 ],
cFn: function(t) {
return l(0, 1, t) || l(11, 99, t) ? 0 : 1;
}
}), u([ "uk" ], {
c: [ 1, 3, 4, 5 ],
cFn: function(t, e, n) {
var r = e % 10, o = e % 100;
return 0 === n && 1 === r && 11 !== o ? 0 : 0 === n && l(2, 4, r) && !l(12, 14, o) ? 1 : 0 === n && 0 === r || 0 === n && l(5, 9, r) || 0 === n && l(11, 14, o) ? 2 : 3;
},
o: [ 3, 5 ],
oFn: function(t) {
return 3 === t % 10 && 13 !== t % 100 ? 0 : 1;
}
});
},
24: function(t, e, n) {
"use strict";
let r = n(3), o = n(27);
const s = n(0).lang, i = n(4);
i.i18n.add("", n(28)("./" + s + ".yml")), i.i18n.add("error.network", n(30)("./" + s + ".yml")), 
document.addEventListener("xhrfail", function(t) {
new r.Error(t.reason);
}), t.exports = function(t) {
let e = new XMLHttpRequest(), n = t.method || "GET", r = t.body, s = t.url;
e.open(n, s, !t.sync), e.method = n;
let c = o();
c && !t.skipCsrf && e.setRequestHeader("X-XSRF-TOKEN", c), "[object Object]" == {}.toString.call(r) && (e.setRequestHeader("Content-Type", "application/json;charset=UTF-8"), 
r = JSON.stringify(r)), t.noDocumentEvents || (e.addEventListener("loadstart", t => {
e.timeStart = Date.now();
let n = u("xhrstart", t);
document.dispatchEvent(n);
}), e.addEventListener("loadend", t => {
let e = u("xhrend", t);
document.dispatchEvent(e);
}), e.addEventListener("success", t => {
let e = u("xhrsuccess", t);
e.result = t.result, document.dispatchEvent(e);
}), e.addEventListener("fail", t => {
let e = u("xhrfail", t);
e.reason = t.reason, document.dispatchEvent(e);
})), t.raw || e.setRequestHeader("Accept", "application/json"), e.setRequestHeader("X-Requested-With", "XMLHttpRequest");
let a = t.normalStatuses || [ 200 ];
function u(t, e) {
let n = new CustomEvent(t);
return n.originalEvent = e, n;
}
function l(t, n) {
let r = u("fail", n);
r.reason = t, e.dispatchEvent(r);
}
return e.addEventListener("error", t => {
l(i("error.network.server_connection_error"), t);
}), e.addEventListener("timeout", t => {
l(i("error.network.server_request_timeout"), t);
}), e.addEventListener("abort", t => {
l(i("error.network.request_aborted"), t);
}), e.addEventListener("load", n => {
if (!e.status) return void l(i("error.network.no_response"), n);
if (!a.includes(e.status)) return void l(i("error.network.server_error", {
status: e.status
}), n);
let r = e.responseText;
if ((e.getResponseHeader("Content-Type") || "").match(/^application\/json/) || t.json) try {
r = JSON.parse(r);
} catch (n) {
return void l(i("error.network.invalid_format"), n);
}
!function(t, n) {
let r = u("success", n);
r.result = t, e.dispatchEvent(r);
}(r, n);
}), setTimeout(function() {
e.send(r);
}, 0), e;
};
},
27: function(t, e, n) {
"use strict";
t.exports = function() {
let t = document.cookie.match(/XSRF-TOKEN=([\w-]+)/);
return t ? t[1] : null;
};
},
28: function(t, e, n) {
var r = {
"https://zh.javascript.info/pack/zh.yml": 29
};
function o(t) {
var e = s(t);
return n(e);
}
function s(t) {
var e = r[t];
if (!(e + 1)) {
var n = new Error("Cannot find module '" + t + "'");
throw n.code = "MODULE_NOT_FOUND", n;
}
return e;
}
o.keys = function() {
return Object.keys(r);
}, o.resolve = s, t.exports = o, o.id = 28;
},
286: function(t, e, n) {
"use strict";
t.exports = function(t, e) {
var n, r = (n = t) % 10 == 1 && n % 100 != 11 ? "one" : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 12 || n % 100 > 14) && n == Math.floor(n) ? "few" : n % 10 == 0 || n % 10 >= 5 && n % 10 <= 9 || n % 100 >= 11 && n % 100 <= 14 && n == Math.floor(n) ? "many" : "other", o = e.split(",");
switch (r) {
case "one":
return o[0];

case "few":
return o[1];

case "many":
return o[2];

default:
throw new Error("Unsupported count: " + t);
}
};
},
29: function(t, e) {
t.exports = {
site: {
privacy_policy: "隐私政策",
terms: "terms of usage",
gdpr_dialog: {
title: "本网站使用 cookie",
text: '我们使用 cookie 和本地存储等浏览器技术来存储你的偏好设置。你需要接受我们的 <a href="../privacy.htm"/*tpa=https://zh.javascript.info/privacy*/>隐私政策</a> 和本网站的 <a href="../terms.htm"/*tpa=https://zh.javascript.info/terms*/>其他条款</a>。',
accept: "接受",
cancel: "取消"
},
toolbar: {
lang_switcher: {
cta_text: '我们希望将这个开源项目提供给全世界的人。请帮助我们将教程的内容 <a href="https://github.com/iliakan/javascript-tutorial-en" rel="noopener noreferrer" target="_blank">翻译为你所掌握的语言</a> 对应的版本。',
footer_text: "多少比重的内容已经被翻译成了相应的语言。",
old_version: "旧版本已发布，需要向后移植。"
},
logo: {
normal: {
svg: "https://zh.javascript.info/pack/sitetoolbar__logo_en.svg",
width: 200
},
"normal-white": {
svg: "https://zh.javascript.info/pack/sitetoolbar__logo_en-white.svg"
},
small: {
svg: "https://zh.javascript.info/pack/sitetoolbar__logo_small_en.svg",
width: 70
},
"small-white": {
svg: "https://zh.javascript.info/pack/sitetoolbar__logo_small_en-white.svg"
}
},
sections: [],
buy_ebook_extra: "购买",
buy_ebook: "EPUB/PDF",
search_placeholder: "在 Javascript.info 网站中搜索",
search_button: "搜索",
public_profile: "公开资料",
account: "账号",
notifications: "通知",
admin: "管理员",
logout: "登出"
},
sorry_old_browser: "很抱歉，我们不支持 IE<10 等浏览器，请使用一个更新版本的浏览器。",
contact_us: "联系我们",
about_the_project: "关于本项目",
ilya_kantor: "Ilya Kantor",
comments: "评论",
loading: "加载中...",
search: "搜索",
share: "分享",
read_before_commenting: "在评论之前先阅读本内容…",
meta: {
description: "现代 JavaScript 教程：有关示例和任务的简单但详细的解释包括：闭包、文档和事件，以及面向对象编程等。"
},
"tablet-menu": {
choose_section: "选择章节",
search_placeholder: "在教程中搜索",
search_button: "搜索"
},
comment: {
help: [ "欢迎你在文章下添加补充内容、提出你的问题或回答提出的问题。", "使用 <code>&lt;code&gt;</code> 标签插入几行代码，对于多行代码 — 可以使用 <code>&lt;pre&gt;</code>，对于超过十行的代码 — 建议使用沙箱（<a href='http://plnkr.co/edit/?p=preview'>plnkr</a>、<a href='http://jsbin.com/'>JSBin</a> 和 <a href='http://codepen.io/'>codepen</a> 等）。", "如果你无法理解文章中的内容 — 请详细说明。" ]
},
edit_on_github: "在 Github 上编辑",
error: "错误",
close: "关闭",
hide_forever: "永久隐藏",
hidden_forever: "此信息将不再显示。"
}
};
},
3: function(t, e, n) {
"use strict";
Object.defineProperty(e, "__esModule", {
value: !0
});
let r = n(7);
e.init = function(t) {
window.notificationManager || (window.notificationManager = new class {
constructor(t = {}) {
this.notifications = [], this.verticalSpace = t.verticalSpace || 8;
}
register(t) {
this.notifications.unshift(t), setTimeout(() => this.recalculate(), 20);
}
unregister(t) {
let e = this.notifications.indexOf(t);
this.notifications.splice(e, 1), this.recalculate();
}
recalculate() {
let t = this.verticalSpace;
this.notifications.forEach(e => {
e.top = t, t += e.height + this.verticalSpace;
});
}
}(t));
};
class o {
constructor(t, e, n) {
let r = `<div class="notification notification_popup notification_${e}">\n    <div class="notification__content">${t}</div>\n    <button title="Закрыть" class="notification__close"></button></div>`;
switch (document.body.insertAdjacentHTML("beforeEnd", r), this.elem = document.body.lastElementChild, 
n) {
case void 0:
this.timeout = this.TIMEOUT_DEFAULT;
break;

case "slow":
this.timeout = this.TIMEOUT_SLOW;
break;

case "fast":
this.timeout = this.TIMEOUT_FAST;
break;

default:
this.timeout = n;
}
window.notificationManager.register(this), this.setupCloseHandler(), this.setupCloseTimeout();
}
get TIMEOUT_DEFAULT() {
return 3e3;
}
get TIMEOUT_SLOW() {
return 5e3;
}
get TIMEOUT_FAST() {
return 1500;
}
close() {
this.elem.parentNode && (this.elem.remove(), window.notificationManager.unregister(this));
}
setupCloseHandler() {
this.delegate(".notification__close", "click", () => this.close());
}
setupCloseTimeout() {
this.timeout && setTimeout(() => this.close(), this.timeout);
}
get height() {
return this.elem.offsetHeight;
}
set top(t) {
this.elem.style.transform = "translateY(" + t + "px)";
}
}
r.delegateMixin(o.prototype);
e.Info = class extends o {
constructor(t, e) {
super(t, "info", e);
}
};
e.Warning = class extends o {
constructor(t, e) {
super(t, "warning", e);
}
};
e.Success = class extends o {
constructor(t, e) {
super(t, "success", e);
}
};
class s extends o {
constructor(t, e) {
super(t, "error", e);
}
get TIMEOUT_DEFAULT() {
return 5e3;
}
}
e.Error = s, e.Error = s;
},
30: function(t, e, n) {
var r = {
"https://zh.javascript.info/pack/zh.yml": 31
};
function o(t) {
var e = s(t);
return n(e);
}
function s(t) {
var e = r[t];
if (!(e + 1)) {
var n = new Error("Cannot find module '" + t + "'");
throw n.code = "MODULE_NOT_FOUND", n;
}
return e;
}
o.keys = function() {
return Object.keys(r);
}, o.resolve = s, t.exports = o, o.id = 30;
},
31: function(t, e) {
t.exports = {
server_connection_error: "服务器连接错误。",
server_request_timeout: "服务器请求超时。",
request_aborted: "请求已终止。",
no_response: "服务器没有响应。",
server_error: "服务器错误（code #{status}），请稍后再试。",
invalid_format: "响应格式无效。"
};
},
324: function(t, e, n) {},
349: function(t, e, n) {
n(350), t.exports = n(324);
},
350: function(t, e, n) {
"use strict";
n(351).initNewsletterForm();
},
351: function(t, e, n) {
"use strict";
const r = n(14), o = n(24), s = n(3), i = n(352), c = n(4), a = n(0).lang;
function u(t, e) {
if (!t.elements.email.value) return;
const n = t.elements.slug;
let i, a = [ ...n.querySelectorAll("option:checked") ].map(t => t.value);
if (a.length || (a = n.value), t.elements["subscribe-email"] && (i = !0), !i && !a.length) return void new s.Error(c("newsletter.client.choose_newsletter"));
const u = {
email: t.elements.email.value,
slug: a
};
i && (u.replace = !0);
const l = o({
method: "POST",
url: t.action,
body: u
}), f = t.querySelector('[type="submit"]'), h = new r({
elem: f,
size: "small",
elemClass: "button_loading"
});
h.start(), f.disabled = !0, l.addEventListener("loadend", () => {
h.stop(), f.disabled = !1;
}), l.addEventListener("success", function(n) {
if (200 == this.status) {
new s.Success(n.result.message, "slow");
let r = t.elements.gaEvent && JSON.parse(t.elements.gaEvent.value);
r && window.ga("send", "event", r), e && e();
} else new s.Error(n.result.message);
});
}
c.i18n.add("newsletter.client", n(353)("./" + a + ".yml")), e.initNewsletterForm = function() {
let t = document.querySelector("[data-newsletter-subscribe-form]");
if (!t) return;
const e = "hidden" === t.elements.email.type, n = t.querySelector(".multiselect");
if (n) {
const r = new i({
elem: n
}), o = t.querySelector('button[type="submit"]'), s = o.querySelector("span");
t.elements.slug && t.elements.slug.addEventListener("change", () => {
o.disabled = !r.getValues().length && !e, !r.getValues().length && e ? s.textContent = c("site.subscribe.button_unsubscribe") : s.textContent = c("site.subscribe.button");
});
}
t.onsubmit = function(e) {
e.preventDefault(), u(t);
};
}, e.initNewsletterLink = function() {
let t = document.querySelector("[data-newsletter-subscribe-link]");
t && (t.onclick = function(e) {
e.preventDefault();
const n = prompt(c("newsletter.client.email_please"), window.currentUser && window.currentUser.email || "");
n && o({
method: "POST",
url: "/newsletter/subscribe",
body: {
slug: t.dataset.slug,
email: n
}
}).addEventListener("success", function(e) {
if (200 == this.status) {
new s.Success(e.result.message, "slow");
const n = t.dataset.gaEvent && JSON.parse(t.dataset.gaEvent);
n && window.ga("send", "event", n);
} else new s.Error(e.result.message);
});
});
}, e.submitSubscribeForm = u;
},
352: function(t, e, n) {
"use strict";
const r = n(4), o = n(286);
t.exports = class {
constructor(t) {
this.elem = t.elem, this.select = this.elem.querySelector("select"), this.textContainer = this.elem.querySelector(".multiselect__active-button"), 
this.options = [ ...this.select.querySelectorAll("option") ], this.defaultValue = this.textContainer.textContent, 
this.status = "closed", this.elem.querySelector(".multiselect__container").insertAdjacentHTML("beforeend", this.createDropdown()), 
this.setButtonTitle(), this.bindHandlers();
}
createDropdown() {
return `\n      <div class='multiselect__dropdown-container'>\n        <div class='multiselect__dropdown'>\n          ${this.options.map(t => `<div class='multiselect__item${t.selected ? " multiselect__item_checked" : ""}' data-value='${t.value}'>\n                <span class='multiselect__item-title'>${t.textContent + ("advanced" === t.value ? `<span class='multiselect__greyed-text'>${r("site.subscribe.common_updates_text")}</span>` : "")}</span>\n              </div>`).join("")}\n        </div>\n      </div>\n    `;
}
bindHandlers() {
this.textContainer.addEventListener("click", this.toggleDropdown.bind(this));
for (let t of this.elem.querySelectorAll(".multiselect__item")) t.addEventListener("click", this.onChange.bind(this));
this.select.addEventListener("change", this.setButtonTitle.bind(this));
}
toggleDropdown(t) {
t.stopPropagation(), this.elem.classList.toggle("multiselect_opened"), this.toggleStatus(), 
"opened" === this.status && (this.boundCloseDropdown = this.closeDropdown.bind(this), 
document.addEventListener("click", this.boundCloseDropdown));
}
toggleStatus() {
"closed" === this.status ? this.status = "opened" : this.status = "closed";
}
closeDropdown(t) {
t.target.closest(".multiselect__dropdown-container") || (this.status = "closed", 
this.elem.classList.remove("multiselect_opened"), document.removeEventListener("click", this.boundCloseDropdown));
}
onChange(t) {
const e = t.target.closest(".multiselect__item");
e.classList.toggle("multiselect__item_checked"), this.options.filter(t => t.value === e.getAttribute("data-value")).pop().selected = e.classList.contains("multiselect__item_checked"), 
this.select.dispatchEvent(new Event("change"));
}
setButtonTitle() {
const t = this.getValues();
1 === t.length && t.includes("advanced") ? this.textContainer.textContent = this.defaultValue : t.length ? this.textContainer.textContent = t.length + " " + o(t.length, r("site.subscribe.newsletters")) : this.textContainer.textContent = r("site.subscribe.no_selected");
}
getValues() {
return this.options.filter(t => t.selected).map(t => t.value);
}
};
},
353: function(t, e, n) {
var r = {
"https://zh.javascript.info/pack/zh.yml": 355
};
function o(t) {
var e = s(t);
return n(e);
}
function s(t) {
var e = r[t];
if (!(e + 1)) {
var n = new Error("Cannot find module '" + t + "'");
throw n.code = "MODULE_NOT_FOUND", n;
}
return e;
}
o.keys = function() {
return Object.keys(r);
}, o.resolve = s, t.exports = o, o.id = 353;
},
355: function(t, e) {
t.exports = {
choose_newsletter: "Choose newsletters in the list.",
email_please: "Your e-mail?"
};
},
4: function(t, e, n) {
"use strict";
const r = new (n(18))("en");
let o = console.error;
function s(t) {
return r.hasPhrase(i, t) || o("No such phrase", t), r.t(i, ...arguments);
}
t.exports = s;
const i = n(0).lang;
"en" !== i && r.setFallback(i, "en"), r.add = ((...t) => r.addPhrase(i, ...t)), 
s.i18n = r;
},
7: function(t, e, n) {
"use strict";
function r(t, e, n, r, o) {
t.addEventListener(n, function(t) {
let n = function(t, e) {
let n = t.target;
for (;n; ) {
if (n.matches(e)) return n;
if (n == t.currentTarget) break;
n = n.parentElement;
}
return null;
}(t, e);
t.delegateTarget = n, n && r.call(o || this, t);
});
}
r.delegateMixin = function(t) {
t.delegate = function(t, e, n) {
r(this.elem, t, e, n, this);
};
}, t.exports = r;
}
});