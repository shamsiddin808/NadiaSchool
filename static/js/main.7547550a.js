/*! For license information please see main.7547550a.js.LICENSE.txt */
(() => {
    "use strict";
    var e = {
        4: (e, t, n) => {
            var r = n(853), a = n(43), l = n(950);

            function i(e) {
                var t = "https://react.dev/errors/" + e;
                if (1 < arguments.length) {
                    t += "?args[]=" + encodeURIComponent(arguments[1]);
                    for (var n = 2; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n])
                }
                return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
            }

            function o(e) {
                return !(!e || 1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType)
            }

            var s = Symbol.for("react.element"), u = Symbol.for("react.transitional.element"),
                c = Symbol.for("react.portal"), d = Symbol.for("react.fragment"), f = Symbol.for("react.strict_mode"),
                p = Symbol.for("react.profiler"), m = Symbol.for("react.provider"), h = Symbol.for("react.consumer"),
                g = Symbol.for("react.context"), v = Symbol.for("react.forward_ref"), y = Symbol.for("react.suspense"),
                b = Symbol.for("react.suspense_list"), w = Symbol.for("react.memo"), S = Symbol.for("react.lazy");
            Symbol.for("react.scope"), Symbol.for("react.debug_trace_mode");
            var k = Symbol.for("react.offscreen");
            Symbol.for("react.legacy_hidden"), Symbol.for("react.tracing_marker");
            var x = Symbol.for("react.memo_cache_sentinel"), E = Symbol.iterator;

            function _(e) {
                return null === e || "object" !== typeof e ? null : "function" === typeof (e = E && e[E] || e["@@iterator"]) ? e : null
            }

            var T = Symbol.for("react.client.reference");

            function C(e) {
                if (null == e) return null;
                if ("function" === typeof e) return e.$$typeof === T ? null : e.displayName || e.name || null;
                if ("string" === typeof e) return e;
                switch (e) {
                    case d:
                        return "Fragment";
                    case c:
                        return "Portal";
                    case p:
                        return "Profiler";
                    case f:
                        return "StrictMode";
                    case y:
                        return "Suspense";
                    case b:
                        return "SuspenseList"
                }
                if ("object" === typeof e) switch (e.$$typeof) {
                    case g:
                        return (e.displayName || "Context") + ".Provider";
                    case h:
                        return (e._context.displayName || "Context") + ".Consumer";
                    case v:
                        var t = e.render;
                        return (e = e.displayName) || (e = "" !== (e = t.displayName || t.name || "") ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
                    case w:
                        return null !== (t = e.displayName || null) ? t : C(e.type) || "Memo";
                    case S:
                        t = e._payload, e = e._init;
                        try {
                            return C(e(t))
                        } catch (n) {
                        }
                }
                return null
            }

            var P, z, N = a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, L = Object.assign;

            function O(e) {
                if (void 0 === P) try {
                    throw Error()
                } catch (n) {
                    var t = n.stack.trim().match(/\n( *(at )?)/);
                    P = t && t[1] || "", z = -1 < n.stack.indexOf("\n    at") ? " (<anonymous>)" : -1 < n.stack.indexOf("@") ? "@unknown:0:0" : ""
                }
                return "\n" + P + e + z
            }

            var M = !1;

            function A(e, t) {
                if (!e || M) return "";
                M = !0;
                var n = Error.prepareStackTrace;
                Error.prepareStackTrace = void 0;
                try {
                    var r = {
                        DetermineComponentFrameRoot: function () {
                            try {
                                if (t) {
                                    var n = function () {
                                        throw Error()
                                    };
                                    if (Object.defineProperty(n.prototype, "props", {
                                        set: function () {
                                            throw Error()
                                        }
                                    }), "object" === typeof Reflect && Reflect.construct) {
                                        try {
                                            Reflect.construct(n, [])
                                        } catch (a) {
                                            var r = a
                                        }
                                        Reflect.construct(e, [], n)
                                    } else {
                                        try {
                                            n.call()
                                        } catch (l) {
                                            r = l
                                        }
                                        e.call(n.prototype)
                                    }
                                } else {
                                    try {
                                        throw Error()
                                    } catch (i) {
                                        r = i
                                    }
                                    (n = e()) && "function" === typeof n.catch && n.catch((function () {
                                    }))
                                }
                            } catch (o) {
                                if (o && r && "string" === typeof o.stack) return [o.stack, r.stack]
                            }
                            return [null, null]
                        }
                    };
                    r.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
                    var a = Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot, "name");
                    a && a.configurable && Object.defineProperty(r.DetermineComponentFrameRoot, "name", {value: "DetermineComponentFrameRoot"});
                    var l = r.DetermineComponentFrameRoot(), i = l[0], o = l[1];
                    if (i && o) {
                        var s = i.split("\n"), u = o.split("\n");
                        for (a = r = 0; r < s.length && !s[r].includes("DetermineComponentFrameRoot");) r++;
                        for (; a < u.length && !u[a].includes("DetermineComponentFrameRoot");) a++;
                        if (r === s.length || a === u.length) for (r = s.length - 1, a = u.length - 1; 1 <= r && 0 <= a && s[r] !== u[a];) a--;
                        for (; 1 <= r && 0 <= a; r--, a--) if (s[r] !== u[a]) {
                            if (1 !== r || 1 !== a) do {
                                if (r--, 0 > --a || s[r] !== u[a]) {
                                    var c = "\n" + s[r].replace(" at new ", " at ");
                                    return e.displayName && c.includes("<anonymous>") && (c = c.replace("<anonymous>", e.displayName)), c
                                }
                            } while (1 <= r && 0 <= a);
                            break
                        }
                    }
                } finally {
                    M = !1, Error.prepareStackTrace = n
                }
                return (n = e ? e.displayName || e.name : "") ? O(n) : ""
            }

            function I(e) {
                switch (e.tag) {
                    case 26:
                    case 27:
                    case 5:
                        return O(e.type);
                    case 16:
                        return O("Lazy");
                    case 13:
                        return O("Suspense");
                    case 19:
                        return O("SuspenseList");
                    case 0:
                    case 15:
                        return e = A(e.type, !1);
                    case 11:
                        return e = A(e.type.render, !1);
                    case 1:
                        return e = A(e.type, !0);
                    default:
                        return ""
                }
            }

            function j(e) {
                try {
                    var t = "";
                    do {
                        t += I(e), e = e.return
                    } while (e);
                    return t
                } catch (n) {
                    return "\nError generating stack: " + n.message + "\n" + n.stack
                }
            }

            function D(e) {
                var t = e, n = e;
                if (e.alternate) for (; t.return;) t = t.return; else {
                    e = t;
                    do {
                        0 !== (4098 & (t = e).flags) && (n = t.return), e = t.return
                    } while (e)
                }
                return 3 === t.tag ? n : null
            }

            function R(e) {
                if (13 === e.tag) {
                    var t = e.memoizedState;
                    if (null === t && (null !== (e = e.alternate) && (t = e.memoizedState)), null !== t) return t.dehydrated
                }
                return null
            }

            function F(e) {
                if (D(e) !== e) throw Error(i(188))
            }

            function V(e) {
                var t = e.tag;
                if (5 === t || 26 === t || 27 === t || 6 === t) return e;
                for (e = e.child; null !== e;) {
                    if (null !== (t = V(e))) return t;
                    e = e.sibling
                }
                return null
            }

            var B = Array.isArray, H = l.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
                G = {pending: !1, data: null, method: null, action: null}, U = [], q = -1;

            function W(e) {
                return {current: e}
            }

            function $(e) {
                0 > q || (e.current = U[q], U[q] = null, q--)
            }

            function Q(e, t) {
                q++, U[q] = e.current, e.current = t
            }

            var Y = W(null), X = W(null), K = W(null), Z = W(null);

            function J(e, t) {
                switch (Q(K, t), Q(X, e), Q(Y, null), e = t.nodeType) {
                    case 9:
                    case 11:
                        t = (t = t.documentElement) && (t = t.namespaceURI) ? Xc(t) : 0;
                        break;
                    default:
                        if (t = (e = 8 === e ? t.parentNode : t).tagName, e = e.namespaceURI) t = Kc(e = Xc(e), t); else switch (t) {
                            case"svg":
                                t = 1;
                                break;
                            case"math":
                                t = 2;
                                break;
                            default:
                                t = 0
                        }
                }
                $(Y), Q(Y, t)
            }

            function ee() {
                $(Y), $(X), $(K)
            }

            function te(e) {
                null !== e.memoizedState && Q(Z, e);
                var t = Y.current, n = Kc(t, e.type);
                t !== n && (Q(X, e), Q(Y, n))
            }

            function ne(e) {
                X.current === e && ($(Y), $(X)), Z.current === e && ($(Z), jd._currentValue = G)
            }

            var re = Object.prototype.hasOwnProperty, ae = r.unstable_scheduleCallback, le = r.unstable_cancelCallback,
                ie = r.unstable_shouldYield, oe = r.unstable_requestPaint, se = r.unstable_now,
                ue = r.unstable_getCurrentPriorityLevel, ce = r.unstable_ImmediatePriority,
                de = r.unstable_UserBlockingPriority, fe = r.unstable_NormalPriority, pe = r.unstable_LowPriority,
                me = r.unstable_IdlePriority, he = r.log, ge = r.unstable_setDisableYieldValue, ve = null, ye = null;

            function be(e) {
                if ("function" === typeof he && ge(e), ye && "function" === typeof ye.setStrictMode) try {
                    ye.setStrictMode(ve, e)
                } catch (t) {
                }
            }

            var we = Math.clz32 ? Math.clz32 : function (e) {
                return 0 === (e >>>= 0) ? 32 : 31 - (Se(e) / ke | 0) | 0
            }, Se = Math.log, ke = Math.LN2;
            var xe = 128, Ee = 4194304;

            function _e(e) {
                var t = 42 & e;
                if (0 !== t) return t;
                switch (e & -e) {
                    case 1:
                        return 1;
                    case 2:
                        return 2;
                    case 4:
                        return 4;
                    case 8:
                        return 8;
                    case 16:
                        return 16;
                    case 32:
                        return 32;
                    case 64:
                        return 64;
                    case 128:
                    case 256:
                    case 512:
                    case 1024:
                    case 2048:
                    case 4096:
                    case 8192:
                    case 16384:
                    case 32768:
                    case 65536:
                    case 131072:
                    case 262144:
                    case 524288:
                    case 1048576:
                    case 2097152:
                        return 4194176 & e;
                    case 4194304:
                    case 8388608:
                    case 16777216:
                    case 33554432:
                        return 62914560 & e;
                    case 67108864:
                        return 67108864;
                    case 134217728:
                        return 134217728;
                    case 268435456:
                        return 268435456;
                    case 536870912:
                        return 536870912;
                    case 1073741824:
                        return 0;
                    default:
                        return e
                }
            }

            function Te(e, t) {
                var n = e.pendingLanes;
                if (0 === n) return 0;
                var r = 0, a = e.suspendedLanes, l = e.pingedLanes, i = e.warmLanes;
                e = 0 !== e.finishedLanes;
                var o = 134217727 & n;
                return 0 !== o ? 0 !== (n = o & ~a) ? r = _e(n) : 0 !== (l &= o) ? r = _e(l) : e || 0 !== (i = o & ~i) && (r = _e(i)) : 0 !== (o = n & ~a) ? r = _e(o) : 0 !== l ? r = _e(l) : e || 0 !== (i = n & ~i) && (r = _e(i)), 0 === r ? 0 : 0 !== t && t !== r && 0 === (t & a) && ((a = r & -r) >= (i = t & -t) || 32 === a && 0 !== (4194176 & i)) ? t : r
            }

            function Ce(e, t) {
                return 0 === (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t)
            }

            function Pe(e, t) {
                switch (e) {
                    case 1:
                    case 2:
                    case 4:
                    case 8:
                        return t + 250;
                    case 16:
                    case 32:
                    case 64:
                    case 128:
                    case 256:
                    case 512:
                    case 1024:
                    case 2048:
                    case 4096:
                    case 8192:
                    case 16384:
                    case 32768:
                    case 65536:
                    case 131072:
                    case 262144:
                    case 524288:
                    case 1048576:
                    case 2097152:
                        return t + 5e3;
                    default:
                        return -1
                }
            }

            function ze() {
                var e = xe;
                return 0 === (4194176 & (xe <<= 1)) && (xe = 128), e
            }

            function Ne() {
                var e = Ee;
                return 0 === (62914560 & (Ee <<= 1)) && (Ee = 4194304), e
            }

            function Le(e) {
                for (var t = [], n = 0; 31 > n; n++) t.push(e);
                return t
            }

            function Oe(e, t) {
                e.pendingLanes |= t, 268435456 !== t && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0)
            }

            function Me(e, t, n) {
                e.pendingLanes |= t, e.suspendedLanes &= ~t;
                var r = 31 - we(t);
                e.entangledLanes |= t, e.entanglements[r] = 1073741824 | e.entanglements[r] | 4194218 & n
            }

            function Ae(e, t) {
                var n = e.entangledLanes |= t;
                for (e = e.entanglements; n;) {
                    var r = 31 - we(n), a = 1 << r;
                    a & t | e[r] & t && (e[r] |= t), n &= ~a
                }
            }

            function Ie(e) {
                return 2 < (e &= -e) ? 8 < e ? 0 !== (134217727 & e) ? 32 : 268435456 : 8 : 2
            }

            function je() {
                var e = H.p;
                return 0 !== e ? e : void 0 === (e = window.event) ? 32 : Kd(e.type)
            }

            var De = Math.random().toString(36).slice(2), Re = "__reactFiber$" + De, Fe = "__reactProps$" + De,
                Ve = "__reactContainer$" + De, Be = "__reactEvents$" + De, He = "__reactListeners$" + De,
                Ge = "__reactHandles$" + De, Ue = "__reactResources$" + De, qe = "__reactMarker$" + De;

            function We(e) {
                delete e[Re], delete e[Fe], delete e[Be], delete e[He], delete e[Ge]
            }

            function $e(e) {
                var t = e[Re];
                if (t) return t;
                for (var n = e.parentNode; n;) {
                    if (t = n[Ve] || n[Re]) {
                        if (n = t.alternate, null !== t.child || null !== n && null !== n.child) for (e = sd(e); null !== e;) {
                            if (n = e[Re]) return n;
                            e = sd(e)
                        }
                        return t
                    }
                    n = (e = n).parentNode
                }
                return null
            }

            function Qe(e) {
                if (e = e[Re] || e[Ve]) {
                    var t = e.tag;
                    if (5 === t || 6 === t || 13 === t || 26 === t || 27 === t || 3 === t) return e
                }
                return null
            }

            function Ye(e) {
                var t = e.tag;
                if (5 === t || 26 === t || 27 === t || 6 === t) return e.stateNode;
                throw Error(i(33))
            }

            function Xe(e) {
                var t = e[Ue];
                return t || (t = e[Ue] = {hoistableStyles: new Map, hoistableScripts: new Map}), t
            }

            function Ke(e) {
                e[qe] = !0
            }

            var Ze = new Set, Je = {};

            function et(e, t) {
                tt(e, t), tt(e + "Capture", t)
            }

            function tt(e, t) {
                for (Je[e] = t, e = 0; e < t.length; e++) Ze.add(t[e])
            }

            var nt = !("undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement),
                rt = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),
                at = {}, lt = {};

            function it(e, t, n) {
                if (a = t, re.call(lt, a) || !re.call(at, a) && (rt.test(a) ? lt[a] = !0 : (at[a] = !0, 0))) if (null === n) e.removeAttribute(t); else {
                    switch (typeof n) {
                        case"undefined":
                        case"function":
                        case"symbol":
                            return void e.removeAttribute(t);
                        case"boolean":
                            var r = t.toLowerCase().slice(0, 5);
                            if ("data-" !== r && "aria-" !== r) return void e.removeAttribute(t)
                    }
                    e.setAttribute(t, "" + n)
                }
                var a
            }

            function ot(e, t, n) {
                if (null === n) e.removeAttribute(t); else {
                    switch (typeof n) {
                        case"undefined":
                        case"function":
                        case"symbol":
                        case"boolean":
                            return void e.removeAttribute(t)
                    }
                    e.setAttribute(t, "" + n)
                }
            }

            function st(e, t, n, r) {
                if (null === r) e.removeAttribute(n); else {
                    switch (typeof r) {
                        case"undefined":
                        case"function":
                        case"symbol":
                        case"boolean":
                            return void e.removeAttribute(n)
                    }
                    e.setAttributeNS(t, n, "" + r)
                }
            }

            function ut(e) {
                switch (typeof e) {
                    case"bigint":
                    case"boolean":
                    case"number":
                    case"string":
                    case"undefined":
                    case"object":
                        return e;
                    default:
                        return ""
                }
            }

            function ct(e) {
                var t = e.type;
                return (e = e.nodeName) && "input" === e.toLowerCase() && ("checkbox" === t || "radio" === t)
            }

            function dt(e) {
                e._valueTracker || (e._valueTracker = function (e) {
                    var t = ct(e) ? "checked" : "value",
                        n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
                    if (!e.hasOwnProperty(t) && "undefined" !== typeof n && "function" === typeof n.get && "function" === typeof n.set) {
                        var a = n.get, l = n.set;
                        return Object.defineProperty(e, t, {
                            configurable: !0, get: function () {
                                return a.call(this)
                            }, set: function (e) {
                                r = "" + e, l.call(this, e)
                            }
                        }), Object.defineProperty(e, t, {enumerable: n.enumerable}), {
                            getValue: function () {
                                return r
                            }, setValue: function (e) {
                                r = "" + e
                            }, stopTracking: function () {
                                e._valueTracker = null, delete e[t]
                            }
                        }
                    }
                }(e))
            }

            function ft(e) {
                if (!e) return !1;
                var t = e._valueTracker;
                if (!t) return !0;
                var n = t.getValue(), r = "";
                return e && (r = ct(e) ? e.checked ? "true" : "false" : e.value), (e = r) !== n && (t.setValue(e), !0)
            }

            function pt(e) {
                if ("undefined" === typeof (e = e || ("undefined" !== typeof document ? document : void 0))) return null;
                try {
                    return e.activeElement || e.body
                } catch (t) {
                    return e.body
                }
            }

            var mt = /[\n"\\]/g;

            function ht(e) {
                return e.replace(mt, (function (e) {
                    return "\\" + e.charCodeAt(0).toString(16) + " "
                }))
            }

            function gt(e, t, n, r, a, l, i, o) {
                e.name = "", null != i && "function" !== typeof i && "symbol" !== typeof i && "boolean" !== typeof i ? e.type = i : e.removeAttribute("type"), null != t ? "number" === i ? (0 === t && "" === e.value || e.value != t) && (e.value = "" + ut(t)) : e.value !== "" + ut(t) && (e.value = "" + ut(t)) : "submit" !== i && "reset" !== i || e.removeAttribute("value"), null != t ? yt(e, i, ut(t)) : null != n ? yt(e, i, ut(n)) : null != r && e.removeAttribute("value"), null == a && null != l && (e.defaultChecked = !!l), null != a && (e.checked = a && "function" !== typeof a && "symbol" !== typeof a), null != o && "function" !== typeof o && "symbol" !== typeof o && "boolean" !== typeof o ? e.name = "" + ut(o) : e.removeAttribute("name")
            }

            function vt(e, t, n, r, a, l, i, o) {
                if (null != l && "function" !== typeof l && "symbol" !== typeof l && "boolean" !== typeof l && (e.type = l), null != t || null != n) {
                    if (!("submit" !== l && "reset" !== l || void 0 !== t && null !== t)) return;
                    n = null != n ? "" + ut(n) : "", t = null != t ? "" + ut(t) : n, o || t === e.value || (e.value = t), e.defaultValue = t
                }
                r = "function" !== typeof (r = null != r ? r : a) && "symbol" !== typeof r && !!r, e.checked = o ? e.checked : !!r, e.defaultChecked = !!r, null != i && "function" !== typeof i && "symbol" !== typeof i && "boolean" !== typeof i && (e.name = i)
            }

            function yt(e, t, n) {
                "number" === t && pt(e.ownerDocument) === e || e.defaultValue === "" + n || (e.defaultValue = "" + n)
            }

            function bt(e, t, n, r) {
                if (e = e.options, t) {
                    t = {};
                    for (var a = 0; a < n.length; a++) t["$" + n[a]] = !0;
                    for (n = 0; n < e.length; n++) a = t.hasOwnProperty("$" + e[n].value), e[n].selected !== a && (e[n].selected = a), a && r && (e[n].defaultSelected = !0)
                } else {
                    for (n = "" + ut(n), t = null, a = 0; a < e.length; a++) {
                        if (e[a].value === n) return e[a].selected = !0, void (r && (e[a].defaultSelected = !0));
                        null !== t || e[a].disabled || (t = e[a])
                    }
                    null !== t && (t.selected = !0)
                }
            }

            function wt(e, t, n) {
                null == t || ((t = "" + ut(t)) !== e.value && (e.value = t), null != n) ? e.defaultValue = null != n ? "" + ut(n) : "" : e.defaultValue !== t && (e.defaultValue = t)
            }

            function St(e, t, n, r) {
                if (null == t) {
                    if (null != r) {
                        if (null != n) throw Error(i(92));
                        if (B(r)) {
                            if (1 < r.length) throw Error(i(93));
                            r = r[0]
                        }
                        n = r
                    }
                    null == n && (n = ""), t = n
                }
                n = ut(t), e.defaultValue = n, (r = e.textContent) === n && "" !== r && null !== r && (e.value = r)
            }

            function kt(e, t) {
                if (t) {
                    var n = e.firstChild;
                    if (n && n === e.lastChild && 3 === n.nodeType) return void (n.nodeValue = t)
                }
                e.textContent = t
            }

            var xt = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));

            function Et(e, t, n) {
                var r = 0 === t.indexOf("--");
                null == n || "boolean" === typeof n || "" === n ? r ? e.setProperty(t, "") : "float" === t ? e.cssFloat = "" : e[t] = "" : r ? e.setProperty(t, n) : "number" !== typeof n || 0 === n || xt.has(t) ? "float" === t ? e.cssFloat = n : e[t] = ("" + n).trim() : e[t] = n + "px"
            }

            function _t(e, t, n) {
                if (null != t && "object" !== typeof t) throw Error(i(62));
                if (e = e.style, null != n) {
                    for (var r in n) !n.hasOwnProperty(r) || null != t && t.hasOwnProperty(r) || (0 === r.indexOf("--") ? e.setProperty(r, "") : "float" === r ? e.cssFloat = "" : e[r] = "");
                    for (var a in t) r = t[a], t.hasOwnProperty(a) && n[a] !== r && Et(e, a, r)
                } else for (var l in t) t.hasOwnProperty(l) && Et(e, l, t[l])
            }

            function Tt(e) {
                if (-1 === e.indexOf("-")) return !1;
                switch (e) {
                    case"annotation-xml":
                    case"color-profile":
                    case"font-face":
                    case"font-face-src":
                    case"font-face-uri":
                    case"font-face-format":
                    case"font-face-name":
                    case"missing-glyph":
                        return !1;
                    default:
                        return !0
                }
            }

            var Ct = new Map([["acceptCharset", "accept-charset"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"], ["crossOrigin", "crossorigin"], ["accentHeight", "accent-height"], ["alignmentBaseline", "alignment-baseline"], ["arabicForm", "arabic-form"], ["baselineShift", "baseline-shift"], ["capHeight", "cap-height"], ["clipPath", "clip-path"], ["clipRule", "clip-rule"], ["colorInterpolation", "color-interpolation"], ["colorInterpolationFilters", "color-interpolation-filters"], ["colorProfile", "color-profile"], ["colorRendering", "color-rendering"], ["dominantBaseline", "dominant-baseline"], ["enableBackground", "enable-background"], ["fillOpacity", "fill-opacity"], ["fillRule", "fill-rule"], ["floodColor", "flood-color"], ["floodOpacity", "flood-opacity"], ["fontFamily", "font-family"], ["fontSize", "font-size"], ["fontSizeAdjust", "font-size-adjust"], ["fontStretch", "font-stretch"], ["fontStyle", "font-style"], ["fontVariant", "font-variant"], ["fontWeight", "font-weight"], ["glyphName", "glyph-name"], ["glyphOrientationHorizontal", "glyph-orientation-horizontal"], ["glyphOrientationVertical", "glyph-orientation-vertical"], ["horizAdvX", "horiz-adv-x"], ["horizOriginX", "horiz-origin-x"], ["imageRendering", "image-rendering"], ["letterSpacing", "letter-spacing"], ["lightingColor", "lighting-color"], ["markerEnd", "marker-end"], ["markerMid", "marker-mid"], ["markerStart", "marker-start"], ["overlinePosition", "overline-position"], ["overlineThickness", "overline-thickness"], ["paintOrder", "paint-order"], ["panose-1", "panose-1"], ["pointerEvents", "pointer-events"], ["renderingIntent", "rendering-intent"], ["shapeRendering", "shape-rendering"], ["stopColor", "stop-color"], ["stopOpacity", "stop-opacity"], ["strikethroughPosition", "strikethrough-position"], ["strikethroughThickness", "strikethrough-thickness"], ["strokeDasharray", "stroke-dasharray"], ["strokeDashoffset", "stroke-dashoffset"], ["strokeLinecap", "stroke-linecap"], ["strokeLinejoin", "stroke-linejoin"], ["strokeMiterlimit", "stroke-miterlimit"], ["strokeOpacity", "stroke-opacity"], ["strokeWidth", "stroke-width"], ["textAnchor", "text-anchor"], ["textDecoration", "text-decoration"], ["textRendering", "text-rendering"], ["transformOrigin", "transform-origin"], ["underlinePosition", "underline-position"], ["underlineThickness", "underline-thickness"], ["unicodeBidi", "unicode-bidi"], ["unicodeRange", "unicode-range"], ["unitsPerEm", "units-per-em"], ["vAlphabetic", "v-alphabetic"], ["vHanging", "v-hanging"], ["vIdeographic", "v-ideographic"], ["vMathematical", "v-mathematical"], ["vectorEffect", "vector-effect"], ["vertAdvY", "vert-adv-y"], ["vertOriginX", "vert-origin-x"], ["vertOriginY", "vert-origin-y"], ["wordSpacing", "word-spacing"], ["writingMode", "writing-mode"], ["xmlnsXlink", "xmlns:xlink"], ["xHeight", "x-height"]]),
                Pt = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;

            function zt(e) {
                return Pt.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e
            }

            var Nt = null;

            function Lt(e) {
                return (e = e.target || e.srcElement || window).correspondingUseElement && (e = e.correspondingUseElement), 3 === e.nodeType ? e.parentNode : e
            }

            var Ot = null, Mt = null;

            function At(e) {
                var t = Qe(e);
                if (t && (e = t.stateNode)) {
                    var n = e[Fe] || null;
                    e:switch (e = t.stateNode, t.type) {
                        case"input":
                            if (gt(e, n.value, n.defaultValue, n.defaultValue, n.checked, n.defaultChecked, n.type, n.name), t = n.name, "radio" === n.type && null != t) {
                                for (n = e; n.parentNode;) n = n.parentNode;
                                for (n = n.querySelectorAll('input[name="' + ht("" + t) + '"][type="radio"]'), t = 0; t < n.length; t++) {
                                    var r = n[t];
                                    if (r !== e && r.form === e.form) {
                                        var a = r[Fe] || null;
                                        if (!a) throw Error(i(90));
                                        gt(r, a.value, a.defaultValue, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name)
                                    }
                                }
                                for (t = 0; t < n.length; t++) (r = n[t]).form === e.form && ft(r)
                            }
                            break e;
                        case"textarea":
                            wt(e, n.value, n.defaultValue);
                            break e;
                        case"select":
                            null != (t = n.value) && bt(e, !!n.multiple, t, !1)
                    }
                }
            }

            var It = !1;

            function jt(e, t, n) {
                if (It) return e(t, n);
                It = !0;
                try {
                    return e(t)
                } finally {
                    if (It = !1, (null !== Ot || null !== Mt) && (Ru(), Ot && (t = Ot, e = Mt, Mt = Ot = null, At(t), e))) for (t = 0; t < e.length; t++) At(e[t])
                }
            }

            function Dt(e, t) {
                var n = e.stateNode;
                if (null === n) return null;
                var r = n[Fe] || null;
                if (null === r) return null;
                n = r[t];
                e:switch (t) {
                    case"onClick":
                    case"onClickCapture":
                    case"onDoubleClick":
                    case"onDoubleClickCapture":
                    case"onMouseDown":
                    case"onMouseDownCapture":
                    case"onMouseMove":
                    case"onMouseMoveCapture":
                    case"onMouseUp":
                    case"onMouseUpCapture":
                    case"onMouseEnter":
                        (r = !r.disabled) || (r = !("button" === (e = e.type) || "input" === e || "select" === e || "textarea" === e)), e = !r;
                        break e;
                    default:
                        e = !1
                }
                if (e) return null;
                if (n && "function" !== typeof n) throw Error(i(231, t, typeof n));
                return n
            }

            var Rt = !1;
            if (nt) try {
                var Ft = {};
                Object.defineProperty(Ft, "passive", {
                    get: function () {
                        Rt = !0
                    }
                }), window.addEventListener("test", Ft, Ft), window.removeEventListener("test", Ft, Ft)
            } catch (kf) {
                Rt = !1
            }
            var Vt = null, Bt = null, Ht = null;

            function Gt() {
                if (Ht) return Ht;
                var e, t, n = Bt, r = n.length, a = "value" in Vt ? Vt.value : Vt.textContent, l = a.length;
                for (e = 0; e < r && n[e] === a[e]; e++) ;
                var i = r - e;
                for (t = 1; t <= i && n[r - t] === a[l - t]; t++) ;
                return Ht = a.slice(e, 1 < t ? 1 - t : void 0)
            }

            function Ut(e) {
                var t = e.keyCode;
                return "charCode" in e ? 0 === (e = e.charCode) && 13 === t && (e = 13) : e = t, 10 === e && (e = 13), 32 <= e || 13 === e ? e : 0
            }

            function qt() {
                return !0
            }

            function Wt() {
                return !1
            }

            function $t(e) {
                function t(t, n, r, a, l) {
                    for (var i in this._reactName = t, this._targetInst = r, this.type = n, this.nativeEvent = a, this.target = l, this.currentTarget = null, e) e.hasOwnProperty(i) && (t = e[i], this[i] = t ? t(a) : a[i]);
                    return this.isDefaultPrevented = (null != a.defaultPrevented ? a.defaultPrevented : !1 === a.returnValue) ? qt : Wt, this.isPropagationStopped = Wt, this
                }

                return L(t.prototype, {
                    preventDefault: function () {
                        this.defaultPrevented = !0;
                        var e = this.nativeEvent;
                        e && (e.preventDefault ? e.preventDefault() : "unknown" !== typeof e.returnValue && (e.returnValue = !1), this.isDefaultPrevented = qt)
                    }, stopPropagation: function () {
                        var e = this.nativeEvent;
                        e && (e.stopPropagation ? e.stopPropagation() : "unknown" !== typeof e.cancelBubble && (e.cancelBubble = !0), this.isPropagationStopped = qt)
                    }, persist: function () {
                    }, isPersistent: qt
                }), t
            }

            var Qt, Yt, Xt, Kt = {
                    eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function (e) {
                        return e.timeStamp || Date.now()
                    }, defaultPrevented: 0, isTrusted: 0
                }, Zt = $t(Kt), Jt = L({}, Kt, {view: 0, detail: 0}), en = $t(Jt), tn = L({}, Jt, {
                    screenX: 0,
                    screenY: 0,
                    clientX: 0,
                    clientY: 0,
                    pageX: 0,
                    pageY: 0,
                    ctrlKey: 0,
                    shiftKey: 0,
                    altKey: 0,
                    metaKey: 0,
                    getModifierState: pn,
                    button: 0,
                    buttons: 0,
                    relatedTarget: function (e) {
                        return void 0 === e.relatedTarget ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
                    },
                    movementX: function (e) {
                        return "movementX" in e ? e.movementX : (e !== Xt && (Xt && "mousemove" === e.type ? (Qt = e.screenX - Xt.screenX, Yt = e.screenY - Xt.screenY) : Yt = Qt = 0, Xt = e), Qt)
                    },
                    movementY: function (e) {
                        return "movementY" in e ? e.movementY : Yt
                    }
                }), nn = $t(tn), rn = $t(L({}, tn, {dataTransfer: 0})), an = $t(L({}, Jt, {relatedTarget: 0})),
                ln = $t(L({}, Kt, {animationName: 0, elapsedTime: 0, pseudoElement: 0})), on = $t(L({}, Kt, {
                    clipboardData: function (e) {
                        return "clipboardData" in e ? e.clipboardData : window.clipboardData
                    }
                })), sn = $t(L({}, Kt, {data: 0})), un = {
                    Esc: "Escape",
                    Spacebar: " ",
                    Left: "ArrowLeft",
                    Up: "ArrowUp",
                    Right: "ArrowRight",
                    Down: "ArrowDown",
                    Del: "Delete",
                    Win: "OS",
                    Menu: "ContextMenu",
                    Apps: "ContextMenu",
                    Scroll: "ScrollLock",
                    MozPrintableKey: "Unidentified"
                }, cn = {
                    8: "Backspace",
                    9: "Tab",
                    12: "Clear",
                    13: "Enter",
                    16: "Shift",
                    17: "Control",
                    18: "Alt",
                    19: "Pause",
                    20: "CapsLock",
                    27: "Escape",
                    32: " ",
                    33: "PageUp",
                    34: "PageDown",
                    35: "End",
                    36: "Home",
                    37: "ArrowLeft",
                    38: "ArrowUp",
                    39: "ArrowRight",
                    40: "ArrowDown",
                    45: "Insert",
                    46: "Delete",
                    112: "F1",
                    113: "F2",
                    114: "F3",
                    115: "F4",
                    116: "F5",
                    117: "F6",
                    118: "F7",
                    119: "F8",
                    120: "F9",
                    121: "F10",
                    122: "F11",
                    123: "F12",
                    144: "NumLock",
                    145: "ScrollLock",
                    224: "Meta"
                }, dn = {Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey"};

            function fn(e) {
                var t = this.nativeEvent;
                return t.getModifierState ? t.getModifierState(e) : !!(e = dn[e]) && !!t[e]
            }

            function pn() {
                return fn
            }

            var mn = $t(L({}, Jt, {
                    key: function (e) {
                        if (e.key) {
                            var t = un[e.key] || e.key;
                            if ("Unidentified" !== t) return t
                        }
                        return "keypress" === e.type ? 13 === (e = Ut(e)) ? "Enter" : String.fromCharCode(e) : "keydown" === e.type || "keyup" === e.type ? cn[e.keyCode] || "Unidentified" : ""
                    },
                    code: 0,
                    location: 0,
                    ctrlKey: 0,
                    shiftKey: 0,
                    altKey: 0,
                    metaKey: 0,
                    repeat: 0,
                    locale: 0,
                    getModifierState: pn,
                    charCode: function (e) {
                        return "keypress" === e.type ? Ut(e) : 0
                    },
                    keyCode: function (e) {
                        return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0
                    },
                    which: function (e) {
                        return "keypress" === e.type ? Ut(e) : "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0
                    }
                })), hn = $t(L({}, tn, {
                    pointerId: 0,
                    width: 0,
                    height: 0,
                    pressure: 0,
                    tangentialPressure: 0,
                    tiltX: 0,
                    tiltY: 0,
                    twist: 0,
                    pointerType: 0,
                    isPrimary: 0
                })), gn = $t(L({}, Jt, {
                    touches: 0,
                    targetTouches: 0,
                    changedTouches: 0,
                    altKey: 0,
                    metaKey: 0,
                    ctrlKey: 0,
                    shiftKey: 0,
                    getModifierState: pn
                })), vn = $t(L({}, Kt, {propertyName: 0, elapsedTime: 0, pseudoElement: 0})), yn = $t(L({}, tn, {
                    deltaX: function (e) {
                        return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
                    }, deltaY: function (e) {
                        return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
                    }, deltaZ: 0, deltaMode: 0
                })), bn = $t(L({}, Kt, {newState: 0, oldState: 0})), wn = [9, 13, 27, 32],
                Sn = nt && "CompositionEvent" in window, kn = null;
            nt && "documentMode" in document && (kn = document.documentMode);
            var xn = nt && "TextEvent" in window && !kn, En = nt && (!Sn || kn && 8 < kn && 11 >= kn),
                _n = String.fromCharCode(32), Tn = !1;

            function Cn(e, t) {
                switch (e) {
                    case"keyup":
                        return -1 !== wn.indexOf(t.keyCode);
                    case"keydown":
                        return 229 !== t.keyCode;
                    case"keypress":
                    case"mousedown":
                    case"focusout":
                        return !0;
                    default:
                        return !1
                }
            }

            function Pn(e) {
                return "object" === typeof (e = e.detail) && "data" in e ? e.data : null
            }

            var zn = !1;
            var Nn = {
                color: !0,
                date: !0,
                datetime: !0,
                "datetime-local": !0,
                email: !0,
                month: !0,
                number: !0,
                password: !0,
                range: !0,
                search: !0,
                tel: !0,
                text: !0,
                time: !0,
                url: !0,
                week: !0
            };

            function Ln(e) {
                var t = e && e.nodeName && e.nodeName.toLowerCase();
                return "input" === t ? !!Nn[e.type] : "textarea" === t
            }

            function On(e, t, n, r) {
                Ot ? Mt ? Mt.push(r) : Mt = [r] : Ot = r, 0 < (t = jc(t, "onChange")).length && (n = new Zt("onChange", "change", null, n, r), e.push({
                    event: n,
                    listeners: t
                }))
            }

            var Mn = null, An = null;

            function In(e) {
                Pc(e, 0)
            }

            function jn(e) {
                if (ft(Ye(e))) return e
            }

            function Dn(e, t) {
                if ("change" === e) return t
            }

            var Rn = !1;
            if (nt) {
                var Fn;
                if (nt) {
                    var Vn = "oninput" in document;
                    if (!Vn) {
                        var Bn = document.createElement("div");
                        Bn.setAttribute("oninput", "return;"), Vn = "function" === typeof Bn.oninput
                    }
                    Fn = Vn
                } else Fn = !1;
                Rn = Fn && (!document.documentMode || 9 < document.documentMode)
            }

            function Hn() {
                Mn && (Mn.detachEvent("onpropertychange", Gn), An = Mn = null)
            }

            function Gn(e) {
                if ("value" === e.propertyName && jn(An)) {
                    var t = [];
                    On(t, An, e, Lt(e)), jt(In, t)
                }
            }

            function Un(e, t, n) {
                "focusin" === e ? (Hn(), An = n, (Mn = t).attachEvent("onpropertychange", Gn)) : "focusout" === e && Hn()
            }

            function qn(e) {
                if ("selectionchange" === e || "keyup" === e || "keydown" === e) return jn(An)
            }

            function Wn(e, t) {
                if ("click" === e) return jn(t)
            }

            function $n(e, t) {
                if ("input" === e || "change" === e) return jn(t)
            }

            var Qn = "function" === typeof Object.is ? Object.is : function (e, t) {
                return e === t && (0 !== e || 1 / e === 1 / t) || e !== e && t !== t
            };

            function Yn(e, t) {
                if (Qn(e, t)) return !0;
                if ("object" !== typeof e || null === e || "object" !== typeof t || null === t) return !1;
                var n = Object.keys(e), r = Object.keys(t);
                if (n.length !== r.length) return !1;
                for (r = 0; r < n.length; r++) {
                    var a = n[r];
                    if (!re.call(t, a) || !Qn(e[a], t[a])) return !1
                }
                return !0
            }

            function Xn(e) {
                for (; e && e.firstChild;) e = e.firstChild;
                return e
            }

            function Kn(e, t) {
                var n, r = Xn(e);
                for (e = 0; r;) {
                    if (3 === r.nodeType) {
                        if (n = e + r.textContent.length, e <= t && n >= t) return {node: r, offset: t - e};
                        e = n
                    }
                    e:{
                        for (; r;) {
                            if (r.nextSibling) {
                                r = r.nextSibling;
                                break e
                            }
                            r = r.parentNode
                        }
                        r = void 0
                    }
                    r = Xn(r)
                }
            }

            function Zn(e, t) {
                return !(!e || !t) && (e === t || (!e || 3 !== e.nodeType) && (t && 3 === t.nodeType ? Zn(e, t.parentNode) : "contains" in e ? e.contains(t) : !!e.compareDocumentPosition && !!(16 & e.compareDocumentPosition(t))))
            }

            function Jn(e) {
                for (var t = pt((e = null != e && null != e.ownerDocument && null != e.ownerDocument.defaultView ? e.ownerDocument.defaultView : window).document); t instanceof e.HTMLIFrameElement;) {
                    try {
                        var n = "string" === typeof t.contentWindow.location.href
                    } catch (r) {
                        n = !1
                    }
                    if (!n) break;
                    t = pt((e = t.contentWindow).document)
                }
                return t
            }

            function er(e) {
                var t = e && e.nodeName && e.nodeName.toLowerCase();
                return t && ("input" === t && ("text" === e.type || "search" === e.type || "tel" === e.type || "url" === e.type || "password" === e.type) || "textarea" === t || "true" === e.contentEditable)
            }

            function tr(e, t) {
                var n = Jn(t);
                t = e.focusedElem;
                var r = e.selectionRange;
                if (n !== t && t && t.ownerDocument && Zn(t.ownerDocument.documentElement, t)) {
                    if (null !== r && er(t)) if (e = r.start, void 0 === (n = r.end) && (n = e), "selectionStart" in t) t.selectionStart = e, t.selectionEnd = Math.min(n, t.value.length); else if ((n = (e = t.ownerDocument || document) && e.defaultView || window).getSelection) {
                        n = n.getSelection();
                        var a = t.textContent.length, l = Math.min(r.start, a);
                        r = void 0 === r.end ? l : Math.min(r.end, a), !n.extend && l > r && (a = r, r = l, l = a), a = Kn(t, l);
                        var i = Kn(t, r);
                        a && i && (1 !== n.rangeCount || n.anchorNode !== a.node || n.anchorOffset !== a.offset || n.focusNode !== i.node || n.focusOffset !== i.offset) && ((e = e.createRange()).setStart(a.node, a.offset), n.removeAllRanges(), l > r ? (n.addRange(e), n.extend(i.node, i.offset)) : (e.setEnd(i.node, i.offset), n.addRange(e)))
                    }
                    for (e = [], n = t; n = n.parentNode;) 1 === n.nodeType && e.push({
                        element: n,
                        left: n.scrollLeft,
                        top: n.scrollTop
                    });
                    for ("function" === typeof t.focus && t.focus(), t = 0; t < e.length; t++) (n = e[t]).element.scrollLeft = n.left, n.element.scrollTop = n.top
                }
            }

            var nr = nt && "documentMode" in document && 11 >= document.documentMode, rr = null, ar = null, lr = null,
                ir = !1;

            function or(e, t, n) {
                var r = n.window === n ? n.document : 9 === n.nodeType ? n : n.ownerDocument;
                ir || null == rr || rr !== pt(r) || ("selectionStart" in (r = rr) && er(r) ? r = {
                    start: r.selectionStart,
                    end: r.selectionEnd
                } : r = {
                    anchorNode: (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection()).anchorNode,
                    anchorOffset: r.anchorOffset,
                    focusNode: r.focusNode,
                    focusOffset: r.focusOffset
                }, lr && Yn(lr, r) || (lr = r, 0 < (r = jc(ar, "onSelect")).length && (t = new Zt("onSelect", "select", null, t, n), e.push({
                    event: t,
                    listeners: r
                }), t.target = rr)))
            }

            function sr(e, t) {
                var n = {};
                return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n
            }

            var ur = {
                animationend: sr("Animation", "AnimationEnd"),
                animationiteration: sr("Animation", "AnimationIteration"),
                animationstart: sr("Animation", "AnimationStart"),
                transitionrun: sr("Transition", "TransitionRun"),
                transitionstart: sr("Transition", "TransitionStart"),
                transitioncancel: sr("Transition", "TransitionCancel"),
                transitionend: sr("Transition", "TransitionEnd")
            }, cr = {}, dr = {};

            function fr(e) {
                if (cr[e]) return cr[e];
                if (!ur[e]) return e;
                var t, n = ur[e];
                for (t in n) if (n.hasOwnProperty(t) && t in dr) return cr[e] = n[t];
                return e
            }

            nt && (dr = document.createElement("div").style, "AnimationEvent" in window || (delete ur.animationend.animation, delete ur.animationiteration.animation, delete ur.animationstart.animation), "TransitionEvent" in window || delete ur.transitionend.transition);
            var pr = fr("animationend"), mr = fr("animationiteration"), hr = fr("animationstart"),
                gr = fr("transitionrun"), vr = fr("transitionstart"), yr = fr("transitioncancel"),
                br = fr("transitionend"), wr = new Map,
                Sr = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(" ");

            function kr(e, t) {
                wr.set(e, t), et(t, [e])
            }

            var xr = [], Er = 0, _r = 0;

            function Tr() {
                for (var e = Er, t = _r = Er = 0; t < e;) {
                    var n = xr[t];
                    xr[t++] = null;
                    var r = xr[t];
                    xr[t++] = null;
                    var a = xr[t];
                    xr[t++] = null;
                    var l = xr[t];
                    if (xr[t++] = null, null !== r && null !== a) {
                        var i = r.pending;
                        null === i ? a.next = a : (a.next = i.next, i.next = a), r.pending = a
                    }
                    0 !== l && Nr(n, a, l)
                }
            }

            function Cr(e, t, n, r) {
                xr[Er++] = e, xr[Er++] = t, xr[Er++] = n, xr[Er++] = r, _r |= r, e.lanes |= r, null !== (e = e.alternate) && (e.lanes |= r)
            }

            function Pr(e, t, n, r) {
                return Cr(e, t, n, r), Lr(e)
            }

            function zr(e, t) {
                return Cr(e, null, null, t), Lr(e)
            }

            function Nr(e, t, n) {
                e.lanes |= n;
                var r = e.alternate;
                null !== r && (r.lanes |= n);
                for (var a = !1, l = e.return; null !== l;) l.childLanes |= n, null !== (r = l.alternate) && (r.childLanes |= n), 22 === l.tag && (null === (e = l.stateNode) || 1 & e._visibility || (a = !0)), e = l, l = l.return;
                a && null !== t && 3 === e.tag && (l = e.stateNode, a = 31 - we(n), null === (e = (l = l.hiddenUpdates)[a]) ? l[a] = [t] : e.push(t), t.lane = 536870912 | n)
            }

            function Lr(e) {
                if (50 < Pu) throw Pu = 0, zu = null, Error(i(185));
                for (var t = e.return; null !== t;) t = (e = t).return;
                return 3 === e.tag ? e.stateNode : null
            }

            var Or = {}, Mr = new WeakMap;

            function Ar(e, t) {
                if ("object" === typeof e && null !== e) {
                    var n = Mr.get(e);
                    return void 0 !== n ? n : (t = {value: e, source: t, stack: j(t)}, Mr.set(e, t), t)
                }
                return {value: e, source: t, stack: j(t)}
            }

            var Ir = [], jr = 0, Dr = null, Rr = 0, Fr = [], Vr = 0, Br = null, Hr = 1, Gr = "";

            function Ur(e, t) {
                Ir[jr++] = Rr, Ir[jr++] = Dr, Dr = e, Rr = t
            }

            function qr(e, t, n) {
                Fr[Vr++] = Hr, Fr[Vr++] = Gr, Fr[Vr++] = Br, Br = e;
                var r = Hr;
                e = Gr;
                var a = 32 - we(r) - 1;
                r &= ~(1 << a), n += 1;
                var l = 32 - we(t) + a;
                if (30 < l) {
                    var i = a - a % 5;
                    l = (r & (1 << i) - 1).toString(32), r >>= i, a -= i, Hr = 1 << 32 - we(t) + a | n << a | r, Gr = l + e
                } else Hr = 1 << l | n << a | r, Gr = e
            }

            function Wr(e) {
                null !== e.return && (Ur(e, 1), qr(e, 1, 0))
            }

            function $r(e) {
                for (; e === Dr;) Dr = Ir[--jr], Ir[jr] = null, Rr = Ir[--jr], Ir[jr] = null;
                for (; e === Br;) Br = Fr[--Vr], Fr[Vr] = null, Gr = Fr[--Vr], Fr[Vr] = null, Hr = Fr[--Vr], Fr[Vr] = null
            }

            var Qr = null, Yr = null, Xr = !1, Kr = null, Zr = !1, Jr = Error(i(519));

            function ea(e) {
                throw la(Ar(Error(i(418, "")), e)), Jr
            }

            function ta(e) {
                var t = e.stateNode, n = e.type, r = e.memoizedProps;
                switch (t[Re] = e, t[Fe] = r, n) {
                    case"dialog":
                        zc("cancel", t), zc("close", t);
                        break;
                    case"iframe":
                    case"object":
                    case"embed":
                        zc("load", t);
                        break;
                    case"video":
                    case"audio":
                        for (n = 0; n < Tc.length; n++) zc(Tc[n], t);
                        break;
                    case"source":
                        zc("error", t);
                        break;
                    case"img":
                    case"image":
                    case"link":
                        zc("error", t), zc("load", t);
                        break;
                    case"details":
                        zc("toggle", t);
                        break;
                    case"input":
                        zc("invalid", t), vt(t, r.value, r.defaultValue, r.checked, r.defaultChecked, r.type, r.name, !0), dt(t);
                        break;
                    case"select":
                        zc("invalid", t);
                        break;
                    case"textarea":
                        zc("invalid", t), St(t, r.value, r.defaultValue, r.children), dt(t)
                }
                "string" !== typeof (n = r.children) && "number" !== typeof n && "bigint" !== typeof n || t.textContent === "" + n || !0 === r.suppressHydrationWarning || Hc(t.textContent, n) ? (null != r.popover && (zc("beforetoggle", t), zc("toggle", t)), null != r.onScroll && zc("scroll", t), null != r.onScrollEnd && zc("scrollend", t), null != r.onClick && (t.onclick = Gc), t = !0) : t = !1, t || ea(e)
            }

            function na(e) {
                for (Qr = e.return; Qr;) switch (Qr.tag) {
                    case 3:
                    case 27:
                        return void (Zr = !0);
                    case 5:
                    case 13:
                        return void (Zr = !1);
                    default:
                        Qr = Qr.return
                }
            }

            function ra(e) {
                if (e !== Qr) return !1;
                if (!Xr) return na(e), Xr = !0, !1;
                var t, n = !1;
                if ((t = 3 !== e.tag && 27 !== e.tag) && ((t = 5 === e.tag) && (t = !("form" !== (t = e.type) && "button" !== t) || Zc(e.type, e.memoizedProps)), t = !t), t && (n = !0), n && Yr && ea(e), na(e), 13 === e.tag) {
                    if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null)) throw Error(i(317));
                    e:{
                        for (e = e.nextSibling, n = 0; e;) {
                            if (8 === e.nodeType) if ("/$" === (t = e.data)) {
                                if (0 === n) {
                                    Yr = od(e.nextSibling);
                                    break e
                                }
                                n--
                            } else "$" !== t && "$!" !== t && "$?" !== t || n++;
                            e = e.nextSibling
                        }
                        Yr = null
                    }
                } else Yr = Qr ? od(e.stateNode.nextSibling) : null;
                return !0
            }

            function aa() {
                Yr = Qr = null, Xr = !1
            }

            function la(e) {
                null === Kr ? Kr = [e] : Kr.push(e)
            }

            var ia = Error(i(460)), oa = Error(i(474)), sa = {
                then: function () {
                }
            };

            function ua(e) {
                return "fulfilled" === (e = e.status) || "rejected" === e
            }

            function ca() {
            }

            function da(e, t, n) {
                switch (void 0 === (n = e[n]) ? e.push(t) : n !== t && (t.then(ca, ca), t = n), t.status) {
                    case"fulfilled":
                        return t.value;
                    case"rejected":
                        if ((e = t.reason) === ia) throw Error(i(483));
                        throw e;
                    default:
                        if ("string" === typeof t.status) t.then(ca, ca); else {
                            if (null !== (e = tu) && 100 < e.shellSuspendCounter) throw Error(i(482));
                            (e = t).status = "pending", e.then((function (e) {
                                if ("pending" === t.status) {
                                    var n = t;
                                    n.status = "fulfilled", n.value = e
                                }
                            }), (function (e) {
                                if ("pending" === t.status) {
                                    var n = t;
                                    n.status = "rejected", n.reason = e
                                }
                            }))
                        }
                        switch (t.status) {
                            case"fulfilled":
                                return t.value;
                            case"rejected":
                                if ((e = t.reason) === ia) throw Error(i(483));
                                throw e
                        }
                        throw fa = t, ia
                }
            }

            var fa = null;

            function pa() {
                if (null === fa) throw Error(i(459));
                var e = fa;
                return fa = null, e
            }

            var ma = null, ha = 0;

            function ga(e) {
                var t = ha;
                return ha += 1, null === ma && (ma = []), da(ma, e, t)
            }

            function va(e, t) {
                t = t.props.ref, e.ref = void 0 !== t ? t : null
            }

            function ya(e, t) {
                if (t.$$typeof === s) throw Error(i(525));
                throw e = Object.prototype.toString.call(t), Error(i(31, "[object Object]" === e ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
            }

            function ba(e) {
                return (0, e._init)(e._payload)
            }

            function wa(e) {
                function t(t, n) {
                    if (e) {
                        var r = t.deletions;
                        null === r ? (t.deletions = [n], t.flags |= 16) : r.push(n)
                    }
                }

                function n(n, r) {
                    if (!e) return null;
                    for (; null !== r;) t(n, r), r = r.sibling;
                    return null
                }

                function r(e) {
                    for (var t = new Map; null !== e;) null !== e.key ? t.set(e.key, e) : t.set(e.index, e), e = e.sibling;
                    return t
                }

                function a(e, t) {
                    return (e = Ds(e, t)).index = 0, e.sibling = null, e
                }

                function l(t, n, r) {
                    return t.index = r, e ? null !== (r = t.alternate) ? (r = r.index) < n ? (t.flags |= 33554434, n) : r : (t.flags |= 33554434, n) : (t.flags |= 1048576, n)
                }

                function o(t) {
                    return e && null === t.alternate && (t.flags |= 33554434), t
                }

                function s(e, t, n, r) {
                    return null === t || 6 !== t.tag ? ((t = Hs(n, e.mode, r)).return = e, t) : ((t = a(t, n)).return = e, t)
                }

                function f(e, t, n, r) {
                    var l = n.type;
                    return l === d ? m(e, t, n.props.children, r, n.key) : null !== t && (t.elementType === l || "object" === typeof l && null !== l && l.$$typeof === S && ba(l) === t.type) ? (va(t = a(t, n.props), n), t.return = e, t) : (va(t = Fs(n.type, n.key, n.props, null, e.mode, r), n), t.return = e, t)
                }

                function p(e, t, n, r) {
                    return null === t || 4 !== t.tag || t.stateNode.containerInfo !== n.containerInfo || t.stateNode.implementation !== n.implementation ? ((t = Gs(n, e.mode, r)).return = e, t) : ((t = a(t, n.children || [])).return = e, t)
                }

                function m(e, t, n, r, l) {
                    return null === t || 7 !== t.tag ? ((t = Vs(n, e.mode, r, l)).return = e, t) : ((t = a(t, n)).return = e, t)
                }

                function h(e, t, n) {
                    if ("string" === typeof t && "" !== t || "number" === typeof t || "bigint" === typeof t) return (t = Hs("" + t, e.mode, n)).return = e, t;
                    if ("object" === typeof t && null !== t) {
                        switch (t.$$typeof) {
                            case u:
                                return va(n = Fs(t.type, t.key, t.props, null, e.mode, n), t), n.return = e, n;
                            case c:
                                return (t = Gs(t, e.mode, n)).return = e, t;
                            case S:
                                return h(e, t = (0, t._init)(t._payload), n)
                        }
                        if (B(t) || _(t)) return (t = Vs(t, e.mode, n, null)).return = e, t;
                        if ("function" === typeof t.then) return h(e, ga(t), n);
                        if (t.$$typeof === g) return h(e, To(e, t), n);
                        ya(e, t)
                    }
                    return null
                }

                function v(e, t, n, r) {
                    var a = null !== t ? t.key : null;
                    if ("string" === typeof n && "" !== n || "number" === typeof n || "bigint" === typeof n) return null !== a ? null : s(e, t, "" + n, r);
                    if ("object" === typeof n && null !== n) {
                        switch (n.$$typeof) {
                            case u:
                                return n.key === a ? f(e, t, n, r) : null;
                            case c:
                                return n.key === a ? p(e, t, n, r) : null;
                            case S:
                                return v(e, t, n = (a = n._init)(n._payload), r)
                        }
                        if (B(n) || _(n)) return null !== a ? null : m(e, t, n, r, null);
                        if ("function" === typeof n.then) return v(e, t, ga(n), r);
                        if (n.$$typeof === g) return v(e, t, To(e, n), r);
                        ya(e, n)
                    }
                    return null
                }

                function y(e, t, n, r, a) {
                    if ("string" === typeof r && "" !== r || "number" === typeof r || "bigint" === typeof r) return s(t, e = e.get(n) || null, "" + r, a);
                    if ("object" === typeof r && null !== r) {
                        switch (r.$$typeof) {
                            case u:
                                return f(t, e = e.get(null === r.key ? n : r.key) || null, r, a);
                            case c:
                                return p(t, e = e.get(null === r.key ? n : r.key) || null, r, a);
                            case S:
                                return y(e, t, n, r = (0, r._init)(r._payload), a)
                        }
                        if (B(r) || _(r)) return m(t, e = e.get(n) || null, r, a, null);
                        if ("function" === typeof r.then) return y(e, t, n, ga(r), a);
                        if (r.$$typeof === g) return y(e, t, n, To(t, r), a);
                        ya(t, r)
                    }
                    return null
                }

                function b(s, f, p, m) {
                    if ("object" === typeof p && null !== p && p.type === d && null === p.key && (p = p.props.children), "object" === typeof p && null !== p) {
                        switch (p.$$typeof) {
                            case u:
                                e:{
                                    for (var w = p.key; null !== f;) {
                                        if (f.key === w) {
                                            if ((w = p.type) === d) {
                                                if (7 === f.tag) {
                                                    n(s, f.sibling), (m = a(f, p.props.children)).return = s, s = m;
                                                    break e
                                                }
                                            } else if (f.elementType === w || "object" === typeof w && null !== w && w.$$typeof === S && ba(w) === f.type) {
                                                n(s, f.sibling), va(m = a(f, p.props), p), m.return = s, s = m;
                                                break e
                                            }
                                            n(s, f);
                                            break
                                        }
                                        t(s, f), f = f.sibling
                                    }
                                    p.type === d ? ((m = Vs(p.props.children, s.mode, m, p.key)).return = s, s = m) : (va(m = Fs(p.type, p.key, p.props, null, s.mode, m), p), m.return = s, s = m)
                                }
                                return o(s);
                            case c:
                                e:{
                                    for (w = p.key; null !== f;) {
                                        if (f.key === w) {
                                            if (4 === f.tag && f.stateNode.containerInfo === p.containerInfo && f.stateNode.implementation === p.implementation) {
                                                n(s, f.sibling), (m = a(f, p.children || [])).return = s, s = m;
                                                break e
                                            }
                                            n(s, f);
                                            break
                                        }
                                        t(s, f), f = f.sibling
                                    }
                                    (m = Gs(p, s.mode, m)).return = s, s = m
                                }
                                return o(s);
                            case S:
                                return b(s, f, p = (w = p._init)(p._payload), m)
                        }
                        if (B(p)) return function (a, i, o, s) {
                            for (var u = null, c = null, d = i, f = i = 0, p = null; null !== d && f < o.length; f++) {
                                d.index > f ? (p = d, d = null) : p = d.sibling;
                                var m = v(a, d, o[f], s);
                                if (null === m) {
                                    null === d && (d = p);
                                    break
                                }
                                e && d && null === m.alternate && t(a, d), i = l(m, i, f), null === c ? u = m : c.sibling = m, c = m, d = p
                            }
                            if (f === o.length) return n(a, d), Xr && Ur(a, f), u;
                            if (null === d) {
                                for (; f < o.length; f++) null !== (d = h(a, o[f], s)) && (i = l(d, i, f), null === c ? u = d : c.sibling = d, c = d);
                                return Xr && Ur(a, f), u
                            }
                            for (d = r(d); f < o.length; f++) null !== (p = y(d, a, f, o[f], s)) && (e && null !== p.alternate && d.delete(null === p.key ? f : p.key), i = l(p, i, f), null === c ? u = p : c.sibling = p, c = p);
                            return e && d.forEach((function (e) {
                                return t(a, e)
                            })), Xr && Ur(a, f), u
                        }(s, f, p, m);
                        if (_(p)) {
                            if ("function" !== typeof (w = _(p))) throw Error(i(150));
                            return function (a, o, s, u) {
                                if (null == s) throw Error(i(151));
                                for (var c = null, d = null, f = o, p = o = 0, m = null, g = s.next(); null !== f && !g.done; p++, g = s.next()) {
                                    f.index > p ? (m = f, f = null) : m = f.sibling;
                                    var b = v(a, f, g.value, u);
                                    if (null === b) {
                                        null === f && (f = m);
                                        break
                                    }
                                    e && f && null === b.alternate && t(a, f), o = l(b, o, p), null === d ? c = b : d.sibling = b, d = b, f = m
                                }
                                if (g.done) return n(a, f), Xr && Ur(a, p), c;
                                if (null === f) {
                                    for (; !g.done; p++, g = s.next()) null !== (g = h(a, g.value, u)) && (o = l(g, o, p), null === d ? c = g : d.sibling = g, d = g);
                                    return Xr && Ur(a, p), c
                                }
                                for (f = r(f); !g.done; p++, g = s.next()) null !== (g = y(f, a, p, g.value, u)) && (e && null !== g.alternate && f.delete(null === g.key ? p : g.key), o = l(g, o, p), null === d ? c = g : d.sibling = g, d = g);
                                return e && f.forEach((function (e) {
                                    return t(a, e)
                                })), Xr && Ur(a, p), c
                            }(s, f, p = w.call(p), m)
                        }
                        if ("function" === typeof p.then) return b(s, f, ga(p), m);
                        if (p.$$typeof === g) return b(s, f, To(s, p), m);
                        ya(s, p)
                    }
                    return "string" === typeof p && "" !== p || "number" === typeof p || "bigint" === typeof p ? (p = "" + p, null !== f && 6 === f.tag ? (n(s, f.sibling), (m = a(f, p)).return = s, s = m) : (n(s, f), (m = Hs(p, s.mode, m)).return = s, s = m), o(s)) : n(s, f)
                }

                return function (e, t, n, r) {
                    try {
                        ha = 0;
                        var a = b(e, t, n, r);
                        return ma = null, a
                    } catch (i) {
                        if (i === ia) throw i;
                        var l = Is(29, i, null, e.mode);
                        return l.lanes = r, l.return = e, l
                    }
                }
            }

            var Sa = wa(!0), ka = wa(!1), xa = W(null), Ea = W(0);

            function _a(e, t) {
                Q(Ea, e = uu), Q(xa, t), uu = e | t.baseLanes
            }

            function Ta() {
                Q(Ea, uu), Q(xa, xa.current)
            }

            function Ca() {
                uu = Ea.current, $(xa), $(Ea)
            }

            var Pa = W(null), za = null;

            function Na(e) {
                var t = e.alternate;
                Q(Aa, 1 & Aa.current), Q(Pa, e), null === za && (null === t || null !== xa.current || null !== t.memoizedState) && (za = e)
            }

            function La(e) {
                if (22 === e.tag) {
                    if (Q(Aa, Aa.current), Q(Pa, e), null === za) {
                        var t = e.alternate;
                        null !== t && null !== t.memoizedState && (za = e)
                    }
                } else Oa()
            }

            function Oa() {
                Q(Aa, Aa.current), Q(Pa, Pa.current)
            }

            function Ma(e) {
                $(Pa), za === e && (za = null), $(Aa)
            }

            var Aa = W(0);

            function Ia(e) {
                for (var t = e; null !== t;) {
                    if (13 === t.tag) {
                        var n = t.memoizedState;
                        if (null !== n && (null === (n = n.dehydrated) || "$?" === n.data || "$!" === n.data)) return t
                    } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
                        if (0 !== (128 & t.flags)) return t
                    } else if (null !== t.child) {
                        t.child.return = t, t = t.child;
                        continue
                    }
                    if (t === e) break;
                    for (; null === t.sibling;) {
                        if (null === t.return || t.return === e) return null;
                        t = t.return
                    }
                    t.sibling.return = t.return, t = t.sibling
                }
                return null
            }

            var ja = "undefined" !== typeof AbortController ? AbortController : function () {
                var e = [], t = this.signal = {
                    aborted: !1, addEventListener: function (t, n) {
                        e.push(n)
                    }
                };
                this.abort = function () {
                    t.aborted = !0, e.forEach((function (e) {
                        return e()
                    }))
                }
            }, Da = r.unstable_scheduleCallback, Ra = r.unstable_NormalPriority, Fa = {
                $$typeof: g,
                Consumer: null,
                Provider: null,
                _currentValue: null,
                _currentValue2: null,
                _threadCount: 0
            };

            function Va() {
                return {controller: new ja, data: new Map, refCount: 0}
            }

            function Ba(e) {
                e.refCount--, 0 === e.refCount && Da(Ra, (function () {
                    e.controller.abort()
                }))
            }

            var Ha = null, Ga = 0, Ua = 0, qa = null;

            function Wa() {
                if (0 === --Ga && null !== Ha) {
                    null !== qa && (qa.status = "fulfilled");
                    var e = Ha;
                    Ha = null, Ua = 0, qa = null;
                    for (var t = 0; t < e.length; t++) (0, e[t])()
                }
            }

            var $a = N.S;
            N.S = function (e, t) {
                "object" === typeof t && null !== t && "function" === typeof t.then && function (e, t) {
                    if (null === Ha) {
                        var n = Ha = [];
                        Ga = 0, Ua = Sc(), qa = {
                            status: "pending", value: void 0, then: function (e) {
                                n.push(e)
                            }
                        }
                    }
                    Ga++, t.then(Wa, Wa)
                }(0, t), null !== $a && $a(e, t)
            };
            var Qa = W(null);

            function Ya() {
                var e = Qa.current;
                return null !== e ? e : tu.pooledCache
            }

            function Xa(e, t) {
                Q(Qa, null === t ? Qa.current : t.pool)
            }

            function Ka() {
                var e = Ya();
                return null === e ? null : {parent: Fa._currentValue, pool: e}
            }

            var Za = 0, Ja = null, el = null, tl = null, nl = !1, rl = !1, al = !1, ll = 0, il = 0, ol = null, sl = 0;

            function ul() {
                throw Error(i(321))
            }

            function cl(e, t) {
                if (null === t) return !1;
                for (var n = 0; n < t.length && n < e.length; n++) if (!Qn(e[n], t[n])) return !1;
                return !0
            }

            function dl(e, t, n, r, a, l) {
                return Za = l, Ja = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, N.H = null === e || null === e.memoizedState ? _i : Ti, al = !1, l = n(r, a), al = !1, rl && (l = pl(t, n, r, a)), fl(e), l
            }

            function fl(e) {
                N.H = Ei;
                var t = null !== el && null !== el.next;
                if (Za = 0, tl = el = Ja = null, nl = !1, il = 0, ol = null, t) throw Error(i(300));
                null === e || Gi || null !== (e = e.dependencies) && xo(e) && (Gi = !0)
            }

            function pl(e, t, n, r) {
                Ja = e;
                var a = 0;
                do {
                    if (rl && (ol = null), il = 0, rl = !1, 25 <= a) throw Error(i(301));
                    if (a += 1, tl = el = null, null != e.updateQueue) {
                        var l = e.updateQueue;
                        l.lastEffect = null, l.events = null, l.stores = null, null != l.memoCache && (l.memoCache.index = 0)
                    }
                    N.H = Ci, l = t(n, r)
                } while (rl);
                return l
            }

            function ml() {
                var e = N.H, t = e.useState()[0];
                return t = "function" === typeof t.then ? wl(t) : t, e = e.useState()[0], (null !== el ? el.memoizedState : null) !== e && (Ja.flags |= 1024), t
            }

            function hl() {
                var e = 0 !== ll;
                return ll = 0, e
            }

            function gl(e, t, n) {
                t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~n
            }

            function vl(e) {
                if (nl) {
                    for (e = e.memoizedState; null !== e;) {
                        var t = e.queue;
                        null !== t && (t.pending = null), e = e.next
                    }
                    nl = !1
                }
                Za = 0, tl = el = Ja = null, rl = !1, il = ll = 0, ol = null
            }

            function yl() {
                var e = {memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null};
                return null === tl ? Ja.memoizedState = tl = e : tl = tl.next = e, tl
            }

            function bl() {
                if (null === el) {
                    var e = Ja.alternate;
                    e = null !== e ? e.memoizedState : null
                } else e = el.next;
                var t = null === tl ? Ja.memoizedState : tl.next;
                if (null !== t) tl = t, el = e; else {
                    if (null === e) {
                        if (null === Ja.alternate) throw Error(i(467));
                        throw Error(i(310))
                    }
                    e = {
                        memoizedState: (el = e).memoizedState,
                        baseState: el.baseState,
                        baseQueue: el.baseQueue,
                        queue: el.queue,
                        next: null
                    }, null === tl ? Ja.memoizedState = tl = e : tl = tl.next = e
                }
                return tl
            }

            function wl(e) {
                var t = il;
                return il += 1, null === ol && (ol = []), e = da(ol, e, t), t = Ja, null === (null === tl ? t.memoizedState : tl.next) && (t = t.alternate, N.H = null === t || null === t.memoizedState ? _i : Ti), e
            }

            function Sl(e) {
                if (null !== e && "object" === typeof e) {
                    if ("function" === typeof e.then) return wl(e);
                    if (e.$$typeof === g) return _o(e)
                }
                throw Error(i(438, String(e)))
            }

            function kl(e) {
                var t = null, n = Ja.updateQueue;
                if (null !== n && (t = n.memoCache), null == t) {
                    var r = Ja.alternate;
                    null !== r && (null !== (r = r.updateQueue) && (null != (r = r.memoCache) && (t = {
                        data: r.data.map((function (e) {
                            return e.slice()
                        })), index: 0
                    })))
                }
                if (null == t && (t = {data: [], index: 0}), null === n && (n = {
                    lastEffect: null,
                    events: null,
                    stores: null,
                    memoCache: null
                }, Ja.updateQueue = n), n.memoCache = t, void 0 === (n = t.data[t.index])) for (n = t.data[t.index] = Array(e), r = 0; r < e; r++) n[r] = x;
                return t.index++, n
            }

            function xl(e, t) {
                return "function" === typeof t ? t(e) : t
            }

            function El(e) {
                return _l(bl(), el, e)
            }

            function _l(e, t, n) {
                var r = e.queue;
                if (null === r) throw Error(i(311));
                r.lastRenderedReducer = n;
                var a = e.baseQueue, l = r.pending;
                if (null !== l) {
                    if (null !== a) {
                        var o = a.next;
                        a.next = l.next, l.next = o
                    }
                    t.baseQueue = a = l, r.pending = null
                }
                if (l = e.baseState, null === a) e.memoizedState = l; else {
                    var s = o = null, u = null, c = t = a.next, d = !1;
                    do {
                        var f = -536870913 & c.lane;
                        if (f !== c.lane ? (ru & f) === f : (Za & f) === f) {
                            var p = c.revertLane;
                            if (0 === p) null !== u && (u = u.next = {
                                lane: 0,
                                revertLane: 0,
                                action: c.action,
                                hasEagerState: c.hasEagerState,
                                eagerState: c.eagerState,
                                next: null
                            }), f === Ua && (d = !0); else {
                                if ((Za & p) === p) {
                                    c = c.next, p === Ua && (d = !0);
                                    continue
                                }
                                f = {
                                    lane: 0,
                                    revertLane: c.revertLane,
                                    action: c.action,
                                    hasEagerState: c.hasEagerState,
                                    eagerState: c.eagerState,
                                    next: null
                                }, null === u ? (s = u = f, o = l) : u = u.next = f, Ja.lanes |= p, du |= p
                            }
                            f = c.action, al && n(l, f), l = c.hasEagerState ? c.eagerState : n(l, f)
                        } else p = {
                            lane: f,
                            revertLane: c.revertLane,
                            action: c.action,
                            hasEagerState: c.hasEagerState,
                            eagerState: c.eagerState,
                            next: null
                        }, null === u ? (s = u = p, o = l) : u = u.next = p, Ja.lanes |= f, du |= f;
                        c = c.next
                    } while (null !== c && c !== t);
                    if (null === u ? o = l : u.next = s, !Qn(l, e.memoizedState) && (Gi = !0, d && null !== (n = qa))) throw n;
                    e.memoizedState = l, e.baseState = o, e.baseQueue = u, r.lastRenderedState = l
                }
                return null === a && (r.lanes = 0), [e.memoizedState, r.dispatch]
            }

            function Tl(e) {
                var t = bl(), n = t.queue;
                if (null === n) throw Error(i(311));
                n.lastRenderedReducer = e;
                var r = n.dispatch, a = n.pending, l = t.memoizedState;
                if (null !== a) {
                    n.pending = null;
                    var o = a = a.next;
                    do {
                        l = e(l, o.action), o = o.next
                    } while (o !== a);
                    Qn(l, t.memoizedState) || (Gi = !0), t.memoizedState = l, null === t.baseQueue && (t.baseState = l), n.lastRenderedState = l
                }
                return [l, r]
            }

            function Cl(e, t, n) {
                var r = Ja, a = bl(), l = Xr;
                if (l) {
                    if (void 0 === n) throw Error(i(407));
                    n = n()
                } else n = t();
                var o = !Qn((el || a).memoizedState, n);
                if (o && (a.memoizedState = n, Gi = !0), a = a.queue, Zl(Nl.bind(null, r, a, e), [e]), a.getSnapshot !== t || o || null !== tl && 1 & tl.memoizedState.tag) {
                    if (r.flags |= 2048, $l(9, zl.bind(null, r, a, n, t), {destroy: void 0}, null), null === tu) throw Error(i(349));
                    l || 0 !== (60 & Za) || Pl(r, t, n)
                }
                return n
            }

            function Pl(e, t, n) {
                e.flags |= 16384, e = {
                    getSnapshot: t,
                    value: n
                }, null === (t = Ja.updateQueue) ? (t = {
                    lastEffect: null,
                    events: null,
                    stores: null,
                    memoCache: null
                }, Ja.updateQueue = t, t.stores = [e]) : null === (n = t.stores) ? t.stores = [e] : n.push(e)
            }

            function zl(e, t, n, r) {
                t.value = n, t.getSnapshot = r, Ll(t) && Ol(e)
            }

            function Nl(e, t, n) {
                return n((function () {
                    Ll(t) && Ol(e)
                }))
            }

            function Ll(e) {
                var t = e.getSnapshot;
                e = e.value;
                try {
                    var n = t();
                    return !Qn(e, n)
                } catch (r) {
                    return !0
                }
            }

            function Ol(e) {
                var t = zr(e, 2);
                null !== t && Ou(t, e, 2)
            }

            function Ml(e) {
                var t = yl();
                if ("function" === typeof e) {
                    var n = e;
                    if (e = n(), al) {
                        be(!0);
                        try {
                            n()
                        } finally {
                            be(!1)
                        }
                    }
                }
                return t.memoizedState = t.baseState = e, t.queue = {
                    pending: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: xl,
                    lastRenderedState: e
                }, t
            }

            function Al(e, t, n, r) {
                return e.baseState = n, _l(e, el, "function" === typeof r ? r : xl)
            }

            function Il(e, t, n, r, a) {
                if (Si(e)) throw Error(i(485));
                if (null !== (e = t.action)) {
                    var l = {
                        payload: a,
                        action: e,
                        next: null,
                        isTransition: !0,
                        status: "pending",
                        value: null,
                        reason: null,
                        listeners: [],
                        then: function (e) {
                            l.listeners.push(e)
                        }
                    };
                    null !== N.T ? n(!0) : l.isTransition = !1, r(l), null === (n = t.pending) ? (l.next = t.pending = l, jl(t, l)) : (l.next = n.next, t.pending = n.next = l)
                }
            }

            function jl(e, t) {
                var n = t.action, r = t.payload, a = e.state;
                if (t.isTransition) {
                    var l = N.T, i = {};
                    N.T = i;
                    try {
                        var o = n(a, r), s = N.S;
                        null !== s && s(i, o), Dl(e, t, o)
                    } catch (u) {
                        Fl(e, t, u)
                    } finally {
                        N.T = l
                    }
                } else try {
                    Dl(e, t, l = n(a, r))
                } catch (c) {
                    Fl(e, t, c)
                }
            }

            function Dl(e, t, n) {
                null !== n && "object" === typeof n && "function" === typeof n.then ? n.then((function (n) {
                    Rl(e, t, n)
                }), (function (n) {
                    return Fl(e, t, n)
                })) : Rl(e, t, n)
            }

            function Rl(e, t, n) {
                t.status = "fulfilled", t.value = n, Vl(t), e.state = n, null !== (t = e.pending) && ((n = t.next) === t ? e.pending = null : (n = n.next, t.next = n, jl(e, n)))
            }

            function Fl(e, t, n) {
                var r = e.pending;
                if (e.pending = null, null !== r) {
                    r = r.next;
                    do {
                        t.status = "rejected", t.reason = n, Vl(t), t = t.next
                    } while (t !== r)
                }
                e.action = null
            }

            function Vl(e) {
                e = e.listeners;
                for (var t = 0; t < e.length; t++) (0, e[t])()
            }

            function Bl(e, t) {
                return t
            }

            function Hl(e, t) {
                if (Xr) {
                    var n = tu.formState;
                    if (null !== n) {
                        e:{
                            var r = Ja;
                            if (Xr) {
                                if (Yr) {
                                    t:{
                                        for (var a = Yr, l = Zr; 8 !== a.nodeType;) {
                                            if (!l) {
                                                a = null;
                                                break t
                                            }
                                            if (null === (a = od(a.nextSibling))) {
                                                a = null;
                                                break t
                                            }
                                        }
                                        a = "F!" === (l = a.data) || "F" === l ? a : null
                                    }
                                    if (a) {
                                        Yr = od(a.nextSibling), r = "F!" === a.data;
                                        break e
                                    }
                                }
                                ea(r)
                            }
                            r = !1
                        }
                        r && (t = n[0])
                    }
                }
                return (n = yl()).memoizedState = n.baseState = t, r = {
                    pending: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: Bl,
                    lastRenderedState: t
                }, n.queue = r, n = yi.bind(null, Ja, r), r.dispatch = n, r = Ml(!1), l = wi.bind(null, Ja, !1, r.queue), a = {
                    state: t,
                    dispatch: null,
                    action: e,
                    pending: null
                }, (r = yl()).queue = a, n = Il.bind(null, Ja, a, l, n), a.dispatch = n, r.memoizedState = e, [t, n, !1]
            }

            function Gl(e) {
                return Ul(bl(), el, e)
            }

            function Ul(e, t, n) {
                t = _l(e, t, Bl)[0], e = El(xl)[0], t = "object" === typeof t && null !== t && "function" === typeof t.then ? wl(t) : t;
                var r = bl(), a = r.queue, l = a.dispatch;
                return n !== r.memoizedState && (Ja.flags |= 2048, $l(9, ql.bind(null, a, n), {destroy: void 0}, null)), [t, l, e]
            }

            function ql(e, t) {
                e.action = t
            }

            function Wl(e) {
                var t = bl(), n = el;
                if (null !== n) return Ul(t, n, e);
                bl(), t = t.memoizedState;
                var r = (n = bl()).queue.dispatch;
                return n.memoizedState = e, [t, r, !1]
            }

            function $l(e, t, n, r) {
                return e = {
                    tag: e,
                    create: t,
                    inst: n,
                    deps: r,
                    next: null
                }, null === (t = Ja.updateQueue) && (t = {
                    lastEffect: null,
                    events: null,
                    stores: null,
                    memoCache: null
                }, Ja.updateQueue = t), null === (n = t.lastEffect) ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e), e
            }

            function Ql() {
                return bl().memoizedState
            }

            function Yl(e, t, n, r) {
                var a = yl();
                Ja.flags |= e, a.memoizedState = $l(1 | t, n, {destroy: void 0}, void 0 === r ? null : r)
            }

            function Xl(e, t, n, r) {
                var a = bl();
                r = void 0 === r ? null : r;
                var l = a.memoizedState.inst;
                null !== el && null !== r && cl(r, el.memoizedState.deps) ? a.memoizedState = $l(t, n, l, r) : (Ja.flags |= e, a.memoizedState = $l(1 | t, n, l, r))
            }

            function Kl(e, t) {
                Yl(8390656, 8, e, t)
            }

            function Zl(e, t) {
                Xl(2048, 8, e, t)
            }

            function Jl(e, t) {
                return Xl(4, 2, e, t)
            }

            function ei(e, t) {
                return Xl(4, 4, e, t)
            }

            function ti(e, t) {
                if ("function" === typeof t) {
                    e = e();
                    var n = t(e);
                    return function () {
                        "function" === typeof n ? n() : t(null)
                    }
                }
                if (null !== t && void 0 !== t) return e = e(), t.current = e, function () {
                    t.current = null
                }
            }

            function ni(e, t, n) {
                n = null !== n && void 0 !== n ? n.concat([e]) : null, Xl(4, 4, ti.bind(null, t, e), n)
            }

            function ri() {
            }

            function ai(e, t) {
                var n = bl();
                t = void 0 === t ? null : t;
                var r = n.memoizedState;
                return null !== t && cl(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e)
            }

            function li(e, t) {
                var n = bl();
                t = void 0 === t ? null : t;
                var r = n.memoizedState;
                if (null !== t && cl(t, r[1])) return r[0];
                if (r = e(), al) {
                    be(!0);
                    try {
                        e()
                    } finally {
                        be(!1)
                    }
                }
                return n.memoizedState = [r, t], r
            }

            function ii(e, t, n) {
                return void 0 === n || 0 !== (1073741824 & Za) ? e.memoizedState = t : (e.memoizedState = n, e = Lu(), Ja.lanes |= e, du |= e, n)
            }

            function oi(e, t, n, r) {
                return Qn(n, t) ? n : null !== xa.current ? (e = ii(e, n, r), Qn(e, t) || (Gi = !0), e) : 0 === (42 & Za) ? (Gi = !0, e.memoizedState = n) : (e = Lu(), Ja.lanes |= e, du |= e, t)
            }

            function si(e, t, n, r, a) {
                var l = H.p;
                H.p = 0 !== l && 8 > l ? l : 8;
                var i = N.T, o = {};
                N.T = o, wi(e, !1, t, n);
                try {
                    var s = a(), u = N.S;
                    if (null !== u && u(o, s), null !== s && "object" === typeof s && "function" === typeof s.then) bi(e, t, function (e, t) {
                        var n = [], r = {
                            status: "pending", value: null, reason: null, then: function (e) {
                                n.push(e)
                            }
                        };
                        return e.then((function () {
                            r.status = "fulfilled", r.value = t;
                            for (var e = 0; e < n.length; e++) (0, n[e])(t)
                        }), (function (e) {
                            for (r.status = "rejected", r.reason = e, e = 0; e < n.length; e++) (0, n[e])(void 0)
                        })), r
                    }(s, r), Nu()); else bi(e, t, r, Nu())
                } catch (c) {
                    bi(e, t, {
                        then: function () {
                        }, status: "rejected", reason: c
                    }, Nu())
                } finally {
                    H.p = l, N.T = i
                }
            }

            function ui() {
            }

            function ci(e, t, n, r) {
                if (5 !== e.tag) throw Error(i(476));
                var a = di(e).queue;
                si(e, a, t, G, null === n ? ui : function () {
                    return fi(e), n(r)
                })
            }

            function di(e) {
                var t = e.memoizedState;
                if (null !== t) return t;
                var n = {};
                return (t = {
                    memoizedState: G,
                    baseState: G,
                    baseQueue: null,
                    queue: {pending: null, lanes: 0, dispatch: null, lastRenderedReducer: xl, lastRenderedState: G},
                    next: null
                }).next = {
                    memoizedState: n,
                    baseState: n,
                    baseQueue: null,
                    queue: {pending: null, lanes: 0, dispatch: null, lastRenderedReducer: xl, lastRenderedState: n},
                    next: null
                }, e.memoizedState = t, null !== (e = e.alternate) && (e.memoizedState = t), t
            }

            function fi(e) {
                bi(e, di(e).next.queue, {}, Nu())
            }

            function pi() {
                return _o(jd)
            }

            function mi() {
                return bl().memoizedState
            }

            function hi() {
                return bl().memoizedState
            }

            function gi(e) {
                for (var t = e.return; null !== t;) {
                    switch (t.tag) {
                        case 24:
                        case 3:
                            var n = Nu(), r = Oo(t, e = Lo(n), n);
                            return null !== r && (Ou(r, t, n), Mo(r, t, n)), t = {cache: Va()}, void (e.payload = t)
                    }
                    t = t.return
                }
            }

            function vi(e, t, n) {
                var r = Nu();
                n = {
                    lane: r,
                    revertLane: 0,
                    action: n,
                    hasEagerState: !1,
                    eagerState: null,
                    next: null
                }, Si(e) ? ki(t, n) : null !== (n = Pr(e, t, n, r)) && (Ou(n, e, r), xi(n, t, r))
            }

            function yi(e, t, n) {
                bi(e, t, n, Nu())
            }

            function bi(e, t, n, r) {
                var a = {lane: r, revertLane: 0, action: n, hasEagerState: !1, eagerState: null, next: null};
                if (Si(e)) ki(t, a); else {
                    var l = e.alternate;
                    if (0 === e.lanes && (null === l || 0 === l.lanes) && null !== (l = t.lastRenderedReducer)) try {
                        var i = t.lastRenderedState, o = l(i, n);
                        if (a.hasEagerState = !0, a.eagerState = o, Qn(o, i)) return Cr(e, t, a, 0), null === tu && Tr(), !1
                    } catch (s) {
                    }
                    if (null !== (n = Pr(e, t, a, r))) return Ou(n, e, r), xi(n, t, r), !0
                }
                return !1
            }

            function wi(e, t, n, r) {
                if (r = {
                    lane: 2,
                    revertLane: Sc(),
                    action: r,
                    hasEagerState: !1,
                    eagerState: null,
                    next: null
                }, Si(e)) {
                    if (t) throw Error(i(479))
                } else null !== (t = Pr(e, n, r, 2)) && Ou(t, e, 2)
            }

            function Si(e) {
                var t = e.alternate;
                return e === Ja || null !== t && t === Ja
            }

            function ki(e, t) {
                rl = nl = !0;
                var n = e.pending;
                null === n ? t.next = t : (t.next = n.next, n.next = t), e.pending = t
            }

            function xi(e, t, n) {
                if (0 !== (4194176 & n)) {
                    var r = t.lanes;
                    n |= r &= e.pendingLanes, t.lanes = n, Ae(e, n)
                }
            }

            var Ei = {
                readContext: _o,
                use: Sl,
                useCallback: ul,
                useContext: ul,
                useEffect: ul,
                useImperativeHandle: ul,
                useLayoutEffect: ul,
                useInsertionEffect: ul,
                useMemo: ul,
                useReducer: ul,
                useRef: ul,
                useState: ul,
                useDebugValue: ul,
                useDeferredValue: ul,
                useTransition: ul,
                useSyncExternalStore: ul,
                useId: ul
            };
            Ei.useCacheRefresh = ul, Ei.useMemoCache = ul, Ei.useHostTransitionStatus = ul, Ei.useFormState = ul, Ei.useActionState = ul, Ei.useOptimistic = ul;
            var _i = {
                readContext: _o, use: Sl, useCallback: function (e, t) {
                    return yl().memoizedState = [e, void 0 === t ? null : t], e
                }, useContext: _o, useEffect: Kl, useImperativeHandle: function (e, t, n) {
                    n = null !== n && void 0 !== n ? n.concat([e]) : null, Yl(4194308, 4, ti.bind(null, t, e), n)
                }, useLayoutEffect: function (e, t) {
                    return Yl(4194308, 4, e, t)
                }, useInsertionEffect: function (e, t) {
                    Yl(4, 2, e, t)
                }, useMemo: function (e, t) {
                    var n = yl();
                    t = void 0 === t ? null : t;
                    var r = e();
                    if (al) {
                        be(!0);
                        try {
                            e()
                        } finally {
                            be(!1)
                        }
                    }
                    return n.memoizedState = [r, t], r
                }, useReducer: function (e, t, n) {
                    var r = yl();
                    if (void 0 !== n) {
                        var a = n(t);
                        if (al) {
                            be(!0);
                            try {
                                n(t)
                            } finally {
                                be(!1)
                            }
                        }
                    } else a = t;
                    return r.memoizedState = r.baseState = a, e = {
                        pending: null,
                        lanes: 0,
                        dispatch: null,
                        lastRenderedReducer: e,
                        lastRenderedState: a
                    }, r.queue = e, e = e.dispatch = vi.bind(null, Ja, e), [r.memoizedState, e]
                }, useRef: function (e) {
                    return e = {current: e}, yl().memoizedState = e
                }, useState: function (e) {
                    var t = (e = Ml(e)).queue, n = yi.bind(null, Ja, t);
                    return t.dispatch = n, [e.memoizedState, n]
                }, useDebugValue: ri, useDeferredValue: function (e, t) {
                    return ii(yl(), e, t)
                }, useTransition: function () {
                    var e = Ml(!1);
                    return e = si.bind(null, Ja, e.queue, !0, !1), yl().memoizedState = e, [!1, e]
                }, useSyncExternalStore: function (e, t, n) {
                    var r = Ja, a = yl();
                    if (Xr) {
                        if (void 0 === n) throw Error(i(407));
                        n = n()
                    } else {
                        if (n = t(), null === tu) throw Error(i(349));
                        0 !== (60 & ru) || Pl(r, t, n)
                    }
                    a.memoizedState = n;
                    var l = {value: n, getSnapshot: t};
                    return a.queue = l, Kl(Nl.bind(null, r, l, e), [e]), r.flags |= 2048, $l(9, zl.bind(null, r, l, n, t), {destroy: void 0}, null), n
                }, useId: function () {
                    var e = yl(), t = tu.identifierPrefix;
                    if (Xr) {
                        var n = Gr;
                        t = ":" + t + "R" + (n = (Hr & ~(1 << 32 - we(Hr) - 1)).toString(32) + n), 0 < (n = ll++) && (t += "H" + n.toString(32)), t += ":"
                    } else t = ":" + t + "r" + (n = sl++).toString(32) + ":";
                    return e.memoizedState = t
                }, useCacheRefresh: function () {
                    return yl().memoizedState = gi.bind(null, Ja)
                }
            };
            _i.useMemoCache = kl, _i.useHostTransitionStatus = pi, _i.useFormState = Hl, _i.useActionState = Hl, _i.useOptimistic = function (e) {
                var t = yl();
                t.memoizedState = t.baseState = e;
                var n = {pending: null, lanes: 0, dispatch: null, lastRenderedReducer: null, lastRenderedState: null};
                return t.queue = n, t = wi.bind(null, Ja, !0, n), n.dispatch = t, [e, t]
            };
            var Ti = {
                readContext: _o,
                use: Sl,
                useCallback: ai,
                useContext: _o,
                useEffect: Zl,
                useImperativeHandle: ni,
                useInsertionEffect: Jl,
                useLayoutEffect: ei,
                useMemo: li,
                useReducer: El,
                useRef: Ql,
                useState: function () {
                    return El(xl)
                },
                useDebugValue: ri,
                useDeferredValue: function (e, t) {
                    return oi(bl(), el.memoizedState, e, t)
                },
                useTransition: function () {
                    var e = El(xl)[0], t = bl().memoizedState;
                    return ["boolean" === typeof e ? e : wl(e), t]
                },
                useSyncExternalStore: Cl,
                useId: mi
            };
            Ti.useCacheRefresh = hi, Ti.useMemoCache = kl, Ti.useHostTransitionStatus = pi, Ti.useFormState = Gl, Ti.useActionState = Gl, Ti.useOptimistic = function (e, t) {
                return Al(bl(), 0, e, t)
            };
            var Ci = {
                readContext: _o,
                use: Sl,
                useCallback: ai,
                useContext: _o,
                useEffect: Zl,
                useImperativeHandle: ni,
                useInsertionEffect: Jl,
                useLayoutEffect: ei,
                useMemo: li,
                useReducer: Tl,
                useRef: Ql,
                useState: function () {
                    return Tl(xl)
                },
                useDebugValue: ri,
                useDeferredValue: function (e, t) {
                    var n = bl();
                    return null === el ? ii(n, e, t) : oi(n, el.memoizedState, e, t)
                },
                useTransition: function () {
                    var e = Tl(xl)[0], t = bl().memoizedState;
                    return ["boolean" === typeof e ? e : wl(e), t]
                },
                useSyncExternalStore: Cl,
                useId: mi
            };

            function Pi(e, t, n, r) {
                n = null === (n = n(r, t = e.memoizedState)) || void 0 === n ? t : L({}, t, n), e.memoizedState = n, 0 === e.lanes && (e.updateQueue.baseState = n)
            }

            Ci.useCacheRefresh = hi, Ci.useMemoCache = kl, Ci.useHostTransitionStatus = pi, Ci.useFormState = Wl, Ci.useActionState = Wl, Ci.useOptimistic = function (e, t) {
                var n = bl();
                return null !== el ? Al(n, 0, e, t) : (n.baseState = e, [e, n.queue.dispatch])
            };
            var zi = {
                isMounted: function (e) {
                    return !!(e = e._reactInternals) && D(e) === e
                }, enqueueSetState: function (e, t, n) {
                    e = e._reactInternals;
                    var r = Nu(), a = Lo(r);
                    a.payload = t, void 0 !== n && null !== n && (a.callback = n), null !== (t = Oo(e, a, r)) && (Ou(t, e, r), Mo(t, e, r))
                }, enqueueReplaceState: function (e, t, n) {
                    e = e._reactInternals;
                    var r = Nu(), a = Lo(r);
                    a.tag = 1, a.payload = t, void 0 !== n && null !== n && (a.callback = n), null !== (t = Oo(e, a, r)) && (Ou(t, e, r), Mo(t, e, r))
                }, enqueueForceUpdate: function (e, t) {
                    e = e._reactInternals;
                    var n = Nu(), r = Lo(n);
                    r.tag = 2, void 0 !== t && null !== t && (r.callback = t), null !== (t = Oo(e, r, n)) && (Ou(t, e, n), Mo(t, e, n))
                }
            };

            function Ni(e, t, n, r, a, l, i) {
                return "function" === typeof (e = e.stateNode).shouldComponentUpdate ? e.shouldComponentUpdate(r, l, i) : !t.prototype || !t.prototype.isPureReactComponent || (!Yn(n, r) || !Yn(a, l))
            }

            function Li(e, t, n, r) {
                e = t.state, "function" === typeof t.componentWillReceiveProps && t.componentWillReceiveProps(n, r), "function" === typeof t.UNSAFE_componentWillReceiveProps && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && zi.enqueueReplaceState(t, t.state, null)
            }

            function Oi(e, t) {
                var n = t;
                if ("ref" in t) for (var r in n = {}, t) "ref" !== r && (n[r] = t[r]);
                if (e = e.defaultProps) for (var a in n === t && (n = L({}, n)), e) void 0 === n[a] && (n[a] = e[a]);
                return n
            }

            var Mi = "function" === typeof reportError ? reportError : function (e) {
                if ("object" === typeof window && "function" === typeof window.ErrorEvent) {
                    var t = new window.ErrorEvent("error", {
                        bubbles: !0,
                        cancelable: !0,
                        message: "object" === typeof e && null !== e && "string" === typeof e.message ? String(e.message) : String(e),
                        error: e
                    });
                    if (!window.dispatchEvent(t)) return
                } else if ("object" === typeof process && "function" === typeof process.emit) return void process.emit("uncaughtException", e);
                console.error(e)
            };

            function Ai(e) {
                Mi(e)
            }

            function Ii(e) {
                console.error(e)
            }

            function ji(e) {
                Mi(e)
            }

            function Di(e, t) {
                try {
                    (0, e.onUncaughtError)(t.value, {componentStack: t.stack})
                } catch (n) {
                    setTimeout((function () {
                        throw n
                    }))
                }
            }

            function Ri(e, t, n) {
                try {
                    (0, e.onCaughtError)(n.value, {
                        componentStack: n.stack,
                        errorBoundary: 1 === t.tag ? t.stateNode : null
                    })
                } catch (r) {
                    setTimeout((function () {
                        throw r
                    }))
                }
            }

            function Fi(e, t, n) {
                return (n = Lo(n)).tag = 3, n.payload = {element: null}, n.callback = function () {
                    Di(e, t)
                }, n
            }

            function Vi(e) {
                return (e = Lo(e)).tag = 3, e
            }

            function Bi(e, t, n, r) {
                var a = n.type.getDerivedStateFromError;
                if ("function" === typeof a) {
                    var l = r.value;
                    e.payload = function () {
                        return a(l)
                    }, e.callback = function () {
                        Ri(t, n, r)
                    }
                }
                var i = n.stateNode;
                null !== i && "function" === typeof i.componentDidCatch && (e.callback = function () {
                    Ri(t, n, r), "function" !== typeof a && (null === ku ? ku = new Set([this]) : ku.add(this));
                    var e = r.stack;
                    this.componentDidCatch(r.value, {componentStack: null !== e ? e : ""})
                })
            }

            var Hi = Error(i(461)), Gi = !1;

            function Ui(e, t, n, r) {
                t.child = null === e ? ka(t, null, n, r) : Sa(t, e.child, n, r)
            }

            function qi(e, t, n, r, a) {
                n = n.render;
                var l = t.ref;
                if ("ref" in r) {
                    var i = {};
                    for (var o in r) "ref" !== o && (i[o] = r[o])
                } else i = r;
                return Eo(t), r = dl(e, t, n, i, l, a), o = hl(), null === e || Gi ? (Xr && o && Wr(t), t.flags |= 1, Ui(e, t, r, a), t.child) : (gl(e, t, a), fo(e, t, a))
            }

            function Wi(e, t, n, r, a) {
                if (null === e) {
                    var l = n.type;
                    return "function" !== typeof l || js(l) || void 0 !== l.defaultProps || null !== n.compare ? ((e = Fs(n.type, null, r, t, t.mode, a)).ref = t.ref, e.return = t, t.child = e) : (t.tag = 15, t.type = l, $i(e, t, l, r, a))
                }
                if (l = e.child, !po(e, a)) {
                    var i = l.memoizedProps;
                    if ((n = null !== (n = n.compare) ? n : Yn)(i, r) && e.ref === t.ref) return fo(e, t, a)
                }
                return t.flags |= 1, (e = Ds(l, r)).ref = t.ref, e.return = t, t.child = e
            }

            function $i(e, t, n, r, a) {
                if (null !== e) {
                    var l = e.memoizedProps;
                    if (Yn(l, r) && e.ref === t.ref) {
                        if (Gi = !1, t.pendingProps = r = l, !po(e, a)) return t.lanes = e.lanes, fo(e, t, a);
                        0 !== (131072 & e.flags) && (Gi = !0)
                    }
                }
                return Ki(e, t, n, r, a)
            }

            function Qi(e, t, n) {
                var r = t.pendingProps, a = r.children, l = 0 !== (2 & t.stateNode._pendingVisibility),
                    i = null !== e ? e.memoizedState : null;
                if (Xi(e, t), "hidden" === r.mode || l) {
                    if (0 !== (128 & t.flags)) {
                        if (r = null !== i ? i.baseLanes | n : n, null !== e) {
                            for (a = t.child = e.child, l = 0; null !== a;) l = l | a.lanes | a.childLanes, a = a.sibling;
                            t.childLanes = l & ~r
                        } else t.childLanes = 0, t.child = null;
                        return Yi(e, t, r, n)
                    }
                    if (0 === (536870912 & n)) return t.lanes = t.childLanes = 536870912, Yi(e, t, null !== i ? i.baseLanes | n : n, n);
                    t.memoizedState = {
                        baseLanes: 0,
                        cachePool: null
                    }, null !== e && Xa(0, null !== i ? i.cachePool : null), null !== i ? _a(t, i) : Ta(), La(t)
                } else null !== i ? (Xa(0, i.cachePool), _a(t, i), Oa(), t.memoizedState = null) : (null !== e && Xa(0, null), Ta(), Oa());
                return Ui(e, t, a, n), t.child
            }

            function Yi(e, t, n, r) {
                var a = Ya();
                return a = null === a ? null : {parent: Fa._currentValue, pool: a}, t.memoizedState = {
                    baseLanes: n,
                    cachePool: a
                }, null !== e && Xa(0, null), Ta(), La(t), null !== e && ko(e, t, r, !0), null
            }

            function Xi(e, t) {
                var n = t.ref;
                if (null === n) null !== e && null !== e.ref && (t.flags |= 2097664); else {
                    if ("function" !== typeof n && "object" !== typeof n) throw Error(i(284));
                    null !== e && e.ref === n || (t.flags |= 2097664)
                }
            }

            function Ki(e, t, n, r, a) {
                return Eo(t), n = dl(e, t, n, r, void 0, a), r = hl(), null === e || Gi ? (Xr && r && Wr(t), t.flags |= 1, Ui(e, t, n, a), t.child) : (gl(e, t, a), fo(e, t, a))
            }

            function Zi(e, t, n, r, a, l) {
                return Eo(t), t.updateQueue = null, n = pl(t, r, n, a), fl(e), r = hl(), null === e || Gi ? (Xr && r && Wr(t), t.flags |= 1, Ui(e, t, n, l), t.child) : (gl(e, t, l), fo(e, t, l))
            }

            function Ji(e, t, n, r, a) {
                if (Eo(t), null === t.stateNode) {
                    var l = Or, i = n.contextType;
                    "object" === typeof i && null !== i && (l = _o(i)), l = new n(r, l), t.memoizedState = null !== l.state && void 0 !== l.state ? l.state : null, l.updater = zi, t.stateNode = l, l._reactInternals = t, (l = t.stateNode).props = r, l.state = t.memoizedState, l.refs = {}, zo(t), i = n.contextType, l.context = "object" === typeof i && null !== i ? _o(i) : Or, l.state = t.memoizedState, "function" === typeof (i = n.getDerivedStateFromProps) && (Pi(t, n, i, r), l.state = t.memoizedState), "function" === typeof n.getDerivedStateFromProps || "function" === typeof l.getSnapshotBeforeUpdate || "function" !== typeof l.UNSAFE_componentWillMount && "function" !== typeof l.componentWillMount || (i = l.state, "function" === typeof l.componentWillMount && l.componentWillMount(), "function" === typeof l.UNSAFE_componentWillMount && l.UNSAFE_componentWillMount(), i !== l.state && zi.enqueueReplaceState(l, l.state, null), Do(t, r, l, a), jo(), l.state = t.memoizedState), "function" === typeof l.componentDidMount && (t.flags |= 4194308), r = !0
                } else if (null === e) {
                    l = t.stateNode;
                    var o = t.memoizedProps, s = Oi(n, o);
                    l.props = s;
                    var u = l.context, c = n.contextType;
                    i = Or, "object" === typeof c && null !== c && (i = _o(c));
                    var d = n.getDerivedStateFromProps;
                    c = "function" === typeof d || "function" === typeof l.getSnapshotBeforeUpdate, o = t.pendingProps !== o, c || "function" !== typeof l.UNSAFE_componentWillReceiveProps && "function" !== typeof l.componentWillReceiveProps || (o || u !== i) && Li(t, l, r, i), Po = !1;
                    var f = t.memoizedState;
                    l.state = f, Do(t, r, l, a), jo(), u = t.memoizedState, o || f !== u || Po ? ("function" === typeof d && (Pi(t, n, d, r), u = t.memoizedState), (s = Po || Ni(t, n, s, r, f, u, i)) ? (c || "function" !== typeof l.UNSAFE_componentWillMount && "function" !== typeof l.componentWillMount || ("function" === typeof l.componentWillMount && l.componentWillMount(), "function" === typeof l.UNSAFE_componentWillMount && l.UNSAFE_componentWillMount()), "function" === typeof l.componentDidMount && (t.flags |= 4194308)) : ("function" === typeof l.componentDidMount && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = u), l.props = r, l.state = u, l.context = i, r = s) : ("function" === typeof l.componentDidMount && (t.flags |= 4194308), r = !1)
                } else {
                    l = t.stateNode, No(e, t), c = Oi(n, i = t.memoizedProps), l.props = c, d = t.pendingProps, f = l.context, u = n.contextType, s = Or, "object" === typeof u && null !== u && (s = _o(u)), (u = "function" === typeof (o = n.getDerivedStateFromProps) || "function" === typeof l.getSnapshotBeforeUpdate) || "function" !== typeof l.UNSAFE_componentWillReceiveProps && "function" !== typeof l.componentWillReceiveProps || (i !== d || f !== s) && Li(t, l, r, s), Po = !1, f = t.memoizedState, l.state = f, Do(t, r, l, a), jo();
                    var p = t.memoizedState;
                    i !== d || f !== p || Po || null !== e && null !== e.dependencies && xo(e.dependencies) ? ("function" === typeof o && (Pi(t, n, o, r), p = t.memoizedState), (c = Po || Ni(t, n, c, r, f, p, s) || null !== e && null !== e.dependencies && xo(e.dependencies)) ? (u || "function" !== typeof l.UNSAFE_componentWillUpdate && "function" !== typeof l.componentWillUpdate || ("function" === typeof l.componentWillUpdate && l.componentWillUpdate(r, p, s), "function" === typeof l.UNSAFE_componentWillUpdate && l.UNSAFE_componentWillUpdate(r, p, s)), "function" === typeof l.componentDidUpdate && (t.flags |= 4), "function" === typeof l.getSnapshotBeforeUpdate && (t.flags |= 1024)) : ("function" !== typeof l.componentDidUpdate || i === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), "function" !== typeof l.getSnapshotBeforeUpdate || i === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = p), l.props = r, l.state = p, l.context = s, r = c) : ("function" !== typeof l.componentDidUpdate || i === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), "function" !== typeof l.getSnapshotBeforeUpdate || i === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), r = !1)
                }
                return l = r, Xi(e, t), r = 0 !== (128 & t.flags), l || r ? (l = t.stateNode, n = r && "function" !== typeof n.getDerivedStateFromError ? null : l.render(), t.flags |= 1, null !== e && r ? (t.child = Sa(t, e.child, null, a), t.child = Sa(t, null, n, a)) : Ui(e, t, n, a), t.memoizedState = l.state, e = t.child) : e = fo(e, t, a), e
            }

            function eo(e, t, n, r) {
                return aa(), t.flags |= 256, Ui(e, t, n, r), t.child
            }

            var to = {dehydrated: null, treeContext: null, retryLane: 0};

            function no(e) {
                return {baseLanes: e, cachePool: Ka()}
            }

            function ro(e, t, n) {
                return e = null !== e ? e.childLanes & ~n : 0, t && (e |= mu), e
            }

            function ao(e, t, n) {
                var r, a = t.pendingProps, l = !1, o = 0 !== (128 & t.flags);
                if ((r = o) || (r = (null === e || null !== e.memoizedState) && 0 !== (2 & Aa.current)), r && (l = !0, t.flags &= -129), r = 0 !== (32 & t.flags), t.flags &= -33, null === e) {
                    if (Xr) {
                        if (l ? Na(t) : Oa(), Xr) {
                            var s, u = Yr;
                            if (s = u) {
                                e:{
                                    for (s = u, u = Zr; 8 !== s.nodeType;) {
                                        if (!u) {
                                            u = null;
                                            break e
                                        }
                                        if (null === (s = od(s.nextSibling))) {
                                            u = null;
                                            break e
                                        }
                                    }
                                    u = s
                                }
                                null !== u ? (t.memoizedState = {
                                    dehydrated: u,
                                    treeContext: null !== Br ? {id: Hr, overflow: Gr} : null,
                                    retryLane: 536870912
                                }, (s = Is(18, null, null, 0)).stateNode = u, s.return = t, t.child = s, Qr = t, Yr = null, s = !0) : s = !1
                            }
                            s || ea(t)
                        }
                        if (null !== (u = t.memoizedState) && null !== (u = u.dehydrated)) return "$!" === u.data ? t.lanes = 16 : t.lanes = 536870912, null;
                        Ma(t)
                    }
                    return u = a.children, a = a.fallback, l ? (Oa(), u = io({
                        mode: "hidden",
                        children: u
                    }, l = t.mode), a = Vs(a, l, n, null), u.return = t, a.return = t, u.sibling = a, t.child = u, (l = t.child).memoizedState = no(n), l.childLanes = ro(e, r, n), t.memoizedState = to, a) : (Na(t), lo(t, u))
                }
                if (null !== (s = e.memoizedState) && null !== (u = s.dehydrated)) {
                    if (o) 256 & t.flags ? (Na(t), t.flags &= -257, t = oo(e, t, n)) : null !== t.memoizedState ? (Oa(), t.child = e.child, t.flags |= 128, t = null) : (Oa(), l = a.fallback, u = t.mode, a = io({
                        mode: "visible",
                        children: a.children
                    }, u), (l = Vs(l, u, n, null)).flags |= 2, a.return = t, l.return = t, a.sibling = l, t.child = a, Sa(t, e.child, null, n), (a = t.child).memoizedState = no(n), a.childLanes = ro(e, r, n), t.memoizedState = to, t = l); else if (Na(t), "$!" === u.data) {
                        if (r = u.nextSibling && u.nextSibling.dataset) var c = r.dgst;
                        r = c, (a = Error(i(419))).stack = "", a.digest = r, la({
                            value: a,
                            source: null,
                            stack: null
                        }), t = oo(e, t, n)
                    } else if (Gi || ko(e, t, n, !1), r = 0 !== (n & e.childLanes), Gi || r) {
                        if (null !== (r = tu)) {
                            if (0 !== (42 & (a = n & -n))) a = 1; else switch (a) {
                                case 2:
                                    a = 1;
                                    break;
                                case 8:
                                    a = 4;
                                    break;
                                case 32:
                                    a = 16;
                                    break;
                                case 128:
                                case 256:
                                case 512:
                                case 1024:
                                case 2048:
                                case 4096:
                                case 8192:
                                case 16384:
                                case 32768:
                                case 65536:
                                case 131072:
                                case 262144:
                                case 524288:
                                case 1048576:
                                case 2097152:
                                case 4194304:
                                case 8388608:
                                case 16777216:
                                case 33554432:
                                    a = 64;
                                    break;
                                case 268435456:
                                    a = 134217728;
                                    break;
                                default:
                                    a = 0
                            }
                            if (0 !== (a = 0 !== (a & (r.suspendedLanes | n)) ? 0 : a) && a !== s.retryLane) throw s.retryLane = a, zr(e, a), Ou(r, e, a), Hi
                        }
                        "$?" === u.data || Uu(), t = oo(e, t, n)
                    } else "$?" === u.data ? (t.flags |= 128, t.child = e.child, t = oc.bind(null, e), u._reactRetry = t, t = null) : (e = s.treeContext, Yr = od(u.nextSibling), Qr = t, Xr = !0, Kr = null, Zr = !1, null !== e && (Fr[Vr++] = Hr, Fr[Vr++] = Gr, Fr[Vr++] = Br, Hr = e.id, Gr = e.overflow, Br = t), (t = lo(t, a.children)).flags |= 4096);
                    return t
                }
                return l ? (Oa(), l = a.fallback, u = t.mode, c = (s = e.child).sibling, (a = Ds(s, {
                    mode: "hidden",
                    children: a.children
                })).subtreeFlags = 31457280 & s.subtreeFlags, null !== c ? l = Ds(c, l) : (l = Vs(l, u, n, null)).flags |= 2, l.return = t, a.return = t, a.sibling = l, t.child = a, a = l, l = t.child, null === (u = e.child.memoizedState) ? u = no(n) : (null !== (s = u.cachePool) ? (c = Fa._currentValue, s = s.parent !== c ? {
                    parent: c,
                    pool: c
                } : s) : s = Ka(), u = {
                    baseLanes: u.baseLanes | n,
                    cachePool: s
                }), l.memoizedState = u, l.childLanes = ro(e, r, n), t.memoizedState = to, a) : (Na(t), e = (n = e.child).sibling, (n = Ds(n, {
                    mode: "visible",
                    children: a.children
                })).return = t, n.sibling = null, null !== e && (null === (r = t.deletions) ? (t.deletions = [e], t.flags |= 16) : r.push(e)), t.child = n, t.memoizedState = null, n)
            }

            function lo(e, t) {
                return (t = io({mode: "visible", children: t}, e.mode)).return = e, e.child = t
            }

            function io(e, t) {
                return Bs(e, t, 0, null)
            }

            function oo(e, t, n) {
                return Sa(t, e.child, null, n), (e = lo(t, t.pendingProps.children)).flags |= 2, t.memoizedState = null, e
            }

            function so(e, t, n) {
                e.lanes |= t;
                var r = e.alternate;
                null !== r && (r.lanes |= t), wo(e.return, t, n)
            }

            function uo(e, t, n, r, a) {
                var l = e.memoizedState;
                null === l ? e.memoizedState = {
                    isBackwards: t,
                    rendering: null,
                    renderingStartTime: 0,
                    last: r,
                    tail: n,
                    tailMode: a
                } : (l.isBackwards = t, l.rendering = null, l.renderingStartTime = 0, l.last = r, l.tail = n, l.tailMode = a)
            }

            function co(e, t, n) {
                var r = t.pendingProps, a = r.revealOrder, l = r.tail;
                if (Ui(e, t, r.children, n), 0 !== (2 & (r = Aa.current))) r = 1 & r | 2, t.flags |= 128; else {
                    if (null !== e && 0 !== (128 & e.flags)) e:for (e = t.child; null !== e;) {
                        if (13 === e.tag) null !== e.memoizedState && so(e, n, t); else if (19 === e.tag) so(e, n, t); else if (null !== e.child) {
                            e.child.return = e, e = e.child;
                            continue
                        }
                        if (e === t) break e;
                        for (; null === e.sibling;) {
                            if (null === e.return || e.return === t) break e;
                            e = e.return
                        }
                        e.sibling.return = e.return, e = e.sibling
                    }
                    r &= 1
                }
                switch (Q(Aa, r), a) {
                    case"forwards":
                        for (n = t.child, a = null; null !== n;) null !== (e = n.alternate) && null === Ia(e) && (a = n), n = n.sibling;
                        null === (n = a) ? (a = t.child, t.child = null) : (a = n.sibling, n.sibling = null), uo(t, !1, a, n, l);
                        break;
                    case"backwards":
                        for (n = null, a = t.child, t.child = null; null !== a;) {
                            if (null !== (e = a.alternate) && null === Ia(e)) {
                                t.child = a;
                                break
                            }
                            e = a.sibling, a.sibling = n, n = a, a = e
                        }
                        uo(t, !0, n, null, l);
                        break;
                    case"together":
                        uo(t, !1, null, null, void 0);
                        break;
                    default:
                        t.memoizedState = null
                }
                return t.child
            }

            function fo(e, t, n) {
                if (null !== e && (t.dependencies = e.dependencies), du |= t.lanes, 0 === (n & t.childLanes)) {
                    if (null === e) return null;
                    if (ko(e, t, n, !1), 0 === (n & t.childLanes)) return null
                }
                if (null !== e && t.child !== e.child) throw Error(i(153));
                if (null !== t.child) {
                    for (n = Ds(e = t.child, e.pendingProps), t.child = n, n.return = t; null !== e.sibling;) e = e.sibling, (n = n.sibling = Ds(e, e.pendingProps)).return = t;
                    n.sibling = null
                }
                return t.child
            }

            function po(e, t) {
                return 0 !== (e.lanes & t) || !(null === (e = e.dependencies) || !xo(e))
            }

            function mo(e, t, n) {
                if (null !== e) if (e.memoizedProps !== t.pendingProps) Gi = !0; else {
                    if (!po(e, n) && 0 === (128 & t.flags)) return Gi = !1, function (e, t, n) {
                        switch (t.tag) {
                            case 3:
                                J(t, t.stateNode.containerInfo), yo(t, Fa, e.memoizedState.cache), aa();
                                break;
                            case 27:
                            case 5:
                                te(t);
                                break;
                            case 4:
                                J(t, t.stateNode.containerInfo);
                                break;
                            case 10:
                                yo(t, t.type, t.memoizedProps.value);
                                break;
                            case 13:
                                var r = t.memoizedState;
                                if (null !== r) return null !== r.dehydrated ? (Na(t), t.flags |= 128, null) : 0 !== (n & t.child.childLanes) ? ao(e, t, n) : (Na(t), null !== (e = fo(e, t, n)) ? e.sibling : null);
                                Na(t);
                                break;
                            case 19:
                                var a = 0 !== (128 & e.flags);
                                if ((r = 0 !== (n & t.childLanes)) || (ko(e, t, n, !1), r = 0 !== (n & t.childLanes)), a) {
                                    if (r) return co(e, t, n);
                                    t.flags |= 128
                                }
                                if (null !== (a = t.memoizedState) && (a.rendering = null, a.tail = null, a.lastEffect = null), Q(Aa, Aa.current), r) break;
                                return null;
                            case 22:
                            case 23:
                                return t.lanes = 0, Qi(e, t, n);
                            case 24:
                                yo(t, Fa, e.memoizedState.cache)
                        }
                        return fo(e, t, n)
                    }(e, t, n);
                    Gi = 0 !== (131072 & e.flags)
                } else Gi = !1, Xr && 0 !== (1048576 & t.flags) && qr(t, Rr, t.index);
                switch (t.lanes = 0, t.tag) {
                    case 16:
                        e:{
                            e = t.pendingProps;
                            var r = t.elementType, a = r._init;
                            if (r = a(r._payload), t.type = r, "function" !== typeof r) {
                                if (void 0 !== r && null !== r) {
                                    if ((a = r.$$typeof) === v) {
                                        t.tag = 11, t = qi(null, t, r, e, n);
                                        break e
                                    }
                                    if (a === w) {
                                        t.tag = 14, t = Wi(null, t, r, e, n);
                                        break e
                                    }
                                }
                                throw t = C(r) || r, Error(i(306, t, ""))
                            }
                            js(r) ? (e = Oi(r, e), t.tag = 1, t = Ji(null, t, r, e, n)) : (t.tag = 0, t = Ki(null, t, r, e, n))
                        }
                        return t;
                    case 0:
                        return Ki(e, t, t.type, t.pendingProps, n);
                    case 1:
                        return Ji(e, t, r = t.type, a = Oi(r, t.pendingProps), n);
                    case 3:
                        e:{
                            if (J(t, t.stateNode.containerInfo), null === e) throw Error(i(387));
                            var l = t.pendingProps;
                            r = (a = t.memoizedState).element, No(e, t), Do(t, l, null, n);
                            var o = t.memoizedState;
                            if (l = o.cache, yo(t, Fa, l), l !== a.cache && So(t, [Fa], n, !0), jo(), l = o.element, a.isDehydrated) {
                                if (a = {
                                    element: l,
                                    isDehydrated: !1,
                                    cache: o.cache
                                }, t.updateQueue.baseState = a, t.memoizedState = a, 256 & t.flags) {
                                    t = eo(e, t, l, n);
                                    break e
                                }
                                if (l !== r) {
                                    la(r = Ar(Error(i(424)), t)), t = eo(e, t, l, n);
                                    break e
                                }
                                for (Yr = od(t.stateNode.containerInfo.firstChild), Qr = t, Xr = !0, Kr = null, Zr = !0, n = ka(t, null, l, n), t.child = n; n;) n.flags = -3 & n.flags | 4096, n = n.sibling
                            } else {
                                if (aa(), l === r) {
                                    t = fo(e, t, n);
                                    break e
                                }
                                Ui(e, t, l, n)
                            }
                            t = t.child
                        }
                        return t;
                    case 26:
                        return Xi(e, t), null === e ? (n = gd(t.type, null, t.pendingProps, null)) ? t.memoizedState = n : Xr || (n = t.type, e = t.pendingProps, (r = Yc(K.current).createElement(n))[Re] = t, r[Fe] = e, Wc(r, n, e), Ke(r), t.stateNode = r) : t.memoizedState = gd(t.type, e.memoizedProps, t.pendingProps, e.memoizedState), null;
                    case 27:
                        return te(t), null === e && Xr && (r = t.stateNode = ud(t.type, t.pendingProps, K.current), Qr = t, Zr = !0, Yr = od(r.firstChild)), r = t.pendingProps.children, null !== e || Xr ? Ui(e, t, r, n) : t.child = Sa(t, null, r, n), Xi(e, t), t.child;
                    case 5:
                        return null === e && Xr && ((a = r = Yr) && (null !== (r = function (e, t, n, r) {
                            for (; 1 === e.nodeType;) {
                                var a = n;
                                if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
                                    if (!r && ("INPUT" !== e.nodeName || "hidden" !== e.type)) break
                                } else if (r) {
                                    if (!e[qe]) switch (t) {
                                        case"meta":
                                            if (!e.hasAttribute("itemprop")) break;
                                            return e;
                                        case"link":
                                            if ("stylesheet" === (l = e.getAttribute("rel")) && e.hasAttribute("data-precedence")) break;
                                            if (l !== a.rel || e.getAttribute("href") !== (null == a.href ? null : a.href) || e.getAttribute("crossorigin") !== (null == a.crossOrigin ? null : a.crossOrigin) || e.getAttribute("title") !== (null == a.title ? null : a.title)) break;
                                            return e;
                                        case"style":
                                            if (e.hasAttribute("data-precedence")) break;
                                            return e;
                                        case"script":
                                            if (((l = e.getAttribute("src")) !== (null == a.src ? null : a.src) || e.getAttribute("type") !== (null == a.type ? null : a.type) || e.getAttribute("crossorigin") !== (null == a.crossOrigin ? null : a.crossOrigin)) && l && e.hasAttribute("async") && !e.hasAttribute("itemprop")) break;
                                            return e;
                                        default:
                                            return e
                                    }
                                } else {
                                    if ("input" !== t || "hidden" !== e.type) return e;
                                    var l = null == a.name ? null : "" + a.name;
                                    if ("hidden" === a.type && e.getAttribute("name") === l) return e
                                }
                                if (null === (e = od(e.nextSibling))) break
                            }
                            return null
                        }(r, t.type, t.pendingProps, Zr)) ? (t.stateNode = r, Qr = t, Yr = od(r.firstChild), Zr = !1, a = !0) : a = !1), a || ea(t)), te(t), a = t.type, l = t.pendingProps, o = null !== e ? e.memoizedProps : null, r = l.children, Zc(a, l) ? r = null : null !== o && Zc(a, o) && (t.flags |= 32), null !== t.memoizedState && (a = dl(e, t, ml, null, null, n), jd._currentValue = a), Xi(e, t), Ui(e, t, r, n), t.child;
                    case 6:
                        return null === e && Xr && ((e = n = Yr) && (null !== (n = function (e, t, n) {
                            if ("" === t) return null;
                            for (; 3 !== e.nodeType;) {
                                if ((1 !== e.nodeType || "INPUT" !== e.nodeName || "hidden" !== e.type) && !n) return null;
                                if (null === (e = od(e.nextSibling))) return null
                            }
                            return e
                        }(n, t.pendingProps, Zr)) ? (t.stateNode = n, Qr = t, Yr = null, e = !0) : e = !1), e || ea(t)), null;
                    case 13:
                        return ao(e, t, n);
                    case 4:
                        return J(t, t.stateNode.containerInfo), r = t.pendingProps, null === e ? t.child = Sa(t, null, r, n) : Ui(e, t, r, n), t.child;
                    case 11:
                        return qi(e, t, t.type, t.pendingProps, n);
                    case 7:
                        return Ui(e, t, t.pendingProps, n), t.child;
                    case 8:
                    case 12:
                        return Ui(e, t, t.pendingProps.children, n), t.child;
                    case 10:
                        return r = t.pendingProps, yo(t, t.type, r.value), Ui(e, t, r.children, n), t.child;
                    case 9:
                        return a = t.type._context, r = t.pendingProps.children, Eo(t), r = r(a = _o(a)), t.flags |= 1, Ui(e, t, r, n), t.child;
                    case 14:
                        return Wi(e, t, t.type, t.pendingProps, n);
                    case 15:
                        return $i(e, t, t.type, t.pendingProps, n);
                    case 19:
                        return co(e, t, n);
                    case 22:
                        return Qi(e, t, n);
                    case 24:
                        return Eo(t), r = _o(Fa), null === e ? (null === (a = Ya()) && (a = tu, l = Va(), a.pooledCache = l, l.refCount++, null !== l && (a.pooledCacheLanes |= n), a = l), t.memoizedState = {
                            parent: r,
                            cache: a
                        }, zo(t), yo(t, Fa, a)) : (0 !== (e.lanes & n) && (No(e, t), Do(t, null, null, n), jo()), a = e.memoizedState, l = t.memoizedState, a.parent !== r ? (a = {
                            parent: r,
                            cache: r
                        }, t.memoizedState = a, 0 === t.lanes && (t.memoizedState = t.updateQueue.baseState = a), yo(t, Fa, r)) : (r = l.cache, yo(t, Fa, r), r !== a.cache && So(t, [Fa], n, !0))), Ui(e, t, t.pendingProps.children, n), t.child;
                    case 29:
                        throw t.pendingProps
                }
                throw Error(i(156, t.tag))
            }

            var ho = W(null), go = null, vo = null;

            function yo(e, t, n) {
                Q(ho, t._currentValue), t._currentValue = n
            }

            function bo(e) {
                e._currentValue = ho.current, $(ho)
            }

            function wo(e, t, n) {
                for (; null !== e;) {
                    var r = e.alternate;
                    if ((e.childLanes & t) !== t ? (e.childLanes |= t, null !== r && (r.childLanes |= t)) : null !== r && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
                    e = e.return
                }
            }

            function So(e, t, n, r) {
                var a = e.child;
                for (null !== a && (a.return = e); null !== a;) {
                    var l = a.dependencies;
                    if (null !== l) {
                        var o = a.child;
                        l = l.firstContext;
                        e:for (; null !== l;) {
                            var s = l;
                            l = a;
                            for (var u = 0; u < t.length; u++) if (s.context === t[u]) {
                                l.lanes |= n, null !== (s = l.alternate) && (s.lanes |= n), wo(l.return, n, e), r || (o = null);
                                break e
                            }
                            l = s.next
                        }
                    } else if (18 === a.tag) {
                        if (null === (o = a.return)) throw Error(i(341));
                        o.lanes |= n, null !== (l = o.alternate) && (l.lanes |= n), wo(o, n, e), o = null
                    } else o = a.child;
                    if (null !== o) o.return = a; else for (o = a; null !== o;) {
                        if (o === e) {
                            o = null;
                            break
                        }
                        if (null !== (a = o.sibling)) {
                            a.return = o.return, o = a;
                            break
                        }
                        o = o.return
                    }
                    a = o
                }
            }

            function ko(e, t, n, r) {
                e = null;
                for (var a = t, l = !1; null !== a;) {
                    if (!l) if (0 !== (524288 & a.flags)) l = !0; else if (0 !== (262144 & a.flags)) break;
                    if (10 === a.tag) {
                        var o = a.alternate;
                        if (null === o) throw Error(i(387));
                        if (null !== (o = o.memoizedProps)) {
                            var s = a.type;
                            Qn(a.pendingProps.value, o.value) || (null !== e ? e.push(s) : e = [s])
                        }
                    } else if (a === Z.current) {
                        if (null === (o = a.alternate)) throw Error(i(387));
                        o.memoizedState.memoizedState !== a.memoizedState.memoizedState && (null !== e ? e.push(jd) : e = [jd])
                    }
                    a = a.return
                }
                null !== e && So(t, e, n, r), t.flags |= 262144
            }

            function xo(e) {
                for (e = e.firstContext; null !== e;) {
                    if (!Qn(e.context._currentValue, e.memoizedValue)) return !0;
                    e = e.next
                }
                return !1
            }

            function Eo(e) {
                go = e, vo = null, null !== (e = e.dependencies) && (e.firstContext = null)
            }

            function _o(e) {
                return Co(go, e)
            }

            function To(e, t) {
                return null === go && Eo(e), Co(e, t)
            }

            function Co(e, t) {
                var n = t._currentValue;
                if (t = {context: t, memoizedValue: n, next: null}, null === vo) {
                    if (null === e) throw Error(i(308));
                    vo = t, e.dependencies = {lanes: 0, firstContext: t}, e.flags |= 524288
                } else vo = vo.next = t;
                return n
            }

            var Po = !1;

            function zo(e) {
                e.updateQueue = {
                    baseState: e.memoizedState,
                    firstBaseUpdate: null,
                    lastBaseUpdate: null,
                    shared: {pending: null, lanes: 0, hiddenCallbacks: null},
                    callbacks: null
                }
            }

            function No(e, t) {
                e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
                    baseState: e.baseState,
                    firstBaseUpdate: e.firstBaseUpdate,
                    lastBaseUpdate: e.lastBaseUpdate,
                    shared: e.shared,
                    callbacks: null
                })
            }

            function Lo(e) {
                return {lane: e, tag: 0, payload: null, callback: null, next: null}
            }

            function Oo(e, t, n) {
                var r = e.updateQueue;
                if (null === r) return null;
                if (r = r.shared, 0 !== (2 & eu)) {
                    var a = r.pending;
                    return null === a ? t.next = t : (t.next = a.next, a.next = t), r.pending = t, t = Lr(e), Nr(e, null, n), t
                }
                return Cr(e, r, t, n), Lr(e)
            }

            function Mo(e, t, n) {
                if (null !== (t = t.updateQueue) && (t = t.shared, 0 !== (4194176 & n))) {
                    var r = t.lanes;
                    n |= r &= e.pendingLanes, t.lanes = n, Ae(e, n)
                }
            }

            function Ao(e, t) {
                var n = e.updateQueue, r = e.alternate;
                if (null !== r && n === (r = r.updateQueue)) {
                    var a = null, l = null;
                    if (null !== (n = n.firstBaseUpdate)) {
                        do {
                            var i = {lane: n.lane, tag: n.tag, payload: n.payload, callback: null, next: null};
                            null === l ? a = l = i : l = l.next = i, n = n.next
                        } while (null !== n);
                        null === l ? a = l = t : l = l.next = t
                    } else a = l = t;
                    return n = {
                        baseState: r.baseState,
                        firstBaseUpdate: a,
                        lastBaseUpdate: l,
                        shared: r.shared,
                        callbacks: r.callbacks
                    }, void (e.updateQueue = n)
                }
                null === (e = n.lastBaseUpdate) ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t
            }

            var Io = !1;

            function jo() {
                if (Io) {
                    if (null !== qa) throw qa
                }
            }

            function Do(e, t, n, r) {
                Io = !1;
                var a = e.updateQueue;
                Po = !1;
                var l = a.firstBaseUpdate, i = a.lastBaseUpdate, o = a.shared.pending;
                if (null !== o) {
                    a.shared.pending = null;
                    var s = o, u = s.next;
                    s.next = null, null === i ? l = u : i.next = u, i = s;
                    var c = e.alternate;
                    null !== c && ((o = (c = c.updateQueue).lastBaseUpdate) !== i && (null === o ? c.firstBaseUpdate = u : o.next = u, c.lastBaseUpdate = s))
                }
                if (null !== l) {
                    var d = a.baseState;
                    for (i = 0, c = u = s = null, o = l; ;) {
                        var f = -536870913 & o.lane, p = f !== o.lane;
                        if (p ? (ru & f) === f : (r & f) === f) {
                            0 !== f && f === Ua && (Io = !0), null !== c && (c = c.next = {
                                lane: 0,
                                tag: o.tag,
                                payload: o.payload,
                                callback: null,
                                next: null
                            });
                            e:{
                                var m = e, h = o;
                                f = t;
                                var g = n;
                                switch (h.tag) {
                                    case 1:
                                        if ("function" === typeof (m = h.payload)) {
                                            d = m.call(g, d, f);
                                            break e
                                        }
                                        d = m;
                                        break e;
                                    case 3:
                                        m.flags = -65537 & m.flags | 128;
                                    case 0:
                                        if (null === (f = "function" === typeof (m = h.payload) ? m.call(g, d, f) : m) || void 0 === f) break e;
                                        d = L({}, d, f);
                                        break e;
                                    case 2:
                                        Po = !0
                                }
                            }
                            null !== (f = o.callback) && (e.flags |= 64, p && (e.flags |= 8192), null === (p = a.callbacks) ? a.callbacks = [f] : p.push(f))
                        } else p = {
                            lane: f,
                            tag: o.tag,
                            payload: o.payload,
                            callback: o.callback,
                            next: null
                        }, null === c ? (u = c = p, s = d) : c = c.next = p, i |= f;
                        if (null === (o = o.next)) {
                            if (null === (o = a.shared.pending)) break;
                            o = (p = o).next, p.next = null, a.lastBaseUpdate = p, a.shared.pending = null
                        }
                    }
                    null === c && (s = d), a.baseState = s, a.firstBaseUpdate = u, a.lastBaseUpdate = c, null === l && (a.shared.lanes = 0), du |= i, e.lanes = i, e.memoizedState = d
                }
            }

            function Ro(e, t) {
                if ("function" !== typeof e) throw Error(i(191, e));
                e.call(t)
            }

            function Fo(e, t) {
                var n = e.callbacks;
                if (null !== n) for (e.callbacks = null, e = 0; e < n.length; e++) Ro(n[e], t)
            }

            function Vo(e, t) {
                try {
                    var n = t.updateQueue, r = null !== n ? n.lastEffect : null;
                    if (null !== r) {
                        var a = r.next;
                        n = a;
                        do {
                            if ((n.tag & e) === e) {
                                r = void 0;
                                var l = n.create, i = n.inst;
                                r = l(), i.destroy = r
                            }
                            n = n.next
                        } while (n !== a)
                    }
                } catch (o) {
                    rc(t, t.return, o)
                }
            }

            function Bo(e, t, n) {
                try {
                    var r = t.updateQueue, a = null !== r ? r.lastEffect : null;
                    if (null !== a) {
                        var l = a.next;
                        r = l;
                        do {
                            if ((r.tag & e) === e) {
                                var i = r.inst, o = i.destroy;
                                if (void 0 !== o) {
                                    i.destroy = void 0, a = t;
                                    var s = n;
                                    try {
                                        o()
                                    } catch (u) {
                                        rc(a, s, u)
                                    }
                                }
                            }
                            r = r.next
                        } while (r !== l)
                    }
                } catch (u) {
                    rc(t, t.return, u)
                }
            }

            function Ho(e) {
                var t = e.updateQueue;
                if (null !== t) {
                    var n = e.stateNode;
                    try {
                        Fo(t, n)
                    } catch (r) {
                        rc(e, e.return, r)
                    }
                }
            }

            function Go(e, t, n) {
                n.props = Oi(e.type, e.memoizedProps), n.state = e.memoizedState;
                try {
                    n.componentWillUnmount()
                } catch (r) {
                    rc(e, t, r)
                }
            }

            function Uo(e, t) {
                try {
                    var n = e.ref;
                    if (null !== n) {
                        var r = e.stateNode;
                        switch (e.tag) {
                            case 26:
                            case 27:
                            case 5:
                                var a = r;
                                break;
                            default:
                                a = r
                        }
                        "function" === typeof n ? e.refCleanup = n(a) : n.current = a
                    }
                } catch (l) {
                    rc(e, t, l)
                }
            }

            function qo(e, t) {
                var n = e.ref, r = e.refCleanup;
                if (null !== n) if ("function" === typeof r) try {
                    r()
                } catch (a) {
                    rc(e, t, a)
                } finally {
                    e.refCleanup = null, null != (e = e.alternate) && (e.refCleanup = null)
                } else if ("function" === typeof n) try {
                    n(null)
                } catch (l) {
                    rc(e, t, l)
                } else n.current = null
            }

            function Wo(e) {
                var t = e.type, n = e.memoizedProps, r = e.stateNode;
                try {
                    e:switch (t) {
                        case"button":
                        case"input":
                        case"select":
                        case"textarea":
                            n.autoFocus && r.focus();
                            break e;
                        case"img":
                            n.src ? r.src = n.src : n.srcSet && (r.srcset = n.srcSet)
                    }
                } catch (a) {
                    rc(e, e.return, a)
                }
            }

            function $o(e, t, n) {
                try {
                    var r = e.stateNode;
                    !function (e, t, n, r) {
                        switch (t) {
                            case"div":
                            case"span":
                            case"svg":
                            case"path":
                            case"a":
                            case"g":
                            case"p":
                            case"li":
                                break;
                            case"input":
                                var a = null, l = null, o = null, s = null, u = null, c = null, d = null;
                                for (m in n) {
                                    var f = n[m];
                                    if (n.hasOwnProperty(m) && null != f) switch (m) {
                                        case"checked":
                                        case"value":
                                            break;
                                        case"defaultValue":
                                            u = f;
                                        default:
                                            r.hasOwnProperty(m) || Uc(e, t, m, null, r, f)
                                    }
                                }
                                for (var p in r) {
                                    var m = r[p];
                                    if (f = n[p], r.hasOwnProperty(p) && (null != m || null != f)) switch (p) {
                                        case"type":
                                            l = m;
                                            break;
                                        case"name":
                                            a = m;
                                            break;
                                        case"checked":
                                            c = m;
                                            break;
                                        case"defaultChecked":
                                            d = m;
                                            break;
                                        case"value":
                                            o = m;
                                            break;
                                        case"defaultValue":
                                            s = m;
                                            break;
                                        case"children":
                                        case"dangerouslySetInnerHTML":
                                            if (null != m) throw Error(i(137, t));
                                            break;
                                        default:
                                            m !== f && Uc(e, t, p, m, r, f)
                                    }
                                }
                                return void gt(e, o, s, u, c, d, l, a);
                            case"select":
                                for (l in m = o = s = p = null, n) if (u = n[l], n.hasOwnProperty(l) && null != u) switch (l) {
                                    case"value":
                                        break;
                                    case"multiple":
                                        m = u;
                                    default:
                                        r.hasOwnProperty(l) || Uc(e, t, l, null, r, u)
                                }
                                for (a in r) if (l = r[a], u = n[a], r.hasOwnProperty(a) && (null != l || null != u)) switch (a) {
                                    case"value":
                                        p = l;
                                        break;
                                    case"defaultValue":
                                        s = l;
                                        break;
                                    case"multiple":
                                        o = l;
                                    default:
                                        l !== u && Uc(e, t, a, l, r, u)
                                }
                                return t = s, n = o, r = m, void (null != p ? bt(e, !!n, p, !1) : !!r !== !!n && (null != t ? bt(e, !!n, t, !0) : bt(e, !!n, n ? [] : "", !1)));
                            case"textarea":
                                for (s in m = p = null, n) if (a = n[s], n.hasOwnProperty(s) && null != a && !r.hasOwnProperty(s)) switch (s) {
                                    case"value":
                                    case"children":
                                        break;
                                    default:
                                        Uc(e, t, s, null, r, a)
                                }
                                for (o in r) if (a = r[o], l = n[o], r.hasOwnProperty(o) && (null != a || null != l)) switch (o) {
                                    case"value":
                                        p = a;
                                        break;
                                    case"defaultValue":
                                        m = a;
                                        break;
                                    case"children":
                                        break;
                                    case"dangerouslySetInnerHTML":
                                        if (null != a) throw Error(i(91));
                                        break;
                                    default:
                                        a !== l && Uc(e, t, o, a, r, l)
                                }
                                return void wt(e, p, m);
                            case"option":
                                for (var h in n) if (p = n[h], n.hasOwnProperty(h) && null != p && !r.hasOwnProperty(h)) if ("selected" === h) e.selected = !1; else Uc(e, t, h, null, r, p);
                                for (u in r) if (p = r[u], m = n[u], r.hasOwnProperty(u) && p !== m && (null != p || null != m)) if ("selected" === u) e.selected = p && "function" !== typeof p && "symbol" !== typeof p; else Uc(e, t, u, p, r, m);
                                return;
                            case"img":
                            case"link":
                            case"area":
                            case"base":
                            case"br":
                            case"col":
                            case"embed":
                            case"hr":
                            case"keygen":
                            case"meta":
                            case"param":
                            case"source":
                            case"track":
                            case"wbr":
                            case"menuitem":
                                for (var g in n) p = n[g], n.hasOwnProperty(g) && null != p && !r.hasOwnProperty(g) && Uc(e, t, g, null, r, p);
                                for (c in r) if (p = r[c], m = n[c], r.hasOwnProperty(c) && p !== m && (null != p || null != m)) switch (c) {
                                    case"children":
                                    case"dangerouslySetInnerHTML":
                                        if (null != p) throw Error(i(137, t));
                                        break;
                                    default:
                                        Uc(e, t, c, p, r, m)
                                }
                                return;
                            default:
                                if (Tt(t)) {
                                    for (var v in n) p = n[v], n.hasOwnProperty(v) && void 0 !== p && !r.hasOwnProperty(v) && qc(e, t, v, void 0, r, p);
                                    for (d in r) p = r[d], m = n[d], !r.hasOwnProperty(d) || p === m || void 0 === p && void 0 === m || qc(e, t, d, p, r, m);
                                    return
                                }
                        }
                        for (var y in n) p = n[y], n.hasOwnProperty(y) && null != p && !r.hasOwnProperty(y) && Uc(e, t, y, null, r, p);
                        for (f in r) p = r[f], m = n[f], !r.hasOwnProperty(f) || p === m || null == p && null == m || Uc(e, t, f, p, r, m)
                    }(r, e.type, n, t), r[Fe] = t
                } catch (a) {
                    rc(e, e.return, a)
                }
            }

            function Qo(e) {
                return 5 === e.tag || 3 === e.tag || 26 === e.tag || 27 === e.tag || 4 === e.tag
            }

            function Yo(e) {
                e:for (; ;) {
                    for (; null === e.sibling;) {
                        if (null === e.return || Qo(e.return)) return null;
                        e = e.return
                    }
                    for (e.sibling.return = e.return, e = e.sibling; 5 !== e.tag && 6 !== e.tag && 27 !== e.tag && 18 !== e.tag;) {
                        if (2 & e.flags) continue e;
                        if (null === e.child || 4 === e.tag) continue e;
                        e.child.return = e, e = e.child
                    }
                    if (!(2 & e.flags)) return e.stateNode
                }
            }

            function Xo(e, t, n) {
                var r = e.tag;
                if (5 === r || 6 === r) e = e.stateNode, t ? 8 === n.nodeType ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (8 === n.nodeType ? (t = n.parentNode).insertBefore(e, n) : (t = n).appendChild(e), null !== (n = n._reactRootContainer) && void 0 !== n || null !== t.onclick || (t.onclick = Gc)); else if (4 !== r && 27 !== r && null !== (e = e.child)) for (Xo(e, t, n), e = e.sibling; null !== e;) Xo(e, t, n), e = e.sibling
            }

            function Ko(e, t, n) {
                var r = e.tag;
                if (5 === r || 6 === r) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e); else if (4 !== r && 27 !== r && null !== (e = e.child)) for (Ko(e, t, n), e = e.sibling; null !== e;) Ko(e, t, n), e = e.sibling
            }

            var Zo = !1, Jo = !1, es = !1, ts = "function" === typeof WeakSet ? WeakSet : Set, ns = null, rs = !1;

            function as(e, t, n) {
                var r = n.flags;
                switch (n.tag) {
                    case 0:
                    case 11:
                    case 15:
                        vs(e, n), 4 & r && Vo(5, n);
                        break;
                    case 1:
                        if (vs(e, n), 4 & r) if (e = n.stateNode, null === t) try {
                            e.componentDidMount()
                        } catch (o) {
                            rc(n, n.return, o)
                        } else {
                            var a = Oi(n.type, t.memoizedProps);
                            t = t.memoizedState;
                            try {
                                e.componentDidUpdate(a, t, e.__reactInternalSnapshotBeforeUpdate)
                            } catch (s) {
                                rc(n, n.return, s)
                            }
                        }
                        64 & r && Ho(n), 512 & r && Uo(n, n.return);
                        break;
                    case 3:
                        if (vs(e, n), 64 & r && null !== (r = n.updateQueue)) {
                            if (e = null, null !== n.child) switch (n.child.tag) {
                                case 27:
                                case 5:
                                case 1:
                                    e = n.child.stateNode
                            }
                            try {
                                Fo(r, e)
                            } catch (o) {
                                rc(n, n.return, o)
                            }
                        }
                        break;
                    case 26:
                        vs(e, n), 512 & r && Uo(n, n.return);
                        break;
                    case 27:
                    case 5:
                        vs(e, n), null === t && 4 & r && Wo(n), 512 & r && Uo(n, n.return);
                        break;
                    case 12:
                    default:
                        vs(e, n);
                        break;
                    case 13:
                        vs(e, n), 4 & r && cs(e, n);
                        break;
                    case 22:
                        if (!(a = null !== n.memoizedState || Zo)) {
                            t = null !== t && null !== t.memoizedState || Jo;
                            var l = Zo, i = Jo;
                            Zo = a, (Jo = t) && !i ? bs(e, n, 0 !== (8772 & n.subtreeFlags)) : vs(e, n), Zo = l, Jo = i
                        }
                        512 & r && ("manual" === n.memoizedProps.mode ? Uo(n, n.return) : qo(n, n.return))
                }
            }

            function ls(e) {
                var t = e.alternate;
                null !== t && (e.alternate = null, ls(t)), e.child = null, e.deletions = null, e.sibling = null, 5 === e.tag && (null !== (t = e.stateNode) && We(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null
            }

            var is = null, os = !1;

            function ss(e, t, n) {
                for (n = n.child; null !== n;) us(e, t, n), n = n.sibling
            }

            function us(e, t, n) {
                if (ye && "function" === typeof ye.onCommitFiberUnmount) try {
                    ye.onCommitFiberUnmount(ve, n)
                } catch (i) {
                }
                switch (n.tag) {
                    case 26:
                        Jo || qo(n, t), ss(e, t, n), n.memoizedState ? n.memoizedState.count-- : n.stateNode && (n = n.stateNode).parentNode.removeChild(n);
                        break;
                    case 27:
                        Jo || qo(n, t);
                        var r = is, a = os;
                        for (is = n.stateNode, ss(e, t, n), t = (n = n.stateNode).attributes; t.length;) n.removeAttributeNode(t[0]);
                        We(n), is = r, os = a;
                        break;
                    case 5:
                        Jo || qo(n, t);
                    case 6:
                        a = is;
                        var l = os;
                        if (is = null, ss(e, t, n), os = l, null !== (is = a)) if (os) try {
                            e = is, r = n.stateNode, 8 === e.nodeType ? e.parentNode.removeChild(r) : e.removeChild(r)
                        } catch (o) {
                            rc(n, t, o)
                        } else try {
                            is.removeChild(n.stateNode)
                        } catch (o) {
                            rc(n, t, o)
                        }
                        break;
                    case 18:
                        null !== is && (os ? (t = is, n = n.stateNode, 8 === t.nodeType ? ld(t.parentNode, n) : 1 === t.nodeType && ld(t, n), gf(t)) : ld(is, n.stateNode));
                        break;
                    case 4:
                        r = is, a = os, is = n.stateNode.containerInfo, os = !0, ss(e, t, n), is = r, os = a;
                        break;
                    case 0:
                    case 11:
                    case 14:
                    case 15:
                        Jo || Bo(2, n, t), Jo || Bo(4, n, t), ss(e, t, n);
                        break;
                    case 1:
                        Jo || (qo(n, t), "function" === typeof (r = n.stateNode).componentWillUnmount && Go(n, t, r)), ss(e, t, n);
                        break;
                    case 21:
                        ss(e, t, n);
                        break;
                    case 22:
                        Jo || qo(n, t), Jo = (r = Jo) || null !== n.memoizedState, ss(e, t, n), Jo = r;
                        break;
                    default:
                        ss(e, t, n)
                }
            }

            function cs(e, t) {
                if (null === t.memoizedState && (null !== (e = t.alternate) && (null !== (e = e.memoizedState) && null !== (e = e.dehydrated)))) try {
                    gf(e)
                } catch (n) {
                    rc(t, t.return, n)
                }
            }

            function ds(e, t) {
                var n = function (e) {
                    switch (e.tag) {
                        case 13:
                        case 19:
                            var t = e.stateNode;
                            return null === t && (t = e.stateNode = new ts), t;
                        case 22:
                            return null === (t = (e = e.stateNode)._retryCache) && (t = e._retryCache = new ts), t;
                        default:
                            throw Error(i(435, e.tag))
                    }
                }(e);
                t.forEach((function (t) {
                    var r = sc.bind(null, e, t);
                    n.has(t) || (n.add(t), t.then(r, r))
                }))
            }

            function fs(e, t) {
                var n = t.deletions;
                if (null !== n) for (var r = 0; r < n.length; r++) {
                    var a = n[r], l = e, o = t, s = o;
                    e:for (; null !== s;) {
                        switch (s.tag) {
                            case 27:
                            case 5:
                                is = s.stateNode, os = !1;
                                break e;
                            case 3:
                            case 4:
                                is = s.stateNode.containerInfo, os = !0;
                                break e
                        }
                        s = s.return
                    }
                    if (null === is) throw Error(i(160));
                    us(l, o, a), is = null, os = !1, null !== (l = a.alternate) && (l.return = null), a.return = null
                }
                if (13878 & t.subtreeFlags) for (t = t.child; null !== t;) ms(t, e), t = t.sibling
            }

            var ps = null;

            function ms(e, t) {
                var n = e.alternate, r = e.flags;
                switch (e.tag) {
                    case 0:
                    case 11:
                    case 14:
                    case 15:
                        fs(t, e), hs(e), 4 & r && (Bo(3, e, e.return), Vo(3, e), Bo(5, e, e.return));
                        break;
                    case 1:
                        fs(t, e), hs(e), 512 & r && (Jo || null === n || qo(n, n.return)), 64 & r && Zo && (null !== (e = e.updateQueue) && (null !== (r = e.callbacks) && (n = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = null === n ? r : n.concat(r))));
                        break;
                    case 26:
                        var a = ps;
                        if (fs(t, e), hs(e), 512 & r && (Jo || null === n || qo(n, n.return)), 4 & r) {
                            var l = null !== n ? n.memoizedState : null;
                            if (r = e.memoizedState, null === n) if (null === r) if (null === e.stateNode) {
                                e:{
                                    r = e.type, n = e.memoizedProps, a = a.ownerDocument || a;
                                    t:switch (r) {
                                        case"title":
                                            (!(l = a.getElementsByTagName("title")[0]) || l[qe] || l[Re] || "http://www.w3.org/2000/svg" === l.namespaceURI || l.hasAttribute("itemprop")) && (l = a.createElement(r), a.head.insertBefore(l, a.querySelector("head > title"))), Wc(l, r, n), l[Re] = e, Ke(l), r = l;
                                            break e;
                                        case"link":
                                            var o = Cd("link", "href", a).get(r + (n.href || ""));
                                            if (o) for (var s = 0; s < o.length; s++) if ((l = o[s]).getAttribute("href") === (null == n.href ? null : n.href) && l.getAttribute("rel") === (null == n.rel ? null : n.rel) && l.getAttribute("title") === (null == n.title ? null : n.title) && l.getAttribute("crossorigin") === (null == n.crossOrigin ? null : n.crossOrigin)) {
                                                o.splice(s, 1);
                                                break t
                                            }
                                            Wc(l = a.createElement(r), r, n), a.head.appendChild(l);
                                            break;
                                        case"meta":
                                            if (o = Cd("meta", "content", a).get(r + (n.content || ""))) for (s = 0; s < o.length; s++) if ((l = o[s]).getAttribute("content") === (null == n.content ? null : "" + n.content) && l.getAttribute("name") === (null == n.name ? null : n.name) && l.getAttribute("property") === (null == n.property ? null : n.property) && l.getAttribute("http-equiv") === (null == n.httpEquiv ? null : n.httpEquiv) && l.getAttribute("charset") === (null == n.charSet ? null : n.charSet)) {
                                                o.splice(s, 1);
                                                break t
                                            }
                                            Wc(l = a.createElement(r), r, n), a.head.appendChild(l);
                                            break;
                                        default:
                                            throw Error(i(468, r))
                                    }
                                    l[Re] = e, Ke(l), r = l
                                }
                                e.stateNode = r
                            } else Pd(a, e.type, e.stateNode); else e.stateNode = kd(a, r, e.memoizedProps); else l !== r ? (null === l ? null !== n.stateNode && (n = n.stateNode).parentNode.removeChild(n) : l.count--, null === r ? Pd(a, e.type, e.stateNode) : kd(a, r, e.memoizedProps)) : null === r && null !== e.stateNode && $o(e, e.memoizedProps, n.memoizedProps)
                        }
                        break;
                    case 27:
                        if (4 & r && null === e.alternate) {
                            a = e.stateNode, l = e.memoizedProps;
                            try {
                                for (var u = a.firstChild; u;) {
                                    var c = u.nextSibling, d = u.nodeName;
                                    u[qe] || "HEAD" === d || "BODY" === d || "SCRIPT" === d || "STYLE" === d || "LINK" === d && "stylesheet" === u.rel.toLowerCase() || a.removeChild(u), u = c
                                }
                                for (var f = e.type, p = a.attributes; p.length;) a.removeAttributeNode(p[0]);
                                Wc(a, f, l), a[Re] = e, a[Fe] = l
                            } catch (h) {
                                rc(e, e.return, h)
                            }
                        }
                    case 5:
                        if (fs(t, e), hs(e), 512 & r && (Jo || null === n || qo(n, n.return)), 32 & e.flags) {
                            a = e.stateNode;
                            try {
                                kt(a, "")
                            } catch (h) {
                                rc(e, e.return, h)
                            }
                        }
                        4 & r && null != e.stateNode && $o(e, a = e.memoizedProps, null !== n ? n.memoizedProps : a), 1024 & r && (es = !0);
                        break;
                    case 6:
                        if (fs(t, e), hs(e), 4 & r) {
                            if (null === e.stateNode) throw Error(i(162));
                            r = e.memoizedProps, n = e.stateNode;
                            try {
                                n.nodeValue = r
                            } catch (h) {
                                rc(e, e.return, h)
                            }
                        }
                        break;
                    case 3:
                        if (Td = null, a = ps, ps = fd(t.containerInfo), fs(t, e), ps = a, hs(e), 4 & r && null !== n && n.memoizedState.isDehydrated) try {
                            gf(t.containerInfo)
                        } catch (h) {
                            rc(e, e.return, h)
                        }
                        es && (es = !1, gs(e));
                        break;
                    case 4:
                        r = ps, ps = fd(e.stateNode.containerInfo), fs(t, e), hs(e), ps = r;
                        break;
                    case 12:
                        fs(t, e), hs(e);
                        break;
                    case 13:
                        fs(t, e), hs(e), 8192 & e.child.flags && null !== e.memoizedState !== (null !== n && null !== n.memoizedState) && (bu = se()), 4 & r && (null !== (r = e.updateQueue) && (e.updateQueue = null, ds(e, r)));
                        break;
                    case 22:
                        if (512 & r && (Jo || null === n || qo(n, n.return)), u = null !== e.memoizedState, c = null !== n && null !== n.memoizedState, Zo = (d = Zo) || u, Jo = (f = Jo) || c, fs(t, e), Jo = f, Zo = d, hs(e), (t = e.stateNode)._current = e, t._visibility &= -3, t._visibility |= 2 & t._pendingVisibility, 8192 & r && (t._visibility = u ? -2 & t._visibility : 1 | t._visibility, u && (t = Zo || Jo, null === n || c || t || ys(e)), null === e.memoizedProps || "manual" !== e.memoizedProps.mode)) e:for (n = null, t = e; ;) {
                            if (5 === t.tag || 26 === t.tag || 27 === t.tag) {
                                if (null === n) {
                                    c = n = t;
                                    try {
                                        if (a = c.stateNode, u) "function" === typeof (l = a.style).setProperty ? l.setProperty("display", "none", "important") : l.display = "none"; else {
                                            o = c.stateNode;
                                            var m = void 0 !== (s = c.memoizedProps.style) && null !== s && s.hasOwnProperty("display") ? s.display : null;
                                            o.style.display = null == m || "boolean" === typeof m ? "" : ("" + m).trim()
                                        }
                                    } catch (h) {
                                        rc(c, c.return, h)
                                    }
                                }
                            } else if (6 === t.tag) {
                                if (null === n) {
                                    c = t;
                                    try {
                                        c.stateNode.nodeValue = u ? "" : c.memoizedProps
                                    } catch (h) {
                                        rc(c, c.return, h)
                                    }
                                }
                            } else if ((22 !== t.tag && 23 !== t.tag || null === t.memoizedState || t === e) && null !== t.child) {
                                t.child.return = t, t = t.child;
                                continue
                            }
                            if (t === e) break e;
                            for (; null === t.sibling;) {
                                if (null === t.return || t.return === e) break e;
                                n === t && (n = null), t = t.return
                            }
                            n === t && (n = null), t.sibling.return = t.return, t = t.sibling
                        }
                        4 & r && (null !== (r = e.updateQueue) && (null !== (n = r.retryQueue) && (r.retryQueue = null, ds(e, n))));
                        break;
                    case 19:
                        fs(t, e), hs(e), 4 & r && (null !== (r = e.updateQueue) && (e.updateQueue = null, ds(e, r)));
                        break;
                    case 21:
                        break;
                    default:
                        fs(t, e), hs(e)
                }
            }

            function hs(e) {
                var t = e.flags;
                if (2 & t) {
                    try {
                        if (27 !== e.tag) {
                            e:{
                                for (var n = e.return; null !== n;) {
                                    if (Qo(n)) {
                                        var r = n;
                                        break e
                                    }
                                    n = n.return
                                }
                                throw Error(i(160))
                            }
                            switch (r.tag) {
                                case 27:
                                    var a = r.stateNode;
                                    Ko(e, Yo(e), a);
                                    break;
                                case 5:
                                    var l = r.stateNode;
                                    32 & r.flags && (kt(l, ""), r.flags &= -33), Ko(e, Yo(e), l);
                                    break;
                                case 3:
                                case 4:
                                    var o = r.stateNode.containerInfo;
                                    Xo(e, Yo(e), o);
                                    break;
                                default:
                                    throw Error(i(161))
                            }
                        }
                    } catch (s) {
                        rc(e, e.return, s)
                    }
                    e.flags &= -3
                }
                4096 & t && (e.flags &= -4097)
            }

            function gs(e) {
                if (1024 & e.subtreeFlags) for (e = e.child; null !== e;) {
                    var t = e;
                    gs(t), 5 === t.tag && 1024 & t.flags && t.stateNode.reset(), e = e.sibling
                }
            }

            function vs(e, t) {
                if (8772 & t.subtreeFlags) for (t = t.child; null !== t;) as(e, t.alternate, t), t = t.sibling
            }

            function ys(e) {
                for (e = e.child; null !== e;) {
                    var t = e;
                    switch (t.tag) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                            Bo(4, t, t.return), ys(t);
                            break;
                        case 1:
                            qo(t, t.return);
                            var n = t.stateNode;
                            "function" === typeof n.componentWillUnmount && Go(t, t.return, n), ys(t);
                            break;
                        case 26:
                        case 27:
                        case 5:
                            qo(t, t.return), ys(t);
                            break;
                        case 22:
                            qo(t, t.return), null === t.memoizedState && ys(t);
                            break;
                        default:
                            ys(t)
                    }
                    e = e.sibling
                }
            }

            function bs(e, t, n) {
                for (n = n && 0 !== (8772 & t.subtreeFlags), t = t.child; null !== t;) {
                    var r = t.alternate, a = e, l = t, i = l.flags;
                    switch (l.tag) {
                        case 0:
                        case 11:
                        case 15:
                            bs(a, l, n), Vo(4, l);
                            break;
                        case 1:
                            if (bs(a, l, n), "function" === typeof (a = (r = l).stateNode).componentDidMount) try {
                                a.componentDidMount()
                            } catch (u) {
                                rc(r, r.return, u)
                            }
                            if (null !== (a = (r = l).updateQueue)) {
                                var o = r.stateNode;
                                try {
                                    var s = a.shared.hiddenCallbacks;
                                    if (null !== s) for (a.shared.hiddenCallbacks = null, a = 0; a < s.length; a++) Ro(s[a], o)
                                } catch (u) {
                                    rc(r, r.return, u)
                                }
                            }
                            n && 64 & i && Ho(l), Uo(l, l.return);
                            break;
                        case 26:
                        case 27:
                        case 5:
                            bs(a, l, n), n && null === r && 4 & i && Wo(l), Uo(l, l.return);
                            break;
                        case 12:
                        default:
                            bs(a, l, n);
                            break;
                        case 13:
                            bs(a, l, n), n && 4 & i && cs(a, l);
                            break;
                        case 22:
                            null === l.memoizedState && bs(a, l, n), Uo(l, l.return)
                    }
                    t = t.sibling
                }
            }

            function ws(e, t) {
                var n = null;
                null !== e && null !== e.memoizedState && null !== e.memoizedState.cachePool && (n = e.memoizedState.cachePool.pool), e = null, null !== t.memoizedState && null !== t.memoizedState.cachePool && (e = t.memoizedState.cachePool.pool), e !== n && (null != e && e.refCount++, null != n && Ba(n))
            }

            function Ss(e, t) {
                e = null, null !== t.alternate && (e = t.alternate.memoizedState.cache), (t = t.memoizedState.cache) !== e && (t.refCount++, null != e && Ba(e))
            }

            function ks(e, t, n, r) {
                if (10256 & t.subtreeFlags) for (t = t.child; null !== t;) xs(e, t, n, r), t = t.sibling
            }

            function xs(e, t, n, r) {
                var a = t.flags;
                switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        ks(e, t, n, r), 2048 & a && Vo(9, t);
                        break;
                    case 3:
                        ks(e, t, n, r), 2048 & a && (e = null, null !== t.alternate && (e = t.alternate.memoizedState.cache), (t = t.memoizedState.cache) !== e && (t.refCount++, null != e && Ba(e)));
                        break;
                    case 12:
                        if (2048 & a) {
                            ks(e, t, n, r), e = t.stateNode;
                            try {
                                var l = t.memoizedProps, i = l.id, o = l.onPostCommit;
                                "function" === typeof o && o(i, null === t.alternate ? "mount" : "update", e.passiveEffectDuration, -0)
                            } catch (s) {
                                rc(t, t.return, s)
                            }
                        } else ks(e, t, n, r);
                        break;
                    case 23:
                        break;
                    case 22:
                        l = t.stateNode, null !== t.memoizedState ? 4 & l._visibility ? ks(e, t, n, r) : _s(e, t) : 4 & l._visibility ? ks(e, t, n, r) : (l._visibility |= 4, Es(e, t, n, r, 0 !== (10256 & t.subtreeFlags))), 2048 & a && ws(t.alternate, t);
                        break;
                    case 24:
                        ks(e, t, n, r), 2048 & a && Ss(t.alternate, t);
                        break;
                    default:
                        ks(e, t, n, r)
                }
            }

            function Es(e, t, n, r, a) {
                for (a = a && 0 !== (10256 & t.subtreeFlags), t = t.child; null !== t;) {
                    var l = e, i = t, o = n, s = r, u = i.flags;
                    switch (i.tag) {
                        case 0:
                        case 11:
                        case 15:
                            Es(l, i, o, s, a), Vo(8, i);
                            break;
                        case 23:
                            break;
                        case 22:
                            var c = i.stateNode;
                            null !== i.memoizedState ? 4 & c._visibility ? Es(l, i, o, s, a) : _s(l, i) : (c._visibility |= 4, Es(l, i, o, s, a)), a && 2048 & u && ws(i.alternate, i);
                            break;
                        case 24:
                            Es(l, i, o, s, a), a && 2048 & u && Ss(i.alternate, i);
                            break;
                        default:
                            Es(l, i, o, s, a)
                    }
                    t = t.sibling
                }
            }

            function _s(e, t) {
                if (10256 & t.subtreeFlags) for (t = t.child; null !== t;) {
                    var n = e, r = t, a = r.flags;
                    switch (r.tag) {
                        case 22:
                            _s(n, r), 2048 & a && ws(r.alternate, r);
                            break;
                        case 24:
                            _s(n, r), 2048 & a && Ss(r.alternate, r);
                            break;
                        default:
                            _s(n, r)
                    }
                    t = t.sibling
                }
            }

            var Ts = 8192;

            function Cs(e) {
                if (e.subtreeFlags & Ts) for (e = e.child; null !== e;) Ps(e), e = e.sibling
            }

            function Ps(e) {
                switch (e.tag) {
                    case 26:
                        Cs(e), e.flags & Ts && null !== e.memoizedState && function (e, t, n) {
                            if (null === Nd) throw Error(i(475));
                            var r = Nd;
                            if ("stylesheet" === t.type && ("string" !== typeof n.media || !1 !== matchMedia(n.media).matches) && 0 === (4 & t.state.loading)) {
                                if (null === t.instance) {
                                    var a = vd(n.href), l = e.querySelector(yd(a));
                                    if (l) return null !== (e = l._p) && "object" === typeof e && "function" === typeof e.then && (r.count++, r = Od.bind(r), e.then(r, r)), t.state.loading |= 4, t.instance = l, void Ke(l);
                                    l = e.ownerDocument || e, n = bd(n), (a = cd.get(a)) && Ed(n, a), Ke(l = l.createElement("link"));
                                    var o = l;
                                    o._p = new Promise((function (e, t) {
                                        o.onload = e, o.onerror = t
                                    })), Wc(l, "link", n), t.instance = l
                                }
                                null === r.stylesheets && (r.stylesheets = new Map), r.stylesheets.set(t, e), (e = t.state.preload) && 0 === (3 & t.state.loading) && (r.count++, t = Od.bind(r), e.addEventListener("load", t), e.addEventListener("error", t))
                            }
                        }(ps, e.memoizedState, e.memoizedProps);
                        break;
                    case 5:
                    default:
                        Cs(e);
                        break;
                    case 3:
                    case 4:
                        var t = ps;
                        ps = fd(e.stateNode.containerInfo), Cs(e), ps = t;
                        break;
                    case 22:
                        null === e.memoizedState && (null !== (t = e.alternate) && null !== t.memoizedState ? (t = Ts, Ts = 16777216, Cs(e), Ts = t) : Cs(e))
                }
            }

            function zs(e) {
                var t = e.alternate;
                if (null !== t && null !== (e = t.child)) {
                    t.child = null;
                    do {
                        t = e.sibling, e.sibling = null, e = t
                    } while (null !== e)
                }
            }

            function Ns(e) {
                var t = e.deletions;
                if (0 !== (16 & e.flags)) {
                    if (null !== t) for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        ns = r, Ms(r, e)
                    }
                    zs(e)
                }
                if (10256 & e.subtreeFlags) for (e = e.child; null !== e;) Ls(e), e = e.sibling
            }

            function Ls(e) {
                switch (e.tag) {
                    case 0:
                    case 11:
                    case 15:
                        Ns(e), 2048 & e.flags && Bo(9, e, e.return);
                        break;
                    case 3:
                    case 12:
                    default:
                        Ns(e);
                        break;
                    case 22:
                        var t = e.stateNode;
                        null !== e.memoizedState && 4 & t._visibility && (null === e.return || 13 !== e.return.tag) ? (t._visibility &= -5, Os(e)) : Ns(e)
                }
            }

            function Os(e) {
                var t = e.deletions;
                if (0 !== (16 & e.flags)) {
                    if (null !== t) for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        ns = r, Ms(r, e)
                    }
                    zs(e)
                }
                for (e = e.child; null !== e;) {
                    switch ((t = e).tag) {
                        case 0:
                        case 11:
                        case 15:
                            Bo(8, t, t.return), Os(t);
                            break;
                        case 22:
                            4 & (n = t.stateNode)._visibility && (n._visibility &= -5, Os(t));
                            break;
                        default:
                            Os(t)
                    }
                    e = e.sibling
                }
            }

            function Ms(e, t) {
                for (; null !== ns;) {
                    var n = ns;
                    switch (n.tag) {
                        case 0:
                        case 11:
                        case 15:
                            Bo(8, n, t);
                            break;
                        case 23:
                        case 22:
                            if (null !== n.memoizedState && null !== n.memoizedState.cachePool) {
                                var r = n.memoizedState.cachePool.pool;
                                null != r && r.refCount++
                            }
                            break;
                        case 24:
                            Ba(n.memoizedState.cache)
                    }
                    if (null !== (r = n.child)) r.return = n, ns = r; else e:for (n = e; null !== ns;) {
                        var a = (r = ns).sibling, l = r.return;
                        if (ls(r), r === n) {
                            ns = null;
                            break e
                        }
                        if (null !== a) {
                            a.return = l, ns = a;
                            break e
                        }
                        ns = l
                    }
                }
            }

            function As(e, t, n, r) {
                this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
            }

            function Is(e, t, n, r) {
                return new As(e, t, n, r)
            }

            function js(e) {
                return !(!(e = e.prototype) || !e.isReactComponent)
            }

            function Ds(e, t) {
                var n = e.alternate;
                return null === n ? ((n = Is(e.tag, t, e.key, e.mode)).elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = 31457280 & e.flags, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = null === t ? null : {
                    lanes: t.lanes,
                    firstContext: t.firstContext
                }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n.refCleanup = e.refCleanup, n
            }

            function Rs(e, t) {
                e.flags &= 31457282;
                var n = e.alternate;
                return null === n ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = n.childLanes, e.lanes = n.lanes, e.child = n.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = n.memoizedProps, e.memoizedState = n.memoizedState, e.updateQueue = n.updateQueue, e.type = n.type, t = n.dependencies, e.dependencies = null === t ? null : {
                    lanes: t.lanes,
                    firstContext: t.firstContext
                }), e
            }

            function Fs(e, t, n, r, a, l) {
                var o = 0;
                if (r = e, "function" === typeof e) js(e) && (o = 1); else if ("string" === typeof e) o = function (e, t, n) {
                    if (1 === n || null != t.itemProp) return !1;
                    switch (e) {
                        case"meta":
                        case"title":
                            return !0;
                        case"style":
                            if ("string" !== typeof t.precedence || "string" !== typeof t.href || "" === t.href) break;
                            return !0;
                        case"link":
                            if ("string" !== typeof t.rel || "string" !== typeof t.href || "" === t.href || t.onLoad || t.onError) break;
                            return "stylesheet" !== t.rel || (e = t.disabled, "string" === typeof t.precedence && null == e);
                        case"script":
                            if (t.async && "function" !== typeof t.async && "symbol" !== typeof t.async && !t.onLoad && !t.onError && t.src && "string" === typeof t.src) return !0
                    }
                    return !1
                }(e, n, Y.current) ? 26 : "html" === e || "head" === e || "body" === e ? 27 : 5; else e:switch (e) {
                    case d:
                        return Vs(n.children, a, l, t);
                    case f:
                        o = 8, a |= 24;
                        break;
                    case p:
                        return (e = Is(12, n, t, 2 | a)).elementType = p, e.lanes = l, e;
                    case y:
                        return (e = Is(13, n, t, a)).elementType = y, e.lanes = l, e;
                    case b:
                        return (e = Is(19, n, t, a)).elementType = b, e.lanes = l, e;
                    case k:
                        return Bs(n, a, l, t);
                    default:
                        if ("object" === typeof e && null !== e) switch (e.$$typeof) {
                            case m:
                            case g:
                                o = 10;
                                break e;
                            case h:
                                o = 9;
                                break e;
                            case v:
                                o = 11;
                                break e;
                            case w:
                                o = 14;
                                break e;
                            case S:
                                o = 16, r = null;
                                break e
                        }
                        o = 29, n = Error(i(130, null === e ? "null" : typeof e, "")), r = null
                }
                return (t = Is(o, n, t, a)).elementType = e, t.type = r, t.lanes = l, t
            }

            function Vs(e, t, n, r) {
                return (e = Is(7, e, r, t)).lanes = n, e
            }

            function Bs(e, t, n, r) {
                (e = Is(22, e, r, t)).elementType = k, e.lanes = n;
                var a = {
                    _visibility: 1,
                    _pendingVisibility: 1,
                    _pendingMarkers: null,
                    _retryCache: null,
                    _transitions: null,
                    _current: null,
                    detach: function () {
                        var e = a._current;
                        if (null === e) throw Error(i(456));
                        if (0 === (2 & a._pendingVisibility)) {
                            var t = zr(e, 2);
                            null !== t && (a._pendingVisibility |= 2, Ou(t, e, 2))
                        }
                    },
                    attach: function () {
                        var e = a._current;
                        if (null === e) throw Error(i(456));
                        if (0 !== (2 & a._pendingVisibility)) {
                            var t = zr(e, 2);
                            null !== t && (a._pendingVisibility &= -3, Ou(t, e, 2))
                        }
                    }
                };
                return e.stateNode = a, e
            }

            function Hs(e, t, n) {
                return (e = Is(6, e, null, t)).lanes = n, e
            }

            function Gs(e, t, n) {
                return (t = Is(4, null !== e.children ? e.children : [], e.key, t)).lanes = n, t.stateNode = {
                    containerInfo: e.containerInfo,
                    pendingChildren: null,
                    implementation: e.implementation
                }, t
            }

            function Us(e) {
                e.flags |= 4
            }

            function qs(e, t) {
                if ("stylesheet" !== t.type || 0 !== (4 & t.state.loading)) e.flags &= -16777217; else if (e.flags |= 16777216, !zd(t)) {
                    if (null !== (t = Pa.current) && ((4194176 & ru) === ru ? null !== za : (62914560 & ru) !== ru && 0 === (536870912 & ru) || t !== za)) throw fa = sa, oa;
                    e.flags |= 8192
                }
            }

            function Ws(e, t) {
                null !== t && (e.flags |= 4), 16384 & e.flags && (t = 22 !== e.tag ? Ne() : 536870912, e.lanes |= t, hu |= t)
            }

            function $s(e, t) {
                if (!Xr) switch (e.tailMode) {
                    case"hidden":
                        t = e.tail;
                        for (var n = null; null !== t;) null !== t.alternate && (n = t), t = t.sibling;
                        null === n ? e.tail = null : n.sibling = null;
                        break;
                    case"collapsed":
                        n = e.tail;
                        for (var r = null; null !== n;) null !== n.alternate && (r = n), n = n.sibling;
                        null === r ? t || null === e.tail ? e.tail = null : e.tail.sibling = null : r.sibling = null
                }
            }

            function Qs(e) {
                var t = null !== e.alternate && e.alternate.child === e.child, n = 0, r = 0;
                if (t) for (var a = e.child; null !== a;) n |= a.lanes | a.childLanes, r |= 31457280 & a.subtreeFlags, r |= 31457280 & a.flags, a.return = e, a = a.sibling; else for (a = e.child; null !== a;) n |= a.lanes | a.childLanes, r |= a.subtreeFlags, r |= a.flags, a.return = e, a = a.sibling;
                return e.subtreeFlags |= r, e.childLanes = n, t
            }

            function Ys(e, t, n) {
                var r = t.pendingProps;
                switch ($r(t), t.tag) {
                    case 16:
                    case 15:
                    case 0:
                    case 11:
                    case 7:
                    case 8:
                    case 12:
                    case 9:
                    case 14:
                    case 1:
                        return Qs(t), null;
                    case 3:
                        return n = t.stateNode, r = null, null !== e && (r = e.memoizedState.cache), t.memoizedState.cache !== r && (t.flags |= 2048), bo(Fa), ee(), n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), null !== e && null !== e.child || (ra(t) ? Us(t) : null === e || e.memoizedState.isDehydrated && 0 === (256 & t.flags) || (t.flags |= 1024, null !== Kr && (Au(Kr), Kr = null))), Qs(t), null;
                    case 26:
                        return n = t.memoizedState, null === e ? (Us(t), null !== n ? (Qs(t), qs(t, n)) : (Qs(t), t.flags &= -16777217)) : n ? n !== e.memoizedState ? (Us(t), Qs(t), qs(t, n)) : (Qs(t), t.flags &= -16777217) : (e.memoizedProps !== r && Us(t), Qs(t), t.flags &= -16777217), null;
                    case 27:
                        ne(t), n = K.current;
                        var a = t.type;
                        if (null !== e && null != t.stateNode) e.memoizedProps !== r && Us(t); else {
                            if (!r) {
                                if (null === t.stateNode) throw Error(i(166));
                                return Qs(t), null
                            }
                            e = Y.current, ra(t) ? ta(t) : (e = ud(a, r, n), t.stateNode = e, Us(t))
                        }
                        return Qs(t), null;
                    case 5:
                        if (ne(t), n = t.type, null !== e && null != t.stateNode) e.memoizedProps !== r && Us(t); else {
                            if (!r) {
                                if (null === t.stateNode) throw Error(i(166));
                                return Qs(t), null
                            }
                            if (e = Y.current, ra(t)) ta(t); else {
                                switch (a = Yc(K.current), e) {
                                    case 1:
                                        e = a.createElementNS("http://www.w3.org/2000/svg", n);
                                        break;
                                    case 2:
                                        e = a.createElementNS("http://www.w3.org/1998/Math/MathML", n);
                                        break;
                                    default:
                                        switch (n) {
                                            case"svg":
                                                e = a.createElementNS("http://www.w3.org/2000/svg", n);
                                                break;
                                            case"math":
                                                e = a.createElementNS("http://www.w3.org/1998/Math/MathML", n);
                                                break;
                                            case"script":
                                                (e = a.createElement("div")).innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild);
                                                break;
                                            case"select":
                                                e = "string" === typeof r.is ? a.createElement("select", {is: r.is}) : a.createElement("select"), r.multiple ? e.multiple = !0 : r.size && (e.size = r.size);
                                                break;
                                            default:
                                                e = "string" === typeof r.is ? a.createElement(n, {is: r.is}) : a.createElement(n)
                                        }
                                }
                                e[Re] = t, e[Fe] = r;
                                e:for (a = t.child; null !== a;) {
                                    if (5 === a.tag || 6 === a.tag) e.appendChild(a.stateNode); else if (4 !== a.tag && 27 !== a.tag && null !== a.child) {
                                        a.child.return = a, a = a.child;
                                        continue
                                    }
                                    if (a === t) break e;
                                    for (; null === a.sibling;) {
                                        if (null === a.return || a.return === t) break e;
                                        a = a.return
                                    }
                                    a.sibling.return = a.return, a = a.sibling
                                }
                                t.stateNode = e;
                                e:switch (Wc(e, n, r), n) {
                                    case"button":
                                    case"input":
                                    case"select":
                                    case"textarea":
                                        e = !!r.autoFocus;
                                        break e;
                                    case"img":
                                        e = !0;
                                        break e;
                                    default:
                                        e = !1
                                }
                                e && Us(t)
                            }
                        }
                        return Qs(t), t.flags &= -16777217, null;
                    case 6:
                        if (e && null != t.stateNode) e.memoizedProps !== r && Us(t); else {
                            if ("string" !== typeof r && null === t.stateNode) throw Error(i(166));
                            if (e = K.current, ra(t)) {
                                if (e = t.stateNode, n = t.memoizedProps, r = null, null !== (a = Qr)) switch (a.tag) {
                                    case 27:
                                    case 5:
                                        r = a.memoizedProps
                                }
                                e[Re] = t, (e = !!(e.nodeValue === n || null !== r && !0 === r.suppressHydrationWarning || Hc(e.nodeValue, n))) || ea(t)
                            } else (e = Yc(e).createTextNode(r))[Re] = t, t.stateNode = e
                        }
                        return Qs(t), null;
                    case 13:
                        if (r = t.memoizedState, null === e || null !== e.memoizedState && null !== e.memoizedState.dehydrated) {
                            if (a = ra(t), null !== r && null !== r.dehydrated) {
                                if (null === e) {
                                    if (!a) throw Error(i(318));
                                    if (!(a = null !== (a = t.memoizedState) ? a.dehydrated : null)) throw Error(i(317));
                                    a[Re] = t
                                } else aa(), 0 === (128 & t.flags) && (t.memoizedState = null), t.flags |= 4;
                                Qs(t), a = !1
                            } else null !== Kr && (Au(Kr), Kr = null), a = !0;
                            if (!a) return 256 & t.flags ? (Ma(t), t) : (Ma(t), null)
                        }
                        if (Ma(t), 0 !== (128 & t.flags)) return t.lanes = n, t;
                        if (n = null !== r, e = null !== e && null !== e.memoizedState, n) {
                            a = null, null !== (r = t.child).alternate && null !== r.alternate.memoizedState && null !== r.alternate.memoizedState.cachePool && (a = r.alternate.memoizedState.cachePool.pool);
                            var l = null;
                            null !== r.memoizedState && null !== r.memoizedState.cachePool && (l = r.memoizedState.cachePool.pool), l !== a && (r.flags |= 2048)
                        }
                        return n !== e && n && (t.child.flags |= 8192), Ws(t, t.updateQueue), Qs(t), null;
                    case 4:
                        return ee(), null === e && Oc(t.stateNode.containerInfo), Qs(t), null;
                    case 10:
                        return bo(t.type), Qs(t), null;
                    case 19:
                        if ($(Aa), null === (a = t.memoizedState)) return Qs(t), null;
                        if (r = 0 !== (128 & t.flags), null === (l = a.rendering)) if (r) $s(a, !1); else {
                            if (0 !== cu || null !== e && 0 !== (128 & e.flags)) for (e = t.child; null !== e;) {
                                if (null !== (l = Ia(e))) {
                                    for (t.flags |= 128, $s(a, !1), e = l.updateQueue, t.updateQueue = e, Ws(t, e), t.subtreeFlags = 0, e = n, n = t.child; null !== n;) Rs(n, e), n = n.sibling;
                                    return Q(Aa, 1 & Aa.current | 2), t.child
                                }
                                e = e.sibling
                            }
                            null !== a.tail && se() > wu && (t.flags |= 128, r = !0, $s(a, !1), t.lanes = 4194304)
                        } else {
                            if (!r) if (null !== (e = Ia(l))) {
                                if (t.flags |= 128, r = !0, e = e.updateQueue, t.updateQueue = e, Ws(t, e), $s(a, !0), null === a.tail && "hidden" === a.tailMode && !l.alternate && !Xr) return Qs(t), null
                            } else 2 * se() - a.renderingStartTime > wu && 536870912 !== n && (t.flags |= 128, r = !0, $s(a, !1), t.lanes = 4194304);
                            a.isBackwards ? (l.sibling = t.child, t.child = l) : (null !== (e = a.last) ? e.sibling = l : t.child = l, a.last = l)
                        }
                        return null !== a.tail ? (t = a.tail, a.rendering = t, a.tail = t.sibling, a.renderingStartTime = se(), t.sibling = null, e = Aa.current, Q(Aa, r ? 1 & e | 2 : 1 & e), t) : (Qs(t), null);
                    case 22:
                    case 23:
                        return Ma(t), Ca(), r = null !== t.memoizedState, null !== e ? null !== e.memoizedState !== r && (t.flags |= 8192) : r && (t.flags |= 8192), r ? 0 !== (536870912 & n) && 0 === (128 & t.flags) && (Qs(t), 6 & t.subtreeFlags && (t.flags |= 8192)) : Qs(t), null !== (n = t.updateQueue) && Ws(t, n.retryQueue), n = null, null !== e && null !== e.memoizedState && null !== e.memoizedState.cachePool && (n = e.memoizedState.cachePool.pool), r = null, null !== t.memoizedState && null !== t.memoizedState.cachePool && (r = t.memoizedState.cachePool.pool), r !== n && (t.flags |= 2048), null !== e && $(Qa), null;
                    case 24:
                        return n = null, null !== e && (n = e.memoizedState.cache), t.memoizedState.cache !== n && (t.flags |= 2048), bo(Fa), Qs(t), null;
                    case 25:
                        return null
                }
                throw Error(i(156, t.tag))
            }

            function Xs(e, t) {
                switch ($r(t), t.tag) {
                    case 1:
                        return 65536 & (e = t.flags) ? (t.flags = -65537 & e | 128, t) : null;
                    case 3:
                        return bo(Fa), ee(), 0 !== (65536 & (e = t.flags)) && 0 === (128 & e) ? (t.flags = -65537 & e | 128, t) : null;
                    case 26:
                    case 27:
                    case 5:
                        return ne(t), null;
                    case 13:
                        if (Ma(t), null !== (e = t.memoizedState) && null !== e.dehydrated) {
                            if (null === t.alternate) throw Error(i(340));
                            aa()
                        }
                        return 65536 & (e = t.flags) ? (t.flags = -65537 & e | 128, t) : null;
                    case 19:
                        return $(Aa), null;
                    case 4:
                        return ee(), null;
                    case 10:
                        return bo(t.type), null;
                    case 22:
                    case 23:
                        return Ma(t), Ca(), null !== e && $(Qa), 65536 & (e = t.flags) ? (t.flags = -65537 & e | 128, t) : null;
                    case 24:
                        return bo(Fa), null;
                    default:
                        return null
                }
            }

            function Ks(e, t) {
                switch ($r(t), t.tag) {
                    case 3:
                        bo(Fa), ee();
                        break;
                    case 26:
                    case 27:
                    case 5:
                        ne(t);
                        break;
                    case 4:
                        ee();
                        break;
                    case 13:
                        Ma(t);
                        break;
                    case 19:
                        $(Aa);
                        break;
                    case 10:
                        bo(t.type);
                        break;
                    case 22:
                    case 23:
                        Ma(t), Ca(), null !== e && $(Qa);
                        break;
                    case 24:
                        bo(Fa)
                }
            }

            var Zs = {
                    getCacheForType: function (e) {
                        var t = _o(Fa), n = t.data.get(e);
                        return void 0 === n && (n = e(), t.data.set(e, n)), n
                    }
                }, Js = "function" === typeof WeakMap ? WeakMap : Map, eu = 0, tu = null, nu = null, ru = 0, au = 0,
                lu = null, iu = !1, ou = !1, su = !1, uu = 0, cu = 0, du = 0, fu = 0, pu = 0, mu = 0, hu = 0, gu = null,
                vu = null, yu = !1, bu = 0, wu = 1 / 0, Su = null, ku = null, xu = !1, Eu = null, _u = 0, Tu = 0,
                Cu = null, Pu = 0, zu = null;

            function Nu() {
                if (0 !== (2 & eu) && 0 !== ru) return ru & -ru;
                if (null !== N.T) {
                    return 0 !== Ua ? Ua : Sc()
                }
                return je()
            }

            function Lu() {
                0 === mu && (mu = 0 === (536870912 & ru) || Xr ? ze() : 536870912);
                var e = Pa.current;
                return null !== e && (e.flags |= 32), mu
            }

            function Ou(e, t, n) {
                (e === tu && 2 === au || null !== e.cancelPendingCommit) && (Vu(e, 0), Du(e, ru, mu, !1)), Oe(e, n), 0 !== (2 & eu) && e === tu || (e === tu && (0 === (2 & eu) && (fu |= n), 4 === cu && Du(e, ru, mu, !1)), hc(e))
            }

            function Mu(e, t, n) {
                if (0 !== (6 & eu)) throw Error(i(327));
                for (var r = !n && 0 === (60 & t) && 0 === (t & e.expiredLanes) || Ce(e, t), a = r ? function (e, t) {
                    var n = eu;
                    eu |= 2;
                    var r = Hu(), a = Gu();
                    tu !== e || ru !== t ? (Su = null, wu = se() + 500, Vu(e, t)) : ou = Ce(e, t);
                    e:for (; ;) try {
                        if (0 !== au && null !== nu) {
                            t = nu;
                            var l = lu;
                            t:switch (au) {
                                case 1:
                                    au = 0, lu = null, Xu(e, t, l, 1);
                                    break;
                                case 2:
                                    if (ua(l)) {
                                        au = 0, lu = null, Yu(t);
                                        break
                                    }
                                    t = function () {
                                        2 === au && tu === e && (au = 7), hc(e)
                                    }, l.then(t, t);
                                    break e;
                                case 3:
                                    au = 7;
                                    break e;
                                case 4:
                                    au = 5;
                                    break e;
                                case 7:
                                    ua(l) ? (au = 0, lu = null, Yu(t)) : (au = 0, lu = null, Xu(e, t, l, 7));
                                    break;
                                case 5:
                                    var o = null;
                                    switch (nu.tag) {
                                        case 26:
                                            o = nu.memoizedState;
                                        case 5:
                                        case 27:
                                            var s = nu;
                                            if (!o || zd(o)) {
                                                au = 0, lu = null;
                                                var u = s.sibling;
                                                if (null !== u) nu = u; else {
                                                    var c = s.return;
                                                    null !== c ? (nu = c, Ku(c)) : nu = null
                                                }
                                                break t
                                            }
                                    }
                                    au = 0, lu = null, Xu(e, t, l, 5);
                                    break;
                                case 6:
                                    au = 0, lu = null, Xu(e, t, l, 6);
                                    break;
                                case 8:
                                    Fu(), cu = 6;
                                    break e;
                                default:
                                    throw Error(i(462))
                            }
                        }
                        $u();
                        break
                    } catch (d) {
                        Bu(e, d)
                    }
                    return vo = go = null, N.H = r, N.A = a, eu = n, null !== nu ? 0 : (tu = null, ru = 0, Tr(), cu)
                }(e, t) : qu(e, t, !0), l = r; ;) {
                    if (0 === a) {
                        ou && !r && Du(e, t, 0, !1);
                        break
                    }
                    if (6 === a) Du(e, t, 0, !iu); else {
                        if (n = e.current.alternate, l && !ju(n)) {
                            a = qu(e, t, !1), l = !1;
                            continue
                        }
                        if (2 === a) {
                            if (l = t, e.errorRecoveryDisabledLanes & l) var o = 0; else o = 0 !== (o = -536870913 & e.pendingLanes) ? o : 536870912 & o ? 536870912 : 0;
                            if (0 !== o) {
                                t = o;
                                e:{
                                    var s = e;
                                    a = gu;
                                    var u = s.current.memoizedState.isDehydrated;
                                    if (u && (Vu(s, o).flags |= 256), 2 !== (o = qu(s, o, !1))) {
                                        if (su && !u) {
                                            s.errorRecoveryDisabledLanes |= l, fu |= l, a = 4;
                                            break e
                                        }
                                        l = vu, vu = a, null !== l && Au(l)
                                    }
                                    a = o
                                }
                                if (l = !1, 2 !== a) continue
                            }
                        }
                        if (1 === a) {
                            Vu(e, 0), Du(e, t, 0, !0);
                            break
                        }
                        e:{
                            switch (r = e, a) {
                                case 0:
                                case 1:
                                    throw Error(i(345));
                                case 4:
                                    if ((4194176 & t) === t) {
                                        Du(r, t, mu, !iu);
                                        break e
                                    }
                                    break;
                                case 2:
                                    vu = null;
                                    break;
                                case 3:
                                case 5:
                                    break;
                                default:
                                    throw Error(i(329))
                            }
                            if (r.finishedWork = n, r.finishedLanes = t, (62914560 & t) === t && 10 < (l = bu + 300 - se())) {
                                if (Du(r, t, mu, !iu), 0 !== Te(r, 0)) break e;
                                r.timeoutHandle = ed(Iu.bind(null, r, n, vu, Su, yu, t, mu, fu, hu, iu, 2, -0, 0), l)
                            } else Iu(r, n, vu, Su, yu, t, mu, fu, hu, iu, 0, -0, 0)
                        }
                    }
                    break
                }
                hc(e)
            }

            function Au(e) {
                null === vu ? vu = e : vu.push.apply(vu, e)
            }

            function Iu(e, t, n, r, a, l, o, s, u, c, d, f, p) {
                var m = t.subtreeFlags;
                if ((8192 & m || 16785408 === (16785408 & m)) && (Nd = {
                    stylesheets: null,
                    count: 0,
                    unsuspend: Ld
                }, Ps(t), null !== (t = function () {
                    if (null === Nd) throw Error(i(475));
                    var e = Nd;
                    return e.stylesheets && 0 === e.count && Ad(e, e.stylesheets), 0 < e.count ? function (t) {
                        var n = setTimeout((function () {
                            if (e.stylesheets && Ad(e, e.stylesheets), e.unsuspend) {
                                var t = e.unsuspend;
                                e.unsuspend = null, t()
                            }
                        }), 6e4);
                        return e.unsuspend = t, function () {
                            e.unsuspend = null, clearTimeout(n)
                        }
                    } : null
                }()))) return e.cancelPendingCommit = t(Ju.bind(null, e, n, r, a, o, s, u, 1, f, p)), void Du(e, l, o, !c);
                Ju(e, n, r, a, o, s, u, d, f, p)
            }

            function ju(e) {
                for (var t = e; ;) {
                    var n = t.tag;
                    if ((0 === n || 11 === n || 15 === n) && 16384 & t.flags && (null !== (n = t.updateQueue) && null !== (n = n.stores))) for (var r = 0; r < n.length; r++) {
                        var a = n[r], l = a.getSnapshot;
                        a = a.value;
                        try {
                            if (!Qn(l(), a)) return !1
                        } catch (i) {
                            return !1
                        }
                    }
                    if (n = t.child, 16384 & t.subtreeFlags && null !== n) n.return = t, t = n; else {
                        if (t === e) break;
                        for (; null === t.sibling;) {
                            if (null === t.return || t.return === e) return !0;
                            t = t.return
                        }
                        t.sibling.return = t.return, t = t.sibling
                    }
                }
                return !0
            }

            function Du(e, t, n, r) {
                t &= ~pu, t &= ~fu, e.suspendedLanes |= t, e.pingedLanes &= ~t, r && (e.warmLanes |= t), r = e.expirationTimes;
                for (var a = t; 0 < a;) {
                    var l = 31 - we(a), i = 1 << l;
                    r[l] = -1, a &= ~i
                }
                0 !== n && Me(e, n, t)
            }

            function Ru() {
                return 0 !== (6 & eu) || (gc(0, !1), !1)
            }

            function Fu() {
                if (null !== nu) {
                    if (0 === au) var e = nu.return; else vo = go = null, vl(e = nu), ma = null, ha = 0, e = nu;
                    for (; null !== e;) Ks(e.alternate, e), e = e.return;
                    nu = null
                }
            }

            function Vu(e, t) {
                e.finishedWork = null, e.finishedLanes = 0;
                var n = e.timeoutHandle;
                -1 !== n && (e.timeoutHandle = -1, td(n)), null !== (n = e.cancelPendingCommit) && (e.cancelPendingCommit = null, n()), Fu(), tu = e, nu = n = Ds(e.current, null), ru = t, au = 0, lu = null, iu = !1, ou = Ce(e, t), su = !1, hu = mu = pu = fu = du = cu = 0, vu = gu = null, yu = !1, 0 !== (8 & t) && (t |= 32 & t);
                var r = e.entangledLanes;
                if (0 !== r) for (e = e.entanglements, r &= t; 0 < r;) {
                    var a = 31 - we(r), l = 1 << a;
                    t |= e[a], r &= ~l
                }
                return uu = t, Tr(), n
            }

            function Bu(e, t) {
                Ja = null, N.H = Ei, t === ia ? (t = pa(), au = 3) : t === oa ? (t = pa(), au = 4) : au = t === Hi ? 8 : null !== t && "object" === typeof t && "function" === typeof t.then ? 6 : 1, lu = t, null === nu && (cu = 1, Di(e, Ar(t, e.current)))
            }

            function Hu() {
                var e = N.H;
                return N.H = Ei, null === e ? Ei : e
            }

            function Gu() {
                var e = N.A;
                return N.A = Zs, e
            }

            function Uu() {
                cu = 4, iu || (4194176 & ru) !== ru && null !== Pa.current || (ou = !0), 0 === (134217727 & du) && 0 === (134217727 & fu) || null === tu || Du(tu, ru, mu, !1)
            }

            function qu(e, t, n) {
                var r = eu;
                eu |= 2;
                var a = Hu(), l = Gu();
                tu === e && ru === t || (Su = null, Vu(e, t)), t = !1;
                var i = cu;
                e:for (; ;) try {
                    if (0 !== au && null !== nu) {
                        var o = nu, s = lu;
                        switch (au) {
                            case 8:
                                Fu(), i = 6;
                                break e;
                            case 3:
                            case 2:
                            case 6:
                                null === Pa.current && (t = !0);
                                var u = au;
                                if (au = 0, lu = null, Xu(e, o, s, u), n && ou) {
                                    i = 0;
                                    break e
                                }
                                break;
                            default:
                                u = au, au = 0, lu = null, Xu(e, o, s, u)
                        }
                    }
                    Wu(), i = cu;
                    break
                } catch (c) {
                    Bu(e, c)
                }
                return t && e.shellSuspendCounter++, vo = go = null, eu = r, N.H = a, N.A = l, null === nu && (tu = null, ru = 0, Tr()), i
            }

            function Wu() {
                for (; null !== nu;) Qu(nu)
            }

            function $u() {
                for (; null !== nu && !ie();) Qu(nu)
            }

            function Qu(e) {
                var t = mo(e.alternate, e, uu);
                e.memoizedProps = e.pendingProps, null === t ? Ku(e) : nu = t
            }

            function Yu(e) {
                var t = e, n = t.alternate;
                switch (t.tag) {
                    case 15:
                    case 0:
                        t = Zi(n, t, t.pendingProps, t.type, void 0, ru);
                        break;
                    case 11:
                        t = Zi(n, t, t.pendingProps, t.type.render, t.ref, ru);
                        break;
                    case 5:
                        vl(t);
                    default:
                        Ks(n, t), t = mo(n, t = nu = Rs(t, uu), uu)
                }
                e.memoizedProps = e.pendingProps, null === t ? Ku(e) : nu = t
            }

            function Xu(e, t, n, r) {
                vo = go = null, vl(t), ma = null, ha = 0;
                var a = t.return;
                try {
                    if (function (e, t, n, r, a) {
                        if (n.flags |= 32768, null !== r && "object" === typeof r && "function" === typeof r.then) {
                            if (null !== (t = n.alternate) && ko(t, n, a, !0), null !== (n = Pa.current)) {
                                switch (n.tag) {
                                    case 13:
                                        return null === za ? Uu() : null === n.alternate && 0 === cu && (cu = 3), n.flags &= -257, n.flags |= 65536, n.lanes = a, r === sa ? n.flags |= 16384 : (null === (t = n.updateQueue) ? n.updateQueue = new Set([r]) : t.add(r), ac(e, r, a)), !1;
                                    case 22:
                                        return n.flags |= 65536, r === sa ? n.flags |= 16384 : (null === (t = n.updateQueue) ? (t = {
                                            transitions: null,
                                            markerInstances: null,
                                            retryQueue: new Set([r])
                                        }, n.updateQueue = t) : null === (n = t.retryQueue) ? t.retryQueue = new Set([r]) : n.add(r), ac(e, r, a)), !1
                                }
                                throw Error(i(435, n.tag))
                            }
                            return ac(e, r, a), Uu(), !1
                        }
                        if (Xr) return null !== (t = Pa.current) ? (0 === (65536 & t.flags) && (t.flags |= 256), t.flags |= 65536, t.lanes = a, r !== Jr && la(Ar(e = Error(i(422), {cause: r}), n))) : (r !== Jr && la(Ar(t = Error(i(423), {cause: r}), n)), (e = e.current.alternate).flags |= 65536, a &= -a, e.lanes |= a, r = Ar(r, n), Ao(e, a = Fi(e.stateNode, r, a)), 4 !== cu && (cu = 2)), !1;
                        var l = Error(i(520), {cause: r});
                        if (l = Ar(l, n), null === gu ? gu = [l] : gu.push(l), 4 !== cu && (cu = 2), null === t) return !0;
                        r = Ar(r, n), n = t;
                        do {
                            switch (n.tag) {
                                case 3:
                                    return n.flags |= 65536, e = a & -a, n.lanes |= e, Ao(n, e = Fi(n.stateNode, r, e)), !1;
                                case 1:
                                    if (t = n.type, l = n.stateNode, 0 === (128 & n.flags) && ("function" === typeof t.getDerivedStateFromError || null !== l && "function" === typeof l.componentDidCatch && (null === ku || !ku.has(l)))) return n.flags |= 65536, a &= -a, n.lanes |= a, Bi(a = Vi(a), e, n, r), Ao(n, a), !1
                            }
                            n = n.return
                        } while (null !== n);
                        return !1
                    }(e, a, t, n, ru)) return cu = 1, Di(e, Ar(n, e.current)), void (nu = null)
                } catch (l) {
                    if (null !== a) throw nu = a, l;
                    return cu = 1, Di(e, Ar(n, e.current)), void (nu = null)
                }
                32768 & t.flags ? (Xr || 1 === r ? e = !0 : ou || 0 !== (536870912 & ru) ? e = !1 : (iu = e = !0, (2 === r || 3 === r || 6 === r) && (null !== (r = Pa.current) && 13 === r.tag && (r.flags |= 16384))), Zu(t, e)) : Ku(t)
            }

            function Ku(e) {
                var t = e;
                do {
                    if (0 !== (32768 & t.flags)) return void Zu(t, iu);
                    e = t.return;
                    var n = Ys(t.alternate, t, uu);
                    if (null !== n) return void (nu = n);
                    if (null !== (t = t.sibling)) return void (nu = t);
                    nu = t = e
                } while (null !== t);
                0 === cu && (cu = 5)
            }

            function Zu(e, t) {
                do {
                    var n = Xs(e.alternate, e);
                    if (null !== n) return n.flags &= 32767, void (nu = n);
                    if (null !== (n = e.return) && (n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null), !t && null !== (e = e.sibling)) return void (nu = e);
                    nu = e = n
                } while (null !== e);
                cu = 6, nu = null
            }

            function Ju(e, t, n, r, a, l, o, s, u, c) {
                var d = N.T, f = H.p;
                try {
                    H.p = 2, N.T = null, function (e, t, n, r, a, l, o, s) {
                        do {
                            tc()
                        } while (null !== Eu);
                        if (0 !== (6 & eu)) throw Error(i(327));
                        var u = e.finishedWork;
                        if (r = e.finishedLanes, null === u) return null;
                        if (e.finishedWork = null, e.finishedLanes = 0, u === e.current) throw Error(i(177));
                        e.callbackNode = null, e.callbackPriority = 0, e.cancelPendingCommit = null;
                        var c = u.lanes | u.childLanes;
                        if (function (e, t, n, r, a, l) {
                            var i = e.pendingLanes;
                            e.pendingLanes = n, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= n, e.entangledLanes &= n, e.errorRecoveryDisabledLanes &= n, e.shellSuspendCounter = 0;
                            var o = e.entanglements, s = e.expirationTimes, u = e.hiddenUpdates;
                            for (n = i & ~n; 0 < n;) {
                                var c = 31 - we(n), d = 1 << c;
                                o[c] = 0, s[c] = -1;
                                var f = u[c];
                                if (null !== f) for (u[c] = null, c = 0; c < f.length; c++) {
                                    var p = f[c];
                                    null !== p && (p.lane &= -536870913)
                                }
                                n &= ~d
                            }
                            0 !== r && Me(e, r, 0), 0 !== l && 0 === a && 0 !== e.tag && (e.suspendedLanes |= l & ~(i & ~t))
                        }(e, r, c |= _r, l, o, s), e === tu && (nu = tu = null, ru = 0), 0 === (10256 & u.subtreeFlags) && 0 === (10256 & u.flags) || xu || (xu = !0, Tu = c, Cu = n, function (e, t) {
                            ae(e, t)
                        }(fe, (function () {
                            return tc(), null
                        }))), n = 0 !== (15990 & u.flags), 0 !== (15990 & u.subtreeFlags) || n ? (n = N.T, N.T = null, l = H.p, H.p = 2, o = eu, eu |= 4, function (e, t) {
                            if (e = e.containerInfo, $c = Ud, er(e = Jn(e))) {
                                if ("selectionStart" in e) var n = {
                                    start: e.selectionStart,
                                    end: e.selectionEnd
                                }; else e:{
                                    var r = (n = (n = e.ownerDocument) && n.defaultView || window).getSelection && n.getSelection();
                                    if (r && 0 !== r.rangeCount) {
                                        n = r.anchorNode;
                                        var a = r.anchorOffset, l = r.focusNode;
                                        r = r.focusOffset;
                                        try {
                                            n.nodeType, l.nodeType
                                        } catch (g) {
                                            n = null;
                                            break e
                                        }
                                        var o = 0, s = -1, u = -1, c = 0, d = 0, f = e, p = null;
                                        t:for (; ;) {
                                            for (var m; f !== n || 0 !== a && 3 !== f.nodeType || (s = o + a), f !== l || 0 !== r && 3 !== f.nodeType || (u = o + r), 3 === f.nodeType && (o += f.nodeValue.length), null !== (m = f.firstChild);) p = f, f = m;
                                            for (; ;) {
                                                if (f === e) break t;
                                                if (p === n && ++c === a && (s = o), p === l && ++d === r && (u = o), null !== (m = f.nextSibling)) break;
                                                p = (f = p).parentNode
                                            }
                                            f = m
                                        }
                                        n = -1 === s || -1 === u ? null : {start: s, end: u}
                                    } else n = null
                                }
                                n = n || {start: 0, end: 0}
                            } else n = null;
                            for (Qc = {
                                focusedElem: e,
                                selectionRange: n
                            }, Ud = !1, ns = t; null !== ns;) if (e = (t = ns).child, 0 !== (1028 & t.subtreeFlags) && null !== e) e.return = t, ns = e; else for (; null !== ns;) {
                                switch (l = (t = ns).alternate, e = t.flags, t.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                    case 5:
                                    case 26:
                                    case 27:
                                    case 6:
                                    case 4:
                                    case 17:
                                        break;
                                    case 1:
                                        if (0 !== (1024 & e) && null !== l) {
                                            e = void 0, n = t, a = l.memoizedProps, l = l.memoizedState, r = n.stateNode;
                                            try {
                                                var h = Oi(n.type, a, (n.elementType, n.type));
                                                e = r.getSnapshotBeforeUpdate(h, l), r.__reactInternalSnapshotBeforeUpdate = e
                                            } catch (v) {
                                                rc(n, n.return, v)
                                            }
                                        }
                                        break;
                                    case 3:
                                        if (0 !== (1024 & e)) if (9 === (n = (e = t.stateNode.containerInfo).nodeType)) id(e); else if (1 === n) switch (e.nodeName) {
                                            case"HEAD":
                                            case"HTML":
                                            case"BODY":
                                                id(e);
                                                break;
                                            default:
                                                e.textContent = ""
                                        }
                                        break;
                                    default:
                                        if (0 !== (1024 & e)) throw Error(i(163))
                                }
                                if (null !== (e = t.sibling)) {
                                    e.return = t.return, ns = e;
                                    break
                                }
                                ns = t.return
                            }
                            h = rs, rs = !1
                        }(e, u), ms(u, e), tr(Qc, e.containerInfo), Ud = !!$c, Qc = $c = null, e.current = u, as(e, u.alternate, u), oe(), eu = o, H.p = l, N.T = n) : e.current = u, xu ? (xu = !1, Eu = e, _u = r) : ec(e, c), c = e.pendingLanes, 0 === c && (ku = null), function (e) {
                            if (ye && "function" === typeof ye.onCommitFiberRoot) try {
                                ye.onCommitFiberRoot(ve, e, void 0, 128 === (128 & e.current.flags))
                            } catch (t) {
                            }
                        }(u.stateNode), hc(e), null !== t) for (a = e.onRecoverableError, u = 0; u < t.length; u++) c = t[u], a(c.value, {componentStack: c.stack});
                        0 !== (3 & _u) && tc(), c = e.pendingLanes, 0 !== (4194218 & r) && 0 !== (42 & c) ? e === zu ? Pu++ : (Pu = 0, zu = e) : Pu = 0, gc(0, !1)
                    }(e, t, n, r, f, a, l, o)
                } finally {
                    N.T = d, H.p = f
                }
            }

            function ec(e, t) {
                0 === (e.pooledCacheLanes &= t) && (null != (t = e.pooledCache) && (e.pooledCache = null, Ba(t)))
            }

            function tc() {
                if (null !== Eu) {
                    var e = Eu, t = Tu;
                    Tu = 0;
                    var n = Ie(_u), r = N.T, a = H.p;
                    try {
                        if (H.p = 32 > n ? 32 : n, N.T = null, null === Eu) var l = !1; else {
                            n = Cu, Cu = null;
                            var o = Eu, s = _u;
                            if (Eu = null, _u = 0, 0 !== (6 & eu)) throw Error(i(331));
                            var u = eu;
                            if (eu |= 4, Ls(o.current), xs(o, o.current, s, n), eu = u, gc(0, !1), ye && "function" === typeof ye.onPostCommitFiberRoot) try {
                                ye.onPostCommitFiberRoot(ve, o)
                            } catch (c) {
                            }
                            l = !0
                        }
                        return l
                    } finally {
                        H.p = a, N.T = r, ec(e, t)
                    }
                }
                return !1
            }

            function nc(e, t, n) {
                t = Ar(n, t), null !== (e = Oo(e, t = Fi(e.stateNode, t, 2), 2)) && (Oe(e, 2), hc(e))
            }

            function rc(e, t, n) {
                if (3 === e.tag) nc(e, e, n); else for (; null !== t;) {
                    if (3 === t.tag) {
                        nc(t, e, n);
                        break
                    }
                    if (1 === t.tag) {
                        var r = t.stateNode;
                        if ("function" === typeof t.type.getDerivedStateFromError || "function" === typeof r.componentDidCatch && (null === ku || !ku.has(r))) {
                            e = Ar(n, e), null !== (r = Oo(t, n = Vi(2), 2)) && (Bi(n, r, t, e), Oe(r, 2), hc(r));
                            break
                        }
                    }
                    t = t.return
                }
            }

            function ac(e, t, n) {
                var r = e.pingCache;
                if (null === r) {
                    r = e.pingCache = new Js;
                    var a = new Set;
                    r.set(t, a)
                } else void 0 === (a = r.get(t)) && (a = new Set, r.set(t, a));
                a.has(n) || (su = !0, a.add(n), e = lc.bind(null, e, t, n), t.then(e, e))
            }

            function lc(e, t, n) {
                var r = e.pingCache;
                null !== r && r.delete(t), e.pingedLanes |= e.suspendedLanes & n, e.warmLanes &= ~n, tu === e && (ru & n) === n && (4 === cu || 3 === cu && (62914560 & ru) === ru && 300 > se() - bu ? 0 === (2 & eu) && Vu(e, 0) : pu |= n, hu === ru && (hu = 0)), hc(e)
            }

            function ic(e, t) {
                0 === t && (t = Ne()), null !== (e = zr(e, t)) && (Oe(e, t), hc(e))
            }

            function oc(e) {
                var t = e.memoizedState, n = 0;
                null !== t && (n = t.retryLane), ic(e, n)
            }

            function sc(e, t) {
                var n = 0;
                switch (e.tag) {
                    case 13:
                        var r = e.stateNode, a = e.memoizedState;
                        null !== a && (n = a.retryLane);
                        break;
                    case 19:
                        r = e.stateNode;
                        break;
                    case 22:
                        r = e.stateNode._retryCache;
                        break;
                    default:
                        throw Error(i(314))
                }
                null !== r && r.delete(t), ic(e, n)
            }

            var uc = null, cc = null, dc = !1, fc = !1, pc = !1, mc = 0;

            function hc(e) {
                var t;
                e !== cc && null === e.next && (null === cc ? uc = cc = e : cc = cc.next = e), fc = !0, dc || (dc = !0, t = vc, rd((function () {
                    0 !== (6 & eu) ? ae(ce, t) : t()
                })))
            }

            function gc(e, t) {
                if (!pc && fc) {
                    pc = !0;
                    do {
                        for (var n = !1, r = uc; null !== r;) {
                            if (!t) if (0 !== e) {
                                var a = r.pendingLanes;
                                if (0 === a) var l = 0; else {
                                    var i = r.suspendedLanes, o = r.pingedLanes;
                                    l = (1 << 31 - we(42 | e) + 1) - 1, l = 201326677 & (l &= a & ~(i & ~o)) ? 201326677 & l | 1 : l ? 2 | l : 0
                                }
                                0 !== l && (n = !0, wc(r, l))
                            } else l = ru, 0 === (3 & (l = Te(r, r === tu ? l : 0))) || Ce(r, l) || (n = !0, wc(r, l));
                            r = r.next
                        }
                    } while (n);
                    pc = !1
                }
            }

            function vc() {
                fc = dc = !1;
                var e = 0;
                0 !== mc && (function () {
                    var e = window.event;
                    if (e && "popstate" === e.type) return e !== Jc && (Jc = e, !0);
                    return Jc = null, !1
                }() && (e = mc), mc = 0);
                for (var t = se(), n = null, r = uc; null !== r;) {
                    var a = r.next, l = yc(r, t);
                    0 === l ? (r.next = null, null === n ? uc = a : n.next = a, null === a && (cc = n)) : (n = r, (0 !== e || 0 !== (3 & l)) && (fc = !0)), r = a
                }
                gc(e, !1)
            }

            function yc(e, t) {
                for (var n = e.suspendedLanes, r = e.pingedLanes, a = e.expirationTimes, l = -62914561 & e.pendingLanes; 0 < l;) {
                    var i = 31 - we(l), o = 1 << i, s = a[i];
                    -1 === s ? 0 !== (o & n) && 0 === (o & r) || (a[i] = Pe(o, t)) : s <= t && (e.expiredLanes |= o), l &= ~o
                }
                if (n = ru, n = Te(e, e === (t = tu) ? n : 0), r = e.callbackNode, 0 === n || e === t && 2 === au || null !== e.cancelPendingCommit) return null !== r && null !== r && le(r), e.callbackNode = null, e.callbackPriority = 0;
                if (0 === (3 & n) || Ce(e, n)) {
                    if ((t = n & -n) === e.callbackPriority) return t;
                    switch (null !== r && le(r), Ie(n)) {
                        case 2:
                        case 8:
                            n = de;
                            break;
                        case 32:
                        default:
                            n = fe;
                            break;
                        case 268435456:
                            n = me
                    }
                    return r = bc.bind(null, e), n = ae(n, r), e.callbackPriority = t, e.callbackNode = n, t
                }
                return null !== r && null !== r && le(r), e.callbackPriority = 2, e.callbackNode = null, 2
            }

            function bc(e, t) {
                var n = e.callbackNode;
                if (tc() && e.callbackNode !== n) return null;
                var r = ru;
                return 0 === (r = Te(e, e === tu ? r : 0)) ? null : (Mu(e, r, t), yc(e, se()), null != e.callbackNode && e.callbackNode === n ? bc.bind(null, e) : null)
            }

            function wc(e, t) {
                if (tc()) return null;
                Mu(e, t, !0)
            }

            function Sc() {
                return 0 === mc && (mc = ze()), mc
            }

            function kc(e) {
                return null == e || "symbol" === typeof e || "boolean" === typeof e ? null : "function" === typeof e ? e : zt("" + e)
            }

            function xc(e, t) {
                var n = t.ownerDocument.createElement("input");
                return n.name = t.name, n.value = t.value, e.id && n.setAttribute("form", e.id), t.parentNode.insertBefore(n, t), e = new FormData(e), n.parentNode.removeChild(n), e
            }

            for (var Ec = 0; Ec < Sr.length; Ec++) {
                var _c = Sr[Ec];
                kr(_c.toLowerCase(), "on" + (_c[0].toUpperCase() + _c.slice(1)))
            }
            kr(pr, "onAnimationEnd"), kr(mr, "onAnimationIteration"), kr(hr, "onAnimationStart"), kr("dblclick", "onDoubleClick"), kr("focusin", "onFocus"), kr("focusout", "onBlur"), kr(gr, "onTransitionRun"), kr(vr, "onTransitionStart"), kr(yr, "onTransitionCancel"), kr(br, "onTransitionEnd"), tt("onMouseEnter", ["mouseout", "mouseover"]), tt("onMouseLeave", ["mouseout", "mouseover"]), tt("onPointerEnter", ["pointerout", "pointerover"]), tt("onPointerLeave", ["pointerout", "pointerover"]), et("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), et("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), et("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), et("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), et("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), et("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
            var Tc = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
                Cc = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Tc));

            function Pc(e, t) {
                t = 0 !== (4 & t);
                for (var n = 0; n < e.length; n++) {
                    var r = e[n], a = r.event;
                    r = r.listeners;
                    e:{
                        var l = void 0;
                        if (t) for (var i = r.length - 1; 0 <= i; i--) {
                            var o = r[i], s = o.instance, u = o.currentTarget;
                            if (o = o.listener, s !== l && a.isPropagationStopped()) break e;
                            l = o, a.currentTarget = u;
                            try {
                                l(a)
                            } catch (c) {
                                Mi(c)
                            }
                            a.currentTarget = null, l = s
                        } else for (i = 0; i < r.length; i++) {
                            if (s = (o = r[i]).instance, u = o.currentTarget, o = o.listener, s !== l && a.isPropagationStopped()) break e;
                            l = o, a.currentTarget = u;
                            try {
                                l(a)
                            } catch (c) {
                                Mi(c)
                            }
                            a.currentTarget = null, l = s
                        }
                    }
                }
            }

            function zc(e, t) {
                var n = t[Be];
                void 0 === n && (n = t[Be] = new Set);
                var r = e + "__bubble";
                n.has(r) || (Mc(t, e, 2, !1), n.add(r))
            }

            function Nc(e, t, n) {
                var r = 0;
                t && (r |= 4), Mc(n, e, r, t)
            }

            var Lc = "_reactListening" + Math.random().toString(36).slice(2);

            function Oc(e) {
                if (!e[Lc]) {
                    e[Lc] = !0, Ze.forEach((function (t) {
                        "selectionchange" !== t && (Cc.has(t) || Nc(t, !1, e), Nc(t, !0, e))
                    }));
                    var t = 9 === e.nodeType ? e : e.ownerDocument;
                    null === t || t[Lc] || (t[Lc] = !0, Nc("selectionchange", !1, t))
                }
            }

            function Mc(e, t, n, r) {
                switch (Kd(t)) {
                    case 2:
                        var a = qd;
                        break;
                    case 8:
                        a = Wd;
                        break;
                    default:
                        a = $d
                }
                n = a.bind(null, t, n, e), a = void 0, !Rt || "touchstart" !== t && "touchmove" !== t && "wheel" !== t || (a = !0), r ? void 0 !== a ? e.addEventListener(t, n, {
                    capture: !0,
                    passive: a
                }) : e.addEventListener(t, n, !0) : void 0 !== a ? e.addEventListener(t, n, {passive: a}) : e.addEventListener(t, n, !1)
            }

            function Ac(e, t, n, r, a) {
                var l = r;
                if (0 === (1 & t) && 0 === (2 & t) && null !== r) e:for (; ;) {
                    if (null === r) return;
                    var i = r.tag;
                    if (3 === i || 4 === i) {
                        var o = r.stateNode.containerInfo;
                        if (o === a || 8 === o.nodeType && o.parentNode === a) break;
                        if (4 === i) for (i = r.return; null !== i;) {
                            var s = i.tag;
                            if ((3 === s || 4 === s) && ((s = i.stateNode.containerInfo) === a || 8 === s.nodeType && s.parentNode === a)) return;
                            i = i.return
                        }
                        for (; null !== o;) {
                            if (null === (i = $e(o))) return;
                            if (5 === (s = i.tag) || 6 === s || 26 === s || 27 === s) {
                                r = l = i;
                                continue e
                            }
                            o = o.parentNode
                        }
                    }
                    r = r.return
                }
                jt((function () {
                    var r = l, a = Lt(n), i = [];
                    e:{
                        var o = wr.get(e);
                        if (void 0 !== o) {
                            var s = Zt, u = e;
                            switch (e) {
                                case"keypress":
                                    if (0 === Ut(n)) break e;
                                case"keydown":
                                case"keyup":
                                    s = mn;
                                    break;
                                case"focusin":
                                    u = "focus", s = an;
                                    break;
                                case"focusout":
                                    u = "blur", s = an;
                                    break;
                                case"beforeblur":
                                case"afterblur":
                                    s = an;
                                    break;
                                case"click":
                                    if (2 === n.button) break e;
                                case"auxclick":
                                case"dblclick":
                                case"mousedown":
                                case"mousemove":
                                case"mouseup":
                                case"mouseout":
                                case"mouseover":
                                case"contextmenu":
                                    s = nn;
                                    break;
                                case"drag":
                                case"dragend":
                                case"dragenter":
                                case"dragexit":
                                case"dragleave":
                                case"dragover":
                                case"dragstart":
                                case"drop":
                                    s = rn;
                                    break;
                                case"touchcancel":
                                case"touchend":
                                case"touchmove":
                                case"touchstart":
                                    s = gn;
                                    break;
                                case pr:
                                case mr:
                                case hr:
                                    s = ln;
                                    break;
                                case br:
                                    s = vn;
                                    break;
                                case"scroll":
                                case"scrollend":
                                    s = en;
                                    break;
                                case"wheel":
                                    s = yn;
                                    break;
                                case"copy":
                                case"cut":
                                case"paste":
                                    s = on;
                                    break;
                                case"gotpointercapture":
                                case"lostpointercapture":
                                case"pointercancel":
                                case"pointerdown":
                                case"pointermove":
                                case"pointerout":
                                case"pointerover":
                                case"pointerup":
                                    s = hn;
                                    break;
                                case"toggle":
                                case"beforetoggle":
                                    s = bn
                            }
                            var c = 0 !== (4 & t), d = !c && ("scroll" === e || "scrollend" === e),
                                f = c ? null !== o ? o + "Capture" : null : o;
                            c = [];
                            for (var p, m = r; null !== m;) {
                                var h = m;
                                if (p = h.stateNode, 5 !== (h = h.tag) && 26 !== h && 27 !== h || null === p || null === f || null != (h = Dt(m, f)) && c.push(Ic(m, h, p)), d) break;
                                m = m.return
                            }
                            0 < c.length && (o = new s(o, u, null, n, a), i.push({event: o, listeners: c}))
                        }
                    }
                    if (0 === (7 & t)) {
                        if (s = "mouseout" === e || "pointerout" === e, (!(o = "mouseover" === e || "pointerover" === e) || n === Nt || !(u = n.relatedTarget || n.fromElement) || !$e(u) && !u[Ve]) && (s || o) && (o = a.window === a ? a : (o = a.ownerDocument) ? o.defaultView || o.parentWindow : window, s ? (s = r, null !== (u = (u = n.relatedTarget || n.toElement) ? $e(u) : null) && (d = D(u), c = u.tag, u !== d || 5 !== c && 27 !== c && 6 !== c) && (u = null)) : (s = null, u = r), s !== u)) {
                            if (c = nn, h = "onMouseLeave", f = "onMouseEnter", m = "mouse", "pointerout" !== e && "pointerover" !== e || (c = hn, h = "onPointerLeave", f = "onPointerEnter", m = "pointer"), d = null == s ? o : Ye(s), p = null == u ? o : Ye(u), (o = new c(h, m + "leave", s, n, a)).target = d, o.relatedTarget = p, h = null, $e(a) === r && ((c = new c(f, m + "enter", u, n, a)).target = p, c.relatedTarget = d, h = c), d = h, s && u) e:{
                                for (f = u, m = 0, p = c = s; p; p = Dc(p)) m++;
                                for (p = 0, h = f; h; h = Dc(h)) p++;
                                for (; 0 < m - p;) c = Dc(c), m--;
                                for (; 0 < p - m;) f = Dc(f), p--;
                                for (; m--;) {
                                    if (c === f || null !== f && c === f.alternate) break e;
                                    c = Dc(c), f = Dc(f)
                                }
                                c = null
                            } else c = null;
                            null !== s && Rc(i, o, s, c, !1), null !== u && null !== d && Rc(i, d, u, c, !0)
                        }
                        if ("select" === (s = (o = r ? Ye(r) : window).nodeName && o.nodeName.toLowerCase()) || "input" === s && "file" === o.type) var g = Dn; else if (Ln(o)) if (Rn) g = $n; else {
                            g = qn;
                            var v = Un
                        } else !(s = o.nodeName) || "input" !== s.toLowerCase() || "checkbox" !== o.type && "radio" !== o.type ? r && Tt(r.elementType) && (g = Dn) : g = Wn;
                        switch (g && (g = g(e, r)) ? On(i, g, n, a) : (v && v(e, o, r), "focusout" === e && r && "number" === o.type && null != r.memoizedProps.value && yt(o, "number", o.value)), v = r ? Ye(r) : window, e) {
                            case"focusin":
                                (Ln(v) || "true" === v.contentEditable) && (rr = v, ar = r, lr = null);
                                break;
                            case"focusout":
                                lr = ar = rr = null;
                                break;
                            case"mousedown":
                                ir = !0;
                                break;
                            case"contextmenu":
                            case"mouseup":
                            case"dragend":
                                ir = !1, or(i, n, a);
                                break;
                            case"selectionchange":
                                if (nr) break;
                            case"keydown":
                            case"keyup":
                                or(i, n, a)
                        }
                        var y;
                        if (Sn) e:{
                            switch (e) {
                                case"compositionstart":
                                    var b = "onCompositionStart";
                                    break e;
                                case"compositionend":
                                    b = "onCompositionEnd";
                                    break e;
                                case"compositionupdate":
                                    b = "onCompositionUpdate";
                                    break e
                            }
                            b = void 0
                        } else zn ? Cn(e, n) && (b = "onCompositionEnd") : "keydown" === e && 229 === n.keyCode && (b = "onCompositionStart");
                        b && (En && "ko" !== n.locale && (zn || "onCompositionStart" !== b ? "onCompositionEnd" === b && zn && (y = Gt()) : (Bt = "value" in (Vt = a) ? Vt.value : Vt.textContent, zn = !0)), 0 < (v = jc(r, b)).length && (b = new sn(b, e, null, n, a), i.push({
                            event: b,
                            listeners: v
                        }), y ? b.data = y : null !== (y = Pn(n)) && (b.data = y))), (y = xn ? function (e, t) {
                            switch (e) {
                                case"compositionend":
                                    return Pn(t);
                                case"keypress":
                                    return 32 !== t.which ? null : (Tn = !0, _n);
                                case"textInput":
                                    return (e = t.data) === _n && Tn ? null : e;
                                default:
                                    return null
                            }
                        }(e, n) : function (e, t) {
                            if (zn) return "compositionend" === e || !Sn && Cn(e, t) ? (e = Gt(), Ht = Bt = Vt = null, zn = !1, e) : null;
                            switch (e) {
                                case"paste":
                                default:
                                    return null;
                                case"keypress":
                                    if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                                        if (t.char && 1 < t.char.length) return t.char;
                                        if (t.which) return String.fromCharCode(t.which)
                                    }
                                    return null;
                                case"compositionend":
                                    return En && "ko" !== t.locale ? null : t.data
                            }
                        }(e, n)) && (0 < (b = jc(r, "onBeforeInput")).length && (v = new sn("onBeforeInput", "beforeinput", null, n, a), i.push({
                            event: v,
                            listeners: b
                        }), v.data = y)), function (e, t, n, r, a) {
                            if ("submit" === t && n && n.stateNode === a) {
                                var l = kc((a[Fe] || null).action), i = r.submitter;
                                i && null !== (t = (t = i[Fe] || null) ? kc(t.formAction) : i.getAttribute("formAction")) && (l = t, i = null);
                                var o = new Zt("action", "action", null, r, a);
                                e.push({
                                    event: o, listeners: [{
                                        instance: null, listener: function () {
                                            if (r.defaultPrevented) {
                                                if (0 !== mc) {
                                                    var e = i ? xc(a, i) : new FormData(a);
                                                    ci(n, {pending: !0, data: e, method: a.method, action: l}, null, e)
                                                }
                                            } else "function" === typeof l && (o.preventDefault(), e = i ? xc(a, i) : new FormData(a), ci(n, {
                                                pending: !0,
                                                data: e,
                                                method: a.method,
                                                action: l
                                            }, l, e))
                                        }, currentTarget: a
                                    }]
                                })
                            }
                        }(i, e, r, n, a)
                    }
                    Pc(i, t)
                }))
            }

            function Ic(e, t, n) {
                return {instance: e, listener: t, currentTarget: n}
            }

            function jc(e, t) {
                for (var n = t + "Capture", r = []; null !== e;) {
                    var a = e, l = a.stateNode;
                    5 !== (a = a.tag) && 26 !== a && 27 !== a || null === l || (null != (a = Dt(e, n)) && r.unshift(Ic(e, a, l)), null != (a = Dt(e, t)) && r.push(Ic(e, a, l))), e = e.return
                }
                return r
            }

            function Dc(e) {
                if (null === e) return null;
                do {
                    e = e.return
                } while (e && 5 !== e.tag && 27 !== e.tag);
                return e || null
            }

            function Rc(e, t, n, r, a) {
                for (var l = t._reactName, i = []; null !== n && n !== r;) {
                    var o = n, s = o.alternate, u = o.stateNode;
                    if (o = o.tag, null !== s && s === r) break;
                    5 !== o && 26 !== o && 27 !== o || null === u || (s = u, a ? null != (u = Dt(n, l)) && i.unshift(Ic(n, u, s)) : a || null != (u = Dt(n, l)) && i.push(Ic(n, u, s))), n = n.return
                }
                0 !== i.length && e.push({event: t, listeners: i})
            }

            var Fc = /\r\n?/g, Vc = /\u0000|\uFFFD/g;

            function Bc(e) {
                return ("string" === typeof e ? e : "" + e).replace(Fc, "\n").replace(Vc, "")
            }

            function Hc(e, t) {
                return t = Bc(t), Bc(e) === t
            }

            function Gc() {
            }

            function Uc(e, t, n, r, a, l) {
                switch (n) {
                    case"children":
                        "string" === typeof r ? "body" === t || "textarea" === t && "" === r || kt(e, r) : ("number" === typeof r || "bigint" === typeof r) && "body" !== t && kt(e, "" + r);
                        break;
                    case"className":
                        ot(e, "class", r);
                        break;
                    case"tabIndex":
                        ot(e, "tabindex", r);
                        break;
                    case"dir":
                    case"role":
                    case"viewBox":
                    case"width":
                    case"height":
                        ot(e, n, r);
                        break;
                    case"style":
                        _t(e, r, l);
                        break;
                    case"data":
                        if ("object" !== t) {
                            ot(e, "data", r);
                            break
                        }
                    case"src":
                    case"href":
                        if ("" === r && ("a" !== t || "href" !== n)) {
                            e.removeAttribute(n);
                            break
                        }
                        if (null == r || "function" === typeof r || "symbol" === typeof r || "boolean" === typeof r) {
                            e.removeAttribute(n);
                            break
                        }
                        r = zt("" + r), e.setAttribute(n, r);
                        break;
                    case"action":
                    case"formAction":
                        if ("function" === typeof r) {
                            e.setAttribute(n, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
                            break
                        }
                        if ("function" === typeof l && ("formAction" === n ? ("input" !== t && Uc(e, t, "name", a.name, a, null), Uc(e, t, "formEncType", a.formEncType, a, null), Uc(e, t, "formMethod", a.formMethod, a, null), Uc(e, t, "formTarget", a.formTarget, a, null)) : (Uc(e, t, "encType", a.encType, a, null), Uc(e, t, "method", a.method, a, null), Uc(e, t, "target", a.target, a, null))), null == r || "symbol" === typeof r || "boolean" === typeof r) {
                            e.removeAttribute(n);
                            break
                        }
                        r = zt("" + r), e.setAttribute(n, r);
                        break;
                    case"onClick":
                        null != r && (e.onclick = Gc);
                        break;
                    case"onScroll":
                        null != r && zc("scroll", e);
                        break;
                    case"onScrollEnd":
                        null != r && zc("scrollend", e);
                        break;
                    case"dangerouslySetInnerHTML":
                        if (null != r) {
                            if ("object" !== typeof r || !("__html" in r)) throw Error(i(61));
                            if (null != (n = r.__html)) {
                                if (null != a.children) throw Error(i(60));
                                e.innerHTML = n
                            }
                        }
                        break;
                    case"multiple":
                        e.multiple = r && "function" !== typeof r && "symbol" !== typeof r;
                        break;
                    case"muted":
                        e.muted = r && "function" !== typeof r && "symbol" !== typeof r;
                        break;
                    case"suppressContentEditableWarning":
                    case"suppressHydrationWarning":
                    case"defaultValue":
                    case"defaultChecked":
                    case"innerHTML":
                    case"ref":
                    case"autoFocus":
                        break;
                    case"xlinkHref":
                        if (null == r || "function" === typeof r || "boolean" === typeof r || "symbol" === typeof r) {
                            e.removeAttribute("xlink:href");
                            break
                        }
                        n = zt("" + r), e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", n);
                        break;
                    case"contentEditable":
                    case"spellCheck":
                    case"draggable":
                    case"value":
                    case"autoReverse":
                    case"externalResourcesRequired":
                    case"focusable":
                    case"preserveAlpha":
                        null != r && "function" !== typeof r && "symbol" !== typeof r ? e.setAttribute(n, "" + r) : e.removeAttribute(n);
                        break;
                    case"inert":
                    case"allowFullScreen":
                    case"async":
                    case"autoPlay":
                    case"controls":
                    case"default":
                    case"defer":
                    case"disabled":
                    case"disablePictureInPicture":
                    case"disableRemotePlayback":
                    case"formNoValidate":
                    case"hidden":
                    case"loop":
                    case"noModule":
                    case"noValidate":
                    case"open":
                    case"playsInline":
                    case"readOnly":
                    case"required":
                    case"reversed":
                    case"scoped":
                    case"seamless":
                    case"itemScope":
                        r && "function" !== typeof r && "symbol" !== typeof r ? e.setAttribute(n, "") : e.removeAttribute(n);
                        break;
                    case"capture":
                    case"download":
                        !0 === r ? e.setAttribute(n, "") : !1 !== r && null != r && "function" !== typeof r && "symbol" !== typeof r ? e.setAttribute(n, r) : e.removeAttribute(n);
                        break;
                    case"cols":
                    case"rows":
                    case"size":
                    case"span":
                        null != r && "function" !== typeof r && "symbol" !== typeof r && !isNaN(r) && 1 <= r ? e.setAttribute(n, r) : e.removeAttribute(n);
                        break;
                    case"rowSpan":
                    case"start":
                        null == r || "function" === typeof r || "symbol" === typeof r || isNaN(r) ? e.removeAttribute(n) : e.setAttribute(n, r);
                        break;
                    case"popover":
                        zc("beforetoggle", e), zc("toggle", e), it(e, "popover", r);
                        break;
                    case"xlinkActuate":
                        st(e, "http://www.w3.org/1999/xlink", "xlink:actuate", r);
                        break;
                    case"xlinkArcrole":
                        st(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", r);
                        break;
                    case"xlinkRole":
                        st(e, "http://www.w3.org/1999/xlink", "xlink:role", r);
                        break;
                    case"xlinkShow":
                        st(e, "http://www.w3.org/1999/xlink", "xlink:show", r);
                        break;
                    case"xlinkTitle":
                        st(e, "http://www.w3.org/1999/xlink", "xlink:title", r);
                        break;
                    case"xlinkType":
                        st(e, "http://www.w3.org/1999/xlink", "xlink:type", r);
                        break;
                    case"xmlBase":
                        st(e, "http://www.w3.org/XML/1998/namespace", "xml:base", r);
                        break;
                    case"xmlLang":
                        st(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", r);
                        break;
                    case"xmlSpace":
                        st(e, "http://www.w3.org/XML/1998/namespace", "xml:space", r);
                        break;
                    case"is":
                        it(e, "is", r);
                        break;
                    case"innerText":
                    case"textContent":
                        break;
                    default:
                        (!(2 < n.length) || "o" !== n[0] && "O" !== n[0] || "n" !== n[1] && "N" !== n[1]) && it(e, n = Ct.get(n) || n, r)
                }
            }

            function qc(e, t, n, r, a, l) {
                switch (n) {
                    case"style":
                        _t(e, r, l);
                        break;
                    case"dangerouslySetInnerHTML":
                        if (null != r) {
                            if ("object" !== typeof r || !("__html" in r)) throw Error(i(61));
                            if (null != (n = r.__html)) {
                                if (null != a.children) throw Error(i(60));
                                e.innerHTML = n
                            }
                        }
                        break;
                    case"children":
                        "string" === typeof r ? kt(e, r) : ("number" === typeof r || "bigint" === typeof r) && kt(e, "" + r);
                        break;
                    case"onScroll":
                        null != r && zc("scroll", e);
                        break;
                    case"onScrollEnd":
                        null != r && zc("scrollend", e);
                        break;
                    case"onClick":
                        null != r && (e.onclick = Gc);
                        break;
                    case"suppressContentEditableWarning":
                    case"suppressHydrationWarning":
                    case"innerHTML":
                    case"ref":
                    case"innerText":
                    case"textContent":
                        break;
                    default:
                        Je.hasOwnProperty(n) || ("o" !== n[0] || "n" !== n[1] || (a = n.endsWith("Capture"), t = n.slice(2, a ? n.length - 7 : void 0), "function" === typeof (l = null != (l = e[Fe] || null) ? l[n] : null) && e.removeEventListener(t, l, a), "function" !== typeof r) ? n in e ? e[n] = r : !0 === r ? e.setAttribute(n, "") : it(e, n, r) : ("function" !== typeof l && null !== l && (n in e ? e[n] = null : e.hasAttribute(n) && e.removeAttribute(n)), e.addEventListener(t, r, a)))
                }
            }

            function Wc(e, t, n) {
                switch (t) {
                    case"div":
                    case"span":
                    case"svg":
                    case"path":
                    case"a":
                    case"g":
                    case"p":
                    case"li":
                        break;
                    case"img":
                        zc("error", e), zc("load", e);
                        var r, a = !1, l = !1;
                        for (r in n) if (n.hasOwnProperty(r)) {
                            var o = n[r];
                            if (null != o) switch (r) {
                                case"src":
                                    a = !0;
                                    break;
                                case"srcSet":
                                    l = !0;
                                    break;
                                case"children":
                                case"dangerouslySetInnerHTML":
                                    throw Error(i(137, t));
                                default:
                                    Uc(e, t, r, o, n, null)
                            }
                        }
                        return l && Uc(e, t, "srcSet", n.srcSet, n, null), void (a && Uc(e, t, "src", n.src, n, null));
                    case"input":
                        zc("invalid", e);
                        var s = r = o = l = null, u = null, c = null;
                        for (a in n) if (n.hasOwnProperty(a)) {
                            var d = n[a];
                            if (null != d) switch (a) {
                                case"name":
                                    l = d;
                                    break;
                                case"type":
                                    o = d;
                                    break;
                                case"checked":
                                    u = d;
                                    break;
                                case"defaultChecked":
                                    c = d;
                                    break;
                                case"value":
                                    r = d;
                                    break;
                                case"defaultValue":
                                    s = d;
                                    break;
                                case"children":
                                case"dangerouslySetInnerHTML":
                                    if (null != d) throw Error(i(137, t));
                                    break;
                                default:
                                    Uc(e, t, a, d, n, null)
                            }
                        }
                        return vt(e, r, s, u, c, o, l, !1), void dt(e);
                    case"select":
                        for (l in zc("invalid", e), a = o = r = null, n) if (n.hasOwnProperty(l) && null != (s = n[l])) switch (l) {
                            case"value":
                                r = s;
                                break;
                            case"defaultValue":
                                o = s;
                                break;
                            case"multiple":
                                a = s;
                            default:
                                Uc(e, t, l, s, n, null)
                        }
                        return t = r, n = o, e.multiple = !!a, void (null != t ? bt(e, !!a, t, !1) : null != n && bt(e, !!a, n, !0));
                    case"textarea":
                        for (o in zc("invalid", e), r = l = a = null, n) if (n.hasOwnProperty(o) && null != (s = n[o])) switch (o) {
                            case"value":
                                a = s;
                                break;
                            case"defaultValue":
                                l = s;
                                break;
                            case"children":
                                r = s;
                                break;
                            case"dangerouslySetInnerHTML":
                                if (null != s) throw Error(i(91));
                                break;
                            default:
                                Uc(e, t, o, s, n, null)
                        }
                        return St(e, a, l, r), void dt(e);
                    case"option":
                        for (u in n) if (n.hasOwnProperty(u) && null != (a = n[u])) if ("selected" === u) e.selected = a && "function" !== typeof a && "symbol" !== typeof a; else Uc(e, t, u, a, n, null);
                        return;
                    case"dialog":
                        zc("cancel", e), zc("close", e);
                        break;
                    case"iframe":
                    case"object":
                        zc("load", e);
                        break;
                    case"video":
                    case"audio":
                        for (a = 0; a < Tc.length; a++) zc(Tc[a], e);
                        break;
                    case"image":
                        zc("error", e), zc("load", e);
                        break;
                    case"details":
                        zc("toggle", e);
                        break;
                    case"embed":
                    case"source":
                    case"link":
                        zc("error", e), zc("load", e);
                    case"area":
                    case"base":
                    case"br":
                    case"col":
                    case"hr":
                    case"keygen":
                    case"meta":
                    case"param":
                    case"track":
                    case"wbr":
                    case"menuitem":
                        for (c in n) if (n.hasOwnProperty(c) && null != (a = n[c])) switch (c) {
                            case"children":
                            case"dangerouslySetInnerHTML":
                                throw Error(i(137, t));
                            default:
                                Uc(e, t, c, a, n, null)
                        }
                        return;
                    default:
                        if (Tt(t)) {
                            for (d in n) n.hasOwnProperty(d) && (void 0 !== (a = n[d]) && qc(e, t, d, a, n, void 0));
                            return
                        }
                }
                for (s in n) n.hasOwnProperty(s) && (null != (a = n[s]) && Uc(e, t, s, a, n, null))
            }

            var $c = null, Qc = null;

            function Yc(e) {
                return 9 === e.nodeType ? e : e.ownerDocument
            }

            function Xc(e) {
                switch (e) {
                    case"http://www.w3.org/2000/svg":
                        return 1;
                    case"http://www.w3.org/1998/Math/MathML":
                        return 2;
                    default:
                        return 0
                }
            }

            function Kc(e, t) {
                if (0 === e) switch (t) {
                    case"svg":
                        return 1;
                    case"math":
                        return 2;
                    default:
                        return 0
                }
                return 1 === e && "foreignObject" === t ? 0 : e
            }

            function Zc(e, t) {
                return "textarea" === e || "noscript" === e || "string" === typeof t.children || "number" === typeof t.children || "bigint" === typeof t.children || "object" === typeof t.dangerouslySetInnerHTML && null !== t.dangerouslySetInnerHTML && null != t.dangerouslySetInnerHTML.__html
            }

            var Jc = null;
            var ed = "function" === typeof setTimeout ? setTimeout : void 0,
                td = "function" === typeof clearTimeout ? clearTimeout : void 0,
                nd = "function" === typeof Promise ? Promise : void 0,
                rd = "function" === typeof queueMicrotask ? queueMicrotask : "undefined" !== typeof nd ? function (e) {
                    return nd.resolve(null).then(e).catch(ad)
                } : ed;

            function ad(e) {
                setTimeout((function () {
                    throw e
                }))
            }

            function ld(e, t) {
                var n = t, r = 0;
                do {
                    var a = n.nextSibling;
                    if (e.removeChild(n), a && 8 === a.nodeType) if ("/$" === (n = a.data)) {
                        if (0 === r) return e.removeChild(a), void gf(t);
                        r--
                    } else "$" !== n && "$?" !== n && "$!" !== n || r++;
                    n = a
                } while (n);
                gf(t)
            }

            function id(e) {
                var t = e.firstChild;
                for (t && 10 === t.nodeType && (t = t.nextSibling); t;) {
                    var n = t;
                    switch (t = t.nextSibling, n.nodeName) {
                        case"HTML":
                        case"HEAD":
                        case"BODY":
                            id(n), We(n);
                            continue;
                        case"SCRIPT":
                        case"STYLE":
                            continue;
                        case"LINK":
                            if ("stylesheet" === n.rel.toLowerCase()) continue
                    }
                    e.removeChild(n)
                }
            }

            function od(e) {
                for (; null != e; e = e.nextSibling) {
                    var t = e.nodeType;
                    if (1 === t || 3 === t) break;
                    if (8 === t) {
                        if ("$" === (t = e.data) || "$!" === t || "$?" === t || "F!" === t || "F" === t) break;
                        if ("/$" === t) return null
                    }
                }
                return e
            }

            function sd(e) {
                e = e.previousSibling;
                for (var t = 0; e;) {
                    if (8 === e.nodeType) {
                        var n = e.data;
                        if ("$" === n || "$!" === n || "$?" === n) {
                            if (0 === t) return e;
                            t--
                        } else "/$" === n && t++
                    }
                    e = e.previousSibling
                }
                return null
            }

            function ud(e, t, n) {
                switch (t = Yc(n), e) {
                    case"html":
                        if (!(e = t.documentElement)) throw Error(i(452));
                        return e;
                    case"head":
                        if (!(e = t.head)) throw Error(i(453));
                        return e;
                    case"body":
                        if (!(e = t.body)) throw Error(i(454));
                        return e;
                    default:
                        throw Error(i(451))
                }
            }

            var cd = new Map, dd = new Set;

            function fd(e) {
                return "function" === typeof e.getRootNode ? e.getRootNode() : e.ownerDocument
            }

            var pd = H.d;
            H.d = {
                f: function () {
                    var e = pd.f(), t = Ru();
                    return e || t
                }, r: function (e) {
                    var t = Qe(e);
                    null !== t && 5 === t.tag && "form" === t.type ? fi(t) : pd.r(e)
                }, D: function (e) {
                    pd.D(e), hd("dns-prefetch", e, null)
                }, C: function (e, t) {
                    pd.C(e, t), hd("preconnect", e, t)
                }, L: function (e, t, n) {
                    pd.L(e, t, n);
                    var r = md;
                    if (r && e && t) {
                        var a = 'link[rel="preload"][as="' + ht(t) + '"]';
                        "image" === t && n && n.imageSrcSet ? (a += '[imagesrcset="' + ht(n.imageSrcSet) + '"]', "string" === typeof n.imageSizes && (a += '[imagesizes="' + ht(n.imageSizes) + '"]')) : a += '[href="' + ht(e) + '"]';
                        var l = a;
                        switch (t) {
                            case"style":
                                l = vd(e);
                                break;
                            case"script":
                                l = wd(e)
                        }
                        cd.has(l) || (e = L({
                            rel: "preload",
                            href: "image" === t && n && n.imageSrcSet ? void 0 : e,
                            as: t
                        }, n), cd.set(l, e), null !== r.querySelector(a) || "style" === t && r.querySelector(yd(l)) || "script" === t && r.querySelector(Sd(l)) || (Wc(t = r.createElement("link"), "link", e), Ke(t), r.head.appendChild(t)))
                    }
                }, m: function (e, t) {
                    pd.m(e, t);
                    var n = md;
                    if (n && e) {
                        var r = t && "string" === typeof t.as ? t.as : "script",
                            a = 'link[rel="modulepreload"][as="' + ht(r) + '"][href="' + ht(e) + '"]', l = a;
                        switch (r) {
                            case"audioworklet":
                            case"paintworklet":
                            case"serviceworker":
                            case"sharedworker":
                            case"worker":
                            case"script":
                                l = wd(e)
                        }
                        if (!cd.has(l) && (e = L({
                            rel: "modulepreload",
                            href: e
                        }, t), cd.set(l, e), null === n.querySelector(a))) {
                            switch (r) {
                                case"audioworklet":
                                case"paintworklet":
                                case"serviceworker":
                                case"sharedworker":
                                case"worker":
                                case"script":
                                    if (n.querySelector(Sd(l))) return
                            }
                            Wc(r = n.createElement("link"), "link", e), Ke(r), n.head.appendChild(r)
                        }
                    }
                }, X: function (e, t) {
                    pd.X(e, t);
                    var n = md;
                    if (n && e) {
                        var r = Xe(n).hoistableScripts, a = wd(e), l = r.get(a);
                        l || ((l = n.querySelector(Sd(a))) || (e = L({
                            src: e,
                            async: !0
                        }, t), (t = cd.get(a)) && _d(e, t), Ke(l = n.createElement("script")), Wc(l, "link", e), n.head.appendChild(l)), l = {
                            type: "script",
                            instance: l,
                            count: 1,
                            state: null
                        }, r.set(a, l))
                    }
                }, S: function (e, t, n) {
                    pd.S(e, t, n);
                    var r = md;
                    if (r && e) {
                        var a = Xe(r).hoistableStyles, l = vd(e);
                        t = t || "default";
                        var i = a.get(l);
                        if (!i) {
                            var o = {loading: 0, preload: null};
                            if (i = r.querySelector(yd(l))) o.loading = 5; else {
                                e = L({
                                    rel: "stylesheet",
                                    href: e,
                                    "data-precedence": t
                                }, n), (n = cd.get(l)) && Ed(e, n);
                                var s = i = r.createElement("link");
                                Ke(s), Wc(s, "link", e), s._p = new Promise((function (e, t) {
                                    s.onload = e, s.onerror = t
                                })), s.addEventListener("load", (function () {
                                    o.loading |= 1
                                })), s.addEventListener("error", (function () {
                                    o.loading |= 2
                                })), o.loading |= 4, xd(i, t, r)
                            }
                            i = {type: "stylesheet", instance: i, count: 1, state: o}, a.set(l, i)
                        }
                    }
                }, M: function (e, t) {
                    pd.M(e, t);
                    var n = md;
                    if (n && e) {
                        var r = Xe(n).hoistableScripts, a = wd(e), l = r.get(a);
                        l || ((l = n.querySelector(Sd(a))) || (e = L({
                            src: e,
                            async: !0,
                            type: "module"
                        }, t), (t = cd.get(a)) && _d(e, t), Ke(l = n.createElement("script")), Wc(l, "link", e), n.head.appendChild(l)), l = {
                            type: "script",
                            instance: l,
                            count: 1,
                            state: null
                        }, r.set(a, l))
                    }
                }
            };
            var md = "undefined" === typeof document ? null : document;

            function hd(e, t, n) {
                var r = md;
                if (r && "string" === typeof t && t) {
                    var a = ht(t);
                    a = 'link[rel="' + e + '"][href="' + a + '"]', "string" === typeof n && (a += '[crossorigin="' + n + '"]'), dd.has(a) || (dd.add(a), e = {
                        rel: e,
                        crossOrigin: n,
                        href: t
                    }, null === r.querySelector(a) && (Wc(t = r.createElement("link"), "link", e), Ke(t), r.head.appendChild(t)))
                }
            }

            function gd(e, t, n, r) {
                var a, l, o, s, u = (u = K.current) ? fd(u) : null;
                if (!u) throw Error(i(446));
                switch (e) {
                    case"meta":
                    case"title":
                        return null;
                    case"style":
                        return "string" === typeof n.precedence && "string" === typeof n.href ? (t = vd(n.href), (r = (n = Xe(u).hoistableStyles).get(t)) || (r = {
                            type: "style",
                            instance: null,
                            count: 0,
                            state: null
                        }, n.set(t, r)), r) : {type: "void", instance: null, count: 0, state: null};
                    case"link":
                        if ("stylesheet" === n.rel && "string" === typeof n.href && "string" === typeof n.precedence) {
                            e = vd(n.href);
                            var c = Xe(u).hoistableStyles, d = c.get(e);
                            if (d || (u = u.ownerDocument || u, d = {
                                type: "stylesheet",
                                instance: null,
                                count: 0,
                                state: {loading: 0, preload: null}
                            }, c.set(e, d), (c = u.querySelector(yd(e))) && !c._p && (d.instance = c, d.state.loading = 5), cd.has(e) || (n = {
                                rel: "preload",
                                as: "style",
                                href: n.href,
                                crossOrigin: n.crossOrigin,
                                integrity: n.integrity,
                                media: n.media,
                                hrefLang: n.hrefLang,
                                referrerPolicy: n.referrerPolicy
                            }, cd.set(e, n), c || (a = u, l = e, o = n, s = d.state, a.querySelector('link[rel="preload"][as="style"][' + l + "]") ? s.loading = 1 : (l = a.createElement("link"), s.preload = l, l.addEventListener("load", (function () {
                                return s.loading |= 1
                            })), l.addEventListener("error", (function () {
                                return s.loading |= 2
                            })), Wc(l, "link", o), Ke(l), a.head.appendChild(l))))), t && null === r) throw Error(i(528, ""));
                            return d
                        }
                        if (t && null !== r) throw Error(i(529, ""));
                        return null;
                    case"script":
                        return t = n.async, "string" === typeof (n = n.src) && t && "function" !== typeof t && "symbol" !== typeof t ? (t = wd(n), (r = (n = Xe(u).hoistableScripts).get(t)) || (r = {
                            type: "script",
                            instance: null,
                            count: 0,
                            state: null
                        }, n.set(t, r)), r) : {type: "void", instance: null, count: 0, state: null};
                    default:
                        throw Error(i(444, e))
                }
            }

            function vd(e) {
                return 'href="' + ht(e) + '"'
            }

            function yd(e) {
                return 'link[rel="stylesheet"][' + e + "]"
            }

            function bd(e) {
                return L({}, e, {"data-precedence": e.precedence, precedence: null})
            }

            function wd(e) {
                return '[src="' + ht(e) + '"]'
            }

            function Sd(e) {
                return "script[async]" + e
            }

            function kd(e, t, n) {
                if (t.count++, null === t.instance) switch (t.type) {
                    case"style":
                        var r = e.querySelector('style[data-href~="' + ht(n.href) + '"]');
                        if (r) return t.instance = r, Ke(r), r;
                        var a = L({}, n, {
                            "data-href": n.href,
                            "data-precedence": n.precedence,
                            href: null,
                            precedence: null
                        });
                        return Ke(r = (e.ownerDocument || e).createElement("style")), Wc(r, "style", a), xd(r, n.precedence, e), t.instance = r;
                    case"stylesheet":
                        a = vd(n.href);
                        var l = e.querySelector(yd(a));
                        if (l) return t.state.loading |= 4, t.instance = l, Ke(l), l;
                        r = bd(n), (a = cd.get(a)) && Ed(r, a), Ke(l = (e.ownerDocument || e).createElement("link"));
                        var o = l;
                        return o._p = new Promise((function (e, t) {
                            o.onload = e, o.onerror = t
                        })), Wc(l, "link", r), t.state.loading |= 4, xd(l, n.precedence, e), t.instance = l;
                    case"script":
                        return l = wd(n.src), (a = e.querySelector(Sd(l))) ? (t.instance = a, Ke(a), a) : (r = n, (a = cd.get(l)) && _d(r = L({}, n), a), Ke(a = (e = e.ownerDocument || e).createElement("script")), Wc(a, "link", r), e.head.appendChild(a), t.instance = a);
                    case"void":
                        return null;
                    default:
                        throw Error(i(443, t.type))
                } else "stylesheet" === t.type && 0 === (4 & t.state.loading) && (r = t.instance, t.state.loading |= 4, xd(r, n.precedence, e));
                return t.instance
            }

            function xd(e, t, n) {
                for (var r = n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), a = r.length ? r[r.length - 1] : null, l = a, i = 0; i < r.length; i++) {
                    var o = r[i];
                    if (o.dataset.precedence === t) l = o; else if (l !== a) break
                }
                l ? l.parentNode.insertBefore(e, l.nextSibling) : (t = 9 === n.nodeType ? n.head : n).insertBefore(e, t.firstChild)
            }

            function Ed(e, t) {
                null == e.crossOrigin && (e.crossOrigin = t.crossOrigin), null == e.referrerPolicy && (e.referrerPolicy = t.referrerPolicy), null == e.title && (e.title = t.title)
            }

            function _d(e, t) {
                null == e.crossOrigin && (e.crossOrigin = t.crossOrigin), null == e.referrerPolicy && (e.referrerPolicy = t.referrerPolicy), null == e.integrity && (e.integrity = t.integrity)
            }

            var Td = null;

            function Cd(e, t, n) {
                if (null === Td) {
                    var r = new Map, a = Td = new Map;
                    a.set(n, r)
                } else (r = (a = Td).get(n)) || (r = new Map, a.set(n, r));
                if (r.has(e)) return r;
                for (r.set(e, null), n = n.getElementsByTagName(e), a = 0; a < n.length; a++) {
                    var l = n[a];
                    if (!(l[qe] || l[Re] || "link" === e && "stylesheet" === l.getAttribute("rel")) && "http://www.w3.org/2000/svg" !== l.namespaceURI) {
                        var i = l.getAttribute(t) || "";
                        i = e + i;
                        var o = r.get(i);
                        o ? o.push(l) : r.set(i, [l])
                    }
                }
                return r
            }

            function Pd(e, t, n) {
                (e = e.ownerDocument || e).head.insertBefore(n, "title" === t ? e.querySelector("head > title") : null)
            }

            function zd(e) {
                return "stylesheet" !== e.type || 0 !== (3 & e.state.loading)
            }

            var Nd = null;

            function Ld() {
            }

            function Od() {
                if (this.count--, 0 === this.count) if (this.stylesheets) Ad(this, this.stylesheets); else if (this.unsuspend) {
                    var e = this.unsuspend;
                    this.unsuspend = null, e()
                }
            }

            var Md = null;

            function Ad(e, t) {
                e.stylesheets = null, null !== e.unsuspend && (e.count++, Md = new Map, t.forEach(Id, e), Md = null, Od.call(e))
            }

            function Id(e, t) {
                if (!(4 & t.state.loading)) {
                    var n = Md.get(e);
                    if (n) var r = n.get(null); else {
                        n = new Map, Md.set(e, n);
                        for (var a = e.querySelectorAll("link[data-precedence],style[data-precedence]"), l = 0; l < a.length; l++) {
                            var i = a[l];
                            "LINK" !== i.nodeName && "not all" === i.getAttribute("media") || (n.set(i.dataset.precedence, i), r = i)
                        }
                        r && n.set(null, r)
                    }
                    i = (a = t.instance).getAttribute("data-precedence"), (l = n.get(i) || r) === r && n.set(null, a), n.set(i, a), this.count++, r = Od.bind(this), a.addEventListener("load", r), a.addEventListener("error", r), l ? l.parentNode.insertBefore(a, l.nextSibling) : (e = 9 === e.nodeType ? e.head : e).insertBefore(a, e.firstChild), t.state.loading |= 4
                }
            }

            var jd = {
                $$typeof: g,
                Provider: null,
                Consumer: null,
                _currentValue: G,
                _currentValue2: G,
                _threadCount: 0
            };

            function Dd(e, t, n, r, a, l, i, o) {
                this.tag = 1, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Le(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.finishedLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Le(0), this.hiddenUpdates = Le(null), this.identifierPrefix = r, this.onUncaughtError = a, this.onCaughtError = l, this.onRecoverableError = i, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = o, this.incompleteTransitions = new Map
            }

            function Rd(e, t, n, r, a, l, i, o, s, u, c, d) {
                return e = new Dd(e, t, n, i, o, s, u, d), t = 1, !0 === l && (t |= 24), l = Is(3, null, null, t), e.current = l, l.stateNode = e, (t = Va()).refCount++, e.pooledCache = t, t.refCount++, l.memoizedState = {
                    element: r,
                    isDehydrated: n,
                    cache: t
                }, zo(l), e
            }

            function Fd(e) {
                return e ? e = Or : Or
            }

            function Vd(e, t, n, r, a, l) {
                a = Fd(a), null === r.context ? r.context = a : r.pendingContext = a, (r = Lo(t)).payload = {element: n}, null !== (l = void 0 === l ? null : l) && (r.callback = l), null !== (n = Oo(e, r, t)) && (Ou(n, 0, t), Mo(n, e, t))
            }

            function Bd(e, t) {
                if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
                    var n = e.retryLane;
                    e.retryLane = 0 !== n && n < t ? n : t
                }
            }

            function Hd(e, t) {
                Bd(e, t), (e = e.alternate) && Bd(e, t)
            }

            function Gd(e) {
                if (13 === e.tag) {
                    var t = zr(e, 67108864);
                    null !== t && Ou(t, 0, 67108864), Hd(e, 67108864)
                }
            }

            var Ud = !0;

            function qd(e, t, n, r) {
                var a = N.T;
                N.T = null;
                var l = H.p;
                try {
                    H.p = 2, $d(e, t, n, r)
                } finally {
                    H.p = l, N.T = a
                }
            }

            function Wd(e, t, n, r) {
                var a = N.T;
                N.T = null;
                var l = H.p;
                try {
                    H.p = 8, $d(e, t, n, r)
                } finally {
                    H.p = l, N.T = a
                }
            }

            function $d(e, t, n, r) {
                if (Ud) {
                    var a = Qd(r);
                    if (null === a) Ac(e, t, r, Yd, n), of(e, r); else if (function (e, t, n, r, a) {
                        switch (t) {
                            case"focusin":
                                return Jd = sf(Jd, e, t, n, r, a), !0;
                            case"dragenter":
                                return ef = sf(ef, e, t, n, r, a), !0;
                            case"mouseover":
                                return tf = sf(tf, e, t, n, r, a), !0;
                            case"pointerover":
                                var l = a.pointerId;
                                return nf.set(l, sf(nf.get(l) || null, e, t, n, r, a)), !0;
                            case"gotpointercapture":
                                return l = a.pointerId, rf.set(l, sf(rf.get(l) || null, e, t, n, r, a)), !0
                        }
                        return !1
                    }(a, e, t, n, r)) r.stopPropagation(); else if (of(e, r), 4 & t && -1 < lf.indexOf(e)) {
                        for (; null !== a;) {
                            var l = Qe(a);
                            if (null !== l) switch (l.tag) {
                                case 3:
                                    if ((l = l.stateNode).current.memoizedState.isDehydrated) {
                                        var i = _e(l.pendingLanes);
                                        if (0 !== i) {
                                            var o = l;
                                            for (o.pendingLanes |= 2, o.entangledLanes |= 2; i;) {
                                                var s = 1 << 31 - we(i);
                                                o.entanglements[1] |= s, i &= ~s
                                            }
                                            hc(l), 0 === (6 & eu) && (wu = se() + 500, gc(0, !1))
                                        }
                                    }
                                    break;
                                case 13:
                                    null !== (o = zr(l, 2)) && Ou(o, 0, 2), Ru(), Hd(l, 2)
                            }
                            if (null === (l = Qd(r)) && Ac(e, t, r, Yd, n), l === a) break;
                            a = l
                        }
                        null !== a && r.stopPropagation()
                    } else Ac(e, t, r, null, n)
                }
            }

            function Qd(e) {
                return Xd(e = Lt(e))
            }

            var Yd = null;

            function Xd(e) {
                if (Yd = null, null !== (e = $e(e))) {
                    var t = D(e);
                    if (null === t) e = null; else {
                        var n = t.tag;
                        if (13 === n) {
                            if (null !== (e = R(t))) return e;
                            e = null
                        } else if (3 === n) {
                            if (t.stateNode.current.memoizedState.isDehydrated) return 3 === t.tag ? t.stateNode.containerInfo : null;
                            e = null
                        } else t !== e && (e = null)
                    }
                }
                return Yd = e, null
            }

            function Kd(e) {
                switch (e) {
                    case"beforetoggle":
                    case"cancel":
                    case"click":
                    case"close":
                    case"contextmenu":
                    case"copy":
                    case"cut":
                    case"auxclick":
                    case"dblclick":
                    case"dragend":
                    case"dragstart":
                    case"drop":
                    case"focusin":
                    case"focusout":
                    case"input":
                    case"invalid":
                    case"keydown":
                    case"keypress":
                    case"keyup":
                    case"mousedown":
                    case"mouseup":
                    case"paste":
                    case"pause":
                    case"play":
                    case"pointercancel":
                    case"pointerdown":
                    case"pointerup":
                    case"ratechange":
                    case"reset":
                    case"resize":
                    case"seeked":
                    case"submit":
                    case"toggle":
                    case"touchcancel":
                    case"touchend":
                    case"touchstart":
                    case"volumechange":
                    case"change":
                    case"selectionchange":
                    case"textInput":
                    case"compositionstart":
                    case"compositionend":
                    case"compositionupdate":
                    case"beforeblur":
                    case"afterblur":
                    case"beforeinput":
                    case"blur":
                    case"fullscreenchange":
                    case"focus":
                    case"hashchange":
                    case"popstate":
                    case"select":
                    case"selectstart":
                        return 2;
                    case"drag":
                    case"dragenter":
                    case"dragexit":
                    case"dragleave":
                    case"dragover":
                    case"mousemove":
                    case"mouseout":
                    case"mouseover":
                    case"pointermove":
                    case"pointerout":
                    case"pointerover":
                    case"scroll":
                    case"touchmove":
                    case"wheel":
                    case"mouseenter":
                    case"mouseleave":
                    case"pointerenter":
                    case"pointerleave":
                        return 8;
                    case"message":
                        switch (ue()) {
                            case ce:
                                return 2;
                            case de:
                                return 8;
                            case fe:
                            case pe:
                                return 32;
                            case me:
                                return 268435456;
                            default:
                                return 32
                        }
                    default:
                        return 32
                }
            }

            var Zd = !1, Jd = null, ef = null, tf = null, nf = new Map, rf = new Map, af = [],
                lf = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");

            function of(e, t) {
                switch (e) {
                    case"focusin":
                    case"focusout":
                        Jd = null;
                        break;
                    case"dragenter":
                    case"dragleave":
                        ef = null;
                        break;
                    case"mouseover":
                    case"mouseout":
                        tf = null;
                        break;
                    case"pointerover":
                    case"pointerout":
                        nf.delete(t.pointerId);
                        break;
                    case"gotpointercapture":
                    case"lostpointercapture":
                        rf.delete(t.pointerId)
                }
            }

            function sf(e, t, n, r, a, l) {
                return null === e || e.nativeEvent !== l ? (e = {
                    blockedOn: t,
                    domEventName: n,
                    eventSystemFlags: r,
                    nativeEvent: l,
                    targetContainers: [a]
                }, null !== t && (null !== (t = Qe(t)) && Gd(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, null !== a && -1 === t.indexOf(a) && t.push(a), e)
            }

            function uf(e) {
                var t = $e(e.target);
                if (null !== t) {
                    var n = D(t);
                    if (null !== n) if (13 === (t = n.tag)) {
                        if (null !== (t = R(n))) return e.blockedOn = t, void function (e, t) {
                            var n = H.p;
                            try {
                                return H.p = e, t()
                            } finally {
                                H.p = n
                            }
                        }(e.priority, (function () {
                            if (13 === n.tag) {
                                var e = Nu(), t = zr(n, e);
                                null !== t && Ou(t, 0, e), Hd(n, e)
                            }
                        }))
                    } else if (3 === t && n.stateNode.current.memoizedState.isDehydrated) return void (e.blockedOn = 3 === n.tag ? n.stateNode.containerInfo : null)
                }
                e.blockedOn = null
            }

            function cf(e) {
                if (null !== e.blockedOn) return !1;
                for (var t = e.targetContainers; 0 < t.length;) {
                    var n = Qd(e.nativeEvent);
                    if (null !== n) return null !== (t = Qe(n)) && Gd(t), e.blockedOn = n, !1;
                    var r = new (n = e.nativeEvent).constructor(n.type, n);
                    Nt = r, n.target.dispatchEvent(r), Nt = null, t.shift()
                }
                return !0
            }

            function df(e, t, n) {
                cf(e) && n.delete(t)
            }

            function ff() {
                Zd = !1, null !== Jd && cf(Jd) && (Jd = null), null !== ef && cf(ef) && (ef = null), null !== tf && cf(tf) && (tf = null), nf.forEach(df), rf.forEach(df)
            }

            function pf(e, t) {
                e.blockedOn === t && (e.blockedOn = null, Zd || (Zd = !0, r.unstable_scheduleCallback(r.unstable_NormalPriority, ff)))
            }

            var mf = null;

            function hf(e) {
                mf !== e && (mf = e, r.unstable_scheduleCallback(r.unstable_NormalPriority, (function () {
                    mf === e && (mf = null);
                    for (var t = 0; t < e.length; t += 3) {
                        var n = e[t], r = e[t + 1], a = e[t + 2];
                        if ("function" !== typeof r) {
                            if (null === Xd(r || n)) continue;
                            break
                        }
                        var l = Qe(n);
                        null !== l && (e.splice(t, 3), t -= 3, ci(l, {
                            pending: !0,
                            data: a,
                            method: n.method,
                            action: r
                        }, r, a))
                    }
                })))
            }

            function gf(e) {
                function t(t) {
                    return pf(t, e)
                }

                null !== Jd && pf(Jd, e), null !== ef && pf(ef, e), null !== tf && pf(tf, e), nf.forEach(t), rf.forEach(t);
                for (var n = 0; n < af.length; n++) {
                    var r = af[n];
                    r.blockedOn === e && (r.blockedOn = null)
                }
                for (; 0 < af.length && null === (n = af[0]).blockedOn;) uf(n), null === n.blockedOn && af.shift();
                if (null != (n = (e.ownerDocument || e).$$reactFormReplay)) for (r = 0; r < n.length; r += 3) {
                    var a = n[r], l = n[r + 1], i = a[Fe] || null;
                    if ("function" === typeof l) i || hf(n); else if (i) {
                        var o = null;
                        if (l && l.hasAttribute("formAction")) {
                            if (a = l, i = l[Fe] || null) o = i.formAction; else if (null !== Xd(a)) continue
                        } else o = i.action;
                        "function" === typeof o ? n[r + 1] = o : (n.splice(r, 3), r -= 3), hf(n)
                    }
                }
            }

            function vf(e) {
                this._internalRoot = e
            }

            function yf(e) {
                this._internalRoot = e
            }

            yf.prototype.render = vf.prototype.render = function (e) {
                var t = this._internalRoot;
                if (null === t) throw Error(i(409));
                Vd(t.current, Nu(), e, t, null, null)
            }, yf.prototype.unmount = vf.prototype.unmount = function () {
                var e = this._internalRoot;
                if (null !== e) {
                    this._internalRoot = null;
                    var t = e.containerInfo;
                    0 === e.tag && tc(), Vd(e.current, 2, null, e, null, null), Ru(), t[Ve] = null
                }
            }, yf.prototype.unstable_scheduleHydration = function (e) {
                if (e) {
                    var t = je();
                    e = {blockedOn: null, target: e, priority: t};
                    for (var n = 0; n < af.length && 0 !== t && t < af[n].priority; n++) ;
                    af.splice(n, 0, e), 0 === n && uf(e)
                }
            };
            var bf = a.version;
            if ("19.0.0" !== bf) throw Error(i(527, bf, "19.0.0"));
            H.findDOMNode = function (e) {
                var t = e._reactInternals;
                if (void 0 === t) {
                    if ("function" === typeof e.render) throw Error(i(188));
                    throw e = Object.keys(e).join(","), Error(i(268, e))
                }
                return e = function (e) {
                    var t = e.alternate;
                    if (!t) {
                        if (null === (t = D(e))) throw Error(i(188));
                        return t !== e ? null : e
                    }
                    for (var n = e, r = t; ;) {
                        var a = n.return;
                        if (null === a) break;
                        var l = a.alternate;
                        if (null === l) {
                            if (null !== (r = a.return)) {
                                n = r;
                                continue
                            }
                            break
                        }
                        if (a.child === l.child) {
                            for (l = a.child; l;) {
                                if (l === n) return F(a), e;
                                if (l === r) return F(a), t;
                                l = l.sibling
                            }
                            throw Error(i(188))
                        }
                        if (n.return !== r.return) n = a, r = l; else {
                            for (var o = !1, s = a.child; s;) {
                                if (s === n) {
                                    o = !0, n = a, r = l;
                                    break
                                }
                                if (s === r) {
                                    o = !0, r = a, n = l;
                                    break
                                }
                                s = s.sibling
                            }
                            if (!o) {
                                for (s = l.child; s;) {
                                    if (s === n) {
                                        o = !0, n = l, r = a;
                                        break
                                    }
                                    if (s === r) {
                                        o = !0, r = l, n = a;
                                        break
                                    }
                                    s = s.sibling
                                }
                                if (!o) throw Error(i(189))
                            }
                        }
                        if (n.alternate !== r) throw Error(i(190))
                    }
                    if (3 !== n.tag) throw Error(i(188));
                    return n.stateNode.current === n ? e : t
                }(t), e = null === (e = null !== e ? V(e) : null) ? null : e.stateNode
            };
            var wf = {
                bundleType: 0,
                version: "19.0.0",
                rendererPackageName: "react-dom",
                currentDispatcherRef: N,
                findFiberByHostInstance: $e,
                reconcilerVersion: "19.0.0"
            };
            if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
                var Sf = __REACT_DEVTOOLS_GLOBAL_HOOK__;
                if (!Sf.isDisabled && Sf.supportsFiber) try {
                    ve = Sf.inject(wf), ye = Sf
                } catch (xf) {
                }
            }
            t.createRoot = function (e, t) {
                if (!o(e)) throw Error(i(299));
                var n = !1, r = "", a = Ai, l = Ii, s = ji;
                return null !== t && void 0 !== t && (!0 === t.unstable_strictMode && (n = !0), void 0 !== t.identifierPrefix && (r = t.identifierPrefix), void 0 !== t.onUncaughtError && (a = t.onUncaughtError), void 0 !== t.onCaughtError && (l = t.onCaughtError), void 0 !== t.onRecoverableError && (s = t.onRecoverableError), void 0 !== t.unstable_transitionCallbacks && t.unstable_transitionCallbacks), t = Rd(e, 1, !1, null, 0, n, r, a, l, s, 0, null), e[Ve] = t.current, Oc(8 === e.nodeType ? e.parentNode : e), new vf(t)
            }, t.hydrateRoot = function (e, t, n) {
                if (!o(e)) throw Error(i(299));
                var r = !1, a = "", l = Ai, s = Ii, u = ji, c = null;
                return null !== n && void 0 !== n && (!0 === n.unstable_strictMode && (r = !0), void 0 !== n.identifierPrefix && (a = n.identifierPrefix), void 0 !== n.onUncaughtError && (l = n.onUncaughtError), void 0 !== n.onCaughtError && (s = n.onCaughtError), void 0 !== n.onRecoverableError && (u = n.onRecoverableError), void 0 !== n.unstable_transitionCallbacks && n.unstable_transitionCallbacks, void 0 !== n.formState && (c = n.formState)), (t = Rd(e, 1, !0, t, 0, r, a, l, s, u, 0, c)).context = Fd(null), n = t.current, (a = Lo(r = Nu())).callback = null, Oo(n, a, r), t.current.lanes = r, Oe(t, r), hc(t), e[Ve] = t.current, Oc(e), new yf(t)
            }, t.version = "19.0.0"
        }, 672: (e, t, n) => {
            var r = n(43);

            function a(e) {
                var t = "https://react.dev/errors/" + e;
                if (1 < arguments.length) {
                    t += "?args[]=" + encodeURIComponent(arguments[1]);
                    for (var n = 2; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n])
                }
                return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
            }

            function l() {
            }

            var i = {
                d: {
                    f: l, r: function () {
                        throw Error(a(522))
                    }, D: l, C: l, L: l, m: l, X: l, S: l, M: l
                }, p: 0, findDOMNode: null
            }, o = Symbol.for("react.portal");
            var s = r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;

            function u(e, t) {
                return "font" === e ? "" : "string" === typeof t ? "use-credentials" === t ? t : "" : void 0
            }

            t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = i, t.createPortal = function (e, t) {
                var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
                if (!t || 1 !== t.nodeType && 9 !== t.nodeType && 11 !== t.nodeType) throw Error(a(299));
                return function (e, t, n) {
                    var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
                    return {
                        $$typeof: o,
                        key: null == r ? null : "" + r,
                        children: e,
                        containerInfo: t,
                        implementation: n
                    }
                }(e, t, null, n)
            }, t.flushSync = function (e) {
                var t = s.T, n = i.p;
                try {
                    if (s.T = null, i.p = 2, e) return e()
                } finally {
                    s.T = t, i.p = n, i.d.f()
                }
            }, t.preconnect = function (e, t) {
                "string" === typeof e && (t ? t = "string" === typeof (t = t.crossOrigin) ? "use-credentials" === t ? t : "" : void 0 : t = null, i.d.C(e, t))
            }, t.prefetchDNS = function (e) {
                "string" === typeof e && i.d.D(e)
            }, t.preinit = function (e, t) {
                if ("string" === typeof e && t && "string" === typeof t.as) {
                    var n = t.as, r = u(n, t.crossOrigin), a = "string" === typeof t.integrity ? t.integrity : void 0,
                        l = "string" === typeof t.fetchPriority ? t.fetchPriority : void 0;
                    "style" === n ? i.d.S(e, "string" === typeof t.precedence ? t.precedence : void 0, {
                        crossOrigin: r,
                        integrity: a,
                        fetchPriority: l
                    }) : "script" === n && i.d.X(e, {
                        crossOrigin: r,
                        integrity: a,
                        fetchPriority: l,
                        nonce: "string" === typeof t.nonce ? t.nonce : void 0
                    })
                }
            }, t.preinitModule = function (e, t) {
                if ("string" === typeof e) if ("object" === typeof t && null !== t) {
                    if (null == t.as || "script" === t.as) {
                        var n = u(t.as, t.crossOrigin);
                        i.d.M(e, {
                            crossOrigin: n,
                            integrity: "string" === typeof t.integrity ? t.integrity : void 0,
                            nonce: "string" === typeof t.nonce ? t.nonce : void 0
                        })
                    }
                } else null == t && i.d.M(e)
            }, t.preload = function (e, t) {
                if ("string" === typeof e && "object" === typeof t && null !== t && "string" === typeof t.as) {
                    var n = t.as, r = u(n, t.crossOrigin);
                    i.d.L(e, n, {
                        crossOrigin: r,
                        integrity: "string" === typeof t.integrity ? t.integrity : void 0,
                        nonce: "string" === typeof t.nonce ? t.nonce : void 0,
                        type: "string" === typeof t.type ? t.type : void 0,
                        fetchPriority: "string" === typeof t.fetchPriority ? t.fetchPriority : void 0,
                        referrerPolicy: "string" === typeof t.referrerPolicy ? t.referrerPolicy : void 0,
                        imageSrcSet: "string" === typeof t.imageSrcSet ? t.imageSrcSet : void 0,
                        imageSizes: "string" === typeof t.imageSizes ? t.imageSizes : void 0,
                        media: "string" === typeof t.media ? t.media : void 0
                    })
                }
            }, t.preloadModule = function (e, t) {
                if ("string" === typeof e) if (t) {
                    var n = u(t.as, t.crossOrigin);
                    i.d.m(e, {
                        as: "string" === typeof t.as && "script" !== t.as ? t.as : void 0,
                        crossOrigin: n,
                        integrity: "string" === typeof t.integrity ? t.integrity : void 0
                    })
                } else i.d.m(e)
            }, t.requestFormReset = function (e) {
                i.d.r(e)
            }, t.unstable_batchedUpdates = function (e, t) {
                return e(t)
            }, t.useFormState = function (e, t, n) {
                return s.H.useFormState(e, t, n)
            }, t.useFormStatus = function () {
                return s.H.useHostTransitionStatus()
            }, t.version = "19.0.0"
        }, 391: (e, t, n) => {
            !function e() {
                if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE) try {
                    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)
                } catch (t) {
                    console.error(t)
                }
            }(), e.exports = n(4)
        }, 950: (e, t, n) => {
            !function e() {
                if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE) try {
                    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)
                } catch (t) {
                    console.error(t)
                }
            }(), e.exports = n(672)
        }, 799: (e, t) => {
            var n = Symbol.for("react.transitional.element");

            function r(e, t, r) {
                var a = null;
                if (void 0 !== r && (a = "" + r), void 0 !== t.key && (a = "" + t.key), "key" in t) for (var l in r = {}, t) "key" !== l && (r[l] = t[l]); else r = t;
                return t = r.ref, {$$typeof: n, type: e, key: a, ref: void 0 !== t ? t : null, props: r}
            }

            Symbol.for("react.fragment"), t.jsx = r, t.jsxs = r
        }, 288: (e, t) => {
            var n = Symbol.for("react.transitional.element"), r = Symbol.for("react.portal"),
                a = Symbol.for("react.fragment"), l = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"),
                o = Symbol.for("react.consumer"), s = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"),
                c = Symbol.for("react.suspense"), d = Symbol.for("react.memo"), f = Symbol.for("react.lazy"),
                p = Symbol.iterator;
            var m = {
                isMounted: function () {
                    return !1
                }, enqueueForceUpdate: function () {
                }, enqueueReplaceState: function () {
                }, enqueueSetState: function () {
                }
            }, h = Object.assign, g = {};

            function v(e, t, n) {
                this.props = e, this.context = t, this.refs = g, this.updater = n || m
            }

            function y() {
            }

            function b(e, t, n) {
                this.props = e, this.context = t, this.refs = g, this.updater = n || m
            }

            v.prototype.isReactComponent = {}, v.prototype.setState = function (e, t) {
                if ("object" !== typeof e && "function" !== typeof e && null != e) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
                this.updater.enqueueSetState(this, e, t, "setState")
            }, v.prototype.forceUpdate = function (e) {
                this.updater.enqueueForceUpdate(this, e, "forceUpdate")
            }, y.prototype = v.prototype;
            var w = b.prototype = new y;
            w.constructor = b, h(w, v.prototype), w.isPureReactComponent = !0;
            var S = Array.isArray, k = {H: null, A: null, T: null, S: null}, x = Object.prototype.hasOwnProperty;

            function E(e, t, r, a, l, i) {
                return r = i.ref, {$$typeof: n, type: e, key: t, ref: void 0 !== r ? r : null, props: i}
            }

            function _(e) {
                return "object" === typeof e && null !== e && e.$$typeof === n
            }

            var T = /\/+/g;

            function C(e, t) {
                return "object" === typeof e && null !== e && null != e.key ? function (e) {
                    var t = {"=": "=0", ":": "=2"};
                    return "$" + e.replace(/[=:]/g, (function (e) {
                        return t[e]
                    }))
                }("" + e.key) : t.toString(36)
            }

            function P() {
            }

            function z(e, t, a, l, i) {
                var o = typeof e;
                "undefined" !== o && "boolean" !== o || (e = null);
                var s, u, c = !1;
                if (null === e) c = !0; else switch (o) {
                    case"bigint":
                    case"string":
                    case"number":
                        c = !0;
                        break;
                    case"object":
                        switch (e.$$typeof) {
                            case n:
                            case r:
                                c = !0;
                                break;
                            case f:
                                return z((c = e._init)(e._payload), t, a, l, i)
                        }
                }
                if (c) return i = i(e), c = "" === l ? "." + C(e, 0) : l, S(i) ? (a = "", null != c && (a = c.replace(T, "$&/") + "/"), z(i, t, a, "", (function (e) {
                    return e
                }))) : null != i && (_(i) && (s = i, u = a + (null == i.key || e && e.key === i.key ? "" : ("" + i.key).replace(T, "$&/") + "/") + c, i = E(s.type, u, void 0, 0, 0, s.props)), t.push(i)), 1;
                c = 0;
                var d, m = "" === l ? "." : l + ":";
                if (S(e)) for (var h = 0; h < e.length; h++) c += z(l = e[h], t, a, o = m + C(l, h), i); else if ("function" === typeof (h = null === (d = e) || "object" !== typeof d ? null : "function" === typeof (d = p && d[p] || d["@@iterator"]) ? d : null)) for (e = h.call(e), h = 0; !(l = e.next()).done;) c += z(l = l.value, t, a, o = m + C(l, h++), i); else if ("object" === o) {
                    if ("function" === typeof e.then) return z(function (e) {
                        switch (e.status) {
                            case"fulfilled":
                                return e.value;
                            case"rejected":
                                throw e.reason;
                            default:
                                switch ("string" === typeof e.status ? e.then(P, P) : (e.status = "pending", e.then((function (t) {
                                    "pending" === e.status && (e.status = "fulfilled", e.value = t)
                                }), (function (t) {
                                    "pending" === e.status && (e.status = "rejected", e.reason = t)
                                }))), e.status) {
                                    case"fulfilled":
                                        return e.value;
                                    case"rejected":
                                        throw e.reason
                                }
                        }
                        throw e
                    }(e), t, a, l, i);
                    throw t = String(e), Error("Objects are not valid as a React child (found: " + ("[object Object]" === t ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.")
                }
                return c
            }

            function N(e, t, n) {
                if (null == e) return e;
                var r = [], a = 0;
                return z(e, r, "", "", (function (e) {
                    return t.call(n, e, a++)
                })), r
            }

            function L(e) {
                if (-1 === e._status) {
                    var t = e._result;
                    (t = t()).then((function (t) {
                        0 !== e._status && -1 !== e._status || (e._status = 1, e._result = t)
                    }), (function (t) {
                        0 !== e._status && -1 !== e._status || (e._status = 2, e._result = t)
                    })), -1 === e._status && (e._status = 0, e._result = t)
                }
                if (1 === e._status) return e._result.default;
                throw e._result
            }

            var O = "function" === typeof reportError ? reportError : function (e) {
                if ("object" === typeof window && "function" === typeof window.ErrorEvent) {
                    var t = new window.ErrorEvent("error", {
                        bubbles: !0,
                        cancelable: !0,
                        message: "object" === typeof e && null !== e && "string" === typeof e.message ? String(e.message) : String(e),
                        error: e
                    });
                    if (!window.dispatchEvent(t)) return
                } else if ("object" === typeof process && "function" === typeof process.emit) return void process.emit("uncaughtException", e);
                console.error(e)
            };

            function M() {
            }

            t.Children = {
                map: N, forEach: function (e, t, n) {
                    N(e, (function () {
                        t.apply(this, arguments)
                    }), n)
                }, count: function (e) {
                    var t = 0;
                    return N(e, (function () {
                        t++
                    })), t
                }, toArray: function (e) {
                    return N(e, (function (e) {
                        return e
                    })) || []
                }, only: function (e) {
                    if (!_(e)) throw Error("React.Children.only expected to receive a single React element child.");
                    return e
                }
            }, t.Component = v, t.Fragment = a, t.Profiler = i, t.PureComponent = b, t.StrictMode = l, t.Suspense = c, t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = k, t.act = function () {
                throw Error("act(...) is not supported in production builds of React.")
            }, t.cache = function (e) {
                return function () {
                    return e.apply(null, arguments)
                }
            }, t.cloneElement = function (e, t, n) {
                if (null === e || void 0 === e) throw Error("The argument must be a React element, but you passed " + e + ".");
                var r = h({}, e.props), a = e.key;
                if (null != t) for (l in void 0 !== t.ref && void 0, void 0 !== t.key && (a = "" + t.key), t) !x.call(t, l) || "key" === l || "__self" === l || "__source" === l || "ref" === l && void 0 === t.ref || (r[l] = t[l]);
                var l = arguments.length - 2;
                if (1 === l) r.children = n; else if (1 < l) {
                    for (var i = Array(l), o = 0; o < l; o++) i[o] = arguments[o + 2];
                    r.children = i
                }
                return E(e.type, a, void 0, 0, 0, r)
            }, t.createContext = function (e) {
                return (e = {
                    $$typeof: s,
                    _currentValue: e,
                    _currentValue2: e,
                    _threadCount: 0,
                    Provider: null,
                    Consumer: null
                }).Provider = e, e.Consumer = {$$typeof: o, _context: e}, e
            }, t.createElement = function (e, t, n) {
                var r, a = {}, l = null;
                if (null != t) for (r in void 0 !== t.key && (l = "" + t.key), t) x.call(t, r) && "key" !== r && "__self" !== r && "__source" !== r && (a[r] = t[r]);
                var i = arguments.length - 2;
                if (1 === i) a.children = n; else if (1 < i) {
                    for (var o = Array(i), s = 0; s < i; s++) o[s] = arguments[s + 2];
                    a.children = o
                }
                if (e && e.defaultProps) for (r in i = e.defaultProps) void 0 === a[r] && (a[r] = i[r]);
                return E(e, l, void 0, 0, 0, a)
            }, t.createRef = function () {
                return {current: null}
            }, t.forwardRef = function (e) {
                return {$$typeof: u, render: e}
            }, t.isValidElement = _, t.lazy = function (e) {
                return {$$typeof: f, _payload: {_status: -1, _result: e}, _init: L}
            }, t.memo = function (e, t) {
                return {$$typeof: d, type: e, compare: void 0 === t ? null : t}
            }, t.startTransition = function (e) {
                var t = k.T, n = {};
                k.T = n;
                try {
                    var r = e(), a = k.S;
                    null !== a && a(n, r), "object" === typeof r && null !== r && "function" === typeof r.then && r.then(M, O)
                } catch (l) {
                    O(l)
                } finally {
                    k.T = t
                }
            }, t.unstable_useCacheRefresh = function () {
                return k.H.useCacheRefresh()
            }, t.use = function (e) {
                return k.H.use(e)
            }, t.useActionState = function (e, t, n) {
                return k.H.useActionState(e, t, n)
            }, t.useCallback = function (e, t) {
                return k.H.useCallback(e, t)
            }, t.useContext = function (e) {
                return k.H.useContext(e)
            }, t.useDebugValue = function () {
            }, t.useDeferredValue = function (e, t) {
                return k.H.useDeferredValue(e, t)
            }, t.useEffect = function (e, t) {
                return k.H.useEffect(e, t)
            }, t.useId = function () {
                return k.H.useId()
            }, t.useImperativeHandle = function (e, t, n) {
                return k.H.useImperativeHandle(e, t, n)
            }, t.useInsertionEffect = function (e, t) {
                return k.H.useInsertionEffect(e, t)
            }, t.useLayoutEffect = function (e, t) {
                return k.H.useLayoutEffect(e, t)
            }, t.useMemo = function (e, t) {
                return k.H.useMemo(e, t)
            }, t.useOptimistic = function (e, t) {
                return k.H.useOptimistic(e, t)
            }, t.useReducer = function (e, t, n) {
                return k.H.useReducer(e, t, n)
            }, t.useRef = function (e) {
                return k.H.useRef(e)
            }, t.useState = function (e) {
                return k.H.useState(e)
            }, t.useSyncExternalStore = function (e, t, n) {
                return k.H.useSyncExternalStore(e, t, n)
            }, t.useTransition = function () {
                return k.H.useTransition()
            }, t.version = "19.0.0"
        }, 43: (e, t, n) => {
            e.exports = n(288)
        }, 579: (e, t, n) => {
            e.exports = n(799)
        }, 896: (e, t) => {
            function n(e, t) {
                var n = e.length;
                e.push(t);
                e:for (; 0 < n;) {
                    var r = n - 1 >>> 1, a = e[r];
                    if (!(0 < l(a, t))) break e;
                    e[r] = t, e[n] = a, n = r
                }
            }

            function r(e) {
                return 0 === e.length ? null : e[0]
            }

            function a(e) {
                if (0 === e.length) return null;
                var t = e[0], n = e.pop();
                if (n !== t) {
                    e[0] = n;
                    e:for (var r = 0, a = e.length, i = a >>> 1; r < i;) {
                        var o = 2 * (r + 1) - 1, s = e[o], u = o + 1, c = e[u];
                        if (0 > l(s, n)) u < a && 0 > l(c, s) ? (e[r] = c, e[u] = n, r = u) : (e[r] = s, e[o] = n, r = o); else {
                            if (!(u < a && 0 > l(c, n))) break e;
                            e[r] = c, e[u] = n, r = u
                        }
                    }
                }
                return t
            }

            function l(e, t) {
                var n = e.sortIndex - t.sortIndex;
                return 0 !== n ? n : e.id - t.id
            }

            if (t.unstable_now = void 0, "object" === typeof performance && "function" === typeof performance.now) {
                var i = performance;
                t.unstable_now = function () {
                    return i.now()
                }
            } else {
                var o = Date, s = o.now();
                t.unstable_now = function () {
                    return o.now() - s
                }
            }
            var u = [], c = [], d = 1, f = null, p = 3, m = !1, h = !1, g = !1,
                v = "function" === typeof setTimeout ? setTimeout : null,
                y = "function" === typeof clearTimeout ? clearTimeout : null,
                b = "undefined" !== typeof setImmediate ? setImmediate : null;

            function w(e) {
                for (var t = r(c); null !== t;) {
                    if (null === t.callback) a(c); else {
                        if (!(t.startTime <= e)) break;
                        a(c), t.sortIndex = t.expirationTime, n(u, t)
                    }
                    t = r(c)
                }
            }

            function S(e) {
                if (g = !1, w(e), !h) if (null !== r(u)) h = !0, L(); else {
                    var t = r(c);
                    null !== t && O(S, t.startTime - e)
                }
            }

            var k, x = !1, E = -1, _ = 5, T = -1;

            function C() {
                return !(t.unstable_now() - T < _)
            }

            function P() {
                if (x) {
                    var e = t.unstable_now();
                    T = e;
                    var n = !0;
                    try {
                        e:{
                            h = !1, g && (g = !1, y(E), E = -1), m = !0;
                            var l = p;
                            try {
                                t:{
                                    for (w(e), f = r(u); null !== f && !(f.expirationTime > e && C());) {
                                        var i = f.callback;
                                        if ("function" === typeof i) {
                                            f.callback = null, p = f.priorityLevel;
                                            var o = i(f.expirationTime <= e);
                                            if (e = t.unstable_now(), "function" === typeof o) {
                                                f.callback = o, w(e), n = !0;
                                                break t
                                            }
                                            f === r(u) && a(u), w(e)
                                        } else a(u);
                                        f = r(u)
                                    }
                                    if (null !== f) n = !0; else {
                                        var s = r(c);
                                        null !== s && O(S, s.startTime - e), n = !1
                                    }
                                }
                                break e
                            } finally {
                                f = null, p = l, m = !1
                            }
                            n = void 0
                        }
                    } finally {
                        n ? k() : x = !1
                    }
                }
            }

            if ("function" === typeof b) k = function () {
                b(P)
            }; else if ("undefined" !== typeof MessageChannel) {
                var z = new MessageChannel, N = z.port2;
                z.port1.onmessage = P, k = function () {
                    N.postMessage(null)
                }
            } else k = function () {
                v(P, 0)
            };

            function L() {
                x || (x = !0, k())
            }

            function O(e, n) {
                E = v((function () {
                    e(t.unstable_now())
                }), n)
            }

            t.unstable_IdlePriority = 5, t.unstable_ImmediatePriority = 1, t.unstable_LowPriority = 4, t.unstable_NormalPriority = 3, t.unstable_Profiling = null, t.unstable_UserBlockingPriority = 2, t.unstable_cancelCallback = function (e) {
                e.callback = null
            }, t.unstable_continueExecution = function () {
                h || m || (h = !0, L())
            }, t.unstable_forceFrameRate = function (e) {
                0 > e || 125 < e ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : _ = 0 < e ? Math.floor(1e3 / e) : 5
            }, t.unstable_getCurrentPriorityLevel = function () {
                return p
            }, t.unstable_getFirstCallbackNode = function () {
                return r(u)
            }, t.unstable_next = function (e) {
                switch (p) {
                    case 1:
                    case 2:
                    case 3:
                        var t = 3;
                        break;
                    default:
                        t = p
                }
                var n = p;
                p = t;
                try {
                    return e()
                } finally {
                    p = n
                }
            }, t.unstable_pauseExecution = function () {
            }, t.unstable_requestPaint = function () {
            }, t.unstable_runWithPriority = function (e, t) {
                switch (e) {
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                        break;
                    default:
                        e = 3
                }
                var n = p;
                p = e;
                try {
                    return t()
                } finally {
                    p = n
                }
            }, t.unstable_scheduleCallback = function (e, a, l) {
                var i = t.unstable_now();
                switch ("object" === typeof l && null !== l ? l = "number" === typeof (l = l.delay) && 0 < l ? i + l : i : l = i, e) {
                    case 1:
                        var o = -1;
                        break;
                    case 2:
                        o = 250;
                        break;
                    case 5:
                        o = 1073741823;
                        break;
                    case 4:
                        o = 1e4;
                        break;
                    default:
                        o = 5e3
                }
                return e = {
                    id: d++,
                    callback: a,
                    priorityLevel: e,
                    startTime: l,
                    expirationTime: o = l + o,
                    sortIndex: -1
                }, l > i ? (e.sortIndex = l, n(c, e), null === r(u) && e === r(c) && (g ? (y(E), E = -1) : g = !0, O(S, l - i))) : (e.sortIndex = o, n(u, e), h || m || (h = !0, L())), e
            }, t.unstable_shouldYield = C, t.unstable_wrapCallback = function (e) {
                var t = p;
                return function () {
                    var n = p;
                    p = t;
                    try {
                        return e.apply(this, arguments)
                    } finally {
                        p = n
                    }
                }
            }
        }, 853: (e, t, n) => {
            e.exports = n(896)
        }
    }, t = {};

    function n(r) {
        var a = t[r];
        if (void 0 !== a) return a.exports;
        var l = t[r] = {exports: {}};
        return e[r](l, l.exports, n), l.exports
    }

    var r = n(43), a = n(391), l = n(579);

    function i() {
        return (0, l.jsxs)("svg", {
            width: "1440",
            height: "100",
            viewBox: "0 0 1440 100",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [(0, l.jsx)("g", {
                "clip-path": "url(#clip0_209_190)",
                children: (0, l.jsx)("g", {
                    filter: "url(#filter0_b_209_190)",
                    children: (0, l.jsx)("path", {
                        d: "M0 0C0 0 127 29.0107 360 29.0107C593 29.0107 675 29.0107 675 29.0107C687 29.0108 684 70.5931 720 70.5931C756 70.5931 749.5 29.0107 765 29.0107C765 29.0107 855 29.0107 1080 29.0107C1305 29.0107 1440 0 1440 0V648H0V0Z",
                        fill: "#FFE6EC"
                    })
                })
            }), (0, l.jsxs)("defs", {
                children: [(0, l.jsxs)("filter", {
                    id: "filter0_b_209_190",
                    x: "-64",
                    y: "-64",
                    width: "1568",
                    height: "776",
                    filterUnits: "userSpaceOnUse",
                    "color-interpolation-filters": "sRGB",
                    children: [(0, l.jsx)("feFlood", {
                        "flood-opacity": "0",
                        result: "BackgroundImageFix"
                    }), (0, l.jsx)("feGaussianBlur", {
                        in: "BackgroundImageFix",
                        stdDeviation: "32"
                    }), (0, l.jsx)("feComposite", {
                        in2: "SourceAlpha",
                        operator: "in",
                        result: "effect1_backgroundBlur_209_190"
                    }), (0, l.jsx)("feBlend", {
                        mode: "normal",
                        in: "SourceGraphic",
                        in2: "effect1_backgroundBlur_209_190",
                        result: "shape"
                    })]
                }), (0, l.jsx)("clipPath", {
                    id: "clip0_209_190",
                    children: (0, l.jsx)("rect", {width: "1440", height: "100", fill: "white"})
                })]
            })]
        })
    }

function o() {
    return (0, l.jsxs)("div", {
        className: "home-header",
        children: [
            (0, l.jsx)("div", { className: "home-header__gradient" }),
            (0, l.jsxs)("div", {
                className: "home-header__topbar",
                style: { display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px" },
                children: [
                    (0, l.jsx)("img", { src: "/images/home/logo.png", alt: "" }),
                    (0, l.jsx)("button", {
                        className: "home-header__topbar__button",
                        onClick: () => window.location.href = "https://t.me/nadiaa_kursbot?start=start",
                        style: { padding: "10px 20px", backgroundColor: "#e4097f", color: "white", border: "none", borderRadius: "5px", cursor: "pointer", fontSize: "16px", fontWeight: "bold", position: "absolute", left: "50%", transform: "translateX(-50%)" },
                        children: "Ro'yxatdan o'tish"
                    }),
                    (0, l.jsx)("div", { className: "home-header__topbar__start", children: "START" })
                ]
            }),
            (0, l.jsxs)("div", {
                className: "home-header__elements",
                children: [
                    (0, l.jsx)("img", { className: "home-header__elements__top", src: "/images/home/top-element.png", alt: "" }),
                    (0, l.jsx)("img", { className: "home-header__elements__bottom", src: "/images/home/bottom-element.png", alt: "" })
                ]
            }),
            (0, l.jsxs)("div", {
                className: "home-header__avatar",
                children: [
                    (0, l.jsx)("img", { className: "home-header__avatar__bg", src: "/images/home/avatar-bg.png", alt: "" }),
                    (0, l.jsxs)("div", {
                        className: "home-header__avatar__itself",
                        children: [
                            (0, l.jsx)("img", { src: "/images/home/avatar.png", alt: "" }),
                            (0, l.jsxs)("div", {
                                className: "home-header__talk",
                                children: ["Bu yo‘lda sizga bardavom ", (0, l.jsx)("br", {}), "bo‘lishda yordam beraman!"]
                            })
                        ]
                    })
                ]
            }),
            (0, l.jsxs)("div", {
                className: "home-header__content",
                children: [
                    (0, l.jsx)("div", { className: "home-header__content__category", children: "Terapevtik kurs" }),
                    (0, l.jsx)("div", { className: "home-header__content__title_1", children: "Siz Baxtli" }),
                    (0, l.jsx)("div", { className: "home-header__content__title_2", children: "bo‘lasiz" }),
                    (0, l.jsx)("div", { className: "home-header__content__separator" }),
                    (0, l.jsx)("div", {
                        className: "home-header__content__desc",
                        children: "Haqiqiy baxt topish uchun uzoq vaqt yo‘qotishingiz mumkin. Lekin haqiqiy baxt kaliti qo‘lingizda ekanligini tushunganingizda hayotingiz 180 darajaga o‘zgaradi"
                    }),
                    (0, l.jsx)("iframe", {
                        width: "300",
                        height: "200",
                        src: "https://www.youtube.com/embed/TrsF7KAOwFA",
                        title: "YouTube video player",
                        frameBorder: "0",
                        allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                        allowFullScreen: !0,
                        className: "home-header__video"
                    })
                ]
            }),
            (0, l.jsx)("div", { className: "home-header__separator", children: (0, l.jsx)(i, {}) })
        ]
    })
}


    function s() {
        return (0, l.jsxs)("div", {
            className: "home-info",
            children: [(0, l.jsx)("div", {
                className: "home-title",
                children: "Bu kurs siz uchun agarda:"
            }), (0, l.jsx)("div", {
                className: "home-info__content",
                children: [{
                    number: "01",
                    text: "<red>O'ZINGIZGA</red> bo'lgan <red>ISHONCHNI</red> yo'qotib qo'ygan bo'lsangiz va hech narsaga qiziqish va xohish bo'lmasa"
                }, {
                    number: "02",
                    text: "<red>TURMUSH QURISHDA</red> <br/> qo'rquv va yaqinlik qo'rquvlari sizni qiynasa"
                }, {
                    number: "03",
                    text: "<red>TEZ-TEZ TUSHKUNLIKKA TUSHIB</red> qolasiz va hayotingizga ko'ngilsiz hodisalarni ko'payishi"
                }, {number: "04", text: "<red>JINSIY HAYOTINGIZNI</red> sifatini o'zgartirmoqchisiz"}, {
                    number: "05",
                    text: "<red>ORGAZM</red> nimaligini bilmaysiz va ko'zlari yonib turadiganz"
                }].map(((e, t) => (0, l.jsxs)("div", {
                    className: "home-info__item",
                    children: [(0, l.jsx)("div", {
                        className: "home-info__item__number",
                        children: e.number
                    }), (0, l.jsx)("div", {
                        className: "home-info__item__text",
                        dangerouslySetInnerHTML: {__html: e.text}
                    })]
                }, t)))
            })]
        })
    }

    function u() {
        return (0, l.jsxs)("div", {
            className: "home-questions",
            children: [(0, l.jsx)("div", {className: "home-questions__gradient"}), (0, l.jsxs)("div", {
                className: "home-questions__left",
                children: [(0, l.jsx)("img", {
                    className: "home-questions__left__image",
                    src: "/images/home/avatar_2.png",
                    alt: ""
                }), (0, l.jsxs)("div", {
                    className: "home-questions__left__text",
                    children: ["Baxtli bo\u2019lish sirlari", (0, l.jsx)("br", {}), "va xotirjamlik"]
                })]
            }), (0, l.jsxs)("div", {
                className: "home-questions__right",
                children: [(0, l.jsx)("div", {
                    className: "home-title",
                    children: "Kurs sizga nima beradi?"
                }), (0, l.jsx)("div", {
                    className: "home-questions__content",
                    children: [{text: "1. O'zinga ishonch"}, {text: "2. Xaqiqiy baxtga erishish"}, {text: "3. Lazzatli xayotni boshlanishi"}, {text: "4. Ideal ayol bo'lish sirlari"}, {text: "5. Qo'rquv va cheklovlardan xalos bo'lish"}].map(((e, t) => (0, l.jsx)("div", {
                        className: "home-questions__item",
                        children: e.text
                    }, t)))
                })]
            })]
        })
    }

    function c() {
        return (0, l.jsxs)("div", {
            className: "home-deadline",
            children: [(0, l.jsx)("div", {className: "home-deadline__gradient"}), (0, l.jsxs)("div", {
                className: "home-title",
                style: {lineHeight: "130%"},
                children: [""]
            }), (0, l.jsxs)("div", {
                className: "home-deadline__content",
                children: [(0, l.jsx)("div", {
                    className: "home-deadline__content__title",
                    children: "SHOSHILIB QOLING!"
                }), (0, l.jsx)("div", {
                    className: "home-deadline__content__description",
                    children: "To'liq maʼlumot NadiaSchool adminiga yozing"
                })]
            })]
        })
    }

    function d(e) {
        return d = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }, d(e)
    }

    function f(e) {
        var t = function (e, t) {
            if ("object" != d(e) || !e) return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
                var r = n.call(e, t || "default");
                if ("object" != d(r)) return r;
                throw new TypeError("@@toPrimitive must return a primitive value.")
            }
            return ("string" === t ? String : Number)(e)
        }(e, "string");
        return "symbol" == d(t) ? t : t + ""
    }

    function p(e, t, n) {
        return (t = f(t)) in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function m(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function h(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? m(Object(n), !0).forEach((function (t) {
                p(e, t, n[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : m(Object(n)).forEach((function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }))
        }
        return e
    }

    function g(e, t) {
        if (null == e) return {};
        var n, r, a = function (e, t) {
            if (null == e) return {};
            var n = {};
            for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
                if (t.includes(r)) continue;
                n[r] = e[r]
            }
            return n
        }(e, t);
        if (Object.getOwnPropertySymbols) {
            var l = Object.getOwnPropertySymbols(e);
            for (r = 0; r < l.length; r++) n = l[r], t.includes(n) || {}.propertyIsEnumerable.call(e, n) && (a[n] = e[n])
        }
        return a
    }

    function v(e) {
        return null !== e && "object" === typeof e && "constructor" in e && e.constructor === Object
    }

    function y(e, t) {
        void 0 === e && (e = {}), void 0 === t && (t = {}), Object.keys(t).forEach((n => {
            "undefined" === typeof e[n] ? e[n] = t[n] : v(t[n]) && v(e[n]) && Object.keys(t[n]).length > 0 && y(e[n], t[n])
        }))
    }

    const b = {
        body: {},
        addEventListener() {
        },
        removeEventListener() {
        },
        activeElement: {
            blur() {
            }, nodeName: ""
        },
        querySelector: () => null,
        querySelectorAll: () => [],
        getElementById: () => null,
        createEvent: () => ({
            initEvent() {
            }
        }),
        createElement: () => ({
            children: [], childNodes: [], style: {}, setAttribute() {
            }, getElementsByTagName: () => []
        }),
        createElementNS: () => ({}),
        importNode: () => null,
        location: {hash: "", host: "", hostname: "", href: "", origin: "", pathname: "", protocol: "", search: ""}
    };

    function w() {
        const e = "undefined" !== typeof document ? document : {};
        return y(e, b), e
    }

    const S = {
        document: b,
        navigator: {userAgent: ""},
        location: {hash: "", host: "", hostname: "", href: "", origin: "", pathname: "", protocol: "", search: ""},
        history: {
            replaceState() {
            }, pushState() {
            }, go() {
            }, back() {
            }
        },
        CustomEvent: function () {
            return this
        },
        addEventListener() {
        },
        removeEventListener() {
        },
        getComputedStyle: () => ({getPropertyValue: () => ""}),
        Image() {
        },
        Date() {
        },
        screen: {},
        setTimeout() {
        },
        clearTimeout() {
        },
        matchMedia: () => ({}),
        requestAnimationFrame: e => "undefined" === typeof setTimeout ? (e(), null) : setTimeout(e, 0),
        cancelAnimationFrame(e) {
            "undefined" !== typeof setTimeout && clearTimeout(e)
        }
    };

    function k() {
        const e = "undefined" !== typeof window ? window : {};
        return y(e, S), e
    }

    function x(e, t) {
        return void 0 === t && (t = 0), setTimeout(e, t)
    }

    function E() {
        return Date.now()
    }

    function _(e, t) {
        void 0 === t && (t = "x");
        const n = k();
        let r, a, l;
        const i = function (e) {
            const t = k();
            let n;
            return t.getComputedStyle && (n = t.getComputedStyle(e, null)), !n && e.currentStyle && (n = e.currentStyle), n || (n = e.style), n
        }(e);
        return n.WebKitCSSMatrix ? (a = i.transform || i.webkitTransform, a.split(",").length > 6 && (a = a.split(", ").map((e => e.replace(",", "."))).join(", ")), l = new n.WebKitCSSMatrix("none" === a ? "" : a)) : (l = i.MozTransform || i.OTransform || i.MsTransform || i.msTransform || i.transform || i.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), r = l.toString().split(",")), "x" === t && (a = n.WebKitCSSMatrix ? l.m41 : 16 === r.length ? parseFloat(r[12]) : parseFloat(r[4])), "y" === t && (a = n.WebKitCSSMatrix ? l.m42 : 16 === r.length ? parseFloat(r[13]) : parseFloat(r[5])), a || 0
    }

    function T(e) {
        return "object" === typeof e && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1)
    }

    function C() {
        const e = Object(arguments.length <= 0 ? void 0 : arguments[0]), t = ["__proto__", "constructor", "prototype"];
        for (let r = 1; r < arguments.length; r += 1) {
            const a = r < 0 || arguments.length <= r ? void 0 : arguments[r];
            if (void 0 !== a && null !== a && (n = a, !("undefined" !== typeof window && "undefined" !== typeof window.HTMLElement ? n instanceof HTMLElement : n && (1 === n.nodeType || 11 === n.nodeType)))) {
                const n = Object.keys(Object(a)).filter((e => t.indexOf(e) < 0));
                for (let t = 0, r = n.length; t < r; t += 1) {
                    const r = n[t], l = Object.getOwnPropertyDescriptor(a, r);
                    void 0 !== l && l.enumerable && (T(e[r]) && T(a[r]) ? a[r].__swiper__ ? e[r] = a[r] : C(e[r], a[r]) : !T(e[r]) && T(a[r]) ? (e[r] = {}, a[r].__swiper__ ? e[r] = a[r] : C(e[r], a[r])) : e[r] = a[r])
                }
            }
        }
        var n;
        return e
    }

    function P(e, t, n) {
        e.style.setProperty(t, n)
    }

    function z(e) {
        let {swiper: t, targetPosition: n, side: r} = e;
        const a = k(), l = -t.translate;
        let i, o = null;
        const s = t.params.speed;
        t.wrapperEl.style.scrollSnapType = "none", a.cancelAnimationFrame(t.cssModeFrameID);
        const u = n > l ? "next" : "prev", c = (e, t) => "next" === u && e >= t || "prev" === u && e <= t, d = () => {
            i = (new Date).getTime(), null === o && (o = i);
            const e = Math.max(Math.min((i - o) / s, 1), 0), u = .5 - Math.cos(e * Math.PI) / 2;
            let f = l + u * (n - l);
            if (c(f, n) && (f = n), t.wrapperEl.scrollTo({[r]: f}), c(f, n)) return t.wrapperEl.style.overflow = "hidden", t.wrapperEl.style.scrollSnapType = "", setTimeout((() => {
                t.wrapperEl.style.overflow = "", t.wrapperEl.scrollTo({[r]: f})
            })), void a.cancelAnimationFrame(t.cssModeFrameID);
            t.cssModeFrameID = a.requestAnimationFrame(d)
        };
        d()
    }

    function N(e, t) {
        void 0 === t && (t = "");
        const n = [...e.children];
        return e instanceof HTMLSlotElement && n.push(...e.assignedElements()), t ? n.filter((e => e.matches(t))) : n
    }

    function L(e) {
        try {
            return void console.warn(e)
        } catch (t) {
        }
    }

    function O(e, t) {
        void 0 === t && (t = []);
        const n = document.createElement(e);
        return n.classList.add(...Array.isArray(t) ? t : function (e) {
            return void 0 === e && (e = ""), e.trim().split(" ").filter((e => !!e.trim()))
        }(t)), n
    }

    function M(e, t) {
        return k().getComputedStyle(e, null).getPropertyValue(t)
    }

    function A(e) {
        let t, n = e;
        if (n) {
            for (t = 0; null !== (n = n.previousSibling);) 1 === n.nodeType && (t += 1);
            return t
        }
    }

    function I(e, t, n) {
        const r = k();
        return n ? e["width" === t ? "offsetWidth" : "offsetHeight"] + parseFloat(r.getComputedStyle(e, null).getPropertyValue("width" === t ? "margin-right" : "margin-top")) + parseFloat(r.getComputedStyle(e, null).getPropertyValue("width" === t ? "margin-left" : "margin-bottom")) : e.offsetWidth
    }

    let j, D, R;

    function F() {
        return j || (j = function () {
            const e = k(), t = w();
            return {
                smoothScroll: t.documentElement && t.documentElement.style && "scrollBehavior" in t.documentElement.style,
                touch: !!("ontouchstart" in e || e.DocumentTouch && t instanceof e.DocumentTouch)
            }
        }()), j
    }

    function V(e) {
        return void 0 === e && (e = {}), D || (D = function (e) {
            let {userAgent: t} = void 0 === e ? {} : e;
            const n = F(), r = k(), a = r.navigator.platform, l = t || r.navigator.userAgent,
                i = {ios: !1, android: !1}, o = r.screen.width, s = r.screen.height,
                u = l.match(/(Android);?[\s\/]+([\d.]+)?/);
            let c = l.match(/(iPad).*OS\s([\d_]+)/);
            const d = l.match(/(iPod)(.*OS\s([\d_]+))?/), f = !c && l.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
                p = "Win32" === a;
            let m = "MacIntel" === a;
            return !c && m && n.touch && ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"].indexOf("".concat(o, "x").concat(s)) >= 0 && (c = l.match(/(Version)\/([\d.]+)/), c || (c = [0, 1, "13_0_0"]), m = !1), u && !p && (i.os = "android", i.android = !0), (c || f || d) && (i.os = "ios", i.ios = !0), i
        }(e)), D
    }

    function B() {
        return R || (R = function () {
            const e = k(), t = V();
            let n = !1;

            function r() {
                const t = e.navigator.userAgent.toLowerCase();
                return t.indexOf("safari") >= 0 && t.indexOf("chrome") < 0 && t.indexOf("android") < 0
            }

            if (r()) {
                const t = String(e.navigator.userAgent);
                if (t.includes("Version/")) {
                    const [e, r] = t.split("Version/")[1].split(" ")[0].split(".").map((e => Number(e)));
                    n = e < 16 || 16 === e && r < 2
                }
            }
            const a = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent), l = r();
            return {isSafari: n || l, needPerspectiveFix: n, need3dFix: l || a && t.ios, isWebView: a}
        }()), R
    }

    var H = {
        on(e, t, n) {
            const r = this;
            if (!r.eventsListeners || r.destroyed) return r;
            if ("function" !== typeof t) return r;
            const a = n ? "unshift" : "push";
            return e.split(" ").forEach((e => {
                r.eventsListeners[e] || (r.eventsListeners[e] = []), r.eventsListeners[e][a](t)
            })), r
        }, once(e, t, n) {
            const r = this;
            if (!r.eventsListeners || r.destroyed) return r;
            if ("function" !== typeof t) return r;

            function a() {
                r.off(e, a), a.__emitterProxy && delete a.__emitterProxy;
                for (var n = arguments.length, l = new Array(n), i = 0; i < n; i++) l[i] = arguments[i];
                t.apply(r, l)
            }

            return a.__emitterProxy = t, r.on(e, a, n)
        }, onAny(e, t) {
            const n = this;
            if (!n.eventsListeners || n.destroyed) return n;
            if ("function" !== typeof e) return n;
            const r = t ? "unshift" : "push";
            return n.eventsAnyListeners.indexOf(e) < 0 && n.eventsAnyListeners[r](e), n
        }, offAny(e) {
            const t = this;
            if (!t.eventsListeners || t.destroyed) return t;
            if (!t.eventsAnyListeners) return t;
            const n = t.eventsAnyListeners.indexOf(e);
            return n >= 0 && t.eventsAnyListeners.splice(n, 1), t
        }, off(e, t) {
            const n = this;
            return !n.eventsListeners || n.destroyed ? n : n.eventsListeners ? (e.split(" ").forEach((e => {
                "undefined" === typeof t ? n.eventsListeners[e] = [] : n.eventsListeners[e] && n.eventsListeners[e].forEach(((r, a) => {
                    (r === t || r.__emitterProxy && r.__emitterProxy === t) && n.eventsListeners[e].splice(a, 1)
                }))
            })), n) : n
        }, emit() {
            const e = this;
            if (!e.eventsListeners || e.destroyed) return e;
            if (!e.eventsListeners) return e;
            let t, n, r;
            for (var a = arguments.length, l = new Array(a), i = 0; i < a; i++) l[i] = arguments[i];
            "string" === typeof l[0] || Array.isArray(l[0]) ? (t = l[0], n = l.slice(1, l.length), r = e) : (t = l[0].events, n = l[0].data, r = l[0].context || e), n.unshift(r);
            return (Array.isArray(t) ? t : t.split(" ")).forEach((t => {
                e.eventsAnyListeners && e.eventsAnyListeners.length && e.eventsAnyListeners.forEach((e => {
                    e.apply(r, [t, ...n])
                })), e.eventsListeners && e.eventsListeners[t] && e.eventsListeners[t].forEach((e => {
                    e.apply(r, n)
                }))
            })), e
        }
    };
    const G = (e, t, n) => {
        t && !e.classList.contains(n) ? e.classList.add(n) : !t && e.classList.contains(n) && e.classList.remove(n)
    };
    const U = (e, t, n) => {
        t && !e.classList.contains(n) ? e.classList.add(n) : !t && e.classList.contains(n) && e.classList.remove(n)
    };
    const q = (e, t) => {
        if (!e || e.destroyed || !e.params) return;
        const n = t.closest(e.isElement ? "swiper-slide" : ".".concat(e.params.slideClass));
        if (n) {
            let t = n.querySelector(".".concat(e.params.lazyPreloaderClass));
            !t && e.isElement && (n.shadowRoot ? t = n.shadowRoot.querySelector(".".concat(e.params.lazyPreloaderClass)) : requestAnimationFrame((() => {
                n.shadowRoot && (t = n.shadowRoot.querySelector(".".concat(e.params.lazyPreloaderClass)), t && t.remove())
            }))), t && t.remove()
        }
    }, W = (e, t) => {
        if (!e.slides[t]) return;
        const n = e.slides[t].querySelector('[loading="lazy"]');
        n && n.removeAttribute("loading")
    }, $ = e => {
        if (!e || e.destroyed || !e.params) return;
        let t = e.params.lazyPreloadPrevNext;
        const n = e.slides.length;
        if (!n || !t || t < 0) return;
        t = Math.min(t, n);
        const r = "auto" === e.params.slidesPerView ? e.slidesPerViewDynamic() : Math.ceil(e.params.slidesPerView),
            a = e.activeIndex;
        if (e.params.grid && e.params.grid.rows > 1) {
            const n = a, l = [n - t];
            return l.push(...Array.from({length: t}).map(((e, t) => n + r + t))), void e.slides.forEach(((t, n) => {
                l.includes(t.column) && W(e, n)
            }))
        }
        const l = a + r - 1;
        if (e.params.rewind || e.params.loop) for (let i = a - t; i <= l + t; i += 1) {
            const t = (i % n + n) % n;
            (t < a || t > l) && W(e, t)
        } else for (let i = Math.max(a - t, 0); i <= Math.min(l + t, n - 1); i += 1) i !== a && (i > l || i < a) && W(e, i)
    };
    var Q = {
        updateSize: function () {
            const e = this;
            let t, n;
            const r = e.el;
            t = "undefined" !== typeof e.params.width && null !== e.params.width ? e.params.width : r.clientWidth, n = "undefined" !== typeof e.params.height && null !== e.params.height ? e.params.height : r.clientHeight, 0 === t && e.isHorizontal() || 0 === n && e.isVertical() || (t = t - parseInt(M(r, "padding-left") || 0, 10) - parseInt(M(r, "padding-right") || 0, 10), n = n - parseInt(M(r, "padding-top") || 0, 10) - parseInt(M(r, "padding-bottom") || 0, 10), Number.isNaN(t) && (t = 0), Number.isNaN(n) && (n = 0), Object.assign(e, {
                width: t,
                height: n,
                size: e.isHorizontal() ? t : n
            }))
        }, updateSlides: function () {
            const e = this;

            function t(t, n) {
                return parseFloat(t.getPropertyValue(e.getDirectionLabel(n)) || 0)
            }

            const n = e.params, {wrapperEl: r, slidesEl: a, size: l, rtlTranslate: i, wrongRTL: o} = e,
                s = e.virtual && n.virtual.enabled, u = s ? e.virtual.slides.length : e.slides.length,
                c = N(a, ".".concat(e.params.slideClass, ", swiper-slide")), d = s ? e.virtual.slides.length : c.length;
            let f = [];
            const p = [], m = [];
            let h = n.slidesOffsetBefore;
            "function" === typeof h && (h = n.slidesOffsetBefore.call(e));
            let g = n.slidesOffsetAfter;
            "function" === typeof g && (g = n.slidesOffsetAfter.call(e));
            const v = e.snapGrid.length, y = e.slidesGrid.length;
            let b = n.spaceBetween, w = -h, S = 0, k = 0;
            if ("undefined" === typeof l) return;
            "string" === typeof b && b.indexOf("%") >= 0 ? b = parseFloat(b.replace("%", "")) / 100 * l : "string" === typeof b && (b = parseFloat(b)), e.virtualSize = -b, c.forEach((e => {
                i ? e.style.marginLeft = "" : e.style.marginRight = "", e.style.marginBottom = "", e.style.marginTop = ""
            })), n.centeredSlides && n.cssMode && (P(r, "--swiper-centered-offset-before", ""), P(r, "--swiper-centered-offset-after", ""));
            const x = n.grid && n.grid.rows > 1 && e.grid;
            let E;
            x ? e.grid.initSlides(c) : e.grid && e.grid.unsetSlides();
            const _ = "auto" === n.slidesPerView && n.breakpoints && Object.keys(n.breakpoints).filter((e => "undefined" !== typeof n.breakpoints[e].slidesPerView)).length > 0;
            for (let T = 0; T < d; T += 1) {
                let r;
                if (E = 0, c[T] && (r = c[T]), x && e.grid.updateSlide(T, r, c), !c[T] || "none" !== M(r, "display")) {
                    if ("auto" === n.slidesPerView) {
                        _ && (c[T].style[e.getDirectionLabel("width")] = "");
                        const a = getComputedStyle(r), l = r.style.transform, i = r.style.webkitTransform;
                        if (l && (r.style.transform = "none"), i && (r.style.webkitTransform = "none"), n.roundLengths) E = e.isHorizontal() ? I(r, "width", !0) : I(r, "height", !0); else {
                            const e = t(a, "width"), n = t(a, "padding-left"), l = t(a, "padding-right"),
                                i = t(a, "margin-left"), o = t(a, "margin-right"), s = a.getPropertyValue("box-sizing");
                            if (s && "border-box" === s) E = e + i + o; else {
                                const {clientWidth: t, offsetWidth: a} = r;
                                E = e + n + l + i + o + (a - t)
                            }
                        }
                        l && (r.style.transform = l), i && (r.style.webkitTransform = i), n.roundLengths && (E = Math.floor(E))
                    } else E = (l - (n.slidesPerView - 1) * b) / n.slidesPerView, n.roundLengths && (E = Math.floor(E)), c[T] && (c[T].style[e.getDirectionLabel("width")] = "".concat(E, "px"));
                    c[T] && (c[T].swiperSlideSize = E), m.push(E), n.centeredSlides ? (w = w + E / 2 + S / 2 + b, 0 === S && 0 !== T && (w = w - l / 2 - b), 0 === T && (w = w - l / 2 - b), Math.abs(w) < .001 && (w = 0), n.roundLengths && (w = Math.floor(w)), k % n.slidesPerGroup === 0 && f.push(w), p.push(w)) : (n.roundLengths && (w = Math.floor(w)), (k - Math.min(e.params.slidesPerGroupSkip, k)) % e.params.slidesPerGroup === 0 && f.push(w), p.push(w), w = w + E + b), e.virtualSize += E + b, S = E, k += 1
                }
            }
            if (e.virtualSize = Math.max(e.virtualSize, l) + g, i && o && ("slide" === n.effect || "coverflow" === n.effect) && (r.style.width = "".concat(e.virtualSize + b, "px")), n.setWrapperSize && (r.style[e.getDirectionLabel("width")] = "".concat(e.virtualSize + b, "px")), x && e.grid.updateWrapperSize(E, f), !n.centeredSlides) {
                const t = [];
                for (let r = 0; r < f.length; r += 1) {
                    let a = f[r];
                    n.roundLengths && (a = Math.floor(a)), f[r] <= e.virtualSize - l && t.push(a)
                }
                f = t, Math.floor(e.virtualSize - l) - Math.floor(f[f.length - 1]) > 1 && f.push(e.virtualSize - l)
            }
            if (s && n.loop) {
                const t = m[0] + b;
                if (n.slidesPerGroup > 1) {
                    const r = Math.ceil((e.virtual.slidesBefore + e.virtual.slidesAfter) / n.slidesPerGroup),
                        a = t * n.slidesPerGroup;
                    for (let e = 0; e < r; e += 1) f.push(f[f.length - 1] + a)
                }
                for (let r = 0; r < e.virtual.slidesBefore + e.virtual.slidesAfter; r += 1) 1 === n.slidesPerGroup && f.push(f[f.length - 1] + t), p.push(p[p.length - 1] + t), e.virtualSize += t
            }
            if (0 === f.length && (f = [0]), 0 !== b) {
                const t = e.isHorizontal() && i ? "marginLeft" : e.getDirectionLabel("marginRight");
                c.filter(((e, t) => !(n.cssMode && !n.loop) || t !== c.length - 1)).forEach((e => {
                    e.style[t] = "".concat(b, "px")
                }))
            }
            if (n.centeredSlides && n.centeredSlidesBounds) {
                let e = 0;
                m.forEach((t => {
                    e += t + (b || 0)
                })), e -= b;
                const t = e > l ? e - l : 0;
                f = f.map((e => e <= 0 ? -h : e > t ? t + g : e))
            }
            if (n.centerInsufficientSlides) {
                let e = 0;
                m.forEach((t => {
                    e += t + (b || 0)
                })), e -= b;
                const t = (n.slidesOffsetBefore || 0) + (n.slidesOffsetAfter || 0);
                if (e + t < l) {
                    const n = (l - e - t) / 2;
                    f.forEach(((e, t) => {
                        f[t] = e - n
                    })), p.forEach(((e, t) => {
                        p[t] = e + n
                    }))
                }
            }
            if (Object.assign(e, {
                slides: c,
                snapGrid: f,
                slidesGrid: p,
                slidesSizesGrid: m
            }), n.centeredSlides && n.cssMode && !n.centeredSlidesBounds) {
                P(r, "--swiper-centered-offset-before", "".concat(-f[0], "px")), P(r, "--swiper-centered-offset-after", "".concat(e.size / 2 - m[m.length - 1] / 2, "px"));
                const t = -e.snapGrid[0], n = -e.slidesGrid[0];
                e.snapGrid = e.snapGrid.map((e => e + t)), e.slidesGrid = e.slidesGrid.map((e => e + n))
            }
            if (d !== u && e.emit("slidesLengthChange"), f.length !== v && (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")), p.length !== y && e.emit("slidesGridLengthChange"), n.watchSlidesProgress && e.updateSlidesOffset(), e.emit("slidesUpdated"), !s && !n.cssMode && ("slide" === n.effect || "fade" === n.effect)) {
                const t = "".concat(n.containerModifierClass, "backface-hidden"), r = e.el.classList.contains(t);
                d <= n.maxBackfaceHiddenSlides ? r || e.el.classList.add(t) : r && e.el.classList.remove(t)
            }
        }, updateAutoHeight: function (e) {
            const t = this, n = [], r = t.virtual && t.params.virtual.enabled;
            let a, l = 0;
            "number" === typeof e ? t.setTransition(e) : !0 === e && t.setTransition(t.params.speed);
            const i = e => r ? t.slides[t.getSlideIndexByData(e)] : t.slides[e];
            if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1) if (t.params.centeredSlides) (t.visibleSlides || []).forEach((e => {
                n.push(e)
            })); else for (a = 0; a < Math.ceil(t.params.slidesPerView); a += 1) {
                const e = t.activeIndex + a;
                if (e > t.slides.length && !r) break;
                n.push(i(e))
            } else n.push(i(t.activeIndex));
            for (a = 0; a < n.length; a += 1) if ("undefined" !== typeof n[a]) {
                const e = n[a].offsetHeight;
                l = e > l ? e : l
            }
            (l || 0 === l) && (t.wrapperEl.style.height = "".concat(l, "px"))
        }, updateSlidesOffset: function () {
            const e = this, t = e.slides,
                n = e.isElement ? e.isHorizontal() ? e.wrapperEl.offsetLeft : e.wrapperEl.offsetTop : 0;
            for (let r = 0; r < t.length; r += 1) t[r].swiperSlideOffset = (e.isHorizontal() ? t[r].offsetLeft : t[r].offsetTop) - n - e.cssOverflowAdjustment()
        }, updateSlidesProgress: function (e) {
            void 0 === e && (e = this && this.translate || 0);
            const t = this, n = t.params, {slides: r, rtlTranslate: a, snapGrid: l} = t;
            if (0 === r.length) return;
            "undefined" === typeof r[0].swiperSlideOffset && t.updateSlidesOffset();
            let i = -e;
            a && (i = e), t.visibleSlidesIndexes = [], t.visibleSlides = [];
            let o = n.spaceBetween;
            "string" === typeof o && o.indexOf("%") >= 0 ? o = parseFloat(o.replace("%", "")) / 100 * t.size : "string" === typeof o && (o = parseFloat(o));
            for (let s = 0; s < r.length; s += 1) {
                const e = r[s];
                let u = e.swiperSlideOffset;
                n.cssMode && n.centeredSlides && (u -= r[0].swiperSlideOffset);
                const c = (i + (n.centeredSlides ? t.minTranslate() : 0) - u) / (e.swiperSlideSize + o),
                    d = (i - l[0] + (n.centeredSlides ? t.minTranslate() : 0) - u) / (e.swiperSlideSize + o),
                    f = -(i - u), p = f + t.slidesSizesGrid[s], m = f >= 0 && f <= t.size - t.slidesSizesGrid[s],
                    h = f >= 0 && f < t.size - 1 || p > 1 && p <= t.size || f <= 0 && p >= t.size;
                h && (t.visibleSlides.push(e), t.visibleSlidesIndexes.push(s)), G(e, h, n.slideVisibleClass), G(e, m, n.slideFullyVisibleClass), e.progress = a ? -c : c, e.originalProgress = a ? -d : d
            }
        }, updateProgress: function (e) {
            const t = this;
            if ("undefined" === typeof e) {
                const n = t.rtlTranslate ? -1 : 1;
                e = t && t.translate && t.translate * n || 0
            }
            const n = t.params, r = t.maxTranslate() - t.minTranslate();
            let {progress: a, isBeginning: l, isEnd: i, progressLoop: o} = t;
            const s = l, u = i;
            if (0 === r) a = 0, l = !0, i = !0; else {
                a = (e - t.minTranslate()) / r;
                const n = Math.abs(e - t.minTranslate()) < 1, o = Math.abs(e - t.maxTranslate()) < 1;
                l = n || a <= 0, i = o || a >= 1, n && (a = 0), o && (a = 1)
            }
            if (n.loop) {
                const n = t.getSlideIndexByData(0), r = t.getSlideIndexByData(t.slides.length - 1), a = t.slidesGrid[n],
                    l = t.slidesGrid[r], i = t.slidesGrid[t.slidesGrid.length - 1], s = Math.abs(e);
                o = s >= a ? (s - a) / i : (s + i - l) / i, o > 1 && (o -= 1)
            }
            Object.assign(t, {
                progress: a,
                progressLoop: o,
                isBeginning: l,
                isEnd: i
            }), (n.watchSlidesProgress || n.centeredSlides && n.autoHeight) && t.updateSlidesProgress(e), l && !s && t.emit("reachBeginning toEdge"), i && !u && t.emit("reachEnd toEdge"), (s && !l || u && !i) && t.emit("fromEdge"), t.emit("progress", a)
        }, updateSlidesClasses: function () {
            const e = this, {slides: t, params: n, slidesEl: r, activeIndex: a} = e, l = e.virtual && n.virtual.enabled,
                i = e.grid && n.grid && n.grid.rows > 1,
                o = e => N(r, ".".concat(n.slideClass).concat(e, ", swiper-slide").concat(e))[0];
            let s, u, c;
            if (l) if (n.loop) {
                let t = a - e.virtual.slidesBefore;
                t < 0 && (t = e.virtual.slides.length + t), t >= e.virtual.slides.length && (t -= e.virtual.slides.length), s = o('[data-swiper-slide-index="'.concat(t, '"]'))
            } else s = o('[data-swiper-slide-index="'.concat(a, '"]')); else i ? (s = t.filter((e => e.column === a))[0], c = t.filter((e => e.column === a + 1))[0], u = t.filter((e => e.column === a - 1))[0]) : s = t[a];
            s && (i || (c = function (e, t) {
                const n = [];
                for (; e.nextElementSibling;) {
                    const r = e.nextElementSibling;
                    t ? r.matches(t) && n.push(r) : n.push(r), e = r
                }
                return n
            }(s, ".".concat(n.slideClass, ", swiper-slide"))[0], n.loop && !c && (c = t[0]), u = function (e, t) {
                const n = [];
                for (; e.previousElementSibling;) {
                    const r = e.previousElementSibling;
                    t ? r.matches(t) && n.push(r) : n.push(r), e = r
                }
                return n
            }(s, ".".concat(n.slideClass, ", swiper-slide"))[0], n.loop && 0 === !u && (u = t[t.length - 1]))), t.forEach((e => {
                U(e, e === s, n.slideActiveClass), U(e, e === c, n.slideNextClass), U(e, e === u, n.slidePrevClass)
            })), e.emitSlidesClasses()
        }, updateActiveIndex: function (e) {
            const t = this, n = t.rtlTranslate ? t.translate : -t.translate, {
                snapGrid: r,
                params: a,
                activeIndex: l,
                realIndex: i,
                snapIndex: o
            } = t;
            let s, u = e;
            const c = e => {
                let n = e - t.virtual.slidesBefore;
                return n < 0 && (n = t.virtual.slides.length + n), n >= t.virtual.slides.length && (n -= t.virtual.slides.length), n
            };
            if ("undefined" === typeof u && (u = function (e) {
                const {slidesGrid: t, params: n} = e, r = e.rtlTranslate ? e.translate : -e.translate;
                let a;
                for (let l = 0; l < t.length; l += 1) "undefined" !== typeof t[l + 1] ? r >= t[l] && r < t[l + 1] - (t[l + 1] - t[l]) / 2 ? a = l : r >= t[l] && r < t[l + 1] && (a = l + 1) : r >= t[l] && (a = l);
                return n.normalizeSlideIndex && (a < 0 || "undefined" === typeof a) && (a = 0), a
            }(t)), r.indexOf(n) >= 0) s = r.indexOf(n); else {
                const e = Math.min(a.slidesPerGroupSkip, u);
                s = e + Math.floor((u - e) / a.slidesPerGroup)
            }
            if (s >= r.length && (s = r.length - 1), u === l && !t.params.loop) return void (s !== o && (t.snapIndex = s, t.emit("snapIndexChange")));
            if (u === l && t.params.loop && t.virtual && t.params.virtual.enabled) return void (t.realIndex = c(u));
            const d = t.grid && a.grid && a.grid.rows > 1;
            let f;
            if (t.virtual && a.virtual.enabled && a.loop) f = c(u); else if (d) {
                const e = t.slides.filter((e => e.column === u))[0];
                let n = parseInt(e.getAttribute("data-swiper-slide-index"), 10);
                Number.isNaN(n) && (n = Math.max(t.slides.indexOf(e), 0)), f = Math.floor(n / a.grid.rows)
            } else if (t.slides[u]) {
                const e = t.slides[u].getAttribute("data-swiper-slide-index");
                f = e ? parseInt(e, 10) : u
            } else f = u;
            Object.assign(t, {
                previousSnapIndex: o,
                snapIndex: s,
                previousRealIndex: i,
                realIndex: f,
                previousIndex: l,
                activeIndex: u
            }), t.initialized && $(t), t.emit("activeIndexChange"), t.emit("snapIndexChange"), (t.initialized || t.params.runCallbacksOnInit) && (i !== f && t.emit("realIndexChange"), t.emit("slideChange"))
        }, updateClickedSlide: function (e, t) {
            const n = this, r = n.params;
            let a = e.closest(".".concat(r.slideClass, ", swiper-slide"));
            !a && n.isElement && t && t.length > 1 && t.includes(e) && [...t.slice(t.indexOf(e) + 1, t.length)].forEach((e => {
                !a && e.matches && e.matches(".".concat(r.slideClass, ", swiper-slide")) && (a = e)
            }));
            let l, i = !1;
            if (a) for (let o = 0; o < n.slides.length; o += 1) if (n.slides[o] === a) {
                i = !0, l = o;
                break
            }
            if (!a || !i) return n.clickedSlide = void 0, void (n.clickedIndex = void 0);
            n.clickedSlide = a, n.virtual && n.params.virtual.enabled ? n.clickedIndex = parseInt(a.getAttribute("data-swiper-slide-index"), 10) : n.clickedIndex = l, r.slideToClickedSlide && void 0 !== n.clickedIndex && n.clickedIndex !== n.activeIndex && n.slideToClickedSlide()
        }
    };
    var Y = {
        getTranslate: function (e) {
            void 0 === e && (e = this.isHorizontal() ? "x" : "y");
            const {params: t, rtlTranslate: n, translate: r, wrapperEl: a} = this;
            if (t.virtualTranslate) return n ? -r : r;
            if (t.cssMode) return r;
            let l = _(a, e);
            return l += this.cssOverflowAdjustment(), n && (l = -l), l || 0
        }, setTranslate: function (e, t) {
            const n = this, {rtlTranslate: r, params: a, wrapperEl: l, progress: i} = n;
            let o, s = 0, u = 0;
            n.isHorizontal() ? s = r ? -e : e : u = e, a.roundLengths && (s = Math.floor(s), u = Math.floor(u)), n.previousTranslate = n.translate, n.translate = n.isHorizontal() ? s : u, a.cssMode ? l[n.isHorizontal() ? "scrollLeft" : "scrollTop"] = n.isHorizontal() ? -s : -u : a.virtualTranslate || (n.isHorizontal() ? s -= n.cssOverflowAdjustment() : u -= n.cssOverflowAdjustment(), l.style.transform = "translate3d(".concat(s, "px, ").concat(u, "px, ").concat(0, "px)"));
            const c = n.maxTranslate() - n.minTranslate();
            o = 0 === c ? 0 : (e - n.minTranslate()) / c, o !== i && n.updateProgress(e), n.emit("setTranslate", n.translate, t)
        }, minTranslate: function () {
            return -this.snapGrid[0]
        }, maxTranslate: function () {
            return -this.snapGrid[this.snapGrid.length - 1]
        }, translateTo: function (e, t, n, r, a) {
            void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === n && (n = !0), void 0 === r && (r = !0);
            const l = this, {params: i, wrapperEl: o} = l;
            if (l.animating && i.preventInteractionOnTransition) return !1;
            const s = l.minTranslate(), u = l.maxTranslate();
            let c;
            if (c = r && e > s ? s : r && e < u ? u : e, l.updateProgress(c), i.cssMode) {
                const e = l.isHorizontal();
                if (0 === t) o[e ? "scrollLeft" : "scrollTop"] = -c; else {
                    if (!l.support.smoothScroll) return z({
                        swiper: l,
                        targetPosition: -c,
                        side: e ? "left" : "top"
                    }), !0;
                    o.scrollTo({[e ? "left" : "top"]: -c, behavior: "smooth"})
                }
                return !0
            }
            return 0 === t ? (l.setTransition(0), l.setTranslate(c), n && (l.emit("beforeTransitionStart", t, a), l.emit("transitionEnd"))) : (l.setTransition(t), l.setTranslate(c), n && (l.emit("beforeTransitionStart", t, a), l.emit("transitionStart")), l.animating || (l.animating = !0, l.onTranslateToWrapperTransitionEnd || (l.onTranslateToWrapperTransitionEnd = function (e) {
                l && !l.destroyed && e.target === this && (l.wrapperEl.removeEventListener("transitionend", l.onTranslateToWrapperTransitionEnd), l.onTranslateToWrapperTransitionEnd = null, delete l.onTranslateToWrapperTransitionEnd, l.animating = !1, n && l.emit("transitionEnd"))
            }), l.wrapperEl.addEventListener("transitionend", l.onTranslateToWrapperTransitionEnd))), !0
        }
    };

    function X(e) {
        let {swiper: t, runCallbacks: n, direction: r, step: a} = e;
        const {activeIndex: l, previousIndex: i} = t;
        let o = r;
        if (o || (o = l > i ? "next" : l < i ? "prev" : "reset"), t.emit("transition".concat(a)), n && l !== i) {
            if ("reset" === o) return void t.emit("slideResetTransition".concat(a));
            t.emit("slideChangeTransition".concat(a)), "next" === o ? t.emit("slideNextTransition".concat(a)) : t.emit("slidePrevTransition".concat(a))
        }
    }

    var K = {
        slideTo: function (e, t, n, r, a) {
            void 0 === e && (e = 0), void 0 === n && (n = !0), "string" === typeof e && (e = parseInt(e, 10));
            const l = this;
            let i = e;
            i < 0 && (i = 0);
            const {
                params: o,
                snapGrid: s,
                slidesGrid: u,
                previousIndex: c,
                activeIndex: d,
                rtlTranslate: f,
                wrapperEl: p,
                enabled: m
            } = l;
            if (!m && !r && !a || l.destroyed || l.animating && o.preventInteractionOnTransition) return !1;
            "undefined" === typeof t && (t = l.params.speed);
            const h = Math.min(l.params.slidesPerGroupSkip, i);
            let g = h + Math.floor((i - h) / l.params.slidesPerGroup);
            g >= s.length && (g = s.length - 1);
            const v = -s[g];
            if (o.normalizeSlideIndex) for (let w = 0; w < u.length; w += 1) {
                const e = -Math.floor(100 * v), t = Math.floor(100 * u[w]), n = Math.floor(100 * u[w + 1]);
                "undefined" !== typeof u[w + 1] ? e >= t && e < n - (n - t) / 2 ? i = w : e >= t && e < n && (i = w + 1) : e >= t && (i = w)
            }
            if (l.initialized && i !== d) {
                if (!l.allowSlideNext && (f ? v > l.translate && v > l.minTranslate() : v < l.translate && v < l.minTranslate())) return !1;
                if (!l.allowSlidePrev && v > l.translate && v > l.maxTranslate() && (d || 0) !== i) return !1
            }
            let y;
            i !== (c || 0) && n && l.emit("beforeSlideChangeStart"), l.updateProgress(v), y = i > d ? "next" : i < d ? "prev" : "reset";
            const b = l.virtual && l.params.virtual.enabled;
            if (!(b && a) && (f && -v === l.translate || !f && v === l.translate)) return l.updateActiveIndex(i), o.autoHeight && l.updateAutoHeight(), l.updateSlidesClasses(), "slide" !== o.effect && l.setTranslate(v), "reset" !== y && (l.transitionStart(n, y), l.transitionEnd(n, y)), !1;
            if (o.cssMode) {
                const e = l.isHorizontal(), n = f ? v : -v;
                if (0 === t) b && (l.wrapperEl.style.scrollSnapType = "none", l._immediateVirtual = !0), b && !l._cssModeVirtualInitialSet && l.params.initialSlide > 0 ? (l._cssModeVirtualInitialSet = !0, requestAnimationFrame((() => {
                    p[e ? "scrollLeft" : "scrollTop"] = n
                }))) : p[e ? "scrollLeft" : "scrollTop"] = n, b && requestAnimationFrame((() => {
                    l.wrapperEl.style.scrollSnapType = "", l._immediateVirtual = !1
                })); else {
                    if (!l.support.smoothScroll) return z({swiper: l, targetPosition: n, side: e ? "left" : "top"}), !0;
                    p.scrollTo({[e ? "left" : "top"]: n, behavior: "smooth"})
                }
                return !0
            }
            return l.setTransition(t), l.setTranslate(v), l.updateActiveIndex(i), l.updateSlidesClasses(), l.emit("beforeTransitionStart", t, r), l.transitionStart(n, y), 0 === t ? l.transitionEnd(n, y) : l.animating || (l.animating = !0, l.onSlideToWrapperTransitionEnd || (l.onSlideToWrapperTransitionEnd = function (e) {
                l && !l.destroyed && e.target === this && (l.wrapperEl.removeEventListener("transitionend", l.onSlideToWrapperTransitionEnd), l.onSlideToWrapperTransitionEnd = null, delete l.onSlideToWrapperTransitionEnd, l.transitionEnd(n, y))
            }), l.wrapperEl.addEventListener("transitionend", l.onSlideToWrapperTransitionEnd)), !0
        }, slideToLoop: function (e, t, n, r) {
            if (void 0 === e && (e = 0), void 0 === n && (n = !0), "string" === typeof e) {
                e = parseInt(e, 10)
            }
            const a = this;
            if (a.destroyed) return;
            "undefined" === typeof t && (t = a.params.speed);
            const l = a.grid && a.params.grid && a.params.grid.rows > 1;
            let i = e;
            if (a.params.loop) if (a.virtual && a.params.virtual.enabled) i += a.virtual.slidesBefore; else {
                let e;
                if (l) {
                    const t = i * a.params.grid.rows;
                    e = a.slides.filter((e => 1 * e.getAttribute("data-swiper-slide-index") === t))[0].column
                } else e = a.getSlideIndexByData(i);
                const t = l ? Math.ceil(a.slides.length / a.params.grid.rows) : a.slides.length, {centeredSlides: n} = a.params;
                let o = a.params.slidesPerView;
                "auto" === o ? o = a.slidesPerViewDynamic() : (o = Math.ceil(parseFloat(a.params.slidesPerView, 10)), n && o % 2 === 0 && (o += 1));
                let s = t - e < o;
                if (n && (s = s || e < Math.ceil(o / 2)), r && n && "auto" !== a.params.slidesPerView && !l && (s = !1), s) {
                    const r = n ? e < a.activeIndex ? "prev" : "next" : e - a.activeIndex - 1 < a.params.slidesPerView ? "next" : "prev";
                    a.loopFix({
                        direction: r,
                        slideTo: !0,
                        activeSlideIndex: "next" === r ? e + 1 : e - t + 1,
                        slideRealIndex: "next" === r ? a.realIndex : void 0
                    })
                }
                if (l) {
                    const e = i * a.params.grid.rows;
                    i = a.slides.filter((t => 1 * t.getAttribute("data-swiper-slide-index") === e))[0].column
                } else i = a.getSlideIndexByData(i)
            }
            return requestAnimationFrame((() => {
                a.slideTo(i, t, n, r)
            })), a
        }, slideNext: function (e, t, n) {
            void 0 === t && (t = !0);
            const r = this, {enabled: a, params: l, animating: i} = r;
            if (!a || r.destroyed) return r;
            "undefined" === typeof e && (e = r.params.speed);
            let o = l.slidesPerGroup;
            "auto" === l.slidesPerView && 1 === l.slidesPerGroup && l.slidesPerGroupAuto && (o = Math.max(r.slidesPerViewDynamic("current", !0), 1));
            const s = r.activeIndex < l.slidesPerGroupSkip ? 1 : o, u = r.virtual && l.virtual.enabled;
            if (l.loop) {
                if (i && !u && l.loopPreventsSliding) return !1;
                if (r.loopFix({direction: "next"}), r._clientLeft = r.wrapperEl.clientLeft, r.activeIndex === r.slides.length - 1 && l.cssMode) return requestAnimationFrame((() => {
                    r.slideTo(r.activeIndex + s, e, t, n)
                })), !0
            }
            return l.rewind && r.isEnd ? r.slideTo(0, e, t, n) : r.slideTo(r.activeIndex + s, e, t, n)
        }, slidePrev: function (e, t, n) {
            void 0 === t && (t = !0);
            const r = this, {params: a, snapGrid: l, slidesGrid: i, rtlTranslate: o, enabled: s, animating: u} = r;
            if (!s || r.destroyed) return r;
            "undefined" === typeof e && (e = r.params.speed);
            const c = r.virtual && a.virtual.enabled;
            if (a.loop) {
                if (u && !c && a.loopPreventsSliding) return !1;
                r.loopFix({direction: "prev"}), r._clientLeft = r.wrapperEl.clientLeft
            }

            function d(e) {
                return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e)
            }

            const f = d(o ? r.translate : -r.translate), p = l.map((e => d(e)));
            let m = l[p.indexOf(f) - 1];
            if ("undefined" === typeof m && a.cssMode) {
                let e;
                l.forEach(((t, n) => {
                    f >= t && (e = n)
                })), "undefined" !== typeof e && (m = l[e > 0 ? e - 1 : e])
            }
            let h = 0;
            if ("undefined" !== typeof m && (h = i.indexOf(m), h < 0 && (h = r.activeIndex - 1), "auto" === a.slidesPerView && 1 === a.slidesPerGroup && a.slidesPerGroupAuto && (h = h - r.slidesPerViewDynamic("previous", !0) + 1, h = Math.max(h, 0))), a.rewind && r.isBeginning) {
                const a = r.params.virtual && r.params.virtual.enabled && r.virtual ? r.virtual.slides.length - 1 : r.slides.length - 1;
                return r.slideTo(a, e, t, n)
            }
            return a.loop && 0 === r.activeIndex && a.cssMode ? (requestAnimationFrame((() => {
                r.slideTo(h, e, t, n)
            })), !0) : r.slideTo(h, e, t, n)
        }, slideReset: function (e, t, n) {
            void 0 === t && (t = !0);
            const r = this;
            if (!r.destroyed) return "undefined" === typeof e && (e = r.params.speed), r.slideTo(r.activeIndex, e, t, n)
        }, slideToClosest: function (e, t, n, r) {
            void 0 === t && (t = !0), void 0 === r && (r = .5);
            const a = this;
            if (a.destroyed) return;
            "undefined" === typeof e && (e = a.params.speed);
            let l = a.activeIndex;
            const i = Math.min(a.params.slidesPerGroupSkip, l), o = i + Math.floor((l - i) / a.params.slidesPerGroup),
                s = a.rtlTranslate ? a.translate : -a.translate;
            if (s >= a.snapGrid[o]) {
                const e = a.snapGrid[o];
                s - e > (a.snapGrid[o + 1] - e) * r && (l += a.params.slidesPerGroup)
            } else {
                const e = a.snapGrid[o - 1];
                s - e <= (a.snapGrid[o] - e) * r && (l -= a.params.slidesPerGroup)
            }
            return l = Math.max(l, 0), l = Math.min(l, a.slidesGrid.length - 1), a.slideTo(l, e, t, n)
        }, slideToClickedSlide: function () {
            const e = this;
            if (e.destroyed) return;
            const {params: t, slidesEl: n} = e,
                r = "auto" === t.slidesPerView ? e.slidesPerViewDynamic() : t.slidesPerView;
            let a, l = e.clickedIndex;
            const i = e.isElement ? "swiper-slide" : ".".concat(t.slideClass);
            if (t.loop) {
                if (e.animating) return;
                a = parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"), 10), t.centeredSlides ? l < e.loopedSlides - r / 2 || l > e.slides.length - e.loopedSlides + r / 2 ? (e.loopFix(), l = e.getSlideIndex(N(n, "".concat(i, '[data-swiper-slide-index="').concat(a, '"]'))[0]), x((() => {
                    e.slideTo(l)
                }))) : e.slideTo(l) : l > e.slides.length - r ? (e.loopFix(), l = e.getSlideIndex(N(n, "".concat(i, '[data-swiper-slide-index="').concat(a, '"]'))[0]), x((() => {
                    e.slideTo(l)
                }))) : e.slideTo(l)
            } else e.slideTo(l)
        }
    };
    var Z = {
        loopCreate: function (e) {
            const t = this, {params: n, slidesEl: r} = t;
            if (!n.loop || t.virtual && t.params.virtual.enabled) return;
            const a = () => {
                    N(r, ".".concat(n.slideClass, ", swiper-slide")).forEach(((e, t) => {
                        e.setAttribute("data-swiper-slide-index", t)
                    }))
                }, l = t.grid && n.grid && n.grid.rows > 1, i = n.slidesPerGroup * (l ? n.grid.rows : 1),
                o = t.slides.length % i !== 0, s = l && t.slides.length % n.grid.rows !== 0, u = e => {
                    for (let r = 0; r < e; r += 1) {
                        const e = t.isElement ? O("swiper-slide", [n.slideBlankClass]) : O("div", [n.slideClass, n.slideBlankClass]);
                        t.slidesEl.append(e)
                    }
                };
            if (o) {
                if (n.loopAddBlankSlides) {
                    u(i - t.slides.length % i), t.recalcSlides(), t.updateSlides()
                } else L("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
                a()
            } else if (s) {
                if (n.loopAddBlankSlides) {
                    u(n.grid.rows - t.slides.length % n.grid.rows), t.recalcSlides(), t.updateSlides()
                } else L("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
                a()
            } else a();
            t.loopFix({slideRealIndex: e, direction: n.centeredSlides ? void 0 : "next"})
        }, loopFix: function (e) {
            let {
                slideRealIndex: t,
                slideTo: n = !0,
                direction: r,
                setTranslate: a,
                activeSlideIndex: l,
                byController: i,
                byMousewheel: o
            } = void 0 === e ? {} : e;
            const s = this;
            if (!s.params.loop) return;
            s.emit("beforeLoopFix");
            const {
                slides: u,
                allowSlidePrev: c,
                allowSlideNext: d,
                slidesEl: f,
                params: p
            } = s, {centeredSlides: m} = p;
            if (s.allowSlidePrev = !0, s.allowSlideNext = !0, s.virtual && p.virtual.enabled) return n && (p.centeredSlides || 0 !== s.snapIndex ? p.centeredSlides && s.snapIndex < p.slidesPerView ? s.slideTo(s.virtual.slides.length + s.snapIndex, 0, !1, !0) : s.snapIndex === s.snapGrid.length - 1 && s.slideTo(s.virtual.slidesBefore, 0, !1, !0) : s.slideTo(s.virtual.slides.length, 0, !1, !0)), s.allowSlidePrev = c, s.allowSlideNext = d, void s.emit("loopFix");
            let g = p.slidesPerView;
            "auto" === g ? g = s.slidesPerViewDynamic() : (g = Math.ceil(parseFloat(p.slidesPerView, 10)), m && g % 2 === 0 && (g += 1));
            const v = p.slidesPerGroupAuto ? g : p.slidesPerGroup;
            let y = v;
            y % v !== 0 && (y += v - y % v), y += p.loopAdditionalSlides, s.loopedSlides = y;
            const b = s.grid && p.grid && p.grid.rows > 1;
            u.length < g + y ? L("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters") : b && "row" === p.grid.fill && L("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");
            const w = [], S = [];
            let k = s.activeIndex;
            "undefined" === typeof l ? l = s.getSlideIndex(u.filter((e => e.classList.contains(p.slideActiveClass)))[0]) : k = l;
            const x = "next" === r || !r, E = "prev" === r || !r;
            let _ = 0, T = 0;
            const C = b ? Math.ceil(u.length / p.grid.rows) : u.length,
                P = (b ? u[l].column : l) + (m && "undefined" === typeof a ? -g / 2 + .5 : 0);
            if (P < y) {
                _ = Math.max(y - P, v);
                for (let e = 0; e < y - P; e += 1) {
                    const t = e - Math.floor(e / C) * C;
                    if (b) {
                        const e = C - t - 1;
                        for (let t = u.length - 1; t >= 0; t -= 1) u[t].column === e && w.push(t)
                    } else w.push(C - t - 1)
                }
            } else if (P + g > C - y) {
                T = Math.max(P - (C - 2 * y), v);
                for (let e = 0; e < T; e += 1) {
                    const t = e - Math.floor(e / C) * C;
                    b ? u.forEach(((e, n) => {
                        e.column === t && S.push(n)
                    })) : S.push(t)
                }
            }
            if (s.__preventObserver__ = !0, requestAnimationFrame((() => {
                s.__preventObserver__ = !1
            })), E && w.forEach((e => {
                u[e].swiperLoopMoveDOM = !0, f.prepend(u[e]), u[e].swiperLoopMoveDOM = !1
            })), x && S.forEach((e => {
                u[e].swiperLoopMoveDOM = !0, f.append(u[e]), u[e].swiperLoopMoveDOM = !1
            })), s.recalcSlides(), "auto" === p.slidesPerView ? s.updateSlides() : b && (w.length > 0 && E || S.length > 0 && x) && s.slides.forEach(((e, t) => {
                s.grid.updateSlide(t, e, s.slides)
            })), p.watchSlidesProgress && s.updateSlidesOffset(), n) if (w.length > 0 && E) {
                if ("undefined" === typeof t) {
                    const e = s.slidesGrid[k], t = s.slidesGrid[k + _] - e;
                    o ? s.setTranslate(s.translate - t) : (s.slideTo(k + Math.ceil(_), 0, !1, !0), a && (s.touchEventsData.startTranslate = s.touchEventsData.startTranslate - t, s.touchEventsData.currentTranslate = s.touchEventsData.currentTranslate - t))
                } else if (a) {
                    const e = b ? w.length / p.grid.rows : w.length;
                    s.slideTo(s.activeIndex + e, 0, !1, !0), s.touchEventsData.currentTranslate = s.translate
                }
            } else if (S.length > 0 && x) if ("undefined" === typeof t) {
                const e = s.slidesGrid[k], t = s.slidesGrid[k - T] - e;
                o ? s.setTranslate(s.translate - t) : (s.slideTo(k - T, 0, !1, !0), a && (s.touchEventsData.startTranslate = s.touchEventsData.startTranslate - t, s.touchEventsData.currentTranslate = s.touchEventsData.currentTranslate - t))
            } else {
                const e = b ? S.length / p.grid.rows : S.length;
                s.slideTo(s.activeIndex - e, 0, !1, !0)
            }
            if (s.allowSlidePrev = c, s.allowSlideNext = d, s.controller && s.controller.control && !i) {
                const e = {slideRealIndex: t, direction: r, setTranslate: a, activeSlideIndex: l, byController: !0};
                Array.isArray(s.controller.control) ? s.controller.control.forEach((t => {
                    !t.destroyed && t.params.loop && t.loopFix(h(h({}, e), {}, {slideTo: t.params.slidesPerView === p.slidesPerView && n}))
                })) : s.controller.control instanceof s.constructor && s.controller.control.params.loop && s.controller.control.loopFix(h(h({}, e), {}, {slideTo: s.controller.control.params.slidesPerView === p.slidesPerView && n}))
            }
            s.emit("loopFix")
        }, loopDestroy: function () {
            const e = this, {params: t, slidesEl: n} = e;
            if (!t.loop || e.virtual && e.params.virtual.enabled) return;
            e.recalcSlides();
            const r = [];
            e.slides.forEach((e => {
                const t = "undefined" === typeof e.swiperSlideIndex ? 1 * e.getAttribute("data-swiper-slide-index") : e.swiperSlideIndex;
                r[t] = e
            })), e.slides.forEach((e => {
                e.removeAttribute("data-swiper-slide-index")
            })), r.forEach((e => {
                n.append(e)
            })), e.recalcSlides(), e.slideTo(e.realIndex, 0)
        }
    };

    function J(e, t, n) {
        const r = k(), {params: a} = e, l = a.edgeSwipeDetection, i = a.edgeSwipeThreshold;
        return !l || !(n <= i || n >= r.innerWidth - i) || "prevent" === l && (t.preventDefault(), !0)
    }

    function ee(e) {
        const t = this, n = w();
        let r = e;
        r.originalEvent && (r = r.originalEvent);
        const a = t.touchEventsData;
        if ("pointerdown" === r.type) {
            if (null !== a.pointerId && a.pointerId !== r.pointerId) return;
            a.pointerId = r.pointerId
        } else "touchstart" === r.type && 1 === r.targetTouches.length && (a.touchId = r.targetTouches[0].identifier);
        if ("touchstart" === r.type) return void J(t, r, r.targetTouches[0].pageX);
        const {params: l, touches: i, enabled: o} = t;
        if (!o) return;
        if (!l.simulateTouch && "mouse" === r.pointerType) return;
        if (t.animating && l.preventInteractionOnTransition) return;
        !t.animating && l.cssMode && l.loop && t.loopFix();
        let s = r.target;
        if ("wrapper" === l.touchEventsTarget && !function (e, t) {
            const n = t.contains(e);
            if (!n && t instanceof HTMLSlotElement) return [...t.assignedElements()].includes(e);
            return n
        }(s, t.wrapperEl)) return;
        if ("which" in r && 3 === r.which) return;
        if ("button" in r && r.button > 0) return;
        if (a.isTouched && a.isMoved) return;
        const u = !!l.noSwipingClass && "" !== l.noSwipingClass, c = r.composedPath ? r.composedPath() : r.path;
        u && r.target && r.target.shadowRoot && c && (s = c[0]);
        const d = l.noSwipingSelector ? l.noSwipingSelector : ".".concat(l.noSwipingClass),
            f = !(!r.target || !r.target.shadowRoot);
        if (l.noSwiping && (f ? function (e, t) {
            return void 0 === t && (t = this), function t(n) {
                if (!n || n === w() || n === k()) return null;
                n.assignedSlot && (n = n.assignedSlot);
                const r = n.closest(e);
                return r || n.getRootNode ? r || t(n.getRootNode().host) : null
            }(t)
        }(d, s) : s.closest(d))) return void (t.allowClick = !0);
        if (l.swipeHandler && !s.closest(l.swipeHandler)) return;
        i.currentX = r.pageX, i.currentY = r.pageY;
        const p = i.currentX, m = i.currentY;
        if (!J(t, r, p)) return;
        Object.assign(a, {
            isTouched: !0,
            isMoved: !1,
            allowTouchCallbacks: !0,
            isScrolling: void 0,
            startMoving: void 0
        }), i.startX = p, i.startY = m, a.touchStartTime = E(), t.allowClick = !0, t.updateSize(), t.swipeDirection = void 0, l.threshold > 0 && (a.allowThresholdMove = !1);
        let h = !0;
        s.matches(a.focusableElements) && (h = !1, "SELECT" === s.nodeName && (a.isTouched = !1)), n.activeElement && n.activeElement.matches(a.focusableElements) && n.activeElement !== s && ("mouse" === r.pointerType || "mouse" !== r.pointerType && !s.matches(a.focusableElements)) && n.activeElement.blur();
        const g = h && t.allowTouchMove && l.touchStartPreventDefault;
        !l.touchStartForcePreventDefault && !g || s.isContentEditable || r.preventDefault(), l.freeMode && l.freeMode.enabled && t.freeMode && t.animating && !l.cssMode && t.freeMode.onTouchStart(), t.emit("touchStart", r)
    }

    function te(e) {
        const t = w(), n = this, r = n.touchEventsData, {params: a, touches: l, rtlTranslate: i, enabled: o} = n;
        if (!o) return;
        if (!a.simulateTouch && "mouse" === e.pointerType) return;
        let s, u = e;
        if (u.originalEvent && (u = u.originalEvent), "pointermove" === u.type) {
            if (null !== r.touchId) return;
            if (u.pointerId !== r.pointerId) return
        }
        if ("touchmove" === u.type) {
            if (s = [...u.changedTouches].filter((e => e.identifier === r.touchId))[0], !s || s.identifier !== r.touchId) return
        } else s = u;
        if (!r.isTouched) return void (r.startMoving && r.isScrolling && n.emit("touchMoveOpposite", u));
        const c = s.pageX, d = s.pageY;
        if (u.preventedByNestedSwiper) return l.startX = c, void (l.startY = d);
        if (!n.allowTouchMove) return u.target.matches(r.focusableElements) || (n.allowClick = !1), void (r.isTouched && (Object.assign(l, {
            startX: c,
            startY: d,
            currentX: c,
            currentY: d
        }), r.touchStartTime = E()));
        if (a.touchReleaseOnEdges && !a.loop) if (n.isVertical()) {
            if (d < l.startY && n.translate <= n.maxTranslate() || d > l.startY && n.translate >= n.minTranslate()) return r.isTouched = !1, void (r.isMoved = !1)
        } else if (c < l.startX && n.translate <= n.maxTranslate() || c > l.startX && n.translate >= n.minTranslate()) return;
        if (t.activeElement && t.activeElement.matches(r.focusableElements) && t.activeElement !== u.target && "mouse" !== u.pointerType && t.activeElement.blur(), t.activeElement && u.target === t.activeElement && u.target.matches(r.focusableElements)) return r.isMoved = !0, void (n.allowClick = !1);
        r.allowTouchCallbacks && n.emit("touchMove", u), l.previousX = l.currentX, l.previousY = l.currentY, l.currentX = c, l.currentY = d;
        const f = l.currentX - l.startX, p = l.currentY - l.startY;
        if (n.params.threshold && Math.sqrt(f ** 2 + p ** 2) < n.params.threshold) return;
        if ("undefined" === typeof r.isScrolling) {
            let e;
            n.isHorizontal() && l.currentY === l.startY || n.isVertical() && l.currentX === l.startX ? r.isScrolling = !1 : f * f + p * p >= 25 && (e = 180 * Math.atan2(Math.abs(p), Math.abs(f)) / Math.PI, r.isScrolling = n.isHorizontal() ? e > a.touchAngle : 90 - e > a.touchAngle)
        }
        if (r.isScrolling && n.emit("touchMoveOpposite", u), "undefined" === typeof r.startMoving && (l.currentX === l.startX && l.currentY === l.startY || (r.startMoving = !0)), r.isScrolling || "touchmove" === u.type && r.preventTouchMoveFromPointerMove) return void (r.isTouched = !1);
        if (!r.startMoving) return;
        n.allowClick = !1, !a.cssMode && u.cancelable && u.preventDefault(), a.touchMoveStopPropagation && !a.nested && u.stopPropagation();
        let m = n.isHorizontal() ? f : p, h = n.isHorizontal() ? l.currentX - l.previousX : l.currentY - l.previousY;
        a.oneWayMovement && (m = Math.abs(m) * (i ? 1 : -1), h = Math.abs(h) * (i ? 1 : -1)), l.diff = m, m *= a.touchRatio, i && (m = -m, h = -h);
        const g = n.touchesDirection;
        n.swipeDirection = m > 0 ? "prev" : "next", n.touchesDirection = h > 0 ? "prev" : "next";
        const v = n.params.loop && !a.cssMode,
            y = "next" === n.touchesDirection && n.allowSlideNext || "prev" === n.touchesDirection && n.allowSlidePrev;
        if (!r.isMoved) {
            if (v && y && n.loopFix({direction: n.swipeDirection}), r.startTranslate = n.getTranslate(), n.setTransition(0), n.animating) {
                const e = new window.CustomEvent("transitionend", {
                    bubbles: !0,
                    cancelable: !0,
                    detail: {bySwiperTouchMove: !0}
                });
                n.wrapperEl.dispatchEvent(e)
            }
            r.allowMomentumBounce = !1, !a.grabCursor || !0 !== n.allowSlideNext && !0 !== n.allowSlidePrev || n.setGrabCursor(!0), n.emit("sliderFirstMove", u)
        }
        if ((new Date).getTime(), r.isMoved && r.allowThresholdMove && g !== n.touchesDirection && v && y && Math.abs(m) >= 1) return Object.assign(l, {
            startX: c,
            startY: d,
            currentX: c,
            currentY: d,
            startTranslate: r.currentTranslate
        }), r.loopSwapReset = !0, void (r.startTranslate = r.currentTranslate);
        n.emit("sliderMove", u), r.isMoved = !0, r.currentTranslate = m + r.startTranslate;
        let b = !0, S = a.resistanceRatio;
        if (a.touchReleaseOnEdges && (S = 0), m > 0 ? (v && y && r.allowThresholdMove && r.currentTranslate > (a.centeredSlides ? n.minTranslate() - n.slidesSizesGrid[n.activeIndex + 1] - ("auto" !== a.slidesPerView && n.slides.length - a.slidesPerView >= 2 ? n.slidesSizesGrid[n.activeIndex + 1] + n.params.spaceBetween : 0) - n.params.spaceBetween : n.minTranslate()) && n.loopFix({
            direction: "prev",
            setTranslate: !0,
            activeSlideIndex: 0
        }), r.currentTranslate > n.minTranslate() && (b = !1, a.resistance && (r.currentTranslate = n.minTranslate() - 1 + (-n.minTranslate() + r.startTranslate + m) ** S))) : m < 0 && (v && y && r.allowThresholdMove && r.currentTranslate < (a.centeredSlides ? n.maxTranslate() + n.slidesSizesGrid[n.slidesSizesGrid.length - 1] + n.params.spaceBetween + ("auto" !== a.slidesPerView && n.slides.length - a.slidesPerView >= 2 ? n.slidesSizesGrid[n.slidesSizesGrid.length - 1] + n.params.spaceBetween : 0) : n.maxTranslate()) && n.loopFix({
            direction: "next",
            setTranslate: !0,
            activeSlideIndex: n.slides.length - ("auto" === a.slidesPerView ? n.slidesPerViewDynamic() : Math.ceil(parseFloat(a.slidesPerView, 10)))
        }), r.currentTranslate < n.maxTranslate() && (b = !1, a.resistance && (r.currentTranslate = n.maxTranslate() + 1 - (n.maxTranslate() - r.startTranslate - m) ** S))), b && (u.preventedByNestedSwiper = !0), !n.allowSlideNext && "next" === n.swipeDirection && r.currentTranslate < r.startTranslate && (r.currentTranslate = r.startTranslate), !n.allowSlidePrev && "prev" === n.swipeDirection && r.currentTranslate > r.startTranslate && (r.currentTranslate = r.startTranslate), n.allowSlidePrev || n.allowSlideNext || (r.currentTranslate = r.startTranslate), a.threshold > 0) {
            if (!(Math.abs(m) > a.threshold || r.allowThresholdMove)) return void (r.currentTranslate = r.startTranslate);
            if (!r.allowThresholdMove) return r.allowThresholdMove = !0, l.startX = l.currentX, l.startY = l.currentY, r.currentTranslate = r.startTranslate, void (l.diff = n.isHorizontal() ? l.currentX - l.startX : l.currentY - l.startY)
        }
        a.followFinger && !a.cssMode && ((a.freeMode && a.freeMode.enabled && n.freeMode || a.watchSlidesProgress) && (n.updateActiveIndex(), n.updateSlidesClasses()), a.freeMode && a.freeMode.enabled && n.freeMode && n.freeMode.onTouchMove(), n.updateProgress(r.currentTranslate), n.setTranslate(r.currentTranslate))
    }

    function ne(e) {
        const t = this, n = t.touchEventsData;
        let r, a = e;
        a.originalEvent && (a = a.originalEvent);
        if ("touchend" === a.type || "touchcancel" === a.type) {
            if (r = [...a.changedTouches].filter((e => e.identifier === n.touchId))[0], !r || r.identifier !== n.touchId) return
        } else {
            if (null !== n.touchId) return;
            if (a.pointerId !== n.pointerId) return;
            r = a
        }
        if (["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(a.type)) {
            if (!(["pointercancel", "contextmenu"].includes(a.type) && (t.browser.isSafari || t.browser.isWebView))) return
        }
        n.pointerId = null, n.touchId = null;
        const {params: l, touches: i, rtlTranslate: o, slidesGrid: s, enabled: u} = t;
        if (!u) return;
        if (!l.simulateTouch && "mouse" === a.pointerType) return;
        if (n.allowTouchCallbacks && t.emit("touchEnd", a), n.allowTouchCallbacks = !1, !n.isTouched) return n.isMoved && l.grabCursor && t.setGrabCursor(!1), n.isMoved = !1, void (n.startMoving = !1);
        l.grabCursor && n.isMoved && n.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
        const c = E(), d = c - n.touchStartTime;
        if (t.allowClick) {
            const e = a.path || a.composedPath && a.composedPath();
            t.updateClickedSlide(e && e[0] || a.target, e), t.emit("tap click", a), d < 300 && c - n.lastClickTime < 300 && t.emit("doubleTap doubleClick", a)
        }
        if (n.lastClickTime = E(), x((() => {
            t.destroyed || (t.allowClick = !0)
        })), !n.isTouched || !n.isMoved || !t.swipeDirection || 0 === i.diff && !n.loopSwapReset || n.currentTranslate === n.startTranslate && !n.loopSwapReset) return n.isTouched = !1, n.isMoved = !1, void (n.startMoving = !1);
        let f;
        if (n.isTouched = !1, n.isMoved = !1, n.startMoving = !1, f = l.followFinger ? o ? t.translate : -t.translate : -n.currentTranslate, l.cssMode) return;
        if (l.freeMode && l.freeMode.enabled) return void t.freeMode.onTouchEnd({currentPos: f});
        const p = f >= -t.maxTranslate() && !t.params.loop;
        let m = 0, h = t.slidesSizesGrid[0];
        for (let w = 0; w < s.length; w += w < l.slidesPerGroupSkip ? 1 : l.slidesPerGroup) {
            const e = w < l.slidesPerGroupSkip - 1 ? 1 : l.slidesPerGroup;
            "undefined" !== typeof s[w + e] ? (p || f >= s[w] && f < s[w + e]) && (m = w, h = s[w + e] - s[w]) : (p || f >= s[w]) && (m = w, h = s[s.length - 1] - s[s.length - 2])
        }
        let g = null, v = null;
        l.rewind && (t.isBeginning ? v = l.virtual && l.virtual.enabled && t.virtual ? t.virtual.slides.length - 1 : t.slides.length - 1 : t.isEnd && (g = 0));
        const y = (f - s[m]) / h, b = m < l.slidesPerGroupSkip - 1 ? 1 : l.slidesPerGroup;
        if (d > l.longSwipesMs) {
            if (!l.longSwipes) return void t.slideTo(t.activeIndex);
            "next" === t.swipeDirection && (y >= l.longSwipesRatio ? t.slideTo(l.rewind && t.isEnd ? g : m + b) : t.slideTo(m)), "prev" === t.swipeDirection && (y > 1 - l.longSwipesRatio ? t.slideTo(m + b) : null !== v && y < 0 && Math.abs(y) > l.longSwipesRatio ? t.slideTo(v) : t.slideTo(m))
        } else {
            if (!l.shortSwipes) return void t.slideTo(t.activeIndex);
            t.navigation && (a.target === t.navigation.nextEl || a.target === t.navigation.prevEl) ? a.target === t.navigation.nextEl ? t.slideTo(m + b) : t.slideTo(m) : ("next" === t.swipeDirection && t.slideTo(null !== g ? g : m + b), "prev" === t.swipeDirection && t.slideTo(null !== v ? v : m))
        }
    }

    function re() {
        const e = this, {params: t, el: n} = e;
        if (n && 0 === n.offsetWidth) return;
        t.breakpoints && e.setBreakpoint();
        const {allowSlideNext: r, allowSlidePrev: a, snapGrid: l} = e, i = e.virtual && e.params.virtual.enabled;
        e.allowSlideNext = !0, e.allowSlidePrev = !0, e.updateSize(), e.updateSlides(), e.updateSlidesClasses();
        const o = i && t.loop;
        !("auto" === t.slidesPerView || t.slidesPerView > 1) || !e.isEnd || e.isBeginning || e.params.centeredSlides || o ? e.params.loop && !i ? e.slideToLoop(e.realIndex, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0) : e.slideTo(e.slides.length - 1, 0, !1, !0), e.autoplay && e.autoplay.running && e.autoplay.paused && (clearTimeout(e.autoplay.resizeTimeout), e.autoplay.resizeTimeout = setTimeout((() => {
            e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.resume()
        }), 500)), e.allowSlidePrev = a, e.allowSlideNext = r, e.params.watchOverflow && l !== e.snapGrid && e.checkOverflow()
    }

    function ae(e) {
        const t = this;
        t.enabled && (t.allowClick || (t.params.preventClicks && e.preventDefault(), t.params.preventClicksPropagation && t.animating && (e.stopPropagation(), e.stopImmediatePropagation())))
    }

    function le() {
        const e = this, {wrapperEl: t, rtlTranslate: n, enabled: r} = e;
        if (!r) return;
        let a;
        e.previousTranslate = e.translate, e.isHorizontal() ? e.translate = -t.scrollLeft : e.translate = -t.scrollTop, 0 === e.translate && (e.translate = 0), e.updateActiveIndex(), e.updateSlidesClasses();
        const l = e.maxTranslate() - e.minTranslate();
        a = 0 === l ? 0 : (e.translate - e.minTranslate()) / l, a !== e.progress && e.updateProgress(n ? -e.translate : e.translate), e.emit("setTranslate", e.translate, !1)
    }

    function ie(e) {
        const t = this;
        q(t, e.target), t.params.cssMode || "auto" !== t.params.slidesPerView && !t.params.autoHeight || t.update()
    }

    function oe() {
        const e = this;
        e.documentTouchHandlerProceeded || (e.documentTouchHandlerProceeded = !0, e.params.touchReleaseOnEdges && (e.el.style.touchAction = "auto"))
    }

    const se = (e, t) => {
        const n = w(), {params: r, el: a, wrapperEl: l, device: i} = e, o = !!r.nested,
            s = "on" === t ? "addEventListener" : "removeEventListener", u = t;
        a && "string" !== typeof a && (n[s]("touchstart", e.onDocumentTouchStart, {
            passive: !1,
            capture: o
        }), a[s]("touchstart", e.onTouchStart, {passive: !1}), a[s]("pointerdown", e.onTouchStart, {passive: !1}), n[s]("touchmove", e.onTouchMove, {
            passive: !1,
            capture: o
        }), n[s]("pointermove", e.onTouchMove, {
            passive: !1,
            capture: o
        }), n[s]("touchend", e.onTouchEnd, {passive: !0}), n[s]("pointerup", e.onTouchEnd, {passive: !0}), n[s]("pointercancel", e.onTouchEnd, {passive: !0}), n[s]("touchcancel", e.onTouchEnd, {passive: !0}), n[s]("pointerout", e.onTouchEnd, {passive: !0}), n[s]("pointerleave", e.onTouchEnd, {passive: !0}), n[s]("contextmenu", e.onTouchEnd, {passive: !0}), (r.preventClicks || r.preventClicksPropagation) && a[s]("click", e.onClick, !0), r.cssMode && l[s]("scroll", e.onScroll), r.updateOnWindowResize ? e[u](i.ios || i.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", re, !0) : e[u]("observerUpdate", re, !0), a[s]("load", e.onLoad, {capture: !0}))
    };
    const ue = (e, t) => e.grid && t.grid && t.grid.rows > 1;
    var ce = {
        init: !0,
        direction: "horizontal",
        oneWayMovement: !1,
        swiperElementNodeName: "SWIPER-CONTAINER",
        touchEventsTarget: "wrapper",
        initialSlide: 0,
        speed: 300,
        cssMode: !1,
        updateOnWindowResize: !0,
        resizeObserver: !0,
        nested: !1,
        createElements: !1,
        eventsPrefix: "swiper",
        enabled: !0,
        focusableElements: "input, select, option, textarea, button, video, label",
        width: null,
        height: null,
        preventInteractionOnTransition: !1,
        userAgent: null,
        url: null,
        edgeSwipeDetection: !1,
        edgeSwipeThreshold: 20,
        autoHeight: !1,
        setWrapperSize: !1,
        virtualTranslate: !1,
        effect: "slide",
        breakpoints: void 0,
        breakpointsBase: "window",
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerGroup: 1,
        slidesPerGroupSkip: 0,
        slidesPerGroupAuto: !1,
        centeredSlides: !1,
        centeredSlidesBounds: !1,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        normalizeSlideIndex: !0,
        centerInsufficientSlides: !1,
        watchOverflow: !0,
        roundLengths: !1,
        touchRatio: 1,
        touchAngle: 45,
        simulateTouch: !0,
        shortSwipes: !0,
        longSwipes: !0,
        longSwipesRatio: .5,
        longSwipesMs: 300,
        followFinger: !0,
        allowTouchMove: !0,
        threshold: 5,
        touchMoveStopPropagation: !1,
        touchStartPreventDefault: !0,
        touchStartForcePreventDefault: !1,
        touchReleaseOnEdges: !1,
        uniqueNavElements: !0,
        resistance: !0,
        resistanceRatio: .85,
        watchSlidesProgress: !1,
        grabCursor: !1,
        preventClicks: !0,
        preventClicksPropagation: !0,
        slideToClickedSlide: !1,
        loop: !1,
        loopAddBlankSlides: !0,
        loopAdditionalSlides: 0,
        loopPreventsSliding: !0,
        rewind: !1,
        allowSlidePrev: !0,
        allowSlideNext: !0,
        swipeHandler: null,
        noSwiping: !0,
        noSwipingClass: "swiper-no-swiping",
        noSwipingSelector: null,
        passiveListeners: !0,
        maxBackfaceHiddenSlides: 10,
        containerModifierClass: "swiper-",
        slideClass: "swiper-slide",
        slideBlankClass: "swiper-slide-blank",
        slideActiveClass: "swiper-slide-active",
        slideVisibleClass: "swiper-slide-visible",
        slideFullyVisibleClass: "swiper-slide-fully-visible",
        slideNextClass: "swiper-slide-next",
        slidePrevClass: "swiper-slide-prev",
        wrapperClass: "swiper-wrapper",
        lazyPreloaderClass: "swiper-lazy-preloader",
        lazyPreloadPrevNext: 0,
        runCallbacksOnInit: !0,
        _emitClasses: !1
    };

    function de(e, t) {
        return function (n) {
            void 0 === n && (n = {});
            const r = Object.keys(n)[0], a = n[r];
            "object" === typeof a && null !== a ? (!0 === e[r] && (e[r] = {enabled: !0}), "navigation" === r && e[r] && e[r].enabled && !e[r].prevEl && !e[r].nextEl && (e[r].auto = !0), ["pagination", "scrollbar"].indexOf(r) >= 0 && e[r] && e[r].enabled && !e[r].el && (e[r].auto = !0), r in e && "enabled" in a ? ("object" !== typeof e[r] || "enabled" in e[r] || (e[r].enabled = !0), e[r] || (e[r] = {enabled: !1}), C(t, n)) : C(t, n)) : C(t, n)
        }
    }

    const fe = {
        eventsEmitter: H, update: Q, translate: Y, transition: {
            setTransition: function (e, t) {
                const n = this;
                n.params.cssMode || (n.wrapperEl.style.transitionDuration = "".concat(e, "ms"), n.wrapperEl.style.transitionDelay = 0 === e ? "0ms" : ""), n.emit("setTransition", e, t)
            }, transitionStart: function (e, t) {
                void 0 === e && (e = !0);
                const n = this, {params: r} = n;
                r.cssMode || (r.autoHeight && n.updateAutoHeight(), X({
                    swiper: n,
                    runCallbacks: e,
                    direction: t,
                    step: "Start"
                }))
            }, transitionEnd: function (e, t) {
                void 0 === e && (e = !0);
                const n = this, {params: r} = n;
                n.animating = !1, r.cssMode || (n.setTransition(0), X({
                    swiper: n,
                    runCallbacks: e,
                    direction: t,
                    step: "End"
                }))
            }
        }, slide: K, loop: Z, grabCursor: {
            setGrabCursor: function (e) {
                const t = this;
                if (!t.params.simulateTouch || t.params.watchOverflow && t.isLocked || t.params.cssMode) return;
                const n = "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
                t.isElement && (t.__preventObserver__ = !0), n.style.cursor = "move", n.style.cursor = e ? "grabbing" : "grab", t.isElement && requestAnimationFrame((() => {
                    t.__preventObserver__ = !1
                }))
            }, unsetGrabCursor: function () {
                const e = this;
                e.params.watchOverflow && e.isLocked || e.params.cssMode || (e.isElement && (e.__preventObserver__ = !0), e["container" === e.params.touchEventsTarget ? "el" : "wrapperEl"].style.cursor = "", e.isElement && requestAnimationFrame((() => {
                    e.__preventObserver__ = !1
                })))
            }
        }, events: {
            attachEvents: function () {
                const e = this, {params: t} = e;
                e.onTouchStart = ee.bind(e), e.onTouchMove = te.bind(e), e.onTouchEnd = ne.bind(e), e.onDocumentTouchStart = oe.bind(e), t.cssMode && (e.onScroll = le.bind(e)), e.onClick = ae.bind(e), e.onLoad = ie.bind(e), se(e, "on")
            }, detachEvents: function () {
                se(this, "off")
            }
        }, breakpoints: {
            setBreakpoint: function () {
                const e = this, {realIndex: t, initialized: n, params: r, el: a} = e, l = r.breakpoints;
                if (!l || l && 0 === Object.keys(l).length) return;
                const i = e.getBreakpoint(l, e.params.breakpointsBase, e.el);
                if (!i || e.currentBreakpoint === i) return;
                const o = (i in l ? l[i] : void 0) || e.originalParams, s = ue(e, r), u = ue(e, o),
                    c = e.params.grabCursor, d = o.grabCursor, f = r.enabled;
                s && !u ? (a.classList.remove("".concat(r.containerModifierClass, "grid"), "".concat(r.containerModifierClass, "grid-column")), e.emitContainerClasses()) : !s && u && (a.classList.add("".concat(r.containerModifierClass, "grid")), (o.grid.fill && "column" === o.grid.fill || !o.grid.fill && "column" === r.grid.fill) && a.classList.add("".concat(r.containerModifierClass, "grid-column")), e.emitContainerClasses()), c && !d ? e.unsetGrabCursor() : !c && d && e.setGrabCursor(), ["navigation", "pagination", "scrollbar"].forEach((t => {
                    if ("undefined" === typeof o[t]) return;
                    const n = r[t] && r[t].enabled, a = o[t] && o[t].enabled;
                    n && !a && e[t].disable(), !n && a && e[t].enable()
                }));
                const p = o.direction && o.direction !== r.direction,
                    m = r.loop && (o.slidesPerView !== r.slidesPerView || p), h = r.loop;
                p && n && e.changeDirection(), C(e.params, o);
                const g = e.params.enabled, v = e.params.loop;
                Object.assign(e, {
                    allowTouchMove: e.params.allowTouchMove,
                    allowSlideNext: e.params.allowSlideNext,
                    allowSlidePrev: e.params.allowSlidePrev
                }), f && !g ? e.disable() : !f && g && e.enable(), e.currentBreakpoint = i, e.emit("_beforeBreakpoint", o), n && (m ? (e.loopDestroy(), e.loopCreate(t), e.updateSlides()) : !h && v ? (e.loopCreate(t), e.updateSlides()) : h && !v && e.loopDestroy()), e.emit("breakpoint", o)
            }, getBreakpoint: function (e, t, n) {
                if (void 0 === t && (t = "window"), !e || "container" === t && !n) return;
                let r = !1;
                const a = k(), l = "window" === t ? a.innerHeight : n.clientHeight, i = Object.keys(e).map((e => {
                    if ("string" === typeof e && 0 === e.indexOf("@")) {
                        const t = parseFloat(e.substr(1));
                        return {value: l * t, point: e}
                    }
                    return {value: e, point: e}
                }));
                i.sort(((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10)));
                for (let o = 0; o < i.length; o += 1) {
                    const {point: e, value: l} = i[o];
                    "window" === t ? a.matchMedia("(min-width: ".concat(l, "px)")).matches && (r = e) : l <= n.clientWidth && (r = e)
                }
                return r || "max"
            }
        }, checkOverflow: {
            checkOverflow: function () {
                const e = this, {isLocked: t, params: n} = e, {slidesOffsetBefore: r} = n;
                if (r) {
                    const t = e.slides.length - 1, n = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * r;
                    e.isLocked = e.size > n
                } else e.isLocked = 1 === e.snapGrid.length;
                !0 === n.allowSlideNext && (e.allowSlideNext = !e.isLocked), !0 === n.allowSlidePrev && (e.allowSlidePrev = !e.isLocked), t && t !== e.isLocked && (e.isEnd = !1), t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock")
            }
        }, classes: {
            addClasses: function () {
                const e = this, {classNames: t, params: n, rtl: r, el: a, device: l} = e, i = function (e, t) {
                    const n = [];
                    return e.forEach((e => {
                        "object" === typeof e ? Object.keys(e).forEach((r => {
                            e[r] && n.push(t + r)
                        })) : "string" === typeof e && n.push(t + e)
                    })), n
                }(["initialized", n.direction, {"free-mode": e.params.freeMode && n.freeMode.enabled}, {autoheight: n.autoHeight}, {rtl: r}, {grid: n.grid && n.grid.rows > 1}, {"grid-column": n.grid && n.grid.rows > 1 && "column" === n.grid.fill}, {android: l.android}, {ios: l.ios}, {"css-mode": n.cssMode}, {centered: n.cssMode && n.centeredSlides}, {"watch-progress": n.watchSlidesProgress}], n.containerModifierClass);
                t.push(...i), a.classList.add(...t), e.emitContainerClasses()
            }, removeClasses: function () {
                const {el: e, classNames: t} = this;
                e && "string" !== typeof e && (e.classList.remove(...t), this.emitContainerClasses())
            }
        }
    }, pe = {};

    class me {
        constructor() {
            let e, t;
            for (var n = arguments.length, r = new Array(n), a = 0; a < n; a++) r[a] = arguments[a];
            1 === r.length && r[0].constructor && "Object" === Object.prototype.toString.call(r[0]).slice(8, -1) ? t = r[0] : [e, t] = r, t || (t = {}), t = C({}, t), e && !t.el && (t.el = e);
            const l = w();
            if (t.el && "string" === typeof t.el && l.querySelectorAll(t.el).length > 1) {
                const e = [];
                return l.querySelectorAll(t.el).forEach((n => {
                    const r = C({}, t, {el: n});
                    e.push(new me(r))
                })), e
            }
            const i = this;
            i.__swiper__ = !0, i.support = F(), i.device = V({userAgent: t.userAgent}), i.browser = B(), i.eventsListeners = {}, i.eventsAnyListeners = [], i.modules = [...i.__modules__], t.modules && Array.isArray(t.modules) && i.modules.push(...t.modules);
            const o = {};
            i.modules.forEach((e => {
                e({
                    params: t,
                    swiper: i,
                    extendParams: de(t, o),
                    on: i.on.bind(i),
                    once: i.once.bind(i),
                    off: i.off.bind(i),
                    emit: i.emit.bind(i)
                })
            }));
            const s = C({}, ce, o);
            return i.params = C({}, s, pe, t), i.originalParams = C({}, i.params), i.passedParams = C({}, t), i.params && i.params.on && Object.keys(i.params.on).forEach((e => {
                i.on(e, i.params.on[e])
            })), i.params && i.params.onAny && i.onAny(i.params.onAny), Object.assign(i, {
                enabled: i.params.enabled,
                el: e,
                classNames: [],
                slides: [],
                slidesGrid: [],
                snapGrid: [],
                slidesSizesGrid: [],
                isHorizontal: () => "horizontal" === i.params.direction,
                isVertical: () => "vertical" === i.params.direction,
                activeIndex: 0,
                realIndex: 0,
                isBeginning: !0,
                isEnd: !1,
                translate: 0,
                previousTranslate: 0,
                progress: 0,
                velocity: 0,
                animating: !1,
                cssOverflowAdjustment() {
                    return Math.trunc(this.translate / 2 ** 23) * 2 ** 23
                },
                allowSlideNext: i.params.allowSlideNext,
                allowSlidePrev: i.params.allowSlidePrev,
                touchEventsData: {
                    isTouched: void 0,
                    isMoved: void 0,
                    allowTouchCallbacks: void 0,
                    touchStartTime: void 0,
                    isScrolling: void 0,
                    currentTranslate: void 0,
                    startTranslate: void 0,
                    allowThresholdMove: void 0,
                    focusableElements: i.params.focusableElements,
                    lastClickTime: 0,
                    clickTimeout: void 0,
                    velocities: [],
                    allowMomentumBounce: void 0,
                    startMoving: void 0,
                    pointerId: null,
                    touchId: null
                },
                allowClick: !0,
                allowTouchMove: i.params.allowTouchMove,
                touches: {startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0},
                imagesToLoad: [],
                imagesLoaded: 0
            }), i.emit("_swiper"), i.params.init && i.init(), i
        }

        getDirectionLabel(e) {
            return this.isHorizontal() ? e : {
                width: "height",
                "margin-top": "margin-left",
                "margin-bottom ": "margin-right",
                "margin-left": "margin-top",
                "margin-right": "margin-bottom",
                "padding-left": "padding-top",
                "padding-right": "padding-bottom",
                marginRight: "marginBottom"
            }[e]
        }

        getSlideIndex(e) {
            const {slidesEl: t, params: n} = this, r = A(N(t, ".".concat(n.slideClass, ", swiper-slide"))[0]);
            return A(e) - r
        }

        getSlideIndexByData(e) {
            return this.getSlideIndex(this.slides.filter((t => 1 * t.getAttribute("data-swiper-slide-index") === e))[0])
        }

        recalcSlides() {
            const {slidesEl: e, params: t} = this;
            this.slides = N(e, ".".concat(t.slideClass, ", swiper-slide"))
        }

        enable() {
            const e = this;
            e.enabled || (e.enabled = !0, e.params.grabCursor && e.setGrabCursor(), e.emit("enable"))
        }

        disable() {
            const e = this;
            e.enabled && (e.enabled = !1, e.params.grabCursor && e.unsetGrabCursor(), e.emit("disable"))
        }

        setProgress(e, t) {
            const n = this;
            e = Math.min(Math.max(e, 0), 1);
            const r = n.minTranslate(), a = (n.maxTranslate() - r) * e + r;
            n.translateTo(a, "undefined" === typeof t ? 0 : t), n.updateActiveIndex(), n.updateSlidesClasses()
        }

        emitContainerClasses() {
            const e = this;
            if (!e.params._emitClasses || !e.el) return;
            const t = e.el.className.split(" ").filter((t => 0 === t.indexOf("swiper") || 0 === t.indexOf(e.params.containerModifierClass)));
            e.emit("_containerClasses", t.join(" "))
        }

        getSlideClasses(e) {
            const t = this;
            return t.destroyed ? "" : e.className.split(" ").filter((e => 0 === e.indexOf("swiper-slide") || 0 === e.indexOf(t.params.slideClass))).join(" ")
        }

        emitSlidesClasses() {
            const e = this;
            if (!e.params._emitClasses || !e.el) return;
            const t = [];
            e.slides.forEach((n => {
                const r = e.getSlideClasses(n);
                t.push({slideEl: n, classNames: r}), e.emit("_slideClass", n, r)
            })), e.emit("_slideClasses", t)
        }

        slidesPerViewDynamic(e, t) {
            void 0 === e && (e = "current"), void 0 === t && (t = !1);
            const {params: n, slides: r, slidesGrid: a, slidesSizesGrid: l, size: i, activeIndex: o} = this;
            let s = 1;
            if ("number" === typeof n.slidesPerView) return n.slidesPerView;
            if (n.centeredSlides) {
                let e, t = r[o] ? Math.ceil(r[o].swiperSlideSize) : 0;
                for (let n = o + 1; n < r.length; n += 1) r[n] && !e && (t += Math.ceil(r[n].swiperSlideSize), s += 1, t > i && (e = !0));
                for (let n = o - 1; n >= 0; n -= 1) r[n] && !e && (t += r[n].swiperSlideSize, s += 1, t > i && (e = !0))
            } else if ("current" === e) for (let u = o + 1; u < r.length; u += 1) {
                (t ? a[u] + l[u] - a[o] < i : a[u] - a[o] < i) && (s += 1)
            } else for (let u = o - 1; u >= 0; u -= 1) {
                a[o] - a[u] < i && (s += 1)
            }
            return s
        }

        update() {
            const e = this;
            if (!e || e.destroyed) return;
            const {snapGrid: t, params: n} = e;

            function r() {
                const t = e.rtlTranslate ? -1 * e.translate : e.translate,
                    n = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
                e.setTranslate(n), e.updateActiveIndex(), e.updateSlidesClasses()
            }

            let a;
            if (n.breakpoints && e.setBreakpoint(), [...e.el.querySelectorAll('[loading="lazy"]')].forEach((t => {
                t.complete && q(e, t)
            })), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), n.freeMode && n.freeMode.enabled && !n.cssMode) r(), n.autoHeight && e.updateAutoHeight(); else {
                if (("auto" === n.slidesPerView || n.slidesPerView > 1) && e.isEnd && !n.centeredSlides) {
                    const t = e.virtual && n.virtual.enabled ? e.virtual.slides : e.slides;
                    a = e.slideTo(t.length - 1, 0, !1, !0)
                } else a = e.slideTo(e.activeIndex, 0, !1, !0);
                a || r()
            }
            n.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit("update")
        }

        changeDirection(e, t) {
            void 0 === t && (t = !0);
            const n = this, r = n.params.direction;
            return e || (e = "horizontal" === r ? "vertical" : "horizontal"), e === r || "horizontal" !== e && "vertical" !== e || (n.el.classList.remove("".concat(n.params.containerModifierClass).concat(r)), n.el.classList.add("".concat(n.params.containerModifierClass).concat(e)), n.emitContainerClasses(), n.params.direction = e, n.slides.forEach((t => {
                "vertical" === e ? t.style.width = "" : t.style.height = ""
            })), n.emit("changeDirection"), t && n.update()), n
        }

        changeLanguageDirection(e) {
            const t = this;
            t.rtl && "rtl" === e || !t.rtl && "ltr" === e || (t.rtl = "rtl" === e, t.rtlTranslate = "horizontal" === t.params.direction && t.rtl, t.rtl ? (t.el.classList.add("".concat(t.params.containerModifierClass, "rtl")), t.el.dir = "rtl") : (t.el.classList.remove("".concat(t.params.containerModifierClass, "rtl")), t.el.dir = "ltr"), t.update())
        }

        mount(e) {
            const t = this;
            if (t.mounted) return !0;
            let n = e || t.params.el;
            if ("string" === typeof n && (n = document.querySelector(n)), !n) return !1;
            n.swiper = t, n.parentNode && n.parentNode.host && n.parentNode.host.nodeName === t.params.swiperElementNodeName.toUpperCase() && (t.isElement = !0);
            const r = () => ".".concat((t.params.wrapperClass || "").trim().split(" ").join("."));
            let a = (() => {
                if (n && n.shadowRoot && n.shadowRoot.querySelector) {
                    return n.shadowRoot.querySelector(r())
                }
                return N(n, r())[0]
            })();
            return !a && t.params.createElements && (a = O("div", t.params.wrapperClass), n.append(a), N(n, ".".concat(t.params.slideClass)).forEach((e => {
                a.append(e)
            }))), Object.assign(t, {
                el: n,
                wrapperEl: a,
                slidesEl: t.isElement && !n.parentNode.host.slideSlots ? n.parentNode.host : a,
                hostEl: t.isElement ? n.parentNode.host : n,
                mounted: !0,
                rtl: "rtl" === n.dir.toLowerCase() || "rtl" === M(n, "direction"),
                rtlTranslate: "horizontal" === t.params.direction && ("rtl" === n.dir.toLowerCase() || "rtl" === M(n, "direction")),
                wrongRTL: "-webkit-box" === M(a, "display")
            }), !0
        }

        init(e) {
            const t = this;
            if (t.initialized) return t;
            if (!1 === t.mount(e)) return t;
            t.emit("beforeInit"), t.params.breakpoints && t.setBreakpoint(), t.addClasses(), t.updateSize(), t.updateSlides(), t.params.watchOverflow && t.checkOverflow(), t.params.grabCursor && t.enabled && t.setGrabCursor(), t.params.loop && t.virtual && t.params.virtual.enabled ? t.slideTo(t.params.initialSlide + t.virtual.slidesBefore, 0, t.params.runCallbacksOnInit, !1, !0) : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit, !1, !0), t.params.loop && t.loopCreate(), t.attachEvents();
            const n = [...t.el.querySelectorAll('[loading="lazy"]')];
            return t.isElement && n.push(...t.hostEl.querySelectorAll('[loading="lazy"]')), n.forEach((e => {
                e.complete ? q(t, e) : e.addEventListener("load", (e => {
                    q(t, e.target)
                }))
            })), $(t), t.initialized = !0, $(t), t.emit("init"), t.emit("afterInit"), t
        }

        destroy(e, t) {
            void 0 === e && (e = !0), void 0 === t && (t = !0);
            const n = this, {params: r, el: a, wrapperEl: l, slides: i} = n;
            return "undefined" === typeof n.params || n.destroyed || (n.emit("beforeDestroy"), n.initialized = !1, n.detachEvents(), r.loop && n.loopDestroy(), t && (n.removeClasses(), a && "string" !== typeof a && a.removeAttribute("style"), l && l.removeAttribute("style"), i && i.length && i.forEach((e => {
                e.classList.remove(r.slideVisibleClass, r.slideFullyVisibleClass, r.slideActiveClass, r.slideNextClass, r.slidePrevClass), e.removeAttribute("style"), e.removeAttribute("data-swiper-slide-index")
            }))), n.emit("destroy"), Object.keys(n.eventsListeners).forEach((e => {
                n.off(e)
            })), !1 !== e && (n.el && "string" !== typeof n.el && (n.el.swiper = null), function (e) {
                const t = e;
                Object.keys(t).forEach((e => {
                    try {
                        t[e] = null
                    } catch (n) {
                    }
                    try {
                        delete t[e]
                    } catch (n) {
                    }
                }))
            }(n)), n.destroyed = !0), null
        }

        static extendDefaults(e) {
            C(pe, e)
        }

        static get extendedDefaults() {
            return pe
        }

        static get defaults() {
            return ce
        }

        static installModule(e) {
            me.prototype.__modules__ || (me.prototype.__modules__ = []);
            const t = me.prototype.__modules__;
            "function" === typeof e && t.indexOf(e) < 0 && t.push(e)
        }

        static use(e) {
            return Array.isArray(e) ? (e.forEach((e => me.installModule(e))), me) : (me.installModule(e), me)
        }
    }

    Object.keys(fe).forEach((e => {
        Object.keys(fe[e]).forEach((t => {
            me.prototype[t] = fe[e][t]
        }))
    })), me.use([function (e) {
        let {swiper: t, on: n, emit: r} = e;
        const a = k();
        let l = null, i = null;
        const o = () => {
            t && !t.destroyed && t.initialized && (r("beforeResize"), r("resize"))
        }, s = () => {
            t && !t.destroyed && t.initialized && r("orientationchange")
        };
        n("init", (() => {
            t.params.resizeObserver && "undefined" !== typeof a.ResizeObserver ? t && !t.destroyed && t.initialized && (l = new ResizeObserver((e => {
                i = a.requestAnimationFrame((() => {
                    const {width: n, height: r} = t;
                    let a = n, l = r;
                    e.forEach((e => {
                        let {contentBoxSize: n, contentRect: r, target: i} = e;
                        i && i !== t.el || (a = r ? r.width : (n[0] || n).inlineSize, l = r ? r.height : (n[0] || n).blockSize)
                    })), a === n && l === r || o()
                }))
            })), l.observe(t.el)) : (a.addEventListener("resize", o), a.addEventListener("orientationchange", s))
        })), n("destroy", (() => {
            i && a.cancelAnimationFrame(i), l && l.unobserve && t.el && (l.unobserve(t.el), l = null), a.removeEventListener("resize", o), a.removeEventListener("orientationchange", s)
        }))
    }, function (e) {
        let {swiper: t, extendParams: n, on: r, emit: a} = e;
        const l = [], i = k(), o = function (e, n) {
            void 0 === n && (n = {});
            const r = new (i.MutationObserver || i.WebkitMutationObserver)((e => {
                if (t.__preventObserver__) return;
                if (1 === e.length) return void a("observerUpdate", e[0]);
                const n = function () {
                    a("observerUpdate", e[0])
                };
                i.requestAnimationFrame ? i.requestAnimationFrame(n) : i.setTimeout(n, 0)
            }));
            r.observe(e, {
                attributes: "undefined" === typeof n.attributes || n.attributes,
                childList: t.isElement || ("undefined" === typeof n.childList || n).childList,
                characterData: "undefined" === typeof n.characterData || n.characterData
            }), l.push(r)
        };
        n({observer: !1, observeParents: !1, observeSlideChildren: !1}), r("init", (() => {
            if (t.params.observer) {
                if (t.params.observeParents) {
                    const e = function (e, t) {
                        const n = [];
                        let r = e.parentElement;
                        for (; r;) t ? r.matches(t) && n.push(r) : n.push(r), r = r.parentElement;
                        return n
                    }(t.hostEl);
                    for (let t = 0; t < e.length; t += 1) o(e[t])
                }
                o(t.hostEl, {childList: t.params.observeSlideChildren}), o(t.wrapperEl, {attributes: !1})
            }
        })), r("destroy", (() => {
            l.forEach((e => {
                e.disconnect()
            })), l.splice(0, l.length)
        }))
    }]);
    const he = ["eventsPrefix", "injectStyles", "injectStylesUrls", "modules", "init", "_direction", "oneWayMovement", "swiperElementNodeName", "touchEventsTarget", "initialSlide", "_speed", "cssMode", "updateOnWindowResize", "resizeObserver", "nested", "focusableElements", "_enabled", "_width", "_height", "preventInteractionOnTransition", "userAgent", "url", "_edgeSwipeDetection", "_edgeSwipeThreshold", "_freeMode", "_autoHeight", "setWrapperSize", "virtualTranslate", "_effect", "breakpoints", "breakpointsBase", "_spaceBetween", "_slidesPerView", "maxBackfaceHiddenSlides", "_grid", "_slidesPerGroup", "_slidesPerGroupSkip", "_slidesPerGroupAuto", "_centeredSlides", "_centeredSlidesBounds", "_slidesOffsetBefore", "_slidesOffsetAfter", "normalizeSlideIndex", "_centerInsufficientSlides", "_watchOverflow", "roundLengths", "touchRatio", "touchAngle", "simulateTouch", "_shortSwipes", "_longSwipes", "longSwipesRatio", "longSwipesMs", "_followFinger", "allowTouchMove", "_threshold", "touchMoveStopPropagation", "touchStartPreventDefault", "touchStartForcePreventDefault", "touchReleaseOnEdges", "uniqueNavElements", "_resistance", "_resistanceRatio", "_watchSlidesProgress", "_grabCursor", "preventClicks", "preventClicksPropagation", "_slideToClickedSlide", "_loop", "loopAdditionalSlides", "loopAddBlankSlides", "loopPreventsSliding", "_rewind", "_allowSlidePrev", "_allowSlideNext", "_swipeHandler", "_noSwiping", "noSwipingClass", "noSwipingSelector", "passiveListeners", "containerModifierClass", "slideClass", "slideActiveClass", "slideVisibleClass", "slideFullyVisibleClass", "slideNextClass", "slidePrevClass", "slideBlankClass", "wrapperClass", "lazyPreloaderClass", "lazyPreloadPrevNext", "runCallbacksOnInit", "observer", "observeParents", "observeSlideChildren", "a11y", "_autoplay", "_controller", "coverflowEffect", "cubeEffect", "fadeEffect", "flipEffect", "creativeEffect", "cardsEffect", "hashNavigation", "history", "keyboard", "mousewheel", "_navigation", "_pagination", "parallax", "_scrollbar", "_thumbs", "virtual", "zoom", "control"];

    function ge(e) {
        return "object" === typeof e && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1) && !e.__swiper__
    }

    function ve(e, t) {
        const n = ["__proto__", "constructor", "prototype"];
        Object.keys(t).filter((e => n.indexOf(e) < 0)).forEach((n => {
            "undefined" === typeof e[n] ? e[n] = t[n] : ge(t[n]) && ge(e[n]) && Object.keys(t[n]).length > 0 ? t[n].__swiper__ ? e[n] = t[n] : ve(e[n], t[n]) : e[n] = t[n]
        }))
    }

    function ye(e) {
        return void 0 === e && (e = {}), e.navigation && "undefined" === typeof e.navigation.nextEl && "undefined" === typeof e.navigation.prevEl
    }

    function be(e) {
        return void 0 === e && (e = {}), e.pagination && "undefined" === typeof e.pagination.el
    }

    function we(e) {
        return void 0 === e && (e = {}), e.scrollbar && "undefined" === typeof e.scrollbar.el
    }

    function Se(e) {
        void 0 === e && (e = "");
        const t = e.split(" ").map((e => e.trim())).filter((e => !!e)), n = [];
        return t.forEach((e => {
            n.indexOf(e) < 0 && n.push(e)
        })), n.join(" ")
    }

    function ke(e) {
        return void 0 === e && (e = ""), e ? e.includes("swiper-wrapper") ? e : "swiper-wrapper ".concat(e) : "swiper-wrapper"
    }

    const xe = ["className", "tag", "wrapperTag", "children", "onSwiper"],
        Ee = ["tag", "children", "className", "swiper", "zoom", "lazy", "virtualIndex", "swiperSlideIndex"];

    function _e() {
        return _e = Object.assign ? Object.assign.bind() : function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }, _e.apply(this, arguments)
    }

    function Te(e) {
        return e.type && e.type.displayName && e.type.displayName.includes("SwiperSlide")
    }

    function Ce(e) {
        const t = [];
        return r.Children.toArray(e).forEach((e => {
            Te(e) ? t.push(e) : e.props && e.props.children && Ce(e.props.children).forEach((e => t.push(e)))
        })), t
    }

    function Pe(e) {
        const t = [], n = {"container-start": [], "container-end": [], "wrapper-start": [], "wrapper-end": []};
        return r.Children.toArray(e).forEach((e => {
            if (Te(e)) t.push(e); else if (e.props && e.props.slot && n[e.props.slot]) n[e.props.slot].push(e); else if (e.props && e.props.children) {
                const r = Ce(e.props.children);
                r.length > 0 ? r.forEach((e => t.push(e))) : n["container-end"].push(e)
            } else n["container-end"].push(e)
        })), {slides: t, slots: n}
    }

    function ze(e, t) {
        return "undefined" === typeof window ? (0, r.useEffect)(e, t) : (0, r.useLayoutEffect)(e, t)
    }

    const Ne = (0, r.createContext)(null), Le = (0, r.createContext)(null), Oe = (0, r.forwardRef)((function (e, t) {
        let n = void 0 === e ? {} : e, {
            className: a,
            tag: l = "div",
            wrapperTag: i = "div",
            children: o,
            onSwiper: s
        } = n, u = g(n, xe), c = !1;
        const [d, f] = (0, r.useState)("swiper"), [p, m] = (0, r.useState)(null), [v, y] = (0, r.useState)(!1),
            b = (0, r.useRef)(!1), w = (0, r.useRef)(null), S = (0, r.useRef)(null), k = (0, r.useRef)(null),
            x = (0, r.useRef)(null), E = (0, r.useRef)(null), _ = (0, r.useRef)(null), T = (0, r.useRef)(null),
            C = (0, r.useRef)(null), {params: P, passedParams: z, rest: N, events: L} = function (e, t) {
                void 0 === e && (e = {}), void 0 === t && (t = !0);
                const n = {on: {}}, r = {}, a = {};
                ve(n, ce), n._emitClasses = !0, n.init = !1;
                const l = {}, i = he.map((e => e.replace(/_/, ""))), o = Object.assign({}, e);
                return Object.keys(o).forEach((o => {
                    "undefined" !== typeof e[o] && (i.indexOf(o) >= 0 ? ge(e[o]) ? (n[o] = {}, a[o] = {}, ve(n[o], e[o]), ve(a[o], e[o])) : (n[o] = e[o], a[o] = e[o]) : 0 === o.search(/on[A-Z]/) && "function" === typeof e[o] ? t ? r["".concat(o[2].toLowerCase()).concat(o.substr(3))] = e[o] : n.on["".concat(o[2].toLowerCase()).concat(o.substr(3))] = e[o] : l[o] = e[o])
                })), ["navigation", "pagination", "scrollbar"].forEach((e => {
                    !0 === n[e] && (n[e] = {}), !1 === n[e] && delete n[e]
                })), {params: n, passedParams: a, rest: l, events: r}
            }(u), {slides: O, slots: M} = Pe(o), A = () => {
                y(!v)
            };
        Object.assign(P.on, {
            _containerClasses(e, t) {
                f(t)
            }
        });
        const I = () => {
            Object.assign(P.on, L), c = !0;
            const e = h({}, P);
            if (delete e.wrapperClass, S.current = new me(e), S.current.virtual && S.current.params.virtual.enabled) {
                S.current.virtual.slides = O;
                const e = {cache: !1, slides: O, renderExternal: m, renderExternalUpdate: !1};
                ve(S.current.params.virtual, e), ve(S.current.originalParams.virtual, e)
            }
        };
        w.current || I(), S.current && S.current.on("_beforeBreakpoint", A);
        return (0, r.useEffect)((() => () => {
            S.current && S.current.off("_beforeBreakpoint", A)
        })), (0, r.useEffect)((() => {
            !b.current && S.current && (S.current.emitSlidesClasses(), b.current = !0)
        })), ze((() => {
            if (t && (t.current = w.current), w.current) return S.current.destroyed && I(), function (e, t) {
                let {el: n, nextEl: r, prevEl: a, paginationEl: l, scrollbarEl: i, swiper: o} = e;
                ye(t) && r && a && (o.params.navigation.nextEl = r, o.originalParams.navigation.nextEl = r, o.params.navigation.prevEl = a, o.originalParams.navigation.prevEl = a), be(t) && l && (o.params.pagination.el = l, o.originalParams.pagination.el = l), we(t) && i && (o.params.scrollbar.el = i, o.originalParams.scrollbar.el = i), o.init(n)
            }({
                el: w.current,
                nextEl: E.current,
                prevEl: _.current,
                paginationEl: T.current,
                scrollbarEl: C.current,
                swiper: S.current
            }, P), s && !S.current.destroyed && s(S.current), () => {
                S.current && !S.current.destroyed && S.current.destroy(!0, !1)
            }
        }), []), ze((() => {
            !c && L && S.current && Object.keys(L).forEach((e => {
                S.current.on(e, L[e])
            }));
            const e = function (e, t, n, r, a) {
                const l = [];
                if (!t) return l;
                const i = e => {
                    l.indexOf(e) < 0 && l.push(e)
                };
                if (n && r) {
                    const e = r.map(a), t = n.map(a);
                    e.join("") !== t.join("") && i("children"), r.length !== n.length && i("children")
                }
                return he.filter((e => "_" === e[0])).map((e => e.replace(/_/, ""))).forEach((n => {
                    if (n in e && n in t) if (ge(e[n]) && ge(t[n])) {
                        const r = Object.keys(e[n]), a = Object.keys(t[n]);
                        r.length !== a.length ? i(n) : (r.forEach((r => {
                            e[n][r] !== t[n][r] && i(n)
                        })), a.forEach((r => {
                            e[n][r] !== t[n][r] && i(n)
                        })))
                    } else e[n] !== t[n] && i(n)
                })), l
            }(z, k.current, O, x.current, (e => e.key));
            return k.current = z, x.current = O, e.length && S.current && !S.current.destroyed && function (e) {
                let {
                    swiper: t,
                    slides: n,
                    passedParams: r,
                    changedParams: a,
                    nextEl: l,
                    prevEl: i,
                    scrollbarEl: o,
                    paginationEl: s
                } = e;
                const u = a.filter((e => "children" !== e && "direction" !== e && "wrapperClass" !== e)), {
                    params: c,
                    pagination: d,
                    navigation: f,
                    scrollbar: p,
                    virtual: m,
                    thumbs: h
                } = t;
                let g, v, y, b, w, S, k, x;
                a.includes("thumbs") && r.thumbs && r.thumbs.swiper && !r.thumbs.swiper.destroyed && c.thumbs && (!c.thumbs.swiper || c.thumbs.swiper.destroyed) && (g = !0), a.includes("controller") && r.controller && r.controller.control && c.controller && !c.controller.control && (v = !0), a.includes("pagination") && r.pagination && (r.pagination.el || s) && (c.pagination || !1 === c.pagination) && d && !d.el && (y = !0), a.includes("scrollbar") && r.scrollbar && (r.scrollbar.el || o) && (c.scrollbar || !1 === c.scrollbar) && p && !p.el && (b = !0), a.includes("navigation") && r.navigation && (r.navigation.prevEl || i) && (r.navigation.nextEl || l) && (c.navigation || !1 === c.navigation) && f && !f.prevEl && !f.nextEl && (w = !0);
                const E = e => {
                    t[e] && (t[e].destroy(), "navigation" === e ? (t.isElement && (t[e].prevEl.remove(), t[e].nextEl.remove()), c[e].prevEl = void 0, c[e].nextEl = void 0, t[e].prevEl = void 0, t[e].nextEl = void 0) : (t.isElement && t[e].el.remove(), c[e].el = void 0, t[e].el = void 0))
                };
                a.includes("loop") && t.isElement && (c.loop && !r.loop ? S = !0 : !c.loop && r.loop ? k = !0 : x = !0), u.forEach((e => {
                    if (ge(c[e]) && ge(r[e])) Object.assign(c[e], r[e]), "navigation" !== e && "pagination" !== e && "scrollbar" !== e || !("enabled" in r[e]) || r[e].enabled || E(e); else {
                        const t = r[e];
                        !0 !== t && !1 !== t || "navigation" !== e && "pagination" !== e && "scrollbar" !== e ? c[e] = r[e] : !1 === t && E(e)
                    }
                })), u.includes("controller") && !v && t.controller && t.controller.control && c.controller && c.controller.control && (t.controller.control = c.controller.control), a.includes("children") && n && m && c.virtual.enabled ? (m.slides = n, m.update(!0)) : a.includes("virtual") && m && c.virtual.enabled && (n && (m.slides = n), m.update(!0)), a.includes("children") && n && c.loop && (x = !0), g && h.init() && h.update(!0);
                v && (t.controller.control = c.controller.control), y && (!t.isElement || s && "string" !== typeof s || (s = document.createElement("div"), s.classList.add("swiper-pagination"), s.part.add("pagination"), t.el.appendChild(s)), s && (c.pagination.el = s), d.init(), d.render(), d.update()), b && (!t.isElement || o && "string" !== typeof o || (o = document.createElement("div"), o.classList.add("swiper-scrollbar"), o.part.add("scrollbar"), t.el.appendChild(o)), o && (c.scrollbar.el = o), p.init(), p.updateSize(), p.setTranslate()), w && (t.isElement && (l && "string" !== typeof l || (l = document.createElement("div"), l.classList.add("swiper-button-next"), l.innerHTML = t.hostEl.constructor.nextButtonSvg, l.part.add("button-next"), t.el.appendChild(l)), i && "string" !== typeof i || (i = document.createElement("div"), i.classList.add("swiper-button-prev"), i.innerHTML = t.hostEl.constructor.prevButtonSvg, i.part.add("button-prev"), t.el.appendChild(i))), l && (c.navigation.nextEl = l), i && (c.navigation.prevEl = i), f.init(), f.update()), a.includes("allowSlideNext") && (t.allowSlideNext = r.allowSlideNext), a.includes("allowSlidePrev") && (t.allowSlidePrev = r.allowSlidePrev), a.includes("direction") && t.changeDirection(r.direction, !1), (S || x) && t.loopDestroy(), (k || x) && t.loopCreate(), t.update()
            }({
                swiper: S.current,
                slides: O,
                passedParams: z,
                changedParams: e,
                nextEl: E.current,
                prevEl: _.current,
                scrollbarEl: C.current,
                paginationEl: T.current
            }), () => {
                L && S.current && Object.keys(L).forEach((e => {
                    S.current.off(e, L[e])
                }))
            }
        })), ze((() => {
            var e;
            !(e = S.current) || e.destroyed || !e.params.virtual || e.params.virtual && !e.params.virtual.enabled || (e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.parallax && e.params.parallax && e.params.parallax.enabled && e.parallax.setTranslate())
        }), [p]), r.createElement(l, _e({
            ref: w,
            className: Se("".concat(d).concat(a ? " ".concat(a) : ""))
        }, N), r.createElement(Le.Provider, {value: S.current}, M["container-start"], r.createElement(i, {className: ke(P.wrapperClass)}, M["wrapper-start"], P.virtual ? function (e, t, n) {
            if (!n) return null;
            const a = e => {
                    let n = e;
                    return e < 0 ? n = t.length + e : n >= t.length && (n -= t.length), n
                },
                l = e.isHorizontal() ? {[e.rtlTranslate ? "right" : "left"]: "".concat(n.offset, "px")} : {top: "".concat(n.offset, "px")}, {
                    from: i,
                    to: o
                } = n, s = e.params.loop ? -t.length : 0, u = e.params.loop ? 2 * t.length : t.length, c = [];
            for (let r = s; r < u; r += 1) r >= i && r <= o && c.push(t[a(r)]);
            return c.map(((t, n) => r.cloneElement(t, {
                swiper: e,
                style: l,
                key: t.props.virtualIndex || t.key || "slide-".concat(n)
            })))
        }(S.current, O, p) : O.map(((e, t) => r.cloneElement(e, {
            swiper: S.current,
            swiperSlideIndex: t
        }))), M["wrapper-end"]), ye(P) && r.createElement(r.Fragment, null, r.createElement("div", {
            ref: _,
            className: "swiper-button-prev"
        }), r.createElement("div", {ref: E, className: "swiper-button-next"})), we(P) && r.createElement("div", {
            ref: C,
            className: "swiper-scrollbar"
        }), be(P) && r.createElement("div", {ref: T, className: "swiper-pagination"}), M["container-end"]))
    }));
    Oe.displayName = "Swiper";
    const Me = (0, r.forwardRef)((function (e, t) {
        let n = void 0 === e ? {} : e, {
            tag: a = "div",
            children: l,
            className: i = "",
            swiper: o,
            zoom: s,
            lazy: u,
            virtualIndex: c,
            swiperSlideIndex: d
        } = n, f = g(n, Ee);
        const p = (0, r.useRef)(null), [m, h] = (0, r.useState)("swiper-slide"), [v, y] = (0, r.useState)(!1);

        function b(e, t, n) {
            t === p.current && h(n)
        }

        ze((() => {
            if ("undefined" !== typeof d && (p.current.swiperSlideIndex = d), t && (t.current = p.current), p.current && o) {
                if (!o.destroyed) return o.on("_slideClass", b), () => {
                    o && o.off("_slideClass", b)
                };
                "swiper-slide" !== m && h("swiper-slide")
            }
        })), ze((() => {
            o && p.current && !o.destroyed && h(o.getSlideClasses(p.current))
        }), [o]);
        const w = {
            isActive: m.indexOf("swiper-slide-active") >= 0,
            isVisible: m.indexOf("swiper-slide-visible") >= 0,
            isPrev: m.indexOf("swiper-slide-prev") >= 0,
            isNext: m.indexOf("swiper-slide-next") >= 0
        }, S = () => "function" === typeof l ? l(w) : l;
        return r.createElement(a, _e({
            ref: p,
            className: Se("".concat(m).concat(i ? " ".concat(i) : "")),
            "data-swiper-slide-index": c,
            onLoad: () => {
                y(!0)
            }
        }, f), s && r.createElement(Ne.Provider, {value: w}, r.createElement("div", {
            className: "swiper-zoom-container",
            "data-swiper-zoom": "number" === typeof s ? s : void 0
        }, S(), u && !v && r.createElement("div", {className: "swiper-lazy-preloader"}))), !s && r.createElement(Ne.Provider, {value: w}, S(), u && !v && r.createElement("div", {className: "swiper-lazy-preloader"})))
    }));

    function Ae() {
        const e = window.screen.width < 1250,
            t = [{image: "/images/slides/screen_1.png"}, {image: "/images/slides/screen_2.png"}, {image: "/images/slides/screen_3.png"}, {image: "/images/slides/screen_4.png"}, {image: "/images/slides/screen_5.png"}, {image: "/images/slides/screen_6.png"}, {image: "/images/slides/screen_7.png"}], [n, a] = (0, r.useState)(Array(t.length).fill(.7)),
            i = e => {
                const n = e.realIndex, r = t.map(((e, r) => {
                    const a = Math.abs(n - r);
                    return 0 === a ? 1 : 1 === a || a === t.length - 1 ? .7 : .5
                }));
                a(r)
            };
        return (0, r.useEffect)((() => {
            a(t.map(((e, t) => 0 === t ? 1 : .7)))
        }), []), (0, l.jsxs)("div", {
            className: "home-feedback",
            children: [(0, l.jsx)("div", {className: "home-feedback__gradient_1"}), (0, l.jsx)("div", {className: "home-feedback__gradient_2"}), (0, l.jsx)("div", {
                className: "home-title",
                children: "Kursdan otzivlar"
            }), (0, l.jsx)("div", {
                className: "home-feedback__slider",
                children: (0, l.jsx)(Oe, {
                    id: "slider",
                    spaceBetween: e ? 0 : 20,
                    slidesPerView: e ? 3 : 5,
                    centeredSlides: !0,
                    loop: !0,
                    autoplay: {delay: 1e3, disableOnInteraction: !1},
                    pagination: {clickable: !0},
                    onSlideChange: i,
                    onSwiper: e => i(e),
                    className: "mySwiper",
                    children: t.map(((e, t) => (0, l.jsx)(Me, {
                        children: (0, l.jsx)("div", {
                            className: "home-feedback__item",
                            children: (0, l.jsx)("img", {
                                src: e.image,
                                alt: "",
                                style: {
                                    transform: "scale(".concat(n[t], ")"),
                                    opacity: 1 * n[t],
                                    transition: "transform 0.3s ease"
                                }
                            })
                        })
                    }, t)))
                })
            })]
        })
    }

    function Ie() {
        return (0, l.jsxs)("svg", {
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [(0, l.jsx)("path", {
                d: "M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z",
                stroke: "#C73659",
                "stroke-width": "1.5",
                "stroke-linecap": "round",
                "stroke-linejoin": "round"
            }), (0, l.jsx)("path", {
                d: "M12 15.5C13.933 15.5 15.5 13.933 15.5 12C15.5 10.067 13.933 8.5 12 8.5C10.067 8.5 8.5 10.067 8.5 12C8.5 13.933 10.067 15.5 12 15.5Z",
                stroke: "#C73659",
                "stroke-width": "1.5",
                "stroke-linecap": "round",
                "stroke-linejoin": "round"
            }), (0, l.jsx)("path", {
                d: "M17.6361 7H17.6477",
                stroke: "#C73659",
                "stroke-width": "2",
                "stroke-linecap": "round",
                "stroke-linejoin": "round"
            })]
        })
    }

    function je() {
        return (0, l.jsx)("svg", {
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: (0, l.jsx)("path", {
                d: "M15 10L11 14L17 20L21 4L3 11L7 13L9 19L12 15",
                stroke: "#C73659",
                "stroke-width": "2",
                "stroke-linecap": "round",
                "stroke-linejoin": "round"
            })
        })
    }

    function De() {
        return (0, l.jsxs)("svg", {
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [(0, l.jsx)("path", {
                d: "M17 20H7C4 20 2 18 2 15V9C2 6 4 4 7 4H17C20 4 22 6 22 9V15C22 18 20 20 17 20Z",
                stroke: "#C73659",
                "stroke-width": "1.5",
                "stroke-miterlimit": "10",
                "stroke-linecap": "round",
                "stroke-linejoin": "round"
            }), (0, l.jsx)("path", {
                d: "M11.4001 9.50006L13.9001 11.0001C14.8001 11.6001 14.8001 12.5001 13.9001 13.1001L11.4001 14.6001C10.4001 15.2001 9.6001 14.7001 9.6001 13.6001V10.6001C9.6001 9.30006 10.4001 8.90006 11.4001 9.50006Z",
                stroke: "#C73659",
                "stroke-width": "1.5",
                "stroke-miterlimit": "10",
                "stroke-linecap": "round",
                "stroke-linejoin": "round"
            })]
        })
    }

    function Re() {
        return (0, l.jsxs)("div", {
            className: "home-footer", children: [(0, l.jsxs)("div", {
                className: "home-footer__content",
                children: [(0, l.jsxs)("div", {
                    className: "home-footer__content__left",
                    children: ['"NADIA\u2019S SCHOOL" MAS\'ULIYATI CHEKLANGAN JAMIYAT', (0, l.jsx)("br", {}), (0, l.jsx)("br", {}), "inn: 311141396", (0, l.jsx)("br", {}), "x/r: 20208000007020344001", (0, l.jsx)("br", {}), "\u041c\u0424\u041e: 01036", (0, l.jsx)("br", {}), '\u0411\u0430\u043d\u043a: \u0422\u041e\u0428\u041a\u0415\u041d\u0422 \u0428., "\u0418\u041f\u0410\u041a \u0419\u0423\u041b\u0418" \u0410\u0418\u0422 \u0411\u0410\u041d\u041a\u0418\u041d\u0418\u041d\u0413 \u0421\u0410\u0413\u0411\u041e\u041d \u0424\u0418\u041b\u0418\u0410\u041b\u0418', (0, l.jsx)("br", {})]
                }), (0, l.jsxs)("div", {
                    className: "home-footer__content__right",
                    children: [(0, l.jsx)("div", {
                        className: "home-footer__link",
                        children: "\u041f\u0443\u0431\u043b\u0438\u0447\u043d\u0430\u044f \u043e\u0444\u0435\u0440\u0442\u0430"
                    }), (0, l.jsx)("div", {
                        className: "home-footer__link",
                        children: "\u041f\u0443\u0431\u043b\u0438\u0447\u043d\u0430\u044f \u043e\u0444\u0435\u0440\u0442\u0430"
                    }), (0, l.jsx)("div", {
                        className: "home-footer__link",
                        children: "\u041f\u043e\u043b\u0438\u0442\u0438\u043a\u0430 \u043a\u043e\u043d\u0444\u0438\u0434\u0435\u043d\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u0438"
                    }), (0, l.jsxs)("div", {
                        className: "home-footer__social",
                        children: [(0, l.jsx)("div", {
                            className: "home-footer__social__link", onClick: function () {
                                window.open("https://www.instagram.com/nadia.abdullakhodjaeva?igsh=cWg5anJ1bG50b3d2", "_blank")
                            }, children: (0, l.jsx)(Ie, {})
                        }), (0, l.jsx)("div", {
                            className: "home-footer__social__link", onClick: function () {
                                window.open("https://www.youtube.com/@nadiaabdullakhodjaeva", "_blank")
                            }, children: (0, l.jsx)(De, {})
                        }), (0, l.jsx)("div", {
                            className: "home-footer__social__link", onClick: function () {
                                window.open("https://t.me/nadia_admini", "_blank")
                            }, children: (0, l.jsx)(je, {})
                        })]
                    })]
                })]
            }), (0, l.jsx)("div", {
                className: "home-footer__copyright",
                children: "\xa9 2024 Nadia\u2019s school. \u0412\u0441\u0435 \u043f\u0440\u0430\u0432\u0430 \u0437\u0430\u0449\u0438\u0449\u0435\u043d\u044b"
            })]
        })
    }

    function Fe() {
        return (0, l.jsxs)("div", {
            className: "home",
            children: [(0, l.jsx)(o, {}), (0, l.jsx)(s, {}), (0, l.jsx)(u, {}), (0, l.jsx)(c, {}), (0, l.jsx)(Ae, {}), (0, l.jsx)(Re, {})]
        })
    }

    Me.displayName = "SwiperSlide";
    const Ve = function () {
        return (0, l.jsx)("div", {className: "App", children: (0, l.jsx)(Fe, {})})
    };
    a.createRoot(document.getElementById("root")).render((0, l.jsx)(r.StrictMode, {children: (0, l.jsx)(Ve, {})}))
})();
//# sourceMappingURL=main.7547550a.js.map