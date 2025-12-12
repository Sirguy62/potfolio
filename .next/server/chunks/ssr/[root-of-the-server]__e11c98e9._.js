module.exports = [
"[project]/Desktop/CLI/Mixpal/my-app/lib/actions/auth-actions.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"7f28b416a731643f9d789a677326c436ae825fb04b":"signUp","7f75c87dac505767286ab885146e90567327b52d7a":"signIn","7fae89581b926d83960e13126602ab3614254ea7f8":"signInSocial","7fd34d9e8e373092c4243a5351bdbc85e9a17d7ad3":"signOut"},"",""] */ __turbopack_context__.s([
    "signIn",
    ()=>signIn,
    "signInSocial",
    ()=>signInSocial,
    "signOut",
    ()=>signOut,
    "signUp",
    ()=>signUp
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$CLI$2f$Mixpal$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/CLI/Mixpal/my-app/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$CLI$2f$Mixpal$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/CLI/Mixpal/my-app/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$CLI$2f$Mixpal$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/CLI/Mixpal/my-app/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$CLI$2f$Mixpal$2f$my$2d$app$2f$lib$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/CLI/Mixpal/my-app/lib/auth.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$CLI$2f$Mixpal$2f$my$2d$app$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/CLI/Mixpal/my-app/node_modules/next/headers.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$CLI$2f$Mixpal$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/CLI/Mixpal/my-app/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
;
const signUp = async (email, password, name)=>{
    const result = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$CLI$2f$Mixpal$2f$my$2d$app$2f$lib$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"].api.signUpEmail({
        body: {
            email,
            password,
            name,
            callbackURL: "/dashboard"
        }
    });
    return result;
};
const signIn = async (email, password)=>{
    const result = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$CLI$2f$Mixpal$2f$my$2d$app$2f$lib$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"].api.signInEmail({
        body: {
            email,
            password,
            callbackURL: "/dashboard"
        }
    });
    return result;
};
const signInSocial = async (provider)=>{
    const { url } = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$CLI$2f$Mixpal$2f$my$2d$app$2f$lib$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"].api.signInSocial({
        body: {
            provider,
            callbackURL: "/dashboard"
        }
    });
    if (url) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$CLI$2f$Mixpal$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])(url);
    }
};
const signOut = async ()=>{
    const result = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$CLI$2f$Mixpal$2f$my$2d$app$2f$lib$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"].api.signOut({
        headers: await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$CLI$2f$Mixpal$2f$my$2d$app$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["headers"])()
    });
    return result;
};
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$CLI$2f$Mixpal$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    signUp,
    signIn,
    signInSocial,
    signOut
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$CLI$2f$Mixpal$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(signUp, "7f28b416a731643f9d789a677326c436ae825fb04b", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$CLI$2f$Mixpal$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(signIn, "7f75c87dac505767286ab885146e90567327b52d7a", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$CLI$2f$Mixpal$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(signInSocial, "7fae89581b926d83960e13126602ab3614254ea7f8", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$CLI$2f$Mixpal$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(signOut, "7fd34d9e8e373092c4243a5351bdbc85e9a17d7ad3", null);
}),
"[project]/Desktop/CLI/Mixpal/my-app/.next-internal/server/app/dashboard/page/actions.js { ACTIONS_MODULE0 => \"[project]/Desktop/CLI/Mixpal/my-app/lib/actions/auth-actions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$CLI$2f$Mixpal$2f$my$2d$app$2f$lib$2f$actions$2f$auth$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/CLI/Mixpal/my-app/lib/actions/auth-actions.ts [app-rsc] (ecmascript)");
;
}),
"[project]/Desktop/CLI/Mixpal/my-app/.next-internal/server/app/dashboard/page/actions.js { ACTIONS_MODULE0 => \"[project]/Desktop/CLI/Mixpal/my-app/lib/actions/auth-actions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "7fd34d9e8e373092c4243a5351bdbc85e9a17d7ad3",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$CLI$2f$Mixpal$2f$my$2d$app$2f$lib$2f$actions$2f$auth$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["signOut"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$CLI$2f$Mixpal$2f$my$2d$app$2f2e$next$2d$internal$2f$server$2f$app$2f$dashboard$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$Desktop$2f$CLI$2f$Mixpal$2f$my$2d$app$2f$lib$2f$actions$2f$auth$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/Desktop/CLI/Mixpal/my-app/.next-internal/server/app/dashboard/page/actions.js { ACTIONS_MODULE0 => "[project]/Desktop/CLI/Mixpal/my-app/lib/actions/auth-actions.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$CLI$2f$Mixpal$2f$my$2d$app$2f$lib$2f$actions$2f$auth$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/CLI/Mixpal/my-app/lib/actions/auth-actions.ts [app-rsc] (ecmascript)");
}),
"[project]/Desktop/CLI/Mixpal/my-app/app/favicon.ico.mjs { IMAGE => \"[project]/Desktop/CLI/Mixpal/my-app/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Desktop/CLI/Mixpal/my-app/app/favicon.ico.mjs { IMAGE => \"[project]/Desktop/CLI/Mixpal/my-app/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[project]/Desktop/CLI/Mixpal/my-app/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Desktop/CLI/Mixpal/my-app/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/Desktop/CLI/Mixpal/my-app/app/dashboard/dashboard-client.tsx [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

r;
}),
"[project]/Desktop/CLI/Mixpal/my-app/app/dashboard/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DashboardPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$CLI$2f$Mixpal$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/CLI/Mixpal/my-app/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$CLI$2f$Mixpal$2f$my$2d$app$2f$lib$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/CLI/Mixpal/my-app/lib/auth.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$CLI$2f$Mixpal$2f$my$2d$app$2f$app$2f$dashboard$2f$dashboard$2d$client$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/CLI/Mixpal/my-app/app/dashboard/dashboard-client.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$CLI$2f$Mixpal$2f$my$2d$app$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/CLI/Mixpal/my-app/node_modules/next/headers.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$CLI$2f$Mixpal$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/CLI/Mixpal/my-app/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$CLI$2f$Mixpal$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/CLI/Mixpal/my-app/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
;
;
;
;
;
async function DashboardPage() {
    const session = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$CLI$2f$Mixpal$2f$my$2d$app$2f$lib$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"].api.getSession({
        headers: await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$CLI$2f$Mixpal$2f$my$2d$app$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["headers"])()
    });
    if (!session) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$CLI$2f$Mixpal$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])("/auth");
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$CLI$2f$Mixpal$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$CLI$2f$Mixpal$2f$my$2d$app$2f$app$2f$dashboard$2f$dashboard$2d$client$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
        session: session
    }, void 0, false, {
        fileName: "[project]/Desktop/CLI/Mixpal/my-app/app/dashboard/page.tsx",
        lineNumber: 15,
        columnNumber: 10
    }, this);
}
}),
"[project]/Desktop/CLI/Mixpal/my-app/app/dashboard/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Desktop/CLI/Mixpal/my-app/app/dashboard/page.tsx [app-rsc] (ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__e11c98e9._.js.map