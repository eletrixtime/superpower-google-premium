// Patched by https://github.com/eletrixtime/superpower-google-premium

import {
    s as ce,
    i as te,
    j as Q,
    k as fe,
    d as me,
    u as de,
    g as _e,
    e as ge,
    p as Ze,
    l as Ke,
    m as Ve,
    v as A,
    r as We,
    n as U,
    b as Qe,
    w as Xe,
    x as Ye
} from "../chunks/scheduler.2ba2f30c.js";
import {
    S as be,
    i as ke,
    e as G,
    a as h,
    p as le,
    t as p,
    b as re,
    d as g,
    f as d,
    g as E,
    h as M,
    j as F,
    F as Be,
    r as I,
    u as R,
    v as q,
    w as D,
    s as V,
    c as B,
    k as v,
    B as He,
    E as Ae,
    C as T,
    G as ye,
    H as we,
    I as Fe,
    A as y,
    D as $e,
    x as se,
    J as xe,
    m as J,
    n as Z,
    o as Ee
} from "../chunks/index.508f57b0.js";
import {
    g as Me,
    t as X,
    b as et,
    B as ze,
    C as Ie,
    c as tt
} from "../chunks/Card.42f078fd.js";

function lt(s) {
    let e;
    const t = s[5].default,
        l = me(t, s, s[4], null);
    return {
        c() {
            l && l.c()
        },
        l(r) {
            l && l.l(r)
        },
        m(r, i) {
            l && l.m(r, i), e = !0
        },
        p(r, i) {
            l && l.p && (!e || i & 16) && de(l, t, r, r[4], e ? ge(t, r[4], i, null) : _e(r[4]), null)
        },
        i(r) {
            e || (g(l, r), e = !0)
        },
        o(r) {
            p(l, r), e = !1
        },
        d(r) {
            l && l.d(r)
        }
    }
}

function rt(s) {
    let e = s[0],
        t, l, r = s[0] && Pe(s);
    return {
        c() {
            r && r.c(), t = G()
        },
        l(i) {
            r && r.l(i), t = G()
        },
        m(i, n) {
            r && r.m(i, n), h(i, t, n), l = !0
        },
        p(i, n) {
            i[0] ? e ? ce(e, i[0]) ? (r.d(1), r = Pe(i), e = i[0], r.c(), r.m(t.parentNode, t)) : r.p(i, n) : (r = Pe(i), e = i[0], r.c(), r.m(t.parentNode, t)) : e && (r.d(1), r = null, e = i[0])
        },
        i(i) {
            l || (g(r, i), l = !0)
        },
        o(i) {
            p(r, i), l = !1
        },
        d(i) {
            i && d(t), r && r.d(i)
        }
    }
}

function Pe(s) {
    let e, t, l, r;
    const i = s[5].default,
        n = me(i, s, s[4], null);
    let a = [s[3]],
        o = {};
    for (let f = 0; f < a.length; f += 1) o = Q(o, a[f]);
    return {
        c() {
            e = E(s[0]), n && n.c(), this.h()
        },
        l(f) {
            e = M(f, (s[0] || "null").toUpperCase(), {});
            var u = F(e);
            n && n.l(u), u.forEach(d), this.h()
        },
        h() {
            Be(s[0])(e, o)
        },
        m(f, u) {
            h(f, e, u), n && n.m(e, null), t = !0, l || (r = Ze(s[2].call(null, e)), l = !0)
        },
        p(f, u) {
            n && n.p && (!t || u & 16) && de(n, i, f, f[4], t ? ge(i, f[4], u, null) : _e(f[4]), null), Be(f[0])(e, o = Me(a, [u & 8 && f[3]]))
        },
        i(f) {
            t || (g(n, f), t = !0)
        },
        o(f) {
            p(n, f), t = !1
        },
        d(f) {
            f && d(e), n && n.d(f), l = !1, r()
        }
    }
}

function st(s) {
    let e, t, l, r;
    const i = [rt, lt],
        n = [];

    function a(o, f) {
        return o[1] ? 0 : 1
    }
    return e = a(s), t = n[e] = i[e](s), {
        c() {
            t.c(), l = G()
        },
        l(o) {
            t.l(o), l = G()
        },
        m(o, f) {
            n[e].m(o, f), h(o, l, f), r = !0
        },
        p(o, [f]) {
            let u = e;
            e = a(o), e === u ? n[e].p(o, f) : (le(), p(n[u], 1, 1, () => {
                n[u] = null
            }), re(), t = n[e], t ? t.p(o, f) : (t = n[e] = i[e](o), t.c()), g(t, 1), t.m(l.parentNode, l))
        },
        i(o) {
            r || (g(t), r = !0)
        },
        o(o) {
            p(t), r = !1
        },
        d(o) {
            o && d(l), n[e].d(o)
        }
    }
}

