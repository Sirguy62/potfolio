module.exports = [
"[project]/Desktop/CLI/Mixpal/my-app/.next-internal/server/app/api/hotels/details/route/actions.js [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__, module, exports) => {

}),
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[project]/Desktop/CLI/Mixpal/my-app/app/api/hotels/details/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$CLI$2f$Mixpal$2f$my$2d$app$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/CLI/Mixpal/my-app/node_modules/next/server.js [app-route] (ecmascript)");
;
const BASE_URL = "https://backend.hermextravels.com/hotels";
async function GET(req) {
    const { searchParams } = new URL(req.url);
    const type = searchParams.get("type");
    const hotel_id = searchParams.get("hotel_id");
    const checkin = searchParams.get("checkin") || "";
    const checkout = searchParams.get("checkout") || "";
    if (!type || !hotel_id) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$CLI$2f$Mixpal$2f$my$2d$app$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "type and hotel_id are required"
        }, {
            status: 400
        });
    }
    try {
        let url = "";
        switch(type){
            case "data":
                url = `${BASE_URL}/hotel_data?hotel_id=${hotel_id}`;
                break;
            case "payment-features":
                url = `${BASE_URL}/payment_features?hotel_id=${hotel_id}`;
                break;
            case "facilities":
                url = `${BASE_URL}/facilities?hotel_id=${hotel_id}`;
                break;
            case "photos":
                url = `${BASE_URL}/photos?hotel_id=${hotel_id}`;
                break;
            case "rooms":
                url = `${BASE_URL}/room_list?hotel_id=${hotel_id}&checkin=${checkin}&checkout=${checkout}`;
                break;
            case "reviews":
                url = `${BASE_URL}/reviews?hotel_id=${hotel_id}`;
                break;
            case "policies":
                url = `${BASE_URL}/policies?hotel_id=${hotel_id}`;
                break;
            default:
                return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$CLI$2f$Mixpal$2f$my$2d$app$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    error: "Invalid type"
                }, {
                    status: 400
                });
        }
        const res = await fetch(url);
        const data = await res.json();
        return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$CLI$2f$Mixpal$2f$my$2d$app$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            result: data
        });
    } catch (error) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$CLI$2f$Mixpal$2f$my$2d$app$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Failed to fetch hotel details",
            detail: error.message
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__f83505ab._.js.map