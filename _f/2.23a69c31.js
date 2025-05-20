// Patched by https://github.com/eletrixtime/superpower-google-premium

import {
    r as Ge,
    s as Be,
    i as Ie,
    j as ue,
    k as pe,
    b as Et,
    d as st,
    u as ot,
    g as it,
    e as lt,
    l as Cn,
    m as rn,
    p as sn,
    q as on,
    v as re,
    w as $t,
    n as Pe,
    o as xn,
    x as ln
} from "../chunks/scheduler.2ba2f30c.js";
import {
    d as P,
    S as Ve,
    i as Ue,
    e as Oe,
    a as O,
    p as At,
    t as M,
    b as Ct,
    f as b,
    g as k,
    h as I,
    j as F,
    B as Ke,
    r as G,
    u as B,
    v as V,
    w as U,
    s as R,
    c as N,
    C as Z,
    D as Ft,
    k as D,
    x as Q,
    A as T,
    m as xe,
    n as Se,
    o as Sn,
    E as We
} from "../chunks/index.508f57b0.js";
import {
    t as we,
    g as xt,
    a as Rn,
    C as Ye,
    B as yt,
    b as an,
    c as cn
} from "../chunks/Card.42f078fd.js";

function zt(t) {
    return (t == null ? void 0 : t.length) !== void 0 ? t : Array.from(t)
}

function Nn(t, e) {
    t.d(1), e.delete(t.key)
}

function Ln(t, e, n, r, s, o, l, i, a, f, d, c) {
    let u = t.length,
        h = o.length,
        m = u;
    const y = {};
    for (; m--;) y[t[m].key] = m;
    const w = [],
        x = new Map,
        A = new Map,
        _ = [];
    for (m = h; m--;) {
        const S = c(s, o, m),
            C = n(S);
        let v = l.get(C);
        v ? r && _.push(() => v.p(S, e)) : (v = f(C, S), v.c()), x.set(C, w[m] = v), C in y && A.set(C, Math.abs(m - y[C]))
    }
    const g = new Set,
        E = new Set;

    function L(S) {
        P(S, 1), S.m(i, d), l.set(S.key, S), d = S.first, h--
    }
    for (; u && h;) {
        const S = w[h - 1],
            C = t[u - 1],
            v = S.key,
            $ = C.key;
        S === C ? (d = S.first, u--, h--) : x.has($) ? !l.has(v) || g.has(v) ? L(S) : E.has($) ? u-- : A.get(v) > A.get($) ? (E.add(v), L(S)) : (g.add($), u--) : (a(C, l), u--)
    }
    for (; u--;) {
        const S = t[u];
        x.has(S.key) || a(S, l)
    }
    for (; h;) L(w[h - 1]);
    return Ge(_), w
}

function Pn(t) {
    let e;
    const n = t[7].default,
        r = st(n, t, t[6], null);
    return {
        c() {
            r && r.c()
        },
        l(s) {
            r && r.l(s)
        },
        m(s, o) {
            r && r.m(s, o), e = !0
        },
        p(s, o) {
            r && r.p && (!e || o & 64) && ot(r, n, s, s[6], e ? lt(n, s[6], o, null) : it(s[6]), null)
        },
        i(s) {
            e || (P(r, s), e = !0)
        },
        o(s) {
            M(r, s), e = !1
        },
        d(s) {
            r && r.d(s)
        }
    }
}

function Mn(t) {
    let e, n;
    const r = t[7].default,
        s = st(r, t, t[6], null);
    let o = [t[3], {
            class: t[2]
        }],
        l = {};
    for (let i = 0; i < o.length; i += 1) l = ue(l, o[i]);
    return {
        c() {
            e = k("label"), s && s.c(), this.h()
        },
        l(i) {
            e = I(i, "LABEL", {
                class: !0
            });
            var a = F(e);
            s && s.l(a), a.forEach(b), this.h()
        },
        h() {
            Ke(e, l)
        },
        m(i, a) {
            O(i, e, a), s && s.m(e, null), t[8](e), n = !0
        },
        p(i, a) {
            s && s.p && (!n || a & 64) && ot(s, r, i, i[6], n ? lt(r, i[6], a, null) : it(i[6]), null), Ke(e, l = xt(o, [a & 8 && i[3], (!n || a & 4) && {
                class: i[2]
            }]))
        },
        i(i) {
            n || (P(s, i), n = !0)
        },
        o(i) {
            M(s, i), n = !1
        },
        d(i) {
            i && b(e), s && s.d(i), t[8](null)
        }
    }
}

function $n(t) {
    let e, n, r, s;
    const o = [Mn, Pn],
        l = [];

    function i(a, f) {
        return a[0] ? 0 : 1
    }
    return e = i(t), n = l[e] = o[e](t), {
        c() {
            n.c(), r = Oe()
        },
        l(a) {
            n.l(a), r = Oe()
        },
        m(a, f) {
            l[e].m(a, f), O(a, r, f), s = !0
        },
        p(a, [f]) {
            let d = e;
            e = i(a), e === d ? l[e].p(a, f) : (At(), M(l[d], 1, 1, () => {
                l[d] = null
            }), Ct(), n = l[e], n ? n.p(a, f) : (n = l[e] = o[e](a), n.c()), P(n, 1), n.m(r.parentNode, r))
        },
        i(a) {
            s || (P(n), s = !0)
        },
        o(a) {
            M(n), s = !1
        },
        d(a) {
            a && b(r), l[e].d(a)
        }
    }
}

function Fn(t, e, n) {
    let r;
    const s = ["color", "defaultClass", "show"];
    let o = Ie(e, s),
        {
            $$slots: l = {},
            $$scope: i
        } = e,
        {
            color: a = "gray"
        } = e,
        {
            defaultClass: f = "text-sm font-medium block"
        } = e,
        {
            show: d = !0
        } = e,
        c;
    const u = {
        gray: "text-gray-900 dark:text-gray-300",
        green: "text-green-700 dark:text-green-500",
        red: "text-red-700 dark:text-red-500",
        disabled: "text-gray-400 dark:text-gray-500"
    };

    function h(m) {
        Et[m ? "unshift" : "push"](() => {
            c = m, n(1, c)
        })
    }
    return t.$$set = m => {
        n(10, e = ue(ue({}, e), pe(m))), n(3, o = Ie(e, s)), "color" in m && n(4, a = m.color), "defaultClass" in m && n(5, f = m.defaultClass), "show" in m && n(0, d = m.show), "$$scope" in m && n(6, i = m.$$scope)
    }, t.$$.update = () => {
        if (t.$$.dirty & 18) {
            const m = c == null ? void 0 : c.control;
            n(4, a = m != null && m.disabled ? "disabled" : a)
        }
        n(2, r = we(f, u[a], e.class))
    }, e = pe(e), [d, c, r, o, a, f, i, l, h]
}
class zn extends Ve {
    constructor(e) {
        super(), Ue(this, e, Fn, $n, Be, {
            color: 4,
            defaultClass: 5,
            show: 0
        })
    }
}
const Gn = {
        primary: "text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600",
        secondary: "text-secondary-600 focus:ring-secondary-500 dark:focus:ring-secondary-600",
        red: "text-red-600 focus:ring-red-500 dark:focus:ring-red-600",
        green: "text-green-600 focus:ring-green-500 dark:focus:ring-green-600",
        purple: "text-purple-600 focus:ring-purple-500 dark:focus:ring-purple-600",
        teal: "text-teal-600 focus:ring-teal-500 dark:focus:ring-teal-600",
        yellow: "text-yellow-400 focus:ring-yellow-500 dark:focus:ring-yellow-600",
        orange: "text-orange-500 focus:ring-orange-500 dark:focus:ring-orange-600",
        blue: "text-blue-600 focus:ring-blue-500 dark:focus:ring-blue-600"
    },
    Gt = (t, e) => we(t ? "inline-flex" : "flex", "items-center", e);
let Bn = "mr-2";
const Bt = (t, e, n, r, s) => we("w-4 h-4 bg-gray-100 border-gray-300 dark:ring-offset-gray-800 focus:ring-2", Bn, r ? "dark:bg-gray-600 dark:border-gray-500" : "dark:bg-gray-700 dark:border-gray-600", t && "sr-only peer", n && "rounded", Gn[e], s);

function Vn(t) {
    let e, n, r, s, o, l, i, a = [{
            type: "checkbox"
        }, {
            __value: t[5]
        }, t[12], {
            class: n = we(t[6], Bt(t[3], t[2], !0, t[7], t[11].default || t[10].class))
        }],
        f = {};
    for (let u = 0; u < a.length; u += 1) f = ue(f, a[u]);
    const d = t[13].default,
        c = st(d, t, t[26], null);
    return {
        c() {
            e = k("input"), s = R(), c && c.c(), this.h()
        },
        l(u) {
            e = I(u, "INPUT", {
                type: !0,
                class: !0
            }), s = N(u), c && c.l(u), this.h()
        },
        h() {
            Ke(e, f)
        },
        m(u, h) {
            O(u, e, h), e.autofocus && e.focus(), e.checked = t[1], O(u, s, h), c && c.m(u, h), o = !0, l || (i = [sn(r = t[8].call(null, e, t[0])), Z(e, "change", t[25]), Z(e, "keyup", t[14]), Z(e, "keydown", t[15]), Z(e, "keypress", t[16]), Z(e, "focus", t[17]), Z(e, "blur", t[18]), Z(e, "click", t[19]), Z(e, "mouseover", t[20]), Z(e, "mouseenter", t[21]), Z(e, "mouseleave", t[22]), Z(e, "paste", t[23]), Z(e, "change", t[9]), Z(e, "change", t[24])], l = !0)
        },
        p(u, h) {
            Ke(e, f = xt(a, [{
                type: "checkbox"
            }, (!o || h & 32) && {
                __value: u[5]
            }, h & 4096 && u[12], (!o || h & 3148 && n !== (n = we(u[6], Bt(u[3], u[2], !0, u[7], u[11].default || u[10].class)))) && {
                class: n
            }])), r && on(r.update) && h & 1 && r.update.call(null, u[0]), h & 2 && (e.checked = u[1]), c && c.p && (!o || h & 67108864) && ot(c, d, u, u[26], o ? lt(d, u[26], h, null) : it(u[26]), null)
        },
        i(u) {
            o || (P(c, u), o = !0)
        },
        o(u) {
            M(c, u), o = !1
        },
        d(u) {
            u && (b(e), b(s)), c && c.d(u), l = !1, Ge(i)
        }
    }
}

function Un(t) {
    let e, n;
    return e = new zn({
        props: {
            class: Gt(t[4], t[10].class),
            show: t[11].default,
            $$slots: {
                default: [Vn]
            },
            $$scope: {
                ctx: t
            }
        }
    }), {
        c() {
            G(e.$$.fragment)
        },
        l(r) {
            B(e.$$.fragment, r)
        },
        m(r, s) {
            V(e, r, s), n = !0
        },
        p(r, [s]) {
            const o = {};
            s & 1040 && (o.class = Gt(r[4], r[10].class)), s & 2048 && (o.show = r[11].default), s & 67116143 && (o.$$scope = {
                dirty: s,
                ctx: r
            }), e.$set(o)
        },
        i(r) {
            n || (P(e.$$.fragment, r), n = !0)
        },
        o(r) {
            M(e.$$.fragment, r), n = !1
        },
        d(r) {
            U(e, r)
        }
    }
}

