var ebook = function(e) {
var t = {};
function n(r) {
if (t[r]) return t[r].exports;
var o = t[r] = {
i: r,
l: !1,
exports: {}
};
return e[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports;
}
return n.m = e, n.c = t, n.d = function(e, t, r) {
n.o(e, t) || Object.defineProperty(e, t, {
enumerable: !0,
get: r
});
}, n.r = function(e) {
"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
value: "Module"
}), Object.defineProperty(e, "__esModule", {
value: !0
});
}, n.t = function(e, t) {
if (1 & t && (e = n(e)), 8 & t) return e;
if (4 & t && "object" == typeof e && e && e.__esModule) return e;
var r = Object.create(null);
if (n.r(r), Object.defineProperty(r, "default", {
enumerable: !0,
value: e
}), 2 & t && "string" != typeof e) for (var o in e) n.d(r, o, function(t) {
return e[t];
}.bind(null, o));
return r;
}, n.n = function(e) {
var t = e && e.__esModule ? function() {
return e.default;
} : function() {
return e;
};
return n.d(t, "a", t), t;
}, n.o = function(e, t) {
return Object.prototype.hasOwnProperty.call(e, t);
}, n.p = "/pack/", n(n.s = 346);
}({
0: function(e, t, n) {
"use strict";
e.exports = {
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
14: function(e, t, n) {
"use strict";
function r(e) {
if (e = e || {}, this.elem = e.elem, this.size = e.size || "medium", this.class = e.class ? " " + e.class : "", 
this.elemClass = e.elemClass, "medium" != this.size && "small" != this.size && "large" != this.size) throw new Error("Unsupported size: " + this.size);
this.elem || (this.elem = document.createElement("div"));
}
r.prototype.start = function() {
this.elemClass && this.elem.classList.toggle(this.elemClass), this.elem.insertAdjacentHTML("beforeend", '<span class="spinner spinner_active spinner_' + this.size + this.class + '"><span class="spinner__dot spinner__dot_1"></span><span class="spinner__dot spinner__dot_2"></span><span class="spinner__dot spinner__dot_3"></span></span>');
}, r.prototype.stop = function() {
let e = this.elem.querySelector(".spinner");
e && (e.remove(), this.elemClass && this.elem.classList.toggle(this.elemClass));
}, window.Spinner = r, e.exports = r;
},
18: function(e, t, n) {
"use strict";
e.exports = n(19);
},
19: function(e, t, n) {
"use strict";
var r = n(20), o = n(21);
function i(e) {
return Object.prototype.toString.call(e);
}
function a(e) {
return "[object String]" === i(e);
}
function s(e) {
return !isNaN(e) && isFinite(e);
}
function c(e) {
return !0 === e || !1 === e;
}
function u(e) {
return "[object Object]" === i(e);
}
var l = Array.isArray || function(e) {
return "[object Array]" === i(e);
}, f = Array.prototype.forEach;
function p(e, t, n) {
if (null !== e) if (f && e.forEach === f) e.forEach(t, n); else if (e.length === +e.length) for (var r = 0, o = e.length; r < o; r += 1) t.call(n, e[r], r, e); else for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && t.call(n, e[i], i, e);
}
var d = /%[sdj%]/g;
function h(e) {
var t = 1, n = arguments, r = n.length;
return String(e).replace(d, function(e) {
if ("%%" === e) return "%";
if (t >= r) return e;
switch (e) {
case "%s":
return String(n[t++]);

case "%d":
return Number(n[t++]);

case "%j":
return JSON.stringify(n[t++]);

default:
return e;
}
});
}
var m = "en";
function v(e) {
var t = {};
return p(e || {}, function(e, n) {
e && "object" == typeof e ? p(v(e), function(e, r) {
t[n + "." + r] = e;
}) : t[n] = e;
}), t;
}
var _ = "#@$";
function y(e, t) {
return e + _ + t;
}
function g(e, t, n) {
var r = y(t, n), o = e._storage;
if (o.hasOwnProperty(r)) return r;
if (t === e._defaultLocale) return null;
var i = e._fallbacks_cache;
if (i.hasOwnProperty(r)) return i[r];
for (var a, s = e._fallbacks[t] || [ e._defaultLocale ], c = 0, u = s.length; c < u; c++) if (a = y(s[c], n), 
o.hasOwnProperty(a)) return i[r] = a, i[r];
return i[r] = null, null;
}
function b(e, t, n) {
var r = o.indexOf(e, t);
return -1 === r ? h('[pluralizer for "%s" locale not found]', e) : void 0 === n[r] ? h('[plural form %d ("%s") not found in translation]', r, o.forms(e)[r]) : n[r];
}
function w(e) {
if (!(this instanceof w)) return new w(e);
this._defaultLocale = e ? String(e) : m, this._fallbacks = {}, this._fallbacks_cache = {}, 
this._storage = {}, this._plurals_cache = {};
}
w.prototype.addPhrase = function(e, t, n, r) {
var o, i = this;
if (c(r)) o = r ? 1 / 0 : 0; else if (s(r)) {
if ((o = Math.floor(r)) < 0) throw new TypeError("Invalid flatten level (should be >= 0).");
} else o = 1 / 0;
if (u(n) && o > 0) return p(n, function(n, r) {
i.addPhrase(e, (t ? t + "." : "") + r, n, o - 1);
}), this;
if (a(n)) this._storage[y(e, t)] = {
translation: n,
locale: e,
raw: !1
}; else {
if (!(l(n) || s(n) || c(n) || 0 === o && u(n))) throw new TypeError("Invalid translation - [String|Object|Array|Number|Boolean] expected.");
this._storage[y(e, t)] = {
translation: n,
locale: e,
raw: !0
};
}
return i._fallbacks_cache = {}, this;
}, w.prototype.setFallback = function(e, t) {
var n = this._defaultLocale;
if (n === e) throw new Error("Default locale can't have fallbacks");
var r = l(t) ? t.slice() : [ t ];
return r[r.length - 1] !== n && r.push(n), this._fallbacks[e] = r, this._fallbacks_cache = {}, 
this;
};
var F = /#\{|\(\(|\\\\/;
w.prototype.translate = function(e, t, n) {
var o, c = g(this, e, t);
return c ? (o = this._storage[c]).raw ? o.translation : (o.hasOwnProperty("compiled") || (o.compiled = function(e, t, n) {
var o, i, a, s, c, u;
return F.test(t) ? 1 === (o = r.parse(t)).length && "literal" === o[0].type ? o[0].text : (e._plurals_cache[n] || (e._plurals_cache[n] = new w(n)), 
u = e._plurals_cache[n], (i = []).push([ 'var str = "", strict, strict_exec, forms, forms_exec, plrl, cache, loc, loc_plzr, anchor;' ]), 
i.push("params = flatten(params);"), p(o, function(e) {
if ("literal" !== e.type) {
if ("variable" === e.type) return a = e.anchor, void i.push(h('str += ("undefined" === typeof (params[%j])) ? "[missed variable: %s]" : params[%j];', a, a, a));
if ("plural" !== e.type) throw new Error("Unknown node type");
a = e.anchor, s = {}, p(e.strict, function(t, o) {
var i = r.parse(t);
if (1 === i.length && "literal" === i[0].type) return s[o] = !1, void (e.strict[o] = i[0].text);
s[o] = !0, u.hasPhrase(n, t, !0) || u.addPhrase(n, t, t);
}), c = {}, p(e.forms, function(t, o) {
var i, a = r.parse(t);
if (1 === a.length && "literal" === a[0].type) return i = a[0].text, e.forms[o] = i, 
void (c[i] = !1);
c[t] = !0, u.hasPhrase(n, t, !0) || u.addPhrase(n, t, t);
}), i.push(h("loc = %j;", n)), i.push(h("loc_plzr = %j;", n.split(/[-_]/)[0])), 
i.push(h("anchor = params[%j];", a)), i.push(h("cache = this._plurals_cache[loc];")), 
i.push(h("strict = %j;", e.strict)), i.push(h("strict_exec = %j;", s)), i.push(h("forms = %j;", e.forms)), 
i.push(h("forms_exec = %j;", c)), i.push("if (+(anchor) != anchor) {"), i.push(h('  str += "[invalid plurals amount: %s(" + anchor + ")]";', a)), 
i.push("} else {"), i.push("  if (strict[anchor] !== undefined) {"), i.push("    plrl = strict[anchor];"), 
i.push("    str += strict_exec[anchor] ? cache.t(loc, plrl, params) : plrl;"), i.push("  } else {"), 
i.push("    plrl = pluralizer(loc_plzr, +anchor, forms);"), i.push("    str += forms_exec[plrl] ? cache.t(loc, plrl, params) : plrl;"), 
i.push("  }"), i.push("}");
} else i.push(h("str += %j;", e.text));
}), i.push("return str;"), new Function("params", "flatten", "pluralizer", i.join("\n"))) : t;
}(this, o.translation, o.locale)), "[object Function]" !== i(o.compiled) ? o.compiled : ((s(n) || a(n)) && (n = {
count: n,
value: n
}), o.compiled.call(this, n, v, b))) : e + ": No translation for [" + t + "]";
}, w.prototype.hasPhrase = function(e, t, n) {
return n ? this._storage.hasOwnProperty(y(e, t)) : !!g(this, e, t);
}, w.prototype.getLocale = function(e, t, n) {
if (n) return this._storage.hasOwnProperty(y(e, t)) ? e : null;
var r = g(this, e, t);
return r ? r.split(_, 2)[0] : null;
}, w.prototype.t = w.prototype.translate, w.prototype.stringify = function(e) {
var t = this, n = {};
p(this._storage, function(e, t) {
n[t.split(_)[1]] = !0;
});
var r = {};
p(n, function(n, o) {
var i = g(t, e, o);
if (i) {
var a = t._storage[i].locale;
r[a] || (r[a] = {}), r[a][o] = t._storage[i].translation;
}
});
var o = {
fallback: {},
locales: r
}, i = (t._fallbacks[e] || []).slice(0, -1);
return i.length && (o.fallback[e] = i), JSON.stringify(o);
}, w.prototype.load = function(e) {
var t = this;
return a(e) && (e = JSON.parse(e)), p(e.locales, function(e, n) {
p(e, function(e, r) {
t.addPhrase(n, r, e, 0);
});
}), p(e.fallback, function(e, n) {
t.setFallback(n, e);
}), this;
}, e.exports = w;
},
20: function(e, t, n) {
"use strict";
e.exports = function() {
function e(e, t, n, r, o, i) {
this.message = e, this.expected = t, this.found = n, this.offset = r, this.line = o, 
this.column = i, this.name = "SyntaxError";
}
return function(e, t) {
function n() {
this.constructor = e;
}
n.prototype = t.prototype, e.prototype = new n();
}(e, Error), {
SyntaxError: e,
parse: function(t) {
var n, r = arguments.length > 1 ? arguments[1] : {}, o = {}, i = {
start: le
}, a = le, s = o, c = "((", u = {
type: "literal",
value: "((",
description: '"(("'
}, l = "))", f = {
type: "literal",
value: "))",
description: '"))"'
}, p = null, d = function(e, t) {
return {
type: "plural",
forms: function(e) {
for (var t = [], n = 0; n < e.length; n++) void 0 === e[n].strict && t.push(e[n].text);
return t;
}(e),
strict: function(e) {
for (var t = {}, n = 0; n < e.length; n++) void 0 !== e[n].strict && (t[e[n].strict] = e[n].text);
return t;
}(e),
anchor: t || "count"
};
}, h = "|", m = {
type: "literal",
value: "|",
description: '"|"'
}, v = function(e, t) {
return [ e ].concat(t);
}, _ = function(e) {
return [ e ];
}, y = "=", g = {
type: "literal",
value: "=",
description: '"="'
}, b = /^[0-9]/, w = {
type: "class",
value: "[0-9]",
description: "[0-9]"
}, F = " ", k = {
type: "literal",
value: " ",
description: '" "'
}, x = function(e, t) {
return {
strict: e.join(""),
text: t.join("")
};
}, E = function() {
return {
text: ae()
};
}, O = "\\", j = {
type: "literal",
value: "\\",
description: '"\\\\"'
}, S = /^[\\|)(]/, A = {
type: "class",
value: "[\\\\|)(]",
description: "[\\\\|)(]"
}, T = function(e) {
return e;
}, C = void 0, M = {
type: "any",
description: "any character"
}, P = function() {
return ae();
}, L = ":", q = {
type: "literal",
value: ":",
description: '":"'
}, z = function(e) {
return e;
}, U = "#{", R = {
type: "literal",
value: "#{",
description: '"#{"'
}, N = "}", D = {
type: "literal",
value: "}",
description: '"}"'
}, H = function(e) {
return {
type: "variable",
anchor: e
};
}, I = ".", $ = {
type: "literal",
value: ".",
description: '"."'
}, B = function() {
return ae();
}, J = /^[a-zA-Z_$]/, G = {
type: "class",
value: "[a-zA-Z_$]",
description: "[a-zA-Z_$]"
}, X = /^[a-zA-Z0-9_$]/, Z = {
type: "class",
value: "[a-zA-Z0-9_$]",
description: "[a-zA-Z0-9_$]"
}, K = function(e) {
return e;
}, W = function(e) {
return {
type: "literal",
text: e.join("")
};
}, Y = /^[\\#()|]/, V = {
type: "class",
value: "[\\\\#()|]",
description: "[\\\\#()|]"
}, Q = 0, ee = 0, te = 0, ne = {
line: 1,
column: 1,
seenCR: !1
}, re = 0, oe = [], ie = 0;
if ("startRule" in r) {
if (!(r.startRule in i)) throw new Error("Can't start parsing from rule \"" + r.startRule + '".');
a = i[r.startRule];
}
function ae() {
return t.substring(ee, Q);
}
function se(e) {
return te !== e && (te > e && (te = 0, ne = {
line: 1,
column: 1,
seenCR: !1
}), function(e, n, r) {
var o, i;
for (o = n; o < r; o++) "\n" === (i = t.charAt(o)) ? (e.seenCR || e.line++, e.column = 1, 
e.seenCR = !1) : "\r" === i || "\u2028" === i || "\u2029" === i ? (e.line++, e.column = 1, 
e.seenCR = !0) : (e.column++, e.seenCR = !1);
}(ne, te, e), te = e), ne;
}
function ce(e) {
Q < re || (Q > re && (re = Q, oe = []), oe.push(e));
}
function ue(n, r, o) {
var i = se(o), a = o < t.length ? t.charAt(o) : null;
return null !== r && function(e) {
var t = 1;
for (e.sort(function(e, t) {
return e.description < t.description ? -1 : e.description > t.description ? 1 : 0;
}); t < e.length; ) e[t - 1] === e[t] ? e.splice(t, 1) : t++;
}(r), new e(null !== n ? n : function(e, t) {
var n, r = new Array(e.length);
for (n = 0; n < e.length; n++) r[n] = e[n].description;
return "Expected " + (e.length > 1 ? r.slice(0, -1).join(", ") + " or " + r[e.length - 1] : r[0]) + " but " + (t ? '"' + function(e) {
function t(e) {
return e.charCodeAt(0).toString(16).toUpperCase();
}
return e.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\x08/g, "\\b").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\f/g, "\\f").replace(/\r/g, "\\r").replace(/[\x00-\x07\x0B\x0E\x0F]/g, function(e) {
return "\\x0" + t(e);
}).replace(/[\x10-\x1F\x80-\xFF]/g, function(e) {
return "\\x" + t(e);
}).replace(/[\u0180-\u0FFF]/g, function(e) {
return "\\u0" + t(e);
}).replace(/[\u1080-\uFFFF]/g, function(e) {
return "\\u" + t(e);
});
}(t) + '"' : "end of input") + " found.";
}(r, a), r, a, o, i.line, i.column);
}
function le() {
var e, t;
for (e = [], (t = _e()) === o && (t = fe()) === o && (t = he()); t !== o; ) e.push(t), 
(t = _e()) === o && (t = fe()) === o && (t = he());
return e;
}
function fe() {
var e, n, r, i, a;
return e = Q, t.substr(Q, 2) === c ? (n = c, Q += 2) : (n = o, 0 === ie && ce(u)), 
n !== o && (r = function e() {
var n, r, i, a;
return n = Q, (r = pe()) !== o ? (124 === t.charCodeAt(Q) ? (i = h, Q++) : (i = o, 
0 === ie && ce(m)), i !== o && (a = e()) !== o ? (ee = n, r = v(r, a), n = r) : (Q = n, 
n = s)) : (Q = n, n = s), n === o && (n = Q, (r = pe()) !== o && (ee = n, r = _(r)), 
n = r), n;
}()) !== o ? (t.substr(Q, 2) === l ? (i = l, Q += 2) : (i = o, 0 === ie && ce(f)), 
i !== o ? ((a = function() {
var e, n, r;
return e = Q, 58 === t.charCodeAt(Q) ? (n = L, Q++) : (n = o, 0 === ie && ce(q)), 
n !== o && (r = me()) !== o ? (ee = e, n = z(r), e = n) : (Q = e, e = s), e;
}()) === o && (a = p), a !== o ? (ee = e, e = n = d(r, a)) : (Q = e, e = s)) : (Q = e, 
e = s)) : (Q = e, e = s), e;
}
function pe() {
var e, n, r, i, a, c;
if (e = Q, 61 === t.charCodeAt(Q) ? (n = y, Q++) : (n = o, 0 === ie && ce(g)), n !== o) {
if (r = [], b.test(t.charAt(Q)) ? (i = t.charAt(Q), Q++) : (i = o, 0 === ie && ce(w)), 
i !== o) for (;i !== o; ) r.push(i), b.test(t.charAt(Q)) ? (i = t.charAt(Q), Q++) : (i = o, 
0 === ie && ce(w)); else r = s;
if (r !== o) if (32 === t.charCodeAt(Q) ? (i = F, Q++) : (i = o, 0 === ie && ce(k)), 
i === o && (i = p), i !== o) {
if (a = [], (c = de()) !== o) for (;c !== o; ) a.push(c), c = de(); else a = s;
a !== o ? (ee = e, e = n = x(r, a)) : (Q = e, e = s);
} else Q = e, e = s; else Q = e, e = s;
} else Q = e, e = s;
if (e === o) {
if (e = Q, n = [], (r = de()) !== o) for (;r !== o; ) n.push(r), r = de(); else n = s;
n !== o && (ee = e, n = E()), e = n;
}
return e;
}
function de() {
var e, n, r;
return e = Q, 92 === t.charCodeAt(Q) ? (n = O, Q++) : (n = o, 0 === ie && ce(j)), 
n !== o ? (S.test(t.charAt(Q)) ? (r = t.charAt(Q), Q++) : (r = o, 0 === ie && ce(A)), 
r !== o ? (ee = e, e = n = T(r)) : (Q = e, e = s)) : (Q = e, e = s), e === o && (e = Q, 
n = Q, ie++, 124 === t.charCodeAt(Q) ? (r = h, Q++) : (r = o, 0 === ie && ce(m)), 
r === o && (t.substr(Q, 2) === l ? (r = l, Q += 2) : (r = o, 0 === ie && ce(f))), 
ie--, r === o ? n = C : (Q = n, n = s), n !== o ? (t.length > Q ? (r = t.charAt(Q), 
Q++) : (r = o, 0 === ie && ce(M)), r !== o ? (ee = e, e = n = P()) : (Q = e, e = s)) : (Q = e, 
e = s)), e;
}
function he() {
var e, n, r, i;
return e = Q, t.substr(Q, 2) === U ? (n = U, Q += 2) : (n = o, 0 === ie && ce(R)), 
n !== o && (r = me()) !== o ? (125 === t.charCodeAt(Q) ? (i = N, Q++) : (i = o, 
0 === ie && ce(D)), i !== o ? (ee = e, e = n = H(r)) : (Q = e, e = s)) : (Q = e, 
e = s), e;
}
function me() {
var e, n, r, i;
if (e = Q, ve() !== o) if (46 === t.charCodeAt(Q) ? (n = I, Q++) : (n = o, 0 === ie && ce($)), 
n !== o) {
if (r = [], (i = me()) !== o) for (;i !== o; ) r.push(i), i = me(); else r = s;
r !== o ? (ee = e, e = B()) : (Q = e, e = s);
} else Q = e, e = s; else Q = e, e = s;
return e === o && (e = ve()), e;
}
function ve() {
var e, n, r, i;
if (e = Q, J.test(t.charAt(Q)) ? (n = t.charAt(Q), Q++) : (n = o, 0 === ie && ce(G)), 
n !== o) {
for (r = [], X.test(t.charAt(Q)) ? (i = t.charAt(Q), Q++) : (i = o, 0 === ie && ce(Z)); i !== o; ) r.push(i), 
X.test(t.charAt(Q)) ? (i = t.charAt(Q), Q++) : (i = o, 0 === ie && ce(Z));
r !== o ? (ee = e, e = n = P()) : (Q = e, e = s);
} else Q = e, e = s;
return e;
}
function _e() {
var e, t, n, r, i;
if (e = Q, t = [], n = Q, r = Q, ie++, (i = fe()) === o && (i = he()), ie--, i === o ? r = C : (Q = r, 
r = s), r !== o && (i = ye()) !== o ? (ee = n, n = r = K(i)) : (Q = n, n = s), n !== o) for (;n !== o; ) t.push(n), 
n = Q, r = Q, ie++, (i = fe()) === o && (i = he()), ie--, i === o ? r = C : (Q = r, 
r = s), r !== o && (i = ye()) !== o ? (ee = n, n = r = K(i)) : (Q = n, n = s); else t = s;
return t !== o && (ee = e, t = W(t)), e = t;
}
function ye() {
var e, n, r;
return e = Q, 92 === t.charCodeAt(Q) ? (n = O, Q++) : (n = o, 0 === ie && ce(j)), 
n !== o ? (Y.test(t.charAt(Q)) ? (r = t.charAt(Q), Q++) : (r = o, 0 === ie && ce(V)), 
r !== o ? (ee = e, e = n = T(r)) : (Q = e, e = s)) : (Q = e, e = s), e === o && (t.length > Q ? (e = t.charAt(Q), 
Q++) : (e = o, 0 === ie && ce(M))), e;
}
if ((n = a()) !== o && Q === t.length) return n;
throw n !== o && Q < t.length && ce({
type: "end",
description: "end of input"
}), ue(null, oe, re);
}
};
}();
},
21: function(e, t, n) {
"use strict";
var r = {};
function o(e) {
var t;
return r[e] ? e : (t = e.toLowerCase().replace("_", "-"), r[t] ? t : (t = t.split("-")[0], 
r[t] ? t : null));
}
function i(e, t) {
var n = o(e);
if (!n) return -1;
if (!r[n].cFn) return 0;
var i = String(t), a = i.indexOf(".") < 0 ? "" : i.split(".")[1], s = a.length, c = +t, u = +i.split(".")[0], l = 0 === a.length ? 0 : +a.replace(/0+$/, "");
return r[n].cFn(c, u, s, +a, l);
}
function a(e, t) {
var n = o(e);
if (!n) return -1;
if (!r[n].oFn) return 0;
var i = String(t), a = i.indexOf(".") < 0 ? "" : i.split(".")[1], s = a.length, c = +t, u = +i.split(".")[0], l = 0 === a.length ? 0 : +a.replace(/0+$/, "");
return r[n].oFn(c, u, s, +a, l);
}
e.exports = function(e, t) {
var n = o(e);
return n ? r[n].c[i(n, t)] : null;
}, e.exports.indexOf = i, e.exports.forms = function(e) {
var t = o(e);
return r[t] ? r[t].c : null;
}, e.exports.ordinal = function(e, t) {
var n = o(e);
return r[n] ? r[n].o[a(n, t)] : null;
}, e.exports.ordinal.indexOf = a, e.exports.ordinal.forms = function(e) {
var t = o(e);
return r[t] ? r[t].o : null;
};
var s = [ "zero", "one", "two", "few", "many", "other" ];
function c(e) {
return s[e];
}
function u(e, t) {
var n;
for (t.c = t.c ? t.c.map(c) : [ "other" ], t.o = t.o ? t.o.map(c) : [ "other" ], 
n = 0; n < e.length; n++) r[e[n]] = t;
}
function l(e, t, n) {
return e <= n && n <= t && n % 1 == 0;
}
function f(e, t) {
return e.indexOf(t) >= 0;
}
u([ "af", "asa", "bem", "bez", "bg", "brx", "ce", "cgg", "chr", "ckb", "dv", "ee", "el", "eo", "es", "eu", "fo", "fur", "gsw", "ha", "haw", "jgo", "jmc", "kaj", "kcg", "kkj", "kl", "ks", "ksb", "ku", "ky", "lb", "lg", "mas", "mgo", "ml", "mn", "nah", "nb", "nd", "nn", "nnh", "no", "nr", "ny", "nyn", "om", "or", "os", "pap", "ps", "rm", "rof", "rwk", "saq", "sdh", "seh", "sn", "so", "ss", "ssy", "st", "syr", "ta", "te", "teo", "tig", "tk", "tn", "tr", "ts", "ug", "uz", "ve", "vo", "vun", "wae", "xh", "xog" ], {
c: [ 1, 5 ],
cFn: function(e) {
return 1 === e ? 0 : 1;
}
}), u([ "ak", "bh", "guw", "ln", "mg", "nso", "pa", "ti", "wa" ], {
c: [ 1, 5 ],
cFn: function(e) {
return l(0, 1, e) ? 0 : 1;
}
}), u([ "am", "fa", "kn", "zu" ], {
c: [ 1, 5 ],
cFn: function(e, t) {
return 0 === t || 1 === e ? 0 : 1;
}
}), u([ "ar", "ars" ], {
c: [ 0, 1, 2, 3, 4, 5 ],
cFn: function(e) {
var t = e % 100;
return 0 === e ? 0 : 1 === e ? 1 : 2 === e ? 2 : l(3, 10, t) ? 3 : l(11, 99, t) ? 4 : 5;
}
}), u([ "as", "bn" ], {
c: [ 1, 5 ],
cFn: function(e, t) {
return 0 === t || 1 === e ? 0 : 1;
},
o: [ 1, 2, 3, 4, 5 ],
oFn: function(e) {
return f([ 1, 5, 7, 8, 9, 10 ], e) ? 0 : f([ 2, 3 ], e) ? 1 : 4 === e ? 2 : 6 === e ? 3 : 4;
}
}), u([ "ast", "de", "et", "fi", "fy", "gl", "ji", "nl", "sw", "ur", "yi" ], {
c: [ 1, 5 ],
cFn: function(e, t, n) {
return 1 === t && 0 === n ? 0 : 1;
}
}), u([ "az" ], {
c: [ 1, 5 ],
cFn: function(e) {
return 1 === e ? 0 : 1;
},
o: [ 1, 3, 4, 5 ],
oFn: function(e, t) {
var n = t % 10, r = t % 100, o = t % 1e3;
return f([ 1, 2, 5, 7, 8 ], n) || f([ 20, 50, 70, 80 ], r) ? 0 : f([ 3, 4 ], n) || f([ 100, 200, 300, 400, 500, 600, 700, 800, 900 ], o) ? 1 : 0 === t || 6 === n || f([ 40, 60, 90 ], r) ? 2 : 3;
}
}), u([ "be" ], {
c: [ 1, 3, 4, 5 ],
cFn: function(e) {
var t = e % 10, n = e % 100;
return 1 === t && 11 !== n ? 0 : l(2, 4, t) && !l(12, 14, n) ? 1 : 0 === t || l(5, 9, t) || l(11, 14, n) ? 2 : 3;
},
o: [ 3, 5 ],
oFn: function(e) {
var t = e % 100;
return f([ 2, 3 ], e % 10) && !f([ 12, 13 ], t) ? 0 : 1;
}
}), u([ "bm", "bo", "dz", "id", "ig", "ii", "in", "ja", "jbo", "jv", "jw", "kde", "kea", "km", "ko", "lkt", "my", "nqo", "root", "sah", "ses", "sg", "th", "to", "wo", "yo", "yue", "zh" ], {}), 
u([ "br" ], {
c: [ 1, 2, 3, 4, 5 ],
cFn: function(e) {
var t = e % 10, n = e % 100, r = e % 1e6;
return 1 !== t || f([ 11, 71, 91 ], n) ? 2 !== t || f([ 12, 72, 92 ], n) ? !l(3, 4, t) && 9 !== t || l(10, 19, n) || l(70, 79, n) || l(90, 99, n) ? 0 !== e && 0 === r ? 3 : 4 : 2 : 1 : 0;
}
}), u([ "bs", "hr", "sh", "sr" ], {
c: [ 1, 3, 5 ],
cFn: function(e, t, n, r) {
var o = t % 10, i = t % 100, a = r % 10, s = r % 100;
return 0 === n && 1 === o && 11 !== i || 1 === a && 11 !== s ? 0 : 0 === n && l(2, 4, o) && !l(12, 14, i) || l(2, 4, a) && !l(12, 14, s) ? 1 : 2;
}
}), u([ "ca" ], {
c: [ 1, 5 ],
cFn: function(e, t, n) {
return 1 === t && 0 === n ? 0 : 1;
},
o: [ 1, 2, 3, 5 ],
oFn: function(e) {
return f([ 1, 3 ], e) ? 0 : 2 === e ? 1 : 4 === e ? 2 : 3;
}
}), u([ "cs", "sk" ], {
c: [ 1, 3, 4, 5 ],
cFn: function(e, t, n) {
return 1 === t && 0 === n ? 0 : l(2, 4, t) && 0 === n ? 1 : 0 !== n ? 2 : 3;
}
}), u([ "cy" ], {
c: [ 0, 1, 2, 3, 4, 5 ],
cFn: function(e) {
return 0 === e ? 0 : 1 === e ? 1 : 2 === e ? 2 : 3 === e ? 3 : 6 === e ? 4 : 5;
},
o: [ 0, 1, 2, 3, 4, 5 ],
oFn: function(e) {
return f([ 0, 7, 8, 9 ], e) ? 0 : 1 === e ? 1 : 2 === e ? 2 : f([ 3, 4 ], e) ? 3 : f([ 5, 6 ], e) ? 4 : 5;
}
}), u([ "da" ], {
c: [ 1, 5 ],
cFn: function(e, t, n, r, o) {
return 1 === e || 0 !== o && f([ 0, 1 ], t) ? 0 : 1;
}
}), u([ "dsb", "hsb" ], {
c: [ 1, 2, 3, 5 ],
cFn: function(e, t, n, r) {
var o = t % 100, i = r % 100;
return 0 === n && 1 === o || 1 === i ? 0 : 0 === n && 2 === o || 2 === i ? 1 : 0 === n && l(3, 4, o) || l(3, 4, i) ? 2 : 3;
}
}), u([ "en" ], {
c: [ 1, 5 ],
cFn: function(e, t, n) {
return 1 === t && 0 === n ? 0 : 1;
},
o: [ 1, 2, 3, 5 ],
oFn: function(e) {
var t = e % 10, n = e % 100;
return 1 === t && 11 !== n ? 0 : 2 === t && 12 !== n ? 1 : 3 === t && 13 !== n ? 2 : 3;
}
}), u([ "ff", "kab" ], {
c: [ 1, 5 ],
cFn: function(e, t) {
return f([ 0, 1 ], t) ? 0 : 1;
}
}), u([ "fil", "tl" ], {
c: [ 1, 5 ],
cFn: function(e, t, n, r) {
var o = t % 10, i = r % 10;
return 0 === n && f([ 1, 2, 3 ], t) || 0 === n && !f([ 4, 6, 9 ], o) || 0 !== n && !f([ 4, 6, 9 ], i) ? 0 : 1;
},
o: [ 1, 5 ],
oFn: function(e) {
return 1 === e ? 0 : 1;
}
}), u([ "fr", "hy" ], {
c: [ 1, 5 ],
cFn: function(e, t) {
return f([ 0, 1 ], t) ? 0 : 1;
},
o: [ 1, 5 ],
oFn: function(e) {
return 1 === e ? 0 : 1;
}
}), u([ "ga" ], {
c: [ 1, 2, 3, 4, 5 ],
cFn: function(e) {
return 1 === e ? 0 : 2 === e ? 1 : l(3, 6, e) ? 2 : l(7, 10, e) ? 3 : 4;
},
o: [ 1, 5 ],
oFn: function(e) {
return 1 === e ? 0 : 1;
}
}), u([ "gd" ], {
c: [ 1, 2, 3, 5 ],
cFn: function(e) {
return f([ 1, 11 ], e) ? 0 : f([ 2, 12 ], e) ? 1 : l(3, 10, e) || l(13, 19, e) ? 2 : 3;
}
}), u([ "gu", "hi" ], {
c: [ 1, 5 ],
cFn: function(e, t) {
return 0 === t || 1 === e ? 0 : 1;
},
o: [ 1, 2, 3, 4, 5 ],
oFn: function(e) {
return 1 === e ? 0 : f([ 2, 3 ], e) ? 1 : 4 === e ? 2 : 6 === e ? 3 : 4;
}
}), u([ "gv" ], {
c: [ 1, 2, 3, 4, 5 ],
cFn: function(e, t, n) {
var r = t % 10;
return 0 === n && 1 === r ? 0 : 0 === n && 2 === r ? 1 : 0 === n && f([ 0, 20, 40, 60, 80 ], t % 100) ? 2 : 0 !== n ? 3 : 4;
}
}), u([ "he", "iw" ], {
c: [ 1, 2, 4, 5 ],
cFn: function(e, t, n) {
var r = e % 10;
return 1 === t && 0 === n ? 0 : 2 === t && 0 === n ? 1 : 0 !== n || l(0, 10, e) || 0 !== r ? 3 : 2;
}
}), u([ "hu" ], {
c: [ 1, 5 ],
cFn: function(e) {
return 1 === e ? 0 : 1;
},
o: [ 1, 5 ],
oFn: function(e) {
return f([ 1, 5 ], e) ? 0 : 1;
}
}), u([ "is" ], {
c: [ 1, 5 ],
cFn: function(e, t, n, r, o) {
return 0 === o && 1 === t % 10 && 11 !== t % 100 || 0 !== o ? 0 : 1;
}
}), u([ "it" ], {
c: [ 1, 5 ],
cFn: function(e, t, n) {
return 1 === t && 0 === n ? 0 : 1;
},
o: [ 4, 5 ],
oFn: function(e) {
return f([ 11, 8, 80, 800 ], e) ? 0 : 1;
}
}), u([ "iu", "kw", "naq", "se", "sma", "smi", "smj", "smn", "sms" ], {
c: [ 1, 2, 5 ],
cFn: function(e) {
return 1 === e ? 0 : 2 === e ? 1 : 2;
}
}), u([ "ka" ], {
c: [ 1, 5 ],
cFn: function(e) {
return 1 === e ? 0 : 1;
},
o: [ 1, 4, 5 ],
oFn: function(e, t) {
var n = t % 100;
return 1 === t ? 0 : 0 === t || l(2, 20, n) || 40 === n || 60 === n || 80 === n ? 1 : 2;
}
}), u([ "kk" ], {
c: [ 1, 5 ],
cFn: function(e) {
return 1 === e ? 0 : 1;
},
o: [ 4, 5 ],
oFn: function(e) {
var t = e % 10;
return 6 === t || 9 === t || 0 === t && 0 !== e ? 0 : 1;
}
}), u([ "ksh" ], {
c: [ 0, 1, 5 ],
cFn: function(e) {
return 0 === e ? 0 : 1 === e ? 1 : 2;
}
}), u([ "lag" ], {
c: [ 0, 1, 5 ],
cFn: function(e, t) {
return 0 === e ? 0 : f([ 0, 1 ], t) && 0 !== e ? 1 : 2;
}
}), u([ "lo", "ms", "vi" ], {
o: [ 1, 5 ],
oFn: function(e) {
return 1 === e ? 0 : 1;
}
}), u([ "lt" ], {
c: [ 1, 3, 4, 5 ],
cFn: function(e, t, n, r) {
var o = e % 10, i = e % 100;
return 1 !== o || l(11, 19, i) ? l(2, 9, o) && !l(11, 19, i) ? 1 : 0 !== r ? 2 : 3 : 0;
}
}), u([ "lv", "prg" ], {
c: [ 0, 1, 5 ],
cFn: function(e, t, n, r) {
var o = e % 10, i = e % 100, a = r % 100, s = r % 10;
return 0 === o || l(11, 19, i) || 2 === n && l(11, 19, a) ? 0 : 1 === o && 11 !== i || 2 === n && 1 === s && 11 !== a || 2 !== n && 1 === s ? 1 : 2;
}
}), u([ "mk" ], {
c: [ 1, 5 ],
cFn: function(e, t, n, r) {
return 0 === n && 1 === t % 10 || 1 === r % 10 ? 0 : 1;
},
o: [ 1, 2, 4, 5 ],
oFn: function(e, t) {
var n = t % 10, r = t % 100;
return 1 === n && 11 !== r ? 0 : 2 === n && 12 !== r ? 1 : f([ 7, 8 ], n) && !f([ 17, 18 ], r) ? 2 : 3;
}
}), u([ "mo", "ro" ], {
c: [ 1, 3, 5 ],
cFn: function(e, t, n) {
return 1 === t && 0 === n ? 0 : 0 !== n || 0 === e || 1 !== e && l(1, 19, e % 100) ? 1 : 2;
},
o: [ 1, 5 ],
oFn: function(e) {
return 1 === e ? 0 : 1;
}
}), u([ "mr" ], {
c: [ 1, 5 ],
cFn: function(e, t) {
return 0 === t || 1 === e ? 0 : 1;
},
o: [ 1, 2, 3, 5 ],
oFn: function(e) {
return 1 === e ? 0 : f([ 2, 3 ], e) ? 1 : 4 === e ? 2 : 3;
}
}), u([ "mt" ], {
c: [ 1, 3, 4, 5 ],
cFn: function(e) {
var t = e % 100;
return 1 === e ? 0 : 0 === e || l(2, 10, t) ? 1 : l(11, 19, t) ? 2 : 3;
}
}), u([ "ne" ], {
c: [ 1, 5 ],
cFn: function(e) {
return 1 === e ? 0 : 1;
},
o: [ 1, 5 ],
oFn: function(e) {
return l(1, 4, e) ? 0 : 1;
}
}), u([ "pl" ], {
c: [ 1, 3, 4, 5 ],
cFn: function(e, t, n) {
var r = t % 10, o = t % 100;
return 1 === t && 0 === n ? 0 : 0 === n && l(2, 4, r) && !l(12, 14, o) ? 1 : 0 === n && 1 !== t && l(0, 1, r) || 0 === n && l(5, 9, r) || 0 === n && l(12, 14, o) ? 2 : 3;
}
}), u([ "pt" ], {
c: [ 1, 5 ],
cFn: function(e) {
return l(0, 2, e) && 2 !== e ? 0 : 1;
}
}), u([ "pt-pt" ], {
c: [ 1, 5 ],
cFn: function(e, t, n) {
return 1 === e && 0 === n ? 0 : 1;
}
}), u([ "ru" ], {
c: [ 1, 3, 4, 5 ],
cFn: function(e, t, n) {
var r = t % 10, o = t % 100;
return 0 === n && 1 === r && 11 !== o ? 0 : 0 === n && l(2, 4, r) && !l(12, 14, o) ? 1 : 0 === n && 0 === r || 0 === n && l(5, 9, r) || 0 === n && l(11, 14, o) ? 2 : 3;
}
}), u([ "shi" ], {
c: [ 1, 3, 5 ],
cFn: function(e, t) {
return 0 === t || 1 === e ? 0 : l(2, 10, e) ? 1 : 2;
}
}), u([ "si" ], {
c: [ 1, 5 ],
cFn: function(e, t, n, r) {
return f([ 0, 1 ], e) || 0 === t && 1 === r ? 0 : 1;
}
}), u([ "sl" ], {
c: [ 1, 2, 3, 5 ],
cFn: function(e, t, n) {
var r = t % 100;
return 0 === n && 1 === r ? 0 : 0 === n && 2 === r ? 1 : 0 === n && l(3, 4, r) || 0 !== n ? 2 : 3;
}
}), u([ "sq" ], {
c: [ 1, 5 ],
cFn: function(e) {
return 1 === e ? 0 : 1;
},
o: [ 1, 4, 5 ],
oFn: function(e) {
return 1 === e ? 0 : 4 === e % 10 && 14 !== e % 100 ? 1 : 2;
}
}), u([ "sv" ], {
c: [ 1, 5 ],
cFn: function(e, t, n) {
return 1 === t && 0 === n ? 0 : 1;
},
o: [ 1, 5 ],
oFn: function(e) {
var t = e % 100;
return f([ 1, 2 ], e % 10) && !f([ 11, 12 ], t) ? 0 : 1;
}
}), u([ "tzm" ], {
c: [ 1, 5 ],
cFn: function(e) {
return l(0, 1, e) || l(11, 99, e) ? 0 : 1;
}
}), u([ "uk" ], {
c: [ 1, 3, 4, 5 ],
cFn: function(e, t, n) {
var r = t % 10, o = t % 100;
return 0 === n && 1 === r && 11 !== o ? 0 : 0 === n && l(2, 4, r) && !l(12, 14, o) ? 1 : 0 === n && 0 === r || 0 === n && l(5, 9, r) || 0 === n && l(11, 14, o) ? 2 : 3;
},
o: [ 3, 5 ],
oFn: function(e) {
return 3 === e % 10 && 13 !== e % 100 ? 0 : 1;
}
});
},
24: function(e, t, n) {
"use strict";
let r = n(3), o = n(27);
const i = n(0).lang, a = n(4);
a.i18n.add("", n(28)("./" + i + ".yml")), a.i18n.add("error.network", n(30)("./" + i + ".yml")), 
document.addEventListener("xhrfail", function(e) {
new r.Error(e.reason);
}), e.exports = function(e) {
let t = new XMLHttpRequest(), n = e.method || "GET", r = e.body, i = e.url;
t.open(n, i, !e.sync), t.method = n;
let s = o();
s && !e.skipCsrf && t.setRequestHeader("X-XSRF-TOKEN", s), "[object Object]" == {}.toString.call(r) && (t.setRequestHeader("Content-Type", "application/json;charset=UTF-8"), 
r = JSON.stringify(r)), e.noDocumentEvents || (t.addEventListener("loadstart", e => {
t.timeStart = Date.now();
let n = u("xhrstart", e);
document.dispatchEvent(n);
}), t.addEventListener("loadend", e => {
let t = u("xhrend", e);
document.dispatchEvent(t);
}), t.addEventListener("success", e => {
let t = u("xhrsuccess", e);
t.result = e.result, document.dispatchEvent(t);
}), t.addEventListener("fail", e => {
let t = u("xhrfail", e);
t.reason = e.reason, document.dispatchEvent(t);
})), e.raw || t.setRequestHeader("Accept", "application/json"), t.setRequestHeader("X-Requested-With", "XMLHttpRequest");
let c = e.normalStatuses || [ 200 ];
function u(e, t) {
let n = new CustomEvent(e);
return n.originalEvent = t, n;
}
function l(e, n) {
let r = u("fail", n);
r.reason = e, t.dispatchEvent(r);
}
return t.addEventListener("error", e => {
l(a("error.network.server_connection_error"), e);
}), t.addEventListener("timeout", e => {
l(a("error.network.server_request_timeout"), e);
}), t.addEventListener("abort", e => {
l(a("error.network.request_aborted"), e);
}), t.addEventListener("load", n => {
if (!t.status) return void l(a("error.network.no_response"), n);
if (!c.includes(t.status)) return void l(a("error.network.server_error", {
status: t.status
}), n);
let r = t.responseText;
if ((t.getResponseHeader("Content-Type") || "").match(/^application\/json/) || e.json) try {
r = JSON.parse(r);
} catch (n) {
return void l(a("error.network.invalid_format"), n);
}
!function(e, n) {
let r = u("success", n);
r.result = e, t.dispatchEvent(r);
}(r, n);
}), setTimeout(function() {
t.send(r);
}, 0), t;
};
},
27: function(e, t, n) {
"use strict";
e.exports = function() {
let e = document.cookie.match(/XSRF-TOKEN=([\w-]+)/);
return e ? e[1] : null;
};
},
276: function(e, t, n) {
"use strict";
let r = n(277);
!function() {
let e = document.querySelector("[data-order-form]");
e && new r({
elem: e
});
}();
},
277: function(e, t, n) {
"use strict";
n(24);
let r = n(3), o = n(7), i = n(278).FormPayment;
const a = n(4), s = n(0).lang;
a.i18n.add("ebook", n(282)("./" + s + ".yml"));
class c {
constructor(e) {
this.elem = e.elem, this.product = "ebook", this.elem.addEventListener("submit", e => this.onSubmit(e)), 
this.delegate("[data-order-payment-change]", "click", function(e) {
e.preventDefault(), this.elem.querySelector("[data-order-form-step-payment]").style.display = "block", 
this.elem.querySelector("[data-order-form-step-confirm]").style.display = "none", 
this.elem.querySelector("[data-order-form-step-receipt]").style.display = "none";
}), this.delegate(".new-complex-form__extract .extract__item", "click", function(e) {
e.delegateTarget.querySelector('[type="radio"]').checked = !0;
});
}
onSubmit(e) {
e.preventDefault(), new i(this, this.elem).submit();
}
getOrderData() {
let e = {};
if (window.order) e.orderNumber = window.order.number, e.amount = window.order.amount, 
e.title = window.order.title, e.email = window.order.email; else {
let t = this.elem.querySelector('input[name="orderTemplate"]:checked');
e.orderTemplate = t.value, e.amount = t.dataset.price, e.title = t.dataset.title;
}
if (this.elem.elements.email) {
if (!this.elem.elements.email.value) return new r.Error(a("ebook.client.enter_email")), 
this.elem.elements.email.scrollIntoView(), setTimeout(function() {
window.scrollBy(0, -200);
}, 0), void this.elem.elements.email.focus();
e.email = this.elem.elements.email.value;
}
return e.email || (e.email = window.currentUser.email), e;
}
}
o.delegateMixin(c.prototype), e.exports = c;
},
278: function(e, t, n) {
"use strict";
t.FormPayment = n(279);
},
279: function(e, t, n) {
"use strict";
let r = n(3), o = n(24), i = n(14);
const a = n(4), s = n(0), c = n(0).currency;
a.i18n.add("payments", n(280)("./" + s.lang + ".yml"));
e.exports = class {
constructor(e, t) {
this.orderForm = e, this.paymentMethodElem = t;
}
request(e) {
let t = o(e);
return t.addEventListener("loadstart", function() {
let e = this.startRequestIndication();
t.addEventListener("loadend", e);
}.bind(this)), t;
}
startRequestIndication() {
this.paymentMethodElem.classList.add("modal-overlay_light");
let e = new i({
elem: this.paymentMethodElem.querySelector('[type="submit"]'),
size: "small",
class: "",
elemClass: "button_loading"
});
return e.start(), () => {
this.paymentMethodElem.classList.remove("modal-overlay_light"), e && e.stop();
};
}
readPaymentData() {
let e = {};
return [].forEach.call(this.paymentMethodElem.querySelectorAll("input,select,textarea"), function(t) {
("radio" != t.type && "checkbox" != t.type || t.checked) && (e[t.name] = t.value);
}), e;
}
submit() {
let e = this.orderForm.getOrderData();
if (!e) return;
let t = this.readPaymentData();
if (!t.paymentMethod) return void new r.Error(a("payments.client.choose_payment_method"));
if ("invoice" == t.paymentMethod && !t.invoiceCompanyName) return new r.Error(a("payments.client.specify_company_name")), 
void this.paymentMethodElem.querySelector('[name="invoiceCompanyName"]').focus();
for (let n in t) e[n] = t[n];
let n = window.location.search.match(/[?&]code=([-\w]+)/);
if (n && (e.discountCode = n[1]), "stripe" === t.paymentMethod) {
let t = +e.amount;
"RUB" === c.code && (t = Math.round(t / window.rateUsdToNative));
let n = this.startRequestIndication();
window.StripeCheckout.configure({
key: s.stripeKey,
image: "/img/site_preview_" + ("ru" == s.lang ? "ru" : "en") + "_512x512.png",
locale: "auto",
opened: () => {
n();
},
token: t => {
e.stripeToken = t.id, this.sendPaymentRequest(e);
}
}).open({
name: a("payments.payment"),
description: e.title,
email: e.email,
amount: 100 * t
});
} else this.sendPaymentRequest(e);
}
sendPaymentRequest(e) {
let t = o({
method: "POST",
url: "/payments/common/checkout",
normalStatuses: [ 200, 403, 400 ],
body: e
});
e.orderTemplate && window.ga("ec:addProduct", {
id: this.orderForm.product,
variant: e.orderTemplate,
price: e.amount,
quantity: 1
}), window.ga("ec:setAction", "checkout", {
step: 1,
option: e.paymentMethod
}), window.ga("send", "event", {
eventCategory: this.orderForm.product,
eventAction: "checkout-payment"
});
let n = this.startRequestIndication();
t.addEventListener("success", e => {
if (403 == t.status) return new r.Error(a("payments.client.error_start_again", {
message: e.result.description || e.result.message || "",
email: s.ordersMail
})), void n();
if (400 == t.status) return new r.Error(a("payments.client.maybe_purchase_error", {
message: e.result.message || e.result.description || "",
email: s.ordersMail
})), void n();
let o = e.result;
if (o.form) {
window.ga("ec:setAction", "purchase", {
id: o.orderNumber
});
let e = document.createElement("div");
e.hidden = !0, e.innerHTML = o.form, document.body.appendChild(e), e.firstChild.submit();
} else n(), new r.Error(a("payments.client.purchase_error", {
email: s.ordersMail
}));
}), t.addEventListener("fail", n);
}
};
},
28: function(e, t, n) {
var r = {
"https://zh.javascript.info/pack/zh.yml": 29
};
function o(e) {
var t = i(e);
return n(t);
}
function i(e) {
var t = r[e];
if (!(t + 1)) {
var n = new Error("Cannot find module '" + e + "'");
throw n.code = "MODULE_NOT_FOUND", n;
}
return t;
}
o.keys = function() {
return Object.keys(r);
}, o.resolve = i, e.exports = o, o.id = 28;
},
280: function(e, t, n) {
var r = {
"https://zh.javascript.info/pack/zh.yml": 281
};
function o(e) {
var t = i(e);
return n(t);
}
function i(e) {
var t = r[e];
if (!(t + 1)) {
var n = new Error("Cannot find module '" + e + "'");
throw n.code = "MODULE_NOT_FOUND", n;
}
return t;
}
o.keys = function() {
return Object.keys(r);
}, o.resolve = i, e.exports = o, o.id = 280;
},
281: function(e, t) {
e.exports = {
client: {
choose_payment_method: "选择付款方式",
specify_company_name: "指定公司名称",
error_start_again: "<p>#{message}</p><p>请重新尝试购买。</p> <p>如果你认为服务器出现了问题 — 请联系 <a href='mailto:#{email}'>客服</a>。</p>\n",
maybe_purchase_error: "<p>#{message}</p><p>如果你认为发生了错误 &mdash; 请联系 <a href='mailto:#{email}'>客服</a>。</p>\n",
purchase_error: "发生了错误，请联系 <a href='mailto:#{email}'>客服</a>。\n"
},
currency: "美元",
payment_for: "付款",
payment: "付款",
pay: "支付",
payment_received: "已收到付款",
payment_processing: "处理中",
payment_received_processing: "收到付款，处理",
payment_error: "出现错误",
payment_error_accent: "付款处理期间发生错误。",
payment_failed: "支付失败",
payment_failed_try_again: "支付失败，请重新支付。",
payment_success_description: "<p>我们会给你发送一封电子邮件到 <b>#{orderEmail}</b>。</p><p>如果你有任何问题，请发送至 #{mailUrl}。</p>",
order_canceled: "订单已取消",
contact_payment: "<p>请将有关付款的所有问题发送至 #{mailUrl}。</p>",
contact_order: "<p>请将有关订单的所有问题发送至 #{mailUrl}。</p>",
thanks: "感谢购买！",
contact_support: "<p>请联系支持部门 #{mailUrl}。</p>",
payment_usd: "使用美元支付",
profile_order_link: "<p><a href='#{link}'>在你的个人资料中</a>的订单信息可用。</p>"
};
},
282: function(e, t, n) {
var r = {
"https://zh.javascript.info/pack/zh.yml": 283
};
function o(e) {
var t = i(e);
return n(t);
}
function i(e) {
var t = r[e];
if (!(t + 1)) {
var n = new Error("Cannot find module '" + e + "'");
throw n.code = "MODULE_NOT_FOUND", n;
}
return t;
}
o.keys = function() {
return Object.keys(r);
}, o.resolve = i, e.exports = o, o.id = 282;
},
283: function(e, t) {
e.exports = {
build_at: "建于",
last_version: '最新版教程详见 <a href="#{url}">#{url}</a>',
tracker_ref: '我们在不断努力改进教程。如果你发现任何错误，请在<a href="#{url}/issues/new">我们的 GitHub</a> 上告诉我们。',
tasks: "任务",
importance: "重要程度",
to_solution: "解决方案",
solutions: "解决方案",
to_formulation: "定制",
more: "附加内容",
newOrder: {
title: "购买 EPUB/PDF 以便离线阅读",
sample: "下载样章",
translate_notification: "<b>注意</b>：#{progress}% 的内容已被翻译成中文。现在购买此教程，你可以在全书翻译完成的第一时间获得翻译完成的完整教程。",
choose_course: "你想要教程的哪些部分？",
price: "价格",
specifyEmail: "指定你的邮箱",
note: "付款后，下载链接将发送至此地址。",
choose_payment: "选择付款方式",
continue: "继续",
continue_text: "你的操作将被重定向至付款界面。",
confirmation: "确认",
currency: "美元",
continue_with_paypal: "使用 PayPal 支付",
continue_with_stripe: "通过 Stripe 付款",
continue_pay: "继续付款",
info: "<p><strong>PDF/EPUB</strong> 书是本教程的离线版本。购买这本书，表示你对项目的支持，并能够像阅读电子书那样阅读该教程。</p> <p>你将获得截至目前教程的全部内容，以及 3 个月的免费更新权益。</p>\n"
},
orders: {
order: "订购",
failed: "付款失败，请稍后再试。",
currency: "$",
payment: "付款",
successful: "成功",
pending: "待确认",
amount: "价格",
choose_another_payment: "选择其他付款方式",
do_not_pay_twice: "请勿重复付款。仅在你确认付款失败时再更改付款方式。",
questions: "如果你有任何疑问，请发送给他们",
thanks: "感谢购买！",
download: "Download ebook",
confirmation_soon: "确认信息将发送至 <b>#{email}</b>",
download_now: "你可以通过下方链接立即下载该教程：",
link_active_3_months: "该链接有效期为 3 个月"
},
client: {
enter_email: "输入邮箱。"
},
onPaid: {
subject: "JavaScript 教程 EPUB/PDF"
}
};
},
29: function(e, t) {
e.exports = {
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
3: function(e, t, n) {
"use strict";
Object.defineProperty(t, "__esModule", {
value: !0
});
let r = n(7);
t.init = function(e) {
window.notificationManager || (window.notificationManager = new class {
constructor(e = {}) {
this.notifications = [], this.verticalSpace = e.verticalSpace || 8;
}
register(e) {
this.notifications.unshift(e), setTimeout(() => this.recalculate(), 20);
}
unregister(e) {
let t = this.notifications.indexOf(e);
this.notifications.splice(t, 1), this.recalculate();
}
recalculate() {
let e = this.verticalSpace;
this.notifications.forEach(t => {
t.top = e, e += t.height + this.verticalSpace;
});
}
}(e));
};
class o {
constructor(e, t, n) {
let r = `<div class="notification notification_popup notification_${t}">\n    <div class="notification__content">${e}</div>\n    <button title="Закрыть" class="notification__close"></button></div>`;
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
set top(e) {
this.elem.style.transform = "translateY(" + e + "px)";
}
}
r.delegateMixin(o.prototype);
t.Info = class extends o {
constructor(e, t) {
super(e, "info", t);
}
};
t.Warning = class extends o {
constructor(e, t) {
super(e, "warning", t);
}
};
t.Success = class extends o {
constructor(e, t) {
super(e, "success", t);
}
};
class i extends o {
constructor(e, t) {
super(e, "error", t);
}
get TIMEOUT_DEFAULT() {
return 5e3;
}
}
t.Error = i, t.Error = i;
},
30: function(e, t, n) {
var r = {
"https://zh.javascript.info/pack/zh.yml": 31
};
function o(e) {
var t = i(e);
return n(t);
}
function i(e) {
var t = r[e];
if (!(t + 1)) {
var n = new Error("Cannot find module '" + e + "'");
throw n.code = "MODULE_NOT_FOUND", n;
}
return t;
}
o.keys = function() {
return Object.keys(r);
}, o.resolve = i, e.exports = o, o.id = 30;
},
31: function(e, t) {
e.exports = {
server_connection_error: "服务器连接错误。",
server_request_timeout: "服务器请求超时。",
request_aborted: "请求已终止。",
no_response: "服务器没有响应。",
server_error: "服务器错误（code #{status}），请稍后再试。",
invalid_format: "响应格式无效。"
};
},
346: function(e, t, n) {
n(276), e.exports = n(347);
},
347: function(e, t, n) {},
4: function(e, t, n) {
"use strict";
const r = new (n(18))("en");
let o = console.error;
function i(e) {
return r.hasPhrase(a, e) || o("No such phrase", e), r.t(a, ...arguments);
}
e.exports = i;
const a = n(0).lang;
"en" !== a && r.setFallback(a, "en"), r.add = ((...e) => r.addPhrase(a, ...e)), 
i.i18n = r;
},
7: function(e, t, n) {
"use strict";
function r(e, t, n, r, o) {
e.addEventListener(n, function(e) {
let n = function(e, t) {
let n = e.target;
for (;n; ) {
if (n.matches(t)) return n;
if (n == e.currentTarget) break;
n = n.parentElement;
}
return null;
}(e, t);
e.delegateTarget = n, n && r.call(o || this, e);
});
}
r.delegateMixin = function(e) {
e.delegate = function(e, t, n) {
r(this.elem, e, t, n, this);
};
}, e.exports = r;
}
});