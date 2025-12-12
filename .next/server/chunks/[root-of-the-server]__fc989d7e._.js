module.exports = [
"[project]/Desktop/CLI/Mixpal/my-app/.next-internal/server/app/api/hotels/route/actions.js [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__, module, exports) => {

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
"[project]/Desktop/CLI/Mixpal/my-app/app/api/hotels/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$CLI$2f$Mixpal$2f$my$2d$app$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/CLI/Mixpal/my-app/node_modules/next/server.js [app-route] (ecmascript)");
;
async function GET(req) {
    const { searchParams } = new URL(req.url);
    const city = searchParams.get("city");
    const lat = searchParams.get("lat");
    const lon = searchParams.get("lon");
    const host = process.env.RAPID_HOST; // booking-com.p.rapidapi.com
    const key = process.env.RAPID_KEY;
    if (!host || !key) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$CLI$2f$Mixpal$2f$my$2d$app$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Missing RapidAPI credentials"
        }, {
            status: 500
        });
    }
    try {
        // 🔎 City search
        if (city) {
            const url = `https://${host}/v1/hotels/locations?name=${encodeURIComponent(city)}&locale=en-gb`;
            const res = await fetch(url, {
                headers: {
                    "X-RapidAPI-Key": key,
                    "X-RapidAPI-Host": host
                }
            });
            const data = await res.json();
            console.log("LOCATION RESPONSE:", data);
            return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$CLI$2f$Mixpal$2f$my$2d$app$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(Array.isArray(data) ? data : []);
        }
        // 📍 GPS Search
        if (lat && lon) {
            const url = `https://${host}/v1/hotels/locations?latitude=${lat}&longitude=${lon}&locale=en-gb`;
            const res = await fetch(url, {
                headers: {
                    "X-RapidAPI-Key": key,
                    "X-RapidAPI-Host": host
                }
            });
            const data = await res.json();
            console.log("LOCATION RESPONSE (GPS):", data);
            return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$CLI$2f$Mixpal$2f$my$2d$app$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(Array.isArray(data) ? data : []);
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$CLI$2f$Mixpal$2f$my$2d$app$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json([]);
    } catch (err) {
        console.error("API ERROR:", err);
        return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$CLI$2f$Mixpal$2f$my$2d$app$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json([], {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__fc989d7e._.js.map