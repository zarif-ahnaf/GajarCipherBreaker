(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
    'object' == typeof document ? document.currentScript : void 0,
    90253,
    (e, t, r) => {
        'use strict';
        (Object.defineProperty(r, '__esModule', { value: !0 }),
            Object.defineProperty(r, 'warnOnce', {
                enumerable: !0,
                get: function () {
                    return a;
                },
            }));
        let a = (e) => {};
    },
    82312,
    (e, t, r) => {
        'use strict';
        (Object.defineProperty(r, '__esModule', { value: !0 }),
            Object.defineProperty(r, 'useMergedRef', {
                enumerable: !0,
                get: function () {
                    return n;
                },
            }));
        let a = e.r(81061);
        function n(e, t) {
            let r = (0, a.useRef)(null),
                n = (0, a.useRef)(null);
            return (0, a.useCallback)(
                (a) => {
                    if (null === a) {
                        let e = r.current;
                        e && ((r.current = null), e());
                        let t = n.current;
                        t && ((n.current = null), t());
                    } else
                        (e && (r.current = i(e, a)),
                            t && (n.current = i(t, a)));
                },
                [e, t],
            );
        }
        function i(e, t) {
            if ('function' != typeof e)
                return (
                    (e.current = t),
                    () => {
                        e.current = null;
                    }
                );
            {
                let r = e(t);
                return 'function' == typeof r ? r : () => e(null);
            }
        }
        ('function' == typeof r.default ||
            ('object' == typeof r.default && null !== r.default)) &&
            void 0 === r.default.__esModule &&
            (Object.defineProperty(r.default, '__esModule', { value: !0 }),
            Object.assign(r.default, r),
            (t.exports = r.default));
    },
    30301,
    (e, t, r) => {
        'use strict';
        Object.defineProperty(r, '__esModule', { value: !0 });
        var a = {
            assign: function () {
                return c;
            },
            searchParamsToUrlQuery: function () {
                return i;
            },
            urlQueryToSearchParams: function () {
                return o;
            },
        };
        for (var n in a)
            Object.defineProperty(r, n, { enumerable: !0, get: a[n] });
        function i(e) {
            let t = {};
            for (let [r, a] of e.entries()) {
                let e = t[r];
                void 0 === e
                    ? (t[r] = a)
                    : Array.isArray(e)
                      ? e.push(a)
                      : (t[r] = [e, a]);
            }
            return t;
        }
        function s(e) {
            return 'string' == typeof e
                ? e
                : ('number' != typeof e || isNaN(e)) && 'boolean' != typeof e
                  ? ''
                  : String(e);
        }
        function o(e) {
            let t = new URLSearchParams();
            for (let [r, a] of Object.entries(e))
                if (Array.isArray(a)) for (let e of a) t.append(r, s(e));
                else t.set(r, s(a));
            return t;
        }
        function c(e, ...t) {
            for (let r of t) {
                for (let t of r.keys()) e.delete(t);
                for (let [t, a] of r.entries()) e.append(t, a);
            }
            return e;
        }
    },
    95626,
    (e, t, r) => {
        'use strict';
        Object.defineProperty(r, '__esModule', { value: !0 });
        var a = {
            formatUrl: function () {
                return o;
            },
            formatWithValidation: function () {
                return l;
            },
            urlObjectKeys: function () {
                return c;
            },
        };
        for (var n in a)
            Object.defineProperty(r, n, { enumerable: !0, get: a[n] });
        let i = e.r(44066)._(e.r(30301)),
            s = /https?|ftp|gopher|file/;
        function o(e) {
            let { auth: t, hostname: r } = e,
                a = e.protocol || '',
                n = e.pathname || '',
                o = e.hash || '',
                c = e.query || '',
                l = !1;
            ((t = t ? encodeURIComponent(t).replace(/%3A/i, ':') + '@' : ''),
                e.host
                    ? (l = t + e.host)
                    : r &&
                      ((l = t + (~r.indexOf(':') ? `[${r}]` : r)),
                      e.port && (l += ':' + e.port)),
                c &&
                    'object' == typeof c &&
                    (c = String(i.urlQueryToSearchParams(c))));
            let d = e.search || (c && `?${c}`) || '';
            return (
                a && !a.endsWith(':') && (a += ':'),
                e.slashes || ((!a || s.test(a)) && !1 !== l)
                    ? ((l = '//' + (l || '')),
                      n && '/' !== n[0] && (n = '/' + n))
                    : l || (l = ''),
                o && '#' !== o[0] && (o = '#' + o),
                d && '?' !== d[0] && (d = '?' + d),
                (n = n.replace(/[?#]/g, encodeURIComponent)),
                (d = d.replace('#', '%23')),
                `${a}${l}${n}${d}${o}`
            );
        }
        let c = [
            'auth',
            'hash',
            'host',
            'hostname',
            'href',
            'path',
            'pathname',
            'port',
            'protocol',
            'query',
            'search',
            'slashes',
        ];
        function l(e) {
            return o(e);
        }
    },
    60067,
    (e, t, r) => {
        'use strict';
        Object.defineProperty(r, '__esModule', { value: !0 });
        var a = {
            DecodeError: function () {
                return g;
            },
            MiddlewareNotFoundError: function () {
                return S;
            },
            MissingStaticPage: function () {
                return v;
            },
            NormalizeError: function () {
                return b;
            },
            PageNotFoundError: function () {
                return w;
            },
            SP: function () {
                return y;
            },
            ST: function () {
                return m;
            },
            WEB_VITALS: function () {
                return i;
            },
            execOnce: function () {
                return s;
            },
            getDisplayName: function () {
                return u;
            },
            getLocationOrigin: function () {
                return l;
            },
            getURL: function () {
                return d;
            },
            isAbsoluteUrl: function () {
                return c;
            },
            isResSent: function () {
                return f;
            },
            loadGetInitialProps: function () {
                return h;
            },
            normalizeRepeatedSlashes: function () {
                return p;
            },
            stringifyError: function () {
                return x;
            },
        };
        for (var n in a)
            Object.defineProperty(r, n, { enumerable: !0, get: a[n] });
        let i = ['CLS', 'FCP', 'FID', 'INP', 'LCP', 'TTFB'];
        function s(e) {
            let t,
                r = !1;
            return (...a) => (r || ((r = !0), (t = e(...a))), t);
        }
        let o = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/,
            c = (e) => o.test(e);
        function l() {
            let { protocol: e, hostname: t, port: r } = window.location;
            return `${e}//${t}${r ? ':' + r : ''}`;
        }
        function d() {
            let { href: e } = window.location,
                t = l();
            return e.substring(t.length);
        }
        function u(e) {
            return 'string' == typeof e
                ? e
                : e.displayName || e.name || 'Unknown';
        }
        function f(e) {
            return e.finished || e.headersSent;
        }
        function p(e) {
            let t = e.split('?');
            return (
                t[0].replace(/\\/g, '/').replace(/\/\/+/g, '/') +
                (t[1] ? `?${t.slice(1).join('?')}` : '')
            );
        }
        async function h(e, t) {
            let r = t.res || (t.ctx && t.ctx.res);
            if (!e.getInitialProps)
                return t.ctx && t.Component
                    ? { pageProps: await h(t.Component, t.ctx) }
                    : {};
            let a = await e.getInitialProps(t);
            if (r && f(r)) return a;
            if (!a)
                throw Object.defineProperty(
                    Error(
                        `"${u(e)}.getInitialProps()" should resolve to an object. But found "${a}" instead.`,
                    ),
                    '__NEXT_ERROR_CODE',
                    { value: 'E394', enumerable: !1, configurable: !0 },
                );
            return a;
        }
        let y = 'undefined' != typeof performance,
            m =
                y &&
                ['mark', 'measure', 'getEntriesByName'].every(
                    (e) => 'function' == typeof performance[e],
                );
        class g extends Error {}
        class b extends Error {}
        class w extends Error {
            constructor(e) {
                (super(),
                    (this.code = 'ENOENT'),
                    (this.name = 'PageNotFoundError'),
                    (this.message = `Cannot find module for page: ${e}`));
            }
        }
        class v extends Error {
            constructor(e, t) {
                (super(),
                    (this.message = `Failed to load static file for page: ${e} ${t}`));
            }
        }
        class S extends Error {
            constructor() {
                (super(),
                    (this.code = 'ENOENT'),
                    (this.message = 'Cannot find the middleware module'));
            }
        }
        function x(e) {
            return JSON.stringify({ message: e.message, stack: e.stack });
        }
    },
    27250,
    (e, t, r) => {
        'use strict';
        (Object.defineProperty(r, '__esModule', { value: !0 }),
            Object.defineProperty(r, 'isLocalURL', {
                enumerable: !0,
                get: function () {
                    return i;
                },
            }));
        let a = e.r(60067),
            n = e.r(16428);
        function i(e) {
            if (!(0, a.isAbsoluteUrl)(e)) return !0;
            try {
                let t = (0, a.getLocationOrigin)(),
                    r = new URL(e, t);
                return r.origin === t && (0, n.hasBasePath)(r.pathname);
            } catch (e) {
                return !1;
            }
        }
    },
    1511,
    (e, t, r) => {
        'use strict';
        (Object.defineProperty(r, '__esModule', { value: !0 }),
            Object.defineProperty(r, 'errorOnce', {
                enumerable: !0,
                get: function () {
                    return a;
                },
            }));
        let a = (e) => {};
    },
    71669,
    (e, t, r) => {
        'use strict';
        Object.defineProperty(r, '__esModule', { value: !0 });
        var a = {
            default: function () {
                return g;
            },
            useLinkStatus: function () {
                return w;
            },
        };
        for (var n in a)
            Object.defineProperty(r, n, { enumerable: !0, get: a[n] });
        let i = e.r(44066),
            s = e.r(7156),
            o = i._(e.r(81061)),
            c = e.r(95626),
            l = e.r(30428),
            d = e.r(82312),
            u = e.r(60067),
            f = e.r(96176);
        e.r(90253);
        let p = e.r(87638),
            h = e.r(27250),
            y = e.r(1888);
        function m(e) {
            return 'string' == typeof e ? e : (0, c.formatUrl)(e);
        }
        function g(t) {
            var r;
            let a,
                n,
                i,
                [c, g] = (0, o.useOptimistic)(p.IDLE_LINK_STATUS),
                w = (0, o.useRef)(null),
                {
                    href: v,
                    as: S,
                    children: x,
                    prefetch: k = null,
                    passHref: E,
                    replace: A,
                    shallow: j,
                    scroll: T,
                    onClick: C,
                    onMouseEnter: N,
                    onTouchStart: P,
                    legacyBehavior: M = !1,
                    onNavigate: O,
                    ref: _,
                    unstable_dynamicOnHover: R,
                    ...I
                } = t;
            ((a = x),
                M &&
                    ('string' == typeof a || 'number' == typeof a) &&
                    (a = (0, s.jsx)('a', { children: a })));
            let H = o.default.useContext(l.AppRouterContext),
                K = !1 !== k,
                D =
                    !1 !== k
                        ? null === (r = k) || 'auto' === r
                            ? y.FetchStrategy.PPR
                            : y.FetchStrategy.Full
                        : y.FetchStrategy.PPR,
                { href: L, as: W } = o.default.useMemo(() => {
                    let e = m(v);
                    return { href: e, as: S ? m(S) : e };
                }, [v, S]);
            if (M) {
                if (a?.$$typeof === Symbol.for('react.lazy'))
                    throw Object.defineProperty(
                        Error(
                            "`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag.",
                        ),
                        '__NEXT_ERROR_CODE',
                        { value: 'E863', enumerable: !1, configurable: !0 },
                    );
                n = o.default.Children.only(a);
            }
            let J = M ? n && 'object' == typeof n && n.ref : _,
                U = o.default.useCallback(
                    (e) => (
                        null !== H &&
                            (w.current = (0, p.mountLinkInstance)(
                                e,
                                L,
                                H,
                                D,
                                K,
                                g,
                            )),
                        () => {
                            (w.current &&
                                ((0, p.unmountLinkForCurrentNavigation)(
                                    w.current,
                                ),
                                (w.current = null)),
                                (0, p.unmountPrefetchableInstance)(e));
                        }
                    ),
                    [K, L, H, D, g],
                ),
                $ = {
                    ref: (0, d.useMergedRef)(U, J),
                    onClick(t) {
                        (M || 'function' != typeof C || C(t),
                            M &&
                                n.props &&
                                'function' == typeof n.props.onClick &&
                                n.props.onClick(t),
                            !H ||
                                t.defaultPrevented ||
                                (function (t, r, a, n, i, s, c) {
                                    if ('undefined' != typeof window) {
                                        let l,
                                            { nodeName: d } = t.currentTarget;
                                        if (
                                            ('A' === d.toUpperCase() &&
                                                (((l =
                                                    t.currentTarget.getAttribute(
                                                        'target',
                                                    )) &&
                                                    '_self' !== l) ||
                                                    t.metaKey ||
                                                    t.ctrlKey ||
                                                    t.shiftKey ||
                                                    t.altKey ||
                                                    (t.nativeEvent &&
                                                        2 ===
                                                            t.nativeEvent
                                                                .which))) ||
                                            t.currentTarget.hasAttribute(
                                                'download',
                                            )
                                        )
                                            return;
                                        if (!(0, h.isLocalURL)(r)) {
                                            i &&
                                                (t.preventDefault(),
                                                location.replace(r));
                                            return;
                                        }
                                        if ((t.preventDefault(), c)) {
                                            let e = !1;
                                            if (
                                                (c({
                                                    preventDefault: () => {
                                                        e = !0;
                                                    },
                                                }),
                                                e)
                                            )
                                                return;
                                        }
                                        let { dispatchNavigateAction: u } =
                                            e.r(73985);
                                        o.default.startTransition(() => {
                                            u(
                                                a || r,
                                                i ? 'replace' : 'push',
                                                s ?? !0,
                                                n.current,
                                            );
                                        });
                                    }
                                })(t, L, W, w, A, T, O));
                    },
                    onMouseEnter(e) {
                        (M || 'function' != typeof N || N(e),
                            M &&
                                n.props &&
                                'function' == typeof n.props.onMouseEnter &&
                                n.props.onMouseEnter(e),
                            H &&
                                K &&
                                (0, p.onNavigationIntent)(
                                    e.currentTarget,
                                    !0 === R,
                                ));
                    },
                    onTouchStart: function (e) {
                        (M || 'function' != typeof P || P(e),
                            M &&
                                n.props &&
                                'function' == typeof n.props.onTouchStart &&
                                n.props.onTouchStart(e),
                            H &&
                                K &&
                                (0, p.onNavigationIntent)(
                                    e.currentTarget,
                                    !0 === R,
                                ));
                    },
                };
            return (
                (0, u.isAbsoluteUrl)(W)
                    ? ($.href = W)
                    : (M && !E && ('a' !== n.type || 'href' in n.props)) ||
                      ($.href = (0, f.addBasePath)(W)),
                (i = M
                    ? o.default.cloneElement(n, $)
                    : (0, s.jsx)('a', { ...I, ...$, children: a })),
                (0, s.jsx)(b.Provider, { value: c, children: i })
            );
        }
        e.r(1511);
        let b = (0, o.createContext)(p.IDLE_LINK_STATUS),
            w = () => (0, o.useContext)(b);
        ('function' == typeof r.default ||
            ('object' == typeof r.default && null !== r.default)) &&
            void 0 === r.default.__esModule &&
            (Object.defineProperty(r.default, '__esModule', { value: !0 }),
            Object.assign(r.default, r),
            (t.exports = r.default));
    },
    16212,
    (e) => {
        'use strict';
        let t = (0, e.i(10965).default)('Check', [
            ['path', { d: 'M20 6 9 17l-5-5', key: '1gmf2c' }],
        ]);
        e.s(['default', () => t]);
    },
    79064,
    (e) => {
        'use strict';
        let t = (0, e.i(10965).default)('Bell', [
            [
                'path',
                {
                    d: 'M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9',
                    key: '1qo2s2',
                },
            ],
            ['path', { d: 'M10.3 21a1.94 1.94 0 0 0 3.4 0', key: 'qgo35s' }],
        ]);
        e.s(['Bell', () => t], 79064);
    },
    60813,
    94179,
    (e) => {
        'use strict';
        let t = (0, e.i(10965).default)('Sparkles', [
            [
                'path',
                {
                    d: 'M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z',
                    key: '4pj2yx',
                },
            ],
            ['path', { d: 'M20 3v4', key: '1olli1' }],
            ['path', { d: 'M22 5h-4', key: '1gvqau' }],
            ['path', { d: 'M4 17v2', key: 'vumght' }],
            ['path', { d: 'M5 18H3', key: 'zchphs' }],
        ]);
        e.s(['Sparkles', () => t], 60813);
        var r = e.i(7156),
            a = e.i(14433),
            n = e.i(94237),
            i = e.i(47163);
        let s = (0, n.cva)(
            'inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden',
            {
                variants: {
                    variant: {
                        default:
                            'border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90',
                        secondary:
                            'border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90',
                        destructive:
                            'border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
                        outline:
                            'text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground',
                    },
                },
                defaultVariants: { variant: 'default' },
            },
        );
        function o({ className: e, variant: t, asChild: n = !1, ...o }) {
            let c = n ? a.Slot : 'span';
            return (0, r.jsx)(c, {
                'data-slot': 'badge',
                className: (0, i.cn)(s({ variant: t }), e),
                ...o,
            });
        }
        e.s(['Badge', () => o], 94179);
    },
    72809,
    (e) => {
        'use strict';
        var t = e.i(16212);
        e.s(['Check', () => t.default]);
    },
    52910,
    17508,
    (e) => {
        'use strict';
        var t = e.i(10965);
        let r = (0, t.default)('ChevronLeft', [
            ['path', { d: 'm15 18-6-6 6-6', key: '1wnfg3' }],
        ]);
        e.s(['ChevronLeft', () => r], 52910);
        let a = (0, t.default)('ChevronRight', [
            ['path', { d: 'm9 18 6-6-6-6', key: 'mthhwq' }],
        ]);
        e.s(['ChevronRight', () => a], 17508);
    },
    13293,
    (e) => {
        'use strict';
        var t = e.i(7156),
            r = e.i(10965);
        let a = (0, r.default)('Moon', [
                [
                    'path',
                    { d: 'M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z', key: 'a7tn18' },
                ],
            ]),
            n = (0, r.default)('Sun', [
                ['circle', { cx: '12', cy: '12', r: '4', key: '4exip2' }],
                ['path', { d: 'M12 2v2', key: 'tus03m' }],
                ['path', { d: 'M12 20v2', key: '1lh1kg' }],
                ['path', { d: 'm4.93 4.93 1.41 1.41', key: '149t6j' }],
                ['path', { d: 'm17.66 17.66 1.41 1.41', key: 'ptbguv' }],
                ['path', { d: 'M2 12h2', key: '1t8f8n' }],
                ['path', { d: 'M20 12h2', key: '1q8mjw' }],
                ['path', { d: 'm6.34 17.66-1.41 1.41', key: '1m8zz5' }],
                ['path', { d: 'm19.07 4.93-1.41 1.41', key: '1shlcs' }],
            ]),
            i = (0, r.default)('Languages', [
                ['path', { d: 'm5 8 6 6', key: '1wu5hv' }],
                ['path', { d: 'm4 14 6-6 2-3', key: '1k1g8d' }],
                ['path', { d: 'M2 5h12', key: 'or177f' }],
                ['path', { d: 'M7 2h1', key: '1t2jsx' }],
                ['path', { d: 'm22 22-5-10-5 10', key: 'don7ne' }],
                ['path', { d: 'M14 18h6', key: '1m8k6r' }],
            ]);
        var s = e.i(81795),
            o = e.i(67881),
            c = e.i(50661),
            l = e.i(81061),
            d = e.i(71393),
            u = e.i(34290),
            f = e.i(79064);
        let p = (0, r.default)('BellRing', [
            [
                'path',
                {
                    d: 'M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9',
                    key: '1qo2s2',
                },
            ],
            ['path', { d: 'M10.3 21a1.94 1.94 0 0 0 3.4 0', key: 'qgo35s' }],
            ['path', { d: 'M4 2C2.8 3.7 2 5.7 2 8', key: 'tap9e0' }],
            ['path', { d: 'M22 8c0-2.3-.8-4.3-2-6', key: '5bb3ad' }],
        ]);
        var h = e.i(72809),
            y = e.i(10712),
            m = e.i(87524),
            g = e.i(88297),
            b = e.i(60813),
            w = e.i(52910),
            v = e.i(17508),
            S = e.i(94179),
            x = e.i(47163),
            k = e.i(93901);
        function E() {
            let [e, r] = (0, l.useState)(0),
                [a, n] = (0, l.useState)(!1),
                [i, s] = (0, l.useState)(!1);
            return (
                (0, l.useEffect)(() => {
                    s(!0);
                }, []),
                (0, l.useEffect)(() => {
                    let e = () => {
                        let e = JSON.parse(
                                localStorage.getItem('latestNoticeCache') ||
                                    '[]',
                            ),
                            t = JSON.parse(
                                localStorage.getItem('seenNoticeIds') || '[]',
                            );
                        r(e.filter((e) => !t.includes(e.id)).length);
                    };
                    return (
                        e(),
                        window.addEventListener('storage', e),
                        window.addEventListener('notificationUpdate', e),
                        () => {
                            (window.removeEventListener('storage', e),
                                window.removeEventListener(
                                    'notificationUpdate',
                                    e,
                                ));
                        }
                    );
                }, []),
                (0, l.useEffect)(() => {
                    (async () => {
                        try {
                            let e = `_t=${Date.now()}&_r=${Math.random().toString(36).substring(7)}`,
                                t = await fetch(`/api/notifications?${e}`, {
                                    cache: 'no-store',
                                    headers: {
                                        'Cache-Control':
                                            'no-cache, no-store, must-revalidate',
                                        Pragma: 'no-cache',
                                    },
                                });
                            if (!t.ok) return;
                            let r = await t.json();
                            r &&
                                Array.isArray(r) &&
                                r.length > 0 &&
                                (localStorage.setItem(
                                    'latestNoticeCache',
                                    JSON.stringify(r),
                                ),
                                window.dispatchEvent(
                                    new Event('notificationUpdate'),
                                ));
                        } catch (e) {
                            console.error('Failed to fetch notifications:', e);
                        }
                    })();
                }, []),
                (0, l.useEffect)(() => {
                    let e = (e) => {
                        'Escape' === e.key && a && n(!1);
                    };
                    return (
                        a &&
                            (document.addEventListener('keydown', e),
                            (document.body.style.overflow = 'hidden')),
                        () => {
                            (document.removeEventListener('keydown', e),
                                (document.body.style.overflow = ''));
                        }
                    );
                }, [a]),
                (0, t.jsxs)(t.Fragment, {
                    children: [
                        (0, t.jsxs)(o.Button, {
                            variant: 'ghost',
                            size: 'icon',
                            className: (0, x.cn)(
                                'relative group h-9 w-9 transition-all duration-300 hover:scale-110',
                                e > 0
                                    ? 'hover:bg-primary/20'
                                    : 'hover:bg-primary/10',
                            ),
                            onClick: () => n(!0),
                            'aria-label': `View Notifications ${e > 0 ? `(${e} unread)` : ''}`,
                            children: [
                                e > 0
                                    ? (0, t.jsx)(p, {
                                          className:
                                              'h-4 w-4 transition-transform duration-300 group-hover:rotate-12 text-primary',
                                      })
                                    : (0, t.jsx)(f.Bell, {
                                          className:
                                              'h-4 w-4 transition-transform duration-300 group-hover:rotate-12',
                                      }),
                                e > 0 &&
                                    (0, t.jsx)(S.Badge, {
                                        variant: 'destructive',
                                        className:
                                            'absolute -top-1 -right-1 h-5 min-w-5 px-1 rounded-full text-[10px] font-bold flex items-center justify-center animate-pulse shadow-lg',
                                        children: e > 9 ? '9+' : e,
                                    }),
                            ],
                        }),
                        i && (0, t.jsx)(A, { isOpen: a, onClose: () => n(!1) }),
                    ],
                })
            );
        }
        function A({ isOpen: e, onClose: r }) {
            let [a, n] = (0, l.useState)([]),
                [i, s] = (0, l.useState)(0);
            (0, l.useEffect)(() => {
                if (e) {
                    let e = JSON.parse(
                        localStorage.getItem('latestNoticeCache') || '[]',
                    );
                    if (e.length > 0) {
                        n(e);
                        let t = JSON.parse(
                                localStorage.getItem('seenNoticeIds') || '[]',
                            ),
                            r = e.findIndex((e) => !t.includes(e.id));
                        s(r >= 0 ? r : 0);
                    }
                }
            }, [e]);
            let c = (0, l.useCallback)((e) => {
                    let t = JSON.parse(
                        localStorage.getItem('seenNoticeIds') || '[]',
                    );
                    t.includes(e) ||
                        (t.push(e),
                        localStorage.setItem(
                            'seenNoticeIds',
                            JSON.stringify(t),
                        ),
                        window.dispatchEvent(new Event('notificationUpdate')));
                }, []),
                f = (0, l.useCallback)(() => {
                    let e = a.map((e) => e.id);
                    (localStorage.setItem('seenNoticeIds', JSON.stringify(e)),
                        window.dispatchEvent(new Event('notificationUpdate')));
                }, [a]);
            (0, l.useEffect)(() => {
                e && a[i] && c(a[i].id);
            }, [e, i, a, c]);
            let p = (e) =>
                JSON.parse(
                    localStorage.getItem('seenNoticeIds') || '[]',
                ).includes(e);
            if (
                ((0, l.useEffect)(() => {
                    let t = (t) => {
                        e &&
                            !(a.length <= 1) &&
                            ('ArrowLeft' === t.key || 'ArrowUp' === t.key
                                ? (t.preventDefault(),
                                  s((e) => Math.max(0, e - 1)))
                                : ('ArrowRight' === t.key ||
                                      'ArrowDown' === t.key) &&
                                  (t.preventDefault(),
                                  s((e) => Math.min(a.length - 1, e + 1))));
                    };
                    return (
                        document.addEventListener('keydown', t),
                        () => document.removeEventListener('keydown', t)
                    );
                }, [e, a.length]),
                !e || 0 === a.length)
            )
                return null;
            let y = a[i];
            return (0, d.createPortal)(
                (0, t.jsxs)('div', {
                    style: {
                        position: 'fixed',
                        inset: 0,
                        zIndex: 99999,
                        isolation: 'isolate',
                        willChange: 'transform',
                    },
                    role: 'dialog',
                    'aria-modal': 'true',
                    'aria-labelledby': 'notification-title',
                    children: [
                        (0, t.jsx)('div', {
                            style: {
                                position: 'absolute',
                                inset: 0,
                                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                                zIndex: 1,
                            },
                            onClick: r,
                            'aria-hidden': 'true',
                        }),
                        (0, t.jsx)('div', {
                            style: {
                                position: 'absolute',
                                inset: 0,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                padding: '16px',
                                zIndex: 2,
                            },
                            children: (0, t.jsxs)('div', {
                                className:
                                    'relative w-full max-w-5xl flex gap-4 animate-in zoom-in-95 slide-in-from-bottom-8 duration-300',
                                onClick: (e) => e.stopPropagation(),
                                children: [
                                    a.length > 1 &&
                                        (0, t.jsxs)('div', {
                                            className:
                                                'hidden md:flex flex-col w-72 bg-card border border-border rounded-2xl shadow-2xl overflow-hidden max-h-[80vh]',
                                            children: [
                                                (0, t.jsxs)('div', {
                                                    className:
                                                        'p-4 border-b border-border bg-card shrink-0',
                                                    children: [
                                                        (0, t.jsxs)('div', {
                                                            className:
                                                                'flex items-center justify-between mb-2',
                                                            children: [
                                                                (0, t.jsx)(
                                                                    'h3',
                                                                    {
                                                                        className:
                                                                            'font-semibold text-sm text-muted-foreground',
                                                                        children:
                                                                            'Notifications',
                                                                    },
                                                                ),
                                                                (0, t.jsxs)(
                                                                    S.Badge,
                                                                    {
                                                                        variant:
                                                                            'secondary',
                                                                        className:
                                                                            'text-xs',
                                                                        children:
                                                                            [
                                                                                a.filter(
                                                                                    (
                                                                                        e,
                                                                                    ) =>
                                                                                        !p(
                                                                                            e.id,
                                                                                        ),
                                                                                )
                                                                                    .length,
                                                                                ' new',
                                                                            ],
                                                                    },
                                                                ),
                                                            ],
                                                        }),
                                                        a.filter(
                                                            (e) => !p(e.id),
                                                        ).length > 0 &&
                                                            (0, t.jsxs)(
                                                                o.Button,
                                                                {
                                                                    variant:
                                                                        'ghost',
                                                                    size: 'sm',
                                                                    onClick: f,
                                                                    className:
                                                                        'w-full justify-start text-xs h-7 text-muted-foreground hover:text-foreground',
                                                                    children: [
                                                                        (0,
                                                                        t.jsx)(
                                                                            h.Check,
                                                                            {
                                                                                className:
                                                                                    'h-3 w-3 mr-1',
                                                                            },
                                                                        ),
                                                                        'Mark all as read',
                                                                    ],
                                                                },
                                                            ),
                                                    ],
                                                }),
                                                (0, t.jsx)('div', {
                                                    className:
                                                        'flex-1 overflow-y-auto overscroll-contain',
                                                    children: a.map((e, r) =>
                                                        (0, t.jsx)(
                                                            'button',
                                                            {
                                                                onClick: () =>
                                                                    s(r),
                                                                className: (0,
                                                                x.cn)(
                                                                    'w-full p-4 text-left transition-all duration-200 border-b border-border/50 hover:bg-accent/50',
                                                                    i === r &&
                                                                        'bg-accent border-l-4 border-l-primary',
                                                                    !p(e.id) &&
                                                                        'bg-primary/5',
                                                                ),
                                                                children: (0,
                                                                t.jsxs)('div', {
                                                                    className:
                                                                        'flex items-start gap-3',
                                                                    children: [
                                                                        (0,
                                                                        t.jsx)(
                                                                            j,
                                                                            {
                                                                                type: e.type,
                                                                                className:
                                                                                    'h-4 w-4 mt-1 shrink-0',
                                                                            },
                                                                        ),
                                                                        (0,
                                                                        t.jsxs)(
                                                                            'div',
                                                                            {
                                                                                className:
                                                                                    'flex-1 min-w-0',
                                                                                children:
                                                                                    [
                                                                                        (0,
                                                                                        t.jsxs)(
                                                                                            'div',
                                                                                            {
                                                                                                className:
                                                                                                    'flex items-center gap-2 mb-1',
                                                                                                children:
                                                                                                    [
                                                                                                        (0,
                                                                                                        t.jsx)(
                                                                                                            'p',
                                                                                                            {
                                                                                                                className:
                                                                                                                    'font-medium text-sm truncate',
                                                                                                                children:
                                                                                                                    e.title,
                                                                                                            },
                                                                                                        ),
                                                                                                        !p(
                                                                                                            e.id,
                                                                                                        ) &&
                                                                                                            (0,
                                                                                                            t.jsx)(
                                                                                                                'div',
                                                                                                                {
                                                                                                                    className:
                                                                                                                        'h-2 w-2 rounded-full bg-primary shrink-0 animate-pulse',
                                                                                                                },
                                                                                                            ),
                                                                                                    ],
                                                                                            },
                                                                                        ),
                                                                                        (0,
                                                                                        t.jsx)(
                                                                                            'p',
                                                                                            {
                                                                                                className:
                                                                                                    'text-xs text-muted-foreground line-clamp-2',
                                                                                                children:
                                                                                                    (0,
                                                                                                    k.stripHtmlTags)(
                                                                                                        e.message,
                                                                                                    ),
                                                                                            },
                                                                                        ),
                                                                                    ],
                                                                            },
                                                                        ),
                                                                    ],
                                                                }),
                                                            },
                                                            e.id,
                                                        ),
                                                    ),
                                                }),
                                            ],
                                        }),
                                    (0, t.jsx)('div', {
                                        className:
                                            'flex-1 bg-card border border-border rounded-3xl shadow-2xl overflow-hidden max-h-[85vh] flex flex-col',
                                        children: (0, t.jsxs)('div', {
                                            className:
                                                'relative flex flex-col h-full',
                                            children: [
                                                (0, t.jsxs)('div', {
                                                    className:
                                                        'flex items-center justify-between p-6 border-b border-border bg-card shrink-0',
                                                    children: [
                                                        (0, t.jsxs)('div', {
                                                            className:
                                                                'flex items-center gap-3',
                                                            children: [
                                                                (0, t.jsx)(
                                                                    'div',
                                                                    {
                                                                        className:
                                                                            (0,
                                                                            x.cn)(
                                                                                'p-2 rounded-xl',
                                                                                'success' ===
                                                                                    y.type &&
                                                                                    'bg-green-500/10 text-green-500',
                                                                                'warning' ===
                                                                                    y.type &&
                                                                                    'bg-yellow-500/10 text-yellow-500',
                                                                                'announcement' ===
                                                                                    y.type &&
                                                                                    'bg-purple-500/10 text-purple-500',
                                                                                !y.type &&
                                                                                    'bg-primary/10 text-primary',
                                                                            ),
                                                                        children:
                                                                            (0,
                                                                            t.jsx)(
                                                                                j,
                                                                                {
                                                                                    type: y.type,
                                                                                    className:
                                                                                        'h-5 w-5',
                                                                                },
                                                                            ),
                                                                    },
                                                                ),
                                                                (0, t.jsxs)(
                                                                    'div',
                                                                    {
                                                                        children:
                                                                            [
                                                                                (0,
                                                                                t.jsx)(
                                                                                    'p',
                                                                                    {
                                                                                        className:
                                                                                            'text-xs text-muted-foreground uppercase tracking-wider font-medium',
                                                                                        children:
                                                                                            y.type ||
                                                                                            'Notification',
                                                                                    },
                                                                                ),
                                                                                a.length >
                                                                                    1 &&
                                                                                    (0,
                                                                                    t.jsxs)(
                                                                                        'p',
                                                                                        {
                                                                                            className:
                                                                                                'text-xs text-muted-foreground',
                                                                                            children:
                                                                                                [
                                                                                                    i +
                                                                                                        1,
                                                                                                    ' of ',
                                                                                                    a.length,
                                                                                                ],
                                                                                        },
                                                                                    ),
                                                                            ],
                                                                    },
                                                                ),
                                                            ],
                                                        }),
                                                        (0, t.jsx)(o.Button, {
                                                            variant: 'ghost',
                                                            size: 'icon',
                                                            className:
                                                                'hover:bg-destructive/10 hover:text-destructive h-8 w-8 rounded-full transition-colors',
                                                            onClick: r,
                                                            'aria-label':
                                                                'Close notification',
                                                            children: (0,
                                                            t.jsx)(u.X, {
                                                                className:
                                                                    'h-4 w-4',
                                                            }),
                                                        }),
                                                    ],
                                                }),
                                                (0, t.jsxs)('div', {
                                                    className:
                                                        'flex-1 overflow-y-auto overscroll-contain p-8 space-y-6',
                                                    children: [
                                                        (0, t.jsxs)('div', {
                                                            className:
                                                                'space-y-4',
                                                            children: [
                                                                (0, t.jsx)(
                                                                    'h2',
                                                                    {
                                                                        id: 'notification-title',
                                                                        className:
                                                                            'text-2xl md:text-3xl font-bold leading-tight text-balance',
                                                                        children:
                                                                            y.title,
                                                                    },
                                                                ),
                                                                (0, t.jsx)(
                                                                    'div',
                                                                    {
                                                                        className:
                                                                            'prose prose-sm max-w-none dark:prose-invert [&>p]:text-base [&>p]:leading-relaxed [&>p]:text-muted-foreground',
                                                                        children:
                                                                            (0,
                                                                            t.jsx)(
                                                                                'div',
                                                                                {
                                                                                    dangerouslySetInnerHTML:
                                                                                        {
                                                                                            __html: (0,
                                                                                            k.sanitizeMessage)(
                                                                                                (0,
                                                                                                k.formatForInAppDisplay)(
                                                                                                    y.message,
                                                                                                ),
                                                                                            ),
                                                                                        },
                                                                                },
                                                                            ),
                                                                    },
                                                                ),
                                                            ],
                                                        }),
                                                        y.imageUrl &&
                                                            (0, t.jsx)('div', {
                                                                className:
                                                                    'rounded-xl overflow-hidden border border-border shadow-lg',
                                                                children: (0,
                                                                t.jsx)('img', {
                                                                    src:
                                                                        y.imageUrl ||
                                                                        '/placeholder.svg',
                                                                    alt: y.title,
                                                                    className:
                                                                        'w-full h-auto',
                                                                    loading:
                                                                        'lazy',
                                                                }),
                                                            }),
                                                        y.buttonName &&
                                                            y.buttonLink &&
                                                            (0, t.jsx)('div', {
                                                                className:
                                                                    'pt-2',
                                                                children: (0,
                                                                t.jsx)(
                                                                    o.Button,
                                                                    {
                                                                        asChild:
                                                                            !0,
                                                                        size: 'lg',
                                                                        className:
                                                                            'w-full md:w-auto bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-base rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105',
                                                                        children:
                                                                            (0,
                                                                            t.jsx)(
                                                                                'a',
                                                                                {
                                                                                    href: y.buttonLink,
                                                                                    target: '_blank',
                                                                                    rel: 'noopener noreferrer',
                                                                                    children:
                                                                                        y.buttonName,
                                                                                },
                                                                            ),
                                                                    },
                                                                ),
                                                            }),
                                                    ],
                                                }),
                                                a.length > 1 &&
                                                    (0, t.jsx)('div', {
                                                        className:
                                                            'p-6 border-t border-border bg-card shrink-0',
                                                        children: (0, t.jsxs)(
                                                            'div',
                                                            {
                                                                className:
                                                                    'flex items-center justify-between gap-4',
                                                                children: [
                                                                    (0, t.jsxs)(
                                                                        o.Button,
                                                                        {
                                                                            variant:
                                                                                'outline',
                                                                            size: 'sm',
                                                                            onClick:
                                                                                () =>
                                                                                    s(
                                                                                        Math.max(
                                                                                            0,
                                                                                            i -
                                                                                                1,
                                                                                        ),
                                                                                    ),
                                                                            disabled:
                                                                                0 ===
                                                                                i,
                                                                            className:
                                                                                'flex-1 gap-1',
                                                                            children:
                                                                                [
                                                                                    (0,
                                                                                    t.jsx)(
                                                                                        w.ChevronLeft,
                                                                                        {
                                                                                            className:
                                                                                                'h-4 w-4',
                                                                                        },
                                                                                    ),
                                                                                    'Previous',
                                                                                ],
                                                                        },
                                                                    ),
                                                                    (0, t.jsx)(
                                                                        'div',
                                                                        {
                                                                            className:
                                                                                'flex gap-1.5',
                                                                            children:
                                                                                a.map(
                                                                                    (
                                                                                        e,
                                                                                        r,
                                                                                    ) =>
                                                                                        (0,
                                                                                        t.jsx)(
                                                                                            'button',
                                                                                            {
                                                                                                onClick:
                                                                                                    () =>
                                                                                                        s(
                                                                                                            r,
                                                                                                        ),
                                                                                                className:
                                                                                                    (0,
                                                                                                    x.cn)(
                                                                                                        'h-2 rounded-full transition-all duration-300',
                                                                                                        i ===
                                                                                                            r
                                                                                                            ? 'w-8 bg-primary'
                                                                                                            : 'w-2 bg-muted hover:bg-muted-foreground/50',
                                                                                                    ),
                                                                                                'aria-label': `Go to notification ${r + 1}`,
                                                                                            },
                                                                                            r,
                                                                                        ),
                                                                                ),
                                                                        },
                                                                    ),
                                                                    (0, t.jsxs)(
                                                                        o.Button,
                                                                        {
                                                                            variant:
                                                                                'outline',
                                                                            size: 'sm',
                                                                            onClick:
                                                                                () =>
                                                                                    s(
                                                                                        Math.min(
                                                                                            a.length -
                                                                                                1,
                                                                                            i +
                                                                                                1,
                                                                                        ),
                                                                                    ),
                                                                            disabled:
                                                                                i ===
                                                                                a.length -
                                                                                    1,
                                                                            className:
                                                                                'flex-1 gap-1',
                                                                            children:
                                                                                [
                                                                                    'Next',
                                                                                    (0,
                                                                                    t.jsx)(
                                                                                        v.ChevronRight,
                                                                                        {
                                                                                            className:
                                                                                                'h-4 w-4',
                                                                                        },
                                                                                    ),
                                                                                ],
                                                                        },
                                                                    ),
                                                                ],
                                                            },
                                                        ),
                                                    }),
                                            ],
                                        }),
                                    }),
                                ],
                            }),
                        }),
                    ],
                }),
                document.body,
            );
        }
        function j({ type: e, className: r }) {
            switch (e) {
                case 'success':
                    return (0, t.jsx)(g.CheckCircle, { className: r });
                case 'warning':
                    return (0, t.jsx)(m.AlertCircle, { className: r });
                case 'announcement':
                    return (0, t.jsx)(b.Sparkles, { className: r });
                default:
                    return (0, t.jsx)(y.Info, { className: r });
            }
        }
        e.i(63129);
        let T = (0, r.default)('BellOff', [
            [
                'path',
                {
                    d: 'M8.7 3A6 6 0 0 1 18 8a21.3 21.3 0 0 0 .6 5',
                    key: 'o7mx20',
                },
            ],
            [
                'path',
                { d: 'M17 17H3s3-2 3-9a4.67 4.67 0 0 1 .3-1.7', key: '16f1lm' },
            ],
            ['path', { d: 'M10.3 21a1.94 1.94 0 0 0 3.4 0', key: 'qgo35s' }],
            ['path', { d: 'm2 2 20 20', key: '1ooewy' }],
        ]);
        function C() {
            let [e, r] = (0, l.useState)(!1),
                [a, n] = (0, l.useState)(!1),
                [i, s] = (0, l.useState)(!1);
            (0, l.useEffect)(() => {
                'serviceWorker' in navigator &&
                    'PushManager' in window &&
                    (r(!0), c());
            }, []);
            let c = async () => {
                    try {
                        let e = await navigator.serviceWorker.ready,
                            t = await e.pushManager.getSubscription();
                        n(!!t);
                    } catch (e) {
                        console.error('Error checking subscription:', e);
                    }
                },
                d = async () => {
                    try {
                        s(!0);
                        let e = await Notification.requestPermission();
                        if ('granted' !== e)
                            return void alert('Notification permission denied');
                        let t =
                            await navigator.serviceWorker.register('/sw.js');
                        await navigator.serviceWorker.ready;
                        let r = await t.pushManager.subscribe({
                            userVisibleOnly: !0,
                            applicationServerKey: (function (e) {
                                let t = '='.repeat((4 - (e.length % 4)) % 4),
                                    r = (e + t)
                                        .replace(/-/g, '+')
                                        .replace(/_/g, '/'),
                                    a = window.atob(r),
                                    n = new Uint8Array(a.length);
                                for (let e = 0; e < a.length; ++e)
                                    n[e] = a.charCodeAt(e);
                                return n;
                            })(
                                'BIo8mGrWFnazgxBn-_VqsaMbVCxEzsPPGy9mDNV9d5HYiMrTVO8p2k1TpR25qB_vJaxd2HoetpYYL6FBLsJxkVc',
                            ),
                        });
                        (
                            await fetch('/api/push-subscriptions', {
                                method: 'POST',
                                headers: { 'Content-Type': 'application/json' },
                                body: JSON.stringify({
                                    action: 'subscribe',
                                    subscription: r.toJSON(),
                                }),
                            })
                        ).ok &&
                            (n(!0),
                            console.log(
                                '[v0] Successfully subscribed to push notifications',
                            ));
                    } catch (e) {
                        (console.error('Error subscribing to push:', e),
                            alert('Failed to subscribe to push notifications'));
                    } finally {
                        s(!1);
                    }
                },
                u = async () => {
                    try {
                        s(!0);
                        let e = await navigator.serviceWorker.ready,
                            t = await e.pushManager.getSubscription();
                        t &&
                            (await t.unsubscribe(),
                            await fetch('/api/push-subscriptions', {
                                method: 'POST',
                                headers: { 'Content-Type': 'application/json' },
                                body: JSON.stringify({
                                    action: 'unsubscribe',
                                    subscription: t.toJSON(),
                                }),
                            }),
                            n(!1),
                            console.log(
                                '[v0] Successfully unsubscribed from push notifications',
                            ));
                    } catch (e) {
                        (console.error('Error unsubscribing from push:', e),
                            alert(
                                'Failed to unsubscribe from push notifications',
                            ));
                    } finally {
                        s(!1);
                    }
                };
            return e
                ? (0, t.jsx)(o.Button, {
                      variant: 'ghost',
                      size: 'sm',
                      onClick: a ? u : d,
                      disabled: i,
                      className: (0, x.cn)(
                          'gap-2 transition-all',
                          a
                              ? 'text-green-600 hover:text-green-700'
                              : 'text-muted-foreground',
                      ),
                      children: a
                          ? (0, t.jsxs)(t.Fragment, {
                                children: [
                                    (0, t.jsx)(p, { className: 'h-4 w-4' }),
                                    (0, t.jsx)('span', {
                                        className: 'text-xs',
                                        children: 'Push ON',
                                    }),
                                ],
                            })
                          : (0, t.jsxs)(t.Fragment, {
                                children: [
                                    (0, t.jsx)(T, { className: 'h-4 w-4' }),
                                    (0, t.jsx)('span', {
                                        className: 'text-xs',
                                        children: 'Enable Push',
                                    }),
                                ],
                            }),
                  })
                : null;
        }
        function N() {
            let { theme: e, setTheme: r } = (0, s.useTheme)(),
                { language: l, toggleLanguage: d } = (0, c.useLanguage)();
            return (0, t.jsx)('header', {
                className:
                    'fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60 transition-all duration-300',
                children: (0, t.jsxs)('div', {
                    className:
                        'mx-auto flex h-16 max-w-7xl items-center justify-end gap-2 px-4',
                    children: [
                        (0, t.jsx)(E, {}),
                        (0, t.jsx)(C, {}),
                        (0, t.jsx)(o.Button, {
                            variant: 'ghost',
                            size: 'icon',
                            onClick: d,
                            'aria-label': 'Toggle language',
                            className:
                                'h-9 w-9 transition-all duration-300 hover:scale-110 hover:rotate-12 hover:bg-primary/10',
                            children: (0, t.jsx)(i, {
                                className:
                                    'h-4 w-4 transition-transform duration-300',
                            }),
                        }),
                        (0, t.jsxs)(o.Button, {
                            variant: 'ghost',
                            size: 'icon',
                            onClick: () => r('dark' === e ? 'light' : 'dark'),
                            'aria-label': 'Toggle theme',
                            className:
                                'h-9 w-9 transition-all duration-300 hover:scale-110 hover:bg-primary/10',
                            children: [
                                (0, t.jsx)(n, {
                                    className:
                                        'h-4 w-4 rotate-0 scale-100 transition-all duration-500 dark:-rotate-90 dark:scale-0',
                                }),
                                (0, t.jsx)(a, {
                                    className:
                                        'absolute h-4 w-4 rotate-90 scale-0 transition-all duration-500 dark:rotate-0 dark:scale-100',
                                }),
                            ],
                        }),
                    ],
                }),
            });
        }
        e.s(['default', () => N], 13293);
    },
    13637,
    (e) => {
        'use strict';
        let t = (0, e.i(10965).default)('Download', [
            [
                'path',
                {
                    d: 'M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4',
                    key: 'ih7n3h',
                },
            ],
            ['polyline', { points: '7 10 12 15 17 10', key: '2ggqvy' }],
            ['line', { x1: '12', x2: '12', y1: '15', y2: '3', key: '1vk2je' }],
        ]);
        e.s(['Download', () => t], 13637);
    },
    74041,
    (e) => {
        'use strict';
        let t = (0, e.i(10965).default)('Copy', [
            [
                'rect',
                {
                    width: '14',
                    height: '14',
                    x: '8',
                    y: '8',
                    rx: '2',
                    ry: '2',
                    key: '17jyea',
                },
            ],
            [
                'path',
                {
                    d: 'M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2',
                    key: 'zix9uf',
                },
            ],
        ]);
        e.s(['Copy', () => t], 74041);
    },
    5576,
    94522,
    94535,
    83774,
    (e) => {
        'use strict';
        let t = (0, e.i(10965).default)('Search', [
            ['circle', { cx: '11', cy: '11', r: '8', key: '4ej97u' }],
            ['path', { d: 'm21 21-4.3-4.3', key: '1qie3q' }],
        ]);
        (e.s(['default', () => t], 94522), e.s(['Search', () => t], 5576));
        var r = e.i(81061);
        function a() {
            let [e, t] = (0, r.useState)(null),
                [a, n] = (0, r.useState)(!0);
            return (
                (0, r.useEffect)(() => {
                    let e = !1;
                    return (
                        (async () => {
                            try {
                                let r = await fetch('/api/check-blocked', {
                                    method: 'GET',
                                    cache: 'no-store',
                                    headers: { 'Cache-Control': 'no-cache' },
                                });
                                if (!r.ok) {
                                    e || t(!1);
                                    return;
                                }
                                let a = await r.json();
                                e || t(!!a.blocked);
                            } catch {
                                e || t(!1);
                            } finally {
                                e || n(!1);
                            }
                        })(),
                        () => {
                            e = !0;
                        }
                    );
                }, []),
                { isBlocked: e, isChecking: a }
            );
        }
        e.s(['useIPBlock', () => a], 94535);
        var n = e.i(59668);
        let i = 'bd_api_token_metadata';
        class s {
            static instance;
            tokenMetadata = null;
            refreshTimer = null;
            constructor() {
                this.loadTokenMetadata();
            }
            static getInstance() {
                return (s.instance || (s.instance = new s()), s.instance);
            }
            loadTokenMetadata() {
                try {
                    let e = localStorage.getItem(i);
                    e && (this.tokenMetadata = JSON.parse(e));
                } catch {
                    (console.error(
                        '[v0] Failed to load token metadata from storage',
                    ),
                        (this.tokenMetadata = null));
                }
            }
            saveTokenMetadata() {
                if (this.tokenMetadata)
                    try {
                        localStorage.setItem(
                            i,
                            JSON.stringify(this.tokenMetadata),
                        );
                    } catch {
                        console.error(
                            '[v0] Failed to save token metadata to storage',
                        );
                    }
            }
            isTokenExpired() {
                return (
                    !this.tokenMetadata ||
                    Date.now() >= this.tokenMetadata.expiresAt
                );
            }
            isTokenExpiringSoon() {
                if (!this.tokenMetadata) return !0;
                let e = Date.now();
                return this.tokenMetadata.expiresAt - e <= 12e4;
            }
            getTokenTimeRemaining() {
                return this.tokenMetadata
                    ? Math.max(
                          0,
                          Math.floor(
                              (this.tokenMetadata.expiresAt - Date.now()) / 1e3,
                          ),
                      )
                    : 0;
            }
            async refreshTokenIfNeeded() {
                if (!this.isTokenExpiringSoon())
                    return this.tokenMetadata?.encodedToken || null;
                try {
                    let e = await (0, n.generateToken)(),
                        t = (0, n.encodeToken)(e),
                        r = Date.now();
                    return (
                        (this.tokenMetadata = {
                            encodedToken: t,
                            generatedAt: r,
                            expiresAt: r + 18e5,
                        }),
                        this.saveTokenMetadata(),
                        console.log('[v0] Token refreshed successfully'),
                        t
                    );
                } catch (e) {
                    return (
                        console.error('[v0] Failed to refresh token:', e),
                        null
                    );
                }
            }
            async getToken() {
                if (!this.isTokenExpired())
                    return this.tokenMetadata?.encodedToken || null;
                try {
                    let e = await (0, n.generateToken)(),
                        t = (0, n.encodeToken)(e),
                        r = Date.now();
                    return (
                        (this.tokenMetadata = {
                            encodedToken: t,
                            generatedAt: r,
                            expiresAt: r + 18e5,
                        }),
                        this.saveTokenMetadata(),
                        t
                    );
                } catch (e) {
                    return (
                        console.error('[v0] Failed to generate token:', e),
                        null
                    );
                }
            }
            setupAutoRefresh(e) {
                (this.refreshTimer && clearInterval(this.refreshTimer),
                    (this.refreshTimer = setInterval(async () => {
                        if (this.isTokenExpiringSoon()) {
                            let t = await this.refreshTokenIfNeeded();
                            t && e && e(t);
                        }
                    }, 6e4)));
            }
            clearAutoRefresh() {
                this.refreshTimer &&
                    (clearInterval(this.refreshTimer),
                    (this.refreshTimer = null));
            }
            clearToken() {
                ((this.tokenMetadata = null),
                    localStorage.removeItem(i),
                    this.clearAutoRefresh());
            }
        }
        let o = s.getInstance();
        e.s(['tokenManager', 0, o], 83774);
    },
    90864,
    (e) => {
        'use strict';
        var t = e.i(64347);
        e.s(['ChevronDown', () => t.default]);
    },
    59668,
    (e) => {
        'use strict';
        let t,
            r = new TextEncoder(),
            a = new TextDecoder();
        function n(...e) {
            let t = new Uint8Array(e.reduce((e, { length: t }) => e + t, 0)),
                r = 0;
            for (let a of e) (t.set(a, r), (r += a.length));
            return t;
        }
        function i(e) {
            let t = new Uint8Array(e.length);
            for (let r = 0; r < e.length; r++) {
                let a = e.charCodeAt(r);
                if (a > 127)
                    throw TypeError('non-ASCII string encountered in encode()');
                t[r] = a;
            }
            return t;
        }
        function s(e) {
            if (Uint8Array.fromBase64)
                return Uint8Array.fromBase64(
                    'string' == typeof e ? e : a.decode(e),
                    { alphabet: 'base64url' },
                );
            let t = e;
            (t instanceof Uint8Array && (t = a.decode(t)),
                (t = t.replace(/-/g, '+').replace(/_/g, '/')));
            try {
                var r = t;
                if (Uint8Array.fromBase64) return Uint8Array.fromBase64(r);
                let e = atob(r),
                    a = new Uint8Array(e.length);
                for (let t = 0; t < e.length; t++) a[t] = e.charCodeAt(t);
                return a;
            } catch {
                throw TypeError(
                    'The input to be decoded is not correctly encoded.',
                );
            }
        }
        function o(e) {
            let t = e;
            return ('string' == typeof t && (t = r.encode(t)),
            Uint8Array.prototype.toBase64)
                ? t.toBase64({ alphabet: 'base64url', omitPadding: !0 })
                : (function (e) {
                      if (Uint8Array.prototype.toBase64) return e.toBase64();
                      let t = [];
                      for (let r = 0; r < e.length; r += 32768)
                          t.push(
                              String.fromCharCode.apply(
                                  null,
                                  e.subarray(r, r + 32768),
                              ),
                          );
                      return btoa(t.join(''));
                  })(t)
                      .replace(/=/g, '')
                      .replace(/\+/g, '-')
                      .replace(/\//g, '_');
        }
        class c extends Error {
            static code = 'ERR_JOSE_GENERIC';
            code = 'ERR_JOSE_GENERIC';
            constructor(e, t) {
                (super(e, t),
                    (this.name = this.constructor.name),
                    Error.captureStackTrace?.(this, this.constructor));
            }
        }
        class l extends c {
            static code = 'ERR_JWT_CLAIM_VALIDATION_FAILED';
            code = 'ERR_JWT_CLAIM_VALIDATION_FAILED';
            claim;
            reason;
            payload;
            constructor(e, t, r = 'unspecified', a = 'unspecified') {
                (super(e, { cause: { claim: r, reason: a, payload: t } }),
                    (this.claim = r),
                    (this.reason = a),
                    (this.payload = t));
            }
        }
        class d extends c {
            static code = 'ERR_JWT_EXPIRED';
            code = 'ERR_JWT_EXPIRED';
            claim;
            reason;
            payload;
            constructor(e, t, r = 'unspecified', a = 'unspecified') {
                (super(e, { cause: { claim: r, reason: a, payload: t } }),
                    (this.claim = r),
                    (this.reason = a),
                    (this.payload = t));
            }
        }
        class u extends c {
            static code = 'ERR_JOSE_ALG_NOT_ALLOWED';
            code = 'ERR_JOSE_ALG_NOT_ALLOWED';
        }
        class f extends c {
            static code = 'ERR_JOSE_NOT_SUPPORTED';
            code = 'ERR_JOSE_NOT_SUPPORTED';
        }
        class p extends c {
            static code = 'ERR_JWS_INVALID';
            code = 'ERR_JWS_INVALID';
        }
        class h extends c {
            static code = 'ERR_JWT_INVALID';
            code = 'ERR_JWT_INVALID';
        }
        class y extends c {
            [Symbol.asyncIterator];
            static code = 'ERR_JWKS_MULTIPLE_MATCHING_KEYS';
            code = 'ERR_JWKS_MULTIPLE_MATCHING_KEYS';
            constructor(
                e = 'multiple matching keys found in the JSON Web Key Set',
                t,
            ) {
                super(e, t);
            }
        }
        class m extends c {
            static code = 'ERR_JWS_SIGNATURE_VERIFICATION_FAILED';
            code = 'ERR_JWS_SIGNATURE_VERIFICATION_FAILED';
            constructor(e = 'signature verification failed', t) {
                super(e, t);
            }
        }
        let g = (e, t = 'algorithm.name') =>
            TypeError(
                `CryptoKey does not support this operation, its ${t} must be ${e}`,
            );
        function b(e, t) {
            if (parseInt(e.hash.name.slice(4), 10) !== t)
                throw g(`SHA-${t}`, 'algorithm.hash');
        }
        function w(e, t, ...r) {
            if ((r = r.filter(Boolean)).length > 2) {
                let t = r.pop();
                e += `one of type ${r.join(', ')}, or ${t}.`;
            } else
                2 === r.length
                    ? (e += `one of type ${r[0]} or ${r[1]}.`)
                    : (e += `of type ${r[0]}.`);
            return (
                null == t
                    ? (e += ` Received ${t}`)
                    : 'function' == typeof t && t.name
                      ? (e += ` Received function ${t.name}`)
                      : 'object' == typeof t &&
                        null != t &&
                        t.constructor?.name &&
                        (e += ` Received an instance of ${t.constructor.name}`),
                e
            );
        }
        let v = (e, t, ...r) =>
            w(`Key for the ${e} algorithm must be `, t, ...r);
        function S(e, t) {
            if (e.startsWith('RS') || e.startsWith('PS')) {
                let { modulusLength: r } = t.algorithm;
                if ('number' != typeof r || r < 2048)
                    throw TypeError(
                        `${e} requires key modulusLength to be 2048 bits or larger`,
                    );
            }
        }
        function x(e, t) {
            let r = `SHA-${e.slice(-3)}`;
            switch (e) {
                case 'HS256':
                case 'HS384':
                case 'HS512':
                    return { hash: r, name: 'HMAC' };
                case 'PS256':
                case 'PS384':
                case 'PS512':
                    return {
                        hash: r,
                        name: 'RSA-PSS',
                        saltLength: parseInt(e.slice(-3), 10) >> 3,
                    };
                case 'RS256':
                case 'RS384':
                case 'RS512':
                    return { hash: r, name: 'RSASSA-PKCS1-v1_5' };
                case 'ES256':
                case 'ES384':
                case 'ES512':
                    return { hash: r, name: 'ECDSA', namedCurve: t.namedCurve };
                case 'Ed25519':
                case 'EdDSA':
                    return { name: 'Ed25519' };
                case 'ML-DSA-44':
                case 'ML-DSA-65':
                case 'ML-DSA-87':
                    return { name: e };
                default:
                    throw new f(
                        `alg ${e} is not supported either by JOSE or your javascript runtime`,
                    );
            }
        }
        async function k(e, t, r) {
            if (t instanceof Uint8Array) {
                if (!e.startsWith('HS'))
                    throw TypeError(
                        ((e, ...t) => w('Key must be ', e, ...t))(
                            t,
                            'CryptoKey',
                            'KeyObject',
                            'JSON Web Key',
                        ),
                    );
                return crypto.subtle.importKey(
                    'raw',
                    t,
                    { hash: `SHA-${e.slice(-3)}`, name: 'HMAC' },
                    !1,
                    [r],
                );
            }
            return (
                !(function (e, t, r) {
                    switch (t) {
                        case 'HS256':
                        case 'HS384':
                        case 'HS512':
                            if ('HMAC' !== e.algorithm.name) throw g('HMAC');
                            b(e.algorithm, parseInt(t.slice(2), 10));
                            break;
                        case 'RS256':
                        case 'RS384':
                        case 'RS512':
                            if ('RSASSA-PKCS1-v1_5' !== e.algorithm.name)
                                throw g('RSASSA-PKCS1-v1_5');
                            b(e.algorithm, parseInt(t.slice(2), 10));
                            break;
                        case 'PS256':
                        case 'PS384':
                        case 'PS512':
                            if ('RSA-PSS' !== e.algorithm.name)
                                throw g('RSA-PSS');
                            b(e.algorithm, parseInt(t.slice(2), 10));
                            break;
                        case 'Ed25519':
                        case 'EdDSA':
                            if ('Ed25519' !== e.algorithm.name)
                                throw g('Ed25519');
                            break;
                        case 'ML-DSA-44':
                        case 'ML-DSA-65':
                        case 'ML-DSA-87':
                            let a;
                            if (((a = e.algorithm), a.name !== t)) throw g(t);
                            break;
                        case 'ES256':
                        case 'ES384':
                        case 'ES512': {
                            if ('ECDSA' !== e.algorithm.name) throw g('ECDSA');
                            let r = (function (e) {
                                switch (e) {
                                    case 'ES256':
                                        return 'P-256';
                                    case 'ES384':
                                        return 'P-384';
                                    case 'ES512':
                                        return 'P-521';
                                    default:
                                        throw Error('unreachable');
                                }
                            })(t);
                            if (e.algorithm.namedCurve !== r)
                                throw g(r, 'algorithm.namedCurve');
                            break;
                        }
                        default:
                            throw TypeError(
                                'CryptoKey does not support this operation',
                            );
                    }
                    if (r && !e.usages.includes(r))
                        throw TypeError(
                            `CryptoKey does not support this operation, its usages must include ${r}.`,
                        );
                })(t, e, r),
                t
            );
        }
        async function E(e, t, r) {
            let a = await k(e, t, 'sign');
            return (
                S(e, a),
                new Uint8Array(
                    await crypto.subtle.sign(x(e, a.algorithm), a, r),
                )
            );
        }
        async function A(e, t, r, a) {
            let n = await k(e, t, 'verify');
            S(e, n);
            let i = x(e, n.algorithm);
            try {
                return await crypto.subtle.verify(i, n, r, a);
            } catch {
                return !1;
            }
        }
        function j(e) {
            if (
                'object' != typeof e ||
                null === e ||
                '[object Object]' !== Object.prototype.toString.call(e)
            )
                return !1;
            if (null === Object.getPrototypeOf(e)) return !0;
            let t = e;
            for (; null !== Object.getPrototypeOf(t); )
                t = Object.getPrototypeOf(t);
            return Object.getPrototypeOf(e) === t;
        }
        function T(...e) {
            let t,
                r = e.filter(Boolean);
            if (0 === r.length || 1 === r.length) return !0;
            for (let e of r) {
                let r = Object.keys(e);
                if (!t || 0 === t.size) {
                    t = new Set(r);
                    continue;
                }
                for (let e of r) {
                    if (t.has(e)) return !1;
                    t.add(e);
                }
            }
            return !0;
        }
        let C = (e) => j(e) && 'string' == typeof e.kty,
            N = (e) => {
                if (e?.[Symbol.toStringTag] === 'CryptoKey') return !0;
                try {
                    return e instanceof CryptoKey;
                } catch {
                    return !1;
                }
            },
            P = (e) => e?.[Symbol.toStringTag] === 'KeyObject',
            M = (e) => N(e) || P(e),
            O = (e) => e?.[Symbol.toStringTag],
            _ = (e, t, r) => {
                if (void 0 !== t.use) {
                    let e;
                    switch (r) {
                        case 'sign':
                        case 'verify':
                            e = 'sig';
                            break;
                        case 'encrypt':
                        case 'decrypt':
                            e = 'enc';
                    }
                    if (t.use !== e)
                        throw TypeError(
                            `Invalid key for this operation, its "use" must be "${e}" when present`,
                        );
                }
                if (void 0 !== t.alg && t.alg !== e)
                    throw TypeError(
                        `Invalid key for this operation, its "alg" must be "${e}" when present`,
                    );
                if (Array.isArray(t.key_ops)) {
                    let a;
                    switch (!0) {
                        case 'sign' === r || 'verify' === r:
                        case 'dir' === e:
                        case e.includes('CBC-HS'):
                            a = r;
                            break;
                        case e.startsWith('PBES2'):
                            a = 'deriveBits';
                            break;
                        case /^A\d{3}(?:GCM)?(?:KW)?$/.test(e):
                            a =
                                !e.includes('GCM') && e.endsWith('KW')
                                    ? 'encrypt' === r
                                        ? 'wrapKey'
                                        : 'unwrapKey'
                                    : r;
                            break;
                        case 'encrypt' === r && e.startsWith('RSA'):
                            a = 'wrapKey';
                            break;
                        case 'decrypt' === r:
                            a = e.startsWith('RSA')
                                ? 'unwrapKey'
                                : 'deriveBits';
                    }
                    if (a && t.key_ops?.includes?.(a) === !1)
                        throw TypeError(
                            `Invalid key for this operation, its "key_ops" must include "${a}" when present`,
                        );
                }
                return !0;
            };
        function R(e, t, r) {
            switch (e.substring(0, 2)) {
                case 'A1':
                case 'A2':
                case 'di':
                case 'HS':
                case 'PB':
                    ((e, t, r) => {
                        if (!(t instanceof Uint8Array)) {
                            if (C(t)) {
                                if (
                                    'oct' === t.kty &&
                                    'string' == typeof t.k &&
                                    _(e, t, r)
                                )
                                    return;
                                throw TypeError(
                                    'JSON Web Key for symmetric algorithms must have JWK "kty" (Key Type) equal to "oct" and the JWK "k" (Key Value) present',
                                );
                            }
                            if (!M(t))
                                throw TypeError(
                                    v(
                                        e,
                                        t,
                                        'CryptoKey',
                                        'KeyObject',
                                        'JSON Web Key',
                                        'Uint8Array',
                                    ),
                                );
                            if ('secret' !== t.type)
                                throw TypeError(
                                    `${O(t)} instances for symmetric algorithms must be of type "secret"`,
                                );
                        }
                    })(e, t, r);
                    break;
                default:
                    ((e, t, r) => {
                        if (C(t))
                            switch (r) {
                                case 'decrypt':
                                case 'sign':
                                    if (
                                        'oct' !== t.kty &&
                                        (('AKP' === t.kty &&
                                            'string' == typeof t.priv) ||
                                            'string' == typeof t.d) &&
                                        _(e, t, r)
                                    )
                                        return;
                                    throw TypeError(
                                        'JSON Web Key for this operation must be a private JWK',
                                    );
                                case 'encrypt':
                                case 'verify':
                                    if (
                                        'oct' !== t.kty &&
                                        void 0 === t.d &&
                                        void 0 === t.priv &&
                                        _(e, t, r)
                                    )
                                        return;
                                    throw TypeError(
                                        'JSON Web Key for this operation must be a public JWK',
                                    );
                            }
                        if (!M(t))
                            throw TypeError(
                                v(
                                    e,
                                    t,
                                    'CryptoKey',
                                    'KeyObject',
                                    'JSON Web Key',
                                ),
                            );
                        if ('secret' === t.type)
                            throw TypeError(
                                `${O(t)} instances for asymmetric algorithms must not be of type "secret"`,
                            );
                        if ('public' === t.type)
                            switch (r) {
                                case 'sign':
                                    throw TypeError(
                                        `${O(t)} instances for asymmetric algorithm signing must be of type "private"`,
                                    );
                                case 'decrypt':
                                    throw TypeError(
                                        `${O(t)} instances for asymmetric algorithm decryption must be of type "private"`,
                                    );
                            }
                        if ('private' === t.type)
                            switch (r) {
                                case 'verify':
                                    throw TypeError(
                                        `${O(t)} instances for asymmetric algorithm verifying must be of type "public"`,
                                    );
                                case 'encrypt':
                                    throw TypeError(
                                        `${O(t)} instances for asymmetric algorithm encryption must be of type "public"`,
                                    );
                            }
                    })(e, t, r);
            }
        }
        function I(e, t, r, a, n) {
            let i;
            if (void 0 !== n.crit && a?.crit === void 0)
                throw new e(
                    '"crit" (Critical) Header Parameter MUST be integrity protected',
                );
            if (!a || void 0 === a.crit) return new Set();
            if (
                !Array.isArray(a.crit) ||
                0 === a.crit.length ||
                a.crit.some((e) => 'string' != typeof e || 0 === e.length)
            )
                throw new e(
                    '"crit" (Critical) Header Parameter MUST be an array of non-empty strings when present',
                );
            for (let s of ((i =
                void 0 !== r
                    ? new Map([...Object.entries(r), ...t.entries()])
                    : t),
            a.crit)) {
                if (!i.has(s))
                    throw new f(
                        `Extension Header Parameter "${s}" is not recognized`,
                    );
                if (void 0 === n[s])
                    throw new e(`Extension Header Parameter "${s}" is missing`);
                if (i.get(s) && void 0 === a[s])
                    throw new e(
                        `Extension Header Parameter "${s}" MUST be integrity protected`,
                    );
            }
            return new Set(a.crit);
        }
        let H = 'Invalid or unsupported JWK "alg" (Algorithm) Parameter value';
        async function K(e) {
            if (!e.alg)
                throw TypeError(
                    '"alg" argument is required when "jwk.alg" is not present',
                );
            let { algorithm: t, keyUsages: r } = (function (e) {
                    let t, r;
                    switch (e.kty) {
                        case 'AKP':
                            switch (e.alg) {
                                case 'ML-DSA-44':
                                case 'ML-DSA-65':
                                case 'ML-DSA-87':
                                    ((t = { name: e.alg }),
                                        (r = e.priv ? ['sign'] : ['verify']));
                                    break;
                                default:
                                    throw new f(H);
                            }
                            break;
                        case 'RSA':
                            switch (e.alg) {
                                case 'PS256':
                                case 'PS384':
                                case 'PS512':
                                    ((t = {
                                        name: 'RSA-PSS',
                                        hash: `SHA-${e.alg.slice(-3)}`,
                                    }),
                                        (r = e.d ? ['sign'] : ['verify']));
                                    break;
                                case 'RS256':
                                case 'RS384':
                                case 'RS512':
                                    ((t = {
                                        name: 'RSASSA-PKCS1-v1_5',
                                        hash: `SHA-${e.alg.slice(-3)}`,
                                    }),
                                        (r = e.d ? ['sign'] : ['verify']));
                                    break;
                                case 'RSA-OAEP':
                                case 'RSA-OAEP-256':
                                case 'RSA-OAEP-384':
                                case 'RSA-OAEP-512':
                                    ((t = {
                                        name: 'RSA-OAEP',
                                        hash: `SHA-${parseInt(e.alg.slice(-3), 10) || 1}`,
                                    }),
                                        (r = e.d
                                            ? ['decrypt', 'unwrapKey']
                                            : ['encrypt', 'wrapKey']));
                                    break;
                                default:
                                    throw new f(H);
                            }
                            break;
                        case 'EC':
                            switch (e.alg) {
                                case 'ES256':
                                case 'ES384':
                                case 'ES512':
                                    ((t = {
                                        name: 'ECDSA',
                                        namedCurve: {
                                            ES256: 'P-256',
                                            ES384: 'P-384',
                                            ES512: 'P-521',
                                        }[e.alg],
                                    }),
                                        (r = e.d ? ['sign'] : ['verify']));
                                    break;
                                case 'ECDH-ES':
                                case 'ECDH-ES+A128KW':
                                case 'ECDH-ES+A192KW':
                                case 'ECDH-ES+A256KW':
                                    ((t = { name: 'ECDH', namedCurve: e.crv }),
                                        (r = e.d ? ['deriveBits'] : []));
                                    break;
                                default:
                                    throw new f(H);
                            }
                            break;
                        case 'OKP':
                            switch (e.alg) {
                                case 'Ed25519':
                                case 'EdDSA':
                                    ((t = { name: 'Ed25519' }),
                                        (r = e.d ? ['sign'] : ['verify']));
                                    break;
                                case 'ECDH-ES':
                                case 'ECDH-ES+A128KW':
                                case 'ECDH-ES+A192KW':
                                case 'ECDH-ES+A256KW':
                                    ((t = { name: e.crv }),
                                        (r = e.d ? ['deriveBits'] : []));
                                    break;
                                default:
                                    throw new f(H);
                            }
                            break;
                        default:
                            throw new f(
                                'Invalid or unsupported JWK "kty" (Key Type) Parameter value',
                            );
                    }
                    return { algorithm: t, keyUsages: r };
                })(e),
                a = { ...e };
            return (
                'AKP' !== a.kty && delete a.alg,
                delete a.use,
                crypto.subtle.importKey(
                    'jwk',
                    a,
                    t,
                    e.ext ?? (!e.d && !e.priv),
                    e.key_ops ?? r,
                )
            );
        }
        let D = 'given KeyObject instance cannot be used for this algorithm',
            L = async (e, r, a, n = !1) => {
                let i = (t ||= new WeakMap()).get(e);
                if (i?.[a]) return i[a];
                let s = await K({ ...r, alg: a });
                return (
                    n && Object.freeze(e),
                    i ? (i[a] = s) : t.set(e, { [a]: s }),
                    s
                );
            };
        async function W(e, r) {
            if (e instanceof Uint8Array || N(e)) return e;
            if (P(e)) {
                if ('secret' === e.type) return e.export();
                if ('toCryptoKey' in e && 'function' == typeof e.toCryptoKey)
                    try {
                        return ((e, r) => {
                            let a,
                                n = (t ||= new WeakMap()).get(e);
                            if (n?.[r]) return n[r];
                            let i = 'public' === e.type,
                                s = !!i;
                            if ('x25519' === e.asymmetricKeyType) {
                                switch (r) {
                                    case 'ECDH-ES':
                                    case 'ECDH-ES+A128KW':
                                    case 'ECDH-ES+A192KW':
                                    case 'ECDH-ES+A256KW':
                                        break;
                                    default:
                                        throw TypeError(D);
                                }
                                a = e.toCryptoKey(
                                    e.asymmetricKeyType,
                                    s,
                                    i ? [] : ['deriveBits'],
                                );
                            }
                            if ('ed25519' === e.asymmetricKeyType) {
                                if ('EdDSA' !== r && 'Ed25519' !== r)
                                    throw TypeError(D);
                                a = e.toCryptoKey(e.asymmetricKeyType, s, [
                                    i ? 'verify' : 'sign',
                                ]);
                            }
                            switch (e.asymmetricKeyType) {
                                case 'ml-dsa-44':
                                case 'ml-dsa-65':
                                case 'ml-dsa-87':
                                    if (r !== e.asymmetricKeyType.toUpperCase())
                                        throw TypeError(D);
                                    a = e.toCryptoKey(e.asymmetricKeyType, s, [
                                        i ? 'verify' : 'sign',
                                    ]);
                            }
                            if ('rsa' === e.asymmetricKeyType) {
                                let t;
                                switch (r) {
                                    case 'RSA-OAEP':
                                        t = 'SHA-1';
                                        break;
                                    case 'RS256':
                                    case 'PS256':
                                    case 'RSA-OAEP-256':
                                        t = 'SHA-256';
                                        break;
                                    case 'RS384':
                                    case 'PS384':
                                    case 'RSA-OAEP-384':
                                        t = 'SHA-384';
                                        break;
                                    case 'RS512':
                                    case 'PS512':
                                    case 'RSA-OAEP-512':
                                        t = 'SHA-512';
                                        break;
                                    default:
                                        throw TypeError(D);
                                }
                                if (r.startsWith('RSA-OAEP'))
                                    return e.toCryptoKey(
                                        { name: 'RSA-OAEP', hash: t },
                                        s,
                                        i ? ['encrypt'] : ['decrypt'],
                                    );
                                a = e.toCryptoKey(
                                    {
                                        name: r.startsWith('PS')
                                            ? 'RSA-PSS'
                                            : 'RSASSA-PKCS1-v1_5',
                                        hash: t,
                                    },
                                    s,
                                    [i ? 'verify' : 'sign'],
                                );
                            }
                            if ('ec' === e.asymmetricKeyType) {
                                let t = new Map([
                                    ['prime256v1', 'P-256'],
                                    ['secp384r1', 'P-384'],
                                    ['secp521r1', 'P-521'],
                                ]).get(e.asymmetricKeyDetails?.namedCurve);
                                if (!t) throw TypeError(D);
                                let n = {
                                    ES256: 'P-256',
                                    ES384: 'P-384',
                                    ES512: 'P-521',
                                };
                                (n[r] &&
                                    t === n[r] &&
                                    (a = e.toCryptoKey(
                                        { name: 'ECDSA', namedCurve: t },
                                        s,
                                        [i ? 'verify' : 'sign'],
                                    )),
                                    r.startsWith('ECDH-ES') &&
                                        (a = e.toCryptoKey(
                                            { name: 'ECDH', namedCurve: t },
                                            s,
                                            i ? [] : ['deriveBits'],
                                        )));
                            }
                            if (!a) throw TypeError(D);
                            return (n ? (n[r] = a) : t.set(e, { [r]: a }), a);
                        })(e, r);
                    } catch (e) {
                        if (e instanceof TypeError) throw e;
                    }
                let a = e.export({ format: 'jwk' });
                return L(e, a, r);
            }
            if (C(e)) return e.k ? s(e.k) : L(e, e, r, !0);
            throw Error('unreachable');
        }
        function J(e, t) {
            if (e) throw TypeError(`${t} can only be called once`);
        }
        function U(e, t, r) {
            try {
                return s(e);
            } catch {
                throw new r(`Failed to base64url decode the ${t}`);
            }
        }
        Symbol();
        class $ {
            #e;
            #t;
            #r;
            constructor(e) {
                if (!(e instanceof Uint8Array))
                    throw TypeError(
                        'payload must be an instance of Uint8Array',
                    );
                this.#e = e;
            }
            setProtectedHeader(e) {
                return (J(this.#t, 'setProtectedHeader'), (this.#t = e), this);
            }
            setUnprotectedHeader(e) {
                return (
                    J(this.#r, 'setUnprotectedHeader'),
                    (this.#r = e),
                    this
                );
            }
            async sign(e, t) {
                let r, a, s, c;
                if (!this.#t && !this.#r)
                    throw new p(
                        'either setProtectedHeader or setUnprotectedHeader must be called before #sign()',
                    );
                if (!T(this.#t, this.#r))
                    throw new p(
                        'JWS Protected and JWS Unprotected Header Parameter names must be disjoint',
                    );
                let l = { ...this.#t, ...this.#r },
                    d = I(p, new Map([['b64', !0]]), t?.crit, this.#t, l),
                    u = !0;
                if (d.has('b64') && 'boolean' != typeof (u = this.#t.b64))
                    throw new p(
                        'The "b64" (base64url-encode payload) Header Parameter must be a boolean',
                    );
                let { alg: f } = l;
                if ('string' != typeof f || !f)
                    throw new p(
                        'JWS "alg" (Algorithm) Header Parameter missing or invalid',
                    );
                (R(f, e, 'sign'),
                    u ? (a = i((r = o(this.#e)))) : ((a = this.#e), (r = '')),
                    this.#t
                        ? (c = i((s = o(JSON.stringify(this.#t)))))
                        : ((s = ''), (c = new Uint8Array())));
                let h = n(c, i('.'), a),
                    y = await W(e, f),
                    m = { signature: o(await E(f, y, h)), payload: r };
                return (
                    this.#r && (m.header = this.#r),
                    this.#t && (m.protected = s),
                    m
                );
            }
        }
        class B {
            #a;
            constructor(e) {
                this.#a = new $(e);
            }
            setProtectedHeader(e) {
                return (this.#a.setProtectedHeader(e), this);
            }
            async sign(e, t) {
                let r = await this.#a.sign(e, t);
                if (void 0 === r.payload)
                    throw TypeError(
                        'use the flattened module for creating JWS with b64: false',
                    );
                return `${r.protected}.${r.payload}.${r.signature}`;
            }
        }
        let F = (e) => Math.floor(e.getTime() / 1e3),
            z =
                /^(\+|\-)? ?(\d+|\d+\.\d+) ?(seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)(?: (ago|from now))?$/i;
        function q(e) {
            let t,
                r = z.exec(e);
            if (!r || (r[4] && r[1]))
                throw TypeError('Invalid time period format');
            let a = parseFloat(r[2]);
            switch (r[3].toLowerCase()) {
                case 'sec':
                case 'secs':
                case 'second':
                case 'seconds':
                case 's':
                    t = Math.round(a);
                    break;
                case 'minute':
                case 'minutes':
                case 'min':
                case 'mins':
                case 'm':
                    t = Math.round(60 * a);
                    break;
                case 'hour':
                case 'hours':
                case 'hr':
                case 'hrs':
                case 'h':
                    t = Math.round(3600 * a);
                    break;
                case 'day':
                case 'days':
                case 'd':
                    t = Math.round(86400 * a);
                    break;
                case 'week':
                case 'weeks':
                case 'w':
                    t = Math.round(604800 * a);
                    break;
                default:
                    t = Math.round(0x1e187e0 * a);
            }
            return '-' === r[1] || 'ago' === r[4] ? -t : t;
        }
        function V(e, t) {
            if (!Number.isFinite(t)) throw TypeError(`Invalid ${e} input`);
            return t;
        }
        let G = (e) =>
            e.includes('/')
                ? e.toLowerCase()
                : `application/${e.toLowerCase()}`;
        class X {
            #e;
            constructor(e) {
                if (!j(e)) throw TypeError('JWT Claims Set MUST be an object');
                this.#e = structuredClone(e);
            }
            data() {
                return r.encode(JSON.stringify(this.#e));
            }
            get iss() {
                return this.#e.iss;
            }
            set iss(e) {
                this.#e.iss = e;
            }
            get sub() {
                return this.#e.sub;
            }
            set sub(e) {
                this.#e.sub = e;
            }
            get aud() {
                return this.#e.aud;
            }
            set aud(e) {
                this.#e.aud = e;
            }
            set jti(e) {
                this.#e.jti = e;
            }
            set nbf(e) {
                'number' == typeof e
                    ? (this.#e.nbf = V('setNotBefore', e))
                    : e instanceof Date
                      ? (this.#e.nbf = V('setNotBefore', F(e)))
                      : (this.#e.nbf = F(new Date()) + q(e));
            }
            set exp(e) {
                'number' == typeof e
                    ? (this.#e.exp = V('setExpirationTime', e))
                    : e instanceof Date
                      ? (this.#e.exp = V('setExpirationTime', F(e)))
                      : (this.#e.exp = F(new Date()) + q(e));
            }
            set iat(e) {
                void 0 === e
                    ? (this.#e.iat = F(new Date()))
                    : e instanceof Date
                      ? (this.#e.iat = V('setIssuedAt', F(e)))
                      : 'string' == typeof e
                        ? (this.#e.iat = V('setIssuedAt', F(new Date()) + q(e)))
                        : (this.#e.iat = V('setIssuedAt', e));
            }
        }
        class Y {
            #t;
            #n;
            constructor(e = {}) {
                this.#n = new X(e);
            }
            setIssuer(e) {
                return ((this.#n.iss = e), this);
            }
            setSubject(e) {
                return ((this.#n.sub = e), this);
            }
            setAudience(e) {
                return ((this.#n.aud = e), this);
            }
            setJti(e) {
                return ((this.#n.jti = e), this);
            }
            setNotBefore(e) {
                return ((this.#n.nbf = e), this);
            }
            setExpirationTime(e) {
                return ((this.#n.exp = e), this);
            }
            setIssuedAt(e) {
                return ((this.#n.iat = e), this);
            }
            setProtectedHeader(e) {
                return ((this.#t = e), this);
            }
            async sign(e, t) {
                let r = new B(this.#n.data());
                if (
                    (r.setProtectedHeader(this.#t),
                    Array.isArray(this.#t?.crit) &&
                        this.#t.crit.includes('b64') &&
                        !1 === this.#t.b64)
                )
                    throw new h('JWTs MUST NOT use unencoded payload');
                return r.sign(e, t);
            }
        }
        async function Q(e, t, o) {
            if (!j(e)) throw new p('Flattened JWS must be an object');
            if (void 0 === e.protected && void 0 === e.header)
                throw new p(
                    'Flattened JWS must have either of the "protected" or "header" members',
                );
            if (void 0 !== e.protected && 'string' != typeof e.protected)
                throw new p('JWS Protected Header incorrect type');
            if (void 0 === e.payload) throw new p('JWS Payload missing');
            if ('string' != typeof e.signature)
                throw new p('JWS Signature missing or incorrect type');
            if (void 0 !== e.header && !j(e.header))
                throw new p('JWS Unprotected Header incorrect type');
            let c = {};
            if (e.protected)
                try {
                    let t = s(e.protected);
                    c = JSON.parse(a.decode(t));
                } catch {
                    throw new p('JWS Protected Header is invalid');
                }
            if (!T(c, e.header))
                throw new p(
                    'JWS Protected and JWS Unprotected Header Parameter names must be disjoint',
                );
            let l = { ...c, ...e.header },
                d = I(p, new Map([['b64', !0]]), o?.crit, c, l),
                f = !0;
            if (d.has('b64') && 'boolean' != typeof (f = c.b64))
                throw new p(
                    'The "b64" (base64url-encode payload) Header Parameter must be a boolean',
                );
            let { alg: h } = l;
            if ('string' != typeof h || !h)
                throw new p(
                    'JWS "alg" (Algorithm) Header Parameter missing or invalid',
                );
            let y =
                o &&
                (function (e, t) {
                    if (
                        void 0 !== t &&
                        (!Array.isArray(t) ||
                            t.some((e) => 'string' != typeof e))
                    )
                        throw TypeError(
                            `"${e}" option must be an array of strings`,
                        );
                    if (t) return new Set(t);
                })('algorithms', o.algorithms);
            if (y && !y.has(h))
                throw new u(
                    '"alg" (Algorithm) Header Parameter value not allowed',
                );
            if (f) {
                if ('string' != typeof e.payload)
                    throw new p('JWS Payload must be a string');
            } else if (
                'string' != typeof e.payload &&
                !(e.payload instanceof Uint8Array)
            )
                throw new p(
                    'JWS Payload must be a string or an Uint8Array instance',
                );
            let g = !1;
            ('function' == typeof t && ((t = await t(c, e)), (g = !0)),
                R(h, t, 'verify'));
            let b = n(
                    void 0 !== e.protected ? i(e.protected) : new Uint8Array(),
                    i('.'),
                    'string' == typeof e.payload
                        ? f
                            ? i(e.payload)
                            : r.encode(e.payload)
                        : e.payload,
                ),
                w = U(e.signature, 'signature', p),
                v = await W(t, h);
            if (!(await A(h, v, w, b))) throw new m();
            let S = {
                payload: f
                    ? U(e.payload, 'payload', p)
                    : 'string' == typeof e.payload
                      ? r.encode(e.payload)
                      : e.payload,
            };
            return (void 0 !== e.protected && (S.protectedHeader = c),
            void 0 !== e.header && (S.unprotectedHeader = e.header),
            g)
                ? { ...S, key: v }
                : S;
        }
        async function Z(e, t, r) {
            if (
                (e instanceof Uint8Array && (e = a.decode(e)),
                'string' != typeof e)
            )
                throw new p('Compact JWS must be a string or Uint8Array');
            let { 0: n, 1: i, 2: s, length: o } = e.split('.');
            if (3 !== o) throw new p('Invalid Compact JWS');
            let c = await Q({ payload: i, protected: n, signature: s }, t, r),
                l = { payload: c.payload, protectedHeader: c.protectedHeader };
            return 'function' == typeof t ? { ...l, key: c.key } : l;
        }
        async function ee(e, t, r) {
            let n = await Z(e, t, r);
            if (
                n.protectedHeader.crit?.includes('b64') &&
                !1 === n.protectedHeader.b64
            )
                throw new h('JWTs MUST NOT use unencoded payload');
            let i = {
                payload: (function (e, t, r = {}) {
                    var n, i;
                    let s, o;
                    try {
                        s = JSON.parse(a.decode(t));
                    } catch {}
                    if (!j(s))
                        throw new h(
                            'JWT Claims Set must be a top-level JSON object',
                        );
                    let { typ: c } = r;
                    if (c && ('string' != typeof e.typ || G(e.typ) !== G(c)))
                        throw new l(
                            'unexpected "typ" JWT header value',
                            s,
                            'typ',
                            'check_failed',
                        );
                    let {
                            requiredClaims: u = [],
                            issuer: f,
                            subject: p,
                            audience: y,
                            maxTokenAge: m,
                        } = r,
                        g = [...u];
                    for (let e of (void 0 !== m && g.push('iat'),
                    void 0 !== y && g.push('aud'),
                    void 0 !== p && g.push('sub'),
                    void 0 !== f && g.push('iss'),
                    new Set(g.reverse())))
                        if (!(e in s))
                            throw new l(
                                `missing required "${e}" claim`,
                                s,
                                e,
                                'missing',
                            );
                    if (f && !(Array.isArray(f) ? f : [f]).includes(s.iss))
                        throw new l(
                            'unexpected "iss" claim value',
                            s,
                            'iss',
                            'check_failed',
                        );
                    if (p && s.sub !== p)
                        throw new l(
                            'unexpected "sub" claim value',
                            s,
                            'sub',
                            'check_failed',
                        );
                    if (
                        y &&
                        ((n = s.aud),
                        (i = 'string' == typeof y ? [y] : y),
                        'string' == typeof n
                            ? !i.includes(n)
                            : !(
                                  Array.isArray(n) &&
                                  i.some(Set.prototype.has.bind(new Set(n)))
                              ))
                    )
                        throw new l(
                            'unexpected "aud" claim value',
                            s,
                            'aud',
                            'check_failed',
                        );
                    switch (typeof r.clockTolerance) {
                        case 'string':
                            o = q(r.clockTolerance);
                            break;
                        case 'number':
                            o = r.clockTolerance;
                            break;
                        case 'undefined':
                            o = 0;
                            break;
                        default:
                            throw TypeError(
                                'Invalid clockTolerance option type',
                            );
                    }
                    let { currentDate: b } = r,
                        w = F(b || new Date());
                    if ((void 0 !== s.iat || m) && 'number' != typeof s.iat)
                        throw new l(
                            '"iat" claim must be a number',
                            s,
                            'iat',
                            'invalid',
                        );
                    if (void 0 !== s.nbf) {
                        if ('number' != typeof s.nbf)
                            throw new l(
                                '"nbf" claim must be a number',
                                s,
                                'nbf',
                                'invalid',
                            );
                        if (s.nbf > w + o)
                            throw new l(
                                '"nbf" claim timestamp check failed',
                                s,
                                'nbf',
                                'check_failed',
                            );
                    }
                    if (void 0 !== s.exp) {
                        if ('number' != typeof s.exp)
                            throw new l(
                                '"exp" claim must be a number',
                                s,
                                'exp',
                                'invalid',
                            );
                        if (s.exp <= w - o)
                            throw new d(
                                '"exp" claim timestamp check failed',
                                s,
                                'exp',
                                'check_failed',
                            );
                    }
                    if (m) {
                        let e = w - s.iat;
                        if (e - o > ('number' == typeof m ? m : q(m)))
                            throw new d(
                                '"iat" claim timestamp check failed (too far in the past)',
                                s,
                                'iat',
                                'check_failed',
                            );
                        if (e < 0 - o)
                            throw new l(
                                '"iat" claim timestamp check failed (it should be in the past)',
                                s,
                                'iat',
                                'check_failed',
                            );
                    }
                    return s;
                })(n.protectedHeader, n.payload, r),
                protectedHeader: n.protectedHeader,
            };
            return 'function' == typeof t ? { ...i, key: n.key } : i;
        }
        let et =
            '-,pTU6sdpB>K>5)jamIhx3!_m|G7!/E]H#S$jn#s3Oqw#4J4F,OECU&480rg[o_(1?Vjmj}l2Lg515%x(qgmMy';
        async function er() {
            let e = new TextEncoder().encode(et);
            return await new Y({ type: 'lookup' })
                .setProtectedHeader({ alg: 'HS256' })
                .setIssuedAt()
                .setExpirationTime('30m')
                .sign(e);
        }
        async function ea(e) {
            try {
                let t = new TextEncoder().encode(et),
                    { payload: r } = await ee(e, t);
                return { valid: !0, payload: r };
            } catch (e) {
                return { valid: !1, error: e };
            }
        }
        function en(e) {
            return Array.from(btoa(e))
                .map((e) => e.charCodeAt(0).toString(16).padStart(2, '0'))
                .join('')
                .split('')
                .reverse()
                .join('');
        }
        function ei(e) {
            try {
                let t = e.split('').reverse().join(''),
                    r =
                        t
                            .match(/.{1,2}/g)
                            ?.map((e) =>
                                String.fromCharCode(Number.parseInt(e, 16)),
                            )
                            .join('') || '';
                return atob(r);
            } catch {
                return null;
            }
        }
        e.s(
            [
                'decodeToken',
                () => ei,
                'encodeToken',
                () => en,
                'generateToken',
                () => er,
                'verifyToken',
                () => ea,
            ],
            59668,
        );
    },
    90768,
    (e) => {
        'use strict';
        let t = (0, e.i(10965).default)('LoaderCircle', [
            ['path', { d: 'M21 12a9 9 0 1 1-6.219-8.56', key: '13zald' }],
        ]);
        e.s(['Loader2', () => t], 90768);
    },
    15599,
    (e) => {
        'use strict';
        var t = e.i(81061),
            r = e.i(43988),
            a = t[' useId '.trim().toString()] || (() => void 0),
            n = 0;
        function i(e) {
            let [i, s] = t.useState(a());
            return (
                (0, r.useLayoutEffect)(() => {
                    e || s((e) => e ?? String(n++));
                }, [e]),
                e || (i ? `radix-${i}` : '')
            );
        }
        e.s(['useId', () => i]);
    },
    64347,
    (e) => {
        'use strict';
        let t = (0, e.i(10965).default)('ChevronDown', [
            ['path', { d: 'm6 9 6 6 6-6', key: 'qrunsl' }],
        ]);
        e.s(['default', () => t]);
    },
    17625,
    (e) => {
        'use strict';
        let t = (0, e.i(10965).default)('ShieldOff', [
            ['path', { d: 'm2 2 20 20', key: '1ooewy' }],
            [
                'path',
                {
                    d: 'M5 5a1 1 0 0 0-1 1v7c0 5 3.5 7.5 7.67 8.94a1 1 0 0 0 .67.01c2.35-.82 4.48-1.97 5.9-3.71',
                    key: '1jlk70',
                },
            ],
            [
                'path',
                {
                    d: 'M9.309 3.652A12.252 12.252 0 0 0 11.24 2.28a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1v7a9.784 9.784 0 0 1-.08 1.264',
                    key: '18rp1v',
                },
            ],
        ]);
        e.s(['ShieldOff', () => t], 17625);
    },
    23750,
    (e) => {
        'use strict';
        var t = e.i(7156),
            r = e.i(47163);
        function a({ className: e, type: a, ...n }) {
            return (0, t.jsx)('input', {
                type: a,
                'data-slot': 'input',
                className: (0, r.cn)(
                    'file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
                    'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
                    'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive',
                    e,
                ),
                ...n,
            });
        }
        e.s(['Input', () => a]);
    },
    71428,
    (e) => {
        'use strict';
        var t = e.i(7156),
            r = e.i(47163);
        function a({ className: e, ...a }) {
            return (0, t.jsx)('div', {
                'data-slot': 'skeleton',
                className: (0, r.cn)('bg-accent animate-pulse rounded-md', e),
                ...a,
            });
        }
        e.s(['Skeleton', () => a]);
    },
    65739,
    (e) => {
        'use strict';
        let t = (0, e.i(10965).default)('TrendingUp', [
            [
                'polyline',
                { points: '22 7 13.5 15.5 8.5 10.5 2 17', key: '126l90' },
            ],
            ['polyline', { points: '16 7 22 7 22 13', key: 'kwv8wd' }],
        ]);
        e.s(['TrendingUp', () => t], 65739);
    },
    95587,
    43028,
    (e) => {
        'use strict';
        var t = e.i(81061);
        e.i(7156);
        var r = t.createContext(void 0);
        function a(e) {
            let a = t.useContext(r);
            return e || a || 'ltr';
        }
        e.s(['useDirection', () => a], 95587);
        var n = e.i(64347);
        e.s(['ChevronDownIcon', () => n.default], 43028);
    },
    75358,
    (e) => {
        'use strict';
        let t = (0, e.i(10965).default)('ChevronUp', [
            ['path', { d: 'm18 15-6-6-6 6', key: '153udz' }],
        ]);
        e.s(['default', () => t]);
    },
    57276,
    (e) => {
        'use strict';
        let t = (0, e.i(10965).default)('Send', [
            [
                'path',
                {
                    d: 'M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z',
                    key: '1ffxy3',
                },
            ],
            ['path', { d: 'm21.854 2.147-10.94 10.939', key: '12cjpa' }],
        ]);
        e.s(['Send', () => t], 57276);
    },
    46239,
    (e) => {
        e.v((e) => Promise.resolve().then(() => e(59668)));
    },
    15308,
    (e) => {
        e.v((t) =>
            Promise.all(
                ['static/chunks/3f57892836364f4f.js'].map((t) => e.l(t)),
            ).then(() => t(95161)),
        );
    },
]);
