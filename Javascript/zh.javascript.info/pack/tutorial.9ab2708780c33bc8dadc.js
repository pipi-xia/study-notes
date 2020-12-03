var tutorial = function(t) {
var e = {};
function n(r) {
if (e[r]) return e[r].exports;
var i = e[r] = {
i: r,
l: !1,
exports: {}
};
return t[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports;
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
}), 2 & e && "string" != typeof t) for (var i in t) n.d(r, i, function(e) {
return t[e];
}.bind(null, i));
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
}, n.p = "/pack/", n(n.s = 325);
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
11: function(t, e, n) {
"use strict";
var r;
r = function() {
return this;
}();
try {
r = r || Function("return this")() || (0, eval)("this");
} catch (t) {
"object" == typeof window && (r = window);
}
t.exports = r;
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
var r = n(20), i = n(21);
function s(t) {
return Object.prototype.toString.call(t);
}
function o(t) {
return "[object String]" === s(t);
}
function a(t) {
return !isNaN(t) && isFinite(t);
}
function l(t) {
return !0 === t || !1 === t;
}
function c(t) {
return "[object Object]" === s(t);
}
var u = Array.isArray || function(t) {
return "[object Array]" === s(t);
}, d = Array.prototype.forEach;
function h(t, e, n) {
if (null !== t) if (d && t.forEach === d) t.forEach(e, n); else if (t.length === +t.length) for (var r = 0, i = t.length; r < i; r += 1) e.call(n, t[r], r, t); else for (var s in t) Object.prototype.hasOwnProperty.call(t, s) && e.call(n, t[s], s, t);
}
var f = /%[sdj%]/g;
function p(t) {
var e = 1, n = arguments, r = n.length;
return String(t).replace(f, function(t) {
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
function g(t) {
var e = {};
return h(t || {}, function(t, n) {
t && "object" == typeof t ? h(g(t), function(t, r) {
e[n + "." + r] = t;
}) : e[n] = t;
}), e;
}
var E = "#@$";
function b(t, e) {
return t + E + e;
}
function v(t, e, n) {
var r = b(e, n), i = t._storage;
if (i.hasOwnProperty(r)) return r;
if (e === t._defaultLocale) return null;
var s = t._fallbacks_cache;
if (s.hasOwnProperty(r)) return s[r];
for (var o, a = t._fallbacks[e] || [ t._defaultLocale ], l = 0, c = a.length; l < c; l++) if (o = b(a[l], n), 
i.hasOwnProperty(o)) return s[r] = o, s[r];
return s[r] = null, null;
}
function y(t, e, n) {
var r = i.indexOf(t, e);
return -1 === r ? p('[pluralizer for "%s" locale not found]', t) : void 0 === n[r] ? p('[plural form %d ("%s") not found in translation]', r, i.forms(t)[r]) : n[r];
}
function w(t) {
if (!(this instanceof w)) return new w(t);
this._defaultLocale = t ? String(t) : m, this._fallbacks = {}, this._fallbacks_cache = {}, 
this._storage = {}, this._plurals_cache = {};
}
w.prototype.addPhrase = function(t, e, n, r) {
var i, s = this;
if (l(r)) i = r ? 1 / 0 : 0; else if (a(r)) {
if ((i = Math.floor(r)) < 0) throw new TypeError("Invalid flatten level (should be >= 0).");
} else i = 1 / 0;
if (c(n) && i > 0) return h(n, function(n, r) {
s.addPhrase(t, (e ? e + "." : "") + r, n, i - 1);
}), this;
if (o(n)) this._storage[b(t, e)] = {
translation: n,
locale: t,
raw: !1
}; else {
if (!(u(n) || a(n) || l(n) || 0 === i && c(n))) throw new TypeError("Invalid translation - [String|Object|Array|Number|Boolean] expected.");
this._storage[b(t, e)] = {
translation: n,
locale: t,
raw: !0
};
}
return s._fallbacks_cache = {}, this;
}, w.prototype.setFallback = function(t, e) {
var n = this._defaultLocale;
if (n === t) throw new Error("Default locale can't have fallbacks");
var r = u(e) ? e.slice() : [ e ];
return r[r.length - 1] !== n && r.push(n), this._fallbacks[t] = r, this._fallbacks_cache = {}, 
this;
};
var _ = /#\{|\(\(|\\\\/;
w.prototype.translate = function(t, e, n) {
var i, l = v(this, t, e);
return l ? (i = this._storage[l]).raw ? i.translation : (i.hasOwnProperty("compiled") || (i.compiled = function(t, e, n) {
var i, s, o, a, l, c;
return _.test(e) ? 1 === (i = r.parse(e)).length && "literal" === i[0].type ? i[0].text : (t._plurals_cache[n] || (t._plurals_cache[n] = new w(n)), 
c = t._plurals_cache[n], (s = []).push([ 'var str = "", strict, strict_exec, forms, forms_exec, plrl, cache, loc, loc_plzr, anchor;' ]), 
s.push("params = flatten(params);"), h(i, function(t) {
if ("literal" !== t.type) {
if ("variable" === t.type) return o = t.anchor, void s.push(p('str += ("undefined" === typeof (params[%j])) ? "[missed variable: %s]" : params[%j];', o, o, o));
if ("plural" !== t.type) throw new Error("Unknown node type");
o = t.anchor, a = {}, h(t.strict, function(e, i) {
var s = r.parse(e);
if (1 === s.length && "literal" === s[0].type) return a[i] = !1, void (t.strict[i] = s[0].text);
a[i] = !0, c.hasPhrase(n, e, !0) || c.addPhrase(n, e, e);
}), l = {}, h(t.forms, function(e, i) {
var s, o = r.parse(e);
if (1 === o.length && "literal" === o[0].type) return s = o[0].text, t.forms[i] = s, 
void (l[s] = !1);
l[e] = !0, c.hasPhrase(n, e, !0) || c.addPhrase(n, e, e);
}), s.push(p("loc = %j;", n)), s.push(p("loc_plzr = %j;", n.split(/[-_]/)[0])), 
s.push(p("anchor = params[%j];", o)), s.push(p("cache = this._plurals_cache[loc];")), 
s.push(p("strict = %j;", t.strict)), s.push(p("strict_exec = %j;", a)), s.push(p("forms = %j;", t.forms)), 
s.push(p("forms_exec = %j;", l)), s.push("if (+(anchor) != anchor) {"), s.push(p('  str += "[invalid plurals amount: %s(" + anchor + ")]";', o)), 
s.push("} else {"), s.push("  if (strict[anchor] !== undefined) {"), s.push("    plrl = strict[anchor];"), 
s.push("    str += strict_exec[anchor] ? cache.t(loc, plrl, params) : plrl;"), s.push("  } else {"), 
s.push("    plrl = pluralizer(loc_plzr, +anchor, forms);"), s.push("    str += forms_exec[plrl] ? cache.t(loc, plrl, params) : plrl;"), 
s.push("  }"), s.push("}");
} else s.push(p("str += %j;", t.text));
}), s.push("return str;"), new Function("params", "flatten", "pluralizer", s.join("\n"))) : e;
}(this, i.translation, i.locale)), "[object Function]" !== s(i.compiled) ? i.compiled : ((a(n) || o(n)) && (n = {
count: n,
value: n
}), i.compiled.call(this, n, g, y))) : t + ": No translation for [" + e + "]";
}, w.prototype.hasPhrase = function(t, e, n) {
return n ? this._storage.hasOwnProperty(b(t, e)) : !!v(this, t, e);
}, w.prototype.getLocale = function(t, e, n) {
if (n) return this._storage.hasOwnProperty(b(t, e)) ? t : null;
var r = v(this, t, e);
return r ? r.split(E, 2)[0] : null;
}, w.prototype.t = w.prototype.translate, w.prototype.stringify = function(t) {
var e = this, n = {};
h(this._storage, function(t, e) {
n[e.split(E)[1]] = !0;
});
var r = {};
h(n, function(n, i) {
var s = v(e, t, i);
if (s) {
var o = e._storage[s].locale;
r[o] || (r[o] = {}), r[o][i] = e._storage[s].translation;
}
});
var i = {
fallback: {},
locales: r
}, s = (e._fallbacks[t] || []).slice(0, -1);
return s.length && (i.fallback[t] = s), JSON.stringify(i);
}, w.prototype.load = function(t) {
var e = this;
return o(t) && (t = JSON.parse(t)), h(t.locales, function(t, n) {
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
function t(t, e, n, r, i, s) {
this.message = t, this.expected = e, this.found = n, this.offset = r, this.line = i, 
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
var n, r = arguments.length > 1 ? arguments[1] : {}, i = {}, s = {
start: ut
}, o = ut, a = i, l = "((", c = {
type: "literal",
value: "((",
description: '"(("'
}, u = "))", d = {
type: "literal",
value: "))",
description: '"))"'
}, h = null, f = function(t, e) {
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
}, p = "|", m = {
type: "literal",
value: "|",
description: '"|"'
}, g = function(t, e) {
return [ t ].concat(e);
}, E = function(t) {
return [ t ];
}, b = "=", v = {
type: "literal",
value: "=",
description: '"="'
}, y = /^[0-9]/, w = {
type: "class",
value: "[0-9]",
description: "[0-9]"
}, _ = " ", T = {
type: "literal",
value: " ",
description: '" "'
}, S = function(t, e) {
return {
strict: t.join(""),
text: e.join("")
};
}, k = function() {
return {
text: ot()
};
}, A = "\\", L = {
type: "literal",
value: "\\",
description: '"\\\\"'
}, O = /^[\\|)(]/, C = {
type: "class",
value: "[\\\\|)(]",
description: "[\\\\|)(]"
}, I = function(t) {
return t;
}, N = void 0, x = {
type: "any",
description: "any character"
}, F = function() {
return ot();
}, R = ":", P = {
type: "literal",
value: ":",
description: '":"'
}, D = function(t) {
return t;
}, j = "#{", M = {
type: "literal",
value: "#{",
description: '"#{"'
}, U = "}", B = {
type: "literal",
value: "}",
description: '"}"'
}, H = function(t) {
return {
type: "variable",
anchor: t
};
}, W = ".", q = {
type: "literal",
value: ".",
description: '"."'
}, G = function() {
return ot();
}, z = /^[a-zA-Z_$]/, X = {
type: "class",
value: "[a-zA-Z_$]",
description: "[a-zA-Z_$]"
}, $ = /^[a-zA-Z0-9_$]/, Y = {
type: "class",
value: "[a-zA-Z0-9_$]",
description: "[a-zA-Z0-9_$]"
}, K = function(t) {
return t;
}, V = function(t) {
return {
type: "literal",
text: t.join("")
};
}, J = /^[\\#()|]/, Z = {
type: "class",
value: "[\\\\#()|]",
description: "[\\\\#()|]"
}, Q = 0, tt = 0, et = 0, nt = {
line: 1,
column: 1,
seenCR: !1
}, rt = 0, it = [], st = 0;
if ("startRule" in r) {
if (!(r.startRule in s)) throw new Error("Can't start parsing from rule \"" + r.startRule + '".');
o = s[r.startRule];
}
function ot() {
return e.substring(tt, Q);
}
function at(t) {
return et !== t && (et > t && (et = 0, nt = {
line: 1,
column: 1,
seenCR: !1
}), function(t, n, r) {
var i, s;
for (i = n; i < r; i++) "\n" === (s = e.charAt(i)) ? (t.seenCR || t.line++, t.column = 1, 
t.seenCR = !1) : "\r" === s || "\u2028" === s || "\u2029" === s ? (t.line++, t.column = 1, 
t.seenCR = !0) : (t.column++, t.seenCR = !1);
}(nt, et, t), et = t), nt;
}
function lt(t) {
Q < rt || (Q > rt && (rt = Q, it = []), it.push(t));
}
function ct(n, r, i) {
var s = at(i), o = i < e.length ? e.charAt(i) : null;
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
}(r, o), r, o, i, s.line, s.column);
}
function ut() {
var t, e;
for (t = [], (e = Et()) === i && (e = dt()) === i && (e = pt()); e !== i; ) t.push(e), 
(e = Et()) === i && (e = dt()) === i && (e = pt());
return t;
}
function dt() {
var t, n, r, s, o;
return t = Q, e.substr(Q, 2) === l ? (n = l, Q += 2) : (n = i, 0 === st && lt(c)), 
n !== i && (r = function t() {
var n, r, s, o;
return n = Q, (r = ht()) !== i ? (124 === e.charCodeAt(Q) ? (s = p, Q++) : (s = i, 
0 === st && lt(m)), s !== i && (o = t()) !== i ? (tt = n, r = g(r, o), n = r) : (Q = n, 
n = a)) : (Q = n, n = a), n === i && (n = Q, (r = ht()) !== i && (tt = n, r = E(r)), 
n = r), n;
}()) !== i ? (e.substr(Q, 2) === u ? (s = u, Q += 2) : (s = i, 0 === st && lt(d)), 
s !== i ? ((o = function() {
var t, n, r;
return t = Q, 58 === e.charCodeAt(Q) ? (n = R, Q++) : (n = i, 0 === st && lt(P)), 
n !== i && (r = mt()) !== i ? (tt = t, n = D(r), t = n) : (Q = t, t = a), t;
}()) === i && (o = h), o !== i ? (tt = t, t = n = f(r, o)) : (Q = t, t = a)) : (Q = t, 
t = a)) : (Q = t, t = a), t;
}
function ht() {
var t, n, r, s, o, l;
if (t = Q, 61 === e.charCodeAt(Q) ? (n = b, Q++) : (n = i, 0 === st && lt(v)), n !== i) {
if (r = [], y.test(e.charAt(Q)) ? (s = e.charAt(Q), Q++) : (s = i, 0 === st && lt(w)), 
s !== i) for (;s !== i; ) r.push(s), y.test(e.charAt(Q)) ? (s = e.charAt(Q), Q++) : (s = i, 
0 === st && lt(w)); else r = a;
if (r !== i) if (32 === e.charCodeAt(Q) ? (s = _, Q++) : (s = i, 0 === st && lt(T)), 
s === i && (s = h), s !== i) {
if (o = [], (l = ft()) !== i) for (;l !== i; ) o.push(l), l = ft(); else o = a;
o !== i ? (tt = t, t = n = S(r, o)) : (Q = t, t = a);
} else Q = t, t = a; else Q = t, t = a;
} else Q = t, t = a;
if (t === i) {
if (t = Q, n = [], (r = ft()) !== i) for (;r !== i; ) n.push(r), r = ft(); else n = a;
n !== i && (tt = t, n = k()), t = n;
}
return t;
}
function ft() {
var t, n, r;
return t = Q, 92 === e.charCodeAt(Q) ? (n = A, Q++) : (n = i, 0 === st && lt(L)), 
n !== i ? (O.test(e.charAt(Q)) ? (r = e.charAt(Q), Q++) : (r = i, 0 === st && lt(C)), 
r !== i ? (tt = t, t = n = I(r)) : (Q = t, t = a)) : (Q = t, t = a), t === i && (t = Q, 
n = Q, st++, 124 === e.charCodeAt(Q) ? (r = p, Q++) : (r = i, 0 === st && lt(m)), 
r === i && (e.substr(Q, 2) === u ? (r = u, Q += 2) : (r = i, 0 === st && lt(d))), 
st--, r === i ? n = N : (Q = n, n = a), n !== i ? (e.length > Q ? (r = e.charAt(Q), 
Q++) : (r = i, 0 === st && lt(x)), r !== i ? (tt = t, t = n = F()) : (Q = t, t = a)) : (Q = t, 
t = a)), t;
}
function pt() {
var t, n, r, s;
return t = Q, e.substr(Q, 2) === j ? (n = j, Q += 2) : (n = i, 0 === st && lt(M)), 
n !== i && (r = mt()) !== i ? (125 === e.charCodeAt(Q) ? (s = U, Q++) : (s = i, 
0 === st && lt(B)), s !== i ? (tt = t, t = n = H(r)) : (Q = t, t = a)) : (Q = t, 
t = a), t;
}
function mt() {
var t, n, r, s;
if (t = Q, gt() !== i) if (46 === e.charCodeAt(Q) ? (n = W, Q++) : (n = i, 0 === st && lt(q)), 
n !== i) {
if (r = [], (s = mt()) !== i) for (;s !== i; ) r.push(s), s = mt(); else r = a;
r !== i ? (tt = t, t = G()) : (Q = t, t = a);
} else Q = t, t = a; else Q = t, t = a;
return t === i && (t = gt()), t;
}
function gt() {
var t, n, r, s;
if (t = Q, z.test(e.charAt(Q)) ? (n = e.charAt(Q), Q++) : (n = i, 0 === st && lt(X)), 
n !== i) {
for (r = [], $.test(e.charAt(Q)) ? (s = e.charAt(Q), Q++) : (s = i, 0 === st && lt(Y)); s !== i; ) r.push(s), 
$.test(e.charAt(Q)) ? (s = e.charAt(Q), Q++) : (s = i, 0 === st && lt(Y));
r !== i ? (tt = t, t = n = F()) : (Q = t, t = a);
} else Q = t, t = a;
return t;
}
function Et() {
var t, e, n, r, s;
if (t = Q, e = [], n = Q, r = Q, st++, (s = dt()) === i && (s = pt()), st--, s === i ? r = N : (Q = r, 
r = a), r !== i && (s = bt()) !== i ? (tt = n, n = r = K(s)) : (Q = n, n = a), n !== i) for (;n !== i; ) e.push(n), 
n = Q, r = Q, st++, (s = dt()) === i && (s = pt()), st--, s === i ? r = N : (Q = r, 
r = a), r !== i && (s = bt()) !== i ? (tt = n, n = r = K(s)) : (Q = n, n = a); else e = a;
return e !== i && (tt = t, e = V(e)), t = e;
}
function bt() {
var t, n, r;
return t = Q, 92 === e.charCodeAt(Q) ? (n = A, Q++) : (n = i, 0 === st && lt(L)), 
n !== i ? (J.test(e.charAt(Q)) ? (r = e.charAt(Q), Q++) : (r = i, 0 === st && lt(Z)), 
r !== i ? (tt = t, t = n = I(r)) : (Q = t, t = a)) : (Q = t, t = a), t === i && (e.length > Q ? (t = e.charAt(Q), 
Q++) : (t = i, 0 === st && lt(x))), t;
}
if ((n = o()) !== i && Q === e.length) return n;
throw n !== i && Q < e.length && lt({
type: "end",
description: "end of input"
}), ct(null, it, rt);
}
};
}();
},
21: function(t, e, n) {
"use strict";
var r = {};
function i(t) {
var e;
return r[t] ? t : (e = t.toLowerCase().replace("_", "-"), r[e] ? e : (e = e.split("-")[0], 
r[e] ? e : null));
}
function s(t, e) {
var n = i(t);
if (!n) return -1;
if (!r[n].cFn) return 0;
var s = String(e), o = s.indexOf(".") < 0 ? "" : s.split(".")[1], a = o.length, l = +e, c = +s.split(".")[0], u = 0 === o.length ? 0 : +o.replace(/0+$/, "");
return r[n].cFn(l, c, a, +o, u);
}
function o(t, e) {
var n = i(t);
if (!n) return -1;
if (!r[n].oFn) return 0;
var s = String(e), o = s.indexOf(".") < 0 ? "" : s.split(".")[1], a = o.length, l = +e, c = +s.split(".")[0], u = 0 === o.length ? 0 : +o.replace(/0+$/, "");
return r[n].oFn(l, c, a, +o, u);
}
t.exports = function(t, e) {
var n = i(t);
return n ? r[n].c[s(n, e)] : null;
}, t.exports.indexOf = s, t.exports.forms = function(t) {
var e = i(t);
return r[e] ? r[e].c : null;
}, t.exports.ordinal = function(t, e) {
var n = i(t);
return r[n] ? r[n].o[o(n, e)] : null;
}, t.exports.ordinal.indexOf = o, t.exports.ordinal.forms = function(t) {
var e = i(t);
return r[e] ? r[e].o : null;
};
var a = [ "zero", "one", "two", "few", "many", "other" ];
function l(t) {
return a[t];
}
function c(t, e) {
var n;
for (e.c = e.c ? e.c.map(l) : [ "other" ], e.o = e.o ? e.o.map(l) : [ "other" ], 
n = 0; n < t.length; n++) r[t[n]] = e;
}
function u(t, e, n) {
return t <= n && n <= e && n % 1 == 0;
}
function d(t, e) {
return t.indexOf(e) >= 0;
}
c([ "af", "asa", "bem", "bez", "bg", "brx", "ce", "cgg", "chr", "ckb", "dv", "ee", "el", "eo", "es", "eu", "fo", "fur", "gsw", "ha", "haw", "jgo", "jmc", "kaj", "kcg", "kkj", "kl", "ks", "ksb", "ku", "ky", "lb", "lg", "mas", "mgo", "ml", "mn", "nah", "nb", "nd", "nn", "nnh", "no", "nr", "ny", "nyn", "om", "or", "os", "pap", "ps", "rm", "rof", "rwk", "saq", "sdh", "seh", "sn", "so", "ss", "ssy", "st", "syr", "ta", "te", "teo", "tig", "tk", "tn", "tr", "ts", "ug", "uz", "ve", "vo", "vun", "wae", "xh", "xog" ], {
c: [ 1, 5 ],
cFn: function(t) {
return 1 === t ? 0 : 1;
}
}), c([ "ak", "bh", "guw", "ln", "mg", "nso", "pa", "ti", "wa" ], {
c: [ 1, 5 ],
cFn: function(t) {
return u(0, 1, t) ? 0 : 1;
}
}), c([ "am", "fa", "kn", "zu" ], {
c: [ 1, 5 ],
cFn: function(t, e) {
return 0 === e || 1 === t ? 0 : 1;
}
}), c([ "ar", "ars" ], {
c: [ 0, 1, 2, 3, 4, 5 ],
cFn: function(t) {
var e = t % 100;
return 0 === t ? 0 : 1 === t ? 1 : 2 === t ? 2 : u(3, 10, e) ? 3 : u(11, 99, e) ? 4 : 5;
}
}), c([ "as", "bn" ], {
c: [ 1, 5 ],
cFn: function(t, e) {
return 0 === e || 1 === t ? 0 : 1;
},
o: [ 1, 2, 3, 4, 5 ],
oFn: function(t) {
return d([ 1, 5, 7, 8, 9, 10 ], t) ? 0 : d([ 2, 3 ], t) ? 1 : 4 === t ? 2 : 6 === t ? 3 : 4;
}
}), c([ "ast", "de", "et", "fi", "fy", "gl", "ji", "nl", "sw", "ur", "yi" ], {
c: [ 1, 5 ],
cFn: function(t, e, n) {
return 1 === e && 0 === n ? 0 : 1;
}
}), c([ "az" ], {
c: [ 1, 5 ],
cFn: function(t) {
return 1 === t ? 0 : 1;
},
o: [ 1, 3, 4, 5 ],
oFn: function(t, e) {
var n = e % 10, r = e % 100, i = e % 1e3;
return d([ 1, 2, 5, 7, 8 ], n) || d([ 20, 50, 70, 80 ], r) ? 0 : d([ 3, 4 ], n) || d([ 100, 200, 300, 400, 500, 600, 700, 800, 900 ], i) ? 1 : 0 === e || 6 === n || d([ 40, 60, 90 ], r) ? 2 : 3;
}
}), c([ "be" ], {
c: [ 1, 3, 4, 5 ],
cFn: function(t) {
var e = t % 10, n = t % 100;
return 1 === e && 11 !== n ? 0 : u(2, 4, e) && !u(12, 14, n) ? 1 : 0 === e || u(5, 9, e) || u(11, 14, n) ? 2 : 3;
},
o: [ 3, 5 ],
oFn: function(t) {
var e = t % 100;
return d([ 2, 3 ], t % 10) && !d([ 12, 13 ], e) ? 0 : 1;
}
}), c([ "bm", "bo", "dz", "id", "ig", "ii", "in", "ja", "jbo", "jv", "jw", "kde", "kea", "km", "ko", "lkt", "my", "nqo", "root", "sah", "ses", "sg", "th", "to", "wo", "yo", "yue", "zh" ], {}), 
c([ "br" ], {
c: [ 1, 2, 3, 4, 5 ],
cFn: function(t) {
var e = t % 10, n = t % 100, r = t % 1e6;
return 1 !== e || d([ 11, 71, 91 ], n) ? 2 !== e || d([ 12, 72, 92 ], n) ? !u(3, 4, e) && 9 !== e || u(10, 19, n) || u(70, 79, n) || u(90, 99, n) ? 0 !== t && 0 === r ? 3 : 4 : 2 : 1 : 0;
}
}), c([ "bs", "hr", "sh", "sr" ], {
c: [ 1, 3, 5 ],
cFn: function(t, e, n, r) {
var i = e % 10, s = e % 100, o = r % 10, a = r % 100;
return 0 === n && 1 === i && 11 !== s || 1 === o && 11 !== a ? 0 : 0 === n && u(2, 4, i) && !u(12, 14, s) || u(2, 4, o) && !u(12, 14, a) ? 1 : 2;
}
}), c([ "ca" ], {
c: [ 1, 5 ],
cFn: function(t, e, n) {
return 1 === e && 0 === n ? 0 : 1;
},
o: [ 1, 2, 3, 5 ],
oFn: function(t) {
return d([ 1, 3 ], t) ? 0 : 2 === t ? 1 : 4 === t ? 2 : 3;
}
}), c([ "cs", "sk" ], {
c: [ 1, 3, 4, 5 ],
cFn: function(t, e, n) {
return 1 === e && 0 === n ? 0 : u(2, 4, e) && 0 === n ? 1 : 0 !== n ? 2 : 3;
}
}), c([ "cy" ], {
c: [ 0, 1, 2, 3, 4, 5 ],
cFn: function(t) {
return 0 === t ? 0 : 1 === t ? 1 : 2 === t ? 2 : 3 === t ? 3 : 6 === t ? 4 : 5;
},
o: [ 0, 1, 2, 3, 4, 5 ],
oFn: function(t) {
return d([ 0, 7, 8, 9 ], t) ? 0 : 1 === t ? 1 : 2 === t ? 2 : d([ 3, 4 ], t) ? 3 : d([ 5, 6 ], t) ? 4 : 5;
}
}), c([ "da" ], {
c: [ 1, 5 ],
cFn: function(t, e, n, r, i) {
return 1 === t || 0 !== i && d([ 0, 1 ], e) ? 0 : 1;
}
}), c([ "dsb", "hsb" ], {
c: [ 1, 2, 3, 5 ],
cFn: function(t, e, n, r) {
var i = e % 100, s = r % 100;
return 0 === n && 1 === i || 1 === s ? 0 : 0 === n && 2 === i || 2 === s ? 1 : 0 === n && u(3, 4, i) || u(3, 4, s) ? 2 : 3;
}
}), c([ "en" ], {
c: [ 1, 5 ],
cFn: function(t, e, n) {
return 1 === e && 0 === n ? 0 : 1;
},
o: [ 1, 2, 3, 5 ],
oFn: function(t) {
var e = t % 10, n = t % 100;
return 1 === e && 11 !== n ? 0 : 2 === e && 12 !== n ? 1 : 3 === e && 13 !== n ? 2 : 3;
}
}), c([ "ff", "kab" ], {
c: [ 1, 5 ],
cFn: function(t, e) {
return d([ 0, 1 ], e) ? 0 : 1;
}
}), c([ "fil", "tl" ], {
c: [ 1, 5 ],
cFn: function(t, e, n, r) {
var i = e % 10, s = r % 10;
return 0 === n && d([ 1, 2, 3 ], e) || 0 === n && !d([ 4, 6, 9 ], i) || 0 !== n && !d([ 4, 6, 9 ], s) ? 0 : 1;
},
o: [ 1, 5 ],
oFn: function(t) {
return 1 === t ? 0 : 1;
}
}), c([ "fr", "hy" ], {
c: [ 1, 5 ],
cFn: function(t, e) {
return d([ 0, 1 ], e) ? 0 : 1;
},
o: [ 1, 5 ],
oFn: function(t) {
return 1 === t ? 0 : 1;
}
}), c([ "ga" ], {
c: [ 1, 2, 3, 4, 5 ],
cFn: function(t) {
return 1 === t ? 0 : 2 === t ? 1 : u(3, 6, t) ? 2 : u(7, 10, t) ? 3 : 4;
},
o: [ 1, 5 ],
oFn: function(t) {
return 1 === t ? 0 : 1;
}
}), c([ "gd" ], {
c: [ 1, 2, 3, 5 ],
cFn: function(t) {
return d([ 1, 11 ], t) ? 0 : d([ 2, 12 ], t) ? 1 : u(3, 10, t) || u(13, 19, t) ? 2 : 3;
}
}), c([ "gu", "hi" ], {
c: [ 1, 5 ],
cFn: function(t, e) {
return 0 === e || 1 === t ? 0 : 1;
},
o: [ 1, 2, 3, 4, 5 ],
oFn: function(t) {
return 1 === t ? 0 : d([ 2, 3 ], t) ? 1 : 4 === t ? 2 : 6 === t ? 3 : 4;
}
}), c([ "gv" ], {
c: [ 1, 2, 3, 4, 5 ],
cFn: function(t, e, n) {
var r = e % 10;
return 0 === n && 1 === r ? 0 : 0 === n && 2 === r ? 1 : 0 === n && d([ 0, 20, 40, 60, 80 ], e % 100) ? 2 : 0 !== n ? 3 : 4;
}
}), c([ "he", "iw" ], {
c: [ 1, 2, 4, 5 ],
cFn: function(t, e, n) {
var r = t % 10;
return 1 === e && 0 === n ? 0 : 2 === e && 0 === n ? 1 : 0 !== n || u(0, 10, t) || 0 !== r ? 3 : 2;
}
}), c([ "hu" ], {
c: [ 1, 5 ],
cFn: function(t) {
return 1 === t ? 0 : 1;
},
o: [ 1, 5 ],
oFn: function(t) {
return d([ 1, 5 ], t) ? 0 : 1;
}
}), c([ "is" ], {
c: [ 1, 5 ],
cFn: function(t, e, n, r, i) {
return 0 === i && 1 === e % 10 && 11 !== e % 100 || 0 !== i ? 0 : 1;
}
}), c([ "it" ], {
c: [ 1, 5 ],
cFn: function(t, e, n) {
return 1 === e && 0 === n ? 0 : 1;
},
o: [ 4, 5 ],
oFn: function(t) {
return d([ 11, 8, 80, 800 ], t) ? 0 : 1;
}
}), c([ "iu", "kw", "naq", "se", "sma", "smi", "smj", "smn", "sms" ], {
c: [ 1, 2, 5 ],
cFn: function(t) {
return 1 === t ? 0 : 2 === t ? 1 : 2;
}
}), c([ "ka" ], {
c: [ 1, 5 ],
cFn: function(t) {
return 1 === t ? 0 : 1;
},
o: [ 1, 4, 5 ],
oFn: function(t, e) {
var n = e % 100;
return 1 === e ? 0 : 0 === e || u(2, 20, n) || 40 === n || 60 === n || 80 === n ? 1 : 2;
}
}), c([ "kk" ], {
c: [ 1, 5 ],
cFn: function(t) {
return 1 === t ? 0 : 1;
},
o: [ 4, 5 ],
oFn: function(t) {
var e = t % 10;
return 6 === e || 9 === e || 0 === e && 0 !== t ? 0 : 1;
}
}), c([ "ksh" ], {
c: [ 0, 1, 5 ],
cFn: function(t) {
return 0 === t ? 0 : 1 === t ? 1 : 2;
}
}), c([ "lag" ], {
c: [ 0, 1, 5 ],
cFn: function(t, e) {
return 0 === t ? 0 : d([ 0, 1 ], e) && 0 !== t ? 1 : 2;
}
}), c([ "lo", "ms", "vi" ], {
o: [ 1, 5 ],
oFn: function(t) {
return 1 === t ? 0 : 1;
}
}), c([ "lt" ], {
c: [ 1, 3, 4, 5 ],
cFn: function(t, e, n, r) {
var i = t % 10, s = t % 100;
return 1 !== i || u(11, 19, s) ? u(2, 9, i) && !u(11, 19, s) ? 1 : 0 !== r ? 2 : 3 : 0;
}
}), c([ "lv", "prg" ], {
c: [ 0, 1, 5 ],
cFn: function(t, e, n, r) {
var i = t % 10, s = t % 100, o = r % 100, a = r % 10;
return 0 === i || u(11, 19, s) || 2 === n && u(11, 19, o) ? 0 : 1 === i && 11 !== s || 2 === n && 1 === a && 11 !== o || 2 !== n && 1 === a ? 1 : 2;
}
}), c([ "mk" ], {
c: [ 1, 5 ],
cFn: function(t, e, n, r) {
return 0 === n && 1 === e % 10 || 1 === r % 10 ? 0 : 1;
},
o: [ 1, 2, 4, 5 ],
oFn: function(t, e) {
var n = e % 10, r = e % 100;
return 1 === n && 11 !== r ? 0 : 2 === n && 12 !== r ? 1 : d([ 7, 8 ], n) && !d([ 17, 18 ], r) ? 2 : 3;
}
}), c([ "mo", "ro" ], {
c: [ 1, 3, 5 ],
cFn: function(t, e, n) {
return 1 === e && 0 === n ? 0 : 0 !== n || 0 === t || 1 !== t && u(1, 19, t % 100) ? 1 : 2;
},
o: [ 1, 5 ],
oFn: function(t) {
return 1 === t ? 0 : 1;
}
}), c([ "mr" ], {
c: [ 1, 5 ],
cFn: function(t, e) {
return 0 === e || 1 === t ? 0 : 1;
},
o: [ 1, 2, 3, 5 ],
oFn: function(t) {
return 1 === t ? 0 : d([ 2, 3 ], t) ? 1 : 4 === t ? 2 : 3;
}
}), c([ "mt" ], {
c: [ 1, 3, 4, 5 ],
cFn: function(t) {
var e = t % 100;
return 1 === t ? 0 : 0 === t || u(2, 10, e) ? 1 : u(11, 19, e) ? 2 : 3;
}
}), c([ "ne" ], {
c: [ 1, 5 ],
cFn: function(t) {
return 1 === t ? 0 : 1;
},
o: [ 1, 5 ],
oFn: function(t) {
return u(1, 4, t) ? 0 : 1;
}
}), c([ "pl" ], {
c: [ 1, 3, 4, 5 ],
cFn: function(t, e, n) {
var r = e % 10, i = e % 100;
return 1 === e && 0 === n ? 0 : 0 === n && u(2, 4, r) && !u(12, 14, i) ? 1 : 0 === n && 1 !== e && u(0, 1, r) || 0 === n && u(5, 9, r) || 0 === n && u(12, 14, i) ? 2 : 3;
}
}), c([ "pt" ], {
c: [ 1, 5 ],
cFn: function(t) {
return u(0, 2, t) && 2 !== t ? 0 : 1;
}
}), c([ "pt-pt" ], {
c: [ 1, 5 ],
cFn: function(t, e, n) {
return 1 === t && 0 === n ? 0 : 1;
}
}), c([ "ru" ], {
c: [ 1, 3, 4, 5 ],
cFn: function(t, e, n) {
var r = e % 10, i = e % 100;
return 0 === n && 1 === r && 11 !== i ? 0 : 0 === n && u(2, 4, r) && !u(12, 14, i) ? 1 : 0 === n && 0 === r || 0 === n && u(5, 9, r) || 0 === n && u(11, 14, i) ? 2 : 3;
}
}), c([ "shi" ], {
c: [ 1, 3, 5 ],
cFn: function(t, e) {
return 0 === e || 1 === t ? 0 : u(2, 10, t) ? 1 : 2;
}
}), c([ "si" ], {
c: [ 1, 5 ],
cFn: function(t, e, n, r) {
return d([ 0, 1 ], t) || 0 === e && 1 === r ? 0 : 1;
}
}), c([ "sl" ], {
c: [ 1, 2, 3, 5 ],
cFn: function(t, e, n) {
var r = e % 100;
return 0 === n && 1 === r ? 0 : 0 === n && 2 === r ? 1 : 0 === n && u(3, 4, r) || 0 !== n ? 2 : 3;
}
}), c([ "sq" ], {
c: [ 1, 5 ],
cFn: function(t) {
return 1 === t ? 0 : 1;
},
o: [ 1, 4, 5 ],
oFn: function(t) {
return 1 === t ? 0 : 4 === t % 10 && 14 !== t % 100 ? 1 : 2;
}
}), c([ "sv" ], {
c: [ 1, 5 ],
cFn: function(t, e, n) {
return 1 === e && 0 === n ? 0 : 1;
},
o: [ 1, 5 ],
oFn: function(t) {
var e = t % 100;
return d([ 1, 2 ], t % 10) && !d([ 11, 12 ], e) ? 0 : 1;
}
}), c([ "tzm" ], {
c: [ 1, 5 ],
cFn: function(t) {
return u(0, 1, t) || u(11, 99, t) ? 0 : 1;
}
}), c([ "uk" ], {
c: [ 1, 3, 4, 5 ],
cFn: function(t, e, n) {
var r = e % 10, i = e % 100;
return 0 === n && 1 === r && 11 !== i ? 0 : 0 === n && u(2, 4, r) && !u(12, 14, i) ? 1 : 0 === n && 0 === r || 0 === n && u(5, 9, r) || 0 === n && u(11, 14, i) ? 2 : 3;
},
o: [ 3, 5 ],
oFn: function(t) {
return 3 === t % 10 && 13 !== t % 100 ? 0 : 1;
}
});
},
214: function(t, e, n) {
"use strict";
(document.currentScript || [].slice.call(document.getElementsByTagName("script")).pop()).setAttribute("data-manual", 1), 
n(51);
let r = n(215), i = n(218);
function s(t) {
!function(t) {
let e = t.querySelectorAll(".code-example:not([data-prism-highlighted])");
for (let t of e) new r(t), t.setAttribute("data-prism-highlighted", "1");
}(t), function(t) {
let e = t.querySelectorAll("div.code-tabs:not([data-prism-highlighted])");
for (let t of e) new i(t), t.setAttribute("data-prism-highlighted", "1");
}(t);
}
e.init = function() {
document.removeEventListener("DOMContentLoaded", Prism.highlightAll), document.addEventListener("DOMContentLoaded", function() {
s(document);
});
}, e.highlight = s;
},
215: function(t, e, n) {
"use strict";
let r = n(52), i = n(216), s = n(93), o = n(217);
t.exports = function(t) {
let e = t.querySelector("pre"), n = e.querySelector('code[class*="language-"]'), a = n.textContent;
Prism.highlightElement(n);
let l = s(e.innerHTML);
e.insertAdjacentHTML("beforeEnd", l);
let c = o(JSON.parse(t.getAttribute("data-highlight")));
e.insertAdjacentHTML("afterBegin", c);
let u, d, h, f = e.classList.contains("language-javascript"), p = e.classList.contains("language-markup"), m = +t.getAttribute("data-trusted");
!+t.getAttribute("data-no-strict") && f && (a = "'use strict';\n" + a);
let g = !0;
if (!f && !p) return;
let E = t.querySelector('[data-action="run"]');
E && (E.onclick = function() {
return this.blur(), _(), !1;
});
let b = t.querySelector('[data-action="edit"]');
function v() {
let t = u.contentWindow;
"function" == typeof t.postMessage ? t.postMessage(a, "https://lookatcode.com/showjs") : alert("Sorry, your browser is too old");
}
function y() {
if (t.hasAttribute("data-global")) {
d || ((d = document.createElement("iframe")).className = "js-frame", d.style.width = 0, 
d.style.height = 0, d.style.border = "none", d.name = "js-global-frame", document.body.appendChild(d));
let t = document.createElement("form");
t.style.display = "none", t.method = "POST", t.enctype = "multipart/form-data", 
t.action = "https://lookatcode.com/showhtml", t.target = "js-global-frame";
let e = document.createElement("textarea");
e.name = "code", e.value = w("<script>\n" + a + "\n<\/script>"), t.appendChild(e), 
d.parentNode.insertBefore(t, d.nextSibling), t.submit(), t.remove();
} else if (m) {
if (t.hasAttribute("data-autorun")) return void function(t) {
let e = document.createElement("script");
e.text = t, document.head.appendChild(e).parentNode.removeChild(e);
}(a);
try {
window.eval.call(window, a);
} catch (t) {
alert("Error: " + t.message);
}
} else t.hasAttribute("data-refresh") && u && (u.remove(), u = null), u ? v() : ((u = document.createElement("iframe")).className = "js-frame", 
u.src = "https://lookatcode.com/showjs", u.style.width = 0, u.style.height = 0, 
u.style.border = "none", u.onload = function() {
v();
}, document.body.appendChild(u));
}
function w(t) {
let e = t.toLowerCase(), n = e.match("<body>"), r = e.match("</body>"), i = e.match("<html>"), s = e.match("</html>");
if (e.match(/^\s*<!doctype/)) return t;
let o = t;
return i || (o = "<html>\n" + o), s || (o += "\n</html>"), n || (o = o.replace("<html>", '<html>\n<head>\n  <meta charset="utf-8">\n</head><body>\n')), 
r || (o = o.replace("</html>", "\n</body>\n</html>")), o = "<!DOCTYPE HTML>\n" + o;
}
function _() {
f ? y() : function() {
let e;
if (h && t.hasAttribute("data-refresh") && (h.remove(), h = null), h || (h = t.querySelector(".code-result")), 
h) e = h.querySelector("iframe"); else {
if ((h = document.createElement("div")).className = "code-result code-example__result", 
(e = document.createElement("iframe")).name = "frame-" + Math.random(), e.className = "code-result__iframe", 
"0" === t.getAttribute("data-demo-height")) e.style.display = "none"; else if (t.hasAttribute("data-demo-height")) {
let n = +t.getAttribute("data-demo-height");
e.style.height = n + "px";
}
h.appendChild(e), t.appendChild(h);
}
if (m) {
let n = e.contentDocument || e.contentWindow.document;
n.open(), n.write(w(a)), n.close(), t.hasAttribute("data-demo-height") || r.iframe(e), 
g && t.hasAttribute("data-autorun") || i(h) || h.scrollIntoView(!1);
} else {
let n = document.createElement("form");
n.style.display = "none", n.method = "POST", n.enctype = "multipart/form-data", 
n.action = "https://lookatcode.com/showhtml", n.target = e.name;
let s = document.createElement("textarea");
s.name = "code", s.value = w(a), n.appendChild(s), e.parentNode.insertBefore(n, e.nextSibling), 
n.submit(), n.remove(), g && t.hasAttribute("data-autorun") || (e.onload = function() {
t.hasAttribute("data-demo-height") || r.iframe(e), i(h) || h.scrollIntoView(!1);
});
}
}(), g = !1;
}
b && (b.onclick = function() {
return this.blur(), function() {
let t;
if (p) t = w(a); else {
let e = a.replace(/^/gim, "    ");
t = "<!DOCTYPE html>\n<html>\n\n<body>\n  <script>\n" + e + "\n  <\/script>\n</body>\n\n</html>";
}
let e = document.createElement("form");
e.action = "http://plnkr.co/edit/?p=preview", e.method = "POST", e.target = "_blank", 
document.body.appendChild(e);
let n = document.createElement("textarea");
n.name = "files[index.html]", n.value = t, e.appendChild(n);
let r = document.createElement("input");
r.name = "description", r.value = "Fork from " + window.location, e.appendChild(r), 
e.submit(), e.remove();
}(), !1;
}), t.hasAttribute("data-autorun") && ("epub" == window.ebookType && "no-epub" == t.getAttribute("data-autorun") ? t.querySelector("iframe").remove() : setTimeout(_, 100));
};
},
216: function(t, e, n) {
"use strict";
t.exports = function(t) {
let e = t.getBoundingClientRect(), n = 0;
if (e.top < 0) n = e.bottom; else {
if (!(e.bottom > window.innerHeight)) return !0;
n = window.innerHeight - top;
}
return n > 10;
};
},
217: function(t, e, n) {
"use strict";
t.exports = function(t) {
if (!t || !t.length) return "";
let e = [];
for (let n of t) {
let t = `<code class="block-highlight${n.cols ? " block-highlight_inline" : ""}" data-start="${n.start}">`;
if (t += "\n".repeat(n.start), n.end) t += `<code class="mask">${"\n".repeat(n.end - n.start + 1)}</code>`; else if (n.cols) for (let e = 0; e < n.cols.length; e++) {
let r = n.cols[e], i = 0 === e ? null : n.cols[e - 1];
t += " ".repeat(i ? r.start - i.end : r.start), t += `<code class="mask-inline">${" ".repeat(r.end - r.start)}</code>`;
}
t += "</code>", e.push(t);
}
return e.join("");
};
},
218: function(t, e, n) {
"use strict";
let r = n(7), i = n(93);
class s {
constructor(t) {
window.ebookType || (this.elem = t, this.translateX = 0, this.switchesElem = t.querySelector("[data-code-tabs-switches]"), 
this.switchesElemItems = this.switchesElem.firstElementChild, this.arrowLeft = t.querySelector("[data-code-tabs-left]"), 
this.arrowRight = t.querySelector("[data-code-tabs-right]"), this.arrowLeft.onclick = (t => {
t.preventDefault(), this.translateX = Math.max(0, this.translateX - this.switchesElem.offsetWidth), 
this.renderTranslate();
}), this.arrowRight.onclick = (t => {
t.preventDefault(), this.translateX = Math.min(this.translateX + this.switchesElem.offsetWidth, this.switchesElemItems.offsetWidth - this.switchesElem.offsetWidth), 
this.renderTranslate();
}), this.delegate(".code-tabs__switch", "click", this.onSwitchClick));
}
onSwitchClick(t) {
t.preventDefault();
let e, n = t.delegateTarget.parentNode.children, r = this.elem.querySelector("[data-code-tabs-content]").children;
for (let i = 0; i < n.length; i++) {
let s = n[i], o = r[i];
s == t.delegateTarget ? (e = i, o.classList.add("code-tabs__section_current"), s.classList.add("code-tabs__switch_current")) : (o.classList.remove("code-tabs__section_current"), 
s.classList.remove("code-tabs__switch_current"));
}
0 === e ? this.elem.classList.add("code-tabs_result_on") : (this.elem.classList.remove("code-tabs_result_on"), 
this.highlightTab(r[e]));
}
highlightTab(t) {
if (t.highlighted) return;
let e = t.querySelector("pre"), n = e.querySelector("code");
Prism.highlightElement(n), e.insertAdjacentHTML("beforeEnd", i(e.innerHTML)), t.highlighted = !0;
}
renderTranslate() {
this.switchesElemItems.style.transform = "translateX(-" + this.translateX + "px)", 
0 === this.translateX ? this.arrowLeft.setAttribute("disabled", "") : this.arrowLeft.removeAttribute("disabled"), 
this.translateX === this.switchesElemItems.offsetWidth - this.switchesElem.offsetWidth ? this.arrowRight.setAttribute("disabled", "") : this.arrowRight.removeAttribute("disabled");
}
}
r.delegateMixin(s.prototype), t.exports = s;
},
219: function(t, e, n) {
"use strict";
var r = n(220), i = n(50), s = "Expected a function";
t.exports = function(t, e, n) {
var o = !0, a = !0;
if ("function" != typeof t) throw new TypeError(s);
return i(n) && (o = "leading" in n ? !!n.leading : o, a = "trailing" in n ? !!n.trailing : a), 
r(t, e, {
leading: o,
maxWait: e,
trailing: a
});
};
},
220: function(t, e, n) {
"use strict";
var r = n(50), i = n(221), s = n(223), o = "Expected a function", a = Math.max, l = Math.min;
t.exports = function(t, e, n) {
var c, u, d, h, f, p, m = 0, g = !1, E = !1, b = !0;
if ("function" != typeof t) throw new TypeError(o);
function v(e) {
var n = c, r = u;
return c = u = void 0, m = e, h = t.apply(r, n);
}
function y(t) {
var n = t - p;
return void 0 === p || n >= e || n < 0 || E && t - m >= d;
}
function w() {
var t = i();
if (y(t)) return _(t);
f = setTimeout(w, function(t) {
var n = e - (t - p);
return E ? l(n, d - (t - m)) : n;
}(t));
}
function _(t) {
return f = void 0, b && c ? v(t) : (c = u = void 0, h);
}
function T() {
var t = i(), n = y(t);
if (c = arguments, u = this, p = t, n) {
if (void 0 === f) return function(t) {
return m = t, f = setTimeout(w, e), g ? v(t) : h;
}(p);
if (E) return f = setTimeout(w, e), v(p);
}
return void 0 === f && (f = setTimeout(w, e)), h;
}
return e = s(e) || 0, r(n) && (g = !!n.leading, d = (E = "maxWait" in n) ? a(s(n.maxWait) || 0, e) : d, 
b = "trailing" in n ? !!n.trailing : b), T.cancel = function() {
void 0 !== f && clearTimeout(f), m = 0, c = p = u = f = void 0;
}, T.flush = function() {
return void 0 === f ? h : _(i());
}, T;
};
},
221: function(t, e, n) {
"use strict";
var r = n(94);
t.exports = function() {
return r.Date.now();
};
},
222: function(t, e, n) {
"use strict";
(function(e) {
var n = "object" == typeof e && e && e.Object === Object && e;
t.exports = n;
}).call(this, n(11));
},
223: function(t, e, n) {
"use strict";
var r = n(50), i = n(224), s = NaN, o = /^\s+|\s+$/g, a = /^[-+]0x[0-9a-f]+$/i, l = /^0b[01]+$/i, c = /^0o[0-7]+$/i, u = parseInt;
t.exports = function(t) {
if ("number" == typeof t) return t;
if (i(t)) return s;
if (r(t)) {
var e = "function" == typeof t.valueOf ? t.valueOf() : t;
t = r(e) ? e + "" : e;
}
if ("string" != typeof t) return 0 === t ? t : +t;
t = t.replace(o, "");
var n = l.test(t);
return n || c.test(t) ? u(t.slice(2), n ? 2 : 8) : a.test(t) ? s : +t;
};
},
224: function(t, e, n) {
"use strict";
var r = n(225), i = n(228), s = "[object Symbol]";
t.exports = function(t) {
return "symbol" == typeof t || i(t) && r(t) == s;
};
},
225: function(t, e, n) {
"use strict";
var r = n(95), i = n(226), s = n(227), o = "[object Null]", a = "[object Undefined]", l = r ? r.toStringTag : void 0;
t.exports = function(t) {
return null == t ? void 0 === t ? a : o : l && l in Object(t) ? i(t) : s(t);
};
},
226: function(t, e, n) {
"use strict";
var r = n(95), i = Object.prototype, s = i.hasOwnProperty, o = i.toString, a = r ? r.toStringTag : void 0;
t.exports = function(t) {
var e = s.call(t, a), n = t[a];
try {
t[a] = void 0;
var r = !0;
} catch (t) {}
var i = o.call(t);
return r && (e ? t[a] = n : delete t[a]), i;
};
},
227: function(t, e, n) {
"use strict";
var r = Object.prototype.toString;
t.exports = function(t) {
return r.call(t);
};
},
228: function(t, e, n) {
"use strict";
t.exports = function(t) {
return null != t && "object" == typeof t;
};
},
24: function(t, e, n) {
"use strict";
let r = n(3), i = n(27);
const s = n(0).lang, o = n(4);
o.i18n.add("", n(28)("./" + s + ".yml")), o.i18n.add("error.network", n(30)("./" + s + ".yml")), 
document.addEventListener("xhrfail", function(t) {
new r.Error(t.reason);
}), t.exports = function(t) {
let e = new XMLHttpRequest(), n = t.method || "GET", r = t.body, s = t.url;
e.open(n, s, !t.sync), e.method = n;
let a = i();
a && !t.skipCsrf && e.setRequestHeader("X-XSRF-TOKEN", a), "[object Object]" == {}.toString.call(r) && (e.setRequestHeader("Content-Type", "application/json;charset=UTF-8"), 
r = JSON.stringify(r)), t.noDocumentEvents || (e.addEventListener("loadstart", t => {
e.timeStart = Date.now();
let n = c("xhrstart", t);
document.dispatchEvent(n);
}), e.addEventListener("loadend", t => {
let e = c("xhrend", t);
document.dispatchEvent(e);
}), e.addEventListener("success", t => {
let e = c("xhrsuccess", t);
e.result = t.result, document.dispatchEvent(e);
}), e.addEventListener("fail", t => {
let e = c("xhrfail", t);
e.reason = t.reason, document.dispatchEvent(e);
})), t.raw || e.setRequestHeader("Accept", "application/json"), e.setRequestHeader("X-Requested-With", "XMLHttpRequest");
let l = t.normalStatuses || [ 200 ];
function c(t, e) {
let n = new CustomEvent(t);
return n.originalEvent = e, n;
}
function u(t, n) {
let r = c("fail", n);
r.reason = t, e.dispatchEvent(r);
}
return e.addEventListener("error", t => {
u(o("error.network.server_connection_error"), t);
}), e.addEventListener("timeout", t => {
u(o("error.network.server_request_timeout"), t);
}), e.addEventListener("abort", t => {
u(o("error.network.request_aborted"), t);
}), e.addEventListener("load", n => {
if (!e.status) return void u(o("error.network.no_response"), n);
if (!l.includes(e.status)) return void u(o("error.network.server_error", {
status: e.status
}), n);
let r = e.responseText;
if ((e.getResponseHeader("Content-Type") || "").match(/^application\/json/) || t.json) try {
r = JSON.parse(r);
} catch (n) {
return void u(o("error.network.invalid_format"), n);
}
!function(t, n) {
let r = c("success", n);
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
function i(t) {
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
i.keys = function() {
return Object.keys(r);
}, i.resolve = s, t.exports = i, i.id = 28;
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
class i {
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
r.delegateMixin(i.prototype);
e.Info = class extends i {
constructor(t, e) {
super(t, "info", e);
}
};
e.Warning = class extends i {
constructor(t, e) {
super(t, "warning", e);
}
};
e.Success = class extends i {
constructor(t, e) {
super(t, "success", e);
}
};
class s extends i {
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
function i(t) {
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
i.keys = function() {
return Object.keys(r);
}, i.resolve = s, t.exports = i, i.id = 30;
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
325: function(t, e, n) {
n(326), t.exports = n(327);
},
326: function(module, exports, __webpack_require__) {
"use strict";
const delegate = __webpack_require__(7), prism = __webpack_require__(214), ItemSlider = __webpack_require__(354);
function init() {
initTaskButtons(), initFolderList(), initViewMoreButton(), initCoursesSlider(), 
prism.init();
}
function initTaskButtons() {
delegate(document, ".task__solution", "click", function(t) {
t.target.closest(".task").classList.toggle("task_answer_open");
}), delegate(document, ".task__answer-close", "click", function(t) {
t.target.closest(".task").classList.toggle("task_answer_open");
}), delegate(document, ".task__step-show", "click", function(t) {
t.target.closest(".task__step").classList.toggle("task_step_open");
});
}
function initViewMoreButton() {
delegate(document, "a.list-sub__more", "click", function(t) {
t.preventDefault();
const e = t.target;
for (let t of e.closest(".list-sub").querySelectorAll(".list-sub__item_phone_hidden")) t.classList.remove("list-sub__item_phone_hidden");
e.style.display = "none";
});
}
function initFolderList() {
delegate(document, ".lessons-list__lesson_level_1 > .lessons-list__link", "click", function(t) {
let e = t.delegateTarget, n = e.closest(".lessons-list").querySelector(".lessons-list__lesson_open");
n && n !== e.parentNode && n.classList.remove("lessons-list__lesson_open"), e.parentNode.classList.toggle("lessons-list__lesson_open"), 
t.preventDefault();
});
}
function initCoursesSlider() {
const t = document.querySelector("[data-courses-slider]");
t && new ItemSlider({
el: t,
class: "slider_frontpage"
});
}
window.runDemo = function(button) {
let demoElem, parent = button;
for (;(parent = parent.parentElement) && (demoElem = parent.querySelector("[data-demo]"), 
!demoElem); ) ;
demoElem ? eval(demoElem.textContent) : alert("Error, no demo element");
}, init();
},
327: function(t, e, n) {
"use strict";
let r = n(328), i = n(99), s = n(7);
function o() {
/[&?]map\b/.test(location.href) || window.history.replaceState(null, null, ~location.href.indexOf("?") ? location.href + "&map" : location.href + "?map"), 
new r().elem.addEventListener("tutorial-map-remove", () => {
window.history.replaceState(null, null, location.href.replace(/[&?]map\b/, ""));
});
}
!function() {
s(document, '[data-action="tutorial-map"]', "click", t => {
1 === t.which && (t.preventDefault(), o());
});
let t = document.querySelector(".tutorial-map");
t ? new i(t) : /[&?]map\b/.test(location.href) && o();
}();
},
328: function(t, e, n) {
"use strict";
let r = n(24), i = n(7), s = n(14), o = n(99), a = n(68);
class l {
constructor() {
this.elem = document.createElement("div"), document.body.appendChild(this.elem);
let t = new Modal({
hasClose: !1
}), e = new s();
t.setContent(e.elem), e.start(), this.onDocumentKeyDown = this.onDocumentKeyDown.bind(this);
let n = r({
url: "/tutorial/map"
});
n.addEventListener("success", e => {
t.remove(), this.elem.innerHTML = '<div class="tutorial-map-overlay"></div>', this.mapElem = this.elem.firstChild, 
this.mapElem.innerHTML = e.result + '<button class="close-button tutorial-map-overlay__close"></button>', 
this.mapElem.addEventListener("click", t => {
t.target.classList.contains("tutorial-map-overlay__close") && this.remove();
}), document.addEventListener("keydown", this.onDocumentKeyDown), document.body.classList.add("tutorial-map_on"), 
this.mapElem.addEventListener("scroll", a), new o(this.mapElem.firstElementChild);
}), n.addEventListener("fail", () => t.remove());
}
remove() {
this.elem.dispatchEvent(new CustomEvent("tutorial-map-remove")), this.elem.remove(), 
document.body.classList.remove("tutorial-map_on"), document.removeEventListener("keydown", this.onDocumentKeyDown);
}
onDocumentKeyDown(t) {
27 == t.keyCode && (t.preventDefault(), this.remove());
}
}
i.delegateMixin(l.prototype), t.exports = l;
},
354: function(t, e, n) {
"use strict";
let r = n(219);
t.exports = class {
constructor(t) {
this.slider = t.el, this.list = this.slider.querySelector("ul"), t.class && (this.classList = t.class.split(" ")), 
this.disabled = !1, this.init(), this.bindHandlers();
}
init() {
this.classList && this.classList.length && this.slider.classList.add(...this.classList), 
this.slider.classList.add("slider_disable-left");
const t = document.createElement("div");
t.classList.add("slider__container"), t.appendChild(this.list), this.slider.innerHTML = '<button class="slider__arrow slider__arrow_left"></button><button class="slider__arrow slider__arrow_right"></button>', 
this.slider.appendChild(t), this.innerWidth = this.countInnerWidth(), this.arrowLeft = this.slider.querySelector(".slider__arrow_left"), 
this.arrowRight = this.slider.querySelector(".slider__arrow_right");
}
countInnerWidth() {
return [ ...this.list.querySelectorAll("li") ].reduce((t, e) => {
const n = window.getComputedStyle(e);
return t + (e.offsetWidth + parseFloat(n.marginLeft) + parseFloat(n.marginRight));
}, 0);
}
bindHandlers() {
this.transformX = 0, this.arrowLeft.addEventListener("click", () => {
this.transformX -= this.list.clientWidth, this.transformX < 0 && (this.transformX = 0), 
this.render();
}), this.arrowRight.addEventListener("click", () => {
this.transformX = Math.min(this.transformX + this.list.clientWidth, this.list.scrollWidth - this.list.clientWidth), 
this.render();
}), window.addEventListener("resize", r(() => {
this.onResize();
}, 200)), this.onResize();
}
onResize() {
!this.disabled && this.innerWidth <= this.list.offsetWidth ? (this.slider.classList.add("slider_disabled"), 
this.disabled = !0, this.transformX > 0 && (this.transformX = 0, this.slider.classList.contains("slider_disable-right") && this.slider.classList.remove("slider_disable-right"), 
this.render())) : this.disabled && this.innerWidth > this.list.offsetWidth && (this.slider.classList.remove("slider_disabled"), 
this.slider.classList.contains("slider_disable-right") && this.slider.classList.remove("slider_disable-right"), 
this.disabled = !1);
}
render() {
this.list.style.transform = this.transformX > 0 ? `translateX(${-this.transformX}px)` : "translateX(0)", 
0 === this.transformX ? this.slider.classList.add("slider_disable-left") : this.slider.classList.remove("slider_disable-left"), 
this.transformX == this.list.scrollWidth - this.list.clientWidth ? this.slider.classList.add("slider_disable-right") : this.slider.classList.remove("slider_disable-right");
}
};
},
4: function(t, e, n) {
"use strict";
const r = new (n(18))("en");
let i = console.error;
function s(t) {
return r.hasPhrase(o, t) || i("No such phrase", t), r.t(o, ...arguments);
}
t.exports = s;
const o = n(0).lang;
"en" !== o && r.setFallback(o, "en"), r.add = ((...t) => r.addPhrase(o, ...t)), 
s.i18n = r;
},
50: function(t, e, n) {
"use strict";
t.exports = function(t) {
var e = typeof t;
return null != t && ("object" == e || "function" == e);
};
},
51: function(t, e, n) {
"use strict";
n(57), n(58), n(59), n(60), n(61), n(62), n(63), n(64), n(65), n(66), Prism.hooks.add("wrap", function(t) {
"span" === t.tag && (t.tag = "code");
});
},
52: function(t, e, n) {
"use strict";
let r = n(53), i = n(56), s = [];
e.iframe = function(t) {
r.async(t, function(e, n) {
n && (t.style.height = n + "px");
});
}, e.codeTabs = function(t) {
function e() {
let e = t.closest(".code-tabs"), n = (t.closest("[data-code-tabs-content]"), e.querySelector("[data-code-tabs-switches]"));
n.firstElementChild.offsetWidth > n.offsetWidth ? e.classList.add("code-tabs_scroll") : e.classList.remove("code-tabs_scroll");
}
e(), s.push(e);
}, window.addEventListener("resize", i(function() {
s.forEach(function(t) {
t();
});
}, 200));
},
53: function(t, e, n) {
"use strict";
let r = n(54);
function i(t, e) {
let n = setTimeout(function() {
e(new Error("timeout"));
}, 500);
function i(t, r) {
clearTimeout(n), e(t, r);
}
try {
(t.contentDocument || t.contentWindow.document).body;
} catch (t) {
!function(t, e) {
throw new Error("Not implemented yet");
}();
}
if (!t.offsetWidth) {
let e = t.cloneNode(!0);
return e.name = "", e.style.height = "50px", e.style.position = "absolute", e.style.display = "block", 
e.style.top = "10000px", e.onload = function() {
let n = r(this.contentDocument);
t.style.display = "block", e.remove(), i(null, n);
}, void document.body.appendChild(e);
}
t.style.display = "block", t.style.height = "1px";
let s = r(t.contentDocument);
t.style.height = "", i(null, s);
}
i.async = function(t, e) {
setTimeout(function() {
i(t, e);
}, 0);
}, t.exports = i;
},
54: function(t, e, n) {
"use strict";
let r, i = n(55);
t.exports = function(t) {
t = t || document;
let e = Math.max(t.body.scrollHeight, t.documentElement.scrollHeight, t.body.offsetHeight, t.documentElement.offsetHeight, t.body.clientHeight, t.documentElement.clientHeight);
return t.documentElement.scrollWidth > t.documentElement.clientWidth && (r || (r = i()), 
e += r), e;
};
},
55: function(t, e, n) {
"use strict";
t.exports = function() {
let t = document.createElement("div");
if (t.style.cssText = "visibility:hidden;height:100px", !document.body) throw new Error("getScrollbarHeight called to early: no document.body");
document.body.appendChild(t);
let e = t.offsetWidth;
t.style.overflow = "scroll";
let n = document.createElement("div");
n.style.width = "100%", t.appendChild(n);
let r = n.offsetWidth;
return t.parentNode.removeChild(t), e - r;
};
},
56: function(t, e, n) {
"use strict";
t.exports = function(t, e) {
let n, r, i = !1;
return function s() {
if (i) return n = arguments, void (r = this);
t.apply(this, arguments), i = !0, setTimeout(function() {
i = !1, n && (s.apply(r, n), n = r = null);
}, e);
};
};
},
57: function(t, e) {
var n = "undefined" != typeof window ? window : "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope ? self : {}, r = function() {
var t = /\blang(?:uage)?-([\w-]+)\b/i, e = 0, r = n.Prism = {
manual: n.Prism && n.Prism.manual,
disableWorkerMessageHandler: n.Prism && n.Prism.disableWorkerMessageHandler,
util: {
encode: function(t) {
return t instanceof i ? new i(t.type, r.util.encode(t.content), t.alias) : "Array" === r.util.type(t) ? t.map(r.util.encode) : t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ");
},
type: function(t) {
return Object.prototype.toString.call(t).match(/\[object (\w+)\]/)[1];
},
objId: function(t) {
return t.__id || Object.defineProperty(t, "__id", {
value: ++e
}), t.__id;
},
clone: function(t, e) {
var n = r.util.type(t);
switch (e = e || {}, n) {
case "Object":
if (e[r.util.objId(t)]) return e[r.util.objId(t)];
var i = {};
for (var s in e[r.util.objId(t)] = i, t) t.hasOwnProperty(s) && (i[s] = r.util.clone(t[s], e));
return i;

case "Array":
if (e[r.util.objId(t)]) return e[r.util.objId(t)];
i = [];
return e[r.util.objId(t)] = i, t.forEach(function(t, n) {
i[n] = r.util.clone(t, e);
}), i;
}
return t;
}
},
languages: {
extend: function(t, e) {
var n = r.util.clone(r.languages[t]);
for (var i in e) n[i] = e[i];
return n;
},
insertBefore: function(t, e, n, i) {
var s = (i = i || r.languages)[t];
if (2 == arguments.length) {
for (var o in n = arguments[1]) n.hasOwnProperty(o) && (s[o] = n[o]);
return s;
}
var a = {};
for (var l in s) if (s.hasOwnProperty(l)) {
if (l == e) for (var o in n) n.hasOwnProperty(o) && (a[o] = n[o]);
a[l] = s[l];
}
return r.languages.DFS(r.languages, function(e, n) {
n === i[t] && e != t && (this[e] = a);
}), i[t] = a;
},
DFS: function(t, e, n, i) {
for (var s in i = i || {}, t) t.hasOwnProperty(s) && (e.call(t, s, t[s], n || s), 
"Object" !== r.util.type(t[s]) || i[r.util.objId(t[s])] ? "Array" !== r.util.type(t[s]) || i[r.util.objId(t[s])] || (i[r.util.objId(t[s])] = !0, 
r.languages.DFS(t[s], e, s, i)) : (i[r.util.objId(t[s])] = !0, r.languages.DFS(t[s], e, null, i)));
}
},
plugins: {},
highlightAll: function(t, e) {
r.highlightAllUnder(document, t, e);
},
highlightAllUnder: function(t, e, n) {
var i = {
callback: n,
selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
};
r.hooks.run("before-highlightall", i);
for (var s, o = i.elements || t.querySelectorAll(i.selector), a = 0; s = o[a++]; ) r.highlightElement(s, !0 === e, i.callback);
},
highlightElement: function(e, i, s) {
for (var o, a, l = e; l && !t.test(l.className); ) l = l.parentNode;
l && (o = (l.className.match(t) || [ , "" ])[1].toLowerCase(), a = r.languages[o]), 
e.className = e.className.replace(t, "").replace(/\s+/g, " ") + " language-" + o, 
e.parentNode && (l = e.parentNode, /pre/i.test(l.nodeName) && (l.className = l.className.replace(t, "").replace(/\s+/g, " ") + " language-" + o));
var c = {
element: e,
language: o,
grammar: a,
code: e.textContent
};
if (r.hooks.run("before-sanity-check", c), !c.code || !c.grammar) return c.code && (r.hooks.run("before-highlight", c), 
c.element.textContent = c.code, r.hooks.run("after-highlight", c)), void r.hooks.run("complete", c);
if (r.hooks.run("before-highlight", c), i && n.Worker) {
var u = new Worker(r.filename);
u.onmessage = function(t) {
c.highlightedCode = t.data, r.hooks.run("before-insert", c), c.element.innerHTML = c.highlightedCode, 
s && s.call(c.element), r.hooks.run("after-highlight", c), r.hooks.run("complete", c);
}, u.postMessage(JSON.stringify({
language: c.language,
code: c.code,
immediateClose: !0
}));
} else c.highlightedCode = r.highlight(c.code, c.grammar, c.language), r.hooks.run("before-insert", c), 
c.element.innerHTML = c.highlightedCode, s && s.call(e), r.hooks.run("after-highlight", c), 
r.hooks.run("complete", c);
},
highlight: function(t, e, n) {
var s = {
code: t,
grammar: e,
language: n
};
return r.hooks.run("before-tokenize", s), s.tokens = r.tokenize(s.code, s.grammar), 
r.hooks.run("after-tokenize", s), i.stringify(r.util.encode(s.tokens), s.language);
},
matchGrammar: function(t, e, n, i, s, o, a) {
var l = r.Token;
for (var c in n) if (n.hasOwnProperty(c) && n[c]) {
if (c == a) return;
var u = n[c];
u = "Array" === r.util.type(u) ? u : [ u ];
for (var d = 0; d < u.length; ++d) {
var h = u[d], f = h.inside, p = !!h.lookbehind, m = !!h.greedy, g = 0, E = h.alias;
if (m && !h.pattern.global) {
var b = h.pattern.toString().match(/[imuy]*$/)[0];
h.pattern = RegExp(h.pattern.source, b + "g");
}
h = h.pattern || h;
for (var v = i, y = s; v < e.length; y += e[v].length, ++v) {
var w = e[v];
if (e.length > t.length) return;
if (!(w instanceof l)) {
if (m && v != e.length - 1) {
if (h.lastIndex = y, !(L = h.exec(t))) break;
for (var _ = L.index + (p ? L[1].length : 0), T = L.index + L[0].length, S = v, k = y, A = e.length; S < A && (k < T || !e[S].type && !e[S - 1].greedy); ++S) _ >= (k += e[S].length) && (++v, 
y = k);
if (e[v] instanceof l) continue;
O = S - v, w = t.slice(y, k), L.index -= y;
} else {
h.lastIndex = 0;
var L = h.exec(w), O = 1;
}
if (L) {
p && (g = L[1] ? L[1].length : 0);
T = (_ = L.index + g) + (L = L[0].slice(g)).length;
var C = w.slice(0, _), I = w.slice(T), N = [ v, O ];
C && (++v, y += C.length, N.push(C));
var x = new l(c, f ? r.tokenize(L, f) : L, E, L, m);
if (N.push(x), I && N.push(I), Array.prototype.splice.apply(e, N), 1 != O && r.matchGrammar(t, e, n, v, y, !0, c), 
o) break;
} else if (o) break;
}
}
}
}
},
tokenize: function(t, e, n) {
var i = [ t ], s = e.rest;
if (s) {
for (var o in s) e[o] = s[o];
delete e.rest;
}
return r.matchGrammar(t, i, e, 0, 0, !1), i;
},
hooks: {
all: {},
add: function(t, e) {
var n = r.hooks.all;
n[t] = n[t] || [], n[t].push(e);
},
run: function(t, e) {
var n = r.hooks.all[t];
if (n && n.length) for (var i, s = 0; i = n[s++]; ) i(e);
}
}
}, i = r.Token = function(t, e, n, r, i) {
this.type = t, this.content = e, this.alias = n, this.length = 0 | (r || "").length, 
this.greedy = !!i;
};
if (i.stringify = function(t, e, n) {
if ("string" == typeof t) return t;
if ("Array" === r.util.type(t)) return t.map(function(n) {
return i.stringify(n, e, t);
}).join("");
var s = {
type: t.type,
content: i.stringify(t.content, e, n),
tag: "span",
classes: [ "token", t.type ],
attributes: {},
language: e,
parent: n
};
if (t.alias) {
var o = "Array" === r.util.type(t.alias) ? t.alias : [ t.alias ];
Array.prototype.push.apply(s.classes, o);
}
r.hooks.run("wrap", s);
var a = Object.keys(s.attributes).map(function(t) {
return t + '="' + (s.attributes[t] || "").replace(/"/g, "&quot;") + '"';
}).join(" ");
return "<" + s.tag + ' class="' + s.classes.join(" ") + '"' + (a ? " " + a : "") + ">" + s.content + "</" + s.tag + ">";
}, !n.document) return n.addEventListener ? (r.disableWorkerMessageHandler || n.addEventListener("message", function(t) {
var e = JSON.parse(t.data), i = e.language, s = e.code, o = e.immediateClose;
n.postMessage(r.highlight(s, r.languages[i], i)), o && n.close();
}, !1), n.Prism) : n.Prism;
var s = document.currentScript || [].slice.call(document.getElementsByTagName("script")).pop();
return s && (r.filename = s.src, r.manual || s.hasAttribute("data-manual") || ("loading" !== document.readyState ? window.requestAnimationFrame ? window.requestAnimationFrame(r.highlightAll) : window.setTimeout(r.highlightAll, 16) : document.addEventListener("DOMContentLoaded", r.highlightAll))), 
n.Prism;
}();
void 0 !== t && t.exports && (t.exports = r), "undefined" != typeof global && (global.Prism = r);
},
58: function(t, e) {
Prism.languages.markup = {
comment: /<!--[\s\S]*?-->/,
prolog: /<\?[\s\S]+?\?>/,
doctype: /<!DOCTYPE[\s\S]+?>/i,
cdata: /<!\[CDATA\[[\s\S]*?]]>/i,
tag: {
pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+))?)*\s*\/?>/i,
greedy: !0,
inside: {
tag: {
pattern: /^<\/?[^\s>\/]+/i,
inside: {
punctuation: /^<\/?/,
namespace: /^[^\s>\/:]+:/
}
},
"attr-value": {
pattern: /=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+)/i,
inside: {
punctuation: [ /^=/, {
pattern: /(^|[^\\])["']/,
lookbehind: !0
} ]
}
},
punctuation: /\/?>/,
"attr-name": {
pattern: /[^\s>\/]+/,
inside: {
namespace: /^[^\s>\/:]+:/
}
}
}
},
entity: /&#?[\da-z]{1,8};/i
}, Prism.languages.markup.tag.inside["attr-value"].inside.entity = Prism.languages.markup.entity, 
Prism.hooks.add("wrap", function(t) {
"entity" === t.type && (t.attributes.title = t.content.replace(/&amp;/, "&"));
}), Prism.languages.xml = Prism.languages.markup, Prism.languages.html = Prism.languages.markup, 
Prism.languages.mathml = Prism.languages.markup, Prism.languages.svg = Prism.languages.markup;
},
59: function(t, e) {
Prism.languages.css = {
comment: /\/\*[\s\S]*?\*\//,
atrule: {
pattern: /@[\w-]+?.*?(?:;|(?=\s*\{))/i,
inside: {
rule: /@[\w-]+/
}
},
url: /url\((?:(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,
selector: /[^{}\s][^{};]*?(?=\s*\{)/,
string: {
pattern: /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
greedy: !0
},
property: /[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,
important: /\B!important\b/i,
function: /[-a-z0-9]+(?=\()/i,
punctuation: /[(){};:]/
}, Prism.languages.css.atrule.inside.rest = Prism.languages.css, Prism.languages.markup && (Prism.languages.insertBefore("markup", "tag", {
style: {
pattern: /(<style[\s\S]*?>)[\s\S]*?(?=<\/style>)/i,
lookbehind: !0,
inside: Prism.languages.css,
alias: "language-css",
greedy: !0
}
}), Prism.languages.insertBefore("inside", "attr-value", {
"style-attr": {
pattern: /\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,
inside: {
"attr-name": {
pattern: /^\s*style/i,
inside: Prism.languages.markup.tag.inside
},
punctuation: /^\s*=\s*['"]|['"]\s*$/,
"attr-value": {
pattern: /.+/i,
inside: Prism.languages.css
}
},
alias: "language-css"
}
}, Prism.languages.markup.tag));
},
60: function(t, e) {
Prism.languages.css.selector = {
pattern: /[^{}\s][^{}]*(?=\s*\{)/,
inside: {
"pseudo-element": /:(?:after|before|first-letter|first-line|selection)|::[-\w]+/,
"pseudo-class": /:[-\w]+(?:\(.*\))?/,
class: /\.[-:.\w]+/,
id: /#[-:.\w]+/,
attribute: /\[[^\]]+\]/
}
}, Prism.languages.insertBefore("css", "function", {
hexcode: /#[\da-f]{3,8}/i,
entity: /\\[\da-f]{1,8}/i,
number: /[\d%.]+/
});
},
61: function(t, e) {
Prism.languages.clike = {
comment: [ {
pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
lookbehind: !0
}, {
pattern: /(^|[^\\:])\/\/.*/,
lookbehind: !0,
greedy: !0
} ],
string: {
pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
greedy: !0
},
"class-name": {
pattern: /((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,
lookbehind: !0,
inside: {
punctuation: /[.\\]/
}
},
keyword: /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
boolean: /\b(?:true|false)\b/,
function: /[a-z0-9_]+(?=\()/i,
number: /\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,
operator: /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,
punctuation: /[{}[\];(),.:]/
};
},
62: function(t, e) {
Prism.languages.javascript = Prism.languages.extend("clike", {
keyword: /\b(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/,
number: /\b(?:0[xX][\dA-Fa-f]+|0[bB][01]+|0[oO][0-7]+|NaN|Infinity)\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][+-]?\d+)?/,
function: /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*\()/i,
operator: /-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/
}), Prism.languages.insertBefore("javascript", "keyword", {
regex: {
pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[[^\]\r\n]+]|\\.|[^/\\\[\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})\]]))/,
lookbehind: !0,
greedy: !0
},
"function-variable": {
pattern: /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=\s*(?:function\b|(?:\([^()]*\)|[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/i,
alias: "function"
},
constant: /\b[A-Z][A-Z\d_]*\b/
}), Prism.languages.insertBefore("javascript", "string", {
"template-string": {
pattern: /`(?:\\[\s\S]|\${[^}]+}|[^\\`])*`/,
greedy: !0,
inside: {
interpolation: {
pattern: /\${[^}]+}/,
inside: {
"interpolation-punctuation": {
pattern: /^\${|}$/,
alias: "punctuation"
},
rest: null
}
},
string: /[\s\S]+/
}
}
}), Prism.languages.javascript["template-string"].inside.interpolation.inside.rest = Prism.languages.javascript, 
Prism.languages.markup && Prism.languages.insertBefore("markup", "tag", {
script: {
pattern: /(<script[\s\S]*?>)[\s\S]*?(?=<\/script>)/i,
lookbehind: !0,
inside: Prism.languages.javascript,
alias: "language-javascript",
greedy: !0
}
}), Prism.languages.js = Prism.languages.javascript;
},
63: function(t, e) {
Prism.languages.http = {
"request-line": {
pattern: /^(?:POST|GET|PUT|DELETE|OPTIONS|PATCH|TRACE|CONNECT)\s(?:https?:\/\/|\/)\S+\sHTTP\/[0-9.]+/m,
inside: {
property: /^(?:POST|GET|PUT|DELETE|OPTIONS|PATCH|TRACE|CONNECT)\b/,
"attr-name": /:\w+/
}
},
"response-status": {
pattern: /^HTTP\/1.[01] \d+.*/m,
inside: {
property: {
pattern: /(^HTTP\/1.[01] )\d+.*/i,
lookbehind: !0
}
}
},
"header-name": {
pattern: /^[\w-]+:(?=.)/m,
alias: "keyword"
}
};
var n = {
"application/json": Prism.languages.javascript,
"application/xml": Prism.languages.markup,
"text/xml": Prism.languages.markup,
"text/html": Prism.languages.markup
};
for (var r in n) if (n[r]) {
var i = {};
i[r] = {
pattern: new RegExp("(content-type:\\s*" + r + "[\\w\\W]*?)(?:\\r?\\n|\\r){2}[\\w\\W]*", "i"),
lookbehind: !0,
inside: {
rest: n[r]
}
}, Prism.languages.insertBefore("http", "header-name", i);
}
},
64: function(t, e) {
Prism.languages.scss = Prism.languages.extend("css", {
comment: {
pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,
lookbehind: !0
},
atrule: {
pattern: /@[\w-]+(?:\([^()]+\)|[^(])*?(?=\s+[{;])/,
inside: {
rule: /@[\w-]+/
}
},
url: /(?:[-a-z]+-)*url(?=\()/i,
selector: {
pattern: /(?=\S)[^@;{}()]?(?:[^@;{}()]|&|#\{\$[-\w]+\})+(?=\s*\{(?:\}|\s|[^}]+[:{][^}]+))/m,
inside: {
parent: {
pattern: /&/,
alias: "important"
},
placeholder: /%[-\w]+/,
variable: /\$[-\w]+|#\{\$[-\w]+\}/
}
}
}), Prism.languages.insertBefore("scss", "atrule", {
keyword: [ /@(?:if|else(?: if)?|for|each|while|import|extend|debug|warn|mixin|include|function|return|content)/i, {
pattern: /( +)(?:from|through)(?= )/,
lookbehind: !0
} ]
}), Prism.languages.scss.property = {
pattern: /(?:[\w-]|\$[-\w]+|#\{\$[-\w]+\})+(?=\s*:)/i,
inside: {
variable: /\$[-\w]+|#\{\$[-\w]+\}/
}
}, Prism.languages.insertBefore("scss", "important", {
variable: /\$[-\w]+|#\{\$[-\w]+\}/
}), Prism.languages.insertBefore("scss", "function", {
placeholder: {
pattern: /%[-\w]+/,
alias: "selector"
},
statement: {
pattern: /\B!(?:default|optional)\b/i,
alias: "keyword"
},
boolean: /\b(?:true|false)\b/,
null: /\bnull\b/,
operator: {
pattern: /(\s)(?:[-+*\/%]|[=!]=|<=?|>=?|and|or|not)(?=\s)/,
lookbehind: !0
}
}), Prism.languages.scss.atrule.inside.rest = Prism.languages.scss;
},
65: function(t, e) {
Prism.languages.sql = {
comment: {
pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|(?:--|\/\/|#).*)/,
lookbehind: !0
},
string: {
pattern: /(^|[^@\\])("|')(?:\\[\s\S]|(?!\2)[^\\])*\2/,
greedy: !0,
lookbehind: !0
},
variable: /@[\w.$]+|@(["'`])(?:\\[\s\S]|(?!\1)[^\\])+\1/,
function: /\b(?:AVG|COUNT|FIRST|FORMAT|LAST|LCASE|LEN|MAX|MID|MIN|MOD|NOW|ROUND|SUM|UCASE)(?=\s*\()/i,
keyword: /\b(?:ACTION|ADD|AFTER|ALGORITHM|ALL|ALTER|ANALYZE|ANY|APPLY|AS|ASC|AUTHORIZATION|AUTO_INCREMENT|BACKUP|BDB|BEGIN|BERKELEYDB|BIGINT|BINARY|BIT|BLOB|BOOL|BOOLEAN|BREAK|BROWSE|BTREE|BULK|BY|CALL|CASCADED?|CASE|CHAIN|CHAR(?:ACTER|SET)?|CHECK(?:POINT)?|CLOSE|CLUSTERED|COALESCE|COLLATE|COLUMNS?|COMMENT|COMMIT(?:TED)?|COMPUTE|CONNECT|CONSISTENT|CONSTRAINT|CONTAINS(?:TABLE)?|CONTINUE|CONVERT|CREATE|CROSS|CURRENT(?:_DATE|_TIME|_TIMESTAMP|_USER)?|CURSOR|CYCLE|DATA(?:BASES?)?|DATE(?:TIME)?|DAY|DBCC|DEALLOCATE|DEC|DECIMAL|DECLARE|DEFAULT|DEFINER|DELAYED|DELETE|DELIMITERS?|DENY|DESC|DESCRIBE|DETERMINISTIC|DISABLE|DISCARD|DISK|DISTINCT|DISTINCTROW|DISTRIBUTED|DO|DOUBLE|DROP|DUMMY|DUMP(?:FILE)?|DUPLICATE|ELSE(?:IF)?|ENABLE|ENCLOSED|END|ENGINE|ENUM|ERRLVL|ERRORS|ESCAPED?|EXCEPT|EXEC(?:UTE)?|EXISTS|EXIT|EXPLAIN|EXTENDED|FETCH|FIELDS|FILE|FILLFACTOR|FIRST|FIXED|FLOAT|FOLLOWING|FOR(?: EACH ROW)?|FORCE|FOREIGN|FREETEXT(?:TABLE)?|FROM|FULL|FUNCTION|GEOMETRY(?:COLLECTION)?|GLOBAL|GOTO|GRANT|GROUP|HANDLER|HASH|HAVING|HOLDLOCK|HOUR|IDENTITY(?:_INSERT|COL)?|IF|IGNORE|IMPORT|INDEX|INFILE|INNER|INNODB|INOUT|INSERT|INT|INTEGER|INTERSECT|INTERVAL|INTO|INVOKER|ISOLATION|ITERATE|JOIN|KEYS?|KILL|LANGUAGE|LAST|LEAVE|LEFT|LEVEL|LIMIT|LINENO|LINES|LINESTRING|LOAD|LOCAL|LOCK|LONG(?:BLOB|TEXT)|LOOP|MATCH(?:ED)?|MEDIUM(?:BLOB|INT|TEXT)|MERGE|MIDDLEINT|MINUTE|MODE|MODIFIES|MODIFY|MONTH|MULTI(?:LINESTRING|POINT|POLYGON)|NATIONAL|NATURAL|NCHAR|NEXT|NO|NONCLUSTERED|NULLIF|NUMERIC|OFF?|OFFSETS?|ON|OPEN(?:DATASOURCE|QUERY|ROWSET)?|OPTIMIZE|OPTION(?:ALLY)?|ORDER|OUT(?:ER|FILE)?|OVER|PARTIAL|PARTITION|PERCENT|PIVOT|PLAN|POINT|POLYGON|PRECEDING|PRECISION|PREPARE|PREV|PRIMARY|PRINT|PRIVILEGES|PROC(?:EDURE)?|PUBLIC|PURGE|QUICK|RAISERROR|READS?|REAL|RECONFIGURE|REFERENCES|RELEASE|RENAME|REPEAT(?:ABLE)?|REPLACE|REPLICATION|REQUIRE|RESIGNAL|RESTORE|RESTRICT|RETURNS?|REVOKE|RIGHT|ROLLBACK|ROUTINE|ROW(?:COUNT|GUIDCOL|S)?|RTREE|RULE|SAVE(?:POINT)?|SCHEMA|SECOND|SELECT|SERIAL(?:IZABLE)?|SESSION(?:_USER)?|SET(?:USER)?|SHARE|SHOW|SHUTDOWN|SIMPLE|SMALLINT|SNAPSHOT|SOME|SONAME|SQL|START(?:ING)?|STATISTICS|STATUS|STRIPED|SYSTEM_USER|TABLES?|TABLESPACE|TEMP(?:ORARY|TABLE)?|TERMINATED|TEXT(?:SIZE)?|THEN|TIME(?:STAMP)?|TINY(?:BLOB|INT|TEXT)|TOP?|TRAN(?:SACTIONS?)?|TRIGGER|TRUNCATE|TSEQUAL|TYPES?|UNBOUNDED|UNCOMMITTED|UNDEFINED|UNION|UNIQUE|UNLOCK|UNPIVOT|UNSIGNED|UPDATE(?:TEXT)?|USAGE|USE|USER|USING|VALUES?|VAR(?:BINARY|CHAR|CHARACTER|YING)|VIEW|WAITFOR|WARNINGS|WHEN|WHERE|WHILE|WITH(?: ROLLUP|IN)?|WORK|WRITE(?:TEXT)?|YEAR)\b/i,
boolean: /\b(?:TRUE|FALSE|NULL)\b/i,
number: /\b0x[\da-f]+\b|\b\d+\.?\d*|\B\.\d+\b/i,
operator: /[-+*\/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?|\b(?:AND|BETWEEN|IN|LIKE|NOT|OR|IS|DIV|REGEXP|RLIKE|SOUNDS LIKE|XOR)\b/i,
punctuation: /[;[\]()`,.]/
};
},
66: function(t, e) {
Prism.languages.java = Prism.languages.extend("clike", {
keyword: /\b(?:abstract|continue|for|new|switch|assert|default|goto|package|synchronized|boolean|do|if|private|this|break|double|implements|protected|throw|byte|else|import|public|throws|case|enum|instanceof|return|transient|catch|extends|int|short|try|char|final|interface|static|void|class|finally|long|strictfp|volatile|const|float|native|super|while)\b/,
number: /\b0b[01]+\b|\b0x[\da-f]*\.?[\da-fp-]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?[df]?/i,
operator: {
pattern: /(^|[^.])(?:\+[+=]?|-[-=]?|!=?|<<?=?|>>?>?=?|==?|&[&=]?|\|[|=]?|\*=?|\/=?|%=?|\^=?|[?:~])/m,
lookbehind: !0
}
}), Prism.languages.insertBefore("java", "function", {
annotation: {
alias: "punctuation",
pattern: /(^|[^.])@\w+/,
lookbehind: !0
}
}), Prism.languages.insertBefore("java", "class-name", {
generics: {
pattern: /<\s*\w+(?:\.\w+)?(?:\s*,\s*\w+(?:\.\w+)?)*>/i,
alias: "function",
inside: {
keyword: Prism.languages.java.keyword,
punctuation: /[<>(),.:]/
}
}
});
},
68: function(t, e, n) {
"use strict";
function r(t) {
let e = document.createElement("div"), n = getComputedStyle(t);
return e.style.width = t.offsetWidth + "px", e.style.marginLeft = n.marginLeft, 
e.style.marginRight = n.marginRight, e.style.position = n.position, e.style.height = t.offsetHeight + "px", 
e.style.marginBottom = n.marginBottom, e.style.marginTop = n.marginTop, e;
}
t.exports = function() {
let t = document.querySelectorAll("[data-sticky]");
for (let e = 0; e < t.length; e++) {
let n = t[e], i = n.dataset.sticky ? JSON.parse(n.dataset.sticky) : {}, s = i.bottomLimit ? document.querySelector(i.bottomLimit) : null, o = i.container ? document.querySelector(i.container) : document.body, a = !i.minWidth || document.documentElement.clientWidth > i.minWidth;
if (n.placeholder) (n.placeholder.getBoundingClientRect().top > 0 || !a) && (n.style.cssText = "", 
n.classList.remove("sticky"), n.placeholder.parentNode.insertBefore(n, n.placeholder), 
n.placeholder.remove(), n.placeholder = null); else if (n.placeholder && s) s.getBoundingClientRect().top <= n.offsetHeight ? ("fixed" == n.style.position && (n.style.top = window.pageYOffset + "px"), 
n.style.position = "absolute") : (n.style.position = "fixed", n.style.top = 0); else if (n.getBoundingClientRect().top < 0 && a) {
if (n.style.cssText) return;
let t = n.getBoundingClientRect().left, e = i.noPlaceholder ? document.createElement("div") : r(n), s = n.offsetWidth;
n.after(e), o.appendChild(n), n.classList.add("sticky"), n.style.position = "fixed", 
n.style.top = 0, n.style.left = t + "px", n.style.zIndex = 101, n.style.background = "white", 
n.style.margin = 0, n.style.width = s + "px", n.placeholder = e;
}
}
};
},
7: function(t, e, n) {
"use strict";
function r(t, e, n, r, i) {
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
t.delegateTarget = n, n && r.call(i || this, t);
});
}
r.delegateMixin = function(t) {
t.delegate = function(t, e, n) {
r(this.elem, t, e, n, this);
};
}, t.exports = r;
},
93: function(t, e, n) {
"use strict";
t.exports = function(t) {
let e, n = 1 + t.split("\n").length, r = new Array(n);
return e = `<span class="line-numbers-rows">${r = r.join("<span></span>")}</span>`;
};
},
94: function(t, e, n) {
"use strict";
var r = n(222), i = "object" == typeof self && self && self.Object === Object && self, s = r || i || Function("return this")();
t.exports = s;
},
95: function(t, e, n) {
"use strict";
var r = n(94).Symbol;
t.exports = r;
},
99: function(t, e, n) {
"use strict";
let r = n(219), i = n(7);
class s {
constructor(t) {
this.elem = t, this.throttleFilter = r(this.filter, 200), this.showTasksCheckbox = t.querySelector("[data-tutorial-map-show-tasks]"), 
this.showTasksCheckbox.checked = +sessionStorage.showTasksCheckbox, this.updateShowTasks(), 
this.showTasksCheckbox.onchange = this.updateShowTasks.bind(this), this.filterInput = this.elem.querySelector("[data-tutorial-map-filter]"), 
this.textInputBlock = this.elem.querySelector(".tutorial-map__filter .text-input"), 
this.filterInput.oninput = this.onFilterInput.bind(this), this.filterInput.onkeydown = this.onFilterKeydown.bind(this), 
this.elem.querySelector(".text-input__clear").onclick = (() => {
this.filterInput.value = "", this.showClearButton(!1), this.filter("");
}), this.chaptersCollapsed = JSON.parse(sessionStorage.tutorialMapChapters || "{}"), 
this.showChaptersCollapsed(), this.delegate(".tutorial-map__item > .tutorial-map__link", "click", t => {
t.preventDefault();
let e = t.delegateTarget.getAttribute("href");
this.chaptersCollapsed[e] ? delete this.chaptersCollapsed[e] : this.chaptersCollapsed[e] = 1, 
sessionStorage.tutorialMapChapters = JSON.stringify(this.chaptersCollapsed), this.showChaptersCollapsed();
});
let e = this.elem.querySelector('.tutorial-map-list-three__link[href="' + location.pathname + '"]');
e && e.classList.add("tutorial-map-list-three__link_active"), this.filterInput.focus();
}
showChaptersCollapsed() {
let t = this.elem.querySelectorAll(".tutorial-map__item > .tutorial-map__link");
for (let e = 0; e < t.length; e++) {
let n = t[e];
this.chaptersCollapsed[n.getAttribute("href")] ? n.parentNode.classList.add("tutorial-map__item_collapsed") : n.parentNode.classList.remove("tutorial-map__item_collapsed");
}
}
updateShowTasks() {
this.showTasksCheckbox.checked ? this.elem.classList.add("tutorial-map_show-tasks") : this.elem.classList.remove("tutorial-map_show-tasks"), 
sessionStorage.showTasksCheckbox = this.showTasksCheckbox.checked ? "1" : "0";
}
onFilterInput(t) {
this.showClearButton(t.target.value), this.throttleFilter(t.target.value);
}
onFilterKeydown(t) {
27 === t.keyCode && (this.filterInput.value = "", this.showClearButton(!1), this.filter(""));
}
showClearButton(t) {
t ? this.textInputBlock.classList.add("text-input_clear-button") : this.textInputBlock.classList.remove("text-input_clear-button");
}
focus() {
this.elem.tabIndex = -1, this.elem.focus();
}
filter(t) {
t = t.toLowerCase();
let e = this.showTasksCheckbox.checked, n = (this.elem.querySelectorAll(".tutorial-map-list a"), 
this.elem.querySelectorAll(".tutorial-map-list-two__item"));
function r(e) {
return function(t, e) {
let n = 0, r = 0;
for (;n < t.length && r < e.length; ) t[n] === e[r] ? (n++, r++) : n++;
return r === e.length;
}(e.querySelector("a").innerHTML.toLowerCase(), t.replace(/\s/g, ""));
}
for (let t = 0; t < n.length; t++) {
let i = n[t], s = i.querySelectorAll(".tutorial-map-list-three__item"), o = Array.prototype.reduce.call(s, function(t, n) {
let i = !1;
if (e) {
let t = n.querySelectorAll(".tutorial-map-list-four__item");
i = Array.prototype.reduce.call(t, function(t, e) {
let n = r(e);
return e.hidden = !n, t || n;
}, !1);
}
let s = i || r(n);
return n.hidden = !s, t || s;
}, !1);
i.hidden = !(o || r(i));
}
}
}
t.exports = s, i.delegateMixin(s.prototype);
}
});