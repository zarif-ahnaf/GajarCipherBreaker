(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
    'object' == typeof document ? document.currentScript : void 0,
    66094,
    (e, t, r) => {
        'use strict';
        function a({
            widthInt: e,
            heightInt: t,
            blurWidth: r,
            blurHeight: a,
            blurDataURL: o,
            objectFit: n,
        }) {
            let i = r ? 40 * r : e,
                s = a ? 40 * a : t,
                l = i && s ? `viewBox='0 0 ${i} ${s}'` : '';
            return `%3Csvg xmlns='http://www.w3.org/2000/svg' ${l}%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='${l ? 'none' : 'contain' === n ? 'xMidYMid' : 'cover' === n ? 'xMidYMid slice' : 'none'}' style='filter: url(%23b);' href='${o}'/%3E%3C/svg%3E`;
        }
        (Object.defineProperty(r, '__esModule', { value: !0 }),
            Object.defineProperty(r, 'getImageBlurSvg', {
                enumerable: !0,
                get: function () {
                    return a;
                },
            }));
    },
    35912,
    (e, t, r) => {
        'use strict';
        Object.defineProperty(r, '__esModule', { value: !0 });
        var a = {
            VALID_LOADERS: function () {
                return n;
            },
            imageConfigDefault: function () {
                return i;
            },
        };
        for (var o in a)
            Object.defineProperty(r, o, { enumerable: !0, get: a[o] });
        let n = ['default', 'imgix', 'cloudinary', 'akamai', 'custom'],
            i = {
                deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
                imageSizes: [32, 48, 64, 96, 128, 256, 384],
                path: '/_next/image',
                loader: 'default',
                loaderFile: '',
                domains: [],
                disableStaticImages: !1,
                minimumCacheTTL: 14400,
                formats: ['image/webp'],
                maximumRedirects: 3,
                dangerouslyAllowLocalIP: !1,
                dangerouslyAllowSVG: !1,
                contentSecurityPolicy:
                    "script-src 'none'; frame-src 'none'; sandbox;",
                contentDispositionType: 'attachment',
                localPatterns: void 0,
                remotePatterns: [],
                qualities: [75],
                unoptimized: !1,
            };
    },
    12309,
    (e, t, r) => {
        'use strict';
        (Object.defineProperty(r, '__esModule', { value: !0 }),
            Object.defineProperty(r, 'getImgProps', {
                enumerable: !0,
                get: function () {
                    return l;
                },
            }),
            e.r(90253));
        let a = e.r(66094),
            o = e.r(35912),
            n = ['-moz-initial', 'fill', 'none', 'scale-down', void 0];
        function i(e) {
            return void 0 !== e.default;
        }
        function s(e) {
            return void 0 === e
                ? e
                : 'number' == typeof e
                  ? Number.isFinite(e)
                      ? e
                      : NaN
                  : 'string' == typeof e && /^[0-9]+$/.test(e)
                    ? parseInt(e, 10)
                    : NaN;
        }
        function l(
            {
                src: e,
                sizes: t,
                unoptimized: r = !1,
                priority: l = !1,
                preload: d = !1,
                loading: c,
                className: u,
                quality: m,
                width: p,
                height: f,
                fill: h = !1,
                style: g,
                overrideSrc: x,
                onLoad: b,
                onLoadingComplete: v,
                placeholder: y = 'empty',
                blurDataURL: w,
                fetchPriority: j,
                decoding: N = 'async',
                layout: k,
                objectFit: C,
                objectPosition: E,
                lazyBoundary: S,
                lazyRoot: _,
                ...P
            },
            I,
        ) {
            var T;
            let A,
                R,
                L,
                {
                    imgConf: O,
                    showAltText: D,
                    blurComplete: z,
                    defaultLoader: B,
                } = I,
                M = O || o.imageConfigDefault;
            if ('allSizes' in M) A = M;
            else {
                let e = [...M.deviceSizes, ...M.imageSizes].sort(
                        (e, t) => e - t,
                    ),
                    t = M.deviceSizes.sort((e, t) => e - t),
                    r = M.qualities?.sort((e, t) => e - t);
                A = { ...M, allSizes: e, deviceSizes: t, qualities: r };
            }
            if (void 0 === B)
                throw Object.defineProperty(
                    Error(
                        'images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config',
                    ),
                    '__NEXT_ERROR_CODE',
                    { value: 'E163', enumerable: !1, configurable: !0 },
                );
            let $ = P.loader || B;
            (delete P.loader, delete P.srcSet);
            let U = '__next_img_default' in $;
            if (U) {
                if ('custom' === A.loader)
                    throw Object.defineProperty(
                        Error(`Image with src "${e}" is missing "loader" prop.
Read more: https://nextjs.org/docs/messages/next-image-missing-loader`),
                        '__NEXT_ERROR_CODE',
                        { value: 'E252', enumerable: !1, configurable: !0 },
                    );
            } else {
                let e = $;
                $ = (t) => {
                    let { config: r, ...a } = t;
                    return e(a);
                };
            }
            if (k) {
                'fill' === k && (h = !0);
                let e = {
                    intrinsic: { maxWidth: '100%', height: 'auto' },
                    responsive: { width: '100%', height: 'auto' },
                }[k];
                e && (g = { ...g, ...e });
                let r = { responsive: '100vw', fill: '100vw' }[k];
                r && !t && (t = r);
            }
            let F = '',
                H = s(p),
                G = s(f);
            if ((T = e) && 'object' == typeof T && (i(T) || void 0 !== T.src)) {
                let t = i(e) ? e.default : e;
                if (!t.src)
                    throw Object.defineProperty(
                        Error(
                            `An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ${JSON.stringify(t)}`,
                        ),
                        '__NEXT_ERROR_CODE',
                        { value: 'E460', enumerable: !1, configurable: !0 },
                    );
                if (!t.height || !t.width)
                    throw Object.defineProperty(
                        Error(
                            `An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ${JSON.stringify(t)}`,
                        ),
                        '__NEXT_ERROR_CODE',
                        { value: 'E48', enumerable: !1, configurable: !0 },
                    );
                if (
                    ((R = t.blurWidth),
                    (L = t.blurHeight),
                    (w = w || t.blurDataURL),
                    (F = t.src),
                    !h)
                )
                    if (H || G) {
                        if (H && !G) {
                            let e = H / t.width;
                            G = Math.round(t.height * e);
                        } else if (!H && G) {
                            let e = G / t.height;
                            H = Math.round(t.width * e);
                        }
                    } else ((H = t.width), (G = t.height));
            }
            let K = !l && !d && ('lazy' === c || void 0 === c);
            ((!(e = 'string' == typeof e ? e : F) ||
                e.startsWith('data:') ||
                e.startsWith('blob:')) &&
                ((r = !0), (K = !1)),
                A.unoptimized && (r = !0),
                U &&
                    !A.dangerouslyAllowSVG &&
                    e.split('?', 1)[0].endsWith('.svg') &&
                    (r = !0));
            let W = s(m),
                q = Object.assign(
                    h
                        ? {
                              position: 'absolute',
                              height: '100%',
                              width: '100%',
                              left: 0,
                              top: 0,
                              right: 0,
                              bottom: 0,
                              objectFit: C,
                              objectPosition: E,
                          }
                        : {},
                    D ? {} : { color: 'transparent' },
                    g,
                ),
                J =
                    z || 'empty' === y
                        ? null
                        : 'blur' === y
                          ? `url("data:image/svg+xml;charset=utf-8,${(0, a.getImageBlurSvg)({ widthInt: H, heightInt: G, blurWidth: R, blurHeight: L, blurDataURL: w || '', objectFit: q.objectFit })}")`
                          : `url("${y}")`,
                X = n.includes(q.objectFit)
                    ? 'fill' === q.objectFit
                        ? '100% 100%'
                        : 'cover'
                    : q.objectFit,
                V = J
                    ? {
                          backgroundSize: X,
                          backgroundPosition: q.objectPosition || '50% 50%',
                          backgroundRepeat: 'no-repeat',
                          backgroundImage: J,
                      }
                    : {},
                Q = (function ({
                    config: e,
                    src: t,
                    unoptimized: r,
                    width: a,
                    quality: o,
                    sizes: n,
                    loader: i,
                }) {
                    if (r) return { src: t, srcSet: void 0, sizes: void 0 };
                    let { widths: s, kind: l } = (function (
                            { deviceSizes: e, allSizes: t },
                            r,
                            a,
                        ) {
                            if (a) {
                                let r = /(^|\s)(1?\d?\d)vw/g,
                                    o = [];
                                for (let e; (e = r.exec(a)); )
                                    o.push(parseInt(e[2]));
                                if (o.length) {
                                    let r = 0.01 * Math.min(...o);
                                    return {
                                        widths: t.filter((t) => t >= e[0] * r),
                                        kind: 'w',
                                    };
                                }
                                return { widths: t, kind: 'w' };
                            }
                            return 'number' != typeof r
                                ? { widths: e, kind: 'w' }
                                : {
                                      widths: [
                                          ...new Set(
                                              [r, 2 * r].map(
                                                  (e) =>
                                                      t.find((t) => t >= e) ||
                                                      t[t.length - 1],
                                              ),
                                          ),
                                      ],
                                      kind: 'x',
                                  };
                        })(e, a, n),
                        d = s.length - 1;
                    return {
                        sizes: n || 'w' !== l ? n : '100vw',
                        srcSet: s
                            .map(
                                (r, a) =>
                                    `${i({ config: e, src: t, quality: o, width: r })} ${'w' === l ? r : a + 1}${l}`,
                            )
                            .join(', '),
                        src: i({ config: e, src: t, quality: o, width: s[d] }),
                    };
                })({
                    config: A,
                    src: e,
                    unoptimized: r,
                    width: H,
                    quality: W,
                    sizes: t,
                    loader: $,
                }),
                Y = K ? 'lazy' : c;
            return {
                props: {
                    ...P,
                    loading: Y,
                    fetchPriority: j,
                    width: H,
                    height: G,
                    decoding: N,
                    className: u,
                    style: { ...q, ...V },
                    sizes: Q.sizes,
                    srcSet: Q.srcSet,
                    src: x || Q.src,
                },
                meta: {
                    unoptimized: r,
                    preload: d || l,
                    placeholder: y,
                    fill: h,
                },
            };
        }
    },
    94503,
    (e, t, r) => {
        'use strict';
        (Object.defineProperty(r, '__esModule', { value: !0 }),
            Object.defineProperty(r, 'default', {
                enumerable: !0,
                get: function () {
                    return s;
                },
            }));
        let a = e.r(81061),
            o = 'undefined' == typeof window,
            n = o ? () => {} : a.useLayoutEffect,
            i = o ? () => {} : a.useEffect;
        function s(e) {
            let { headManager: t, reduceComponentsToState: r } = e;
            function s() {
                if (t && t.mountedInstances) {
                    let e = a.Children.toArray(
                        Array.from(t.mountedInstances).filter(Boolean),
                    );
                    t.updateHead(r(e));
                }
            }
            return (
                o && (t?.mountedInstances?.add(e.children), s()),
                n(
                    () => (
                        t?.mountedInstances?.add(e.children),
                        () => {
                            t?.mountedInstances?.delete(e.children);
                        }
                    ),
                ),
                n(
                    () => (
                        t && (t._pendingUpdate = s),
                        () => {
                            t && (t._pendingUpdate = s);
                        }
                    ),
                ),
                i(
                    () => (
                        t &&
                            t._pendingUpdate &&
                            (t._pendingUpdate(), (t._pendingUpdate = null)),
                        () => {
                            t &&
                                t._pendingUpdate &&
                                (t._pendingUpdate(), (t._pendingUpdate = null));
                        }
                    ),
                ),
                null
            );
        }
    },
    10704,
    (e, t, r) => {
        'use strict';
        Object.defineProperty(r, '__esModule', { value: !0 });
        var a = {
            default: function () {
                return h;
            },
            defaultHead: function () {
                return u;
            },
        };
        for (var o in a)
            Object.defineProperty(r, o, { enumerable: !0, get: a[o] });
        let n = e.r(81258),
            i = e.r(44066),
            s = e.r(7156),
            l = i._(e.r(81061)),
            d = n._(e.r(94503)),
            c = e.r(94636);
        function u() {
            return [
                (0, s.jsx)('meta', { charSet: 'utf-8' }, 'charset'),
                (0, s.jsx)(
                    'meta',
                    { name: 'viewport', content: 'width=device-width' },
                    'viewport',
                ),
            ];
        }
        function m(e, t) {
            return 'string' == typeof t || 'number' == typeof t
                ? e
                : t.type === l.default.Fragment
                  ? e.concat(
                        l.default.Children.toArray(t.props.children).reduce(
                            (e, t) =>
                                'string' == typeof t || 'number' == typeof t
                                    ? e
                                    : e.concat(t),
                            [],
                        ),
                    )
                  : e.concat(t);
        }
        e.r(90253);
        let p = ['name', 'httpEquiv', 'charSet', 'itemProp'];
        function f(e) {
            let t, r, a, o;
            return e
                .reduce(m, [])
                .reverse()
                .concat(u().reverse())
                .filter(
                    ((t = new Set()),
                    (r = new Set()),
                    (a = new Set()),
                    (o = {}),
                    (e) => {
                        let n = !0,
                            i = !1;
                        if (
                            e.key &&
                            'number' != typeof e.key &&
                            e.key.indexOf('$') > 0
                        ) {
                            i = !0;
                            let r = e.key.slice(e.key.indexOf('$') + 1);
                            t.has(r) ? (n = !1) : t.add(r);
                        }
                        switch (e.type) {
                            case 'title':
                            case 'base':
                                r.has(e.type) ? (n = !1) : r.add(e.type);
                                break;
                            case 'meta':
                                for (let t = 0, r = p.length; t < r; t++) {
                                    let r = p[t];
                                    if (e.props.hasOwnProperty(r))
                                        if ('charSet' === r)
                                            a.has(r) ? (n = !1) : a.add(r);
                                        else {
                                            let t = e.props[r],
                                                a = o[r] || new Set();
                                            ('name' !== r || !i) && a.has(t)
                                                ? (n = !1)
                                                : (a.add(t), (o[r] = a));
                                        }
                                }
                        }
                        return n;
                    }),
                )
                .reverse()
                .map((e, t) => {
                    let r = e.key || t;
                    return l.default.cloneElement(e, { key: r });
                });
        }
        let h = function ({ children: e }) {
            let t = (0, l.useContext)(c.HeadManagerContext);
            return (0, s.jsx)(d.default, {
                reduceComponentsToState: f,
                headManager: t,
                children: e,
            });
        };
        ('function' == typeof r.default ||
            ('object' == typeof r.default && null !== r.default)) &&
            void 0 === r.default.__esModule &&
            (Object.defineProperty(r.default, '__esModule', { value: !0 }),
            Object.assign(r.default, r),
            (t.exports = r.default));
    },
    89193,
    (e, t, r) => {
        'use strict';
        (Object.defineProperty(r, '__esModule', { value: !0 }),
            Object.defineProperty(r, 'ImageConfigContext', {
                enumerable: !0,
                get: function () {
                    return n;
                },
            }));
        let a = e.r(81258)._(e.r(81061)),
            o = e.r(35912),
            n = a.default.createContext(o.imageConfigDefault);
    },
    15647,
    (e, t, r) => {
        'use strict';
        (Object.defineProperty(r, '__esModule', { value: !0 }),
            Object.defineProperty(r, 'RouterContext', {
                enumerable: !0,
                get: function () {
                    return a;
                },
            }));
        let a = e.r(81258)._(e.r(81061)).default.createContext(null);
    },
    81088,
    (e, t, r) => {
        'use strict';
        function a(e, t) {
            let r = e || 75;
            return t?.qualities?.length
                ? t.qualities.reduce(
                      (e, t) => (Math.abs(t - r) < Math.abs(e - r) ? t : e),
                      0,
                  )
                : r;
        }
        (Object.defineProperty(r, '__esModule', { value: !0 }),
            Object.defineProperty(r, 'findClosestQuality', {
                enumerable: !0,
                get: function () {
                    return a;
                },
            }));
    },
    35130,
    (e, t, r) => {
        'use strict';
        (Object.defineProperty(r, '__esModule', { value: !0 }),
            Object.defineProperty(r, 'default', {
                enumerable: !0,
                get: function () {
                    return n;
                },
            }));
        let a = e.r(81088);
        function o({ config: e, src: t, width: r, quality: o }) {
            if (
                t.startsWith('/') &&
                t.includes('?') &&
                e.localPatterns?.length === 1 &&
                '**' === e.localPatterns[0].pathname &&
                '' === e.localPatterns[0].search
            )
                throw Object.defineProperty(
                    Error(`Image with src "${t}" is using a query string which is not configured in images.localPatterns.
Read more: https://nextjs.org/docs/messages/next-image-unconfigured-localpatterns`),
                    '__NEXT_ERROR_CODE',
                    { value: 'E871', enumerable: !1, configurable: !0 },
                );
            let n = (0, a.findClosestQuality)(o, e);
            return `${e.path}?url=${encodeURIComponent(t)}&w=${r}&q=${n}${(t.startsWith('/_next/static/media/'), '')}`;
        }
        o.__next_img_default = !0;
        let n = o;
    },
    22284,
    (e, t, r) => {
        'use strict';
        (Object.defineProperty(r, '__esModule', { value: !0 }),
            Object.defineProperty(r, 'Image', {
                enumerable: !0,
                get: function () {
                    return y;
                },
            }));
        let a = e.r(81258),
            o = e.r(44066),
            n = e.r(7156),
            i = o._(e.r(81061)),
            s = a._(e.r(71393)),
            l = a._(e.r(10704)),
            d = e.r(12309),
            c = e.r(35912),
            u = e.r(89193);
        e.r(90253);
        let m = e.r(15647),
            p = a._(e.r(35130)),
            f = e.r(82312),
            h = {
                deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
                imageSizes: [32, 48, 64, 96, 128, 256, 384],
                qualities: [75],
                path: '/_next/image',
                loader: 'default',
                dangerouslyAllowSVG: !1,
                unoptimized: !0,
            };
        function g(e, t, r, a, o, n, i) {
            let s = e?.src;
            e &&
                e['data-loaded-src'] !== s &&
                ((e['data-loaded-src'] = s),
                ('decode' in e ? e.decode() : Promise.resolve())
                    .catch(() => {})
                    .then(() => {
                        if (e.parentElement && e.isConnected) {
                            if (('empty' !== t && o(!0), r?.current)) {
                                let t = new Event('load');
                                Object.defineProperty(t, 'target', {
                                    writable: !1,
                                    value: e,
                                });
                                let a = !1,
                                    o = !1;
                                r.current({
                                    ...t,
                                    nativeEvent: t,
                                    currentTarget: e,
                                    target: e,
                                    isDefaultPrevented: () => a,
                                    isPropagationStopped: () => o,
                                    persist: () => {},
                                    preventDefault: () => {
                                        ((a = !0), t.preventDefault());
                                    },
                                    stopPropagation: () => {
                                        ((o = !0), t.stopPropagation());
                                    },
                                });
                            }
                            a?.current && a.current(e);
                        }
                    }));
        }
        function x(e) {
            return i.use ? { fetchPriority: e } : { fetchpriority: e };
        }
        'undefined' == typeof window && (globalThis.__NEXT_IMAGE_IMPORTED = !0);
        let b = (0, i.forwardRef)(
            (
                {
                    src: e,
                    srcSet: t,
                    sizes: r,
                    height: a,
                    width: o,
                    decoding: s,
                    className: l,
                    style: d,
                    fetchPriority: c,
                    placeholder: u,
                    loading: m,
                    unoptimized: p,
                    fill: h,
                    onLoadRef: b,
                    onLoadingCompleteRef: v,
                    setBlurComplete: y,
                    setShowAltText: w,
                    sizesInput: j,
                    onLoad: N,
                    onError: k,
                    ...C
                },
                E,
            ) => {
                let S = (0, i.useCallback)(
                        (e) => {
                            e &&
                                (k && (e.src = e.src),
                                e.complete && g(e, u, b, v, y, p, j));
                        },
                        [e, u, b, v, y, k, p, j],
                    ),
                    _ = (0, f.useMergedRef)(E, S);
                return (0, n.jsx)('img', {
                    ...C,
                    ...x(c),
                    loading: m,
                    width: o,
                    height: a,
                    decoding: s,
                    'data-nimg': h ? 'fill' : '1',
                    className: l,
                    style: d,
                    sizes: r,
                    srcSet: t,
                    src: e,
                    ref: _,
                    onLoad: (e) => {
                        g(e.currentTarget, u, b, v, y, p, j);
                    },
                    onError: (e) => {
                        (w(!0), 'empty' !== u && y(!0), k && k(e));
                    },
                });
            },
        );
        function v({ isAppRouter: e, imgAttributes: t }) {
            let r = {
                as: 'image',
                imageSrcSet: t.srcSet,
                imageSizes: t.sizes,
                crossOrigin: t.crossOrigin,
                referrerPolicy: t.referrerPolicy,
                ...x(t.fetchPriority),
            };
            return e && s.default.preload
                ? (s.default.preload(t.src, r), null)
                : (0, n.jsx)(l.default, {
                      children: (0, n.jsx)(
                          'link',
                          {
                              rel: 'preload',
                              href: t.srcSet ? void 0 : t.src,
                              ...r,
                          },
                          '__nimg-' + t.src + t.srcSet + t.sizes,
                      ),
                  });
        }
        let y = (0, i.forwardRef)((e, t) => {
            let r = (0, i.useContext)(m.RouterContext),
                a = (0, i.useContext)(u.ImageConfigContext),
                o = (0, i.useMemo)(() => {
                    let e = h || a || c.imageConfigDefault,
                        t = [...e.deviceSizes, ...e.imageSizes].sort(
                            (e, t) => e - t,
                        ),
                        r = e.deviceSizes.sort((e, t) => e - t),
                        o = e.qualities?.sort((e, t) => e - t);
                    return {
                        ...e,
                        allSizes: t,
                        deviceSizes: r,
                        qualities: o,
                        localPatterns:
                            'undefined' == typeof window
                                ? a?.localPatterns
                                : e.localPatterns,
                    };
                }, [a]),
                { onLoad: s, onLoadingComplete: l } = e,
                f = (0, i.useRef)(s);
            (0, i.useEffect)(() => {
                f.current = s;
            }, [s]);
            let g = (0, i.useRef)(l);
            (0, i.useEffect)(() => {
                g.current = l;
            }, [l]);
            let [x, y] = (0, i.useState)(!1),
                [w, j] = (0, i.useState)(!1),
                { props: N, meta: k } = (0, d.getImgProps)(e, {
                    defaultLoader: p.default,
                    imgConf: o,
                    blurComplete: x,
                    showAltText: w,
                });
            return (0, n.jsxs)(n.Fragment, {
                children: [
                    (0, n.jsx)(b, {
                        ...N,
                        unoptimized: k.unoptimized,
                        placeholder: k.placeholder,
                        fill: k.fill,
                        onLoadRef: f,
                        onLoadingCompleteRef: g,
                        setBlurComplete: y,
                        setShowAltText: j,
                        sizesInput: e.sizes,
                        ref: t,
                    }),
                    k.preload
                        ? (0, n.jsx)(v, { isAppRouter: !r, imgAttributes: N })
                        : null,
                ],
            });
        });
        ('function' == typeof r.default ||
            ('object' == typeof r.default && null !== r.default)) &&
            void 0 === r.default.__esModule &&
            (Object.defineProperty(r.default, '__esModule', { value: !0 }),
            Object.assign(r.default, r),
            (t.exports = r.default));
    },
    76153,
    (e, t, r) => {
        'use strict';
        Object.defineProperty(r, '__esModule', { value: !0 });
        var a = {
            default: function () {
                return c;
            },
            getImageProps: function () {
                return d;
            },
        };
        for (var o in a)
            Object.defineProperty(r, o, { enumerable: !0, get: a[o] });
        let n = e.r(81258),
            i = e.r(12309),
            s = e.r(22284),
            l = n._(e.r(35130));
        function d(e) {
            let { props: t } = (0, i.getImgProps)(e, {
                defaultLoader: l.default,
                imgConf: {
                    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
                    imageSizes: [32, 48, 64, 96, 128, 256, 384],
                    qualities: [75],
                    path: '/_next/image',
                    loader: 'default',
                    dangerouslyAllowSVG: !1,
                    unoptimized: !0,
                },
            });
            for (let [e, r] of Object.entries(t)) void 0 === r && delete t[e];
            return { props: t };
        }
        let c = s.Image;
    },
    80987,
    (e, t, r) => {
        t.exports = e.r(76153);
    },
    24320,
    (e, t, r) => {
        t.exports = e.r(64595);
    },
    26791,
    (e) => {
        'use strict';
        var t = e.i(7156),
            r = e.i(81061),
            a = e.i(5576),
            o = e.i(34290),
            n = e.i(13637),
            i = e.i(74041),
            s = e.i(90768),
            l = e.i(17625),
            d = e.i(94535),
            c = e.i(67881),
            u = e.i(23750),
            m = e.i(70065),
            p = e.i(71428),
            f = e.i(20682),
            h = e.i(50661),
            g = e.i(47163),
            x = e.i(83774),
            b = e.i(80987),
            v = e.i(24320),
            y = e.i(71162);
        function w() {
            let [w, N] = (0, r.useState)(''),
                [k, C] = (0, r.useState)(!1),
                [E, S] = (0, r.useState)(null),
                [_, P] = (0, r.useState)(null),
                [I, T] = (0, r.useState)(null),
                [A, R] = (0, r.useState)(!1),
                { toast: L } = (0, f.useToast)(),
                { t: O } = (0, h.useLanguage)(),
                { isBlocked: D, isChecking: z } = (0, d.useIPBlock)();
            ((0, r.useEffect)(() => {
                (async () => {
                    try {
                        let e = await x.tokenManager.getToken();
                        e && (P(e), R(!1));
                    } catch (e) {
                        R(!0);
                    }
                })();
                let e = new URLSearchParams(window.location.search).get(
                    'number',
                );
                e && N(e);
            }, []),
                (0, r.useEffect)(() => {
                    let e = setInterval(() => {
                        T(x.tokenManager.getTokenTimeRemaining());
                    }, 1e3);
                    return () => clearInterval(e);
                }, []),
                (0, r.useEffect)(() => {
                    if (_ && !k) {
                        let e = new URLSearchParams(window.location.search).get(
                            'number',
                        );
                        e && M(e);
                    }
                }, [_]),
                (0, r.useEffect)(() => {
                    let e = (e) => {
                        let { number: t } = e.detail;
                        t && _ && (N(t), M(t));
                    };
                    return (
                        window.addEventListener('triggerLookup', e),
                        () => window.removeEventListener('triggerLookup', e)
                    );
                }, [_]));
            let B = async (e) => {
                    try {
                        let t = (0, y.getClientInfo)();
                        (await Promise.all([
                            fetch('/api/track-lookup', {
                                method: 'POST',
                                headers: { 'Content-Type': 'application/json' },
                                body: JSON.stringify({ type: e }),
                            }),
                            fetch('/api/analytics/track', {
                                method: 'POST',
                                headers: { 'Content-Type': 'application/json' },
                                body: JSON.stringify({
                                    sessionId: (0, y.generateSessionId)(),
                                    eventType: e,
                                    metadata: {
                                        referrer: t.referrer,
                                        utmSource: t.utmParams.utm_source,
                                        utmMedium: t.utmParams.utm_medium,
                                        utmCampaign: t.utmParams.utm_campaign,
                                        utmTerm: t.utmParams.utm_term,
                                        utmContent: t.utmParams.utm_content,
                                        device: t.device,
                                        browser: t.browser,
                                        os: t.os,
                                    },
                                }),
                            }),
                        ]),
                            window.dispatchEvent(
                                new Event('lookupCountUpdated'),
                            ));
                    } catch (e) {
                        console.error('Failed to track lookup:', e);
                    }
                },
                M = async (t) => {
                    let r = (0, g.parsePhoneNumber)(t || w);
                    if ((N(r), !/^01[3-9][0-9]{8}$/.test(r))) {
                        (L({
                            title: O('toastInvalidNum'),
                            variant: 'destructive',
                        }),
                            await B('fail'));
                        return;
                    }
                    let a = _;
                    if (!a && !A) {
                        let e = await x.tokenManager.getToken();
                        e && ((a = e), P(e));
                    }
                    if (x.tokenManager.isTokenExpiringSoon()) {
                        let e = await x.tokenManager.refreshTokenIfNeeded();
                        e && ((a = e), P(e));
                    }
                    if (!a) {
                        (L({
                            title: O('toastTokenError'),
                            variant: 'destructive',
                        }),
                            await B('fail'));
                        return;
                    }
                    (C(!0), S(null));
                    let { decodeToken: o } = await e.A(46239),
                        n = o(a);
                    if (!n) {
                        (L({
                            title: O('toastTokenError'),
                            variant: 'destructive',
                        }),
                            C(!1),
                            await B('fail'));
                        return;
                    }
                    try {
                        let t = new URLSearchParams({
                            number: r,
                            token: n,
                            ref: 'REQUEST_FORM_REACT_APP',
                            referer: document.referrer || 'direct',
                            ua: navigator.userAgent,
                            lang: navigator.language,
                        });
                        (window.Telegram?.WebApp?.initData &&
                            t.append(
                                'tgWebAppData',
                                window.Telegram.WebApp.initData,
                            ),
                            navigator.connection &&
                                navigator.connection.type &&
                                t.append('conn', navigator.connection.type));
                        let a = new URLSearchParams(window.location.search);
                        [
                            'utm_source',
                            'utm_medium',
                            'utm_campaign',
                            'utm_term',
                            'utm_content',
                        ].forEach((e) => {
                            let r = a.get(e);
                            r && t.append(e, r);
                        });
                        let o = a.get('referer');
                        o && t.set('referer', o);
                        let i = Date.now(),
                            s = navigator.userAgent.substring(0, 32),
                            { generateSecureRequestSignature: l } =
                                await e.A(15308),
                            d = await l({
                                number: r,
                                token: n,
                                timestamp: i,
                                fingerprint: s,
                            }),
                            c = new URLSearchParams({
                                number: r,
                                token: n,
                                ts: i.toString(),
                                fp: s,
                                sig: d,
                                ref: 'REQUEST_FORM_REACT_APP',
                                referer: document.referrer || 'direct',
                            });
                        if (window.Telegram?.WebApp?.initData) {
                            let e = window.Telegram.WebApp.initData;
                            e && c.append('tgWebAppData', e);
                        }
                        [
                            'utm_source',
                            'utm_medium',
                            'utm_campaign',
                            'utm_term',
                            'utm_content',
                        ].forEach((e) => {
                            let t = a.get(e);
                            t && c.append(e, t);
                        });
                        let u = a.get('referer');
                        u && c.set('referer', u);
                        let m = await fetch('/api/lookup?' + c.toString(), {
                            method: 'GET',
                            headers: {
                                Authorization: `Bearer ${n}`,
                                'Content-Type': 'application/json',
                            },
                        });
                        if (!m.ok) throw Error(`API Error: ${m.status}`);
                        let p = await m.json();
                        if (p.success && p.data) {
                            let t,
                                { decryptApiResponse: a } = await e.A(15308);
                            try {
                                t = await a(p.data);
                            } catch (e) {
                                throw Error(
                                    'Failed to decrypt API response: ' +
                                        (e instanceof Error
                                            ? e.message
                                            : 'Unknown error'),
                                );
                            }
                            (S(t), $(r), await B('success'));
                            let o = new URL(window.location.href);
                            (o.searchParams.set('number', r),
                                window.history.pushState({ number: r }, '', o),
                                (document.title = `Details for ${r} | BD Number Lookup & API by gajarbotol`));
                            let n = document.querySelector(
                                'meta[name="description"]',
                            );
                            n &&
                                n.setAttribute(
                                    'content',
                                    `Find operator, location, and other details for the Bangladeshi mobile number ${r}. Free lookup tool and developer API by gajarbotol.`,
                                );
                        } else throw Error(p.message || 'Invalid API response');
                    } catch (e) {
                        (await B('fail'),
                            L({
                                title: e.message || O('toastFetchError'),
                                variant: 'destructive',
                            }));
                    } finally {
                        C(!1);
                    }
                },
                $ = (e) => {
                    let t = JSON.parse(
                        localStorage.getItem('bdNumLookupHistory') || '[]',
                    ).filter((t) => t !== e);
                    (t.unshift(e),
                        t.length > 5 && t.pop(),
                        localStorage.setItem(
                            'bdNumLookupHistory',
                            JSON.stringify(t),
                        ),
                        window.dispatchEvent(new Event('historyUpdated')));
                },
                U = w.substring(0, 3);
            return (
                g.operatorData[U],
                (0, t.jsxs)(m.Card, {
                    id: 'tool',
                    className:
                        'group border-border/50 bg-card/50 backdrop-blur transition-all duration-500 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5',
                    children: [
                        (0, t.jsx)(m.CardHeader, {
                            children: (0, t.jsx)(m.CardTitle, {
                                className:
                                    'text-balance text-center text-2xl md:text-3xl',
                                children: O('mainHeader'),
                            }),
                        }),
                        (0, t.jsxs)(m.CardContent, {
                            className: 'space-y-6',
                            children: [
                                D &&
                                    (0, t.jsxs)('div', {
                                        className:
                                            'flex flex-col items-center gap-3 rounded-lg border border-destructive/30 bg-destructive/5 p-6 text-center',
                                        children: [
                                            (0, t.jsx)(l.ShieldOff, {
                                                className:
                                                    'h-10 w-10 text-destructive/70',
                                                'aria-hidden': 'true',
                                            }),
                                            (0, t.jsx)('p', {
                                                className:
                                                    'font-semibold text-destructive',
                                                children: 'Lookup Unavailable',
                                            }),
                                            (0, t.jsx)('p', {
                                                className:
                                                    'text-sm text-muted-foreground',
                                                children:
                                                    'Access to this tool has been restricted for your IP address due to unusual activity. Please try again later or contact the administrator.',
                                            }),
                                        ],
                                    }),
                                !D &&
                                    (0, t.jsxs)(t.Fragment, {
                                        children: [
                                            (0, t.jsxs)('div', {
                                                className: 'space-y-3',
                                                children: [
                                                    (0, t.jsxs)('div', {
                                                        className:
                                                            'relative group/input',
                                                        children: [
                                                            (0, t.jsx)('div', {
                                                                className:
                                                                    'absolute -inset-0.5 rounded-lg bg-gradient-to-r from-primary via-primary/50 to-primary/0 opacity-0 blur transition duration-500 group-hover/input:opacity-100',
                                                            }),
                                                            (0, t.jsx)(
                                                                u.Input,
                                                                {
                                                                    type: 'tel',
                                                                    inputMode:
                                                                        'numeric',
                                                                    placeholder:
                                                                        O(
                                                                            'numberPlaceholder',
                                                                        ),
                                                                    value: w,
                                                                    onChange: (
                                                                        e,
                                                                    ) =>
                                                                        N(
                                                                            e
                                                                                .target
                                                                                .value,
                                                                        ),
                                                                    onKeyDown: (
                                                                        e,
                                                                    ) =>
                                                                        'Enter' ===
                                                                            e.key &&
                                                                        M(),
                                                                    maxLength: 14,
                                                                    className:
                                                                        'relative h-12 pr-20 text-base transition-all duration-300 focus:scale-[1.02]',
                                                                    'aria-label':
                                                                        'Bangladeshi Mobile Number Input',
                                                                },
                                                            ),
                                                            g.operatorData[
                                                                w.substring(
                                                                    0,
                                                                    3,
                                                                )
                                                            ] &&
                                                                (0, t.jsx)(
                                                                    'div',
                                                                    {
                                                                        className:
                                                                            'pointer-events-none absolute right-10 top-1/2 -translate-y-1/2 animate-scale-bounce',
                                                                        children:
                                                                            (0,
                                                                            t.jsx)(
                                                                                b.default,
                                                                                {
                                                                                    src:
                                                                                        g
                                                                                            .operatorData[
                                                                                            w.substring(
                                                                                                0,
                                                                                                3,
                                                                                            )
                                                                                        ]
                                                                                            ?.logo ||
                                                                                        '/placeholder.svg',
                                                                                    alt: g
                                                                                        .operatorData[
                                                                                        w.substring(
                                                                                            0,
                                                                                            3,
                                                                                        )
                                                                                    ]
                                                                                        ?.name,
                                                                                    width: 24,
                                                                                    height: 24,
                                                                                    className:
                                                                                        'h-6 w-auto',
                                                                                },
                                                                            ),
                                                                    },
                                                                ),
                                                            w &&
                                                                (0, t.jsx)(
                                                                    c.Button,
                                                                    {
                                                                        variant:
                                                                            'ghost',
                                                                        size: 'icon',
                                                                        className:
                                                                            'absolute right-1 top-1/2 h-10 w-10 -translate-y-1/2 transition-all duration-300 hover:rotate-90 hover:scale-110',
                                                                        onClick:
                                                                            () =>
                                                                                N(
                                                                                    '',
                                                                                ),
                                                                        children:
                                                                            (0,
                                                                            t.jsx)(
                                                                                o.X,
                                                                                {
                                                                                    className:
                                                                                        'h-4 w-4',
                                                                                },
                                                                            ),
                                                                    },
                                                                ),
                                                        ],
                                                    }),
                                                    (0, t.jsxs)(c.Button, {
                                                        onClick: () => M(),
                                                        disabled: k,
                                                        className:
                                                            'relative h-12 w-full overflow-hidden text-base transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/25',
                                                        size: 'lg',
                                                        children: [
                                                            (0, t.jsx)('div', {
                                                                className:
                                                                    'absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-primary opacity-0 transition-opacity duration-500 group-hover:opacity-100 animate-gradient',
                                                            }),
                                                            (0, t.jsx)('span', {
                                                                className:
                                                                    'relative flex items-center justify-center gap-2',
                                                                children: k
                                                                    ? (0,
                                                                      t.jsxs)(
                                                                          t.Fragment,
                                                                          {
                                                                              children:
                                                                                  [
                                                                                      (0,
                                                                                      t.jsx)(
                                                                                          s.Loader2,
                                                                                          {
                                                                                              className:
                                                                                                  'h-5 w-5 animate-spin',
                                                                                          },
                                                                                      ),
                                                                                      O(
                                                                                          'lookupBtnLoading',
                                                                                      ),
                                                                                  ],
                                                                          },
                                                                      )
                                                                    : (0,
                                                                      t.jsxs)(
                                                                          t.Fragment,
                                                                          {
                                                                              children:
                                                                                  [
                                                                                      (0,
                                                                                      t.jsx)(
                                                                                          a.Search,
                                                                                          {
                                                                                              className:
                                                                                                  'h-5 w-5 transition-transform duration-300 group-hover:scale-110',
                                                                                          },
                                                                                      ),
                                                                                      O(
                                                                                          'lookupBtn',
                                                                                      ),
                                                                                  ],
                                                                          },
                                                                      ),
                                                            }),
                                                        ],
                                                    }),
                                                ],
                                            }),
                                            k &&
                                                (0, t.jsx)('div', {
                                                    className:
                                                        'animate-fade-in space-y-3 rounded-lg border border-border/50 bg-muted/20 p-4 backdrop-blur',
                                                    children: (0, t.jsx)(
                                                        'div',
                                                        {
                                                            className:
                                                                'space-y-3',
                                                            children: [
                                                                void 0,
                                                                void 0,
                                                                void 0,
                                                                void 0,
                                                            ].map((e, r) =>
                                                                (0, t.jsxs)(
                                                                    'div',
                                                                    {
                                                                        className:
                                                                            'relative overflow-hidden',
                                                                        children:
                                                                            [
                                                                                (0,
                                                                                t.jsx)(
                                                                                    p.Skeleton,
                                                                                    {
                                                                                        className:
                                                                                            'h-6 w-full',
                                                                                        style: {
                                                                                            width: `${30 * Math.random() + 60}%`,
                                                                                        },
                                                                                    },
                                                                                ),
                                                                                (0,
                                                                                t.jsx)(
                                                                                    'div',
                                                                                    {
                                                                                        className:
                                                                                            'absolute inset-0 animate-shimmer',
                                                                                    },
                                                                                ),
                                                                            ],
                                                                    },
                                                                    r,
                                                                ),
                                                            ),
                                                        },
                                                    ),
                                                }),
                                            E &&
                                                !k &&
                                                (0, t.jsxs)('div', {
                                                    className:
                                                        'animate-fade-in space-y-4',
                                                    children: [
                                                        (0, t.jsxs)('div', {
                                                            className:
                                                                'space-y-3 rounded-lg border border-primary/20 bg-gradient-to-br from-muted/40 to-muted/20 p-4 shadow-lg shadow-primary/5 backdrop-blur transition-all duration-500 hover:shadow-xl hover:shadow-primary/10',
                                                            children: [
                                                                (0, t.jsx)(j, {
                                                                    label: O(
                                                                        'labelName',
                                                                    ),
                                                                    value: E.name,
                                                                    delay: 0,
                                                                }),
                                                                (0, t.jsx)(j, {
                                                                    label: O(
                                                                        'labelNumber',
                                                                    ),
                                                                    value: E.number,
                                                                    delay: 100,
                                                                }),
                                                                (0, t.jsx)(j, {
                                                                    label: O(
                                                                        'labelCarrier',
                                                                    ),
                                                                    value: `${E.carrier} (${E.carrier_code})`,
                                                                    logo: g
                                                                        .operatorData[
                                                                        E
                                                                            .carrier_code
                                                                    ]?.logo,
                                                                    delay: 200,
                                                                }),
                                                                (0, t.jsx)(j, {
                                                                    label: O(
                                                                        'labelLocation',
                                                                    ),
                                                                    value: E.location,
                                                                    delay: 300,
                                                                }),
                                                                (0, t.jsx)(j, {
                                                                    label: O(
                                                                        'labelType',
                                                                    ),
                                                                    value: E.type,
                                                                    delay: 400,
                                                                }),
                                                                (0, t.jsxs)(
                                                                    'div',
                                                                    {
                                                                        className:
                                                                            'pt-2 text-center text-xs text-muted-foreground',
                                                                        children:
                                                                            [
                                                                                O(
                                                                                    'developerCredit',
                                                                                ),
                                                                                ' ',
                                                                                (0,
                                                                                t.jsx)(
                                                                                    'a',
                                                                                    {
                                                                                        href: 'https://t.me/Gajarbotol',
                                                                                        target: '_blank',
                                                                                        rel: 'noopener noreferrer',
                                                                                        className:
                                                                                            'font-semibold text-primary transition-all duration-300 hover:underline hover:underline-offset-4',
                                                                                        children:
                                                                                            'GAJARBOTOL',
                                                                                    },
                                                                                ),
                                                                            ],
                                                                    },
                                                                ),
                                                            ],
                                                        }),
                                                        (0, t.jsx)('div', {
                                                            className:
                                                                'flex flex-wrap gap-2',
                                                            children: [
                                                                {
                                                                    icon: i.Copy,
                                                                    label: O(
                                                                        'copyBtn',
                                                                    ),
                                                                    onClick:
                                                                        () => {
                                                                            if (
                                                                                !E
                                                                            )
                                                                                return;
                                                                            let e = `Name: ${E.name}
Number: ${E.number}
Carrier: ${E.carrier} (${E.carrier_code})
Location: ${E.location}
Type: ${E.type}`;
                                                                            navigator.clipboard
                                                                                .writeText(
                                                                                    e,
                                                                                )
                                                                                .then(
                                                                                    () =>
                                                                                        L(
                                                                                            {
                                                                                                title: O(
                                                                                                    'toastCopied',
                                                                                                ),
                                                                                            },
                                                                                        ),
                                                                                    () =>
                                                                                        L(
                                                                                            {
                                                                                                title: O(
                                                                                                    'toastCopyFailed',
                                                                                                ),
                                                                                                variant:
                                                                                                    'destructive',
                                                                                            },
                                                                                        ),
                                                                                );
                                                                        },
                                                                },
                                                                {
                                                                    icon: null,
                                                                    label: '💬 WhatsApp',
                                                                    href: `https://wa.me/${E.international_format.replace(/[^0-9]/g, '')}`,
                                                                },
                                                                {
                                                                    icon: null,
                                                                    label: '✈️ Telegram',
                                                                    href: `https://t.me/+${E.international_format.replace(/[^0-9]/g, '')}`,
                                                                },
                                                                {
                                                                    icon: n.Download,
                                                                    label: O(
                                                                        'downloadBtn',
                                                                    ),
                                                                    onClick:
                                                                        () => {
                                                                            if (
                                                                                !E
                                                                            )
                                                                                return;
                                                                            let e =
                                                                                    new Blob(
                                                                                        [
                                                                                            `Name: ${E.name}
Number: ${E.number}
Carrier: ${E.carrier} (${E.carrier_code})
Location: ${E.location}
Type: ${E.type}`,
                                                                                        ],
                                                                                        {
                                                                                            type: 'text/plain',
                                                                                        },
                                                                                    ),
                                                                                t =
                                                                                    URL.createObjectURL(
                                                                                        e,
                                                                                    ),
                                                                                r =
                                                                                    document.createElement(
                                                                                        'a',
                                                                                    );
                                                                            ((r.href =
                                                                                t),
                                                                                (r.download = `lookup-${w}.txt`),
                                                                                document.body.appendChild(
                                                                                    r,
                                                                                ),
                                                                                r.click(),
                                                                                document.body.removeChild(
                                                                                    r,
                                                                                ),
                                                                                URL.revokeObjectURL(
                                                                                    t,
                                                                                ));
                                                                        },
                                                                },
                                                            ].map((e, r) =>
                                                                (0, t.jsx)(
                                                                    c.Button,
                                                                    {
                                                                        variant:
                                                                            'outline',
                                                                        size: 'sm',
                                                                        onClick:
                                                                            e.onClick,
                                                                        asChild:
                                                                            !!e.href,
                                                                        className:
                                                                            'flex-1 bg-transparent transition-all duration-300 hover:scale-105 hover:border-primary/50 hover:bg-primary/5 hover:shadow-md',
                                                                        style: {
                                                                            animationDelay: `${100 * r}ms`,
                                                                        },
                                                                        children:
                                                                            e.href
                                                                                ? (0,
                                                                                  t.jsxs)(
                                                                                      'a',
                                                                                      {
                                                                                          href: e.href,
                                                                                          target: '_blank',
                                                                                          rel: 'noopener noreferrer',
                                                                                          children:
                                                                                              [
                                                                                                  e.icon &&
                                                                                                      (0,
                                                                                                      t.jsx)(
                                                                                                          e.icon,
                                                                                                          {
                                                                                                              className:
                                                                                                                  'mr-2 h-4 w-4',
                                                                                                          },
                                                                                                      ),
                                                                                                  e.label,
                                                                                              ],
                                                                                      },
                                                                                  )
                                                                                : (0,
                                                                                  t.jsxs)(
                                                                                      t.Fragment,
                                                                                      {
                                                                                          children:
                                                                                              [
                                                                                                  e.icon &&
                                                                                                      (0,
                                                                                                      t.jsx)(
                                                                                                          e.icon,
                                                                                                          {
                                                                                                              className:
                                                                                                                  'mr-2 h-4 w-4',
                                                                                                          },
                                                                                                      ),
                                                                                                  e.label,
                                                                                              ],
                                                                                      },
                                                                                  ),
                                                                    },
                                                                    r,
                                                                ),
                                                            ),
                                                        }),
                                                        (0, t.jsxs)('div', {
                                                            className:
                                                                'overflow-hidden rounded-lg border border-border/30 bg-muted/10 text-center',
                                                            children: [
                                                                (0, t.jsx)(
                                                                    'div',
                                                                    {
                                                                        id: 'container-95e6382ba85a45d45f39a3dfde111cb2',
                                                                    },
                                                                ),
                                                                (0, t.jsx)(
                                                                    v.default,
                                                                    {
                                                                        id: 'adsterra-native-ad',
                                                                        strategy:
                                                                            'afterInteractive',
                                                                        'data-cfasync':
                                                                            'false',
                                                                        src: 'https://pl27417096.profitablecpmratenetwork.com/95e6382ba85a45d45f39a3dfde111cb2/invoke.js',
                                                                    },
                                                                ),
                                                            ],
                                                        }),
                                                    ],
                                                }),
                                        ],
                                    }),
                            ],
                        }),
                    ],
                })
            );
        }
        function j({ label: e, value: r, logo: a, delay: o = 0 }) {
            return (0, t.jsxs)('div', {
                className:
                    'flex items-center justify-between gap-4 text-sm opacity-0 transition-all duration-500 hover:scale-[1.02]',
                style: { animation: `fadeIn 0.5s ease-out ${o}ms forwards` },
                children: [
                    (0, t.jsxs)('span', {
                        className: 'font-medium text-muted-foreground',
                        children: [e, ':'],
                    }),
                    (0, t.jsxs)('span', {
                        className: 'flex items-center gap-2 font-semibold',
                        children: [
                            a &&
                                (0, t.jsx)(b.default, {
                                    src: a || '/placeholder.svg',
                                    alt: '',
                                    width: 20,
                                    height: 20,
                                    className:
                                        'h-5 w-auto transition-transform duration-300 hover:scale-125',
                                }),
                            r,
                        ],
                    }),
                ],
            });
        }
        e.s(['default', () => w]);
    },
    71579,
    (e) => {
        'use strict';
        var t = e.i(7156),
            r = e.i(81061),
            a = e.i(70065),
            o = e.i(35301),
            n = e.i(26773),
            i = e.i(65739),
            s = e.i(71428);
        function l() {
            let [e, l] = (0, r.useState)(null),
                [d, c] = (0, r.useState)(!0),
                [u, m] = (0, r.useState)(!1),
                p = async () => {
                    try {
                        let e = await fetch('/api/lookup-stats', {
                            cache: 'no-store',
                        });
                        if (!e.ok) throw Error('Failed to fetch stats');
                        let t = await e.json();
                        (l(t), m(!1));
                    } catch (e) {
                        (console.error('Error fetching lookup stats:', e),
                            m(!0));
                    } finally {
                        c(!1);
                    }
                };
            return ((0, r.useEffect)(() => {
                p();
                let e = () => {
                    p();
                };
                window.addEventListener('lookupCountUpdated', e);
                let t = setInterval(p, 6e4);
                return () => {
                    (window.removeEventListener('lookupCountUpdated', e),
                        clearInterval(t));
                };
            }, []),
            u)
                ? null
                : (0, t.jsxs)(a.Card, {
                      className: 'border-border/50 bg-card/50 backdrop-blur',
                      children: [
                          (0, t.jsx)(a.CardHeader, {
                              children: (0, t.jsxs)(a.CardTitle, {
                                  className: 'text-xl flex items-center gap-2',
                                  children: [
                                      (0, t.jsx)(i.TrendingUp, {
                                          className: 'h-5 w-5 text-primary',
                                      }),
                                      'Lookup Statistics',
                                  ],
                              }),
                          }),
                          (0, t.jsxs)(a.CardContent, {
                              children: [
                                  d
                                      ? (0, t.jsxs)('div', {
                                            className:
                                                'grid gap-4 sm:grid-cols-2',
                                            children: [
                                                (0, t.jsx)(s.Skeleton, {
                                                    className: 'h-24 w-full',
                                                }),
                                                (0, t.jsx)(s.Skeleton, {
                                                    className: 'h-24 w-full',
                                                }),
                                            ],
                                        })
                                      : (0, t.jsxs)('div', {
                                            className:
                                                'grid gap-4 sm:grid-cols-2',
                                            children: [
                                                (0, t.jsxs)('div', {
                                                    className:
                                                        'flex flex-col items-center justify-center rounded-lg border border-green-500/20 bg-green-500/5 p-6 transition-all duration-300 hover:scale-105 hover:border-green-500/40',
                                                    children: [
                                                        (0, t.jsx)(
                                                            o.CheckCircle2,
                                                            {
                                                                className:
                                                                    'h-8 w-8 text-green-500 mb-2',
                                                            },
                                                        ),
                                                        (0, t.jsx)('div', {
                                                            className:
                                                                'text-3xl font-bold text-green-500',
                                                            children:
                                                                e?.success.toLocaleString() ||
                                                                0,
                                                        }),
                                                        (0, t.jsx)('div', {
                                                            className:
                                                                'text-sm text-muted-foreground mt-1',
                                                            children:
                                                                'Successful Lookups',
                                                        }),
                                                    ],
                                                }),
                                                (0, t.jsxs)('div', {
                                                    className:
                                                        'flex flex-col items-center justify-center rounded-lg border border-red-500/20 bg-red-500/5 p-6 transition-all duration-300 hover:scale-105 hover:border-red-500/40',
                                                    children: [
                                                        (0, t.jsx)(n.XCircle, {
                                                            className:
                                                                'h-8 w-8 text-red-500 mb-2',
                                                        }),
                                                        (0, t.jsx)('div', {
                                                            className:
                                                                'text-3xl font-bold text-red-500',
                                                            children:
                                                                e?.fail.toLocaleString() ||
                                                                0,
                                                        }),
                                                        (0, t.jsx)('div', {
                                                            className:
                                                                'text-sm text-muted-foreground mt-1',
                                                            children:
                                                                'Failed Lookups',
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                  e &&
                                      !d &&
                                      (0, t.jsxs)('div', {
                                          className:
                                              'mt-4 text-center text-xs text-muted-foreground',
                                          children: [
                                              'Last updated: ',
                                              new Date(
                                                  e.lastUpdated,
                                              ).toLocaleString(),
                                          ],
                                      }),
                              ],
                          }),
                      ],
                  });
        }
        e.s(['default', () => l]);
    },
    39186,
    (e) => {
        'use strict';
        var t = e.i(7156),
            r = e.i(81061),
            a = e.i(70065),
            o = e.i(67881),
            n = e.i(34290);
        function i() {
            let [e, i] = (0, r.useState)([]);
            (0, r.useEffect)(() => {
                s();
                let e = () => s();
                return (
                    window.addEventListener('historyUpdated', e),
                    () => window.removeEventListener('historyUpdated', e)
                );
            }, []);
            let s = () => {
                i(
                    JSON.parse(
                        localStorage.getItem('bdNumLookupHistory') || '[]',
                    ),
                );
            };
            return 0 === e.length
                ? null
                : (0, t.jsxs)(a.Card, {
                      id: 'history',
                      className: 'border-border/50 bg-card/50 backdrop-blur',
                      children: [
                          (0, t.jsxs)(a.CardHeader, {
                              className:
                                  'flex flex-row items-center justify-between space-y-0 pb-3',
                              children: [
                                  (0, t.jsx)(a.CardTitle, {
                                      className: 'text-lg',
                                      children: '📜 Lookup History',
                                  }),
                                  (0, t.jsx)(o.Button, {
                                      variant: 'ghost',
                                      size: 'sm',
                                      onClick: () => {
                                          (localStorage.removeItem(
                                              'bdNumLookupHistory',
                                          ),
                                              i([]));
                                      },
                                      className: 'h-8 text-xs',
                                      children: 'Clear All',
                                  }),
                              ],
                          }),
                          (0, t.jsx)(a.CardContent, {
                              children: (0, t.jsx)('ul', {
                                  className: 'space-y-2',
                                  children: e.map((r) =>
                                      (0, t.jsxs)(
                                          'li',
                                          {
                                              className:
                                                  'group flex cursor-pointer items-center justify-between rounded-md border border-border/50 bg-muted/30 px-4 py-2.5 transition-colors hover:bg-muted/50',
                                              onClick: () => {
                                                  let e;
                                                  ((e =
                                                      document.querySelector(
                                                          'input[type="tel"]',
                                                      )) &&
                                                      ((e.value = r),
                                                      e.dispatchEvent(
                                                          new Event('input', {
                                                              bubbles: !0,
                                                          }),
                                                      )),
                                                      window.dispatchEvent(
                                                          new CustomEvent(
                                                              'triggerLookup',
                                                              {
                                                                  detail: {
                                                                      number: r,
                                                                  },
                                                              },
                                                          ),
                                                      ));
                                              },
                                              children: [
                                                  (0, t.jsx)('span', {
                                                      className:
                                                          'font-mono text-sm',
                                                      children: r,
                                                  }),
                                                  (0, t.jsx)(o.Button, {
                                                      variant: 'ghost',
                                                      size: 'icon',
                                                      className:
                                                          'h-8 w-8 opacity-0 transition-opacity group-hover:opacity-100',
                                                      onClick: (t) => {
                                                          let a;
                                                          return (
                                                              t.stopPropagation(),
                                                              (a = e.filter(
                                                                  (e) =>
                                                                      e !== r,
                                                              )),
                                                              void (localStorage.setItem(
                                                                  'bdNumLookupHistory',
                                                                  JSON.stringify(
                                                                      a,
                                                                  ),
                                                              ),
                                                              i(a))
                                                          );
                                                      },
                                                      children: (0, t.jsx)(
                                                          n.X,
                                                          {
                                                              className:
                                                                  'h-4 w-4',
                                                          },
                                                      ),
                                                  }),
                                              ],
                                          },
                                          r,
                                      ),
                                  ),
                              }),
                          }),
                      ],
                  });
        }
        e.s(['default', () => i]);
    },
    90538,
    (e) => {
        'use strict';
        var t = e.i(7156),
            r = e.i(81061),
            a = e.i(79014),
            o = e.i(70465),
            n = e.i(30406),
            i = e.i(91967),
            s = e.i(93136),
            l = e.i(22925),
            d = e.i(43988),
            c = e.i(11052),
            u = e.i(15599),
            m = 'Collapsible',
            [p, f] = (0, a.createContextScope)(m),
            [h, g] = p(m),
            x = r.forwardRef((e, a) => {
                let {
                        __scopeCollapsible: o,
                        open: n,
                        defaultOpen: i,
                        disabled: d,
                        onOpenChange: c,
                        ...p
                    } = e,
                    [f, g] = (0, s.useControllableState)({
                        prop: n,
                        defaultProp: i ?? !1,
                        onChange: c,
                        caller: m,
                    });
                return (0, t.jsx)(h, {
                    scope: o,
                    disabled: d,
                    contentId: (0, u.useId)(),
                    open: f,
                    onOpenToggle: r.useCallback(() => g((e) => !e), [g]),
                    children: (0, t.jsx)(l.Primitive.div, {
                        'data-state': N(f),
                        'data-disabled': d ? '' : void 0,
                        ...p,
                        ref: a,
                    }),
                });
            });
        x.displayName = m;
        var b = 'CollapsibleTrigger',
            v = r.forwardRef((e, r) => {
                let { __scopeCollapsible: a, ...o } = e,
                    n = g(b, a);
                return (0, t.jsx)(l.Primitive.button, {
                    type: 'button',
                    'aria-controls': n.contentId,
                    'aria-expanded': n.open || !1,
                    'data-state': N(n.open),
                    'data-disabled': n.disabled ? '' : void 0,
                    disabled: n.disabled,
                    ...o,
                    ref: r,
                    onClick: (0, i.composeEventHandlers)(
                        e.onClick,
                        n.onOpenToggle,
                    ),
                });
            });
        v.displayName = b;
        var y = 'CollapsibleContent',
            w = r.forwardRef((e, r) => {
                let { forceMount: a, ...o } = e,
                    n = g(y, e.__scopeCollapsible);
                return (0, t.jsx)(c.Presence, {
                    present: a || n.open,
                    children: ({ present: e }) =>
                        (0, t.jsx)(j, { ...o, ref: r, present: e }),
                });
            });
        w.displayName = y;
        var j = r.forwardRef((e, a) => {
            let { __scopeCollapsible: o, present: i, children: s, ...c } = e,
                u = g(y, o),
                [m, p] = r.useState(i),
                f = r.useRef(null),
                h = (0, n.useComposedRefs)(a, f),
                x = r.useRef(0),
                b = x.current,
                v = r.useRef(0),
                w = v.current,
                j = u.open || m,
                k = r.useRef(j),
                C = r.useRef(void 0);
            return (
                r.useEffect(() => {
                    let e = requestAnimationFrame(() => (k.current = !1));
                    return () => cancelAnimationFrame(e);
                }, []),
                (0, d.useLayoutEffect)(() => {
                    let e = f.current;
                    if (e) {
                        ((C.current = C.current || {
                            transitionDuration: e.style.transitionDuration,
                            animationName: e.style.animationName,
                        }),
                            (e.style.transitionDuration = '0s'),
                            (e.style.animationName = 'none'));
                        let t = e.getBoundingClientRect();
                        ((x.current = t.height),
                            (v.current = t.width),
                            k.current ||
                                ((e.style.transitionDuration =
                                    C.current.transitionDuration),
                                (e.style.animationName =
                                    C.current.animationName)),
                            p(i));
                    }
                }, [u.open, i]),
                (0, t.jsx)(l.Primitive.div, {
                    'data-state': N(u.open),
                    'data-disabled': u.disabled ? '' : void 0,
                    id: u.contentId,
                    hidden: !j,
                    ...c,
                    ref: h,
                    style: {
                        '--radix-collapsible-content-height': b
                            ? `${b}px`
                            : void 0,
                        '--radix-collapsible-content-width': w
                            ? `${w}px`
                            : void 0,
                        ...e.style,
                    },
                    children: j && s,
                })
            );
        });
        function N(e) {
            return e ? 'open' : 'closed';
        }
        var k = e.i(95587),
            C = 'Accordion',
            E = [
                'Home',
                'End',
                'ArrowDown',
                'ArrowUp',
                'ArrowLeft',
                'ArrowRight',
            ],
            [S, _, P] = (0, o.createCollection)(C),
            [I, T] = (0, a.createContextScope)(C, [P, f]),
            A = f(),
            R = r.default.forwardRef((e, r) => {
                let { type: a, ...o } = e;
                return (0, t.jsx)(S.Provider, {
                    scope: e.__scopeAccordion,
                    children:
                        'multiple' === a
                            ? (0, t.jsx)(M, { ...o, ref: r })
                            : (0, t.jsx)(B, { ...o, ref: r }),
                });
            });
        R.displayName = C;
        var [L, O] = I(C),
            [D, z] = I(C, { collapsible: !1 }),
            B = r.default.forwardRef((e, a) => {
                let {
                        value: o,
                        defaultValue: n,
                        onValueChange: i = () => {},
                        collapsible: l = !1,
                        ...d
                    } = e,
                    [c, u] = (0, s.useControllableState)({
                        prop: o,
                        defaultProp: n ?? '',
                        onChange: i,
                        caller: C,
                    });
                return (0, t.jsx)(L, {
                    scope: e.__scopeAccordion,
                    value: r.default.useMemo(() => (c ? [c] : []), [c]),
                    onItemOpen: u,
                    onItemClose: r.default.useCallback(
                        () => l && u(''),
                        [l, u],
                    ),
                    children: (0, t.jsx)(D, {
                        scope: e.__scopeAccordion,
                        collapsible: l,
                        children: (0, t.jsx)(F, { ...d, ref: a }),
                    }),
                });
            }),
            M = r.default.forwardRef((e, a) => {
                let {
                        value: o,
                        defaultValue: n,
                        onValueChange: i = () => {},
                        ...l
                    } = e,
                    [d, c] = (0, s.useControllableState)({
                        prop: o,
                        defaultProp: n ?? [],
                        onChange: i,
                        caller: C,
                    }),
                    u = r.default.useCallback(
                        (e) => c((t = []) => [...t, e]),
                        [c],
                    ),
                    m = r.default.useCallback(
                        (e) => c((t = []) => t.filter((t) => t !== e)),
                        [c],
                    );
                return (0, t.jsx)(L, {
                    scope: e.__scopeAccordion,
                    value: d,
                    onItemOpen: u,
                    onItemClose: m,
                    children: (0, t.jsx)(D, {
                        scope: e.__scopeAccordion,
                        collapsible: !0,
                        children: (0, t.jsx)(F, { ...l, ref: a }),
                    }),
                });
            }),
            [$, U] = I(C),
            F = r.default.forwardRef((e, a) => {
                let {
                        __scopeAccordion: o,
                        disabled: s,
                        dir: d,
                        orientation: c = 'vertical',
                        ...u
                    } = e,
                    m = r.default.useRef(null),
                    p = (0, n.useComposedRefs)(m, a),
                    f = _(o),
                    h = 'ltr' === (0, k.useDirection)(d),
                    g = (0, i.composeEventHandlers)(e.onKeyDown, (e) => {
                        if (!E.includes(e.key)) return;
                        let t = e.target,
                            r = f().filter((e) => !e.ref.current?.disabled),
                            a = r.findIndex((e) => e.ref.current === t),
                            o = r.length;
                        if (-1 === a) return;
                        e.preventDefault();
                        let n = a,
                            i = o - 1,
                            s = () => {
                                (n = a + 1) > i && (n = 0);
                            },
                            l = () => {
                                (n = a - 1) < 0 && (n = i);
                            };
                        switch (e.key) {
                            case 'Home':
                                n = 0;
                                break;
                            case 'End':
                                n = i;
                                break;
                            case 'ArrowRight':
                                'horizontal' === c && (h ? s() : l());
                                break;
                            case 'ArrowDown':
                                'vertical' === c && s();
                                break;
                            case 'ArrowLeft':
                                'horizontal' === c && (h ? l() : s());
                                break;
                            case 'ArrowUp':
                                'vertical' === c && l();
                        }
                        let d = n % o;
                        r[d].ref.current?.focus();
                    });
                return (0, t.jsx)($, {
                    scope: o,
                    disabled: s,
                    direction: d,
                    orientation: c,
                    children: (0, t.jsx)(S.Slot, {
                        scope: o,
                        children: (0, t.jsx)(l.Primitive.div, {
                            ...u,
                            'data-orientation': c,
                            ref: p,
                            onKeyDown: s ? void 0 : g,
                        }),
                    }),
                });
            }),
            H = 'AccordionItem',
            [G, K] = I(H),
            W = r.default.forwardRef((e, r) => {
                let { __scopeAccordion: a, value: o, ...n } = e,
                    i = U(H, a),
                    s = O(H, a),
                    l = A(a),
                    d = (0, u.useId)(),
                    c = (o && s.value.includes(o)) || !1,
                    m = i.disabled || e.disabled;
                return (0, t.jsx)(G, {
                    scope: a,
                    open: c,
                    disabled: m,
                    triggerId: d,
                    children: (0, t.jsx)(x, {
                        'data-orientation': i.orientation,
                        'data-state': Z(c),
                        ...l,
                        ...n,
                        ref: r,
                        disabled: m,
                        open: c,
                        onOpenChange: (e) => {
                            e ? s.onItemOpen(o) : s.onItemClose(o);
                        },
                    }),
                });
            });
        W.displayName = H;
        var q = 'AccordionHeader',
            J = r.default.forwardRef((e, r) => {
                let { __scopeAccordion: a, ...o } = e,
                    n = U(C, a),
                    i = K(q, a);
                return (0, t.jsx)(l.Primitive.h3, {
                    'data-orientation': n.orientation,
                    'data-state': Z(i.open),
                    'data-disabled': i.disabled ? '' : void 0,
                    ...o,
                    ref: r,
                });
            });
        J.displayName = q;
        var X = 'AccordionTrigger',
            V = r.default.forwardRef((e, r) => {
                let { __scopeAccordion: a, ...o } = e,
                    n = U(C, a),
                    i = K(X, a),
                    s = z(X, a),
                    l = A(a);
                return (0, t.jsx)(S.ItemSlot, {
                    scope: a,
                    children: (0, t.jsx)(v, {
                        'aria-disabled': (i.open && !s.collapsible) || void 0,
                        'data-orientation': n.orientation,
                        id: i.triggerId,
                        ...l,
                        ...o,
                        ref: r,
                    }),
                });
            });
        V.displayName = X;
        var Q = 'AccordionContent',
            Y = r.default.forwardRef((e, r) => {
                let { __scopeAccordion: a, ...o } = e,
                    n = U(C, a),
                    i = K(Q, a),
                    s = A(a);
                return (0, t.jsx)(w, {
                    role: 'region',
                    'aria-labelledby': i.triggerId,
                    'data-orientation': n.orientation,
                    ...s,
                    ...o,
                    ref: r,
                    style: {
                        '--radix-accordion-content-height':
                            'var(--radix-collapsible-content-height)',
                        '--radix-accordion-content-width':
                            'var(--radix-collapsible-content-width)',
                        ...e.style,
                    },
                });
            });
        function Z(e) {
            return e ? 'open' : 'closed';
        }
        Y.displayName = Q;
        var ee = e.i(43028),
            et = e.i(47163);
        function er({ ...e }) {
            return (0, t.jsx)(R, { 'data-slot': 'accordion', ...e });
        }
        function ea({ className: e, ...r }) {
            return (0, t.jsx)(W, {
                'data-slot': 'accordion-item',
                className: (0, et.cn)('border-b last:border-b-0', e),
                ...r,
            });
        }
        function eo({ className: e, children: r, ...a }) {
            return (0, t.jsx)(J, {
                className: 'flex',
                children: (0, t.jsxs)(V, {
                    'data-slot': 'accordion-trigger',
                    className: (0, et.cn)(
                        'focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-all outline-none hover:underline focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180',
                        e,
                    ),
                    ...a,
                    children: [
                        r,
                        (0, t.jsx)(ee.ChevronDownIcon, {
                            className:
                                'text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200',
                        }),
                    ],
                }),
            });
        }
        function en({ className: e, children: r, ...a }) {
            return (0, t.jsx)(Y, {
                'data-slot': 'accordion-content',
                className:
                    'data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm',
                ...a,
                children: (0, t.jsx)('div', {
                    className: (0, et.cn)('pt-0 pb-4', e),
                    children: r,
                }),
            });
        }
        e.s(
            [
                'Accordion',
                () => er,
                'AccordionContent',
                () => en,
                'AccordionItem',
                () => ea,
                'AccordionTrigger',
                () => eo,
            ],
            90538,
        );
    },
    47627,
    (e) => {
        'use strict';
        var t = e.i(7156),
            r = e.i(47163);
        function a({ className: e, ...a }) {
            return (0, t.jsx)('div', {
                'data-slot': 'table-container',
                className: 'relative w-full overflow-x-auto',
                children: (0, t.jsx)('table', {
                    'data-slot': 'table',
                    className: (0, r.cn)('w-full caption-bottom text-sm', e),
                    ...a,
                }),
            });
        }
        function o({ className: e, ...a }) {
            return (0, t.jsx)('thead', {
                'data-slot': 'table-header',
                className: (0, r.cn)('[&_tr]:border-b', e),
                ...a,
            });
        }
        function n({ className: e, ...a }) {
            return (0, t.jsx)('tbody', {
                'data-slot': 'table-body',
                className: (0, r.cn)('[&_tr:last-child]:border-0', e),
                ...a,
            });
        }
        function i({ className: e, ...a }) {
            return (0, t.jsx)('tfoot', {
                'data-slot': 'table-footer',
                className: (0, r.cn)(
                    'bg-muted/50 border-t font-medium [&>tr]:last:border-b-0',
                    e,
                ),
                ...a,
            });
        }
        function s({ className: e, ...a }) {
            return (0, t.jsx)('tr', {
                'data-slot': 'table-row',
                className: (0, r.cn)(
                    'hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors',
                    e,
                ),
                ...a,
            });
        }
        function l({ className: e, ...a }) {
            return (0, t.jsx)('th', {
                'data-slot': 'table-head',
                className: (0, r.cn)(
                    'text-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]',
                    e,
                ),
                ...a,
            });
        }
        function d({ className: e, ...a }) {
            return (0, t.jsx)('td', {
                'data-slot': 'table-cell',
                className: (0, r.cn)(
                    'p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]',
                    e,
                ),
                ...a,
            });
        }
        function c({ className: e, ...a }) {
            return (0, t.jsx)('caption', {
                'data-slot': 'table-caption',
                className: (0, r.cn)('text-muted-foreground mt-4 text-sm', e),
                ...a,
            });
        }
        e.s([
            'Table',
            () => a,
            'TableBody',
            () => n,
            'TableCaption',
            () => c,
            'TableCell',
            () => d,
            'TableFooter',
            () => i,
            'TableHead',
            () => l,
            'TableHeader',
            () => o,
            'TableRow',
            () => s,
        ]);
    },
    42257,
    (e) => {
        'use strict';
        var t = e.i(7156),
            r = e.i(81061),
            a = e.i(70065),
            o = e.i(67881),
            n = e.i(74041),
            i = e.i(90864),
            s = e.i(75358),
            s = s,
            l = e.i(20682);
        function d() {
            let [e, d] = (0, r.useState)(!1),
                { toast: c } = (0, l.useToast)(),
                u = (e) => {
                    (navigator.clipboard.writeText(e),
                        c({ title: 'Code copied to clipboard!' }));
                };
            return (0, t.jsxs)('div', {
                id: 'api',
                className: 'space-y-4',
                children: [
                    (0, t.jsx)('div', {
                        className: 'flex justify-center',
                        children: (0, t.jsxs)(o.Button, {
                            variant: 'outline',
                            onClick: () => d(!e),
                            className: 'gap-2',
                            children: [
                                e
                                    ? (0, t.jsx)(s.default, {
                                          className: 'h-4 w-4',
                                      })
                                    : (0, t.jsx)(i.ChevronDown, {
                                          className: 'h-4 w-4',
                                      }),
                                '📖',
                                ' ',
                                e ? 'Hide' : 'View',
                                ' API Docs',
                            ],
                        }),
                    }),
                    e &&
                        (0, t.jsxs)(a.Card, {
                            className:
                                'border-border/50 bg-card/50 backdrop-blur',
                            children: [
                                (0, t.jsxs)(a.CardHeader, {
                                    children: [
                                        (0, t.jsx)(a.CardTitle, {
                                            className: 'text-xl',
                                            children: 'Public Developer API',
                                        }),
                                        (0, t.jsx)('p', {
                                            className:
                                                'text-sm text-muted-foreground',
                                            children:
                                                'Our number lookup API is free, public, and requires no authentication key. You can integrate it directly into your applications. Please be fair with your usage to keep the service available for everyone.',
                                        }),
                                    ],
                                }),
                                (0, t.jsxs)(a.CardContent, {
                                    className: 'space-y-6',
                                    children: [
                                        (0, t.jsxs)('div', {
                                            children: [
                                                (0, t.jsx)('h3', {
                                                    className:
                                                        'mb-2 text-lg font-semibold',
                                                    children: 'Endpoint',
                                                }),
                                                (0, t.jsx)('code', {
                                                    className:
                                                        'block rounded bg-muted p-3 text-sm',
                                                    children: 'GET /api/lookup',
                                                }),
                                            ],
                                        }),
                                        (0, t.jsxs)('div', {
                                            children: [
                                                (0, t.jsx)('h3', {
                                                    className:
                                                        'mb-2 text-lg font-semibold',
                                                    children:
                                                        'Query Parameters',
                                                }),
                                                (0, t.jsx)('ul', {
                                                    className:
                                                        'space-y-2 text-sm text-muted-foreground',
                                                    children: (0, t.jsxs)(
                                                        'li',
                                                        {
                                                            children: [
                                                                (0, t.jsx)(
                                                                    'strong',
                                                                    {
                                                                        className:
                                                                            'text-foreground',
                                                                        children:
                                                                            'number',
                                                                    },
                                                                ),
                                                                ' (string, required)',
                                                                (0, t.jsx)(
                                                                    'br',
                                                                    {},
                                                                ),
                                                                'The 11-digit Bangladeshi mobile number to look up. Must start with a "01" prefix (e.g.,',
                                                                ' ',
                                                                (0, t.jsx)(
                                                                    'code',
                                                                    {
                                                                        children:
                                                                            '01712345678',
                                                                    },
                                                                ),
                                                                ').',
                                                            ],
                                                        },
                                                    ),
                                                }),
                                            ],
                                        }),
                                        (0, t.jsxs)('div', {
                                            children: [
                                                (0, t.jsx)('h3', {
                                                    className:
                                                        'mb-2 text-lg font-semibold',
                                                    children: 'Example Usage',
                                                }),
                                                (0, t.jsxs)('div', {
                                                    className: 'space-y-4',
                                                    children: [
                                                        (0, t.jsxs)('div', {
                                                            children: [
                                                                (0, t.jsx)(
                                                                    'h4',
                                                                    {
                                                                        className:
                                                                            'mb-2 font-medium',
                                                                        children:
                                                                            'cURL',
                                                                    },
                                                                ),
                                                                (0, t.jsxs)(
                                                                    'div',
                                                                    {
                                                                        className:
                                                                            'relative',
                                                                        children:
                                                                            [
                                                                                (0,
                                                                                t.jsx)(
                                                                                    'pre',
                                                                                    {
                                                                                        className:
                                                                                            'overflow-x-auto rounded bg-muted p-4 text-sm',
                                                                                        children:
                                                                                            (0,
                                                                                            t.jsx)(
                                                                                                'code',
                                                                                                {
                                                                                                    children:
                                                                                                        'curl "https://number-info-bd.vercel.app/api/lookup?number=01912345678"',
                                                                                                },
                                                                                            ),
                                                                                    },
                                                                                ),
                                                                                (0,
                                                                                t.jsx)(
                                                                                    o.Button,
                                                                                    {
                                                                                        variant:
                                                                                            'ghost',
                                                                                        size: 'icon',
                                                                                        className:
                                                                                            'absolute right-2 top-2 h-8 w-8',
                                                                                        onClick:
                                                                                            () =>
                                                                                                u(
                                                                                                    'curl "https://number-info-bd.vercel.app/api/lookup?number=01912345678"',
                                                                                                ),
                                                                                        children:
                                                                                            (0,
                                                                                            t.jsx)(
                                                                                                n.Copy,
                                                                                                {
                                                                                                    className:
                                                                                                        'h-4 w-4',
                                                                                                },
                                                                                            ),
                                                                                    },
                                                                                ),
                                                                            ],
                                                                    },
                                                                ),
                                                            ],
                                                        }),
                                                        (0, t.jsxs)('div', {
                                                            children: [
                                                                (0, t.jsx)(
                                                                    'h4',
                                                                    {
                                                                        className:
                                                                            'mb-2 font-medium',
                                                                        children:
                                                                            'JavaScript (Fetch API)',
                                                                    },
                                                                ),
                                                                (0, t.jsxs)(
                                                                    'div',
                                                                    {
                                                                        className:
                                                                            'relative',
                                                                        children:
                                                                            [
                                                                                (0,
                                                                                t.jsx)(
                                                                                    'pre',
                                                                                    {
                                                                                        className:
                                                                                            'overflow-x-auto rounded bg-muted p-4 text-sm',
                                                                                        children:
                                                                                            (0,
                                                                                            t.jsx)(
                                                                                                'code',
                                                                                                {
                                                                                                    children: `fetch('https://number-info-bd.vercel.app/api/lookup?number=01812345678')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));`,
                                                                                                },
                                                                                            ),
                                                                                    },
                                                                                ),
                                                                                (0,
                                                                                t.jsx)(
                                                                                    o.Button,
                                                                                    {
                                                                                        variant:
                                                                                            'ghost',
                                                                                        size: 'icon',
                                                                                        className:
                                                                                            'absolute right-2 top-2 h-8 w-8',
                                                                                        onClick:
                                                                                            () =>
                                                                                                u(`fetch('https://number-info-bd.vercel.app/api/lookup?number=01812345678')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));`),
                                                                                        children:
                                                                                            (0,
                                                                                            t.jsx)(
                                                                                                n.Copy,
                                                                                                {
                                                                                                    className:
                                                                                                        'h-4 w-4',
                                                                                                },
                                                                                            ),
                                                                                    },
                                                                                ),
                                                                            ],
                                                                    },
                                                                ),
                                                            ],
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            ],
                        }),
                ],
            });
        }
        e.s(['default', () => d], 42257);
    },
    91742,
    (e) => {
        'use strict';
        var t = e.i(81061);
        function r() {
            return (
                (0, t.useEffect)(() => {
                    let e = new IntersectionObserver(
                            (e) => {
                                e.forEach((e) => {
                                    e.isIntersecting &&
                                        e.target.classList.add('is-visible');
                                });
                            },
                            { threshold: 0.1, rootMargin: '0px 0px -50px 0px' },
                        ),
                        t = document.querySelectorAll('.fade-in-on-scroll');
                    return (
                        t.forEach((t) => e.observe(t)),
                        () => {
                            t.forEach((t) => e.unobserve(t));
                        }
                    );
                }, []),
                null
            );
        }
        e.s(['ScrollAnimations', () => r]);
    },
    21717,
    (e) => {
        'use strict';
        var t = e.i(7156),
            r = e.i(81061),
            a = e.i(70065),
            o = e.i(57276),
            n = e.i(80987);
        function i() {
            let [e, i] = (0, r.useState)(null);
            return ((0, r.useEffect)(() => {
                if (window.Telegram?.WebApp) {
                    let e = window.Telegram.WebApp;
                    (e.ready(),
                        e.initDataUnsafe?.user && i(e.initDataUnsafe.user));
                }
            }, []),
            e)
                ? (0, t.jsx)(a.Card, {
                      className:
                          'border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10 backdrop-blur',
                      children: (0, t.jsxs)(a.CardContent, {
                          className: 'flex items-center gap-4 p-4',
                          children: [
                              e.photo_url
                                  ? (0, t.jsx)(n.default, {
                                        src: e.photo_url || '/placeholder.svg',
                                        alt: e.first_name,
                                        width: 48,
                                        height: 48,
                                        className:
                                            'rounded-full border-2 border-primary',
                                        crossOrigin: 'anonymous',
                                    })
                                  : (0, t.jsx)('div', {
                                        className:
                                            'flex h-12 w-12 items-center justify-center rounded-full border-2 border-primary bg-primary/20',
                                        children: (0, t.jsx)(o.Send, {
                                            className: 'h-6 w-6 text-primary',
                                        }),
                                    }),
                              (0, t.jsxs)('div', {
                                  className: 'flex-1',
                                  children: [
                                      (0, t.jsxs)('p', {
                                          className: 'font-semibold',
                                          children: [
                                              'Welcome, ',
                                              e.first_name,
                                              ' ',
                                              e.last_name || '',
                                              '!',
                                          ],
                                      }),
                                      e.username &&
                                          (0, t.jsxs)('p', {
                                              className:
                                                  'text-xs text-muted-foreground',
                                              children: ['@', e.username],
                                          }),
                                  ],
                              }),
                          ],
                      }),
                  })
                : null;
        }
        e.s(['TelegramProfile', () => i]);
    },
    92821,
    (e) => {
        'use strict';
        var t = e.i(7156),
            r = e.i(81061),
            a = e.i(34290),
            o = e.i(13637),
            n = e.i(67881),
            i = e.i(70065);
        function s() {
            let [e, s] = (0, r.useState)(null),
                [l, d] = (0, r.useState)(!1);
            (0, r.useEffect)(() => {
                let e = (e) => {
                    (e.preventDefault(),
                        s(e),
                        localStorage.getItem('pwa-install-dismissed') ||
                            setTimeout(() => d(!0), 3e3));
                };
                return (
                    window.addEventListener('beforeinstallprompt', e),
                    () => {
                        window.removeEventListener('beforeinstallprompt', e);
                    }
                );
            }, []);
            let c = async () => {
                if (!e) return;
                e.prompt();
                let { outcome: t } = await e.userChoice;
                ('accepted' === t &&
                    console.log('User accepted the install prompt'),
                    s(null),
                    d(!1));
            };
            return l && e
                ? (0, t.jsx)('div', {
                      className:
                          'fixed bottom-4 left-4 right-4 z-[60] flex justify-center md:left-auto md:right-4 md:w-96 animate-fade-in',
                      children: (0, t.jsxs)(i.Card, {
                          className:
                              'relative w-full border-primary/20 bg-card/95 p-4 shadow-2xl backdrop-blur-xl',
                          children: [
                              (0, t.jsx)(n.Button, {
                                  variant: 'ghost',
                                  size: 'icon',
                                  className: 'absolute right-2 top-2 h-6 w-6',
                                  onClick: () => {
                                      (d(!1),
                                          localStorage.setItem(
                                              'pwa-install-dismissed',
                                              'true',
                                          ));
                                  },
                                  children: (0, t.jsx)(a.X, {
                                      className: 'h-3 w-3',
                                  }),
                              }),
                              (0, t.jsxs)('div', {
                                  className: 'flex items-start gap-3 pr-6',
                                  children: [
                                      (0, t.jsx)('div', {
                                          className:
                                              'rounded-lg bg-primary/10 p-2',
                                          children: (0, t.jsx)(o.Download, {
                                              className: 'h-5 w-5 text-primary',
                                          }),
                                      }),
                                      (0, t.jsxs)('div', {
                                          className: 'flex-1 space-y-2',
                                          children: [
                                              (0, t.jsx)('h3', {
                                                  className:
                                                      'font-semibold text-sm',
                                                  children: 'Install App',
                                              }),
                                              (0, t.jsx)('p', {
                                                  className:
                                                      'text-xs text-muted-foreground',
                                                  children:
                                                      'Install this app for quick access and offline use!',
                                              }),
                                              (0, t.jsx)(n.Button, {
                                                  onClick: c,
                                                  size: 'sm',
                                                  className:
                                                      'w-full bg-primary text-primary-foreground hover:bg-primary/90',
                                                  children: 'Install Now',
                                              }),
                                          ],
                                      }),
                                  ],
                              }),
                          ],
                      }),
                  })
                : null;
        }
        e.s(['PWAInstallPrompt', () => s]);
    },
    6418,
    (e) => {
        'use strict';
        var t = e.i(81061);
        function r() {
            return (
                (0, t.useEffect)(() => {
                    let e = (e) => {
                            try {
                                navigator.sendBeacon(
                                    '/api/security-log',
                                    JSON.stringify({
                                        type: 'devtools_detected',
                                        reason: e,
                                        timestamp: new Date().toISOString(),
                                        userAgent: navigator.userAgent,
                                        language: navigator.language,
                                    }),
                                );
                            } catch (e) {
                                console.error(
                                    '[v0] Failed to report violation:',
                                    e,
                                );
                            }
                        },
                        t = (t) => (
                            t.preventDefault(),
                            e('Right-click blocked'),
                            !1
                        ),
                        r = (t) => {
                            if (
                                'F12' === t.key ||
                                (t.ctrlKey &&
                                    t.shiftKey &&
                                    ('I' === t.key || 'i' === t.key)) ||
                                (t.ctrlKey &&
                                    t.shiftKey &&
                                    ('J' === t.key || 'j' === t.key)) ||
                                (t.ctrlKey &&
                                    t.shiftKey &&
                                    ('C' === t.key || 'c' === t.key)) ||
                                (t.ctrlKey &&
                                    ('U' === t.key || 'u' === t.key)) ||
                                (t.metaKey &&
                                    t.altKey &&
                                    ('I' === t.key || 'i' === t.key)) ||
                                (t.metaKey &&
                                    t.altKey &&
                                    ('J' === t.key || 'j' === t.key)) ||
                                (t.metaKey && ('U' === t.key || 'u' === t.key))
                            )
                                return (
                                    t.preventDefault(),
                                    t.stopPropagation(),
                                    e(`Keyboard shortcut blocked: ${t.key}`),
                                    !1
                                );
                        },
                        a = console.log,
                        o = console.error,
                        n = console.warn,
                        i = console.debug;
                    ((console.log = function (...e) {
                        return 'string' == typeof e[0] && e[0].includes('[v0]')
                            ? a.apply(console, e)
                            : a.apply(console, ['[BLOCKED]', ...e]);
                    }),
                        (console.error = function (...e) {
                            return 'string' == typeof e[0] &&
                                e[0].includes('[v0]')
                                ? o.apply(console, e)
                                : o.apply(console, ['[BLOCKED]', ...e]);
                        }),
                        (console.warn = function (...e) {
                            return 'string' == typeof e[0] &&
                                e[0].includes('[v0]')
                                ? n.apply(console, e)
                                : n.apply(console, ['[BLOCKED]', ...e]);
                        }),
                        (console.debug = function (...e) {
                            return 'string' == typeof e[0] &&
                                e[0].includes('[v0]')
                                ? i.apply(console, e)
                                : i.apply(console, ['[BLOCKED]', ...e]);
                        }),
                        Object.defineProperty(console, 'clear', {
                            value: () => {
                                e('Console.clear() blocked');
                            },
                        }),
                        Object.defineProperty(window, 'debugger', {
                            get: () => (e('Debugger access attempted'), null),
                        }));
                    let s = setInterval(() => {
                        let t = window.outerWidth - window.innerWidth > 160,
                            r = window.outerHeight - window.innerHeight > 160;
                        if (t || r) {
                            (console.clear(),
                                console.log(
                                    '%c🚫 SECURITY ALERT 🚫',
                                    'color: red; font-size: 48px; font-weight: bold;',
                                ),
                                console.log(
                                    '%cDeveloper Tools Detected!',
                                    'color: red; font-size: 24px; font-weight: bold;',
                                ),
                                console.log(
                                    '%cThis application is protected. Unauthorized access attempts are logged and blocked.',
                                    'color: orange; font-size: 14px;',
                                ),
                                console.log(
                                    '%cIP Address, Device Info, Timestamp have been recorded and reported.',
                                    'color: red; font-size: 12px;',
                                ));
                            let t = document.createElement('div');
                            ((t.innerHTML = `
          <div style="
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.95);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 999999;
            font-family: monospace;
            color: #FF0000;
          ">
            <div style="
              text-align: center;
              padding: 40px;
              background: rgba(255,0,0,0.1);
              border: 3px solid #FF0000;
              border-radius: 10px;
            ">
              <h1 style="margin: 0 0 20px 0; font-size: 48px;">🚫 SECURITY VIOLATION 🚫</h1>
              <p style="font-size: 20px; margin: 10px 0;">Developer Tools Detected</p>
              <p style="font-size: 16px; margin: 10px 0;">Your activity has been logged</p>
              <p style="font-size: 14px; margin: 10px 0;">IP: Recorded | Timestamp: Recorded | Device: Recorded</p>
              <p style="font-size: 12px; margin-top: 30px; color: #FFA500;">This page will reload in 5 seconds...</p>
            </div>
          </div>
        `),
                                document.body.appendChild(t),
                                e('DevTools Window Detected'),
                                setTimeout(() => {
                                    window.location.reload();
                                }, 5e3));
                        }
                    }, 500);
                    return (
                        document.addEventListener('contextmenu', t, {
                            capture: !0,
                        }),
                        document.addEventListener('keydown', r, {
                            capture: !0,
                        }),
                        window.addEventListener('keydown', r, { capture: !0 }),
                        () => {
                            (clearInterval(s),
                                document.removeEventListener('contextmenu', t, {
                                    capture: !0,
                                }),
                                document.removeEventListener('keydown', r, {
                                    capture: !0,
                                }),
                                window.removeEventListener('keydown', r, {
                                    capture: !0,
                                }));
                        }
                    );
                }, []),
                null
            );
        }
        e.s(['DevtoolsBlocker', () => r]);
    },
    42772,
    (e) => {
        'use strict';
        var t = e.i(7156),
            r = e.i(81061),
            a = e.i(71393),
            o = e.i(34290),
            n = e.i(10712),
            i = e.i(87524),
            s = e.i(88297),
            l = e.i(60813),
            d = e.i(52910),
            c = e.i(17508),
            u = e.i(67881),
            m = e.i(94179),
            p = e.i(47163),
            f = e.i(93901);
        function h() {
            let [e, n] = (0, r.useState)([]),
                [i, s] = (0, r.useState)(!1),
                [l, h] = (0, r.useState)(0),
                [x, b] = (0, r.useState)(!1),
                [v, y] = (0, r.useState)(!1);
            ((0, r.useEffect)(() => {
                b(!0);
            }, []),
                (0, r.useEffect)(() => {
                    let e = setTimeout(async () => {
                        if (!v)
                            try {
                                let e = `_t=${Date.now()}&_r=${Math.random().toString(36).substring(7)}&_force=1`,
                                    t = await fetch(`/api/notifications?${e}`, {
                                        method: 'GET',
                                        cache: 'no-store',
                                        headers: {
                                            'Cache-Control':
                                                'no-cache, no-store, must-revalidate, max-age=0',
                                            Pragma: 'no-cache',
                                            Expires: '0',
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
                                    ),
                                    n(r),
                                    h(0),
                                    s(!0),
                                    y(!0));
                            } catch (e) {
                                console.error(
                                    'Failed to fetch notifications for popup:',
                                    e,
                                );
                            }
                    }, 500);
                    return () => clearTimeout(e);
                }, [v]));
            let w = (0, r.useCallback)(() => {
                if ((s(!1), e.length > 0)) {
                    let t = e.map((e) => e.id),
                        r = [
                            ...new Set([
                                ...JSON.parse(
                                    localStorage.getItem('seenNoticeIds') ||
                                        '[]',
                                ),
                                ...t,
                            ]),
                        ];
                    (localStorage.setItem('seenNoticeIds', JSON.stringify(r)),
                        window.dispatchEvent(new Event('notificationUpdate')));
                }
            }, [e]);
            if (
                ((0, r.useEffect)(() => {
                    let e = (e) => {
                        'Escape' === e.key && i && w();
                    };
                    return (
                        i &&
                            (document.addEventListener('keydown', e),
                            (document.body.style.overflow = 'hidden')),
                        () => {
                            (document.removeEventListener('keydown', e),
                                (document.body.style.overflow = ''));
                        }
                    );
                }, [i, w]),
                (0, r.useEffect)(() => {
                    let t = (t) => {
                        i &&
                            !(e.length <= 1) &&
                            ('ArrowLeft' === t.key || 'ArrowUp' === t.key
                                ? (t.preventDefault(),
                                  h((e) => Math.max(0, e - 1)))
                                : ('ArrowRight' === t.key ||
                                      'ArrowDown' === t.key) &&
                                  (t.preventDefault(),
                                  h((t) => Math.min(e.length - 1, t + 1))));
                    };
                    return (
                        document.addEventListener('keydown', t),
                        () => document.removeEventListener('keydown', t)
                    );
                }, [i, e.length]),
                !x || !i || 0 === e.length)
            )
                return null;
            let j = e[l];
            return (0, a.createPortal)(
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
                    'aria-labelledby': 'force-notification-title',
                    children: [
                        (0, t.jsx)('div', {
                            style: {
                                position: 'absolute',
                                inset: 0,
                                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                                zIndex: 1,
                            },
                            onClick: w,
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
                                    e.length > 1 &&
                                        (0, t.jsxs)('div', {
                                            className:
                                                'hidden md:flex flex-col w-72 bg-card border border-border rounded-2xl shadow-2xl overflow-hidden max-h-[80vh]',
                                            children: [
                                                (0, t.jsx)('div', {
                                                    className:
                                                        'p-4 border-b border-border bg-card shrink-0',
                                                    children: (0, t.jsxs)(
                                                        'div',
                                                        {
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
                                                                    m.Badge,
                                                                    {
                                                                        variant:
                                                                            'secondary',
                                                                        className:
                                                                            'text-xs',
                                                                        children:
                                                                            [
                                                                                e.length,
                                                                                ' new',
                                                                            ],
                                                                    },
                                                                ),
                                                            ],
                                                        },
                                                    ),
                                                }),
                                                (0, t.jsx)('div', {
                                                    className:
                                                        'flex-1 overflow-y-auto overscroll-contain',
                                                    children: e.map((e, r) =>
                                                        (0, t.jsx)(
                                                            'button',
                                                            {
                                                                onClick: () =>
                                                                    h(r),
                                                                className: (0,
                                                                p.cn)(
                                                                    'w-full p-4 text-left transition-all duration-200 border-b border-border/50 hover:bg-accent/50',
                                                                    l === r &&
                                                                        'bg-accent border-l-4 border-l-primary',
                                                                ),
                                                                children: (0,
                                                                t.jsxs)('div', {
                                                                    className:
                                                                        'flex items-start gap-3',
                                                                    children: [
                                                                        (0,
                                                                        t.jsx)(
                                                                            g,
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
                                                                                        t.jsx)(
                                                                                            'div',
                                                                                            {
                                                                                                className:
                                                                                                    'flex items-center gap-2 mb-1',
                                                                                                children:
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
                                                                                                    f.stripHtmlTags)(
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
                                                                            p.cn)(
                                                                                'p-2 rounded-xl',
                                                                                'success' ===
                                                                                    j.type &&
                                                                                    'bg-green-500/10 text-green-500',
                                                                                'warning' ===
                                                                                    j.type &&
                                                                                    'bg-yellow-500/10 text-yellow-500',
                                                                                'announcement' ===
                                                                                    j.type &&
                                                                                    'bg-purple-500/10 text-purple-500',
                                                                                (!j.type ||
                                                                                    'info' ===
                                                                                        j.type) &&
                                                                                    'bg-primary/10 text-primary',
                                                                            ),
                                                                        children:
                                                                            (0,
                                                                            t.jsx)(
                                                                                g,
                                                                                {
                                                                                    type: j.type,
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
                                                                                            j.type ||
                                                                                            'Notification',
                                                                                    },
                                                                                ),
                                                                                e.length >
                                                                                    1 &&
                                                                                    (0,
                                                                                    t.jsxs)(
                                                                                        'p',
                                                                                        {
                                                                                            className:
                                                                                                'text-xs text-muted-foreground',
                                                                                            children:
                                                                                                [
                                                                                                    l +
                                                                                                        1,
                                                                                                    ' of ',
                                                                                                    e.length,
                                                                                                ],
                                                                                        },
                                                                                    ),
                                                                            ],
                                                                    },
                                                                ),
                                                            ],
                                                        }),
                                                        (0, t.jsx)(u.Button, {
                                                            variant: 'ghost',
                                                            size: 'icon',
                                                            className:
                                                                'hover:bg-destructive/10 hover:text-destructive h-8 w-8 rounded-full transition-colors',
                                                            onClick: w,
                                                            'aria-label':
                                                                'Close notification',
                                                            children: (0,
                                                            t.jsx)(o.X, {
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
                                                                        id: 'force-notification-title',
                                                                        className:
                                                                            'text-2xl md:text-3xl font-bold leading-tight text-balance',
                                                                        children:
                                                                            j.title,
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
                                                                                            f.sanitizeMessage)(
                                                                                                (0,
                                                                                                f.formatForInAppDisplay)(
                                                                                                    j.message,
                                                                                                ),
                                                                                            ),
                                                                                        },
                                                                                },
                                                                            ),
                                                                    },
                                                                ),
                                                            ],
                                                        }),
                                                        j.imageUrl &&
                                                            (0, t.jsx)('div', {
                                                                className:
                                                                    'rounded-xl overflow-hidden border border-border shadow-lg',
                                                                children: (0,
                                                                t.jsx)('img', {
                                                                    src:
                                                                        j.imageUrl ||
                                                                        '/placeholder.svg',
                                                                    alt: j.title,
                                                                    className:
                                                                        'w-full h-auto',
                                                                    loading:
                                                                        'lazy',
                                                                }),
                                                            }),
                                                        j.buttonName &&
                                                            j.buttonLink &&
                                                            (0, t.jsx)('div', {
                                                                className:
                                                                    'pt-2',
                                                                children: (0,
                                                                t.jsx)(
                                                                    u.Button,
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
                                                                                    href: j.buttonLink,
                                                                                    target: '_blank',
                                                                                    rel: 'noopener noreferrer',
                                                                                    children:
                                                                                        j.buttonName,
                                                                                },
                                                                            ),
                                                                    },
                                                                ),
                                                            }),
                                                    ],
                                                }),
                                                e.length > 1 &&
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
                                                                        u.Button,
                                                                        {
                                                                            variant:
                                                                                'outline',
                                                                            size: 'sm',
                                                                            onClick:
                                                                                () =>
                                                                                    h(
                                                                                        Math.max(
                                                                                            0,
                                                                                            l -
                                                                                                1,
                                                                                        ),
                                                                                    ),
                                                                            disabled:
                                                                                0 ===
                                                                                l,
                                                                            className:
                                                                                'flex-1 gap-1',
                                                                            children:
                                                                                [
                                                                                    (0,
                                                                                    t.jsx)(
                                                                                        d.ChevronLeft,
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
                                                                                e.map(
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
                                                                                                        h(
                                                                                                            r,
                                                                                                        ),
                                                                                                className:
                                                                                                    (0,
                                                                                                    p.cn)(
                                                                                                        'h-2 rounded-full transition-all duration-300',
                                                                                                        l ===
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
                                                                        u.Button,
                                                                        {
                                                                            variant:
                                                                                'outline',
                                                                            size: 'sm',
                                                                            onClick:
                                                                                () =>
                                                                                    h(
                                                                                        Math.min(
                                                                                            e.length -
                                                                                                1,
                                                                                            l +
                                                                                                1,
                                                                                        ),
                                                                                    ),
                                                                            disabled:
                                                                                l ===
                                                                                e.length -
                                                                                    1,
                                                                            className:
                                                                                'flex-1 gap-1',
                                                                            children:
                                                                                [
                                                                                    'Next',
                                                                                    (0,
                                                                                    t.jsx)(
                                                                                        c.ChevronRight,
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
        function g({ type: e, className: r }) {
            switch (e) {
                case 'success':
                    return (0, t.jsx)(s.CheckCircle, { className: r });
                case 'warning':
                    return (0, t.jsx)(i.AlertCircle, { className: r });
                case 'announcement':
                    return (0, t.jsx)(l.Sparkles, { className: r });
                default:
                    return (0, t.jsx)(n.Info, { className: r });
            }
        }
        e.s(['ForceNotificationPopup', () => h]);
    },
    95215,
    (e) => {
        'use strict';
        var t = e.i(21971),
            r = e.i(81061);
        function a() {
            let e = (0, t.usePathname)();
            return (
                (0, r.useEffect)(() => {
                    let t,
                        r,
                        a,
                        o =
                            ((t = e.split('/').filter(Boolean)),
                            (r = [
                                {
                                    '@type': 'ListItem',
                                    position: 1,
                                    name: 'Home',
                                    item: 'https://bd-num-lookup.vercel.app',
                                },
                            ]),
                            (a = ''),
                            t.forEach((e, t) => {
                                ((a += `/${e}`),
                                    r.push({
                                        '@type': 'ListItem',
                                        position: r.length + 1,
                                        name:
                                            {
                                                guides: 'Guides',
                                                grameenphone: 'Grameenphone',
                                                robi: 'Robi',
                                                banglalink: 'Banglalink',
                                                airtel: 'Airtel',
                                                teletalk: 'Teletalk',
                                                comparison:
                                                    'Operator Comparison',
                                                'how-to-lookup':
                                                    'How to Lookup',
                                            }[e] || e,
                                        item: `https://bd-num-lookup.vercel.app${a}`,
                                    }));
                            }),
                            {
                                '@context': 'https://schema.org',
                                '@type': 'BreadcrumbList',
                                itemListElement: r,
                            }),
                        n = document.createElement('script');
                    return (
                        (n.type = 'application/ld+json'),
                        (n.textContent = JSON.stringify(o)),
                        document.head.appendChild(n),
                        () => {
                            document.head.removeChild(n);
                        }
                    );
                }, [e]),
                null
            );
        }
        e.s(['BreadcrumbSchema', () => a]);
    },
    12738,
    (e) => {
        'use strict';
        var t = e.i(7156);
        function r() {
            return (0, t.jsx)('script', {
                type: 'application/ld+json',
                dangerouslySetInnerHTML: {
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'HowTo',
                        name: 'How to Lookup Bangladesh Mobile Numbers',
                        description:
                            'Complete step-by-step guide on how to lookup any Bangladesh mobile number and identify the operator.',
                        totalTime: 'PT2M',
                        image: 'https://placehold.co/800x600/0d1117/58a6ff/png?text=BD+Number+Lookup',
                        step: [
                            {
                                '@type': 'HowToStep',
                                position: 1,
                                name: 'Enter Phone Number',
                                description:
                                    'Enter any 11-digit Bangladesh mobile number starting with 01',
                                image: 'https://placehold.co/400x300/0d1117/58a6ff/png?text=Step+1',
                            },
                            {
                                '@type': 'HowToStep',
                                position: 2,
                                name: 'Click Lookup Button',
                                description:
                                    'Click the lookup button or press Enter to search',
                                image: 'https://placehold.co/400x300/0d1117/58a6ff/png?text=Step+2',
                            },
                            {
                                '@type': 'HowToStep',
                                position: 3,
                                name: 'Get Instant Results',
                                description:
                                    'View operator name, location, network type, and number details',
                                image: 'https://placehold.co/400x300/0d1117/58a6ff/png?text=Step+3',
                            },
                            {
                                '@type': 'HowToStep',
                                position: 4,
                                name: 'Use or Share Results',
                                description:
                                    'Copy results, download, or share with WhatsApp/Telegram',
                                image: 'https://placehold.co/400x300/0d1117/58a6ff/png?text=Step+4',
                            },
                        ],
                    }),
                },
            });
        }
        e.s(['HowToSchema', () => r]);
    },
    31042,
    (e) => {
        'use strict';
        var t = e.i(7156),
            r = e.i(70065),
            a = e.i(67881);
        let o = (0, e.i(10965).default)('BookOpen', [
            ['path', { d: 'M12 7v14', key: '1akyts' }],
            [
                'path',
                {
                    d: 'M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z',
                    key: 'ruj8y',
                },
            ],
        ]);
        var n = e.i(58595),
            i = e.i(71669);
        let s = [
            {
                title: 'How to Lookup',
                description:
                    'Step-by-step guide on how to lookup Bangladesh phone numbers',
                href: '/guides/how-to-lookup',
                icon: '🔍',
            },
            {
                title: 'Grameenphone',
                description:
                    'Complete guide to Grameenphone (GP) number lookup',
                href: '/guides/grameenphone',
                icon: '📱',
            },
            {
                title: 'Robi Axiata',
                description:
                    'Learn how to identify and check Robi (RB) numbers',
                href: '/guides/robi',
                icon: '📞',
            },
            {
                title: 'Banglalink',
                description:
                    'Banglalink (BL) number lookup guide and information',
                href: '/guides/banglalink',
                icon: '🔔',
            },
            {
                title: 'Airtel',
                description: 'Identify Airtel numbers using our lookup tool',
                href: '/guides/airtel',
                icon: '⚡',
            },
            {
                title: 'Teletalk',
                description:
                    'Teletalk (TT) Bangladesh government operator guide',
                href: '/guides/teletalk',
                icon: '🏛️',
            },
            {
                title: 'MNP Check',
                description:
                    'Understanding Mobile Number Portability in Bangladesh',
                href: '/guides/mnp-check',
                icon: '🔄',
            },
            {
                title: 'Comparison',
                description:
                    'Compare Bangladesh telecom operators side by side',
                href: '/guides/comparison',
                icon: '⚖️',
            },
        ];
        function l() {
            return (0, t.jsxs)('div', {
                id: 'guides',
                className: 'space-y-4',
                children: [
                    (0, t.jsxs)('div', {
                        className: 'flex items-center justify-center gap-2',
                        children: [
                            (0, t.jsx)(o, {
                                className: 'h-5 w-5 text-primary',
                            }),
                            (0, t.jsx)('h2', {
                                className: 'text-2xl font-bold text-balance',
                                children: 'Learning Guides',
                            }),
                        ],
                    }),
                    (0, t.jsx)('p', {
                        className: 'text-center text-muted-foreground',
                        children:
                            'Explore our comprehensive guides to master Bangladesh phone number lookup',
                    }),
                    (0, t.jsx)('div', {
                        className: 'grid gap-4 sm:grid-cols-2',
                        children: s.map((e) =>
                            (0, t.jsx)(
                                i.default,
                                {
                                    href: e.href,
                                    children: (0, t.jsxs)(r.Card, {
                                        className:
                                            'h-full cursor-pointer transition-all hover:border-primary/50 hover:shadow-md hover:shadow-primary/10',
                                        children: [
                                            (0, t.jsx)(r.CardHeader, {
                                                children: (0, t.jsxs)(
                                                    r.CardTitle,
                                                    {
                                                        className:
                                                            'flex items-center gap-2 text-lg',
                                                        children: [
                                                            (0, t.jsx)('span', {
                                                                className:
                                                                    'text-xl',
                                                                children:
                                                                    e.icon,
                                                            }),
                                                            e.title,
                                                        ],
                                                    },
                                                ),
                                            }),
                                            (0, t.jsx)(r.CardContent, {
                                                children: (0, t.jsx)('p', {
                                                    className:
                                                        'text-sm text-muted-foreground',
                                                    children: e.description,
                                                }),
                                            }),
                                        ],
                                    }),
                                },
                                e.href,
                            ),
                        ),
                    }),
                    (0, t.jsxs)('div', {
                        className: 'flex justify-center gap-4 pt-4',
                        children: [
                            (0, t.jsx)(a.Button, {
                                asChild: !0,
                                variant: 'outline',
                                children: (0, t.jsxs)(i.default, {
                                    href: '/guides/faq-guide',
                                    children: [
                                        'FAQ Guide ',
                                        (0, t.jsx)(n.ExternalLink, {
                                            className: 'ml-2 h-4 w-4',
                                        }),
                                    ],
                                }),
                            }),
                            (0, t.jsx)(a.Button, {
                                asChild: !0,
                                variant: 'outline',
                                children: (0, t.jsxs)(i.default, {
                                    href: '/guides/free-api',
                                    children: [
                                        'Free API Guide ',
                                        (0, t.jsx)(n.ExternalLink, {
                                            className: 'ml-2 h-4 w-4',
                                        }),
                                    ],
                                }),
                            }),
                        ],
                    }),
                ],
            });
        }
        e.s(['default', () => l], 31042);
    },
]);