function nt(s, e, t) {
    const l = ["tag", "show", "use"];
    let r = te(e, l),
        {
            $$slots: i = {},
            $$scope: n
        } = e,
        {
            tag: a = "div"
        } = e,
        {
            show: o
        } = e,
        {
            use: f = () => {}
        } = e;
    return s.$$set = u => {
        e = Q(Q({}, e), fe(u)), t(3, r = te(e, l)), "tag" in u && t(0, a = u.tag), "show" in u && t(1, o = u.show), "use" in u && t(2, f = u.use), "$$scope" in u && t(4, n = u.$$scope)
    }, [a, o, f, r, n, i]
}
class it extends be {
    constructor(e) {
        super(), ke(this, e, nt, st, ce, {
            tag: 0,
            show: 1,
            use: 2
        })
    }
}
const ot = s => ({}),
    Re = s => ({}),
    at = s => ({
        props: s[0] & 72
    }),
    qe = s => ({
        props: {
            ...s[6],
            class: s[3]
        }
    }),
    ut = s => ({}),
    De = s => ({});

function Ge(s) {
    let e, t, l;
    const r = s[11].left,
        i = me(r, s, s[26], De);
    return {
        c() {
            e = E("div"), i && i.c(), this.h()
        },
        l(n) {
            e = M(n, "DIV", {
                class: !0
            });
            var a = F(e);
            i && i.l(a), a.forEach(d), this.h()
        },
        h() {
            v(e, "class", t = X(s[2], s[4].classLeft) + " left-0 pl-2.5 pointer-events-none")
        },
        m(n, a) {
            h(n, e, a), i && i.m(e, null), l = !0
        },
        p(n, a) {
            i && i.p && (!l || a[0] & 67108864) && de(i, r, n, n[26], l ? ge(r, n[26], a, ut) : _e(n[26]), De), (!l || a[0] & 20 && t !== (t = X(n[2], n[4].classLeft) + " left-0 pl-2.5 pointer-events-none")) && v(e, "class", t)
        },
        i(n) {
            l || (g(i, n), l = !0)
        },
        o(n) {
            p(i, n), l = !1
        },
        d(n) {
            n && d(e), i && i.d(n)
        }
    }
}

function ft(s) {
    let e, t, l, r = [s[6], {
            type: s[1]
        }, {
            class: s[3]
        }],
        i = {};
    for (let n = 0; n < r.length; n += 1) i = Q(i, r[n]);
    return {
        c() {
            e = E("input"), this.h()
        },
        l(n) {
            e = M(n, "INPUT", {
                class: !0
            }), this.h()
        },
        h() {
            He(e, i)
        },
        m(n, a) {
            h(n, e, a), e.autofocus && e.focus(), Ae(e, s[0]), t || (l = [T(e, "input", s[25]), T(e, "blur", s[12]), T(e, "change", s[13]), T(e, "click", s[14]), T(e, "contextmenu", s[15]), T(e, "focus", s[16]), T(e, "keydown", s[17]), T(e, "keypress", s[18]), T(e, "keyup", s[19]), T(e, "mouseover", s[20]), T(e, "mouseenter", s[21]), T(e, "mouseleave", s[22]), T(e, "paste", s[23]), T(e, "input", s[24])], t = !0)
        },
        p(n, a) {
            He(e, i = Me(r, [a[0] & 64 && n[6], a[0] & 2 && {
                type: n[1]
            }, a[0] & 8 && {
                class: n[3]
            }])), a[0] & 1 && e.value !== n[0] && Ae(e, n[0])
        },
        d(n) {
            n && d(e), t = !1, We(l)
        }
    }
}

function je(s) {
    let e, t, l;
    const r = s[11].right,
        i = me(r, s, s[26], Re);
    return {
        c() {
            e = E("div"), i && i.c(), this.h()
        },
        l(n) {
            e = M(n, "DIV", {
                class: !0
            });
            var a = F(e);
            i && i.l(a), a.forEach(d), this.h()
        },
        h() {
            v(e, "class", t = X(s[2], s[4].classRight) + " right-0 pr-2.5")
        },
        m(n, a) {
            h(n, e, a), i && i.m(e, null), l = !0
        },
        p(n, a) {
            i && i.p && (!l || a[0] & 67108864) && de(i, r, n, n[26], l ? ge(r, n[26], a, ot) : _e(n[26]), Re), (!l || a[0] & 20 && t !== (t = X(n[2], n[4].classRight) + " right-0 pr-2.5")) && v(e, "class", t)
        },
        i(n) {
            l || (g(i, n), l = !0)
        },
        o(n) {
            p(i, n), l = !1
        },
        d(n) {
            n && d(e), i && i.d(n)
        }
    }
}

