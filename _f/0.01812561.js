// Patched by https://github.com/eletrixtime/superpower-google-premium
import {
    c as y,
    s as L,
    d as S,
    u as D,
    g as I,
    e as V,
    f as z,
    n as A
} from "../chunks/scheduler.2ba2f30c.js";
import {
    S as E,
    i as M,
    g as d,
    s as v,
    h as m,
    c as w,
    x as U,
    k as p,
    a as _,
    t as h,
    b as G,
    d as g,
    f,
    j as H,
    y as N,
    z as X,
    p as Y
} from "../chunks/index.508f57b0.js";

function q({
    url: l
}) {
    return {
        url: l.pathname
    }
}
const F = !0,
    Q = Object.freeze(Object.defineProperty({
        __proto__: null,
        load: q,
        prerender: F
    }, Symbol.toStringTag, {
        value: "Module"
    }));

function K(l) {
    const t = l - 1;
    return t * t * t + 1
}

function k(l, {
    delay: t = 0,
    duration: o = 400,
    easing: c = K,
    x: n = 0,
    y: i = 0,
    opacity: s = 0
} = {}) {
    const e = getComputedStyle(l),
        a = +e.opacity,
        r = e.transform === "none" ? "" : e.transform,
        u = a * (1 - s),
        [T, C] = y(n),
        [$, j] = y(i);
    return {
        delay: t,
        duration: o,
        easing: c,
        css: (b, O) => `
			transform: ${r} translate(${(1-b)*T}${C}, ${(1-b)*$}${j});
			opacity: ${a-u*O}`
    }
}

function x(l) {
    let t, o, c, n;
    const i = l[2].default,
        s = S(i, l, l[1], null);
    return {
        c() {
            t = d("div"), s && s.c(), this.h()
        },
        l(e) {
            t = m(e, "DIV", {
                class: !0
            });
            var a = H(t);
            s && s.l(a), a.forEach(f), this.h()
        },
        h() {
            p(t, "class", "p-1 pt-0 overflow-auto")
        },
        m(e, a) {
            _(e, t, a), s && s.m(t, null), n = !0
        },
        p(e, a) {
            s && s.p && (!n || a & 2) && D(s, i, e, e[1], n ? V(i, e[1], a, null) : I(e[1]), null)
        },
        i(e) {
            n || (g(s, e), e && z(() => {
                n && (c && c.end(1), o = N(t, k, {
                    y: -14,
                    duration: 150,
                    delay: 150
                }), o.start())
            }), n = !0)
        },
        o(e) {
            h(s, e), o && o.invalidate(), e && (c = X(t, k, {
                y: 14,
                duration: 150
            })), n = !1
        },
        d(e) {
            e && f(t), s && s.d(e), e && c && c.end()
        }
    }
}

function P(l) {
    let t, o, c = l[0].url,
        n, i, s = '<div class="flex justify-center gap-4 mb-2"><a hr1ef="https://aywen.fr/discord" target="_blank" aria-label="Discord"><img src="/img/discord.svg" alt="Discord" class="w-5 h-5 filter invert-[70%] brightness-150 hover:brightness-200 transition"/></a> <a href="https://www.youtube.com/@AywenVideos" target="_blank" aria-label="YouTube"><img src="/img/youtube.svg" alt="YouTube" class="w-5 h-5 filter invert-[70%] brightness-150 hover:brightness-200 transition"/></a> <a href="https://www.instagram.com/aywenyt" target="_blank" aria-label="Instagram"><img src="/img/instagram.svg" alt="Instagram" class="w-5 h-5 filter invert-[70%] brightness-150 hover:brightness-200 transition"/></a> <a href="https://x.com/_Aywen" target="_blank" aria-label="Twitter/X"><img src="/img/x.svg" alt="Twitter/X" class="w-5 h-5 filter invert-[70%] brightness-150 hover:brightness-200 transition"/></a></div> <p class="text-xs italic">Une extension développée par <a href="https://aywen.fr" class="underline hover:text-blue-500" target="_blank">Aywen</a></p> <p class="mt-1 text-xs">En cas de problème, <a href="https://aywen.fr/discord" class="underline hover:text-indigo-500" target="_blank">rejoignez le Discord</a></p> <p class="mt-1 text-xs">Cette extension <b>n&#39;est pas</b> affiliée à Google LLC et n&#39;est pas soutenue par Google LLC</p>',
        e, a = x(l);
    return {
        c() {
            t = d("link"), o = v(), a.c(), n = v(), i = d("footer"), i.innerHTML = s, this.h()
        },
        l(r) {
            t = m(r, "LINK", {
                rel: !0,
                href: !0
            }), o = w(r), a.l(r), n = w(r), i = m(r, "FOOTER", {
                class: !0,
                "data-svelte-h": !0
            }), U(i) !== "svelte-3ttmfu" && (i.innerHTML = s), this.h()
        },
        h() {
            p(t, "rel", "stylesheet"), p(t, "href", "/styles.css"), p(i, "class", "mt-4 text-center text-sm text-gray-500 px-5 pb-3")
        },
        m(r, u) {
            _(r, t, u), _(r, o, u), a.m(r, u), _(r, n, u), _(r, i, u), e = !0
        },
        p(r, [u]) {
            u & 1 && L(c, c = r[0].url) ? (Y(), h(a, 1, 1, A), G(), a = x(r), a.c(), g(a, 1), a.m(n.parentNode, n)) : a.p(r, u)
        },
        i(r) {
            e || (g(a), e = !0)
        },
        o(r) {
            h(a), e = !1
        },
        d(r) {
            r && (f(t), f(o), f(n), f(i)), a.d(r)
        }
    }
}

function R(l, t, o) {
    let {
        $$slots: c = {},
        $$scope: n
    } = t, {
        data: i
    } = t;
    return i.url.pathname, l.$$set = s => {
        "data" in s && o(0, i = s.data), "$$scope" in s && o(1, n = s.$$scope)
    }, [i, n, c]
}
class W extends E {
    constructor(t) {
        super(), M(this, t, R, P, L, {
            data: 0
        })
    }
}
export {
    W as component, Q as universal
};