function Hn(t, e, n) {
    const r = ["color", "custom", "inline", "group", "value", "checked", "spacing"];
    let s = Ie(e, r),
        {
            $$slots: o = {},
            $$scope: l
        } = e;
    const i = Cn(o);
    let {
        color: a = "primary"
    } = e, {
        custom: f = !1
    } = e, {
        inline: d = !1
    } = e, {
        group: c = []
    } = e, {
        value: u = "on"
    } = e, {
        checked: h = void 0
    } = e, {
        spacing: m = "mr-2"
    } = e, y = rn("background");

    function w(p, oe) {
        return h === void 0 && n(1, h = oe.includes(u)), x(), {
            update(be) {
                n(1, h = be.includes(u))
            }
        }
    }

    function x() {
        const p = c.indexOf(u);
        h === void 0 && n(1, h = p >= 0), h ? p < 0 && (c.push(u), n(0, c)) : p >= 0 && (c.splice(p, 1), n(0, c))
    }

    function A(p) {
        re.call(this, t, p)
    }

    function _(p) {
        re.call(this, t, p)
    }

    function g(p) {
        re.call(this, t, p)
    }

    function E(p) {
        re.call(this, t, p)
    }

    function L(p) {
        re.call(this, t, p)
    }

    function S(p) {
        re.call(this, t, p)
    }

    function C(p) {
        re.call(this, t, p)
    }

    function v(p) {
        re.call(this, t, p)
    }

    function $(p) {
        re.call(this, t, p)
    }

    function pt(p) {
        re.call(this, t, p)
    }

    function _t(p) {
        re.call(this, t, p)
    }

    function H() {
        h = this.checked, n(1, h)
    }
    return t.$$set = p => {
        n(10, e = ue(ue({}, e), pe(p))), n(12, s = Ie(e, r)), "color" in p && n(2, a = p.color), "custom" in p && n(3, f = p.custom), "inline" in p && n(4, d = p.inline), "group" in p && n(0, c = p.group), "value" in p && n(5, u = p.value), "checked" in p && n(1, h = p.checked), "spacing" in p && n(6, m = p.spacing), "$$scope" in p && n(26, l = p.$$scope)
    }, e = pe(e), [c, h, a, f, d, u, m, y, w, x, e, i, s, o, A, _, g, E, L, S, C, v, $, pt, _t, H, l]
}
class Zn extends Ve {
    constructor(e) {
        super(), Ue(this, e, Hn, Un, Be, {
            color: 2,
            custom: 3,
            inline: 4,
            group: 0,
            value: 5,
            checked: 1,
            spacing: 6
        })
    }
}

function Wn(t) {
    let e, n, r;
    const s = t[8].default,
        o = st(s, t, t[13], null);
    return {
        c() {
            e = k("span"), n = R(), o && o.c(), this.h()
        },
        l(l) {
            e = I(l, "SPAN", {
                class: !0
            }), F(e).forEach(b), n = N(l), o && o.l(l), this.h()
        },
        h() {
            D(e, "class", t[3])
        },
        m(l, i) {
            O(l, e, i), O(l, n, i), o && o.m(l, i), r = !0
        },
        p(l, i) {
            (!r || i & 8) && D(e, "class", l[3]), o && o.p && (!r || i & 8192) && ot(o, s, l, l[13], r ? lt(s, l[13], i, null) : it(l[13]), null)
        },
        i(l) {
            r || (P(o, l), r = !0)
        },
        o(l) {
            M(o, l), r = !1
        },
        d(l) {
            l && (b(e), b(n)), o && o.d(l)
        }
    }
}

function Yn(t) {
    let e, n, r, s;
    const o = [{
        custom: !0
    }, t[5], {
        class: t[4].class
    }, {
        value: t[2]
    }];

    function l(f) {
        t[9](f)
    }

    function i(f) {
        t[10](f)
    }
    let a = {
        $$slots: {
            default: [Wn]
        },
        $$scope: {
            ctx: t
        }
    };
    for (let f = 0; f < o.length; f += 1) a = ue(a, o[f]);
    return t[1] !== void 0 && (a.checked = t[1]), t[0] !== void 0 && (a.group = t[0]), e = new Zn({
        props: a
    }), Et.push(() => Ft(e, "checked", l)), Et.push(() => Ft(e, "group", i)), e.$on("click", t[11]), e.$on("change", t[12]), {
        c() {
            G(e.$$.fragment)
        },
        l(f) {
            B(e.$$.fragment, f)
        },
        m(f, d) {
            V(e, f, d), s = !0
        },
        p(f, [d]) {
            const c = d & 52 ? xt(o, [o[0], d & 32 && Rn(f[5]), d & 16 && {
                class: f[4].class
            }, d & 4 && {
                value: f[2]
            }]) : {};
            d & 8200 && (c.$$scope = {
                dirty: d,
                ctx: f
            }), !n && d & 2 && (n = !0, c.checked = f[1], $t(() => n = !1)), !r && d & 1 && (r = !0, c.group = f[0], $t(() => r = !1)), e.$set(c)
        },
        i(f) {
            s || (P(e.$$.fragment, f), s = !0)
        },
        o(f) {
            M(e.$$.fragment, f), s = !1
        },
        d(f) {
            U(e, f)
        }
    }
}
const jn = "mr-3 shrink-0 bg-gray-200 rounded-full peer-focus:ring-4 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:bg-white after:border-gray-300 after:border after:rounded-full after:transition-all";

function qn(t, e, n) {
    const r = ["size", "group", "value", "checked", "customSize"];
    let s = Ie(e, r),
        {
            $$slots: o = {},
            $$scope: l
        } = e,
        {
            size: i = "default"
        } = e,
        {
            group: a = []
        } = e,
        {
            value: f = ""
        } = e,
        {
            checked: d = void 0
        } = e,
        {
            customSize: c = ""
        } = e,
        u = rn("background");
    const h = {
            primary: "peer-focus:ring-primary-300 dark:peer-focus:ring-primary-800 peer-checked:bg-primary-600",
            secondary: "peer-focus:ring-secondary-300 dark:peer-focus:ring-secondary-800 peer-checked:bg-secondary-600",
            red: "peer-focus:ring-red-300 dark:peer-focus:ring-red-800 peer-checked:bg-red-600",
            green: "peer-focus:ring-green-300 dark:peer-focus:ring-green-800 peer-checked:bg-green-600",
            purple: "peer-focus:ring-purple-300 dark:peer-focus:ring-purple-800 peer-checked:bg-purple-600",
            yellow: "peer-focus:ring-yellow-300 dark:peer-focus:ring-yellow-800 peer-checked:bg-yellow-400",
            teal: "peer-focus:ring-teal-300 dark:peer-focus:ring-teal-800 peer-checked:bg-teal-600",
            orange: "peer-focus:ring-orange-300 dark:peer-focus:ring-orange-800 peer-checked:bg-orange-500",
            blue: "peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 peer-checked:bg-blue-600"
        },
        m = {
            small: "w-9 h-5 after:top-[2px] after:left-[2px] after:h-4 after:w-4",
            default: "w-11 h-6 after:top-0.5 after:left-[2px] after:h-5 after:w-5",
            large: "w-14 h-7 after:top-0.5 after:left-[4px]  after:h-6 after:w-6",
            custom: c
        };
    let y;

    function w(g) {
        d = g, n(1, d)
    }

    function x(g) {
        a = g, n(0, a)
    }

    function A(g) {
        re.call(this, t, g)
    }

    function _(g) {
        re.call(this, t, g)
    }
    return t.$$set = g => {
        n(4, e = ue(ue({}, e), pe(g))), n(5, s = Ie(e, r)), "size" in g && n(6, i = g.size), "group" in g && n(0, a = g.group), "value" in g && n(2, f = g.value), "checked" in g && n(1, d = g.checked), "customSize" in g && n(7, c = g.customSize), "$$scope" in g && n(13, l = g.$$scope)
    }, t.$$.update = () => {
        n(3, y = we(jn, u ? "dark:bg-gray-600 dark:border-gray-500" : "dark:bg-gray-700 dark:border-gray-600", h[s.color ?? "primary"], m[i], "relative", e.classDiv))
    }, e = pe(e), [a, d, f, y, e, s, i, c, o, w, x, A, _, l]
}
class Me extends Ve {
    constructor(e) {
        super(), Ue(this, e, qn, Yn, Be, {
            size: 6,
            group: 0,
            value: 2,
            checked: 1,
            customSize: 7
        })
    }
}

function Xn(t) {
    let e, n, r, s, o, l, i, a, f, d, c, u, h, m, y, w, x = "Loading...";
    return {
        c() {
            e = k("div"), n = k("div"), r = R(), s = k("div"), o = R(), l = k("div"), i = R(), a = k("div"), f = R(), d = k("div"), c = R(), u = k("div"), h = R(), m = k("div"), y = R(), w = k("span"), w.textContent = x, this.h()
        },
        l(A) {
            e = I(A, "DIV", {
                role: !0,
                class: !0
            });
            var _ = F(e);
            n = I(_, "DIV", {
                class: !0
            }), F(n).forEach(b), r = N(_), s = I(_, "DIV", {
                class: !0
            }), F(s).forEach(b), o = N(_), l = I(_, "DIV", {
                class: !0
            }), F(l).forEach(b), i = N(_), a = I(_, "DIV", {
                class: !0
            }), F(a).forEach(b), f = N(_), d = I(_, "DIV", {
                class: !0
            }), F(d).forEach(b), c = N(_), u = I(_, "DIV", {
                class: !0
            }), F(u).forEach(b), h = N(_), m = I(_, "DIV", {
                class: !0
            }), F(m).forEach(b), y = N(_), w = I(_, "SPAN", {
                class: !0,
                "data-svelte-h": !0
            }), Q(w) !== "svelte-1wtojot" && (w.textContent = x), _.forEach(b), this.h()
        },
        h() {
            D(n, "class", "h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-1/2 mb-4"), D(s, "class", "h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-9/12 mb-2.5"), D(l, "class", "h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"), D(a, "class", "h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"), D(d, "class", "h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-10/12 mb-2.5"), D(u, "class", "h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-11/12 mb-2.5"), D(m, "class", "h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-9/12"), D(w, "class", "sr-only"), D(e, "role", "status"), D(e, "class", t[0])
        },
        m(A, _) {
            O(A, e, _), T(e, n), T(e, r), T(e, s), T(e, o), T(e, l), T(e, i), T(e, a), T(e, f), T(e, d), T(e, c), T(e, u), T(e, h), T(e, m), T(e, y), T(e, w)
        },
        p(A, [_]) {
            _ & 1 && D(e, "class", A[0])
        },
        i: Pe,
        o: Pe,
        d(A) {
            A && b(e)
        }
    }
}

function Kn(t, e, n) {
    let r;
    const s = {
        sm: "max-w-sm",
        md: "max-w-md",
        lg: "max-w-lg",
        xl: "max-w-xl",
        xxl: "max-w-2xl"
    };
    let {
        divClass: o = "animate-pulse"
    } = e, {
        size: l = "sm"
    } = e;
    return t.$$set = i => {
        n(4, e = ue(ue({}, e), pe(i))), "divClass" in i && n(1, o = i.divClass), "size" in i && n(2, l = i.size)
    }, t.$$.update = () => {
        n(0, r = we(s[l], o, e.class))
    }, e = pe(e), [r, o, l]
}
class Re extends Ve {
    constructor(e) {
        super(), Ue(this, e, Kn, Xn, Be, {
            divClass: 1,
            size: 2
        })
    }
}
const Jn = "finalize",
    Qn = "consider";

function Ae(t, e, n) {
    t.dispatchEvent(new CustomEvent(Jn, {
        detail: {
            items: e,
            info: n
        }
    }))
}

function _e(t, e, n) {
    t.dispatchEvent(new CustomEvent(Qn, {
        detail: {
            items: e,
            info: n
        }
    }))
}
const at = "draggedEntered",
    He = "draggedLeft",
    ct = "draggedOverIndex",
    St = "draggedLeftDocument",
    Je = {
        LEFT_FOR_ANOTHER: "leftForAnother",
        OUTSIDE_OF_ANY: "outsideOfAny"
    };

function er(t, e, n) {
    t.dispatchEvent(new CustomEvent(at, {
        detail: {
            indexObj: e,
            draggedEl: n
        }
    }))
}

function tr(t, e, n) {
    t.dispatchEvent(new CustomEvent(He, {
        detail: {
            draggedEl: e,
            type: Je.LEFT_FOR_ANOTHER,
            theOtherDz: n
        }
    }))
}

function nr(t, e) {
    t.dispatchEvent(new CustomEvent(He, {
        detail: {
            draggedEl: e,
            type: Je.OUTSIDE_OF_ANY
        }
    }))
}

function rr(t, e, n) {
    t.dispatchEvent(new CustomEvent(ct, {
        detail: {
            indexObj: e,
            draggedEl: n
        }
    }))
}