function ct(s) {
    let e, t, l, r, i = s[5].left && Ge(s);
    const n = s[11].default,
        a = me(n, s, s[26], qe),
        o = a || ft(s);
    let f = s[5].right && je(s);
    return {
        c() {
            i && i.c(), e = V(), o && o.c(), t = V(), f && f.c(), l = G()
        },
        l(u) {
            i && i.l(u), e = B(u), o && o.l(u), t = B(u), f && f.l(u), l = G()
        },
        m(u, b) {
            i && i.m(u, b), h(u, e, b), o && o.m(u, b), h(u, t, b), f && f.m(u, b), h(u, l, b), r = !0
        },
        p(u, b) {
            u[5].left ? i ? (i.p(u, b), b[0] & 32 && g(i, 1)) : (i = Ge(u), i.c(), g(i, 1), i.m(e.parentNode, e)) : i && (le(), p(i, 1, 1, () => {
                i = null
            }), re()), a ? a.p && (!r || b[0] & 67108936) && de(a, n, u, u[26], r ? ge(n, u[26], b, at) : _e(u[26]), qe) : o && o.p && (!r || b[0] & 75) && o.p(u, r ? b : [-1, -1]), u[5].right ? f ? (f.p(u, b), b[0] & 32 && g(f, 1)) : (f = je(u), f.c(), g(f, 1), f.m(l.parentNode, l)) : f && (le(), p(f, 1, 1, () => {
                f = null
            }), re())
        },
        i(u) {
            r || (g(i), g(o, u), g(f), r = !0)
        },
        o(u) {
            p(i), p(o, u), p(f), r = !1
        },
        d(u) {
            u && (d(e), d(t), d(l)), i && i.d(u), o && o.d(u), f && f.d(u)
        }
    }
}

function mt(s) {
    let e, t;
    return e = new it({
        props: {
            class: "relative w-full",
            show: s[5].left || s[5].right,
            $$slots: {
                default: [ct]
            },
            $$scope: {
                ctx: s
            }
        }
    }), {
        c() {
            I(e.$$.fragment)
        },
        l(l) {
            R(e.$$.fragment, l)
        },
        m(l, r) {
            q(e, l, r), t = !0
        },
        p(l, r) {
            const i = {};
            r[0] & 32 && (i.show = l[5].left || l[5].right), r[0] & 67108991 && (i.$$scope = {
                dirty: r,
                ctx: l
            }), e.$set(i)
        },
        i(l) {
            t || (g(e.$$.fragment, l), t = !0)
        },
        o(l) {
            p(e.$$.fragment, l), t = !1
        },
        d(l) {
            D(e, l)
        }
    }
}

function dt(s) {
    return s && s === "xs" ? "sm" : s === "xl" ? "lg" : s
}

function _t(s, e, t) {
    let l;
    const r = ["type", "value", "size", "defaultClass", "color", "floatClass"];
    let i = te(e, r),
        {
            $$slots: n = {},
            $$scope: a
        } = e;
    const o = Ke(n);
    let {
        type: f = "text"
    } = e, {
        value: u = void 0
    } = e, {
        size: b = void 0
    } = e, {
        defaultClass: C = "block w-full disabled:cursor-not-allowed disabled:opacity-50"
    } = e, {
        color: S = "base"
    } = e, {
        floatClass: k = "flex absolute inset-y-0 items-center text-gray-500 dark:text-gray-400"
    } = e;
    const ne = {
            base: "border-gray-300 dark:border-gray-600",
            tinted: "border-gray-300 dark:border-gray-500",
            green: "border-green-500 dark:border-green-400",
            red: "border-red-500 dark:border-red-400"
        },
        j = {
            base: "focus:border-primary-500 focus:ring-primary-500 dark:focus:border-primary-500 dark:focus:ring-primary-500",
            green: "focus:ring-green-500 focus:border-green-500 dark:focus:border-green-500 dark:focus:ring-green-500",
            red: "focus:ring-red-500 focus:border-red-500 dark:focus:ring-red-500 dark:focus:border-red-500"
        },
        ie = {
            base: "bg-gray-50 text-gray-900 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400",
            tinted: "bg-gray-50 text-gray-900 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400",
            green: "bg-green-50 text-green-900 placeholder-green-700 dark:text-green-400 dark:placeholder-green-500 dark:bg-gray-700",
            red: "bg-red-50 text-red-900 placeholder-red-700 dark:text-red-500 dark:placeholder-red-500 dark:bg-gray-700"
        };
    let L = Ve("background"),
        N = Ve("group");
    const O = {
            sm: "sm:text-xs",
            md: "text-sm",
            lg: "sm:text-base"
        },
        oe = {
            sm: "pl-9",
            md: "pl-10",
            lg: "pl-11"
        },
        ae = {
            sm: "pr-9",
            md: "pr-10",
            lg: "pr-11"
        },
        K = {
            sm: "p-2",
            md: "p-2.5",
            lg: "p-3"
        };
    let Y;

    function $(m) {
        A.call(this, s, m)
    }

    function x(m) {
        A.call(this, s, m)
    }

    function ee(m) {
        A.call(this, s, m)
    }

    function ue(m) {
        A.call(this, s, m)
    }

    function he(m) {
        A.call(this, s, m)
    }

    function ve(m) {
        A.call(this, s, m)
    }

    function pe(m) {
        A.call(this, s, m)
    }

    function w(m) {
        A.call(this, s, m)
    }

    function z(m) {
        A.call(this, s, m)
    }

    function P(m) {
        A.call(this, s, m)
    }

    function c(m) {
        A.call(this, s, m)
    }

    function _(m) {
        A.call(this, s, m)
    }

    function H(m) {
        A.call(this, s, m)
    }

    function W() {
        u = this.value, t(0, u)
    }
    return s.$$set = m => {
        t(4, e = Q(Q({}, e), fe(m))), t(6, i = te(e, r)), "type" in m && t(1, f = m.type), "value" in m && t(0, u = m.value), "size" in m && t(7, b = m.size), "defaultClass" in m && t(8, C = m.defaultClass), "color" in m && t(9, S = m.color), "floatClass" in m && t(2, k = m.floatClass), "$$scope" in m && t(26, a = m.$$scope)
    }, s.$$.update = () => {
        s.$$.dirty[0] & 128 && t(10, l = b || dt(N == null ? void 0 : N.size) || "md");
        {
            const m = S === "base" && L ? "tinted" : S;
            t(3, Y = X([C, o.left && oe[l] || o.right && ae[l] || K[l], j[S], ie[m], ne[m], O[l], N || "rounded-lg", N && "first:rounded-l-lg last:rounded-r-lg", N && "border-l-0 first:border-l last:border-r", e.class]))
        }
    }, e = fe(e), [u, f, k, Y, e, o, i, b, C, S, l, n, $, x, ee, ue, he, ve, pe, w, z, P, c, _, H, W, a]
}
class gt extends be {
    constructor(e) {
        super(), ke(this, e, _t, mt, ce, {
            type: 1,
            value: 0,
            size: 7,
            defaultClass: 8,
            color: 9,
            floatClass: 2
        }, null, [-1, -1])
    }
}

