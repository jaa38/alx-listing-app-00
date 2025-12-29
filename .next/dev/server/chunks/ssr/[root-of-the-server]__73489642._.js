module.exports = [
"[project]/Developer/alx/ProDev_FrontEnd/Week_4/alx-listing-app-00/constants/index.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HERO_SECTION_IMAGE",
    ()=>HERO_SECTION_IMAGE,
    "PROPERTYLISTINGSAMPLE",
    ()=>PROPERTYLISTINGSAMPLE
]);
const HERO_SECTION_IMAGE = '/images/heroSection.jpeg';
const PROPERTYLISTINGSAMPLE = [
    {
        name: 'Villa Ocean Breeze',
        address: {
            state: 'Seminyak',
            city: 'Bali',
            country: 'Indonesia'
        },
        rating: 4.89,
        category: [
            'Luxury Villa',
            'Pool',
            'Free Parking'
        ],
        price: 3200,
        offers: {
            bed: '3',
            shower: '3',
            occupants: '4-6'
        },
        image: 'https://example.com/image1.jpg',
        discount: ''
    },
    {
        name: 'Mountain Escape Chalet',
        address: {
            state: 'Aspen',
            city: 'Colorado',
            country: 'USA'
        },
        rating: 4.7,
        category: [
            'Mountain View',
            'Fireplace',
            'Self Checkin'
        ],
        price: 1800,
        offers: {
            bed: '4',
            shower: '2',
            occupants: '5-7'
        },
        image: 'https://example.com/image2.jpg',
        discount: '30'
    }
];
}),
"[project]/Developer/alx/ProDev_FrontEnd/Week_4/alx-listing-app-00/pages/index.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$alx$2f$ProDev_FrontEnd$2f$Week_4$2f$alx$2d$listing$2d$app$2d$00$2f$constants$2f$index$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/alx/ProDev_FrontEnd/Week_4/alx-listing-app-00/constants/index.ts [ssr] (ecmascript)");
;
;
const filters = [
    'Top Villa',
    'Self Checkin',
    'Free Parking',
    'Pet Friendly'
];
const Home = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
            className: "h-[60vh] bg-cover bg-center flex items-center",
            style: {
                backgroundImage: `url(${__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$alx$2f$ProDev_FrontEnd$2f$Week_4$2f$alx$2d$listing$2d$app$2d$00$2f$constants$2f$index$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["HERO_SECTION_IMAGE"]})`
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto px-4 text-white",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h1", {
                        className: "text-4xl font-bold mb-4",
                        children: "Find your favorite place here!"
                    }, void 0, false, {
                        fileName: "[project]/Developer/alx/ProDev_FrontEnd/Week_4/alx-listing-app-00/pages/index.tsx",
                        lineNumber: 15,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                        className: "text-lg",
                        children: "The best prices for over 2 million properties worldwide"
                    }, void 0, false, {
                        fileName: "[project]/Developer/alx/ProDev_FrontEnd/Week_4/alx-listing-app-00/pages/index.tsx",
                        lineNumber: 18,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Developer/alx/ProDev_FrontEnd/Week_4/alx-listing-app-00/pages/index.tsx",
                lineNumber: 14,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/Developer/alx/ProDev_FrontEnd/Week_4/alx-listing-app-00/pages/index.tsx",
            lineNumber: 10,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false);
};
const __TURBOPACK__default__export__ = Home;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__73489642._.js.map