function sr(t) {
    window.dispatchEvent(new CustomEvent(St, {
        detail: {
            draggedEl: t
        }
    }))
}
const ee = {
        DRAG_STARTED: "dragStarted",
        DRAGGED_ENTERED: at,
        DRAGGED_ENTERED_ANOTHER: "dragEnteredAnother",
        DRAGGED_OVER_INDEX: ct,
        DRAGGED_LEFT: He,
        DRAGGED_LEFT_ALL: "draggedLeftAll",
        DROPPED_INTO_ZONE: "droppedIntoZone",
        DROPPED_INTO_ANOTHER: "droppedIntoAnother",
        DROPPED_OUTSIDE_OF_ANY: "droppedOutsideOfAny",
        DRAG_STOPPED: "dragStopped"
    },
    ne = {
        POINTER: "pointer",
        KEYBOARD: "keyboard"
    },
    ut = "isDndShadowItem",
    dt = "data-is-dnd-shadow-item-internal",
    or = "data-is-dnd-shadow-item-hint",
    ir = "id:dnd-shadow-placeholder-0000",
    lr = "dnd-action-dragged-el";
let j = "id",
    Dt = 0;

function un() {
    Dt++
}

function dn() {
    if (Dt === 0) throw new Error("Bug! trying to decrement when there are no dropzones");
    Dt--
}
const Rt = typeof window > "u";

function wt(t, e = !0) {
    let n;
    const r = e ? dr(t) : t.getBoundingClientRect(),
        s = getComputedStyle(t),
        o = s.transform;
    if (o) {
        let l, i, a, f;
        if (o.startsWith("matrix3d(")) n = o.slice(9, -1).split(/, /), l = +n[0], i = +n[5], a = +n[12], f = +n[13];
        else if (o.startsWith("matrix(")) n = o.slice(7, -1).split(/, /), l = +n[0], i = +n[3], a = +n[4], f = +n[5];
        else return r;
        const d = s.transformOrigin,
            c = r.x - a - (1 - l) * parseFloat(d),
            u = r.y - f - (1 - i) * parseFloat(d.slice(d.indexOf(" ") + 1)),
            h = l ? r.width / l : t.offsetWidth,
            m = i ? r.height / i : t.offsetHeight;
        return {
            x: c,
            y: u,
            width: h,
            height: m,
            top: u,
            right: c + h,
            bottom: u + m,
            left: c
        }
    } else return r
}

function fn(t) {
    const e = wt(t);
    return {
        top: e.top + window.scrollY,
        bottom: e.bottom + window.scrollY,
        left: e.left + window.scrollX,
        right: e.right + window.scrollX
    }
}

function gn(t) {
    const e = t.getBoundingClientRect();
    return {
        top: e.top + window.scrollY,
        bottom: e.bottom + window.scrollY,
        left: e.left + window.scrollX,
        right: e.right + window.scrollX
    }
}

function hn(t) {
    return {
        x: (t.left + t.right) / 2,
        y: (t.top + t.bottom) / 2
    }
}

function ar(t, e) {
    return Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2))
}

function ft(t, e) {
    return t.y <= e.bottom && t.y >= e.top && t.x >= e.left && t.x <= e.right
}

function $e(t) {
    return hn(gn(t))
}

function Vt(t, e) {
    const n = $e(t),
        r = fn(e);
    return ft(n, r)
}

function cr(t, e) {
    const n = $e(t),
        r = $e(e);
    return ar(n, r)
}

function ur(t) {
    const e = gn(t);
    return e.right < 0 || e.left > document.documentElement.scrollWidth || e.bottom < 0 || e.top > document.documentElement.scrollHeight
}

function dr(t) {
    let e = t.getBoundingClientRect(),
        n = {
            top: e.top,
            bottom: e.bottom,
            left: e.left,
            right: e.right
        },
        r = t.parentElement;
    for (; r && r !== document.body;) {
        let s = r.getBoundingClientRect();
        const o = window.getComputedStyle(r).overflowY,
            l = window.getComputedStyle(r).overflowX,
            i = o === "scroll" || o === "auto",
            a = l === "scroll" || l === "auto";
        i && (n.top = Math.max(n.top, s.top), n.bottom = Math.min(n.bottom, s.bottom)), a && (n.left = Math.max(n.left, s.left), n.right = Math.min(n.right, s.right)), r = r.parentElement
    }
    return n.top = Math.max(n.top, 0), n.bottom = Math.min(n.bottom, window.innerHeight), n.left = Math.max(n.left, 0), n.right = Math.min(n.right, window.innerWidth), {
        top: n.top,
        bottom: n.bottom,
        left: n.left,
        right: n.right,
        width: Math.max(0, n.right - n.left),
        height: Math.max(0, n.bottom - n.top)
    }
}
let Te;

function Nt() {
    Te = new Map
}
Nt();

function fr(t) {
    const e = Array.from(t.children).findIndex(n => n.getAttribute(dt));
    if (e >= 0) return Te.has(t) || Te.set(t, new Map), Te.get(t).set(e, fn(t.children[e])), e
}

function gr(t, e) {
    if (!Vt(t, e)) return null;
    const n = e.children;
    if (n.length === 0) return {
        index: 0,
        isProximityBased: !0
    };
    const r = fr(e);
    for (let l = 0; l < n.length; l++)
        if (Vt(t, n[l])) {
            const i = Te.has(e) && Te.get(e).get(l);
            return i && !ft($e(t), i) ? {
                index: r,
                isProximityBased: !1
            } : {
                index: l,
                isProximityBased: !1
            }
        } let s = Number.MAX_VALUE,
        o;
    for (let l = 0; l < n.length; l++) {
        const i = cr(t, n[l]);
        i < s && (s = i, o = l)
    }
    return {
        index: o,
        isProximityBased: !0
    }
}

function je(t) {
    return JSON.stringify(t, null, 2)
}

function Qe(t) {
    if (!t) throw new Error("cannot get depth of a falsy node");
    return mn(t, 0)
}

function mn(t, e = 0) {
    return t.parentElement ? mn(t.parentElement, e + 1) : e - 1
}

function hr(t, e) {
    if (Object.keys(t).length !== Object.keys(e).length) return !1;
    for (const n in t)
        if (!{}.hasOwnProperty.call(e, n) || e[n] !== t[n]) return !1;
    return !0
}

function mr(t, e) {
    if (t.length !== e.length) return !1;
    for (let n = 0; n < t.length; n++)
        if (t[n] !== e[n]) return !1;
    return !0
}
const pr = 200,
    Ut = 10;
let vt;

function _r(t, e, n = pr, r) {
    let s, o, l = !1,
        i;
    const a = Array.from(e).sort((d, c) => Qe(c) - Qe(d));

    function f() {
        const d = $e(t),
            c = r.multiScrollIfNeeded();
        if (!c && i && Math.abs(i.x - d.x) < Ut && Math.abs(i.y - d.y) < Ut) {
            vt = window.setTimeout(f, n);
            return
        }
        if (ur(t)) {
            sr(t);
            return
        }
        i = d;
        let u = !1;
        for (const h of a) {
            c && Nt();
            const m = gr(t, h);
            if (m === null) continue;
            const {
                index: y
            } = m;
            u = !0, h !== s ? (s && tr(s, t, h), er(h, m, t), s = h) : y !== o && (rr(h, m, t), o = y);
            break
        }!u && l && s ? (nr(s, t), s = void 0, o = void 0, l = !1) : l = !0, vt = window.setTimeout(f, n)
    }
    f()
}

function br() {
    clearTimeout(vt), Nt()
}
const Ne = 30;

function Er() {
    let t;

    function e() {
        t = {
            directionObj: void 0,
            stepPx: 0
        }
    }
    e();

    function n(o) {
        const {
            directionObj: l,
            stepPx: i
        } = t;
        l && (o.scrollBy(l.x * i, l.y * i), window.requestAnimationFrame(() => n(o)))
    }

    function r(o) {
        return Ne - o
    }

    function s(o, l) {
        if (!l) return !1;
        const i = yr(o, l),
            a = !!t.directionObj;
        if (i === null) return a && e(), !1;
        let [f, d] = [!1, !1];
        return l.scrollHeight > l.clientHeight && (i.bottom < Ne ? (f = !0, t.directionObj = {
            x: 0,
            y: 1
        }, t.stepPx = r(i.bottom)) : i.top < Ne && (f = !0, t.directionObj = {
            x: 0,
            y: -1
        }, t.stepPx = r(i.top)), !a && f) || l.scrollWidth > l.clientWidth && (i.right < Ne ? (d = !0, t.directionObj = {
            x: 1,
            y: 0
        }, t.stepPx = r(i.right)) : i.left < Ne && (d = !0, t.directionObj = {
            x: -1,
            y: 0
        }, t.stepPx = r(i.left)), !a && d) ? (n(l), !0) : (e(), !1)
    }
    return {
        scrollIfNeeded: s,
        resetScrolling: e
    }
}

function yr(t, e) {
    const n = e === document.scrollingElement ? {
        top: 0,
        bottom: window.innerHeight,
        left: 0,
        right: window.innerWidth
    } : e.getBoundingClientRect();
    return ft(t, n) ? {
        top: t.y - n.top,
        bottom: n.bottom - t.y,
        left: t.x - n.left,
        right: n.right - t.x
    } : null
}

function Dr(t = [], e) {
    const n = vr(t),
        r = Array.from(n).sort((i, a) => Qe(a) - Qe(i)),
        {
            scrollIfNeeded: s,
            resetScrolling: o
        } = Er();

    function l() {
        const i = e();
        if (!i || !r) return !1;
        const a = r.filter(f => ft(i, f.getBoundingClientRect()) || f === document.scrollingElement);
        for (let f = 0; f < a.length; f++)
            if (s(i, a[f])) return !0;
        return !1
    }
    return {
        multiScrollIfNeeded: n.size > 0 ? l : () => !1,
        destroy: () => o()
    }
}

function wr(t) {
    if (!t) return [];
    const e = [];
    let n = t;
    for (; n;) {
        const {
            overflow: r
        } = window.getComputedStyle(n);
        r.split(" ").some(s => s.includes("auto") || s.includes("scroll")) && e.push(n), n = n.parentElement
    }
    return e
}

function vr(t) {
    const e = new Set;
    for (let n of t) wr(n).forEach(r => e.add(r));
    return (document.scrollingElement.scrollHeight > document.scrollingElement.clientHeight || document.scrollingElement.scrollWidth > document.scrollingElement.clientHeight) && e.add(document.scrollingElement), e
}

function Tr(t) {
    const e = t.cloneNode(!0),
        n = [],
        r = t.tagName === "SELECT",
        s = r ? [t] : [...t.querySelectorAll("select")];
    for (const i of s) n.push(i.value);
    if (s.length > 0) {
        const i = r ? [e] : [...e.querySelectorAll("select")];
        for (let a = 0; a < i.length; a++) {
            const f = i[a],
                d = n[a],
                c = f.querySelector(`option[value="${d}"`);
            c && c.setAttribute("selected", !0)
        }
    }
    const o = t.tagName === "CANVAS",
        l = o ? [t] : [...t.querySelectorAll("canvas")];
    if (l.length > 0) {
        const i = o ? [e] : [...e.querySelectorAll("canvas")];
        for (let a = 0; a < i.length; a++) {
            const f = l[a],
                d = i[a];
            d.width = f.width, d.height = f.height, f.width > 0 && f.height > 0 && d.getContext("2d").drawImage(f, 0, 0)
        }
    }
    return e
}
const Fe = Object.freeze({
        USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT: "USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT"
    }),
    kr = {
        [Fe.USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT]: !1
    };

function pn(t) {
    if (!Fe[t]) throw new Error(`Can't get non existing feature flag ${t}! Supported flags: ${Object.keys(Fe)}`);
    return kr[t]
}
const Ir = .2;

function Ee(t) {
    return `${t} ${Ir}s ease`
}