function ht(s) {
    let e, t, l, r, i = [s[5], {
            role: "status"
        }, {
            class: r = X("inline -mt-px animate-spin dark:text-gray-600", s[3], s[0], s[4], s[6].class)
        }, {
            viewBox: "0 0 100 101"
        }, {
            fill: "none"
        }, {
            xmlns: "http://www.w3.org/2000/svg"
        }],
        n = {};
    for (let a = 0; a < i.length; a += 1) n = Q(n, i[a]);
    return {
        c() {
            e = ye("svg"), t = ye("path"), l = ye("path"), this.h()
        },
        l(a) {
            e = we(a, "svg", {
                role: !0,
                class: !0,
                viewBox: !0,
                fill: !0,
                xmlns: !0
            });
            var o = F(e);
            t = we(o, "path", {
                d: !0,
                fill: !0
            }), F(t).forEach(d), l = we(o, "path", {
                d: !0,
                fill: !0
            }), F(l).forEach(d), o.forEach(d), this.h()
        },
        h() {
            v(t, "d", "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"), v(t, "fill", s[2]), v(l, "d", "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"), v(l, "fill", s[1]), Fe(e, n)
        },
        m(a, o) {
            h(a, e, o), y(e, t), y(e, l)
        },
        p(a, [o]) {
            o & 4 && v(t, "fill", a[2]), o & 2 && v(l, "fill", a[1]), Fe(e, n = Me(i, [o & 32 && a[5], {
                role: "status"
            }, o & 65 && r !== (r = X("inline -mt-px animate-spin dark:text-gray-600", a[3], a[0], a[4], a[6].class)) && {
                class: r
            }, {
                viewBox: "0 0 100 101"
            }, {
                fill: "none"
            }, {
                xmlns: "http://www.w3.org/2000/svg"
            }]))
        },
        i: U,
        o: U,
        d(a) {
            a && d(e)
        }
    }
}

function pt(s, e, t) {
    const l = ["color", "bg", "customColor", "size", "currentFill", "currentColor"];
    let r = te(e, l),
        {
            color: i = "primary"
        } = e,
        {
            bg: n = "text-gray-300"
        } = e,
        {
            customColor: a = ""
        } = e,
        {
            size: o = "8"
        } = e,
        {
            currentFill: f = "currentFill"
        } = e,
        {
            currentColor: u = "currentColor"
        } = e,
        b = `w-${o} h-${o}`;
    f !== "currentFill" && (i = void 0);
    const C = {
        primary: "fill-primary-600",
        blue: "fill-blue-600",
        gray: "fill-gray-600 dark:fill-gray-300",
        green: "fill-green-500",
        red: "fill-red-600",
        yellow: "fill-yellow-400",
        pink: "fill-pink-600",
        purple: "fill-purple-600",
        white: "fill-white",
        custom: a
    };
    let S = i === void 0 ? "" : C[i] ?? C.blue;
    return s.$$set = k => {
        t(6, e = Q(Q({}, e), fe(k))), t(5, r = te(e, l)), "color" in k && t(7, i = k.color), "bg" in k && t(0, n = k.bg), "customColor" in k && t(8, a = k.customColor), "size" in k && t(9, o = k.size), "currentFill" in k && t(1, f = k.currentFill), "currentColor" in k && t(2, u = k.currentColor)
    }, e = fe(e), [n, f, u, b, S, r, e, i, a, o]
}
class Se extends be {
    constructor(e) {
        super(), ke(this, e, pt, ht, ce, {
            color: 7,
            bg: 0,
            customColor: 8,
            size: 9,
            currentFill: 1,
            currentColor: 2
        })
    }
}

function bt(s) {
    let e;
    return {
        c() {
            e = J("Superpower Google")
        },
        l(t) {
            e = Z(t, "Superpower Google")
        },
        m(t, l) {
            h(t, e, l)
        },
        d(t) {
            t && d(e)
        }
    }
}

