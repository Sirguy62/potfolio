(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/CLI/Mixpal/my-app/app/components/Nearby.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Nearby
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$CLI$2f$Mixpal$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/CLI/Mixpal/my-app/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$CLI$2f$Mixpal$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/CLI/Mixpal/my-app/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$CLI$2f$Mixpal$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/CLI/Mixpal/my-app/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module './'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function Nearby() {
    _s();
    const [hotels, setHotels] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$CLI$2f$Mixpal$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$CLI$2f$Mixpal$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$CLI$2f$Mixpal$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$CLI$2f$Mixpal$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Nearby.useEffect": ()=>{
            async function fetchNearby() {
                if (!navigator.geolocation) {
                    setError("Geolocation not supported.");
                    setLoading(false);
                    return;
                }
                navigator.geolocation.getCurrentPosition({
                    "Nearby.useEffect.fetchNearby": async (pos)=>{
                        const lat = pos.coords.latitude;
                        const lon = pos.coords.longitude;
                        setLoading(true);
                        setError("");
                        try {
                            const [hotels, setHotels] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$CLI$2f$Mixpal$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
                            const res = await fetch("/api/search-by-coordinates?lat=".concat(lat, "&lon=").concat(lon), {
                                cache: "no-store"
                            });
                            const data = await res.json();
                            const hotelsList = data.result || data.hotels || data.data || data.list || [];
                            // 🔥 LIMIT RESULTS TO 3
                            const limited = Array.isArray(hotelsList) ? hotelsList.slice(0, 3) : [];
                            setHotels(limited);
                        } catch (err) {
                            console.error(err);
                            setError("Failed to load nearby hotels.");
                        } finally{
                            setLoading(false);
                        }
                    }
                }["Nearby.useEffect.fetchNearby"], {
                    "Nearby.useEffect.fetchNearby": (err)=>{
                        console.error("GEO ERROR:", err.code, err.message);
                        if (err.code === 1) setError("Location permission denied.");
                        if (err.code === 2) setError("Location unavailable. Check macOS privacy settings.");
                        if (err.code === 3) setError("Location request timed out.");
                        setLoading(false);
                    }
                }["Nearby.useEffect.fetchNearby"]);
            }
            fetchNearby();
        }
    }["Nearby.useEffect"], []);
    if (loading) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$CLI$2f$Mixpal$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        className: "",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$CLI$2f$Mixpal$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Loader, {}, void 0, false, {
            fileName: "[project]/Desktop/CLI/Mixpal/my-app/app/components/Nearby.tsx",
            lineNumber: 83,
            columnNumber: 39
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/CLI/Mixpal/my-app/app/components/Nearby.tsx",
        lineNumber: 83,
        columnNumber: 23
    }, this);
    if (error) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$CLI$2f$Mixpal$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        className: "text-red-500",
        children: error
    }, void 0, false, {
        fileName: "[project]/Desktop/CLI/Mixpal/my-app/app/components/Nearby.tsx",
        lineNumber: 84,
        columnNumber: 21
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$CLI$2f$Mixpal$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex justify-center items-center flex-col mt-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$CLI$2f$Mixpal$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-3xl text-black font-bold mb-6",
                children: "Hotels Near You"
            }, void 0, false, {
                fileName: "[project]/Desktop/CLI/Mixpal/my-app/app/components/Nearby.tsx",
                lineNumber: 88,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$CLI$2f$Mixpal$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
                children: [
                    hotels.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$CLI$2f$Mixpal$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "No hotels found nearby."
                    }, void 0, false, {
                        fileName: "[project]/Desktop/CLI/Mixpal/my-app/app/components/Nearby.tsx",
                        lineNumber: 91,
                        columnNumber: 33
                    }, this),
                    hotels.map((hotel)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$CLI$2f$Mixpal$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$CLI$2f$Mixpal$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-blue-100 rounded-lg flex items-center justify-center mb-6",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$CLI$2f$Mixpal$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: hotel.max_photo_url || hotel.main_photo_url || hotel.photo1 || hotel.image_url || "/images/hotel-placeholder.jpg",
                                        alt: hotel.hotel_name || hotel.name || "Hotel Image",
                                        className: "w-full h-48 object-cover rounded-lg"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/CLI/Mixpal/my-app/app/components/Nearby.tsx",
                                        lineNumber: 99,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/CLI/Mixpal/my-app/app/components/Nearby.tsx",
                                    lineNumber: 98,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$CLI$2f$Mixpal$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-xl font-semibold text-gray-900 mb-3",
                                    children: hotel.hotel_name || hotel.name || "Unnamed Hotel"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/CLI/Mixpal/my-app/app/components/Nearby.tsx",
                                    lineNumber: 112,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$CLI$2f$Mixpal$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-600",
                                    children: [
                                        "Rating: ",
                                        hotel.review_score || "N/A"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/CLI/Mixpal/my-app/app/components/Nearby.tsx",
                                    lineNumber: 116,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$CLI$2f$Mixpal$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-600",
                                    children: hotel.city
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/CLI/Mixpal/my-app/app/components/Nearby.tsx",
                                    lineNumber: 119,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, hotel.hotel_id || hotel.id, true, {
                            fileName: "[project]/Desktop/CLI/Mixpal/my-app/app/components/Nearby.tsx",
                            lineNumber: 94,
                            columnNumber: 11
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/CLI/Mixpal/my-app/app/components/Nearby.tsx",
                lineNumber: 90,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$CLI$2f$Mixpal$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$CLI$2f$Mixpal$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                href: "/hotels",
                className: "mt-10 inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition",
                children: "See More Hotels"
            }, void 0, false, {
                fileName: "[project]/Desktop/CLI/Mixpal/my-app/app/components/Nearby.tsx",
                lineNumber: 125,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/CLI/Mixpal/my-app/app/components/Nearby.tsx",
        lineNumber: 87,
        columnNumber: 5
    }, this);
}
_s(Nearby, "7crPRCQYYEeQ0pHV+neoMou3apA=");
_c = Nearby;
var _c;
__turbopack_context__.k.register(_c, "Nearby");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Desktop_CLI_Mixpal_my-app_app_components_Nearby_tsx_85e168f3._.js.map