function Or(t, e) {
    const n = t.getBoundingClientRect(),
        r = Tr(t);
    _n(t, r), r.id = lr, r.style.position = "fixed";
    let s = n.top,
        o = n.left;
    if (r.style.top = `${s}px`, r.style.left = `${o}px`, e) {
        const l = hn(n);
        s -= l.y - e.y, o -= l.x - e.x, window.setTimeout(() => {
            r.style.top = `${s}px`, r.style.left = `${o}px`
        }, 0)
    }
    return r.style.margin = "0", r.style.boxSizing = "border-box", r.style.height = `${n.height}px`, r.style.width = `${n.width}px`, r.style.transition = `${Ee("top")}, ${Ee("left")}, ${Ee("background-color")}, ${Ee("opacity")}, ${Ee("color")} `, window.setTimeout(() => r.style.transition += `, ${Ee("width")}, ${Ee("height")}`, 0), r.style.zIndex = "9999", r.style.cursor = "grabbing", r
}

function Ar(t) {
    t.style.cursor = "grab"
}

function Cr(t, e, n, r) {
    _n(e, t);
    const s = e.getBoundingClientRect(),
        o = t.getBoundingClientRect(),
        l = s.width - o.width,
        i = s.height - o.height;
    if (l || i) {
        const a = {
            left: (n - o.left) / o.width,
            top: (r - o.top) / o.height
        };
        pn(Fe.USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT) || (t.style.height = `${s.height}px`, t.style.width = `${s.width}px`), t.style.left = `${parseFloat(t.style.left)-a.left*l}px`, t.style.top = `${parseFloat(t.style.top)-a.top*i}px`
    }
}

function _n(t, e) {
    const n = window.getComputedStyle(t);
    Array.from(n).filter(r => r.startsWith("background") || r.startsWith("padding") || r.startsWith("font") || r.startsWith("text") || r.startsWith("align") || r.startsWith("justify") || r.startsWith("display") || r.startsWith("flex") || r.startsWith("border") || r === "opacity" || r === "color" || r === "list-style-type" || pn(Fe.USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT) && (r === "width" || r === "height")).forEach(r => e.style.setProperty(r, n.getPropertyValue(r), n.getPropertyPriority(r)))
}

function xr(t, e) {
    t.draggable = !1, t.ondragstart = () => !1, e ? (t.style.userSelect = "", t.style.WebkitUserSelect = "", t.style.cursor = "") : (t.style.userSelect = "none", t.style.WebkitUserSelect = "none", t.style.cursor = "grab")
}

function bn(t) {
    t.style.display = "none", t.style.position = "fixed", t.style.zIndex = "-5"
}

function Sr(t) {
    t.style.visibility = "hidden", t.setAttribute(dt, "true")
}

function Rr(t) {
    t.style.visibility = "", t.removeAttribute(dt)
}

function qe(t, e = () => {}, n = () => []) {
    t.forEach(r => {
        const s = e(r);
        Object.keys(s).forEach(o => {
            r.style[o] = s[o]
        }), n(r).forEach(o => r.classList.add(o))
    })
}

function et(t, e = () => {}, n = () => []) {
    t.forEach(r => {
        const s = e(r);
        Object.keys(s).forEach(o => {
            r.style[o] = ""
        }), n(r).forEach(o => r.classList.contains(o) && r.classList.remove(o))
    })
}

function Nr(t) {
    const e = t.style.minHeight;
    t.style.minHeight = window.getComputedStyle(t).getPropertyValue("height");
    const n = t.style.minWidth;
    return t.style.minWidth = window.getComputedStyle(t).getPropertyValue("width"),
        function() {
            t.style.minHeight = e, t.style.minWidth = n
        }
}
const Lr = "--any--",
    Pr = 100,
    Mr = 20,
    Ht = 3,
    Zt = {
        outline: "rgba(255, 255, 102, 0.7) solid 2px"
    },
    Wt = "data-is-dnd-original-dragged-item";
let le, K, te, gt, z, ht, me, X, ge, se, fe = !1,
    Lt = !1,
    Pt, Ze = !1,
    Xe = [],
    Le;
const ce = new Map,
    W = new Map,
    bt = new WeakMap;

function $r(t, e) {
    ce.has(e) || ce.set(e, new Set), ce.get(e).has(t) || (ce.get(e).add(t), un())
}

function Yt(t, e) {
    ce.get(e).delete(t), dn(), ce.get(e).size === 0 && ce.delete(e)
}

function Fr() {
    const t = ce.get(gt);
    for (const r of t) r.addEventListener(at, En), r.addEventListener(He, yn), r.addEventListener(ct, Dn);
    window.addEventListener(St, Ce);
    const e = Math.max(...Array.from(t.keys()).map(r => W.get(r).dropAnimationDurationMs)),
        n = e === 0 ? Mr : Math.max(e, Pr);
    Le = Dr(t, () => se), _r(K, t, n * 1.07, Le)
}

function zr() {
    const t = ce.get(gt);
    for (const e of t) e.removeEventListener(at, En), e.removeEventListener(He, yn), e.removeEventListener(ct, Dn);
    window.removeEventListener(St, Ce), Le && (Le.destroy(), Le = void 0), br()
}

function mt(t) {
    return t.findIndex(e => !!e[ut])
}

function Gr(t) {
    return {
        ...t,
        [ut]: !0,
        [j]: ir
    }
}

function En(t) {
    let {
        items: e,
        dropFromOthersDisabled: n
    } = W.get(t.currentTarget);
    if (n && t.currentTarget !== z) return;
    if (Ze = !1, e = e.filter(l => l[j] !== me[j]), z !== t.currentTarget) {
        const i = W.get(z).items.filter(a => !a[ut]);
        _e(z, i, {
            trigger: ee.DRAGGED_ENTERED_ANOTHER,
            id: te[j],
            source: ne.POINTER
        })
    }
    const {
        index: r,
        isProximityBased: s
    } = t.detail.indexObj, o = s && r === t.currentTarget.children.length - 1 ? r + 1 : r;
    X = t.currentTarget, e.splice(o, 0, me), _e(t.currentTarget, e, {
        trigger: ee.DRAGGED_ENTERED,
        id: te[j],
        source: ne.POINTER
    })
}

function yn(t) {
    if (!fe) return;
    const {
        items: e,
        dropFromOthersDisabled: n
    } = W.get(t.currentTarget);
    if (n && t.currentTarget !== z && t.currentTarget !== X) return;
    const r = [...e],
        s = mt(r);
    s !== -1 && r.splice(s, 1);
    const o = X;
    X = void 0;
    const {
        type: l,
        theOtherDz: i
    } = t.detail;
    if (l === Je.OUTSIDE_OF_ANY || l === Je.LEFT_FOR_ANOTHER && i !== z && W.get(i).dropFromOthersDisabled) {
        Ze = !0, X = z;
        const a = o === z ? r : [...W.get(z).items];
        a.splice(ht, 0, me), _e(z, a, {
            trigger: ee.DRAGGED_LEFT_ALL,
            id: te[j],
            source: ne.POINTER
        })
    }
    _e(t.currentTarget, r, {
        trigger: ee.DRAGGED_LEFT,
        id: te[j],
        source: ne.POINTER
    })
}

function Dn(t) {
    const {
        items: e,
        dropFromOthersDisabled: n
    } = W.get(t.currentTarget);
    if (n && t.currentTarget !== z) return;
    const r = [...e];
    Ze = !1;
    const {
        index: s
    } = t.detail.indexObj, o = mt(r);
    o !== -1 && r.splice(o, 1), r.splice(s, 0, me), _e(t.currentTarget, r, {
        trigger: ee.DRAGGED_OVER_INDEX,
        id: te[j],
        source: ne.POINTER
    })
}

function tt(t) {
    t.preventDefault();
    const e = t.touches ? t.touches[0] : t;
    se = {
        x: e.clientX,
        y: e.clientY
    }, K.style.transform = `translate3d(${se.x-ge.x}px, ${se.y-ge.y}px, 0)`
}

function Ce() {
    Lt = !0, window.removeEventListener("mousemove", tt), window.removeEventListener("touchmove", tt), window.removeEventListener("mouseup", Ce), window.removeEventListener("touchend", Ce), zr(), Ar(K), X || (X = z);
    let {
        items: t,
        type: e
    } = W.get(X);
    et(ce.get(e), s => W.get(s).dropTargetStyle, s => W.get(s).dropTargetClasses);
    let n = mt(t);
    n === -1 && X === z && (n = ht), t = t.map(s => s[ut] ? te : s);

    function r() {
        Pt(), Ae(X, t, {
            trigger: Ze ? ee.DROPPED_OUTSIDE_OF_ANY : ee.DROPPED_INTO_ZONE,
            id: te[j],
            source: ne.POINTER
        }), X !== z && Ae(z, W.get(z).items, {
            trigger: ee.DROPPED_INTO_ANOTHER,
            id: te[j],
            source: ne.POINTER
        });
        const s = Array.from(X.children).find(o => o.getAttribute(dt));
        s && Rr(s), Ur()
    }
    W.get(X).dropAnimationDisabled ? r() : Br(n, r)
}

function Br(t, e) {
    const n = t > -1 ? wt(X.children[t], !1) : wt(X, !1),
        r = {
            x: n.left - parseFloat(K.style.left),
            y: n.top - parseFloat(K.style.top)
        },
        {
            dropAnimationDurationMs: s
        } = W.get(X),
        o = `transform ${s}ms ease`;
    K.style.transition = K.style.transition ? K.style.transition + "," + o : o, K.style.transform = `translate3d(${r.x}px, ${r.y}px, 0)`, window.setTimeout(e, s)
}

function Vr(t, e) {
    Xe.push({
        dz: t,
        destroy: e
    }), window.requestAnimationFrame(() => {
        bn(t), document.body.appendChild(t)
    })
}

function Ur() {
    K.remove(), le.remove(), Xe.length && (Xe.forEach(({
        dz: t,
        destroy: e
    }) => {
        e(), t.remove()
    }), Xe = []), K = void 0, le = void 0, te = void 0, gt = void 0, z = void 0, ht = void 0, me = void 0, X = void 0, ge = void 0, se = void 0, fe = !1, Lt = !1, Pt = void 0, Ze = !1
}