function kt(s) {
    let e, t;
    return {
        c() {
            e = E("img"), this.h()
        },
        l(l) {
            e = M(l, "IMG", {
                src: !0,
                class: !0,
                alt: !0
            }), this.h()
        },
        h() {
            Ye(e.src, t = "/img/logo-xs.png") || v(e, "src", t), v(e, "class", "h-4 mr-2"), v(e, "alt", "Logo")
        },
        m(l, r) {
            h(l, e, r)
        },
        p: U,
        d(l) {
            l && d(e)
        }
    }
}

function vt(s) {
    let e, t;
    return e = new tt({
        props: {
            href: "/",
            home: !0,
            $$slots: {
                icon: [kt],
                default: [bt]
            },
            $$scope: {
                ctx: s
            }
        }
    }), {
        c() {
            I(e.$$.fragment)
        },
        l(l) {
            R(e.$$.fragment, l)
        },
        m(l, r) {
            q(e, l, r), t = !0
        },
        p(l, r) {
            const i = {};
            r & 512 && (i.$$scope = {
                dirty: r,
                ctx: l
            }), e.$set(i)
        },
        i(l) {
            t || (g(e.$$.fragment, l), t = !0)
        },
        o(l) {
            p(e.$$.fragment, l), t = !1
        },
        d(l) {
            D(e, l)
        }
    }
}

function Ct(s) {
    let e;
    return {
        c() {
            e = J("Acheter Premium à 3,49€ 🚀")
        },
        l(t) {
            e = Z(t, "Acheter Premium à 3,49€ 🚀")
        },
        m(t, l) {
            h(t, e, l)
        },
        i: U,
        o: U,
        d(t) {
            t && d(e)
        }
    }
}

function yt(s) {
    let e, t, l;
    return e = new Se({
        props: {
            size: "5",
            class: "mr-2"
        }
    }), {
        c() {
            I(e.$$.fragment), t = J(`\r
      Redirection...`)
        },
        l(r) {
            R(e.$$.fragment, r), t = Z(r, `\r
      Redirection...`)
        },
        m(r, i) {
            q(e, r, i), h(r, t, i), l = !0
        },
        i(r) {
            l || (g(e.$$.fragment, r), l = !0)
        },
        o(r) {
            p(e.$$.fragment, r), l = !1
        },
        d(r) {
            r && d(t), D(e, r)
        }
    }
}

function wt(s) {
    let e, t, l, r;
    const i = [yt, Ct],
        n = [];

    function a(o, f) {
        return o[5] ? 0 : 1
    }
    return e = a(s), t = n[e] = i[e](s), {
        c() {
            t.c(), l = G()
        },
        l(o) {
            t.l(o), l = G()
        },
        m(o, f) {
            n[e].m(o, f), h(o, l, f), r = !0
        },
        p(o, f) {
            let u = e;
            e = a(o), e !== u && (le(), p(n[u], 1, 1, () => {
                n[u] = null
            }), re(), t = n[e], t || (t = n[e] = i[e](o), t.c()), g(t, 1), t.m(l.parentNode, l))
        },
        i(o) {
            r || (g(t), r = !0)
        },
        o(o) {
            p(t), r = !1
        },
        d(o) {
            o && d(l), n[e].d(o)
        }
    }
}

function zt(s) {
    let e, t = "✨ Version Premium (3,49€ à vie)",
        l, r, i = "<li>✅ Désactiver les fonctionnalités non souhaitées</li> <li>✅ Ajouter ses propres catégories</li> <li>✅ Menu filtres de recherche</li> <li>💖 Soutien au développeur</li>";
    return {
        c() {
            e = E("h2"), e.textContent = t, l = V(), r = E("ul"), r.innerHTML = i, this.h()
        },
        l(n) {
            e = M(n, "H2", {
                class: !0,
                "data-svelte-h": !0
            }), se(e) !== "svelte-4qacte" && (e.textContent = t), l = B(n), r = M(n, "UL", {
                class: !0,
                "data-svelte-h": !0
            }), se(r) !== "svelte-t3eev" && (r.innerHTML = i), this.h()
        },
        h() {
            v(e, "class", "text-lg font-semibold text-yellow-800 mb-3 text-center"), v(r, "class", "text-sm text-yellow-900 space-y-2")
        },
        m(n, a) {
            h(n, e, a), h(n, l, a), h(n, r, a)
        },
        p: U,
        d(n) {
            n && (d(e), d(l), d(r))
        }
    }
}

