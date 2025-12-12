(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/CLI/Mixpal/my-app/app/hotels/search-hotels/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HotelSearch
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$CLI$2f$Mixpal$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/CLI/Mixpal/my-app/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$CLI$2f$Mixpal$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/CLI/Mixpal/my-app/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$CLI$2f$Mixpal$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/CLI/Mixpal/my-app/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const TYPE_MAP = {
    ci: {
        search_type: "city",
        dest_type: "city"
    },
    ho: {
        search_type: "hotel",
        dest_type: "hotel"
    }
};
function HotelSearch() {
    _s();
    const [city, setCity] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$CLI$2f$Mixpal$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [locations, setLocations] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$CLI$2f$Mixpal$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [hotels, setHotels] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$CLI$2f$Mixpal$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$CLI$2f$Mixpal$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$CLI$2f$Mixpal$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    async function searchLocation(params) {
        setLoading(true);
        setError("");
        setHotels([]);
        const query = new URLSearchParams(params).toString();
        try {
            const res = await fetch("/api/hotels?".concat(query));
            if (!res.ok) throw new Error("Failed to fetch locations");
            const data = await res.json();
            console.log("LOCATION RESPONSE:", data);
            setLocations(Array.isArray(data) ? data : []);
        } catch (err) {
            console.error(err);
            setError("Failed to fetch locations.");
            setLocations([]);
        } finally{
            setLoading(false);
        }
    }
    function handleSearch() {
        if (!city.trim()) {
            setError("City name cannot be empty");
            return;
        }
        searchLocation({
            city
        });
    }
    async function findNearMe() {
        if (!navigator.geolocation) {
            setError("Geolocation not supported.");
            return;
        }
        navigator.geolocation.getCurrentPosition(async (pos)=>{
            const lat = pos.coords.latitude;
            const lon = pos.coords.longitude;
            console.log("User location:", lat, lon);
            setLoading(true);
            setError("");
            try {
                const res = await fetch("/api/search-by-coordinates?lat=".concat(lat, "&lon=").concat(lon), {
                    cache: "no-store"
                });
                const data = await res.json();
                console.log("NEAR ME HOTELS:", data);
                const hotelsList = data.result || data.hotels || data.data || data.list || [];
                setHotels(Array.isArray(hotelsList) ? hotelsList : []);
            } catch (e) {
                console.error(e);
                setError("Failed to fetch nearby hotels.");
            } finally{
                setLoading(false);
            }
        }, (err)=>{
            console.error("GEO ERROR:", err.code, err.message);
            if (err.code === 1) setError("Permission denied.");
            if (err.code === 2) setError("Location unavailable. Check macOS Settings.");
            if (err.code === 3) setError("Location request timed out.");
        });
    }
    function getDate(offsetDays) {
        const date = new Date();
        date.setDate(date.getDate() + offsetDays);
        return date.toISOString().split("T")[0];
    }
    async function fetchHotelsForLocation(location) {
        setLoading(true);
        setError("");
        const map = TYPE_MAP[location.type] || TYPE_MAP["ci"];
        const params = {
            dest_id: location.dest_id,
            dest_type: map.dest_type,
            search_type: map.search_type,
            checkin_date: getDate(3),
            checkout_date: getDate(5),
            adults: "1"
        };
        const query = new URLSearchParams(params).toString();
        try {
            const res = await fetch("/api/hotel-details?".concat(query));
            if (!res.ok) throw new Error("Failed to fetch hotel details");
            const data = await res.json();
            console.log("HOTEL RESPONSE:", data);
            setHotels(Array.isArray(data.result) ? data.result : []);
        } catch (err) {
            console.error(err);
            setError("Failed to fetch hotel details.");
            setHotels([]);
        } finally{
            setLoading(false);
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$CLI$2f$Mixpal$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "py-12 max-w-3xl lg:w-full mx-auto space-y-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$CLI$2f$Mixpal$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-center items-center w-full gap-4 bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$CLI$2f$Mixpal$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        className: "border text-gray-400 rounded p-2 w-full",
                        placeholder: "Enter city e.g. Lagos",
                        value: city,
                        onChange: (e)=>setCity(e.target.value)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/CLI/Mixpal/my-app/app/hotels/search-hotels/page.tsx",
                        lineNumber: 159,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$CLI$2f$Mixpal$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleSearch,
                        className: "bg-blue-600 max-w-34 text-white p-2 rounded w-full",
                        children: "Search by City"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/CLI/Mixpal/my-app/app/hotels/search-hotels/page.tsx",
                        lineNumber: 166,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/CLI/Mixpal/my-app/app/hotels/search-hotels/page.tsx",
                lineNumber: 158,
                columnNumber: 7
            }, this),
            loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$CLI$2f$Mixpal$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: "Searching…"
            }, void 0, false, {
                fileName: "[project]/Desktop/CLI/Mixpal/my-app/app/hotels/search-hotels/page.tsx",
                lineNumber: 181,
                columnNumber: 19
            }, this),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$CLI$2f$Mixpal$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-red-600",
                children: error
            }, void 0, false, {
                fileName: "[project]/Desktop/CLI/Mixpal/my-app/app/hotels/search-hotels/page.tsx",
                lineNumber: 182,
                columnNumber: 17
            }, this),
            locations.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$CLI$2f$Mixpal$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4 mt-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$CLI$2f$Mixpal$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "font-bold",
                        children: "Select a Location"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/CLI/Mixpal/my-app/app/hotels/search-hotels/page.tsx",
                        lineNumber: 186,
                        columnNumber: 11
                    }, this),
                    locations.map((loc, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$CLI$2f$Mixpal$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-4 border rounded cursor-pointer",
                            onClick: ()=>fetchHotelsForLocation(loc),
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$CLI$2f$Mixpal$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                children: loc.label
                            }, void 0, false, {
                                fileName: "[project]/Desktop/CLI/Mixpal/my-app/app/hotels/search-hotels/page.tsx",
                                lineNumber: 194,
                                columnNumber: 15
                            }, this)
                        }, i, false, {
                            fileName: "[project]/Desktop/CLI/Mixpal/my-app/app/hotels/search-hotels/page.tsx",
                            lineNumber: 189,
                            columnNumber: 13
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/CLI/Mixpal/my-app/app/hotels/search-hotels/page.tsx",
                lineNumber: 185,
                columnNumber: 9
            }, this),
            hotels.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$CLI$2f$Mixpal$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4 mt-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$CLI$2f$Mixpal$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "font-bold",
                        children: "Hotels Found"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/CLI/Mixpal/my-app/app/hotels/search-hotels/page.tsx",
                        lineNumber: 203,
                        columnNumber: 11
                    }, this),
                    hotels.map((hotel)=>{
                        const image = hotel.max_photo_url || hotel.main_photo_url || hotel.photo1 || hotel.image_url || "/images/hotel-placeholder.jpg";
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$CLI$2f$Mixpal$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$CLI$2f$Mixpal$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/hotels/".concat(hotel.hotel_id),
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$CLI$2f$Mixpal$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-4 p-4 border rounded-lg shadow-sm bg-white",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$CLI$2f$Mixpal$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: image,
                                        alt: hotel.hotel_name,
                                        className: "w-28 h-28 object-cover rounded-lg"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/CLI/Mixpal/my-app/app/hotels/search-hotels/page.tsx",
                                        lineNumber: 216,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$CLI$2f$Mixpal$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$CLI$2f$Mixpal$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "font-bold text-lg",
                                                children: hotel.hotel_name
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/CLI/Mixpal/my-app/app/hotels/search-hotels/page.tsx",
                                                lineNumber: 223,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$CLI$2f$Mixpal$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-gray-600 text-sm",
                                                children: hotel.address || "No address provided"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/CLI/Mixpal/my-app/app/hotels/search-hotels/page.tsx",
                                                lineNumber: 224,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/CLI/Mixpal/my-app/app/hotels/search-hotels/page.tsx",
                                        lineNumber: 222,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/CLI/Mixpal/my-app/app/hotels/search-hotels/page.tsx",
                                lineNumber: 215,
                                columnNumber: 17
                            }, this)
                        }, hotel.hotel_id, false, {
                            fileName: "[project]/Desktop/CLI/Mixpal/my-app/app/hotels/search-hotels/page.tsx",
                            lineNumber: 214,
                            columnNumber: 15
                        }, this);
                    })
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/CLI/Mixpal/my-app/app/hotels/search-hotels/page.tsx",
                lineNumber: 202,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/CLI/Mixpal/my-app/app/hotels/search-hotels/page.tsx",
        lineNumber: 157,
        columnNumber: 5
    }, this);
}
_s(HotelSearch, "2PNJbGuJH58QQ5wFhCoADYtIHF4=");
_c = HotelSearch;
var _c;
__turbopack_context__.k.register(_c, "HotelSearch");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Desktop_CLI_Mixpal_my-app_app_hotels_search-hotels_page_tsx_f490f709._.js.map