function Hr(t, e) {
    let n = !1;
    const r = {
        items: void 0,
        type: void 0,
        flipDurationMs: 0,
        dragDisabled: !1,
        morphDisabled: !1,
        dropFromOthersDisabled: !1,
        dropTargetStyle: Zt,
        dropTargetClasses: [],
        transformDraggedElement: () => {},
        centreDraggedOnCursor: !1,
        dropAnimationDisabled: !1
    };
    let s = new Map;

    function o() {
        window.addEventListener("mousemove", a, {
            passive: !1
        }), window.addEventListener("touchmove", a, {
            passive: !1,
            capture: !1
        }), window.addEventListener("mouseup", i, {
            passive: !1
        }), window.addEventListener("touchend", i, {
            passive: !1
        })
    }

    function l() {
        window.removeEventListener("mousemove", a), window.removeEventListener("touchmove", a), window.removeEventListener("mouseup", i), window.removeEventListener("touchend", i)
    }

    function i(u) {
        if (l(), le = void 0, ge = void 0, se = void 0, u.type === "touchend") {
            const h = new Event("click", {
                bubbles: !0,
                cancelable: !0
            });
            u.target.dispatchEvent(h)
        }
    }

    function a(u) {
        u.preventDefault();
        const h = u.touches ? u.touches[0] : u;
        se = {
            x: h.clientX,
            y: h.clientY
        }, (Math.abs(se.x - ge.x) >= Ht || Math.abs(se.y - ge.y) >= Ht) && (l(), d())
    }

    function f(u) {
        if (u.target !== u.currentTarget && (u.target.value !== void 0 || u.target.isContentEditable) || u.button || fe) return;
        u.preventDefault(), u.stopPropagation();
        const h = u.touches ? u.touches[0] : u;
        ge = {
            x: h.clientX,
            y: h.clientY
        }, se = {
            ...ge
        }, le = u.currentTarget, o()
    }

    function d() {
        fe = !0;
        const u = s.get(le);
        ht = u, z = le.parentElement;
        const h = z.closest("dialog") || z.closest("[popover]") || z.getRootNode(),
            m = h.body || h,
            {
                items: y,
                type: w,
                centreDraggedOnCursor: x
            } = r,
            A = [...y];
        te = A[u], gt = w, me = Gr(te), K = Or(le, x && se), m.appendChild(K);

        function _() {
            le.parentElement ? window.requestAnimationFrame(_) : (le.setAttribute(Wt, !0), m.appendChild(le), Fr(), bn(le), me[j] = te[j], K.focus())
        }
        window.requestAnimationFrame(_), qe(Array.from(ce.get(r.type)).filter(g => g === z || !W.get(g).dropFromOthersDisabled), g => W.get(g).dropTargetStyle, g => W.get(g).dropTargetClasses), A.splice(u, 1, me), Pt = Nr(z), _e(z, A, {
            trigger: ee.DRAG_STARTED,
            id: te[j],
            source: ne.POINTER
        }), window.addEventListener("mousemove", tt, {
            passive: !1
        }), window.addEventListener("touchmove", tt, {
            passive: !1,
            capture: !1
        }), window.addEventListener("mouseup", Ce, {
            passive: !1
        }), window.addEventListener("touchend", Ce, {
            passive: !1
        })
    }

    function c({
        items: u = void 0,
        flipDurationMs: h = 0,
        type: m = Lr,
        dragDisabled: y = !1,
        morphDisabled: w = !1,
        dropFromOthersDisabled: x = !1,
        dropTargetStyle: A = Zt,
        dropTargetClasses: _ = [],
        transformDraggedElement: g = () => {},
        centreDraggedOnCursor: E = !1,
        dropAnimationDisabled: L = !1
    }) {
        r.dropAnimationDurationMs = h, r.type && m !== r.type && Yt(t, r.type), r.type = m, r.items = [...u], r.dragDisabled = y, r.morphDisabled = w, r.transformDraggedElement = g, r.centreDraggedOnCursor = E, r.dropAnimationDisabled = L, n && fe && !Lt && (!hr(A, r.dropTargetStyle) || !mr(_, r.dropTargetClasses)) && (et([t], () => r.dropTargetStyle, () => _), qe([t], () => A, () => _)), r.dropTargetStyle = A, r.dropTargetClasses = [..._];

        function S(v, $) {
            return W.get(v) ? W.get(v)[$] : r[$]
        }
        n && fe && r.dropFromOthersDisabled !== x && (x ? et([t], v => S(v, "dropTargetStyle"), v => S(v, "dropTargetClasses")) : qe([t], v => S(v, "dropTargetStyle"), v => S(v, "dropTargetClasses"))), r.dropFromOthersDisabled = x, W.set(t, r), $r(t, m);
        const C = fe ? mt(r.items) : -1;
        for (let v = 0; v < t.children.length; v++) {
            const $ = t.children[v];
            if (xr($, y), v === C) {
                w || Cr(K, $, se.x, se.y), r.transformDraggedElement(K, te, v), Sr($);
                continue
            }
            $.removeEventListener("mousedown", bt.get($)), $.removeEventListener("touchstart", bt.get($)), y || ($.addEventListener("mousedown", f), $.addEventListener("touchstart", f), bt.set($, f)), s.set($, v), n || (n = !0)
        }
    }
    return c(e), {
        update: u => {
            c(u)
        },
        destroy: () => {
            function u() {
                Yt(t, W.get(t).type), W.delete(t)
            }
            fe && !t.closest(`[${Wt}]`) ? Vr(t, u) : u()
        }
    }
}
const Tt = {
        DND_ZONE_ACTIVE: "dnd-zone-active",
        DND_ZONE_DRAG_DISABLED: "dnd-zone-drag-disabled"
    },
    wn = {
        [Tt.DND_ZONE_ACTIVE]: "Tab to one the items and press space-bar or enter to start dragging it",
        [Tt.DND_ZONE_DRAG_DISABLED]: "This is a disabled drag and drop list"
    },
    Zr = "dnd-action-aria-alert";
let Y;

function kt() {
    Y || (Y = document.createElement("div"), function() {
        Y.id = Zr, Y.style.position = "fixed", Y.style.bottom = "0", Y.style.left = "0", Y.style.zIndex = "-5", Y.style.opacity = "0", Y.style.height = "0", Y.style.width = "0", Y.setAttribute("role", "alert")
    }(), document.body.prepend(Y), Object.entries(wn).forEach(([t, e]) => document.body.prepend(jr(t, e))))
}

function Wr() {
    return Rt ? null : (document.readyState === "complete" ? kt() : window.addEventListener("DOMContentLoaded", kt), {
        ...Tt
    })
}

function Yr() {
    Rt || !Y || (Object.keys(wn).forEach(t => {
        var e;
        return (e = document.getElementById(t)) == null ? void 0 : e.remove()
    }), Y.remove(), Y = void 0)
}

function jr(t, e) {
    const n = document.createElement("div");
    return n.id = t, n.innerHTML = `<p>${e}</p>`, n.style.display = "none", n.style.position = "fixed", n.style.zIndex = "-5", n
}

function ke(t) {
    if (Rt) return;
    Y || kt(), Y.innerHTML = "";
    const e = document.createTextNode(t);
    Y.appendChild(e), Y.style.display = "none", Y.style.display = "inline"
}
const qr = "--any--",
    jt = {
        outline: "rgba(255, 255, 102, 0.7) solid 2px"
    };
let ie = !1,
    It, J, De = "",
    ye, de, he = "";
const nt = new WeakSet,
    qt = new WeakMap,
    Xt = new WeakMap,
    Ot = new Map,
    q = new Map,
    ae = new Map;
let rt;

function Xr(t, e) {
    ae.size === 0 && (rt = Wr(), window.addEventListener("keydown", vn), window.addEventListener("click", Tn)), ae.has(e) || ae.set(e, new Set), ae.get(e).has(t) || (ae.get(e).add(t), un())
}

function Kt(t, e) {
    J === t && ze(), ae.get(e).delete(t), dn(), ae.get(e).size === 0 && ae.delete(e), ae.size === 0 && (window.removeEventListener("keydown", vn), window.removeEventListener("click", Tn), rt = void 0, Yr())
}

function vn(t) {
    if (ie) switch (t.key) {
        case "Escape": {
            ze();
            break
        }
    }
}

function Tn() {
    ie && (nt.has(document.activeElement) || ze())
}

function Kr(t) {
    if (!ie) return;
    const e = t.currentTarget;
    if (e === J) return;
    De = e.getAttribute("aria-label") || "";
    const {
        items: n
    } = q.get(J), r = n.find(f => f[j] === de), s = n.indexOf(r), o = n.splice(s, 1)[0], {
        items: l,
        autoAriaDisabled: i
    } = q.get(e);
    e.getBoundingClientRect().top < J.getBoundingClientRect().top || e.getBoundingClientRect().left < J.getBoundingClientRect().left ? (l.push(o), i || ke(`Moved item ${he} to the end of the list ${De}`)) : (l.unshift(o), i || ke(`Moved item ${he} to the beginning of the list ${De}`)), Ae(J, n, {
        trigger: ee.DROPPED_INTO_ANOTHER,
        id: de,
        source: ne.KEYBOARD
    }), Ae(e, l, {
        trigger: ee.DROPPED_INTO_ZONE,
        id: de,
        source: ne.KEYBOARD
    }), J = e
}

function kn() {
    Ot.forEach(({
        update: t
    }, e) => t(q.get(e)))
}

function ze(t = !0) {
    q.get(J).autoAriaDisabled || ke(`Stopped dragging item ${he}`), nt.has(document.activeElement) && document.activeElement.blur(), t && _e(J, q.get(J).items, {
        trigger: ee.DRAG_STOPPED,
        id: de,
        source: ne.KEYBOARD
    }), et(ae.get(It), e => q.get(e).dropTargetStyle, e => q.get(e).dropTargetClasses), ye = null, de = null, he = "", It = null, J = null, De = "", ie = !1, kn()
}

function Jr(t, e) {
    const n = {
        items: void 0,
        type: void 0,
        dragDisabled: !1,
        zoneTabIndex: 0,
        zoneItemTabIndex: 0,
        dropFromOthersDisabled: !1,
        dropTargetStyle: jt,
        dropTargetClasses: [],
        autoAriaDisabled: !1
    };

    function r(d, c, u) {
        d.length <= 1 || d.splice(u, 1, d.splice(c, 1, d[u])[0])
    }

    function s(d) {
        switch (d.key) {
            case "Enter":
            case " ": {
                if ((d.target.disabled !== void 0 || d.target.href || d.target.isContentEditable) && !nt.has(d.target)) return;
                d.preventDefault(), d.stopPropagation(), ie ? ze() : o(d);
                break
            }
            case "ArrowDown":
            case "ArrowRight": {
                if (!ie) return;
                d.preventDefault(), d.stopPropagation();
                const {
                    items: c
                } = q.get(t), u = Array.from(t.children), h = u.indexOf(d.currentTarget);
                h < u.length - 1 && (n.autoAriaDisabled || ke(`Moved item ${he} to position ${h+2} in the list ${De}`), r(c, h, h + 1), Ae(t, c, {
                    trigger: ee.DROPPED_INTO_ZONE,
                    id: de,
                    source: ne.KEYBOARD
                }));
                break
            }
            case "ArrowUp":
            case "ArrowLeft": {
                if (!ie) return;
                d.preventDefault(), d.stopPropagation();
                const {
                    items: c
                } = q.get(t), h = Array.from(t.children).indexOf(d.currentTarget);
                h > 0 && (n.autoAriaDisabled || ke(`Moved item ${he} to position ${h} in the list ${De}`), r(c, h, h - 1), Ae(t, c, {
                    trigger: ee.DROPPED_INTO_ZONE,
                    id: de,
                    source: ne.KEYBOARD
                }));
                break
            }
        }
    }

    function o(d) {
        i(d.currentTarget), J = t, It = n.type, ie = !0;
        const c = Array.from(ae.get(n.type)).filter(u => u === J || !q.get(u).dropFromOthersDisabled);
        if (qe(c, u => q.get(u).dropTargetStyle, u => q.get(u).dropTargetClasses), !n.autoAriaDisabled) {
            let u = `Started dragging item ${he}. Use the arrow keys to move it within its list ${De}`;
            c.length > 1 && (u += ", or tab to another list in order to move the item into it"), ke(u)
        }
        _e(t, q.get(t).items, {
            trigger: ee.DRAG_STARTED,
            id: de,
            source: ne.KEYBOARD
        }), kn()
    }

    function l(d) {
        ie && d.currentTarget !== ye && (d.stopPropagation(), ze(!1), o(d))
    }

    function i(d) {
        const {
            items: c
        } = q.get(t), u = Array.from(t.children), h = u.indexOf(d);
        ye = d, ye.tabIndex = n.zoneItemTabIndex, de = c[h][j], he = u[h].getAttribute("aria-label") || ""
    }

    function a({
        items: d = [],
        type: c = qr,
        dragDisabled: u = !1,
        zoneTabIndex: h = 0,
        zoneItemTabIndex: m = 0,
        dropFromOthersDisabled: y = !1,
        dropTargetStyle: w = jt,
        dropTargetClasses: x = [],
        autoAriaDisabled: A = !1
    }) {
        n.items = [...d], n.dragDisabled = u, n.dropFromOthersDisabled = y, n.zoneTabIndex = h, n.zoneItemTabIndex = m, n.dropTargetStyle = w, n.dropTargetClasses = x, n.autoAriaDisabled = A, n.type && c !== n.type && Kt(t, n.type), n.type = c, Xr(t, c), A || (t.setAttribute("aria-disabled", u), t.setAttribute("role", "list"), t.setAttribute("aria-describedby", u ? rt.DND_ZONE_DRAG_DISABLED : rt.DND_ZONE_ACTIVE)), q.set(t, n), ie ? t.tabIndex = t === J || ye.contains(t) || n.dropFromOthersDisabled || J && n.type !== q.get(J).type ? -1 : 0 : t.tabIndex = n.zoneTabIndex, t.addEventListener("focus", Kr);
        for (let _ = 0; _ < t.children.length; _++) {
            const g = t.children[_];
            nt.add(g), g.tabIndex = ie ? -1 : n.zoneItemTabIndex, A || g.setAttribute("role", "listitem"), g.removeEventListener("keydown", qt.get(g)), g.removeEventListener("click", Xt.get(g)), u || (g.addEventListener("keydown", s), qt.set(g, s), g.addEventListener("click", l), Xt.set(g, l)), ie && n.items[_][j] === de && (ye = g, ye.tabIndex = n.zoneItemTabIndex, g.focus())
        }
    }
    a(e);
    const f = {
        update: d => {
            a(d)
        },
        destroy: () => {
            Kt(t, n.type), q.delete(t), Ot.delete(t)
        }
    };
    return Ot.set(t, f), f
}