function Pt(s) {
    let e, t = "🔓 Version Gratuite",
        l, r, i = "<li>✔️ Bouton &quot;J&#39;ai de la chance&quot;</li> <li>✔️ Bouton ChatGPT</li> <li>✔️ Bloqueur résultats sponsos</li> <li>✔️ Nouvelles catégories (non personnalisable)</li> <li>❌ Désactiver les fonctionnalités non souhaitées</li> <li>❌ Ajouter ses propres catégories</li> <li>❌ Menu filtres de recherche</li> <li>❌ Soutien au développeur</li>";
    return {
        c() {
            e = E("h2"), e.textContent = t, l = V(), r = E("ul"), r.innerHTML = i, this.h()
        },
        l(n) {
            e = M(n, "H2", {
                class: !0,
                "data-svelte-h": !0
            }), se(e) !== "svelte-dslzb7" && (e.textContent = t), l = B(n), r = M(n, "UL", {
                class: !0,
                "data-svelte-h": !0
            }), se(r) !== "svelte-1uev15t" && (r.innerHTML = i), this.h()
        },
        h() {
            v(e, "class", "text-lg font-semibold text-gray-700 mb-3 text-center"), v(r, "class", "text-sm text-gray-800 space-y-2")
        },
        m(n, a) {
            h(n, e, a), h(n, l, a), h(n, r, a)
        },
        p: U,
        d(n) {
            n && (d(e), d(l), d(r))
        }
    }
}

function Et(s) {
    let e;
    return {
        c() {
            e = J("Acheter Premium à 3,49€ 🚀")
        },
        l(t) {
            e = Z(t, "Acheter Premium à 3,49€ 🚀")
        },
        m(t, l) {
            h(t, e, l)
        },
        i: U,
        o: U,
        d(t) {
            t && d(e)
        }
    }
}

function Mt(s) {
    let e, t, l;
    return e = new Se({
        props: {
            size: "5",
            class: "mr-2"
        }
    }), {
        c() {
            I(e.$$.fragment), t = J(`\r
      Redirection...`)
        },
        l(r) {
            R(e.$$.fragment, r), t = Z(r, `\r
      Redirection...`)
        },
        m(r, i) {
            q(e, r, i), h(r, t, i), l = !0
        },
        i(r) {
            l || (g(e.$$.fragment, r), l = !0)
        },
        o(r) {
            p(e.$$.fragment, r), l = !1
        },
        d(r) {
            r && d(t), D(e, r)
        }
    }
}

function St(s) {
    let e, t, l, r;
    const i = [Mt, Et],
        n = [];

    function a(o, f) {
        return o[5] ? 0 : 1
    }
    return e = a(s), t = n[e] = i[e](s), {
        c() {
            t.c(), l = G()
        },
        l(o) {
            t.l(o), l = G()
        },
        m(o, f) {
            n[e].m(o, f), h(o, l, f), r = !0
        },
        p(o, f) {
            let u = e;
            e = a(o), e !== u && (le(), p(n[u], 1, 1, () => {
                n[u] = null
            }), re(), t = n[e], t || (t = n[e] = i[e](o), t.c()), g(t, 1), t.m(l.parentNode, l))
        },
        i(o) {
            r || (g(t), r = !0)
        },
        o(o) {
            p(t), r = !1
        },
        d(o) {
            o && d(l), n[e].d(o)
        }
    }
}

function Lt(s) {
    let e;
    return {
        c() {
            e = J("Valider la clé d'activation")
        },
        l(t) {
            e = Z(t, "Valider la clé d'activation")
        },
        m(t, l) {
            h(t, e, l)
        },
        i: U,
        o: U,
        d(t) {
            t && d(e)
        }
    }
}

function Nt(s) {
    let e, t, l;
    return e = new Se({
        props: {
            size: "4",
            class: "mr-2"
        }
    }), {
        c() {
            I(e.$$.fragment), t = J(" Validation...")
        },
        l(r) {
            R(e.$$.fragment, r), t = Z(r, " Validation...")
        },
        m(r, i) {
            q(e, r, i), h(r, t, i), l = !0
        },
        i(r) {
            l || (g(e.$$.fragment, r), l = !0)
        },
        o(r) {
            p(e.$$.fragment, r), l = !1
        },
        d(r) {
            r && d(t), D(e, r)
        }
    }
}

function Tt(s) {
    let e, t, l, r;
    const i = [Nt, Lt],
        n = [];

    function a(o, f) {
        return o[4] ? 0 : 1
    }
    return e = a(s), t = n[e] = i[e](s), {
        c() {
            t.c(), l = G()
        },
        l(o) {
            t.l(o), l = G()
        },
        m(o, f) {
            n[e].m(o, f), h(o, l, f), r = !0
        },
        p(o, f) {
            let u = e;
            e = a(o), e !== u && (le(), p(n[u], 1, 1, () => {
                n[u] = null
            }), re(), t = n[e], t || (t = n[e] = i[e](o), t.c()), g(t, 1), t.m(l.parentNode, l))
        },
        i(o) {
            r || (g(t), r = !0)
        },
        o(o) {
            p(t), r = !1
        },
        d(o) {
            o && d(l), n[e].d(o)
        }
    }
}

function Oe(s) {
    let e, t;
    return {
        c() {
            e = E("p"), t = J(s[2]), this.h()
        },
        l(l) {
            e = M(l, "P", {
                class: !0
            });
            var r = F(e);
            t = Z(r, s[2]), r.forEach(d), this.h()
        },
        h() {
            v(e, "class", "text-red-600 text-sm mt-2")
        },
        m(l, r) {
            h(l, e, r), y(e, t)
        },
        p(l, r) {
            r & 4 && Ee(t, l[2])
        },
        d(l) {
            l && d(e)
        }
    }
}

