var head = function(t) {
function e(e) {
for (var n, r, s = e[0], o = e[1], a = 0, u = []; a < s.length; a++) r = s[a], i[r] && u.push(i[r][0]), 
i[r] = 0;
for (n in o) Object.prototype.hasOwnProperty.call(o, n) && (t[n] = o[n]);
for (l && l(e); u.length; ) u.shift()();
}
var n = {}, i = {
3: 0
};
function r(e) {
if (n[e]) return n[e].exports;
var i = n[e] = {
i: e,
l: !1,
exports: {}
};
return t[e].call(i.exports, i, i.exports, r), i.l = !0, i.exports;
}
r.e = function(t) {
var e = [], n = i[t];
if (0 !== n) if (n) e.push(n[2]); else {
var s = new Promise(function(e, r) {
n = i[t] = [ e, r ];
});
e.push(n[2] = s);
var o, a = document.getElementsByTagName("head")[0], l = document.createElement("script");
l.charset = "utf-8", l.timeout = 120, r.nc && l.setAttribute("nonce", r.nc), l.src = function(t) {
return r.p + "" + ({
12: "authClient",
15: "vendors~authClient"
}[t] || t) + "-" + t + ".9ab2708780c33bc8dadc.js";
}(t), o = function(e) {
l.onerror = l.onload = null, clearTimeout(u);
var n = i[t];
if (0 !== n) {
if (n) {
var r = e && ("load" === e.type ? "missing" : e.type), s = e && e.target && e.target.src, o = new Error("Loading chunk " + t + " failed.\n(" + r + ": " + s + ")");
o.type = r, o.request = s, n[1](o);
}
i[t] = void 0;
}
};
var u = setTimeout(function() {
o({
type: "timeout",
target: l
});
}, 12e4);
l.onerror = l.onload = o, a.appendChild(l);
}
return Promise.all(e);
}, r.m = t, r.c = n, r.d = function(t, e, n) {
r.o(t, e) || Object.defineProperty(t, e, {
enumerable: !0,
get: n
});
}, r.r = function(t) {
"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
value: "Module"
}), Object.defineProperty(t, "__esModule", {
value: !0
});
}, r.t = function(t, e) {
if (1 & e && (t = r(t)), 8 & e) return t;
if (4 & e && "object" == typeof t && t && t.__esModule) return t;
var n = Object.create(null);
if (r.r(n), Object.defineProperty(n, "default", {
enumerable: !0,
value: t
}), 2 & e && "string" != typeof t) for (var i in t) r.d(n, i, function(e) {
return t[e];
}.bind(null, i));
return n;
}, r.n = function(t) {
var e = t && t.__esModule ? function() {
return t.default;
} : function() {
return t;
};
return r.d(e, "a", e), e;
}, r.o = function(t, e) {
return Object.prototype.hasOwnProperty.call(t, e);
}, r.p = "/pack/", r.oe = function(t) {
throw t;
};
var s = window.webpackJsonp_name_ = window.webpackJsonp_name_ || [], o = s.push.bind(s);
s.push = e, s = s.slice();
for (var a = 0; a < s.length; a++) e(s[a]);
var l = o;
return r(r.s = 247);
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
12: function(t, e, n) {
"use strict";
(function(t) {
t.exports = function() {
var e, i;
function r() {
return e.apply(null, arguments);
}
function s(t) {
return t instanceof Array || "[object Array]" === Object.prototype.toString.call(t);
}
function o(t) {
return null != t && "[object Object]" === Object.prototype.toString.call(t);
}
function a(t) {
return void 0 === t;
}
function l(t) {
return "number" == typeof t || "[object Number]" === Object.prototype.toString.call(t);
}
function u(t) {
return t instanceof Date || "[object Date]" === Object.prototype.toString.call(t);
}
function c(t, e) {
var n, i = [];
for (n = 0; n < t.length; ++n) i.push(e(t[n], n));
return i;
}
function d(t, e) {
return Object.prototype.hasOwnProperty.call(t, e);
}
function h(t, e) {
for (var n in e) d(e, n) && (t[n] = e[n]);
return d(e, "toString") && (t.toString = e.toString), d(e, "valueOf") && (t.valueOf = e.valueOf), 
t;
}
function f(t, e, n, i) {
return Ce(t, e, n, i, !0).utc();
}
function m(t) {
return null == t._pf && (t._pf = {
empty: !1,
unusedTokens: [],
unusedInput: [],
overflow: -2,
charsLeftOver: 0,
nullInput: !1,
invalidMonth: null,
invalidFormat: !1,
userInvalidated: !1,
iso: !1,
parsedDateParts: [],
meridiem: null,
rfc2822: !1,
weekdayMismatch: !1
}), t._pf;
}
function _(t) {
if (null == t._isValid) {
var e = m(t), n = i.call(e.parsedDateParts, function(t) {
return null != t;
}), r = !isNaN(t._d.getTime()) && e.overflow < 0 && !e.empty && !e.invalidMonth && !e.invalidWeekday && !e.weekdayMismatch && !e.nullInput && !e.invalidFormat && !e.userInvalidated && (!e.meridiem || e.meridiem && n);
if (t._strict && (r = r && 0 === e.charsLeftOver && 0 === e.unusedTokens.length && void 0 === e.bigHour), 
null != Object.isFrozen && Object.isFrozen(t)) return r;
t._isValid = r;
}
return t._isValid;
}
function p(t) {
var e = f(NaN);
return null != t ? h(m(e), t) : m(e).userInvalidated = !0, e;
}
i = Array.prototype.some ? Array.prototype.some : function(t) {
for (var e = Object(this), n = e.length >>> 0, i = 0; i < n; i++) if (i in e && t.call(this, e[i], i, e)) return !0;
return !1;
};
var y = r.momentProperties = [];
function g(t, e) {
var n, i, r;
if (a(e._isAMomentObject) || (t._isAMomentObject = e._isAMomentObject), a(e._i) || (t._i = e._i), 
a(e._f) || (t._f = e._f), a(e._l) || (t._l = e._l), a(e._strict) || (t._strict = e._strict), 
a(e._tzm) || (t._tzm = e._tzm), a(e._isUTC) || (t._isUTC = e._isUTC), a(e._offset) || (t._offset = e._offset), 
a(e._pf) || (t._pf = m(e)), a(e._locale) || (t._locale = e._locale), y.length > 0) for (n = 0; n < y.length; n++) i = y[n], 
a(r = e[i]) || (t[i] = r);
return t;
}
var w = !1;
function v(t) {
g(this, t), this._d = new Date(null != t._d ? t._d.getTime() : NaN), this.isValid() || (this._d = new Date(NaN)), 
!1 === w && (w = !0, r.updateOffset(this), w = !1);
}
function b(t) {
return t instanceof v || null != t && null != t._isAMomentObject;
}
function M(t) {
return t < 0 ? Math.ceil(t) || 0 : Math.floor(t);
}
function S(t) {
var e = +t, n = 0;
return 0 !== e && isFinite(e) && (n = M(e)), n;
}
function D(t, e, n) {
var i, r = Math.min(t.length, e.length), s = Math.abs(t.length - e.length), o = 0;
for (i = 0; i < r; i++) (n && t[i] !== e[i] || !n && S(t[i]) !== S(e[i])) && o++;
return o + s;
}
function k(t) {
!1 === r.suppressDeprecationWarnings && "undefined" != typeof console && console.warn;
}
function Y(t, e) {
var n = !0;
return h(function() {
if (null != r.deprecationHandler && r.deprecationHandler(null, t), n) {
for (var i, s = [], o = 0; o < arguments.length; o++) {
if (i = "", "object" == typeof arguments[o]) {
for (var a in i += "\n[" + o + "] ", arguments[0]) i += a + ": " + arguments[0][a] + ", ";
i = i.slice(0, -2);
} else i = arguments[o];
s.push(i);
}
k((Array.prototype.slice.call(s).join(""), new Error().stack)), n = !1;
}
return e.apply(this, arguments);
}, e);
}
var T, E = {};
function C(t, e) {
null != r.deprecationHandler && r.deprecationHandler(t, e), E[t] || (k(), E[t] = !0);
}
function L(t) {
return t instanceof Function || "[object Function]" === Object.prototype.toString.call(t);
}
function O(t, e) {
var n, i = h({}, t);
for (n in e) d(e, n) && (o(t[n]) && o(e[n]) ? (i[n] = {}, h(i[n], t[n]), h(i[n], e[n])) : null != e[n] ? i[n] = e[n] : delete i[n]);
for (n in t) d(t, n) && !d(e, n) && o(t[n]) && (i[n] = h({}, i[n]));
return i;
}
function x(t) {
null != t && this.set(t);
}
r.suppressDeprecationWarnings = !1, r.deprecationHandler = null, T = Object.keys ? Object.keys : function(t) {
var e, n = [];
for (e in t) d(t, e) && n.push(e);
return n;
};
var H = {};
function P(t, e) {
var n = t.toLowerCase();
H[n] = H[n + "s"] = H[e] = t;
}
function N(t) {
return "string" == typeof t ? H[t] || H[t.toLowerCase()] : void 0;
}
function A(t) {
var e, n, i = {};
for (n in t) d(t, n) && (e = N(n)) && (i[e] = t[n]);
return i;
}
var W = {};
function F(t, e) {
W[t] = e;
}
function R(t, e, n) {
var i = "" + Math.abs(t), r = e - i.length, s = t >= 0;
return (s ? n ? "+" : "" : "-") + Math.pow(10, Math.max(0, r)).toString().substr(1) + i;
}
var j = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g, U = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, I = {}, z = {};
function G(t, e, n, i) {
var r = i;
"string" == typeof i && (r = function() {
return this[i]();
}), t && (z[t] = r), e && (z[e[0]] = function() {
return R(r.apply(this, arguments), e[1], e[2]);
}), n && (z[n] = function() {
return this.localeData().ordinal(r.apply(this, arguments), t);
});
}
function V(t, e) {
return t.isValid() ? (e = q(e, t.localeData()), I[e] = I[e] || function(t) {
var e, n, i, r = t.match(j);
for (e = 0, n = r.length; e < n; e++) z[r[e]] ? r[e] = z[r[e]] : r[e] = (i = r[e]).match(/\[[\s\S]/) ? i.replace(/^\[|\]$/g, "") : i.replace(/\\/g, "");
return function(e) {
var i, s = "";
for (i = 0; i < n; i++) s += L(r[i]) ? r[i].call(e, t) : r[i];
return s;
};
}(e), I[e](t)) : t.localeData().invalidDate();
}
function q(t, e) {
var n = 5;
function i(t) {
return e.longDateFormat(t) || t;
}
for (U.lastIndex = 0; n >= 0 && U.test(t); ) t = t.replace(U, i), U.lastIndex = 0, 
n -= 1;
return t;
}
var Z = /\d/, B = /\d\d/, $ = /\d{3}/, J = /\d{4}/, X = /[+-]?\d{6}/, K = /\d\d?/, Q = /\d\d\d\d?/, tt = /\d\d\d\d\d\d?/, et = /\d{1,3}/, nt = /\d{1,4}/, it = /[+-]?\d{1,6}/, rt = /\d+/, st = /[+-]?\d+/, ot = /Z|[+-]\d\d:?\d\d/gi, at = /Z|[+-]\d\d(?::?\d\d)?/gi, lt = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i, ut = {};
function ct(t, e, n) {
ut[t] = L(e) ? e : function(t, i) {
return t && n ? n : e;
};
}
function dt(t, e) {
return d(ut, t) ? ut[t](e._strict, e._locale) : new RegExp(ht(t.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(t, e, n, i, r) {
return e || n || i || r;
})));
}
function ht(t) {
return t.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
}
var ft = {};
function mt(t, e) {
var n, i = e;
for ("string" == typeof t && (t = [ t ]), l(e) && (i = function(t, n) {
n[e] = S(t);
}), n = 0; n < t.length; n++) ft[t[n]] = i;
}
function _t(t, e) {
mt(t, function(t, n, i, r) {
i._w = i._w || {}, e(t, i._w, i, r);
});
}
function pt(t, e, n) {
null != e && d(ft, t) && ft[t](e, n._a, n, t);
}
var yt = 0, gt = 1, wt = 2, vt = 3, bt = 4, Mt = 5, St = 6, Dt = 7, kt = 8;
function Yt(t) {
return Tt(t) ? 366 : 365;
}
function Tt(t) {
return t % 4 == 0 && t % 100 != 0 || t % 400 == 0;
}
G("Y", 0, 0, function() {
var t = this.year();
return t <= 9999 ? "" + t : "+" + t;
}), G(0, [ "YY", 2 ], 0, function() {
return this.year() % 100;
}), G(0, [ "YYYY", 4 ], 0, "year"), G(0, [ "YYYYY", 5 ], 0, "year"), G(0, [ "YYYYYY", 6, !0 ], 0, "year"), 
P("year", "y"), F("year", 1), ct("Y", st), ct("YY", K, B), ct("YYYY", nt, J), ct("YYYYY", it, X), 
ct("YYYYYY", it, X), mt([ "YYYYY", "YYYYYY" ], yt), mt("YYYY", function(t, e) {
e[yt] = 2 === t.length ? r.parseTwoDigitYear(t) : S(t);
}), mt("YY", function(t, e) {
e[yt] = r.parseTwoDigitYear(t);
}), mt("Y", function(t, e) {
e[yt] = parseInt(t, 10);
}), r.parseTwoDigitYear = function(t) {
return S(t) + (S(t) > 68 ? 1900 : 2e3);
};
var Et, Ct = Lt("FullYear", !0);
function Lt(t, e) {
return function(n) {
return null != n ? (xt(this, t, n), r.updateOffset(this, e), this) : Ot(this, t);
};
}
function Ot(t, e) {
return t.isValid() ? t._d["get" + (t._isUTC ? "UTC" : "") + e]() : NaN;
}
function xt(t, e, n) {
t.isValid() && !isNaN(n) && ("FullYear" === e && Tt(t.year()) && 1 === t.month() && 29 === t.date() ? t._d["set" + (t._isUTC ? "UTC" : "") + e](n, t.month(), Ht(n, t.month())) : t._d["set" + (t._isUTC ? "UTC" : "") + e](n));
}
function Ht(t, e) {
if (isNaN(t) || isNaN(e)) return NaN;
var n, i = (e % (n = 12) + n) % n;
return t += (e - i) / 12, 1 === i ? Tt(t) ? 29 : 28 : 31 - i % 7 % 2;
}
Et = Array.prototype.indexOf ? Array.prototype.indexOf : function(t) {
var e;
for (e = 0; e < this.length; ++e) if (this[e] === t) return e;
return -1;
}, G("M", [ "MM", 2 ], "Mo", function() {
return this.month() + 1;
}), G("MMM", 0, 0, function(t) {
return this.localeData().monthsShort(this, t);
}), G("MMMM", 0, 0, function(t) {
return this.localeData().months(this, t);
}), P("month", "M"), F("month", 8), ct("M", K), ct("MM", K, B), ct("MMM", function(t, e) {
return e.monthsShortRegex(t);
}), ct("MMMM", function(t, e) {
return e.monthsRegex(t);
}), mt([ "M", "MM" ], function(t, e) {
e[gt] = S(t) - 1;
}), mt([ "MMM", "MMMM" ], function(t, e, n, i) {
var r = n._locale.monthsParse(t, i, n._strict);
null != r ? e[gt] = r : m(n).invalidMonth = t;
});
var Pt = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/, Nt = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), At = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_");
function Wt(t, e) {
var n;
if (!t.isValid()) return t;
if ("string" == typeof e) if (/^\d+$/.test(e)) e = S(e); else if (!l(e = t.localeData().monthsParse(e))) return t;
return n = Math.min(t.date(), Ht(t.year(), e)), t._d["set" + (t._isUTC ? "UTC" : "") + "Month"](e, n), 
t;
}
function Ft(t) {
return null != t ? (Wt(this, t), r.updateOffset(this, !0), this) : Ot(this, "Month");
}
var Rt = lt, jt = lt;
function Ut() {
function t(t, e) {
return e.length - t.length;
}
var e, n, i = [], r = [], s = [];
for (e = 0; e < 12; e++) n = f([ 2e3, e ]), i.push(this.monthsShort(n, "")), r.push(this.months(n, "")), 
s.push(this.months(n, "")), s.push(this.monthsShort(n, ""));
for (i.sort(t), r.sort(t), s.sort(t), e = 0; e < 12; e++) i[e] = ht(i[e]), r[e] = ht(r[e]);
for (e = 0; e < 24; e++) s[e] = ht(s[e]);
this._monthsRegex = new RegExp("^(" + s.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, 
this._monthsStrictRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._monthsShortStrictRegex = new RegExp("^(" + i.join("|") + ")", "i");
}
function It(t) {
var e = new Date(Date.UTC.apply(null, arguments));
return t < 100 && t >= 0 && isFinite(e.getUTCFullYear()) && e.setUTCFullYear(t), 
e;
}
function zt(t, e, n) {
var i = 7 + e - n, r = (7 + It(t, 0, i).getUTCDay() - e) % 7;
return -r + i - 1;
}
function Gt(t, e, n, i, r) {
var s, o, a = (7 + n - i) % 7, l = zt(t, i, r), u = 1 + 7 * (e - 1) + a + l;
return u <= 0 ? o = Yt(s = t - 1) + u : u > Yt(t) ? (s = t + 1, o = u - Yt(t)) : (s = t, 
o = u), {
year: s,
dayOfYear: o
};
}
function Vt(t, e, n) {
var i, r, s = zt(t.year(), e, n), o = Math.floor((t.dayOfYear() - s - 1) / 7) + 1;
return o < 1 ? (r = t.year() - 1, i = o + qt(r, e, n)) : o > qt(t.year(), e, n) ? (i = o - qt(t.year(), e, n), 
r = t.year() + 1) : (r = t.year(), i = o), {
week: i,
year: r
};
}
function qt(t, e, n) {
var i = zt(t, e, n), r = zt(t + 1, e, n);
return (Yt(t) - i + r) / 7;
}
G("w", [ "ww", 2 ], "wo", "week"), G("W", [ "WW", 2 ], "Wo", "isoWeek"), P("week", "w"), 
P("isoWeek", "W"), F("week", 5), F("isoWeek", 5), ct("w", K), ct("ww", K, B), ct("W", K), 
ct("WW", K, B), _t([ "w", "ww", "W", "WW" ], function(t, e, n, i) {
e[i.substr(0, 1)] = S(t);
}), G("d", 0, "do", "day"), G("dd", 0, 0, function(t) {
return this.localeData().weekdaysMin(this, t);
}), G("ddd", 0, 0, function(t) {
return this.localeData().weekdaysShort(this, t);
}), G("dddd", 0, 0, function(t) {
return this.localeData().weekdays(this, t);
}), G("e", 0, 0, "weekday"), G("E", 0, 0, "isoWeekday"), P("day", "d"), P("weekday", "e"), 
P("isoWeekday", "E"), F("day", 11), F("weekday", 11), F("isoWeekday", 11), ct("d", K), 
ct("e", K), ct("E", K), ct("dd", function(t, e) {
return e.weekdaysMinRegex(t);
}), ct("ddd", function(t, e) {
return e.weekdaysShortRegex(t);
}), ct("dddd", function(t, e) {
return e.weekdaysRegex(t);
}), _t([ "dd", "ddd", "dddd" ], function(t, e, n, i) {
var r = n._locale.weekdaysParse(t, i, n._strict);
null != r ? e.d = r : m(n).invalidWeekday = t;
}), _t([ "d", "e", "E" ], function(t, e, n, i) {
e[i] = S(t);
});
var Zt = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), Bt = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), $t = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), Jt = lt, Xt = lt, Kt = lt;
function Qt() {
function t(t, e) {
return e.length - t.length;
}
var e, n, i, r, s, o = [], a = [], l = [], u = [];
for (e = 0; e < 7; e++) n = f([ 2e3, 1 ]).day(e), i = this.weekdaysMin(n, ""), r = this.weekdaysShort(n, ""), 
s = this.weekdays(n, ""), o.push(i), a.push(r), l.push(s), u.push(i), u.push(r), 
u.push(s);
for (o.sort(t), a.sort(t), l.sort(t), u.sort(t), e = 0; e < 7; e++) a[e] = ht(a[e]), 
l[e] = ht(l[e]), u[e] = ht(u[e]);
this._weekdaysRegex = new RegExp("^(" + u.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, 
this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp("^(" + l.join("|") + ")", "i"), 
this._weekdaysShortStrictRegex = new RegExp("^(" + a.join("|") + ")", "i"), this._weekdaysMinStrictRegex = new RegExp("^(" + o.join("|") + ")", "i");
}
function te() {
return this.hours() % 12 || 12;
}
function ee(t, e) {
G(t, 0, 0, function() {
return this.localeData().meridiem(this.hours(), this.minutes(), e);
});
}
function ne(t, e) {
return e._meridiemParse;
}
G("H", [ "HH", 2 ], 0, "hour"), G("h", [ "hh", 2 ], 0, te), G("k", [ "kk", 2 ], 0, function() {
return this.hours() || 24;
}), G("hmm", 0, 0, function() {
return "" + te.apply(this) + R(this.minutes(), 2);
}), G("hmmss", 0, 0, function() {
return "" + te.apply(this) + R(this.minutes(), 2) + R(this.seconds(), 2);
}), G("Hmm", 0, 0, function() {
return "" + this.hours() + R(this.minutes(), 2);
}), G("Hmmss", 0, 0, function() {
return "" + this.hours() + R(this.minutes(), 2) + R(this.seconds(), 2);
}), ee("a", !0), ee("A", !1), P("hour", "h"), F("hour", 13), ct("a", ne), ct("A", ne), 
ct("H", K), ct("h", K), ct("k", K), ct("HH", K, B), ct("hh", K, B), ct("kk", K, B), 
ct("hmm", Q), ct("hmmss", tt), ct("Hmm", Q), ct("Hmmss", tt), mt([ "H", "HH" ], vt), 
mt([ "k", "kk" ], function(t, e, n) {
var i = S(t);
e[vt] = 24 === i ? 0 : i;
}), mt([ "a", "A" ], function(t, e, n) {
n._isPm = n._locale.isPM(t), n._meridiem = t;
}), mt([ "h", "hh" ], function(t, e, n) {
e[vt] = S(t), m(n).bigHour = !0;
}), mt("hmm", function(t, e, n) {
var i = t.length - 2;
e[vt] = S(t.substr(0, i)), e[bt] = S(t.substr(i)), m(n).bigHour = !0;
}), mt("hmmss", function(t, e, n) {
var i = t.length - 4, r = t.length - 2;
e[vt] = S(t.substr(0, i)), e[bt] = S(t.substr(i, 2)), e[Mt] = S(t.substr(r)), m(n).bigHour = !0;
}), mt("Hmm", function(t, e, n) {
var i = t.length - 2;
e[vt] = S(t.substr(0, i)), e[bt] = S(t.substr(i));
}), mt("Hmmss", function(t, e, n) {
var i = t.length - 4, r = t.length - 2;
e[vt] = S(t.substr(0, i)), e[bt] = S(t.substr(i, 2)), e[Mt] = S(t.substr(r));
});
var ie, re = Lt("Hours", !0), se = {
calendar: {
sameDay: "[Today at] LT",
nextDay: "[Tomorrow at] LT",
nextWeek: "dddd [at] LT",
lastDay: "[Yesterday at] LT",
lastWeek: "[Last] dddd [at] LT",
sameElse: "L"
},
longDateFormat: {
LTS: "h:mm:ss A",
LT: "h:mm A",
L: "MM/DD/YYYY",
LL: "MMMM D, YYYY",
LLL: "MMMM D, YYYY h:mm A",
LLLL: "dddd, MMMM D, YYYY h:mm A"
},
invalidDate: "Invalid date",
ordinal: "%d",
dayOfMonthOrdinalParse: /\d{1,2}/,
relativeTime: {
future: "in %s",
past: "%s ago",
s: "a few seconds",
ss: "%d seconds",
m: "a minute",
mm: "%d minutes",
h: "an hour",
hh: "%d hours",
d: "a day",
dd: "%d days",
M: "a month",
MM: "%d months",
y: "a year",
yy: "%d years"
},
months: Nt,
monthsShort: At,
week: {
dow: 0,
doy: 6
},
weekdays: Zt,
weekdaysMin: $t,
weekdaysShort: Bt,
meridiemParse: /[ap]\.?m?\.?/i
}, oe = {}, ae = {};
function le(t) {
return t ? t.toLowerCase().replace("_", "-") : t;
}
function ue(e) {
var i = null;
if (!oe[e] && void 0 !== t && t && t.exports) try {
i = ie._abbr, n(32)("./" + e), ce(i);
} catch (t) {}
return oe[e];
}
function ce(t, e) {
var n;
return t && ((n = a(e) ? he(t) : de(t, e)) ? ie = n : "undefined" != typeof console && console.warn), 
ie._abbr;
}
function de(t, e) {
if (null !== e) {
var n, i = se;
if (e.abbr = t, null != oe[t]) C("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."), 
i = oe[t]._config; else if (null != e.parentLocale) if (null != oe[e.parentLocale]) i = oe[e.parentLocale]._config; else {
if (null == (n = ue(e.parentLocale))) return ae[e.parentLocale] || (ae[e.parentLocale] = []), 
ae[e.parentLocale].push({
name: t,
config: e
}), null;
i = n._config;
}
return oe[t] = new x(O(i, e)), ae[t] && ae[t].forEach(function(t) {
de(t.name, t.config);
}), ce(t), oe[t];
}
return delete oe[t], null;
}
function he(t) {
var e;
if (t && t._locale && t._locale._abbr && (t = t._locale._abbr), !t) return ie;
if (!s(t)) {
if (e = ue(t)) return e;
t = [ t ];
}
return function(t) {
for (var e, n, i, r, s = 0; s < t.length; ) {
for (r = le(t[s]).split("-"), e = r.length, n = (n = le(t[s + 1])) ? n.split("-") : null; e > 0; ) {
if (i = ue(r.slice(0, e).join("-"))) return i;
if (n && n.length >= e && D(r, n, !0) >= e - 1) break;
e--;
}
s++;
}
return ie;
}(t);
}
function fe(t) {
var e, n = t._a;
return n && -2 === m(t).overflow && (e = n[gt] < 0 || n[gt] > 11 ? gt : n[wt] < 1 || n[wt] > Ht(n[yt], n[gt]) ? wt : n[vt] < 0 || n[vt] > 24 || 24 === n[vt] && (0 !== n[bt] || 0 !== n[Mt] || 0 !== n[St]) ? vt : n[bt] < 0 || n[bt] > 59 ? bt : n[Mt] < 0 || n[Mt] > 59 ? Mt : n[St] < 0 || n[St] > 999 ? St : -1, 
m(t)._overflowDayOfYear && (e < yt || e > wt) && (e = wt), m(t)._overflowWeeks && -1 === e && (e = Dt), 
m(t)._overflowWeekday && -1 === e && (e = kt), m(t).overflow = e), t;
}
function me(t, e, n) {
return null != t ? t : null != e ? e : n;
}
function _e(t) {
var e, n, i, s, o, a = [];
if (!t._d) {
for (i = function(t) {
var e = new Date(r.now());
return t._useUTC ? [ e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate() ] : [ e.getFullYear(), e.getMonth(), e.getDate() ];
}(t), t._w && null == t._a[wt] && null == t._a[gt] && function(t) {
var e, n, i, r, s, o, a, l;
if (null != (e = t._w).GG || null != e.W || null != e.E) s = 1, o = 4, n = me(e.GG, t._a[yt], Vt(Le(), 1, 4).year), 
i = me(e.W, 1), ((r = me(e.E, 1)) < 1 || r > 7) && (l = !0); else {
s = t._locale._week.dow, o = t._locale._week.doy;
var u = Vt(Le(), s, o);
n = me(e.gg, t._a[yt], u.year), i = me(e.w, u.week), null != e.d ? ((r = e.d) < 0 || r > 6) && (l = !0) : null != e.e ? (r = e.e + s, 
(e.e < 0 || e.e > 6) && (l = !0)) : r = s;
}
i < 1 || i > qt(n, s, o) ? m(t)._overflowWeeks = !0 : null != l ? m(t)._overflowWeekday = !0 : (a = Gt(n, i, r, s, o), 
t._a[yt] = a.year, t._dayOfYear = a.dayOfYear);
}(t), null != t._dayOfYear && (o = me(t._a[yt], i[yt]), (t._dayOfYear > Yt(o) || 0 === t._dayOfYear) && (m(t)._overflowDayOfYear = !0), 
n = It(o, 0, t._dayOfYear), t._a[gt] = n.getUTCMonth(), t._a[wt] = n.getUTCDate()), 
e = 0; e < 3 && null == t._a[e]; ++e) t._a[e] = a[e] = i[e];
for (;e < 7; e++) t._a[e] = a[e] = null == t._a[e] ? 2 === e ? 1 : 0 : t._a[e];
24 === t._a[vt] && 0 === t._a[bt] && 0 === t._a[Mt] && 0 === t._a[St] && (t._nextDay = !0, 
t._a[vt] = 0), t._d = (t._useUTC ? It : function(t, e, n, i, r, s, o) {
var a = new Date(t, e, n, i, r, s, o);
return t < 100 && t >= 0 && isFinite(a.getFullYear()) && a.setFullYear(t), a;
}).apply(null, a), s = t._useUTC ? t._d.getUTCDay() : t._d.getDay(), null != t._tzm && t._d.setUTCMinutes(t._d.getUTCMinutes() - t._tzm), 
t._nextDay && (t._a[vt] = 24), t._w && void 0 !== t._w.d && t._w.d !== s && (m(t).weekdayMismatch = !0);
}
}
var pe = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/, ye = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/, ge = /Z|[+-]\d\d(?::?\d\d)?/, we = [ [ "YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/ ], [ "YYYY-MM-DD", /\d{4}-\d\d-\d\d/ ], [ "GGGG-[W]WW-E", /\d{4}-W\d\d-\d/ ], [ "GGGG-[W]WW", /\d{4}-W\d\d/, !1 ], [ "YYYY-DDD", /\d{4}-\d{3}/ ], [ "YYYY-MM", /\d{4}-\d\d/, !1 ], [ "YYYYYYMMDD", /[+-]\d{10}/ ], [ "YYYYMMDD", /\d{8}/ ], [ "GGGG[W]WWE", /\d{4}W\d{3}/ ], [ "GGGG[W]WW", /\d{4}W\d{2}/, !1 ], [ "YYYYDDD", /\d{7}/ ] ], ve = [ [ "HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/ ], [ "HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/ ], [ "HH:mm:ss", /\d\d:\d\d:\d\d/ ], [ "HH:mm", /\d\d:\d\d/ ], [ "https://zh.javascript.info/pack/HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/ ], [ "HHmmss,SSSS", /\d\d\d\d\d\d,\d+/ ], [ "HHmmss", /\d\d\d\d\d\d/ ], [ "HHmm", /\d\d\d\d/ ], [ "HH", /\d\d/ ] ], be = /^\/?Date\((\-?\d+)/i;
function Me(t) {
var e, n, i, r, s, o, a = t._i, l = pe.exec(a) || ye.exec(a);
if (l) {
for (m(t).iso = !0, e = 0, n = we.length; e < n; e++) if (we[e][1].exec(l[1])) {
r = we[e][0], i = !1 !== we[e][2];
break;
}
if (null == r) return void (t._isValid = !1);
if (l[3]) {
for (e = 0, n = ve.length; e < n; e++) if (ve[e][1].exec(l[3])) {
s = (l[2] || " ") + ve[e][0];
break;
}
if (null == s) return void (t._isValid = !1);
}
if (!i && null != s) return void (t._isValid = !1);
if (l[4]) {
if (!ge.exec(l[4])) return void (t._isValid = !1);
o = "Z";
}
t._f = r + (s || "") + (o || ""), Te(t);
} else t._isValid = !1;
}
var Se = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/;
function De(t, e, n, i, r, s) {
var o = [ function(t) {
var e = parseInt(t, 10);
return e <= 49 ? 2e3 + e : e <= 999 ? 1900 + e : e;
}(t), At.indexOf(e), parseInt(n, 10), parseInt(i, 10), parseInt(r, 10) ];
return s && o.push(parseInt(s, 10)), o;
}
var ke = {
UT: 0,
GMT: 0,
EDT: -240,
EST: -300,
CDT: -300,
CST: -360,
MDT: -360,
MST: -420,
PDT: -420,
PST: -480
};
function Ye(t) {
var e = Se.exec(t._i.replace(/\([^)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, ""));
if (e) {
var n = De(e[4], e[3], e[2], e[5], e[6], e[7]);
if (!function(t, e, n) {
if (t) {
var i = Bt.indexOf(t), r = new Date(e[0], e[1], e[2]).getDay();
if (i !== r) return m(n).weekdayMismatch = !0, n._isValid = !1, !1;
}
return !0;
}(e[1], n, t)) return;
t._a = n, t._tzm = function(t, e, n) {
if (t) return ke[t];
if (e) return 0;
var i = parseInt(n, 10), r = i % 100, s = (i - r) / 100;
return 60 * s + r;
}(e[8], e[9], e[10]), t._d = It.apply(null, t._a), t._d.setUTCMinutes(t._d.getUTCMinutes() - t._tzm), 
m(t).rfc2822 = !0;
} else t._isValid = !1;
}
function Te(t) {
if (t._f !== r.ISO_8601) if (t._f !== r.RFC_2822) {
t._a = [], m(t).empty = !0;
var e, n, i, s, o, a = "" + t._i, l = a.length, u = 0;
for (i = q(t._f, t._locale).match(j) || [], e = 0; e < i.length; e++) s = i[e], 
(n = (a.match(dt(s, t)) || [])[0]) && ((o = a.substr(0, a.indexOf(n))).length > 0 && m(t).unusedInput.push(o), 
a = a.slice(a.indexOf(n) + n.length), u += n.length), z[s] ? (n ? m(t).empty = !1 : m(t).unusedTokens.push(s), 
pt(s, n, t)) : t._strict && !n && m(t).unusedTokens.push(s);
m(t).charsLeftOver = l - u, a.length > 0 && m(t).unusedInput.push(a), t._a[vt] <= 12 && !0 === m(t).bigHour && t._a[vt] > 0 && (m(t).bigHour = void 0), 
m(t).parsedDateParts = t._a.slice(0), m(t).meridiem = t._meridiem, t._a[vt] = (c = t._locale, 
d = t._a[vt], null == (h = t._meridiem) ? d : null != c.meridiemHour ? c.meridiemHour(d, h) : null != c.isPM ? ((f = c.isPM(h)) && d < 12 && (d += 12), 
f || 12 !== d || (d = 0), d) : d), _e(t), fe(t);
} else Ye(t); else Me(t);
var c, d, h, f;
}
function Ee(t) {
var e = t._i, n = t._f;
return t._locale = t._locale || he(t._l), null === e || void 0 === n && "" === e ? p({
nullInput: !0
}) : ("string" == typeof e && (t._i = e = t._locale.preparse(e)), b(e) ? new v(fe(e)) : (u(e) ? t._d = e : s(n) ? function(t) {
var e, n, i, r, s;
if (0 === t._f.length) return m(t).invalidFormat = !0, void (t._d = new Date(NaN));
for (r = 0; r < t._f.length; r++) s = 0, e = g({}, t), null != t._useUTC && (e._useUTC = t._useUTC), 
e._f = t._f[r], Te(e), _(e) && (s += m(e).charsLeftOver, s += 10 * m(e).unusedTokens.length, 
m(e).score = s, (null == i || s < i) && (i = s, n = e));
h(t, n || e);
}(t) : n ? Te(t) : function(t) {
var e = t._i;
a(e) ? t._d = new Date(r.now()) : u(e) ? t._d = new Date(e.valueOf()) : "string" == typeof e ? function(t) {
var e = be.exec(t._i);
null === e ? (Me(t), !1 === t._isValid && (delete t._isValid, Ye(t), !1 === t._isValid && (delete t._isValid, 
r.createFromInputFallback(t)))) : t._d = new Date(+e[1]);
}(t) : s(e) ? (t._a = c(e.slice(0), function(t) {
return parseInt(t, 10);
}), _e(t)) : o(e) ? function(t) {
if (!t._d) {
var e = A(t._i);
t._a = c([ e.year, e.month, e.day || e.date, e.hour, e.minute, e.second, e.millisecond ], function(t) {
return t && parseInt(t, 10);
}), _e(t);
}
}(t) : l(e) ? t._d = new Date(e) : r.createFromInputFallback(t);
}(t), _(t) || (t._d = null), t));
}
function Ce(t, e, n, i, r) {
var a, l = {};
return !0 !== n && !1 !== n || (i = n, n = void 0), (o(t) && function(t) {
if (Object.getOwnPropertyNames) return 0 === Object.getOwnPropertyNames(t).length;
var e;
for (e in t) if (t.hasOwnProperty(e)) return !1;
return !0;
}(t) || s(t) && 0 === t.length) && (t = void 0), l._isAMomentObject = !0, l._useUTC = l._isUTC = r, 
l._l = n, l._i = t, l._f = e, l._strict = i, (a = new v(fe(Ee(l))))._nextDay && (a.add(1, "d"), 
a._nextDay = void 0), a;
}
function Le(t, e, n, i) {
return Ce(t, e, n, i, !1);
}
r.createFromInputFallback = Y("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", function(t) {
t._d = new Date(t._i + (t._useUTC ? " UTC" : ""));
}), r.ISO_8601 = function() {}, r.RFC_2822 = function() {};
var Oe = Y("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
var t = Le.apply(null, arguments);
return this.isValid() && t.isValid() ? t < this ? this : t : p();
}), xe = Y("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
var t = Le.apply(null, arguments);
return this.isValid() && t.isValid() ? t > this ? this : t : p();
});
function He(t, e) {
var n, i;
if (1 === e.length && s(e[0]) && (e = e[0]), !e.length) return Le();
for (n = e[0], i = 1; i < e.length; ++i) e[i].isValid() && !e[i][t](n) || (n = e[i]);
return n;
}
var Pe = [ "year", "quarter", "month", "week", "day", "hour", "minute", "second", "millisecond" ];
function Ne(t) {
var e = A(t), n = e.year || 0, i = e.quarter || 0, r = e.month || 0, s = e.week || 0, o = e.day || 0, a = e.hour || 0, l = e.minute || 0, u = e.second || 0, c = e.millisecond || 0;
this._isValid = function(t) {
for (var e in t) if (-1 === Et.call(Pe, e) || null != t[e] && isNaN(t[e])) return !1;
for (var n = !1, i = 0; i < Pe.length; ++i) if (t[Pe[i]]) {
if (n) return !1;
parseFloat(t[Pe[i]]) !== S(t[Pe[i]]) && (n = !0);
}
return !0;
}(e), this._milliseconds = +c + 1e3 * u + 6e4 * l + 1e3 * a * 60 * 60, this._days = +o + 7 * s, 
this._months = +r + 3 * i + 12 * n, this._data = {}, this._locale = he(), this._bubble();
}
function Ae(t) {
return t instanceof Ne;
}
function We(t) {
return t < 0 ? -1 * Math.round(-1 * t) : Math.round(t);
}
function Fe(t, e) {
G(t, 0, 0, function() {
var t = this.utcOffset(), n = "+";
return t < 0 && (t = -t, n = "-"), n + R(~~(t / 60), 2) + e + R(~~t % 60, 2);
});
}
Fe("Z", ":"), Fe("ZZ", ""), ct("Z", at), ct("ZZ", at), mt([ "Z", "ZZ" ], function(t, e, n) {
n._useUTC = !0, n._tzm = je(at, t);
});
var Re = /([\+\-]|\d\d)/gi;
function je(t, e) {
var n = (e || "").match(t);
if (null === n) return null;
var i = n[n.length - 1] || [], r = (i + "").match(Re) || [ "-", 0, 0 ], s = 60 * r[1] + S(r[2]);
return 0 === s ? 0 : "+" === r[0] ? s : -s;
}
function Ue(t, e) {
var n, i;
return e._isUTC ? (n = e.clone(), i = (b(t) || u(t) ? t.valueOf() : Le(t).valueOf()) - n.valueOf(), 
n._d.setTime(n._d.valueOf() + i), r.updateOffset(n, !1), n) : Le(t).local();
}
function Ie(t) {
return 15 * -Math.round(t._d.getTimezoneOffset() / 15);
}
function ze() {
return !!this.isValid() && this._isUTC && 0 === this._offset;
}
r.updateOffset = function() {};
var Ge = /^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/, Ve = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
function qe(t, e) {
var n, i, r, s, o, a, u = t, c = null;
return Ae(t) ? u = {
ms: t._milliseconds,
d: t._days,
M: t._months
} : l(t) ? (u = {}, e ? u[e] = t : u.milliseconds = t) : (c = Ge.exec(t)) ? (n = "-" === c[1] ? -1 : 1, 
u = {
y: 0,
d: S(c[wt]) * n,
h: S(c[vt]) * n,
m: S(c[bt]) * n,
s: S(c[Mt]) * n,
ms: S(We(1e3 * c[St])) * n
}) : (c = Ve.exec(t)) ? (n = "-" === c[1] ? -1 : (c[1], 1), u = {
y: Ze(c[2], n),
M: Ze(c[3], n),
w: Ze(c[4], n),
d: Ze(c[5], n),
h: Ze(c[6], n),
m: Ze(c[7], n),
s: Ze(c[8], n)
}) : null == u ? u = {} : "object" == typeof u && ("from" in u || "to" in u) && (s = Le(u.from), 
o = Le(u.to), r = s.isValid() && o.isValid() ? (o = Ue(o, s), s.isBefore(o) ? a = Be(s, o) : ((a = Be(o, s)).milliseconds = -a.milliseconds, 
a.months = -a.months), a) : {
milliseconds: 0,
months: 0
}, (u = {}).ms = r.milliseconds, u.M = r.months), i = new Ne(u), Ae(t) && d(t, "_locale") && (i._locale = t._locale), 
i;
}
function Ze(t, e) {
var n = t && parseFloat(t.replace(",", "."));
return (isNaN(n) ? 0 : n) * e;
}
function Be(t, e) {
var n = {
milliseconds: 0,
months: 0
};
return n.months = e.month() - t.month() + 12 * (e.year() - t.year()), t.clone().add(n.months, "M").isAfter(e) && --n.months, 
n.milliseconds = +e - +t.clone().add(n.months, "M"), n;
}
function $e(t, e) {
return function(n, i) {
var r;
return null === i || isNaN(+i) || (C(e, "moment()." + e + "(period, number) is deprecated. Please use moment()." + e + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."), 
r = n, n = i, i = r), Je(this, qe(n = "string" == typeof n ? +n : n, i), t), this;
};
}
function Je(t, e, n, i) {
var s = e._milliseconds, o = We(e._days), a = We(e._months);
t.isValid() && (i = null == i || i, a && Wt(t, Ot(t, "Month") + a * n), o && xt(t, "Date", Ot(t, "Date") + o * n), 
s && t._d.setTime(t._d.valueOf() + s * n), i && r.updateOffset(t, o || a));
}
qe.fn = Ne.prototype, qe.invalid = function() {
return qe(NaN);
};
var Xe = $e(1, "add"), Ke = $e(-1, "subtract");
function Qe(t, e) {
var n, i, r = 12 * (e.year() - t.year()) + (e.month() - t.month()), s = t.clone().add(r, "months");
return e - s < 0 ? (n = t.clone().add(r - 1, "months"), i = (e - s) / (s - n)) : (n = t.clone().add(r + 1, "months"), 
i = (e - s) / (n - s)), -(r + i) || 0;
}
function tn(t) {
var e;
return void 0 === t ? this._locale._abbr : (null != (e = he(t)) && (this._locale = e), 
this);
}
r.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ", r.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
var en = Y("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function(t) {
return void 0 === t ? this.localeData() : this.locale(t);
});
function nn() {
return this._locale;
}
function rn(t, e) {
G(0, [ t, t.length ], 0, e);
}
function sn(t, e, n, i, r) {
var s;
return null == t ? Vt(this, i, r).year : (s = qt(t, i, r), e > s && (e = s), function(t, e, n, i, r) {
var s = Gt(t, e, n, i, r), o = It(s.year, 0, s.dayOfYear);
return this.year(o.getUTCFullYear()), this.month(o.getUTCMonth()), this.date(o.getUTCDate()), 
this;
}.call(this, t, e, n, i, r));
}
G(0, [ "gg", 2 ], 0, function() {
return this.weekYear() % 100;
}), G(0, [ "GG", 2 ], 0, function() {
return this.isoWeekYear() % 100;
}), rn("gggg", "weekYear"), rn("ggggg", "weekYear"), rn("GGGG", "isoWeekYear"), 
rn("GGGGG", "isoWeekYear"), P("weekYear", "gg"), P("isoWeekYear", "GG"), F("weekYear", 1), 
F("isoWeekYear", 1), ct("G", st), ct("g", st), ct("GG", K, B), ct("gg", K, B), ct("GGGG", nt, J), 
ct("gggg", nt, J), ct("GGGGG", it, X), ct("ggggg", it, X), _t([ "gggg", "ggggg", "GGGG", "GGGGG" ], function(t, e, n, i) {
e[i.substr(0, 2)] = S(t);
}), _t([ "gg", "GG" ], function(t, e, n, i) {
e[i] = r.parseTwoDigitYear(t);
}), G("Q", 0, "Qo", "quarter"), P("quarter", "Q"), F("quarter", 7), ct("Q", Z), 
mt("Q", function(t, e) {
e[gt] = 3 * (S(t) - 1);
}), G("D", [ "DD", 2 ], "Do", "date"), P("date", "D"), F("date", 9), ct("D", K), 
ct("DD", K, B), ct("Do", function(t, e) {
return t ? e._dayOfMonthOrdinalParse || e._ordinalParse : e._dayOfMonthOrdinalParseLenient;
}), mt([ "D", "DD" ], wt), mt("Do", function(t, e) {
e[wt] = S(t.match(K)[0]);
});
var on = Lt("Date", !0);
G("DDD", [ "DDDD", 3 ], "DDDo", "dayOfYear"), P("dayOfYear", "DDD"), F("dayOfYear", 4), 
ct("DDD", et), ct("DDDD", $), mt([ "DDD", "DDDD" ], function(t, e, n) {
n._dayOfYear = S(t);
}), G("m", [ "mm", 2 ], 0, "minute"), P("minute", "m"), F("minute", 14), ct("m", K), 
ct("mm", K, B), mt([ "m", "mm" ], bt);
var an = Lt("Minutes", !1);
G("s", [ "ss", 2 ], 0, "second"), P("second", "s"), F("second", 15), ct("s", K), 
ct("ss", K, B), mt([ "s", "ss" ], Mt);
var ln, un = Lt("Seconds", !1);
for (G("S", 0, 0, function() {
return ~~(this.millisecond() / 100);
}), G(0, [ "SS", 2 ], 0, function() {
return ~~(this.millisecond() / 10);
}), G(0, [ "SSS", 3 ], 0, "millisecond"), G(0, [ "SSSS", 4 ], 0, function() {
return 10 * this.millisecond();
}), G(0, [ "SSSSS", 5 ], 0, function() {
return 100 * this.millisecond();
}), G(0, [ "SSSSSS", 6 ], 0, function() {
return 1e3 * this.millisecond();
}), G(0, [ "SSSSSSS", 7 ], 0, function() {
return 1e4 * this.millisecond();
}), G(0, [ "SSSSSSSS", 8 ], 0, function() {
return 1e5 * this.millisecond();
}), G(0, [ "SSSSSSSSS", 9 ], 0, function() {
return 1e6 * this.millisecond();
}), P("millisecond", "ms"), F("millisecond", 16), ct("S", et, Z), ct("SS", et, B), 
ct("SSS", et, $), ln = "SSSS"; ln.length <= 9; ln += "S") ct(ln, rt);
function cn(t, e) {
e[St] = S(1e3 * ("0." + t));
}
for (ln = "S"; ln.length <= 9; ln += "S") mt(ln, cn);
var dn = Lt("Milliseconds", !1);
G("z", 0, 0, "zoneAbbr"), G("zz", 0, 0, "zoneName");
var hn = v.prototype;
function fn(t) {
return t;
}
hn.add = Xe, hn.calendar = function(t, e) {
var n = t || Le(), i = Ue(n, this).startOf("day"), s = r.calendarFormat(this, i) || "sameElse", o = e && (L(e[s]) ? e[s].call(this, n) : e[s]);
return this.format(o || this.localeData().calendar(s, this, Le(n)));
}, hn.clone = function() {
return new v(this);
}, hn.diff = function(t, e, n) {
var i, r, s;
if (!this.isValid()) return NaN;
if (!(i = Ue(t, this)).isValid()) return NaN;
switch (r = 6e4 * (i.utcOffset() - this.utcOffset()), e = N(e)) {
case "year":
s = Qe(this, i) / 12;
break;

case "month":
s = Qe(this, i);
break;

case "quarter":
s = Qe(this, i) / 3;
break;

case "second":
s = (this - i) / 1e3;
break;

case "minute":
s = (this - i) / 6e4;
break;

case "hour":
s = (this - i) / 36e5;
break;

case "day":
s = (this - i - r) / 864e5;
break;

case "week":
s = (this - i - r) / 6048e5;
break;

default:
s = this - i;
}
return n ? s : M(s);
}, hn.endOf = function(t) {
return void 0 === (t = N(t)) || "millisecond" === t ? this : ("date" === t && (t = "day"), 
this.startOf(t).add(1, "isoWeek" === t ? "week" : t).subtract(1, "ms"));
}, hn.format = function(t) {
t || (t = this.isUtc() ? r.defaultFormatUtc : r.defaultFormat);
var e = V(this, t);
return this.localeData().postformat(e);
}, hn.from = function(t, e) {
return this.isValid() && (b(t) && t.isValid() || Le(t).isValid()) ? qe({
to: this,
from: t
}).locale(this.locale()).humanize(!e) : this.localeData().invalidDate();
}, hn.fromNow = function(t) {
return this.from(Le(), t);
}, hn.to = function(t, e) {
return this.isValid() && (b(t) && t.isValid() || Le(t).isValid()) ? qe({
from: this,
to: t
}).locale(this.locale()).humanize(!e) : this.localeData().invalidDate();
}, hn.toNow = function(t) {
return this.to(Le(), t);
}, hn.get = function(t) {
return L(this[t = N(t)]) ? this[t]() : this;
}, hn.invalidAt = function() {
return m(this).overflow;
}, hn.isAfter = function(t, e) {
var n = b(t) ? t : Le(t);
return !(!this.isValid() || !n.isValid()) && ("millisecond" === (e = N(a(e) ? "millisecond" : e)) ? this.valueOf() > n.valueOf() : n.valueOf() < this.clone().startOf(e).valueOf());
}, hn.isBefore = function(t, e) {
var n = b(t) ? t : Le(t);
return !(!this.isValid() || !n.isValid()) && ("millisecond" === (e = N(a(e) ? "millisecond" : e)) ? this.valueOf() < n.valueOf() : this.clone().endOf(e).valueOf() < n.valueOf());
}, hn.isBetween = function(t, e, n, i) {
return ("(" === (i = i || "()")[0] ? this.isAfter(t, n) : !this.isBefore(t, n)) && (")" === i[1] ? this.isBefore(e, n) : !this.isAfter(e, n));
}, hn.isSame = function(t, e) {
var n, i = b(t) ? t : Le(t);
return !(!this.isValid() || !i.isValid()) && ("millisecond" === (e = N(e || "millisecond")) ? this.valueOf() === i.valueOf() : (n = i.valueOf(), 
this.clone().startOf(e).valueOf() <= n && n <= this.clone().endOf(e).valueOf()));
}, hn.isSameOrAfter = function(t, e) {
return this.isSame(t, e) || this.isAfter(t, e);
}, hn.isSameOrBefore = function(t, e) {
return this.isSame(t, e) || this.isBefore(t, e);
}, hn.isValid = function() {
return _(this);
}, hn.lang = en, hn.locale = tn, hn.localeData = nn, hn.max = xe, hn.min = Oe, hn.parsingFlags = function() {
return h({}, m(this));
}, hn.set = function(t, e) {
if ("object" == typeof t) for (var n = function(t) {
var e = [];
for (var n in t) e.push({
unit: n,
priority: W[n]
});
return e.sort(function(t, e) {
return t.priority - e.priority;
}), e;
}(t = A(t)), i = 0; i < n.length; i++) this[n[i].unit](t[n[i].unit]); else if (L(this[t = N(t)])) return this[t](e);
return this;
}, hn.startOf = function(t) {
switch (t = N(t)) {
case "year":
this.month(0);

case "quarter":
case "month":
this.date(1);

case "week":
case "isoWeek":
case "day":
case "date":
this.hours(0);

case "hour":
this.minutes(0);

case "minute":
this.seconds(0);

case "second":
this.milliseconds(0);
}
return "week" === t && this.weekday(0), "isoWeek" === t && this.isoWeekday(1), "quarter" === t && this.month(3 * Math.floor(this.month() / 3)), 
this;
}, hn.subtract = Ke, hn.toArray = function() {
var t = this;
return [ t.year(), t.month(), t.date(), t.hour(), t.minute(), t.second(), t.millisecond() ];
}, hn.toObject = function() {
var t = this;
return {
years: t.year(),
months: t.month(),
date: t.date(),
hours: t.hours(),
minutes: t.minutes(),
seconds: t.seconds(),
milliseconds: t.milliseconds()
};
}, hn.toDate = function() {
return new Date(this.valueOf());
}, hn.toISOString = function(t) {
if (!this.isValid()) return null;
var e = !0 !== t, n = e ? this.clone().utc() : this;
return n.year() < 0 || n.year() > 9999 ? V(n, e ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ") : L(Date.prototype.toISOString) ? e ? this.toDate().toISOString() : new Date(this.valueOf() + 60 * this.utcOffset() * 1e3).toISOString().replace("Z", V(n, "Z")) : V(n, e ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ");
}, hn.inspect = function() {
if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)";
var t = "moment", e = "";
this.isLocal() || (t = 0 === this.utcOffset() ? "https://zh.javascript.info/pack/moment.utc" : "moment.parseZone", 
e = "Z");
var n = "[" + t + '("]', i = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY", r = e + '[")]';
return this.format(n + i + "-MM-DD[T]HH:mm:ss.SSS" + r);
}, hn.toJSON = function() {
return this.isValid() ? this.toISOString() : null;
}, hn.toString = function() {
return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
}, hn.unix = function() {
return Math.floor(this.valueOf() / 1e3);
}, hn.valueOf = function() {
return this._d.valueOf() - 6e4 * (this._offset || 0);
}, hn.creationData = function() {
return {
input: this._i,
format: this._f,
locale: this._locale,
isUTC: this._isUTC,
strict: this._strict
};
}, hn.year = Ct, hn.isLeapYear = function() {
return Tt(this.year());
}, hn.weekYear = function(t) {
return sn.call(this, t, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy);
}, hn.isoWeekYear = function(t) {
return sn.call(this, t, this.isoWeek(), this.isoWeekday(), 1, 4);
}, hn.quarter = hn.quarters = function(t) {
return null == t ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (t - 1) + this.month() % 3);
}, hn.month = Ft, hn.daysInMonth = function() {
return Ht(this.year(), this.month());
}, hn.week = hn.weeks = function(t) {
var e = this.localeData().week(this);
return null == t ? e : this.add(7 * (t - e), "d");
}, hn.isoWeek = hn.isoWeeks = function(t) {
var e = Vt(this, 1, 4).week;
return null == t ? e : this.add(7 * (t - e), "d");
}, hn.weeksInYear = function() {
var t = this.localeData()._week;
return qt(this.year(), t.dow, t.doy);
}, hn.isoWeeksInYear = function() {
return qt(this.year(), 1, 4);
}, hn.date = on, hn.day = hn.days = function(t) {
if (!this.isValid()) return null != t ? this : NaN;
var e = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
return null != t ? (t = function(t, e) {
return "string" != typeof t ? t : isNaN(t) ? "number" == typeof (t = e.weekdaysParse(t)) ? t : null : parseInt(t, 10);
}(t, this.localeData()), this.add(t - e, "d")) : e;
}, hn.weekday = function(t) {
if (!this.isValid()) return null != t ? this : NaN;
var e = (this.day() + 7 - this.localeData()._week.dow) % 7;
return null == t ? e : this.add(t - e, "d");
}, hn.isoWeekday = function(t) {
if (!this.isValid()) return null != t ? this : NaN;
if (null != t) {
var e = function(t, e) {
return "string" == typeof t ? e.weekdaysParse(t) % 7 || 7 : isNaN(t) ? null : t;
}(t, this.localeData());
return this.day(this.day() % 7 ? e : e - 7);
}
return this.day() || 7;
}, hn.dayOfYear = function(t) {
var e = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
return null == t ? e : this.add(t - e, "d");
}, hn.hour = hn.hours = re, hn.minute = hn.minutes = an, hn.second = hn.seconds = un, 
hn.millisecond = hn.milliseconds = dn, hn.utcOffset = function(t, e, n) {
var i, s = this._offset || 0;
if (!this.isValid()) return null != t ? this : NaN;
if (null != t) {
if ("string" == typeof t) {
if (null === (t = je(at, t))) return this;
} else Math.abs(t) < 16 && !n && (t *= 60);
return !this._isUTC && e && (i = Ie(this)), this._offset = t, this._isUTC = !0, 
null != i && this.add(i, "m"), s !== t && (!e || this._changeInProgress ? Je(this, qe(t - s, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, 
r.updateOffset(this, !0), this._changeInProgress = null)), this;
}
return this._isUTC ? s : Ie(this);
}, hn.utc = function(t) {
return this.utcOffset(0, t);
}, hn.local = function(t) {
return this._isUTC && (this.utcOffset(0, t), this._isUTC = !1, t && this.subtract(Ie(this), "m")), 
this;
}, hn.parseZone = function() {
if (null != this._tzm) this.utcOffset(this._tzm, !1, !0); else if ("string" == typeof this._i) {
var t = je(ot, this._i);
null != t ? this.utcOffset(t) : this.utcOffset(0, !0);
}
return this;
}, hn.hasAlignedHourOffset = function(t) {
return !!this.isValid() && (t = t ? Le(t).utcOffset() : 0, (this.utcOffset() - t) % 60 == 0);
}, hn.isDST = function() {
return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
}, hn.isLocal = function() {
return !!this.isValid() && !this._isUTC;
}, hn.isUtcOffset = function() {
return !!this.isValid() && this._isUTC;
}, hn.isUtc = ze, hn.isUTC = ze, hn.zoneAbbr = function() {
return this._isUTC ? "UTC" : "";
}, hn.zoneName = function() {
return this._isUTC ? "Coordinated Universal Time" : "";
}, hn.dates = Y("dates accessor is deprecated. Use date instead.", on), hn.months = Y("months accessor is deprecated. Use month instead", Ft), 
hn.years = Y("years accessor is deprecated. Use year instead", Ct), hn.zone = Y("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", function(t, e) {
return null != t ? ("string" != typeof t && (t = -t), this.utcOffset(t, e), this) : -this.utcOffset();
}), hn.isDSTShifted = Y("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", function() {
if (!a(this._isDSTShifted)) return this._isDSTShifted;
var t = {};
if (g(t, this), (t = Ee(t))._a) {
var e = t._isUTC ? f(t._a) : Le(t._a);
this._isDSTShifted = this.isValid() && D(t._a, e.toArray()) > 0;
} else this._isDSTShifted = !1;
return this._isDSTShifted;
});
var mn = x.prototype;
function _n(t, e, n, i) {
var r = he(), s = f().set(i, e);
return r[n](s, t);
}
function pn(t, e, n) {
if (l(t) && (e = t, t = void 0), t = t || "", null != e) return _n(t, e, n, "month");
var i, r = [];
for (i = 0; i < 12; i++) r[i] = _n(t, i, n, "month");
return r;
}
function yn(t, e, n, i) {
"boolean" == typeof t ? (l(e) && (n = e, e = void 0), e = e || "") : (n = e = t, 
t = !1, l(e) && (n = e, e = void 0), e = e || "");
var r, s = he(), o = t ? s._week.dow : 0;
if (null != n) return _n(e, (n + o) % 7, i, "day");
var a = [];
for (r = 0; r < 7; r++) a[r] = _n(e, (r + o) % 7, i, "day");
return a;
}
mn.calendar = function(t, e, n) {
var i = this._calendar[t] || this._calendar.sameElse;
return L(i) ? i.call(e, n) : i;
}, mn.longDateFormat = function(t) {
var e = this._longDateFormat[t], n = this._longDateFormat[t.toUpperCase()];
return e || !n ? e : (this._longDateFormat[t] = n.replace(/MMMM|MM|DD|dddd/g, function(t) {
return t.slice(1);
}), this._longDateFormat[t]);
}, mn.invalidDate = function() {
return this._invalidDate;
}, mn.ordinal = function(t) {
return this._ordinal.replace("%d", t);
}, mn.preparse = fn, mn.postformat = fn, mn.relativeTime = function(t, e, n, i) {
var r = this._relativeTime[n];
return L(r) ? r(t, e, n, i) : r.replace(/%d/i, t);
}, mn.pastFuture = function(t, e) {
var n = this._relativeTime[t > 0 ? "future" : "past"];
return L(n) ? n(e) : n.replace(/%s/i, e);
}, mn.set = function(t) {
var e, n;
for (n in t) L(e = t[n]) ? this[n] = e : this["_" + n] = e;
this._config = t, this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source);
}, mn.months = function(t, e) {
return t ? s(this._months) ? this._months[t.month()] : this._months[(this._months.isFormat || Pt).test(e) ? "format" : "standalone"][t.month()] : s(this._months) ? this._months : this._months.standalone;
}, mn.monthsShort = function(t, e) {
return t ? s(this._monthsShort) ? this._monthsShort[t.month()] : this._monthsShort[Pt.test(e) ? "format" : "standalone"][t.month()] : s(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone;
}, mn.monthsParse = function(t, e, n) {
var i, r, s;
if (this._monthsParseExact) return function(t, e, n) {
var i, r, s, o = t.toLocaleLowerCase();
if (!this._monthsParse) for (this._monthsParse = [], this._longMonthsParse = [], 
this._shortMonthsParse = [], i = 0; i < 12; ++i) s = f([ 2e3, i ]), this._shortMonthsParse[i] = this.monthsShort(s, "").toLocaleLowerCase(), 
this._longMonthsParse[i] = this.months(s, "").toLocaleLowerCase();
return n ? "MMM" === e ? -1 !== (r = Et.call(this._shortMonthsParse, o)) ? r : null : -1 !== (r = Et.call(this._longMonthsParse, o)) ? r : null : "MMM" === e ? -1 !== (r = Et.call(this._shortMonthsParse, o)) ? r : -1 !== (r = Et.call(this._longMonthsParse, o)) ? r : null : -1 !== (r = Et.call(this._longMonthsParse, o)) ? r : -1 !== (r = Et.call(this._shortMonthsParse, o)) ? r : null;
}.call(this, t, e, n);
for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), 
i = 0; i < 12; i++) {
if (r = f([ 2e3, i ]), n && !this._longMonthsParse[i] && (this._longMonthsParse[i] = new RegExp("^" + this.months(r, "").replace(".", "") + "$", "i"), 
this._shortMonthsParse[i] = new RegExp("^" + this.monthsShort(r, "").replace(".", "") + "$", "i")), 
n || this._monthsParse[i] || (s = "^" + this.months(r, "") + "|^" + this.monthsShort(r, ""), 
this._monthsParse[i] = new RegExp(s.replace(".", ""), "i")), n && "MMMM" === e && this._longMonthsParse[i].test(t)) return i;
if (n && "MMM" === e && this._shortMonthsParse[i].test(t)) return i;
if (!n && this._monthsParse[i].test(t)) return i;
}
}, mn.monthsRegex = function(t) {
return this._monthsParseExact ? (d(this, "_monthsRegex") || Ut.call(this), t ? this._monthsStrictRegex : this._monthsRegex) : (d(this, "_monthsRegex") || (this._monthsRegex = jt), 
this._monthsStrictRegex && t ? this._monthsStrictRegex : this._monthsRegex);
}, mn.monthsShortRegex = function(t) {
return this._monthsParseExact ? (d(this, "_monthsRegex") || Ut.call(this), t ? this._monthsShortStrictRegex : this._monthsShortRegex) : (d(this, "_monthsShortRegex") || (this._monthsShortRegex = Rt), 
this._monthsShortStrictRegex && t ? this._monthsShortStrictRegex : this._monthsShortRegex);
}, mn.week = function(t) {
return Vt(t, this._week.dow, this._week.doy).week;
}, mn.firstDayOfYear = function() {
return this._week.doy;
}, mn.firstDayOfWeek = function() {
return this._week.dow;
}, mn.weekdays = function(t, e) {
return t ? s(this._weekdays) ? this._weekdays[t.day()] : this._weekdays[this._weekdays.isFormat.test(e) ? "format" : "standalone"][t.day()] : s(this._weekdays) ? this._weekdays : this._weekdays.standalone;
}, mn.weekdaysMin = function(t) {
return t ? this._weekdaysMin[t.day()] : this._weekdaysMin;
}, mn.weekdaysShort = function(t) {
return t ? this._weekdaysShort[t.day()] : this._weekdaysShort;
}, mn.weekdaysParse = function(t, e, n) {
var i, r, s;
if (this._weekdaysParseExact) return function(t, e, n) {
var i, r, s, o = t.toLocaleLowerCase();
if (!this._weekdaysParse) for (this._weekdaysParse = [], this._shortWeekdaysParse = [], 
this._minWeekdaysParse = [], i = 0; i < 7; ++i) s = f([ 2e3, 1 ]).day(i), this._minWeekdaysParse[i] = this.weekdaysMin(s, "").toLocaleLowerCase(), 
this._shortWeekdaysParse[i] = this.weekdaysShort(s, "").toLocaleLowerCase(), this._weekdaysParse[i] = this.weekdays(s, "").toLocaleLowerCase();
return n ? "dddd" === e ? -1 !== (r = Et.call(this._weekdaysParse, o)) ? r : null : "ddd" === e ? -1 !== (r = Et.call(this._shortWeekdaysParse, o)) ? r : null : -1 !== (r = Et.call(this._minWeekdaysParse, o)) ? r : null : "dddd" === e ? -1 !== (r = Et.call(this._weekdaysParse, o)) ? r : -1 !== (r = Et.call(this._shortWeekdaysParse, o)) ? r : -1 !== (r = Et.call(this._minWeekdaysParse, o)) ? r : null : "ddd" === e ? -1 !== (r = Et.call(this._shortWeekdaysParse, o)) ? r : -1 !== (r = Et.call(this._weekdaysParse, o)) ? r : -1 !== (r = Et.call(this._minWeekdaysParse, o)) ? r : null : -1 !== (r = Et.call(this._minWeekdaysParse, o)) ? r : -1 !== (r = Et.call(this._weekdaysParse, o)) ? r : -1 !== (r = Et.call(this._shortWeekdaysParse, o)) ? r : null;
}.call(this, t, e, n);
for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], 
this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), i = 0; i < 7; i++) {
if (r = f([ 2e3, 1 ]).day(i), n && !this._fullWeekdaysParse[i] && (this._fullWeekdaysParse[i] = new RegExp("^" + this.weekdays(r, "").replace(".", "\\.?") + "$", "i"), 
this._shortWeekdaysParse[i] = new RegExp("^" + this.weekdaysShort(r, "").replace(".", "\\.?") + "$", "i"), 
this._minWeekdaysParse[i] = new RegExp("^" + this.weekdaysMin(r, "").replace(".", "\\.?") + "$", "i")), 
this._weekdaysParse[i] || (s = "^" + this.weekdays(r, "") + "|^" + this.weekdaysShort(r, "") + "|^" + this.weekdaysMin(r, ""), 
this._weekdaysParse[i] = new RegExp(s.replace(".", ""), "i")), n && "dddd" === e && this._fullWeekdaysParse[i].test(t)) return i;
if (n && "ddd" === e && this._shortWeekdaysParse[i].test(t)) return i;
if (n && "dd" === e && this._minWeekdaysParse[i].test(t)) return i;
if (!n && this._weekdaysParse[i].test(t)) return i;
}
}, mn.weekdaysRegex = function(t) {
return this._weekdaysParseExact ? (d(this, "_weekdaysRegex") || Qt.call(this), t ? this._weekdaysStrictRegex : this._weekdaysRegex) : (d(this, "_weekdaysRegex") || (this._weekdaysRegex = Jt), 
this._weekdaysStrictRegex && t ? this._weekdaysStrictRegex : this._weekdaysRegex);
}, mn.weekdaysShortRegex = function(t) {
return this._weekdaysParseExact ? (d(this, "_weekdaysRegex") || Qt.call(this), t ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (d(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = Xt), 
this._weekdaysShortStrictRegex && t ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex);
}, mn.weekdaysMinRegex = function(t) {
return this._weekdaysParseExact ? (d(this, "_weekdaysRegex") || Qt.call(this), t ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (d(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = Kt), 
this._weekdaysMinStrictRegex && t ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex);
}, mn.isPM = function(t) {
return "p" === (t + "").toLowerCase().charAt(0);
}, mn.meridiem = function(t, e, n) {
return t > 11 ? n ? "pm" : "PM" : n ? "am" : "AM";
}, ce("en", {
dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
ordinal: function(t) {
var e = t % 10, n = 1 === S(t % 100 / 10) ? "th" : 1 === e ? "st" : 2 === e ? "nd" : 3 === e ? "rd" : "th";
return t + n;
}
}), r.lang = Y("moment.lang is deprecated. Use moment.locale instead.", ce), r.langData = Y("moment.langData is deprecated. Use moment.localeData instead.", he);
var gn = Math.abs;
function wn(t, e, n, i) {
var r = qe(e, n);
return t._milliseconds += i * r._milliseconds, t._days += i * r._days, t._months += i * r._months, 
t._bubble();
}
function vn(t) {
return t < 0 ? Math.floor(t) : Math.ceil(t);
}
function bn(t) {
return 4800 * t / 146097;
}
function Mn(t) {
return 146097 * t / 4800;
}
function Sn(t) {
return function() {
return this.as(t);
};
}
var Dn = Sn("ms"), kn = Sn("s"), Yn = Sn("m"), Tn = Sn("h"), En = Sn("d"), Cn = Sn("w"), Ln = Sn("M"), On = Sn("y");
function xn(t) {
return function() {
return this.isValid() ? this._data[t] : NaN;
};
}
var Hn = xn("milliseconds"), Pn = xn("seconds"), Nn = xn("minutes"), An = xn("hours"), Wn = xn("days"), Fn = xn("months"), Rn = xn("years"), jn = Math.round, Un = {
ss: 44,
s: 45,
m: 45,
h: 22,
d: 26,
M: 11
}, In = Math.abs;
function zn(t) {
return (t > 0) - (t < 0) || +t;
}
function Gn() {
if (!this.isValid()) return this.localeData().invalidDate();
var t, e, n = In(this._milliseconds) / 1e3, i = In(this._days), r = In(this._months);
t = M(n / 60), e = M(t / 60), n %= 60, t %= 60;
var s = M(r / 12), o = r %= 12, a = i, l = e, u = t, c = n ? n.toFixed(3).replace(/\.?0+$/, "") : "", d = this.asSeconds();
if (!d) return "P0D";
var h = d < 0 ? "-" : "", f = zn(this._months) !== zn(d) ? "-" : "", m = zn(this._days) !== zn(d) ? "-" : "", _ = zn(this._milliseconds) !== zn(d) ? "-" : "";
return h + "P" + (s ? f + s + "Y" : "") + (o ? f + o + "M" : "") + (a ? m + a + "D" : "") + (l || u || c ? "T" : "") + (l ? _ + l + "H" : "") + (u ? _ + u + "M" : "") + (c ? _ + c + "S" : "");
}
var Vn = Ne.prototype;
return Vn.isValid = function() {
return this._isValid;
}, Vn.abs = function() {
var t = this._data;
return this._milliseconds = gn(this._milliseconds), this._days = gn(this._days), 
this._months = gn(this._months), t.milliseconds = gn(t.milliseconds), t.seconds = gn(t.seconds), 
t.minutes = gn(t.minutes), t.hours = gn(t.hours), t.months = gn(t.months), t.years = gn(t.years), 
this;
}, Vn.add = function(t, e) {
return wn(this, t, e, 1);
}, Vn.subtract = function(t, e) {
return wn(this, t, e, -1);
}, Vn.as = function(t) {
if (!this.isValid()) return NaN;
var e, n, i = this._milliseconds;
if ("month" === (t = N(t)) || "year" === t) return e = this._days + i / 864e5, n = this._months + bn(e), 
"month" === t ? n : n / 12;
switch (e = this._days + Math.round(Mn(this._months)), t) {
case "week":
return e / 7 + i / 6048e5;

case "day":
return e + i / 864e5;

case "hour":
return 24 * e + i / 36e5;

case "minute":
return 1440 * e + i / 6e4;

case "second":
return 86400 * e + i / 1e3;

case "millisecond":
return Math.floor(864e5 * e) + i;

default:
throw new Error("Unknown unit " + t);
}
}, Vn.asMilliseconds = Dn, Vn.asSeconds = kn, Vn.asMinutes = Yn, Vn.asHours = Tn, 
Vn.asDays = En, Vn.asWeeks = Cn, Vn.asMonths = Ln, Vn.asYears = On, Vn.valueOf = function() {
return this.isValid() ? this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * S(this._months / 12) : NaN;
}, Vn._bubble = function() {
var t, e, n, i, r, s = this._milliseconds, o = this._days, a = this._months, l = this._data;
return s >= 0 && o >= 0 && a >= 0 || s <= 0 && o <= 0 && a <= 0 || (s += 864e5 * vn(Mn(a) + o), 
o = 0, a = 0), l.milliseconds = s % 1e3, t = M(s / 1e3), l.seconds = t % 60, e = M(t / 60), 
l.minutes = e % 60, n = M(e / 60), l.hours = n % 24, o += M(n / 24), r = M(bn(o)), 
a += r, o -= vn(Mn(r)), i = M(a / 12), a %= 12, l.days = o, l.months = a, l.years = i, 
this;
}, Vn.clone = function() {
return qe(this);
}, Vn.get = function(t) {
return t = N(t), this.isValid() ? this[t + "s"]() : NaN;
}, Vn.milliseconds = Hn, Vn.seconds = Pn, Vn.minutes = Nn, Vn.hours = An, Vn.days = Wn, 
Vn.weeks = function() {
return M(this.days() / 7);
}, Vn.months = Fn, Vn.years = Rn, Vn.humanize = function(t) {
if (!this.isValid()) return this.localeData().invalidDate();
var e = this.localeData(), n = function(t, e, n) {
var i = qe(t).abs(), r = jn(i.as("s")), s = jn(i.as("m")), o = jn(i.as("h")), a = jn(i.as("d")), l = jn(i.as("M")), u = jn(i.as("y")), c = r <= Un.ss && [ "s", r ] || r < Un.s && [ "ss", r ] || s <= 1 && [ "m" ] || s < Un.m && [ "mm", s ] || o <= 1 && [ "h" ] || o < Un.h && [ "hh", o ] || a <= 1 && [ "d" ] || a < Un.d && [ "dd", a ] || l <= 1 && [ "M" ] || l < Un.M && [ "MM", l ] || u <= 1 && [ "y" ] || [ "yy", u ];
return c[2] = e, c[3] = +t > 0, c[4] = n, function(t, e, n, i, r) {
return r.relativeTime(e || 1, !!n, t, i);
}.apply(null, c);
}(this, !t, e);
return t && (n = e.pastFuture(+this, n)), e.postformat(n);
}, Vn.toISOString = Gn, Vn.toString = Gn, Vn.toJSON = Gn, Vn.locale = tn, Vn.localeData = nn, 
Vn.toIsoString = Y("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", Gn), 
Vn.lang = en, G("X", 0, 0, "unix"), G("x", 0, 0, "valueOf"), ct("x", st), ct("X", /[+-]?\d+(\.\d{1,3})?/), 
mt("X", function(t, e, n) {
n._d = new Date(1e3 * parseFloat(t, 10));
}), mt("x", function(t, e, n) {
n._d = new Date(S(t));
}), r.version = "2.22.2", e = Le, r.fn = hn, r.min = function() {
return He("isBefore", [].slice.call(arguments, 0));
}, r.max = function() {
return He("isAfter", [].slice.call(arguments, 0));
}, r.now = function() {
return Date.now ? Date.now() : +new Date();
}, r.utc = f, r.unix = function(t) {
return Le(1e3 * t);
}, r.months = function(t, e) {
return pn(t, e, "months");
}, r.isDate = u, r.locale = ce, r.invalid = p, r.duration = qe, r.isMoment = b, 
r.weekdays = function(t, e, n) {
return yn(t, e, n, "weekdays");
}, r.parseZone = function() {
return Le.apply(null, arguments).parseZone();
}, r.localeData = he, r.isDuration = Ae, r.monthsShort = function(t, e) {
return pn(t, e, "monthsShort");
}, r.weekdaysMin = function(t, e, n) {
return yn(t, e, n, "weekdaysMin");
}, r.defineLocale = de, r.updateLocale = function(t, e) {
if (null != e) {
var n, i, r = se;
null != (i = ue(t)) && (r = i._config), e = O(r, e), (n = new x(e)).parentLocale = oe[t], 
oe[t] = n, ce(t);
} else null != oe[t] && (null != oe[t].parentLocale ? oe[t] = oe[t].parentLocale : null != oe[t] && delete oe[t]);
return oe[t];
}, r.locales = function() {
return T(oe);
}, r.weekdaysShort = function(t, e, n) {
return yn(t, e, n, "weekdaysShort");
}, r.normalizeUnits = N, r.relativeTimeRounding = function(t) {
return void 0 === t ? jn : "function" == typeof t && (jn = t, !0);
}, r.relativeTimeThreshold = function(t, e) {
return void 0 !== Un[t] && (void 0 === e ? Un[t] : (Un[t] = e, "s" === t && (Un.ss = e - 1), 
!0));
}, r.calendarFormat = function(t, e) {
var n = t.diff(e, "days", !0);
return n < -6 ? "sameElse" : n < -1 ? "lastWeek" : n < 0 ? "lastDay" : n < 1 ? "sameDay" : n < 2 ? "nextDay" : n < 7 ? "nextWeek" : "sameElse";
}, r.prototype = hn, r.HTML5_FMT = {
DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
DATE: "YYYY-MM-DD",
TIME: "HH:mm",
TIME_SECONDS: "HH:mm:ss",
TIME_MS: "HH:mm:ss.SSS",
WEEK: "YYYY-[W]WW",
MONTH: "YYYY-MM"
}, r;
}();
}).call(this, n(40)(t));
},
14: function(t, e, n) {
"use strict";
function i(t) {
if (t = t || {}, this.elem = t.elem, this.size = t.size || "medium", this.class = t.class ? " " + t.class : "", 
this.elemClass = t.elemClass, "medium" != this.size && "small" != this.size && "large" != this.size) throw new Error("Unsupported size: " + this.size);
this.elem || (this.elem = document.createElement("div"));
}
i.prototype.start = function() {
this.elemClass && this.elem.classList.toggle(this.elemClass), this.elem.insertAdjacentHTML("beforeend", '<span class="spinner spinner_active spinner_' + this.size + this.class + '"><span class="spinner__dot spinner__dot_1"></span><span class="spinner__dot spinner__dot_2"></span><span class="spinner__dot spinner__dot_3"></span></span>');
}, i.prototype.stop = function() {
let t = this.elem.querySelector(".spinner");
t && (t.remove(), this.elemClass && this.elem.classList.toggle(this.elemClass));
}, window.Spinner = i, t.exports = i;
},
22: function(t, e, n) {
"use strict";
const i = n(0).lang;
let r = n(12);
"ru" === i ? (n(67), r.updateLocale("ru", {
monthsShort: {
format: "янв_февр_мар_апр_мая_июня_июля_авг_сент_окт_нояб_дек".split("_"),
standalone: "янв_февр_март_апр_май_июнь_июль_авг_сент_окт_нояб_дек".split("_")
}
})) : "zh" === i ? n(23) : "en" !== i && n(32)("./" + i), t.exports = r;
},
23: function(t, e, n) {
"use strict";
n(12).defineLocale("zh-cn", {
months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
weekdaysShort: "周日_周一_周二_周三_周四_周五_周六".split("_"),
weekdaysMin: "日_一_二_三_四_五_六".split("_"),
longDateFormat: {
LT: "HH:mm",
LTS: "HH:mm:ss",
L: "YYYY/MM/DD",
LL: "YYYY年M月D日",
LLL: "YYYY年M月D日Ah点mm分",
LLLL: "YYYY年M月D日ddddAh点mm分",
l: "YYYY/M/D",
ll: "YYYY年M月D日",
lll: "YYYY年M月D日 HH:mm",
llll: "YYYY年M月D日dddd HH:mm"
},
meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
meridiemHour: function(t, e) {
return 12 === t && (t = 0), "凌晨" === e || "早上" === e || "上午" === e ? t : "下午" === e || "晚上" === e ? t + 12 : t >= 11 ? t : t + 12;
},
meridiem: function(t, e, n) {
var i = 100 * t + e;
return i < 600 ? "凌晨" : i < 900 ? "早上" : i < 1130 ? "上午" : i < 1230 ? "中午" : i < 1800 ? "下午" : "晚上";
},
calendar: {
sameDay: "[今天]LT",
nextDay: "[明天]LT",
nextWeek: "[下]ddddLT",
lastDay: "[昨天]LT",
lastWeek: "[上]ddddLT",
sameElse: "L"
},
dayOfMonthOrdinalParse: /\d{1,2}(日|月|周)/,
ordinal: function(t, e) {
switch (e) {
case "d":
case "D":
case "DDD":
return t + "日";

case "M":
return t + "月";

case "w":
case "W":
return t + "周";

default:
return t;
}
},
relativeTime: {
future: "%s内",
past: "%s前",
s: "几秒",
ss: "%d 秒",
m: "1 分钟",
mm: "%d 分钟",
h: "1 小时",
hh: "%d 小时",
d: "1 天",
dd: "%d 天",
M: "1 个月",
MM: "%d 个月",
y: "1 年",
yy: "%d 年"
},
week: {
dow: 1,
doy: 4
}
});
},
247: function(t, e, n) {
"use strict";
n(248), e.login = n(256), n(257), e.resizeOnload = n(52), n(258), n(259), n(260), 
n(261), n(263), n(264), n(265), n(3).init(), n(266), n(267);
},
248: function(t, e, n) {
"use strict";
n(249), n(255);
},
249: function(t, e, n) {
"use strict";
function i(t) {
if (t.length) {
if (1 === t.length) return "string" == typeof t[0] ? document.createTextNode(t[0]) : t[0];
{
let e, n = document.createDocumentFragment(), i = t.length, r = -1;
for (;++r < i; ) e = t[r], n.appendChild("string" == typeof e ? document.createTextNode(e) : e);
return n;
}
}
throw new Error("DOM Exception 8");
}
let r = {
matches: Element.prototype.matchesSelector || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector,
replace() {
this.parentNode && this.parentNode.replaceChild(i(arguments), this);
},
prepend() {
this.insertBefore(i(arguments), this.firstChild);
},
append() {
this.appendChild(i(arguments));
},
remove() {
let t = this.parentNode;
if (t) return t.removeChild(this);
},
before: function() {
this.parentNode && this.parentNode.insertBefore(i(arguments), this);
},
after: function() {
this.parentNode && this.parentNode.insertBefore(i(arguments), this.nextSibling);
},
closest: function(t) {
let e = this;
for (;e; ) {
if (e.matches && e.matches(t)) return e;
e = e.parentElement;
}
return null;
}
};
for (let t in r) Element.prototype[t] || (Element.prototype[t] = r[t]);
n(250), n(251), n(252), n(253), n(254);
},
250: function(t, e, n) {
"use strict";
try {
new CustomEvent("IE has CustomEvent, but doesn't support constructor");
} catch (t) {
window.CustomEvent = function(t, e) {
let n;
return e = e || {
bubbles: !1,
cancelable: !1,
detail: void 0
}, (n = document.createEvent("CustomEvent")).initCustomEvent(t, e.bubbles, e.cancelable, e.detail), 
n;
}, CustomEvent.prototype = Object.create(window.Event.prototype);
}
},
251: function(t, e, n) {
"use strict";
if (!(document.documentElement.dataset || Object.getOwnPropertyDescriptor(Element.prototype, "dataset") && Object.getOwnPropertyDescriptor(Element.prototype, "dataset").get)) {
let t = {
enumerable: !0,
get: function() {
let t, e, n, i, r, s, o = this, a = this.attributes, l = a.length, u = function(t) {
return t.charAt(1).toUpperCase();
}, c = function() {
return this;
}, d = function(t, e) {
return void 0 !== e ? this.setAttribute(t, e) : this.removeAttribute(t);
};
try {
({}).__defineGetter__("test", function() {}), e = {};
} catch (t) {
e = document.createElement("div");
}
for (t = 0; t < l; t++) if ((s = a[t]) && s.name && /^data-\w[\w\-]*$/.test(s.name)) {
n = s.value, r = (i = s.name).substr(5).replace(/-./g, u);
try {
Object.defineProperty(e, r, {
enumerable: this.enumerable,
get: c.bind(n || ""),
set: d.bind(o, i)
});
} catch (t) {
e[r] = n;
}
}
return e;
}
};
try {
Object.defineProperty(Element.prototype, "dataset", t);
} catch (e) {
t.enumerable = !1, Object.defineProperty(Element.prototype, "dataset", t);
}
}
},
252: function(t, e, n) {
"use strict";
void 0 === document.documentElement.hidden && (document.head.insertAdjacentHTML("beforeEnd", "<style> [hidden] { display: none } </style>"), 
Object.defineProperty(Element.prototype, "hidden", {
set: function(t) {
this.setAttribute("hidden", t);
},
get: function() {
return this.getAttribute("hidden");
}
}));
},
253: function(t, e, n) {
"use strict";
!function() {
let t = 0;
window.requestAnimationFrame || (window.requestAnimationFrame = function(e, n) {
let i = new Date().getTime(), r = Math.max(0, 16 - (i - t)), s = window.setTimeout(function() {
e(i + r);
}, r);
return t = i + r, s;
}), window.cancelAnimationFrame || (window.cancelAnimationFrame = function(t) {
clearTimeout(t);
});
}();
},
254: function(t, e, n) {
"use strict";
(function() {
var t = new Set("annotation-xml color-profile font-face font-face-src font-face-uri font-face-format font-face-name missing-glyph".split(" "));
function e(e) {
var n = t.has(e);
return e = /^[a-z][.0-9_a-z]*-[\-.0-9_a-z]*$/.test(e), !n && e;
}
function n(t) {
var e = t.isConnected;
if (void 0 !== e) return e;
for (;t && !(t.__CE_isImportDocument || t instanceof Document); ) t = t.parentNode || (window.ShadowRoot && t instanceof ShadowRoot ? t.host : void 0);
return !(!t || !(t.__CE_isImportDocument || t instanceof Document));
}
function i(t, e) {
for (;e && e !== t && !e.nextSibling; ) e = e.parentNode;
return e && e !== t ? e.nextSibling : null;
}
function r(t, e, n) {
n = void 0 === n ? new Set() : n;
for (var s = t; s; ) {
if (s.nodeType === Node.ELEMENT_NODE) {
var o = s;
e(o);
var a = o.localName;
if ("link" === a && "import" === o.getAttribute("rel")) {
if ((s = o.import) instanceof Node && !n.has(s)) for (n.add(s), s = s.firstChild; s; s = s.nextSibling) r(s, e, n);
s = i(t, o);
continue;
}
if ("template" === a) {
s = i(t, o);
continue;
}
if (o = o.__CE_shadowRoot) for (o = o.firstChild; o; o = o.nextSibling) r(o, e, n);
}
s = s.firstChild ? s.firstChild : i(t, s);
}
}
function s(t, e, n) {
t[e] = n;
}
function o() {
this.a = new Map(), this.f = new Map(), this.c = [], this.b = !1;
}
function a(t, e) {
t.b = !0, t.c.push(e);
}
function l(t, e) {
t.b && r(e, function(e) {
return u(t, e);
});
}
function u(t, e) {
if (t.b && !e.__CE_patched) {
e.__CE_patched = !0;
for (var n = 0; n < t.c.length; n++) t.c[n](e);
}
}
function c(t, e) {
var n = [];
for (r(e, function(t) {
return n.push(t);
}), e = 0; e < n.length; e++) {
var i = n[e];
1 === i.__CE_state ? t.connectedCallback(i) : f(t, i);
}
}
function d(t, e) {
var n = [];
for (r(e, function(t) {
return n.push(t);
}), e = 0; e < n.length; e++) {
var i = n[e];
1 === i.__CE_state && t.disconnectedCallback(i);
}
}
function h(t, e, n) {
var i = (n = void 0 === n ? {} : n).u || new Set(), s = n.h || function(e) {
return f(t, e);
}, o = [];
if (r(e, function(e) {
if ("link" === e.localName && "import" === e.getAttribute("rel")) {
var n = e.import;
n instanceof Node && (n.__CE_isImportDocument = !0, n.__CE_hasRegistry = !0), n && "complete" === n.readyState ? n.__CE_documentLoadHandled = !0 : e.addEventListener("load", function() {
var n = e.import;
if (!n.__CE_documentLoadHandled) {
n.__CE_documentLoadHandled = !0;
var r = new Set(i);
r.delete(n), h(t, n, {
u: r,
h: s
});
}
});
} else o.push(e);
}, i), t.b) for (e = 0; e < o.length; e++) u(t, o[e]);
for (e = 0; e < o.length; e++) s(o[e]);
}
function f(t, e) {
if (void 0 === e.__CE_state) {
var i = e.ownerDocument;
if ((i.defaultView || i.__CE_isImportDocument && i.__CE_hasRegistry) && (i = t.a.get(e.localName))) {
i.constructionStack.push(e);
var r = i.constructorFunction;
try {
try {
if (new r() !== e) throw Error("The custom element constructor did not produce the element being upgraded.");
} finally {
i.constructionStack.pop();
}
} catch (t) {
throw e.__CE_state = 2, t;
}
if (e.__CE_state = 1, e.__CE_definition = i, i.attributeChangedCallback) for (i = i.observedAttributes, 
r = 0; r < i.length; r++) {
var s = i[r], o = e.getAttribute(s);
null !== o && t.attributeChangedCallback(e, s, null, o, null);
}
n(e) && t.connectedCallback(e);
}
}
}
function m(t) {
var e = document;
this.c = t, this.a = e, this.b = void 0, h(this.c, this.a), "loading" === this.a.readyState && (this.b = new MutationObserver(this.f.bind(this)), 
this.b.observe(this.a, {
childList: !0,
subtree: !0
}));
}
function _(t) {
t.b && t.b.disconnect();
}
function p(t) {
if (t.a) throw Error("Already resolved.");
t.a = void 0, t.b && t.b(void 0);
}
function y(t) {
this.c = !1, this.a = t, this.j = new Map(), this.f = function(t) {
return t();
}, this.b = !1, this.i = [], this.o = new m(t);
}
o.prototype.connectedCallback = function(t) {
var e = t.__CE_definition;
e.connectedCallback && e.connectedCallback.call(t);
}, o.prototype.disconnectedCallback = function(t) {
var e = t.__CE_definition;
e.disconnectedCallback && e.disconnectedCallback.call(t);
}, o.prototype.attributeChangedCallback = function(t, e, n, i, r) {
var s = t.__CE_definition;
s.attributeChangedCallback && -1 < s.observedAttributes.indexOf(e) && s.attributeChangedCallback.call(t, e, n, i, r);
}, m.prototype.f = function(t) {
var e = this.a.readyState;
for ("interactive" !== e && "complete" !== e || _(this), e = 0; e < t.length; e++) for (var n = t[e].addedNodes, i = 0; i < n.length; i++) h(this.c, n[i]);
}, y.prototype.l = function(t, n) {
var i = this;
if (!(n instanceof Function)) throw new TypeError("Custom element constructors must be functions.");
if (!e(t)) throw new SyntaxError("The element name '" + t + "' is not valid.");
if (this.a.a.get(t)) throw Error("A custom element with name '" + t + "' has already been defined.");
if (this.c) throw Error("A custom element is already being defined.");
this.c = !0;
try {
var r = function(t) {
var e = s[t];
if (void 0 !== e && !(e instanceof Function)) throw Error("The '" + t + "' callback must be a function.");
return e;
}, s = n.prototype;
if (!(s instanceof Object)) throw new TypeError("The custom element constructor's prototype is not an object.");
var o = r("connectedCallback"), a = r("disconnectedCallback"), l = r("adoptedCallback"), u = r("attributeChangedCallback"), c = n.observedAttributes || [];
} catch (t) {
return;
} finally {
this.c = !1;
}
n = {
localName: t,
constructorFunction: n,
connectedCallback: o,
disconnectedCallback: a,
adoptedCallback: l,
attributeChangedCallback: u,
observedAttributes: c,
constructionStack: []
}, function(t, e, n) {
t.a.set(e, n), t.f.set(n.constructorFunction, n);
}(this.a, t, n), this.i.push(n), this.b || (this.b = !0, this.f(function() {
return function(t) {
if (!1 !== t.b) {
t.b = !1;
for (var e = t.i, n = [], i = new Map(), r = 0; r < e.length; r++) i.set(e[r].localName, []);
for (h(t.a, document, {
h: function(e) {
if (void 0 === e.__CE_state) {
var r = e.localName, s = i.get(r);
s ? s.push(e) : t.a.a.get(r) && n.push(e);
}
}
}), r = 0; r < n.length; r++) f(t.a, n[r]);
for (;0 < e.length; ) {
var s = e.shift();
r = s.localName, s = i.get(s.localName);
for (var o = 0; o < s.length; o++) f(t.a, s[o]);
(r = t.j.get(r)) && p(r);
}
}
}(i);
}));
}, y.prototype.h = function(t) {
h(this.a, t);
}, y.prototype.get = function(t) {
if (t = this.a.a.get(t)) return t.constructorFunction;
}, y.prototype.m = function(t) {
if (!e(t)) return Promise.reject(new SyntaxError("'" + t + "' is not a valid custom element name."));
var n = this.j.get(t);
return n ? n.c : (n = new function() {
var t = this;
this.b = this.a = void 0, this.c = new Promise(function(e) {
t.b = e, t.a && e(t.a);
});
}(), this.j.set(t, n), this.a.a.get(t) && !this.i.some(function(e) {
return e.localName === t;
}) && p(n), n.c);
}, y.prototype.s = function(t) {
_(this.o);
var e = this.f;
this.f = function(n) {
return t(function() {
return e(n);
});
};
}, window.CustomElementRegistry = y, y.prototype.define = y.prototype.l, y.prototype.upgrade = y.prototype.h, 
y.prototype.get = y.prototype.get, y.prototype.whenDefined = y.prototype.m, y.prototype.polyfillWrapFlushCallback = y.prototype.s;
var g = window.Document.prototype.createElement, w = window.Document.prototype.createElementNS, v = window.Document.prototype.importNode, b = window.Document.prototype.prepend, M = window.Document.prototype.append, S = window.DocumentFragment.prototype.prepend, D = window.DocumentFragment.prototype.append, k = window.Node.prototype.cloneNode, Y = window.Node.prototype.appendChild, T = window.Node.prototype.insertBefore, E = window.Node.prototype.removeChild, C = window.Node.prototype.replaceChild, L = Object.getOwnPropertyDescriptor(window.Node.prototype, "textContent"), O = window.Element.prototype.attachShadow, x = Object.getOwnPropertyDescriptor(window.Element.prototype, "innerHTML"), H = window.Element.prototype.getAttribute, P = window.Element.prototype.setAttribute, N = window.Element.prototype.removeAttribute, A = window.Element.prototype.getAttributeNS, W = window.Element.prototype.setAttributeNS, F = window.Element.prototype.removeAttributeNS, R = window.Element.prototype.insertAdjacentElement, j = window.Element.prototype.insertAdjacentHTML, U = window.Element.prototype.prepend, I = window.Element.prototype.append, z = window.Element.prototype.before, G = window.Element.prototype.after, V = window.Element.prototype.replaceWith, q = window.Element.prototype.remove, Z = window.HTMLElement, B = Object.getOwnPropertyDescriptor(window.HTMLElement.prototype, "innerHTML"), $ = window.HTMLElement.prototype.insertAdjacentElement, J = window.HTMLElement.prototype.insertAdjacentHTML, X = new function() {}();
function K(t, e, i) {
function r(e) {
return function(i) {
for (var r = [], s = 0; s < arguments.length; ++s) r[s] = arguments[s];
s = [];
for (var o = [], a = 0; a < r.length; a++) {
var l = r[a];
if (l instanceof Element && n(l) && o.push(l), l instanceof DocumentFragment) for (l = l.firstChild; l; l = l.nextSibling) s.push(l); else s.push(l);
}
for (e.apply(this, r), r = 0; r < o.length; r++) d(t, o[r]);
if (n(this)) for (r = 0; r < s.length; r++) (o = s[r]) instanceof Element && c(t, o);
};
}
void 0 !== i.g && (e.prepend = r(i.g)), void 0 !== i.append && (e.append = r(i.append));
}
var Q, tt = window.customElements;
if (!tt || tt.forcePolyfill || "function" != typeof tt.define || "function" != typeof tt.get) {
var et = new o();
Q = et, window.HTMLElement = function() {
function t() {
var t = this.constructor, e = Q.f.get(t);
if (!e) throw Error("The custom element being constructed was not registered with `customElements`.");
var n = e.constructionStack;
if (0 === n.length) return n = g.call(document, e.localName), Object.setPrototypeOf(n, t.prototype), 
n.__CE_state = 1, n.__CE_definition = e, u(Q, n), n;
var i = n[e = n.length - 1];
if (i === X) throw Error("The HTMLElement constructor was either called reentrantly for this constructor or called multiple times.");
return n[e] = X, Object.setPrototypeOf(i, t.prototype), u(Q, i), i;
}
return t.prototype = Z.prototype, Object.defineProperty(t.prototype, "constructor", {
writable: !0,
configurable: !0,
enumerable: !1,
value: t
}), t;
}(), function() {
var t = et;
s(Document.prototype, "createElement", function(e) {
if (this.__CE_hasRegistry) {
var n = t.a.get(e);
if (n) return new n.constructorFunction();
}
return e = g.call(this, e), u(t, e), e;
}), s(Document.prototype, "importNode", function(e, n) {
return e = v.call(this, e, !!n), this.__CE_hasRegistry ? h(t, e) : l(t, e), e;
}), s(Document.prototype, "createElementNS", function(e, n) {
if (this.__CE_hasRegistry && (null === e || "http://www.w3.org/1999/xhtml" === e)) {
var i = t.a.get(n);
if (i) return new i.constructorFunction();
}
return e = w.call(this, e, n), u(t, e), e;
}), K(t, Document.prototype, {
g: b,
append: M
});
}(), K(et, DocumentFragment.prototype, {
g: S,
append: D
}), function() {
function t(t, i) {
Object.defineProperty(t, "textContent", {
enumerable: i.enumerable,
configurable: !0,
get: i.get,
set: function(t) {
if (this.nodeType === Node.TEXT_NODE) i.set.call(this, t); else {
var r = void 0;
if (this.firstChild) {
var s = this.childNodes, o = s.length;
if (0 < o && n(this)) {
r = Array(o);
for (var a = 0; a < o; a++) r[a] = s[a];
}
}
if (i.set.call(this, t), r) for (t = 0; t < r.length; t++) d(e, r[t]);
}
}
});
}
var e = et;
s(Node.prototype, "insertBefore", function(t, i) {
if (t instanceof DocumentFragment) {
var r = Array.prototype.slice.apply(t.childNodes);
if (t = T.call(this, t, i), n(this)) for (i = 0; i < r.length; i++) c(e, r[i]);
return t;
}
return r = n(t), i = T.call(this, t, i), r && d(e, t), n(this) && c(e, t), i;
}), s(Node.prototype, "appendChild", function(t) {
if (t instanceof DocumentFragment) {
var i = Array.prototype.slice.apply(t.childNodes);
if (t = Y.call(this, t), n(this)) for (var r = 0; r < i.length; r++) c(e, i[r]);
return t;
}
return i = n(t), r = Y.call(this, t), i && d(e, t), n(this) && c(e, t), r;
}), s(Node.prototype, "cloneNode", function(t) {
return t = k.call(this, !!t), this.ownerDocument.__CE_hasRegistry ? h(e, t) : l(e, t), 
t;
}), s(Node.prototype, "removeChild", function(t) {
var i = n(t), r = E.call(this, t);
return i && d(e, t), r;
}), s(Node.prototype, "replaceChild", function(t, i) {
if (t instanceof DocumentFragment) {
var r = Array.prototype.slice.apply(t.childNodes);
if (t = C.call(this, t, i), n(this)) for (d(e, i), i = 0; i < r.length; i++) c(e, r[i]);
return t;
}
r = n(t);
var s = C.call(this, t, i), o = n(this);
return o && d(e, i), r && d(e, t), o && c(e, t), s;
}), L && L.get ? t(Node.prototype, L) : a(e, function(e) {
t(e, {
enumerable: !0,
configurable: !0,
get: function() {
for (var t = [], e = 0; e < this.childNodes.length; e++) t.push(this.childNodes[e].textContent);
return t.join("");
},
set: function(t) {
for (;this.firstChild; ) E.call(this, this.firstChild);
Y.call(this, document.createTextNode(t));
}
});
});
}(), function() {
function t(t, e) {
Object.defineProperty(t, "innerHTML", {
enumerable: e.enumerable,
configurable: !0,
get: e.get,
set: function(t) {
var i = this, s = void 0;
if (n(this) && (s = [], r(this, function(t) {
t !== i && s.push(t);
})), e.set.call(this, t), s) for (var a = 0; a < s.length; a++) {
var u = s[a];
1 === u.__CE_state && o.disconnectedCallback(u);
}
return this.ownerDocument.__CE_hasRegistry ? h(o, this) : l(o, this), t;
}
});
}
function e(t, e) {
s(t, "insertAdjacentElement", function(t, i) {
var r = n(i);
return t = e.call(this, t, i), r && d(o, i), n(t) && c(o, i), t;
});
}
function i(t, e) {
function n(t, e) {
for (var n = []; t !== e; t = t.nextSibling) n.push(t);
for (e = 0; e < n.length; e++) h(o, n[e]);
}
s(t, "insertAdjacentHTML", function(t, i) {
if ("beforebegin" === (t = t.toLowerCase())) {
var r = this.previousSibling;
e.call(this, t, i), n(r || this.parentNode.firstChild, this);
} else if ("afterbegin" === t) r = this.firstChild, e.call(this, t, i), n(this.firstChild, r); else if ("beforeend" === t) r = this.lastChild, 
e.call(this, t, i), n(r || this.firstChild, null); else {
if ("afterend" !== t) throw new SyntaxError("The value provided (" + String(t) + ") is not one of 'beforebegin', 'afterbegin', 'beforeend', or 'afterend'.");
r = this.nextSibling, e.call(this, t, i), n(this.nextSibling, r);
}
});
}
var o = et;
O && s(Element.prototype, "attachShadow", function(t) {
return this.__CE_shadowRoot = O.call(this, t);
}), x && x.get ? t(Element.prototype, x) : B && B.get ? t(HTMLElement.prototype, B) : a(o, function(e) {
t(e, {
enumerable: !0,
configurable: !0,
get: function() {
return k.call(this, !0).innerHTML;
},
set: function(t) {
var e = "template" === this.localName, n = e ? this.content : this, i = w.call(document, this.namespaceURI, this.localName);
for (i.innerHTML = t; 0 < n.childNodes.length; ) E.call(n, n.childNodes[0]);
for (t = e ? i.content : i; 0 < t.childNodes.length; ) Y.call(n, t.childNodes[0]);
}
});
}), s(Element.prototype, "setAttribute", function(t, e) {
if (1 !== this.__CE_state) return P.call(this, t, e);
var n = H.call(this, t);
P.call(this, t, e), e = H.call(this, t), o.attributeChangedCallback(this, t, n, e, null);
}), s(Element.prototype, "setAttributeNS", function(t, e, n) {
if (1 !== this.__CE_state) return W.call(this, t, e, n);
var i = A.call(this, t, e);
W.call(this, t, e, n), n = A.call(this, t, e), o.attributeChangedCallback(this, e, i, n, t);
}), s(Element.prototype, "removeAttribute", function(t) {
if (1 !== this.__CE_state) return N.call(this, t);
var e = H.call(this, t);
N.call(this, t), null !== e && o.attributeChangedCallback(this, t, e, null, null);
}), s(Element.prototype, "removeAttributeNS", function(t, e) {
if (1 !== this.__CE_state) return F.call(this, t, e);
var n = A.call(this, t, e);
F.call(this, t, e);
var i = A.call(this, t, e);
n !== i && o.attributeChangedCallback(this, e, n, i, t);
}), $ ? e(HTMLElement.prototype, $) : R && e(Element.prototype, R), J ? i(HTMLElement.prototype, J) : j && i(Element.prototype, j), 
K(o, Element.prototype, {
g: U,
append: I
}), function(t) {
function e(e) {
return function(i) {
for (var r = [], s = 0; s < arguments.length; ++s) r[s] = arguments[s];
s = [];
for (var o = [], a = 0; a < r.length; a++) {
var l = r[a];
if (l instanceof Element && n(l) && o.push(l), l instanceof DocumentFragment) for (l = l.firstChild; l; l = l.nextSibling) s.push(l); else s.push(l);
}
for (e.apply(this, r), r = 0; r < o.length; r++) d(t, o[r]);
if (n(this)) for (r = 0; r < s.length; r++) (o = s[r]) instanceof Element && c(t, o);
};
}
var i = Element.prototype;
void 0 !== z && (i.before = e(z)), void 0 !== z && (i.after = e(G)), void 0 !== V && s(i, "replaceWith", function(e) {
for (var i = [], r = 0; r < arguments.length; ++r) i[r] = arguments[r];
r = [];
for (var s = [], o = 0; o < i.length; o++) {
var a = i[o];
if (a instanceof Element && n(a) && s.push(a), a instanceof DocumentFragment) for (a = a.firstChild; a; a = a.nextSibling) r.push(a); else r.push(a);
}
for (o = n(this), V.apply(this, i), i = 0; i < s.length; i++) d(t, s[i]);
if (o) for (d(t, this), i = 0; i < r.length; i++) (s = r[i]) instanceof Element && c(t, s);
}), void 0 !== q && s(i, "remove", function() {
var e = n(this);
q.call(this), e && d(t, this);
});
}(o);
}(), document.__CE_hasRegistry = !0;
var nt = new y(et);
Object.defineProperty(window, "customElements", {
configurable: !0,
enumerable: !0,
value: nt
});
}
}).call(self);
},
255: function(t, e, n) {
"use strict";
String.prototype.startsWith || (String.prototype.startsWith = function(t) {
let e = arguments.length < 2 ? 0 : arguments[1];
return 0 === this.slice(e).indexOf(t);
}), String.prototype.endsWith || (String.prototype.endsWith = function(t) {
let e = arguments.length < 2 ? this.length : arguments[1], n = this.lastIndexOf(t);
return -1 !== n && n === e - t.length;
}), String.prototype.includes || (String.prototype.includes = function(t, e) {
if ("object" == typeof t && t instanceof RegExp) throw new TypeError("First argument to String.prototype.includes must not be a regular expression");
return -1 !== this.indexOf(t, e);
});
},
256: function(t, e, n) {
"use strict";
let i = n(14);
for (let t of document.querySelectorAll("[data-action-login]")) for (let e of t.classList) e.endsWith("_unready") && t.classList.remove(e);
function r() {
let t = new Modal({
hasClose: !1,
mixClass: "login-modal"
}), e = new i();
t.setContent(e.elem), e.start(), Promise.all([ n.e(15), n.e(12) ]).then(function() {
t.remove(), new (n(229))();
}.bind(null, n)).catch(n.oe);
}
document.addEventListener("click", function(t) {
t.target.hasAttribute("data-action-login") && (t.preventDefault(), r());
}), t.exports = r;
},
257: function(t, e, n) {
"use strict";
function i() {
let t = document.createElement("form");
t.method = "POST", t.action = "/auth/logout?_csrf=" + document.cookie.match(/XSRF-TOKEN=([\w-]+)/)[1], 
document.body.appendChild(t), t.submit();
}
document.addEventListener("click", function(t) {
t.target.hasAttribute("data-action-user-logout") && (t.preventDefault(), i());
}), t.exports = i;
},
258: function(t, e, n) {
"use strict";
let i, r = n(14);
let s = "//" + window.disqus_shortname + ".disqus.com/embed.js", o = (window.disqus_shortname, 
840);
function a() {
i || (i = window.requestAnimationFrame(function() {
!function() {
let t = document.querySelector(".sitetoolbar");
if (!t) return;
let e = document.querySelector(".sidebar");
if (e) {
const n = document.querySelector(".page"), i = n.classList.contains("page_profile") && "flex" === getComputedStyle(n).display ? 0 : Math.max(t.getBoundingClientRect().bottom, 0) + "px";
e.style.top = i, function() {
let t = document.querySelector(".sidebar"), e = t.querySelector(".sidebar__content"), n = t.querySelector(".sidebar__inner"), i = t.classList.contains("sidebar_sticky-footer");
if (t.classList.contains("sidebar_compact")) {
let n;
(n = i ? e.lastElementChild.getBoundingClientRect().top - e.lastElementChild.previousElementSibling.getBoundingClientRect().bottom : e.getBoundingClientRect().bottom - e.lastElementChild.getBoundingClientRect().bottom) > 150 && t.classList.remove("sidebar_compact");
} else n.scrollHeight, n.clientHeight, n.scrollHeight > n.clientHeight && t.classList.add("sidebar_compact");
}();
}
(function() {
let t = document.documentElement.clientWidth <= o, e = document.querySelector('meta[name="viewport"]').content;
e = e.replace(/user-scalable=\w+/, "user-scalable=" + (t ? "yes" : "no")), document.querySelector('meta[name="viewport"]').content = e;
})(), function() {
if (!window.disqus_enabled) return;
if (document.querySelector(`script[src="${s}"]`)) return;
let t = document.getElementById("disqus_thread");
if (t.hasChildNodes()) return;
let e = t.getBoundingClientRect();
if (e.top > document.documentElement.clientHeight + 150 || e.bottom < -150) return;
u();
}();
}(), i = null;
}));
}
function l() {
window.location.hash.match(/#comment-/) && u(), a();
}
function u() {
let t = document.getElementById("disqus_thread");
if (t.classList.contains("disqus-loading")) return;
t.classList.add("disqus-loading");
let e = new r({
size: "large"
});
t.append(e.elem), e.start();
let n = document.createElement("script");
n.src = s, n.setAttribute("data-timestamp", +new Date()), document.head.appendChild(n), 
n.onload = (() => {
e.stop(), e.elem.remove();
});
}
window.addEventListener("resize-internal", a), window.addEventListener("scroll", a), 
window.addEventListener("resize", a), "loading" == document.readyState ? document.addEventListener("DOMContentLoaded", l) : l();
},
259: function(t, e, n) {
"use strict";
document.addEventListener("click", function(t) {
if (!t.target.closest) return;
t.target.closest(s + "__search-toggle") && (i || function() {
let t, e = document.querySelector(s), n = e.querySelector(s + "__search-input input");
e.querySelector(s + "__find").onmousedown = function(e) {
t = !0;
}, n.onkeydown = function(t) {
27 == t.keyCode && (this.value = "", o());
}, n.onblur = function(e) {
!t && o();
}, i = !0;
}(), o());
}), document.addEventListener("click", function(t) {
if (!t.target.closest) return;
let e = t.target.closest("[data-dropdown-toggler]");
if (!e) return;
e.nextElementSibling.style.display = e.nextElementSibling.offsetWidth ? "none" : "block";
}), document.addEventListener("click", function(t) {
if (!t.target.closest) return;
if (!t.target.closest(".sitetoolbar__nav-toggle")) return;
t.target.classList.toggle("sitetoolbar__nav-toggle_active"), document.querySelector(".sitetoolbar").classList.toggle("sitetoolbar_menu_open");
});
let i = !1, r = "sitetoolbar", s = "." + r;
function o() {
let t, e = document.querySelector(s);
e.classList.toggle(r + "_search_open");
let n = e.querySelector(s + "__search-input input");
e.classList.contains(r + "_search_open") ? (n.focus(), (t = document.createElement("div")).className = "search-paranja", 
t.style.top = e.offsetHeight + "px", document.body.appendChild(t), document.body.classList.add("paranja-open")) : ((t = document.querySelector(".search-paranja")).parentNode.removeChild(t), 
document.body.classList.remove("paranja-open"));
}
},
260: function(t, e, n) {
"use strict";
function i() {
let t = document.querySelector(".page-wrapper");
document.querySelector(".page").classList.toggle("page_sidebar_on"), t && t.classList.toggle("page-wrapper_sidebar_on"), 
document.querySelector(".page").classList.contains("page_sidebar_on") ? delete localStorage.noSidebar : localStorage.noSidebar = 1;
}
document.addEventListener("click", function(t) {
if (!t.target.hasAttribute("data-sidebar-toggle")) return;
i();
}), document.addEventListener("keydown", function(t) {
if (document.activeElement && ~[ "INPUT", "TEXTAREA", "SELECT" ].indexOf(document.activeElement.tagName)) return;
if (t.keyCode != "S".charCodeAt(0)) return;
if (~navigator.userAgent.toLowerCase().indexOf("mac os x")) {
if (!t.metaKey || !t.altKey) return;
} else if (!t.altKey) return;
i(), t.preventDefault();
}), function() {
function t() {
let t = document.getElementsByClassName("sidebar__navigation-link_active");
t[0] && t[0].classList.remove("sidebar__navigation-link_active");
let e, n = document.getElementsByTagName("h2");
for (e = 0; e < n.length; e++) {
let t = n[e];
if (t.getBoundingClientRect().top > 1) break;
}
if (--e >= 0) {
let t = n[e].firstElementChild && n[e].firstElementChild.getAttribute("href"), i = document.querySelector('.sidebar__navigation-link a[href="' + t + '"]');
t && i && i.classList.add("sidebar__navigation-link_active");
}
}
document.addEventListener("DOMContentLoaded", function() {
t(), window.addEventListener("scroll", t);
});
}();
},
261: function(t, e, n) {
"use strict";
let i = n(262), r = ~navigator.userAgent.toLowerCase().indexOf("mac os x") ? "ctrl" : "alt";
function s() {
let t, e = r[0].toUpperCase() + r.slice(1), n = document.querySelector('link[rel="next"]');
n && ((t = document.querySelector('a[href="' + n.getAttribute("href") + '"] .page__nav-text-shortcut')).innerHTML = e + ' + <span class="page__nav-text-arr">→</span>');
let i = document.querySelector('link[rel="prev"]');
i && ((t = document.querySelector('a[href="' + i.getAttribute("href") + '"] .page__nav-text-shortcut')).innerHTML = e + ' + <span class="page__nav-text-arr">←</span>');
}
i(document, {
onRight: function() {
let t = document.querySelector('link[rel="prev"]');
t && (document.location = t.href);
},
onLeft: function() {
let t = document.querySelector('link[rel="next"]');
t && (document.location = t.href);
}
}), document.addEventListener("keydown", function(t) {
if (document.activeElement && ~[ "INPUT", "TEXTAREA", "SELECT" ].indexOf(document.activeElement.tagName)) return;
if (!t[r + "Key"]) return;
let e = null;
switch (t.keyCode) {
case 37:
e = "prev";
break;

case 39:
e = "next";
break;

default:
return;
}
let n = document.querySelector('link[rel="' + e + '"]');
n && (document.location = n.href, t.preventDefault());
}), "loading" == document.readyState ? document.addEventListener("DOMContentLoaded", s) : s();
},
262: function(t, e, n) {
"use strict";
t.exports = function(t, e) {
let n, i, r, s, o, a = (e = e || {}).onRight || function() {}, l = e.onLeft || function() {}, u = e.tolerance || 50, c = e.threshold || 150, d = e.allowedTime || 500;
t.addEventListener("touchstart", function(t) {
let e = t.changedTouches[0];
r = 0, n = e.pageX, i = e.pageY, o = Date.now();
}), t.addEventListener("touchend", function(t) {
let e = t.changedTouches[0];
if (r = e.pageX - n, s = Date.now() - o, Math.abs(e.pageY - i) > u) return;
if (s > d) return;
let h = !1, f = t.target;
for (;f != document.body; ) {
if (f.scrollWidth > f.clientWidth) {
h = !0;
break;
}
f = f.parentElement;
}
h || (r > c && a(t), r < -c && l(t));
});
};
},
263: function(t, e, n) {
"use strict";
let i;
document.addEventListener("mouseover", function(t) {
if (!t.target.closest) return;
let e = t.target.closest("[data-add-class-on-hover]") || t.target.closest(".button");
e && (i = e, e.classList.add("hover"));
}), document.addEventListener("touchend", function(t) {
setTimeout(function() {
i && (i.classList.remove("hover"), i = null);
}, 500);
}), document.addEventListener("mouseout", function(t) {
i && (i.contains(t.relatedTarget) || (i.classList.remove("hover"), i = null));
}), navigator.userAgent.match(/(iPad|iPhone|iPod)/g) || document.documentElement.classList.add("working-hover");
},
264: function(t, e, n) {
"use strict";
let i = window.location.host, r = n(348);
document.addEventListener("click", function(t) {
if (1 != t.which) return;
if (t.defaultPrevented) return;
let e = t.target.closest && t.target.closest("a");
if (!e || i == e.host && !e.hasAttribute("data-track-outbound")) return;
if (!~[ "_self", "_top", "_parent" ].indexOf(e.target)) return;
if (t.shiftKey || t.ctrlKey || t.altKey) return;
t.preventDefault();
let n = e.href;
window.ga("send", "event", {
eventCategory: "outbound",
eventAction: "click",
eventLabel: n,
hitCallback: r(function() {
document.location = n;
})
});
});
},
265: function(t, e, n) {
"use strict";
let i = n(3);
document.addEventListener("click", function(t) {
let e = t.target.closest("[data-banner-close]");
e && (localStorage["hideBanner" + e.dataset.bannerClose] = 1, new i.Success(e.dataset.bannerCloseMessage), 
e.parentNode.remove());
});
},
266: function(t, e, n) {
"use strict";
let i = n(22), r = n(98);
class s extends HTMLElement {
constructor() {
super(), this.render();
}
connectedCallback() {
this.render();
}
static get observedAttributes() {
return [ "timestamp", "format", "with-zone", "to", "from" ];
}
attributeChangedCallback(t, e, n) {
this.render();
}
format(t, e, n) {
let s = i(t).utcOffset(-new Date().getTimezoneOffset()).format(e);
return n && (s += " " + r()), s;
}
render() {
let t = [ "timestamp", "from", "to", "format" ].map(t => this.getAttribute(t)).join(":");
if (this.lastParams === t) return;
if (this.lastParams = t, this.getAttribute("timestamp")) {
if ("{" === this.getAttribute("timestamp")[0]) return;
return void (this.innerHTML = this.format(this.getAttribute("timestamp"), this.getAttribute("format"), this.hasAttribute("with-zone")));
}
let e = [];
if ("{" === this.getAttribute("from")[0] || "{" === this.getAttribute("to")[0]) return;
let n = new Date(this.getAttribute("from")), i = new Date(this.getAttribute("to")), r = this.getAttribute("format"), s = this.getAttribute("format");
n.getFullYear() === i.getFullYear() && (r = r.replace(/ YY(YY)?$/g, "")), n.getFullYear() === i.getFullYear() && n.getMonth() === i.getMonth() && n.getDate() === i.getDate() || e.push(this.format(n, r)), 
e.push(this.format(i, s, this.hasAttribute("with-zone"))), this.innerHTML = e.join(" – ");
}
}
window.DateLocalElement = s, window.customElements.define("date-local", s);
},
267: function(t, e, n) {
"use strict";
let i = n(22), r = n(98), s = n(268);
const o = n(0).lang;
class a extends HTMLElement {
constructor() {
super(), this.render();
}
static get observedAttributes() {
return [ "weekdays", "format", "with-zone", "to", "from" ];
}
attributeChangedCallback(t, e, n) {
this.render();
}
connectedCallback() {
this.render();
}
format(t, e, n) {
let s = i(t).utcOffset(-new Date().getTimezoneOffset()).format(e);
return n && (s += " " + r()), s;
}
render() {
if ("{" === this.getAttribute("weekdays")[0]) return;
let t = [ "weekdays", "with-zone", "from", "to" ].map(t => this.getAttribute(t)).join(":");
if (this.lastParams === t) return;
this.lastParams = t;
let e, n = this.getAttribute("weekdays").split(",").map(Number), i = this.getAttribute("from"), a = this.getAttribute("to");
[n, i, a] = s(n, i, a, -new Date().getTimezoneOffset()), e = "ru" === o ? [ "", "пн", "вт", "ср", "чт", "пт", "сб", "вс" ] : [ "", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun" ], 
n = n.map(t => e[t]), n = "ru" === o ? n.join("/") : n.join(", ");
let l = this.hasAttribute("with-zone") ? " " + r() : "";
this.innerHTML = n + " " + i + " – " + a + l;
}
}
window.WeekRangeElement = a, window.customElements.define("week-range", a);
},
268: function(t, e, n) {
"use strict";
t.exports = function(t, e, n, i) {
i = +i, e.split && (e = e.split(":").map(Number)), n.split && (n = n.split(":").map(Number)), 
e = 60 * e[0] + e[1] + i, n = 60 * n[0] + n[1] + i, e < 0 ? (e += 1440, n += 1440, 
t = t.map(t => 1 === t ? 7 : t - 1)) : e >= 1440 && (e -= 1440, n -= 1440, t = t.map(t => 7 === t ? 1 : t + 1)), 
n > 1440 && (n -= 1440), n < 0 && (n += 1440);
let r = t => 0 === t ? "00" : t < 10 ? "0" + t : t;
return [ t, e = [ Math.floor(e / 60), e % 60 ].map(r).join(":"), n = [ Math.floor(n / 60), n % 60 ].map(r).join(":") ];
};
},
3: function(t, e, n) {
"use strict";
Object.defineProperty(e, "__esModule", {
value: !0
});
let i = n(7);
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
class r {
constructor(t, e, n) {
let i = `<div class="notification notification_popup notification_${e}">\n    <div class="notification__content">${t}</div>\n    <button title="Закрыть" class="notification__close"></button></div>`;
switch (document.body.insertAdjacentHTML("beforeEnd", i), this.elem = document.body.lastElementChild, 
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
i.delegateMixin(r.prototype);
e.Info = class extends r {
constructor(t, e) {
super(t, "info", e);
}
};
e.Warning = class extends r {
constructor(t, e) {
super(t, "warning", e);
}
};
e.Success = class extends r {
constructor(t, e) {
super(t, "success", e);
}
};
class s extends r {
constructor(t, e) {
super(t, "error", e);
}
get TIMEOUT_DEFAULT() {
return 5e3;
}
}
e.Error = s, e.Error = s;
},
32: function(t, e, n) {
var i = {
"./zh-cn": 23,
"zh-cn.js"/*tpa=https://zh.javascript.info/pack/zh-cn.js*/: 23,
"./zh-hk": 33,
"zh-hk.js"/*tpa=https://zh.javascript.info/pack/zh-hk.js*/: 33,
"./zh-tw": 34,
"zh-tw.js"/*tpa=https://zh.javascript.info/pack/zh-tw.js*/: 34
};
function r(t) {
var e = s(t);
return n(e);
}
function s(t) {
var e = i[t];
if (!(e + 1)) {
var n = new Error("Cannot find module '" + t + "'");
throw n.code = "MODULE_NOT_FOUND", n;
}
return e;
}
r.keys = function() {
return Object.keys(i);
}, r.resolve = s, t.exports = r, r.id = 32;
},
33: function(t, e, n) {
"use strict";
n(12).defineLocale("zh-hk", {
months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
weekdaysShort: "週日_週一_週二_週三_週四_週五_週六".split("_"),
weekdaysMin: "日_一_二_三_四_五_六".split("_"),
longDateFormat: {
LT: "HH:mm",
LTS: "HH:mm:ss",
L: "YYYY/MM/DD",
LL: "YYYY年M月D日",
LLL: "YYYY年M月D日 HH:mm",
LLLL: "YYYY年M月D日dddd HH:mm",
l: "YYYY/M/D",
ll: "YYYY年M月D日",
lll: "YYYY年M月D日 HH:mm",
llll: "YYYY年M月D日dddd HH:mm"
},
meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
meridiemHour: function(t, e) {
return 12 === t && (t = 0), "凌晨" === e || "早上" === e || "上午" === e ? t : "中午" === e ? t >= 11 ? t : t + 12 : "下午" === e || "晚上" === e ? t + 12 : void 0;
},
meridiem: function(t, e, n) {
var i = 100 * t + e;
return i < 600 ? "凌晨" : i < 900 ? "早上" : i < 1130 ? "上午" : i < 1230 ? "中午" : i < 1800 ? "下午" : "晚上";
},
calendar: {
sameDay: "[今天]LT",
nextDay: "[明天]LT",
nextWeek: "[下]ddddLT",
lastDay: "[昨天]LT",
lastWeek: "[上]ddddLT",
sameElse: "L"
},
dayOfMonthOrdinalParse: /\d{1,2}(日|月|週)/,
ordinal: function(t, e) {
switch (e) {
case "d":
case "D":
case "DDD":
return t + "日";

case "M":
return t + "月";

case "w":
case "W":
return t + "週";

default:
return t;
}
},
relativeTime: {
future: "%s內",
past: "%s前",
s: "幾秒",
ss: "%d 秒",
m: "1 分鐘",
mm: "%d 分鐘",
h: "1 小時",
hh: "%d 小時",
d: "1 天",
dd: "%d 天",
M: "1 個月",
MM: "%d 個月",
y: "1 年",
yy: "%d 年"
}
});
},
34: function(t, e, n) {
"use strict";
n(12).defineLocale("zh-tw", {
months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
weekdaysShort: "週日_週一_週二_週三_週四_週五_週六".split("_"),
weekdaysMin: "日_一_二_三_四_五_六".split("_"),
longDateFormat: {
LT: "HH:mm",
LTS: "HH:mm:ss",
L: "YYYY/MM/DD",
LL: "YYYY年M月D日",
LLL: "YYYY年M月D日 HH:mm",
LLLL: "YYYY年M月D日dddd HH:mm",
l: "YYYY/M/D",
ll: "YYYY年M月D日",
lll: "YYYY年M月D日 HH:mm",
llll: "YYYY年M月D日dddd HH:mm"
},
meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
meridiemHour: function(t, e) {
return 12 === t && (t = 0), "凌晨" === e || "早上" === e || "上午" === e ? t : "中午" === e ? t >= 11 ? t : t + 12 : "下午" === e || "晚上" === e ? t + 12 : void 0;
},
meridiem: function(t, e, n) {
var i = 100 * t + e;
return i < 600 ? "凌晨" : i < 900 ? "早上" : i < 1130 ? "上午" : i < 1230 ? "中午" : i < 1800 ? "下午" : "晚上";
},
calendar: {
sameDay: "[今天] LT",
nextDay: "[明天] LT",
nextWeek: "[下]dddd LT",
lastDay: "[昨天] LT",
lastWeek: "[上]dddd LT",
sameElse: "L"
},
dayOfMonthOrdinalParse: /\d{1,2}(日|月|週)/,
ordinal: function(t, e) {
switch (e) {
case "d":
case "D":
case "DDD":
return t + "日";

case "M":
return t + "月";

case "w":
case "W":
return t + "週";

default:
return t;
}
},
relativeTime: {
future: "%s內",
past: "%s前",
s: "幾秒",
ss: "%d 秒",
m: "1 分鐘",
mm: "%d 分鐘",
h: "1 小時",
hh: "%d 小時",
d: "1 天",
dd: "%d 天",
M: "1 個月",
MM: "%d 個月",
y: "1 年",
yy: "%d 年"
}
});
},
348: function(t, e, n) {
"use strict";
t.exports = function(t) {
function e() {
e.wasCalled || (e.wasCalled = !0, t());
}
return setTimeout(e, 500), e;
};
},
40: function(t, e, n) {
"use strict";
t.exports = function(t) {
return t.webpackPolyfill || (t.deprecate = function() {}, t.paths = [], t.children || (t.children = []), 
Object.defineProperty(t, "loaded", {
enumerable: !0,
get: function() {
return t.l;
}
}), Object.defineProperty(t, "id", {
enumerable: !0,
get: function() {
return t.i;
}
}), t.webpackPolyfill = 1), t;
};
},
52: function(t, e, n) {
"use strict";
let i = n(53), r = n(56), s = [];
e.iframe = function(t) {
i.async(t, function(e, n) {
n && (t.style.height = n + "px");
});
}, e.codeTabs = function(t) {
function e() {
let e = t.closest(".code-tabs"), n = (t.closest("[data-code-tabs-content]"), e.querySelector("[data-code-tabs-switches]"));
n.firstElementChild.offsetWidth > n.offsetWidth ? e.classList.add("code-tabs_scroll") : e.classList.remove("code-tabs_scroll");
}
e(), s.push(e);
}, window.addEventListener("resize", r(function() {
s.forEach(function(t) {
t();
});
}, 200));
},
53: function(t, e, n) {
"use strict";
let i = n(54);
function r(t, e) {
let n = setTimeout(function() {
e(new Error("timeout"));
}, 500);
function r(t, i) {
clearTimeout(n), e(t, i);
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
let n = i(this.contentDocument);
t.style.display = "block", e.remove(), r(null, n);
}, void document.body.appendChild(e);
}
t.style.display = "block", t.style.height = "1px";
let s = i(t.contentDocument);
t.style.height = "", r(null, s);
}
r.async = function(t, e) {
setTimeout(function() {
r(t, e);
}, 0);
}, t.exports = r;
},
54: function(t, e, n) {
"use strict";
let i, r = n(55);
t.exports = function(t) {
t = t || document;
let e = Math.max(t.body.scrollHeight, t.documentElement.scrollHeight, t.body.offsetHeight, t.documentElement.offsetHeight, t.body.clientHeight, t.documentElement.clientHeight);
return t.documentElement.scrollWidth > t.documentElement.clientWidth && (i || (i = r()), 
e += i), e;
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
let i = n.offsetWidth;
return t.parentNode.removeChild(t), e - i;
};
},
56: function(t, e, n) {
"use strict";
t.exports = function(t, e) {
let n, i, r = !1;
return function s() {
if (r) return n = arguments, void (i = this);
t.apply(this, arguments), r = !0, setTimeout(function() {
r = !1, n && (s.apply(i, n), n = i = null);
}, e);
};
};
},
67: function(t, e, n) {
"use strict";
!function(t) {
function e(t, e, n) {
var i, r, s = {
ss: e ? "секунда_секунды_секунд" : "секунду_секунды_секунд",
mm: e ? "минута_минуты_минут" : "минуту_минуты_минут",
hh: "час_часа_часов",
dd: "день_дня_дней",
MM: "месяц_месяца_месяцев",
yy: "год_года_лет"
};
return "m" === n ? e ? "минута" : "минуту" : t + " " + (i = +t, r = s[n].split("_"), 
i % 10 == 1 && i % 100 != 11 ? r[0] : i % 10 >= 2 && i % 10 <= 4 && (i % 100 < 10 || i % 100 >= 20) ? r[1] : r[2]);
}
var n = [ /^янв/i, /^фев/i, /^мар/i, /^апр/i, /^ма[йя]/i, /^июн/i, /^июл/i, /^авг/i, /^сен/i, /^окт/i, /^ноя/i, /^дек/i ];
t.defineLocale("ru", {
months: {
format: "января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря".split("_"),
standalone: "январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_")
},
monthsShort: {
format: "янв._февр._мар._апр._мая_июня_июля_авг._сент._окт._нояб._дек.".split("_"),
standalone: "янв._февр._март_апр._май_июнь_июль_авг._сент._окт._нояб._дек.".split("_")
},
weekdays: {
standalone: "воскресенье_понедельник_вторник_среда_четверг_пятница_суббота".split("_"),
format: "воскресенье_понедельник_вторник_среду_четверг_пятницу_субботу".split("_"),
isFormat: /\[ ?[Вв] ?(?:прошлую|следующую|эту)? ?\] ?dddd/
},
weekdaysShort: "вс_пн_вт_ср_чт_пт_сб".split("_"),
weekdaysMin: "вс_пн_вт_ср_чт_пт_сб".split("_"),
monthsParse: n,
longMonthsParse: n,
shortMonthsParse: n,
monthsRegex: /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,
monthsShortRegex: /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,
monthsStrictRegex: /^(январ[яь]|феврал[яь]|марта?|апрел[яь]|ма[яй]|июн[яь]|июл[яь]|августа?|сентябр[яь]|октябр[яь]|ноябр[яь]|декабр[яь])/i,
monthsShortStrictRegex: /^(янв\.|февр?\.|мар[т.]|апр\.|ма[яй]|июн[ья.]|июл[ья.]|авг\.|сент?\.|окт\.|нояб?\.|дек\.)/i,
longDateFormat: {
LT: "H:mm",
LTS: "H:mm:ss",
L: "https://zh.javascript.info/pack/DD.MM.YYYY",
LL: "D MMMM YYYY г.",
LLL: "D MMMM YYYY г., H:mm",
LLLL: "dddd, D MMMM YYYY г., H:mm"
},
calendar: {
sameDay: "[Сегодня, в] LT",
nextDay: "[Завтра, в] LT",
lastDay: "[Вчера, в] LT",
nextWeek: function(t) {
if (t.week() === this.week()) return 2 === this.day() ? "[Во] dddd, [в] LT" : "[В] dddd, [в] LT";
switch (this.day()) {
case 0:
return "[В следующее] dddd, [в] LT";

case 1:
case 2:
case 4:
return "[В следующий] dddd, [в] LT";

case 3:
case 5:
case 6:
return "[В следующую] dddd, [в] LT";
}
},
lastWeek: function(t) {
if (t.week() === this.week()) return 2 === this.day() ? "[Во] dddd, [в] LT" : "[В] dddd, [в] LT";
switch (this.day()) {
case 0:
return "[В прошлое] dddd, [в] LT";

case 1:
case 2:
case 4:
return "[В прошлый] dddd, [в] LT";

case 3:
case 5:
case 6:
return "[В прошлую] dddd, [в] LT";
}
},
sameElse: "L"
},
relativeTime: {
future: "через %s",
past: "%s назад",
s: "несколько секунд",
ss: e,
m: e,
mm: e,
h: "час",
hh: e,
d: "день",
dd: e,
M: "месяц",
MM: e,
y: "год",
yy: e
},
meridiemParse: /ночи|утра|дня|вечера/i,
isPM: function(t) {
return /^(дня|вечера)$/.test(t);
},
meridiem: function(t, e, n) {
return t < 4 ? "ночи" : t < 12 ? "утра" : t < 17 ? "дня" : "вечера";
},
dayOfMonthOrdinalParse: /\d{1,2}-(й|го|я)/,
ordinal: function(t, e) {
switch (e) {
case "M":
case "d":
case "DDD":
return t + "-й";

case "D":
return t + "-го";

case "w":
case "W":
return t + "-я";

default:
return t;
}
},
week: {
dow: 1,
doy: 4
}
});
}(n(12));
},
7: function(t, e, n) {
"use strict";
function i(t, e, n, i, r) {
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
t.delegateTarget = n, n && i.call(r || this, t);
});
}
i.delegateMixin = function(t) {
t.delegate = function(t, e, n) {
i(this.elem, t, e, n, this);
};
}, t.exports = i;
},
98: function(t, e, n) {
"use strict";
let i = new Intl.DateTimeFormat([], {
timeZoneName: "short"
}).formatToParts;
t.exports = function() {
if (i) return new Intl.DateTimeFormat([], {
timeZoneName: "short"
}).formatToParts(new Date()).find(t => "timeZoneName" == t.type).value;
let t = -new Date().getTimezoneOffset(), e = new Date().toLocaleTimeString([], {
timeZoneName: "short"
}).split(" ");
return e[0].match(/[+-]/) ? e = e[0] : e[e.length - 1].match(/[+-]/) ? e = e[e.length - 1] : e[e.length - 1].match(/[A-Z]{2,}/) ? e = e[e.length - 1] : (e = "GMT", 
t > 0 && (e += "+" + t / 60), t < 0 && (e += "-" + -t / 60)), e;
};
}
});