function Qr(t, e) {
    if (es(t)) return {
        update: () => {},
        destroy: () => {}
    };
    Jt(e);
    const n = Hr(t, e),
        r = Jr(t, e);
    return {
        update: s => {
            Jt(s), n.update(s), r.update(s)
        },
        destroy: () => {
            n.destroy(), r.destroy()
        }
    }
}

function es(t) {
    return !!t.closest(`[${or}="true"]`)
}

function Jt(t) {
    const {
        items: e,
        flipDurationMs: n,
        type: r,
        dragDisabled: s,
        morphDisabled: o,
        dropFromOthersDisabled: l,
        zoneTabIndex: i,
        zoneItemTabIndex: a,
        dropTargetStyle: f,
        dropTargetClasses: d,
        transformDraggedElement: c,
        autoAriaDisabled: u,
        centreDraggedOnCursor: h,
        dropAnimationDisabled: m,
        ...y
    } = t;
    if (Object.keys(y).length > 0 && console.warn("dndzone will ignore unknown options", y), !e) throw new Error("no 'items' key provided to dndzone");
    const w = e.find(x => !{}.hasOwnProperty.call(x, j));
    if (w) throw new Error(`missing '${j}' property for item ${je(w)}`);
    if (d && !Array.isArray(d)) throw new Error(`dropTargetClasses should be an array but instead it is a ${typeof d}, ${je(d)}`);
    if (i && !Qt(i)) throw new Error(`zoneTabIndex should be a number but instead it is a ${typeof i}, ${je(i)}`);
    if (a && !Qt(a)) throw new Error(`zoneItemTabIndex should be a number but instead it is a ${typeof a}, ${je(a)}`)
}

function Qt(t) {
    return !isNaN(t) && function(e) {
        return (e | 0) === e
    }(parseFloat(t))
}

function en(t, e, n) {
    const r = t.slice();
    return r[26] = e[n], r[27] = e, r[28] = n, r
}

function ts(t) {
    let e, n, r, s, o, l, i, a, f, d, c, u, h, m, y;
    const w = [ss, rs],
        x = [];

    function A(g, E) {
        return g[7] ? 1 : 0
    }
    e = A(t), n = x[e] = w[e](t), o = new Ye({
        props: {
            class: "mt-3 shadow-none space-y-5",
            $$slots: {
                default: [fs]
            },
            $$scope: {
                ctx: t
            }
        }
    }), i = new Ye({
        props: {
            class: "mt-3 shadow-none space-y-5",
            $$slots: {
                default: [gs]
            },
            $$scope: {
                ctx: t
            }
        }
    }), f = new Ye({
        props: {
            class: "mt-3 shadow-none space-y-5",
            $$slots: {
                default: [hs]
            },
            $$scope: {
                ctx: t
            }
        }
    }), c = new Ye({
        props: {
            class: "mt-3 shadow-none space-y-4",
            $$slots: {
                default: [Es]
            },
            $$scope: {
                ctx: t
            }
        }
    });
    let _ = !t[7] && nn();
    return {
        c() {
            n.c(), r = R(), s = k("div"), G(o.$$.fragment), l = R(), G(i.$$.fragment), a = R(), G(f.$$.fragment), d = R(), G(c.$$.fragment), h = R(), _ && _.c(), m = Oe(), this.h()
        },
        l(g) {
            n.l(g), r = N(g), s = I(g, "DIV", {
                class: !0
            });
            var E = F(s);
            B(o.$$.fragment, E), l = N(E), B(i.$$.fragment, E), a = N(E), B(f.$$.fragment, E), d = N(E), B(c.$$.fragment, E), E.forEach(b), h = N(g), _ && _.l(g), m = Oe(), this.h()
        },
        h() {
            D(s, "class", u = `relative ${t[7]?"":"pointer-events-none opacity-60 blur-[1px]"}`)
        },
        m(g, E) {
            x[e].m(g, E), O(g, r, E), O(g, s, E), V(o, s, null), T(s, l), V(i, s, null), T(s, a), V(f, s, null), T(s, d), V(c, s, null), O(g, h, E), _ && _.m(g, E), O(g, m, E), y = !0
        },
        p(g, E) {
            let L = e;
            e = A(g), e !== L && (At(), M(x[L], 1, 1, () => {
                x[L] = null
            }), Ct(), n = x[e], n || (n = x[e] = w[e](g), n.c()), P(n, 1), n.m(r.parentNode, r));
            const S = {};
            E & 536870915 && (S.$$scope = {
                dirty: E,
                ctx: g
            }), o.$set(S);
            const C = {};
            E & 536870916 && (C.$$scope = {
                dirty: E,
                ctx: g
            }), i.$set(C);
            const v = {};
            E & 536870920 && (v.$$scope = {
                dirty: E,
                ctx: g
            }), f.$set(v);
            const $ = {};
            E & 536870960 && ($.$$scope = {
                dirty: E,
                ctx: g
            }), c.$set($), (!y || E & 128 && u !== (u = `relative ${g[7]?"":"pointer-events-none opacity-60 blur-[1px]"}`)) && D(s, "class", u), g[7] ? _ && (_.d(1), _ = null) : _ || (_ = nn(), _.c(), _.m(m.parentNode, m))
        },
        i(g) {
            y || (P(n), P(o.$$.fragment, g), P(i.$$.fragment, g), P(f.$$.fragment, g), P(c.$$.fragment, g), y = !0)
        },
        o(g) {
            M(n), M(o.$$.fragment, g), M(i.$$.fragment, g), M(f.$$.fragment, g), M(c.$$.fragment, g), y = !1
        },
        d(g) {
            g && (b(r), b(s), b(h), b(m)), x[e].d(g), U(o), U(i), U(f), U(c), _ && _.d(g)
        }
    }
}

function ns(t) {
    let e, n, r, s, o, l, i, a, f, d;
    return e = new Re({
        props: {
            size: "sm",
            class: "my-8"
        }
    }), r = new Re({
        props: {
            size: "md",
            class: "my-8"
        }
    }), o = new Re({
        props: {
            size: "lg",
            class: "my-8"
        }
    }), i = new Re({
        props: {
            size: "xl",
            class: "my-8"
        }
    }), f = new Re({
        props: {
            size: "2xl",
            class: "mt-8 mb-2.5"
        }
    }), {
        c() {
            G(e.$$.fragment), n = R(), G(r.$$.fragment), s = R(), G(o.$$.fragment), l = R(), G(i.$$.fragment), a = R(), G(f.$$.fragment)
        },
        l(c) {
            B(e.$$.fragment, c), n = N(c), B(r.$$.fragment, c), s = N(c), B(o.$$.fragment, c), l = N(c), B(i.$$.fragment, c), a = N(c), B(f.$$.fragment, c)
        },
        m(c, u) {
            V(e, c, u), O(c, n, u), V(r, c, u), O(c, s, u), V(o, c, u), O(c, l, u), V(i, c, u), O(c, a, u), V(f, c, u), d = !0
        },
        p: Pe,
        i(c) {
            d || (P(e.$$.fragment, c), P(r.$$.fragment, c), P(o.$$.fragment, c), P(i.$$.fragment, c), P(f.$$.fragment, c), d = !0)
        },
        o(c) {
            M(e.$$.fragment, c), M(r.$$.fragment, c), M(o.$$.fragment, c), M(i.$$.fragment, c), M(f.$$.fragment, c), d = !1
        },
        d(c) {
            c && (b(n), b(s), b(l), b(a)), U(e, c), U(r, c), U(o, c), U(i, c), U(f, c)
        }
    }
}

function rs(t) {
    let e, n;
    return e = new an({
        props: {
            "aria-label": "App breadcrumb",
            solid: !0,
            id: "breadCrumb",
            class: "m-1",
            $$slots: {
                default: [ls]
            },
            $$scope: {
                ctx: t
            }
        }
    }), {
        c() {
            G(e.$$.fragment)
        },
        l(r) {
            B(e.$$.fragment, r)
        },
        m(r, s) {
            V(e, r, s), n = !0
        },
        i(r) {
            n || (P(e.$$.fragment, r), n = !0)
        },
        o(r) {
            M(e.$$.fragment, r), n = !1
        },
        d(r) {
            U(e, r)
        }
    }
}

function ss(t) {
    let e, n, r, s, o, l, i = 'Débloquez <span class="font-bold">toute la puissance</span> de Superpower Google à vie !',
        a, f, d;
    return e = new an({
        props: {
            "aria-label": "App breadcrumb",
            solid: !0,
            id: "breadCrumb",
            $$slots: {
                default: [us]
            },
            $$scope: {
                ctx: t
            }
        }
    }), f = new yt({
        props: {
            href: "/premium",
            size: "sm",
            class: "mt-3",
            color: "alternative",
            pill: !0,
            $$slots: {
                default: [ds]
            },
            $$scope: {
                ctx: t
            }
        }
    }), {
        c() {
            G(e.$$.fragment), n = R(), r = k("div"), s = k("div"), o = k("div"), l = k("p"), l.innerHTML = i, a = R(), G(f.$$.fragment), this.h()
        },
        l(c) {
            B(e.$$.fragment, c), n = N(c), r = I(c, "DIV", {
                class: !0
            });
            var u = F(r);
            s = I(u, "DIV", {
                class: !0
            });
            var h = F(s);
            o = I(h, "DIV", {
                class: !0
            });
            var m = F(o);
            l = I(m, "P", {
                class: !0,
                "data-svelte-h": !0
            }), Q(l) !== "svelte-pnqzpu" && (l.innerHTML = i), a = N(m), B(f.$$.fragment, m), m.forEach(b), h.forEach(b), u.forEach(b), this.h()
        },
        h() {
            D(l, "class", "font-medium text-gray-900 text-lg"), D(o, "class", "p-4 bg-yellow-100 rounded-lg text-center"), D(s, "class", "p-[0.15rem] rounded-xl bg-white"), D(r, "class", "p-[0.15rem] rounded-xl bg-yellow-200 mt-2")
        },
        m(c, u) {
            V(e, c, u), O(c, n, u), O(c, r, u), T(r, s), T(s, o), T(o, l), T(o, a), V(f, o, null), d = !0
        },
        i(c) {
            d || (P(e.$$.fragment, c), P(f.$$.fragment, c), d = !0)
        },
        o(c) {
            M(e.$$.fragment, c), M(f.$$.fragment, c), d = !1
        },
        d(c) {
            c && (b(n), b(r)), U(e, c), U(f)
        }
    }
}

function os(t) {
    let e;
    return {
        c() {
            e = xe("Superpower Google Premium (cracked (cracked)")
        },
        l(n) {
            e = Se(n, "Superpower Google Premium (cracked (cracked)")
        },
        m(n, r) {
            O(n, e, r)
        },
        d(n) {
            n && b(e)
        }
    }
}

function is(t) {
    let e, n;
    return {
        c() {
            e = k("img"), this.h()
        },
        l(r) {
            e = I(r, "IMG", {
                src: !0,
                class: !0,
                alt: !0
            }), this.h()
        },
        h() {
            ln(e.src, n = "/img/logo-premium-xs.png") || D(e, "src", n), D(e, "class", "h-4 mr-2"), D(e, "alt", "Logo")
        },
        m(r, s) {
            O(r, e, s)
        },
        p: Pe,
        d(r) {
            r && b(e)
        }
    }
}