function Ue(s) {
    let e, t;
    return {
        c() {
            e = E("p"), t = J(s[3]), this.h()
        },
        l(l) {
            e = M(l, "P", {
                class: !0
            });
            var r = F(e);
            t = Z(r, s[3]), r.forEach(d), this.h()
        },
        h() {
            v(e, "class", "text-green-600 text-sm mt-2")
        },
        m(l, r) {
            h(l, e, r), y(e, t)
        },
        p(l, r) {
            r & 8 && Ee(t, l[3])
        },
        d(l) {
            l && d(e)
        }
    }
}

function Je(s) {
    let e, t, l, r;
    return {
        c() {
            e = E("p"), t = J("Votre code d’activation : "), l = E("strong"), r = J(s[1]), this.h()
        },
        l(i) {
            e = M(i, "P", {
                class: !0
            });
            var n = F(e);
            t = Z(n, "Votre code d’activation : "), l = M(n, "STRONG", {
                class: !0
            });
            var a = F(l);
            r = Z(a, s[1]), a.forEach(d), n.forEach(d), this.h()
        },
        h() {
            v(l, "class", "text-green-800"), v(e, "class", "text-sm mt-1")
        },
        m(i, n) {
            h(i, e, n), y(e, t), y(e, l), y(l, r)
        },
        p(i, n) {
            n & 2 && Ee(r, i[1])
        },
        d(i) {
            i && d(e)
        }
    }
}

function Vt(s) {
    let e, t, l, r, i = 'Passez à <span class="text-yellow-500">Superpower Google Premium (cracked</span>',
        n, a, o = "Débloquez toutes les fonctionnalités une fois pour toutes — sans abonnement.",
        f, u, b, C, S, k, ne, j, ie, L, N, O, oe, ae, K, Y, $, x, ee, ue, he;
    e = new et({
        props: {
            "aria-label": "App breadcrumb",
            solid: !0,
            id: "breadCrumb",
            $$slots: {
                default: [vt]
            },
            $$scope: {
                ctx: s
            }
        }
    }), u = new ze({
        props: {
            class: "w-full text-white font-bold py-2 mt-4",
            color: "yellow",
            pill: !0,
            $$slots: {
                default: [wt]
            },
            $$scope: {
                ctx: s
            }
        }
    }), u.$on("click", s[7]), C = new Ie({
        props: {
            class: "bg-yellow-50 border-yellow-300 mt-4",
            $$slots: {
                default: [zt]
            },
            $$scope: {
                ctx: s
            }
        }
    }), k = new Ie({
        props: {
            class: "bg-gray-100 border-gray-300 mt-4",
            $$slots: {
                default: [Pt]
            },
            $$scope: {
                ctx: s
            }
        }
    }), j = new ze({
        props: {
            class: "w-full text-white font-bold py-2 mt-4",
            color: "yellow",
            pill: !0,
            $$slots: {
                default: [St]
            },
            $$scope: {
                ctx: s
            }
        }
    }), j.$on("click", s[7]);

    function ve(c) {
        s[8](c)
    }
    let pe = {
        class: "border-[1px]",
        type: "text",
        placeholder: "Coller la clé d'activation ici 🔑",
        size: "md",
        required: !0
    };
    s[0] !== void 0 && (pe.value = s[0]), O = new gt({
        props: pe
    }), Qe.push(() => $e(O, "value", ve)), K = new ze({
        props: {
            type: "submit",
            class: "mt-2 py-1",
            pill: !0,
            disabled: s[4],
            $$slots: {
                default: [Tt]
            },
            $$scope: {
                ctx: s
            }
        }
    });
    let w = s[2] && Oe(s),
        z = s[3] && Ue(s),
        P = s[1] && Je(s);
    return {
        c() {
            I(e.$$.fragment), t = V(), l = E("div"), r = E("h1"), r.innerHTML = i, n = V(), a = E("p"), a.textContent = o, f = V(), I(u.$$.fragment), b = V(), I(C.$$.fragment), S = V(), I(k.$$.fragment), ne = V(), I(j.$$.fragment), ie = V(), L = E("div"), N = E("form"), I(O.$$.fragment), ae = V(), I(K.$$.fragment), Y = V(), w && w.c(), $ = V(), z && z.c(), x = V(), P && P.c(), this.h()
        },
        l(c) {
            R(e.$$.fragment, c), t = B(c), l = M(c, "DIV", {
                class: !0
            });
            var _ = F(l);
            r = M(_, "H1", {
                class: !0,
                "data-svelte-h": !0
            }), se(r) !== "svelte-10mmp70" && (r.innerHTML = i), n = B(_), a = M(_, "P", {
                class: !0,
                "data-svelte-h": !0
            }), se(a) !== "svelte-yuulzu" && (a.textContent = o), f = B(_), R(u.$$.fragment, _), b = B(_), R(C.$$.fragment, _), S = B(_), R(k.$$.fragment, _), ne = B(_), R(j.$$.fragment, _), ie = B(_), L = M(_, "DIV", {
                class: !0
            });
            var H = F(L);
            N = M(H, "FORM", {});
            var W = F(N);
            R(O.$$.fragment, W), ae = B(W), R(K.$$.fragment, W), W.forEach(d), Y = B(H), w && w.l(H), $ = B(H), z && z.l(H), x = B(H), P && P.l(H), H.forEach(d), _.forEach(d), this.h()
        },
        h() {
            v(r, "class", "text-2xl font-extrabold text-center text-gray-900"), v(a, "class", "text-center text-gray-600 text-sm mt-2"), v(L, "class", "text-center mt-6 mx-5"), v(l, "class", "max-w-md mx-auto mt-3 px-4")
        },
        m(c, _) {
            q(e, c, _), h(c, t, _), h(c, l, _), y(l, r), y(l, n), y(l, a), y(l, f), q(u, l, null), y(l, b), q(C, l, null), y(l, S), q(k, l, null), y(l, ne), q(j, l, null), y(l, ie), y(l, L), y(L, N), q(O, N, null), y(N, ae), q(K, N, null), y(L, Y), w && w.m(L, null), y(L, $), z && z.m(L, null), y(L, x), P && P.m(L, null), ee = !0, ue || (he = T(N, "submit", xe(s[6])), ue = !0)
        },
        p(c, [_]) {
            const H = {};
            _ & 512 && (H.$$scope = {
                dirty: _,
                ctx: c
            }), e.$set(H);
            const W = {};
            _ & 544 && (W.$$scope = {
                dirty: _,
                ctx: c
            }), u.$set(W);
            const m = {};
            _ & 512 && (m.$$scope = {
                dirty: _,
                ctx: c
            }), C.$set(m);
            const Le = {};
            _ & 512 && (Le.$$scope = {
                dirty: _,
                ctx: c
            }), k.$set(Le);
            const Ne = {};
            _ & 544 && (Ne.$$scope = {
                dirty: _,
                ctx: c
            }), j.$set(Ne);
            const Te = {};
            !oe && _ & 1 && (oe = !0, Te.value = c[0], Xe(() => oe = !1)), O.$set(Te);
            const Ce = {};
            _ & 16 && (Ce.disabled = c[4]), _ & 528 && (Ce.$$scope = {
                dirty: _,
                ctx: c
            }), K.$set(Ce), c[2] ? w ? w.p(c, _) : (w = Oe(c), w.c(), w.m(L, $)) : w && (w.d(1), w = null), c[3] ? z ? z.p(c, _) : (z = Ue(c), z.c(), z.m(L, x)) : z && (z.d(1), z = null), c[1] ? P ? P.p(c, _) : (P = Je(c), P.c(), P.m(L, null)) : P && (P.d(1), P = null)
        },
        i(c) {
            ee || (g(e.$$.fragment, c), g(u.$$.fragment, c), g(C.$$.fragment, c), g(k.$$.fragment, c), g(j.$$.fragment, c), g(O.$$.fragment, c), g(K.$$.fragment, c), ee = !0)
        },
        o(c) {
            p(e.$$.fragment, c), p(u.$$.fragment, c), p(C.$$.fragment, c), p(k.$$.fragment, c), p(j.$$.fragment, c), p(O.$$.fragment, c), p(K.$$.fragment, c), ee = !1
        },
        d(c) {
            c && (d(t), d(l)), D(e, c), D(u), D(C), D(k), D(j), D(O), D(K), w && w.d(), z && z.d(), P && P.d(), ue = !1, he()
        }
    }
}