function ls(t) {
    let e, n;
    return e = new cn({
        props: {
            href: "/",
            home: !0,
            $$slots: {
                icon: [is],
                default: [os]
            },
            $$scope: {
                ctx: t
            }
        }
    }), {
        c() {
            G(e.$$.fragment)
        },
        l(r) {
            B(e.$$.fragment, r)
        },
        m(r, s) {
            V(e, r, s), n = !0
        },
        p(r, s) {
            const o = {};
            s & 536870912 && (o.$$scope = {
                dirty: s,
                ctx: r
            }), e.$set(o)
        },
        i(r) {
            n || (P(e.$$.fragment, r), n = !0)
        },
        o(r) {
            M(e.$$.fragment, r), n = !1
        },
        d(r) {
            U(e, r)
        }
    }
}

function as(t) {
    let e;
    return {
        c() {
            e = xe("Superpower Google")
        },
        l(n) {
            e = Se(n, "Superpower Google")
        },
        m(n, r) {
            O(n, e, r)
        },
        d(n) {
            n && b(e)
        }
    }
}

function cs(t) {
    let e, n;
    return {
        c() {
            e = k("img"), this.h()
        },
        l(r) {
            e = I(r, "IMG", {
                src: !0,
                class: !0,
                alt: !0
            }), this.h()
        },
        h() {
            ln(e.src, n = "/img/logo-xs.png") || D(e, "src", n), D(e, "class", "h-4 mr-2"), D(e, "alt", "Logo")
        },
        m(r, s) {
            O(r, e, s)
        },
        p: Pe,
        d(r) {
            r && b(e)
        }
    }
}

function us(t) {
    let e, n;
    return e = new cn({
        props: {
            href: "/",
            home: !0,
            $$slots: {
                icon: [cs],
                default: [as]
            },
            $$scope: {
                ctx: t
            }
        }
    }), {
        c() {
            G(e.$$.fragment)
        },
        l(r) {
            B(e.$$.fragment, r)
        },
        m(r, s) {
            V(e, r, s), n = !0
        },
        p(r, s) {
            const o = {};
            s & 536870912 && (o.$$scope = {
                dirty: s,
                ctx: r
            }), e.$set(o)
        },
        i(r) {
            n || (P(e.$$.fragment, r), n = !0)
        },
        o(r) {
            M(e.$$.fragment, r), n = !1
        },
        d(r) {
            U(e, r)
        }
    }
}

function ds(t) {
    let e;
    return {
        c() {
            e = xe("Découvrir Premium (FREE :D) ⭐")
        },
        l(n) {
            e = xe("Découvrir Premium (FREE :D) ⭐")
        },
        m(n, r) {
            O(n, e, r)
        },
        d(n) {
            n && b(e)
        }
    }
}

function fs(t) {
    let e, n, r = `Bouton "J'ai de la chance"`,
        s, o, l, i, a, f = "Bouton ChatGPT",
        d, c, u;
    return o = new Me({
        props: {
            checked: t[0]
        }
    }), o.$on("change", t[14]), c = new Me({
        props: {
            checked: t[1]
        }
    }), c.$on("change", t[15]), {
        c() {
            e = k("div"), n = k("h2"), n.textContent = r, s = R(), G(o.$$.fragment), l = R(), i = k("div"), a = k("h2"), a.textContent = f, d = R(), G(c.$$.fragment), this.h()
        },
        l(h) {
            e = I(h, "DIV", {
                class: !0
            });
            var m = F(e);
            n = I(m, "H2", {
                class: !0,
                "data-svelte-h": !0
            }), Q(n) !== "svelte-1e9i50a" && (n.textContent = r), s = N(m), B(o.$$.fragment, m), m.forEach(b), l = N(h), i = I(h, "DIV", {
                class: !0
            });
            var y = F(i);
            a = I(y, "H2", {
                class: !0,
                "data-svelte-h": !0
            }), Q(a) !== "svelte-14c3esy" && (a.textContent = f), d = N(y), B(c.$$.fragment, y), y.forEach(b), this.h()
        },
        h() {
            D(n, "class", "text-sm font-semibold"), D(e, "class", "flex justify-between items-center"), D(a, "class", "text-sm font-semibold"), D(i, "class", "flex justify-between items-center")
        },
        m(h, m) {
            O(h, e, m), T(e, n), T(e, s), V(o, e, null), O(h, l, m), O(h, i, m), T(i, a), T(i, d), V(c, i, null), u = !0
        },
        p(h, m) {
            const y = {};
            m & 1 && (y.checked = h[0]), o.$set(y);
            const w = {};
            m & 2 && (w.checked = h[1]), c.$set(w)
        },
        i(h) {
            u || (P(o.$$.fragment, h), P(c.$$.fragment, h), u = !0)
        },
        o(h) {
            M(o.$$.fragment, h), M(c.$$.fragment, h), u = !1
        },
        d(h) {
            h && (b(e), b(l), b(i)), U(o), U(c)
        }
    }
}

function gs(t) {
    let e, n, r = "Opérateurs de recherche",
        s, o, l;
    return o = new Me({
        props: {
            checked: t[2]
        }
    }), o.$on("change", t[16]), {
        c() {
            e = k("div"), n = k("h2"), n.textContent = r, s = R(), G(o.$$.fragment), this.h()
        },
        l(i) {
            e = I(i, "DIV", {
                class: !0
            });
            var a = F(e);
            n = I(a, "H2", {
                class: !0,
                "data-svelte-h": !0
            }), Q(n) !== "svelte-10co8gw" && (n.textContent = r), s = N(a), B(o.$$.fragment, a), a.forEach(b), this.h()
        },
        h() {
            D(n, "class", "text-sm font-semibold"), D(e, "class", "flex justify-between items-center")
        },
        m(i, a) {
            O(i, e, a), T(e, n), T(e, s), V(o, e, null), l = !0
        },
        p(i, a) {
            const f = {};
            a & 4 && (f.checked = i[2]), o.$set(f)
        },
        i(i) {
            l || (P(o.$$.fragment, i), l = !0)
        },
        o(i) {
            M(o.$$.fragment, i), l = !1
        },
        d(i) {
            i && b(e), U(o)
        }
    }
}

function hs(t) {
    let e, n, r = "Bloquer résultats sponsos",
        s, o, l;
    return o = new Me({
        props: {
            checked: t[3]
        }
    }), o.$on("change", t[17]), {
        c() {
            e = k("div"), n = k("h2"), n.textContent = r, s = R(), G(o.$$.fragment), this.h()
        },
        l(i) {
            e = I(i, "DIV", {
                class: !0
            });
            var a = F(e);
            n = I(a, "H2", {
                class: !0,
                "data-svelte-h": !0
            }), Q(n) !== "svelte-16t0o50" && (n.textContent = r), s = N(a), B(o.$$.fragment, a), a.forEach(b), this.h()
        },
        h() {
            D(n, "class", "text-sm font-semibold"), D(e, "class", "flex justify-between items-center")
        },
        m(i, a) {
            O(i, e, a), T(e, n), T(e, s), V(o, e, null), l = !0
        },
        p(i, a) {
            const f = {};
            a & 8 && (f.checked = i[3]), o.$set(f)
        },
        i(i) {
            l || (P(o.$$.fragment, i), l = !0)
        },
        o(i) {
            M(o.$$.fragment, i), l = !1
        },
        d(i) {
            i && b(e), U(o)
        }
    }
}

function ms(t) {
    let e, n, r = "☰",
        s, o, l = t[26].title + "",
        i, a, f, d, c = "✖",
        u, h, m = "✏️",
        y, w;

    function x() {
        return t[23](t[26])
    }

    function A() {
        return t[24](t[26])
    }
    return {
        c() {
            e = k("div"), n = k("div"), n.textContent = r, s = R(), o = k("div"), i = xe(l), a = R(), f = k("div"), d = k("button"), d.textContent = c, u = R(), h = k("button"), h.textContent = m, this.h()
        },
        l(_) {
            e = I(_, "DIV", {
                class: !0
            });
            var g = F(e);
            n = I(g, "DIV", {
                class: !0,
                "data-svelte-h": !0
            }), Q(n) !== "svelte-154l3ee" && (n.textContent = r), s = N(g), o = I(g, "DIV", {
                class: !0
            });
            var E = F(o);
            i = Se(E, l), E.forEach(b), a = N(g), f = I(g, "DIV", {
                class: !0
            });
            var L = F(f);
            d = I(L, "BUTTON", {
                class: !0,
                "data-svelte-h": !0
            }), Q(d) !== "svelte-unzwfy" && (d.textContent = c), u = N(L), h = I(L, "BUTTON", {
                class: !0,
                "data-svelte-h": !0
            }), Q(h) !== "svelte-1ln1rud" && (h.textContent = m), L.forEach(b), g.forEach(b), this.h()
        },
        h() {
            D(n, "class", "cursor-move px-2"), D(o, "class", "text-sm font-semibold truncate flex-1"), D(d, "class", "text-sm"), D(h, "class", "text-sm"), D(f, "class", "flex items-center gap-1 ml-auto"), D(e, "class", "flex items-center gap-2")
        },
        m(_, g) {
            O(_, e, g), T(e, n), T(e, s), T(e, o), T(o, i), T(e, a), T(e, f), T(f, d), T(f, u), T(f, h), y || (w = [Z(d, "click", x), Z(h, "click", A)], y = !0)
        },
        p(_, g) {
            t = _, g & 32 && l !== (l = t[26].title + "") && Sn(i, l)
        },
        d(_) {
            _ && b(e), y = !1, Ge(w)
        }
    }
}

function ps(t) {
    let e, n, r = "☰",
        s, o, l, i, a = `L&#39;url doit impérativement se terminer par le &quot;paramètre d&#39;url de recherche du site cible&quot;.
              Prenez exemple sur l&#39;url enregistrée dans les autres catégories ou demandez de l&#39;aide
              <a href="https://aywen.fr/discord" class="underline" target="_blank">sur ce Discord</a>.`,
        f, d, c, u, h, m = "✖",
        y, w, x = "✅️",
        A, _;

    function g() {
        t[19].call(o, t[27], t[28])
    }

    function E() {
        t[20].call(d, t[27], t[28])
    }

    function L() {
        return t[21](t[26])
    }

    function S() {
        return t[22](t[26])
    }
    return {
        c() {
            e = k("div"), n = k("div"), n.textContent = r, s = R(), o = k("input"), l = R(), i = k("span"), i.innerHTML = a, f = R(), d = k("input"), c = R(), u = k("div"), h = k("button"), h.textContent = m, y = R(), w = k("button"), w.textContent = x, this.h()
        },
        l(C) {
            e = I(C, "DIV", {
                class: !0
            });
            var v = F(e);
            n = I(v, "DIV", {
                class: !0,
                "data-svelte-h": !0
            }), Q(n) !== "svelte-v7e7jx" && (n.textContent = r), s = N(v), o = I(v, "INPUT", {
                class: !0,
                placeholder: !0
            }), v.forEach(b), l = N(C), i = I(C, "SPAN", {
                class: !0,
                "data-svelte-h": !0
            }), Q(i) !== "svelte-uvqnp6" && (i.innerHTML = a), f = N(C), d = I(C, "INPUT", {
                class: !0,
                placeholder: !0
            }), c = N(C), u = I(C, "DIV", {
                class: !0
            });
            var $ = F(u);
            h = I($, "BUTTON", {
                class: !0,
                "data-svelte-h": !0
            }), Q(h) !== "svelte-unzwfy" && (h.textContent = m), y = N($), w = I($, "BUTTON", {
                class: !0,
                "data-svelte-h": !0
            }), Q(w) !== "svelte-14nxeof" && (w.textContent = x), $.forEach(b), this.h()
        },
        h() {
            D(n, "class", "cursor-move text-xl"), D(o, "class", "border rounded px-3 py-1 w-full text-sm"), D(o, "placeholder", "Titre"), D(e, "class", "flex items-center gap-2 mb-2"), D(i, "class", "text-xs bg-red-100 rounded-lg block p-2 m-1 mt-2 text-center"), D(d, "class", "border rounded px-3 py-1 w-full text-sm mb-2"), D(d, "placeholder", "URL"), D(h, "class", "text-sm"), D(w, "class", "text-sm"), D(u, "class", "flex justify-center gap-3")
        },
        m(C, v) {
            O(C, e, v), T(e, n), T(e, s), T(e, o), We(o, t[26].title), O(C, l, v), O(C, i, v), O(C, f, v), O(C, d, v), We(d, t[26].url), O(C, c, v), O(C, u, v), T(u, h), T(u, y), T(u, w), A || (_ = [Z(o, "input", g), Z(d, "input", E), Z(h, "click", L), Z(w, "click", S)], A = !0)
        },
        p(C, v) {
            t = C, v & 32 && o.value !== t[26].title && We(o, t[26].title), v & 32 && d.value !== t[26].url && We(d, t[26].url)
        },
        d(C) {
            C && (b(e), b(l), b(i), b(f), b(d), b(c), b(u)), A = !1, Ge(_)
        }
    }
}