function Bt(s, e, t) {
    let l = "",
        r = "",
        i = "",
        n = "",
        a = !1,
        o = !1;
    const f = async () => {
        if (t(2, i = ""), t(3, n = ""), t(1, r = ""), t(4, a = !0), !l) {
            t(2, i = "Merci de coller votre clé d'activation."), t(4, a = !1);
            return
        }
            try {
            const response = await fetch("http://superpowergoogle.aywen.fr:3000/activate-license", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({ license_key: l.trim() })
            });

            const data = await response.json();

            if (response.ok) {
                  const activationCode = data.activationCode;
                  t(1, activationCode);
                  chrome.storage.local.set({ superpower_activation_code: "CRACKEDBYELETRIX.FR_123456789" });
                  alert("Done!, you can now reopen the extension page ")
                  window.close();
            } else {
                  const activationCode = data.activationCode;
                  t(1, activationCode);
                  chrome.storage.local.set({ superpower_activation_code: "CRACKEDBYELETRIX.FR_123456789" });
                  alert("Done!, you can now reopen the extension page ")
                  window.close();
            }
            } catch {
            t(2, "Erreur réseau : impossible de contacter le serveur.");
            }

        t(4, a = !1)
    }, u = async () => {
        t(5, o = !0);
        t(1, "CRACKEDBYELETRIX.FR_123456789");
        chrome.storage.local.set({ superpower_activation_code: "CRACKEDBYELETRIX.FR_123456789" });
        alert("Done!, you can now reopen the extension page ")
        t(5, o = !1)
    };

    function b(C) {
        l = C, t(0, l)
    }
    return [l, r, i, n, a, o, f, u, b]
}
class It extends be {
    constructor(e) {
        super(), ke(this, e, Bt, Vt, ce, {})
    }
}
export {
    It as component
};