function tn(t, e) {
    let n, r;

    function s(i, a) {
        return i[26].editable ? ps : ms
    }
    let o = s(e),
        l = o(e);
    return {
        key: t,
        first: null,
        c() {
            n = k("div"), l.c(), r = R(), this.h()
        },
        l(i) {
            n = I(i, "DIV", {
                class: !0
            });
            var a = F(n);
            l.l(a), r = N(a), a.forEach(b), this.h()
        },
        h() {
            D(n, "class", "p-3 bg-white rounded-xl shadow border"), this.first = n
        },
        m(i, a) {
            O(i, n, a), l.m(n, null), T(n, r)
        },
        p(i, a) {
            e = i, o === (o = s(e)) && l ? l.p(e, a) : (l.d(1), l = o(e), l && (l.c(), l.m(n, r)))
        },
        d(i) {
            i && b(n), l.d()
        }
    }
}

function _s(t) {
    let e;
    return {
        c() {
            e = xe("Créer une catégorie")
        },
        l(n) {
            e = Se(n, "Créer une catégorie")
        },
        m(n, r) {
            O(n, e, r)
        },
        d(n) {
            n && b(e)
        }
    }
}

function bs(t) {
    let e;
    return {
        c() {
            e = xe("Réinitialiser les catégories")
        },
        l(n) {
            e = Se(n, "Réinitialiser les catégories")
        },
        m(n, r) {
            O(n, e, r)
        },
        d(n) {
            n && b(e)
        }
    }
}

function Es(t) {
    let e, n, r = "Nouvelles catégories",
        s, o, l, i, a = [],
        f = new Map,
        d, c, u, h, m, y, w, x;
    o = new Me({
        props: {
            checked: t[4]
        }
    }), o.$on("change", t[18]);
    let A = zt(t[5]);
    const _ = g => g[26].id;
    for (let g = 0; g < A.length; g += 1) {
        let E = en(t, A, g),
            L = _(E);
        f.set(L, a[g] = tn(L, E))
    }
    return u = new yt({
        props: {
            class: "mt-6 text-white px-4 py-2 font-semibold text-sm",
            $$slots: {
                default: [_s]
            },
            $$scope: {
                ctx: t
            }
        }
    }), u.$on("click", t[8]), m = new yt({
        props: {
            class: "mt-6 px-4 py-2 text-sm",
            color: "alternative",
            $$slots: {
                default: [bs]
            },
            $$scope: {
                ctx: t
            }
        }
    }), m.$on("click", t[9]), {
        c() {
            e = k("div"), n = k("h2"), n.textContent = r, s = R(), G(o.$$.fragment), l = R(), i = k("div");
            for (let g = 0; g < a.length; g += 1) a[g].c();
            c = R(), G(u.$$.fragment), h = R(), G(m.$$.fragment), this.h()
        },
        l(g) {
            e = I(g, "DIV", {
                class: !0
            });
            var E = F(e);
            n = I(E, "H2", {
                class: !0,
                "data-svelte-h": !0
            }), Q(n) !== "svelte-cllmhb" && (n.textContent = r), s = N(E), B(o.$$.fragment, E), E.forEach(b), l = N(g), i = I(g, "DIV", {
                class: !0
            });
            var L = F(i);
            for (let S = 0; S < a.length; S += 1) a[S].l(L);
            L.forEach(b), c = N(g), B(u.$$.fragment, g), h = N(g), B(m.$$.fragment, g), this.h()
        },
        h() {
            D(n, "class", "text-sm font-semibold"), D(e, "class", "flex justify-between items-center"), D(i, "class", "space-y-2")
        },
        m(g, E) {
            O(g, e, E), T(e, n), T(e, s), V(o, e, null), O(g, l, E), O(g, i, E);
            for (let L = 0; L < a.length; L += 1) a[L] && a[L].m(i, null);
            O(g, c, E), V(u, g, E), O(g, h, E), V(m, g, E), y = !0, w || (x = [sn(d = Qr.call(null, i, {
                items: t[5],
                flipDurationMs: 200
            })), Z(i, "consider", t[12]), Z(i, "finalize", t[12])], w = !0)
        },
        p(g, E) {
            const L = {};
            E & 16 && (L.checked = g[4]), o.$set(L), E & 3104 && (A = zt(g[5]), a = Ln(a, E, _, 1, g, A, f, i, Nn, tn, null, en)), d && on(d.update) && E & 32 && d.update.call(null, {
                items: g[5],
                flipDurationMs: 200
            });
            const S = {};
            E & 536870912 && (S.$$scope = {
                dirty: E,
                ctx: g
            }), u.$set(S);
            const C = {};
            E & 536870912 && (C.$$scope = {
                dirty: E,
                ctx: g
            }), m.$set(C)
        },
        i(g) {
            y || (P(o.$$.fragment, g), P(u.$$.fragment, g), P(m.$$.fragment, g), y = !0)
        },
        o(g) {
            M(o.$$.fragment, g), M(u.$$.fragment, g), M(m.$$.fragment, g), y = !1
        },
        d(g) {
            g && (b(e), b(l), b(i), b(c), b(h)), U(o);
            for (let E = 0; E < a.length; E += 1) a[E].d();
            U(u, g), U(m, g), w = !1, Ge(x)
        }
    }
}

function nn(t) {
    let e, n = "🔒 <b>Click on the payement button and just close the extension popup. <br> Cracked by EletrixTime";
    return {
        c() {
            e = k("p"), e.innerHTML = n, this.h()
        },
        l(r) {
            e = I(r, "P", {
                class: !0,
                "data-svelte-h": !0
            }), Q(e) !== "svelte-66at0r" && (e.innerHTML = n), this.h()
        },
        h() {
            D(e, "class", "text-sm text-center text-gray-600 mt-2 italic")
        },
        m(r, s) {
            O(r, e, s)
        },
        d(r) {
            r && b(e)
        }
    }
}

function ys(t) {
    let e, n, r, s;
    const o = [ns, ts],
        l = [];

    function i(a, f) {
        return a[6] ? 0 : 1
    }
    return e = i(t), n = l[e] = o[e](t), {
        c() {
            n.c(), r = Oe()
        },
        l(a) {
            n.l(a), r = Oe()
        },
        m(a, f) {
            l[e].m(a, f), O(a, r, f), s = !0
        },
        p(a, [f]) {
            let d = e;
            e = i(a), e === d ? l[e].p(a, f) : (At(), M(l[d], 1, 1, () => {
                l[d] = null
            }), Ct(), n = l[e], n ? n.p(a, f) : (n = l[e] = o[e](a), n.c()), P(n, 1), n.m(r.parentNode, r))
        },
        i(a) {
            s || (P(n), s = !0)
        },
        o(a) {
            M(n), s = !1
        },
        d(a) {
            a && b(r), l[e].d(a)
        }
    }
}

function ve(t, e) {
    var n;
    (n = window.chrome) != null && n.storage && chrome.storage.local.set({
        [t]: e
    })
}

function Ds(t, e, n) {
    let r = !0,
        s = !1,
        o = !1,
        l = !0,
        i = !0,
        a = !0,
        f = !0,
        d = !0,
        c = [],
        u = 1;
    xn(async () => {
        var H;
        n(13, s = !0), (H = window.chrome) != null && H.storage && chrome.storage.local.get(["buttonLucky", "buttonChatGPT", "searchOperators", "blockSponsored", "newCategoriesEnabled", "categories"], p => {
            typeof p.buttonLucky == "boolean" && n(0, l = p.buttonLucky), typeof p.buttonChatGPT == "boolean" && n(1, i = p.buttonChatGPT), typeof p.searchOperators == "boolean" && n(2, a = p.searchOperators), typeof p.blockSponsored == "boolean" && n(3, f = p.blockSponsored), typeof p.newCategoriesEnabled == "boolean" && n(4, d = p.newCategoriesEnabled), Array.isArray(p.categories) && p.categories.length > 0 ? (n(5, c = p.categories.map((oe, be) => ({
                ...oe,
                id: oe.id ?? be + 1
            }))), u = Math.max(...c.map(oe => oe.id)) + 1) : (n(5, c = [{
                id: 1,
                title: "Maps",
                url: "https://maps.google.com/maps?q=",
                editable: !1
            }, {
                id: 2,
                title: "Orthographe",
                url: "https://www.reverso.net/orthographe/correcteur-francais/#text=",
                editable: !1
            }, {
                id: 3,
                title: "Wikipédia",
                url: "https://fr.wikipedia.org/w/index.php?search=",
                editable: !1
            }, {
                id: 4,
                title: "Tendances",
                url: "https://trends.google.fr/trends/explore?q=",
                editable: !1
            }]), u = 3, chrome.storage.local.set({
                categories: c
            }))
        }), chrome.storage.local.get("superpower_activation_code", async p => {
            const oe = p.superpower_activation_code;
            if (!oe) {
                n(6, r = !1);
                return
            }
            try {
                    n(7, o = true);
                    n(6, r = false);
                    return;
            } catch {}
        })
    });

    function h() {
        n(5, c = [...c, {
            id: u++,
            title: "",
            url: "",
            editable: !0
        }])
    }

    function m() {
        n(5, c = [{
            id: 1,
            title: "Maps",
            url: "https://maps.google.com/maps?q=",
            editable: !1
        }, {
            id: 2,
            title: "Orthographe",
            url: "https://www.reverso.net/orthographe/correcteur-francais/#text=",
            editable: !1
        }, {
            id: 3,
            title: "Wikipédia",
            url: "https://fr.wikipedia.org/w/index.php?search=",
            editable: !1
        }, {
            id: 4,
            title: "Tendances",
            url: "https://trends.google.fr/trends/explore?q=",
            editable: !1
        }]), u = 3, chrome.storage.local.set({
            categories: c
        })
    }

    function y(H) {
        n(5, c = c.filter(p => p.id !== H))
    }

    function w(H) {
        n(5, c = c.map(p => p.id === H ? {
            ...p,
            editable: !p.editable
        } : p))
    }

    function x(H) {
        n(5, c = H.detail.items.map((p, oe) => ({
            ...p,
            id: p.id ?? oe + 1
        })))
    }
    const A = () => n(0, l = !l),
        _ = () => n(1, i = !i),
        g = () => n(2, a = !a),
        E = () => n(3, f = !f),
        L = () => n(4, d = !d);

    function S(H, p) {
        H[p].title = this.value, n(5, c)
    }

    function C(H, p) {
        H[p].url = this.value, n(5, c)
    }
    const v = H => y(H.id),
        $ = H => w(H.id),
        pt = H => y(H.id),
        _t = H => w(H.id);
    return t.$$.update = () => {
        t.$$.dirty & 8193 && s && ve("buttonLucky", l), t.$$.dirty & 8194 && s && ve("buttonChatGPT", i), t.$$.dirty & 8196 && s && ve("searchOperators", a), t.$$.dirty & 8200 && s && ve("blockSponsored", f), t.$$.dirty & 8208 && s && ve("newCategoriesEnabled", d), t.$$.dirty & 8224 && s && ve("categories", c)
    }, [l, i, a, f, d, c, r, o, h, m, y, w, x, s, A, _, g, E, L, S, C, v, $, pt, _t]
}
class ks extends Ve {
    constructor(e) {
        super(), Ue(this, e, Ds, ys, Be, {})
    }
}
export {
    ks as component
};