globalThis.__nitro_main__ = import.meta.url;
import { i as serve, r as NodeResponse } from "./_libs/h3-v2+rou3+srvx.mjs";
import { a as toEventHandler, i as defineLazyEventHandler, n as HTTPError, r as defineHandler, t as H3Core } from "./_libs/h3+rou3+srvx.mjs";
import { i as withoutTrailingSlash, n as joinURL, r as withLeadingSlash, t as decodePath } from "./_libs/ufo.mjs";
import { promises } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
//#region #nitro-vite-setup
function lazyService(loader) {
	let promise, mod;
	return { fetch(req) {
		if (mod) return mod.fetch(req);
		if (!promise) promise = loader().then((_mod) => mod = _mod.default || _mod);
		return promise.then((mod) => mod.fetch(req));
	} };
}
var services = { ["ssr"]: lazyService(() => import("./_ssr/ssr.mjs")) };
globalThis.__nitro_vite_envs__ = services;
//#endregion
//#region node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
//#endregion
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/favicon.ico": {
		"type": "image/vnd.microsoft.icon",
		"etag": "\"4f95-3RXc3p2mhEAs1WBwaIvE0Y0uu0Y\"",
		"mtime": "2026-09-11T03:29:29.334Z",
		"size": 20373,
		"path": "../dist/favicon.ico"
	},
	"/robots.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"a0-CKGXSIe7TSsqDTmGm/nY1t/o5d0\"",
		"mtime": "2026-09-11T03:29:29.334Z",
		"size": 160,
		"path": "../dist/robots.txt"
	},
	"/favicon.png": {
		"type": "image/png",
		"etag": "\"cc7-5Av2beGn1vCDe0tP1MlwcZWLPO4\"",
		"mtime": "2026-09-11T03:29:29.334Z",
		"size": 3271,
		"path": "../dist/favicon.png"
	},
	"/assets/about-team-C9TFu01r.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"37-rvsUFMJnqNm/Ea0TNLCBUSn0QYQ\"",
		"mtime": "2026-09-11T03:29:28.770Z",
		"size": 55,
		"path": "../dist/assets/about-team-C9TFu01r.js"
	},
	"/assets/about-PPIhPs56.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1e30-glaJy8ICwBF70L2T/LXfv9kN1os\"",
		"mtime": "2026-09-11T03:29:28.770Z",
		"size": 7728,
		"path": "../dist/assets/about-PPIhPs56.js"
	},
	"/assets/CtaBand-C5lRrtD2.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3ec-1u7cRpyatWXdehGPRsPb/HgDPyM\"",
		"mtime": "2026-09-11T03:29:28.770Z",
		"size": 1004,
		"path": "../dist/assets/CtaBand-C5lRrtD2.js"
	},
	"/assets/PageHeader-2KhRJPPT.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"371-qyvP2FUpyo3xhJPPopil80Bce0I\"",
		"mtime": "2026-09-11T03:29:28.770Z",
		"size": 881,
		"path": "../dist/assets/PageHeader-2KhRJPPT.js"
	},
	"/assets/blog-BXK6PAle.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"f84-iyiHxVF7wYOZtLa3pr+UTsHm5Q0\"",
		"mtime": "2026-09-11T03:29:28.770Z",
		"size": 3972,
		"path": "../dist/assets/blog-BXK6PAle.js"
	},
	"/assets/ceo-ian-kariuki-CgtJsAbc.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3c-vlJWkd+ZvTLIQ48bVtzAyMr7Rfo\"",
		"mtime": "2026-09-11T03:29:28.770Z",
		"size": 60,
		"path": "../dist/assets/ceo-ian-kariuki-CgtJsAbc.js"
	},
	"/assets/createLucideIcon-DqiZf-pu.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"337a-Mx1ONTWSGM/sSeowzkpVErVUFVc\"",
		"mtime": "2026-09-11T03:29:28.771Z",
		"size": 13178,
		"path": "../dist/assets/createLucideIcon-DqiZf-pu.js"
	},
	"/assets/ceo-ian-kariuki-CddnVJNN.jpg": {
		"type": "image/jpeg",
		"etag": "\"192d4-lQbqnttv/N/FISO4DW9SMqAZbZA\"",
		"mtime": "2026-09-11T03:29:28.771Z",
		"size": 103124,
		"path": "../dist/assets/ceo-ian-kariuki-CddnVJNN.jpg"
	},
	"/assets/hero-office-NYvEf0Zr.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"38-2ZG/z3qQUQjL0qOtNY/HIIs4LAc\"",
		"mtime": "2026-09-11T03:29:28.771Z",
		"size": 56,
		"path": "../dist/assets/hero-office-NYvEf0Zr.js"
	},
	"/assets/about-team-DOElS3Q5.jpg": {
		"type": "image/jpeg",
		"etag": "\"22776-A7uB5SQNbJ0vv8y4bYKwvKXy1/Y\"",
		"mtime": "2026-09-11T03:29:28.771Z",
		"size": 141174,
		"path": "../dist/assets/about-team-DOElS3Q5.jpg"
	},
	"/assets/map-pin-B22vQPiM.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"103-AArurEgUZkzEccljPsnslQKC7ew\"",
		"mtime": "2026-09-11T03:29:28.771Z",
		"size": 259,
		"path": "../dist/assets/map-pin-B22vQPiM.js"
	},
	"/assets/not-found-i5RsCZif.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"76-Trmr7GZIBZuvfg4uM18tBiRtOXg\"",
		"mtime": "2026-09-11T03:29:28.771Z",
		"size": 118,
		"path": "../dist/assets/not-found-i5RsCZif.js"
	},
	"/assets/project-tenant-BT2gtRl9.jpg": {
		"type": "image/jpeg",
		"etag": "\"182bd-Lmffj920rmef8tMi98avda0YjTI\"",
		"mtime": "2026-09-11T03:29:28.771Z",
		"size": 99005,
		"path": "../dist/assets/project-tenant-BT2gtRl9.jpg"
	},
	"/assets/blog._slug-uQEayXWl.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1129-6R7oVFA7nHpgDWacpHJts3cZ230\"",
		"mtime": "2026-09-11T03:29:28.770Z",
		"size": 4393,
		"path": "../dist/assets/blog._slug-uQEayXWl.js"
	},
	"/assets/contact-kuBoVDaT.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"325e-6C4TRLUg7dUU1pX6tX1QcIA3Wsc\"",
		"mtime": "2026-09-11T03:29:28.770Z",
		"size": 12894,
		"path": "../dist/assets/contact-kuBoVDaT.js"
	},
	"/assets/hero-office-Byaf7RfB.jpg": {
		"type": "image/jpeg",
		"etag": "\"194ca-uzZxZzvXcYLcfrsX1rASexi6Tbc\"",
		"mtime": "2026-09-11T03:29:28.771Z",
		"size": 103626,
		"path": "../dist/assets/hero-office-Byaf7RfB.jpg"
	},
	"/assets/routes-BFS8SEsD.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"360f-c6NDKysN69dJO/TeAq4dVMLSFhE\"",
		"mtime": "2026-09-11T03:29:28.771Z",
		"size": 13839,
		"path": "../dist/assets/routes-BFS8SEsD.js"
	},
	"/assets/services-CC9Mr4E1.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"d1f-tyW5isoV5K9WcwYj2d+dZfGjEFw\"",
		"mtime": "2026-09-11T03:29:28.771Z",
		"size": 3359,
		"path": "../dist/assets/services-CC9Mr4E1.js"
	},
	"/assets/project-ticketing-OnZAqboz.jpg": {
		"type": "image/jpeg",
		"etag": "\"1b4ec-ARZzGKaL0QK6GFFLbsm+Ekjigto\"",
		"mtime": "2026-09-11T03:29:28.771Z",
		"size": 111852,
		"path": "../dist/assets/project-ticketing-OnZAqboz.jpg"
	},
	"/assets/link-BD1Rq-ON.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"5ab1-J/UokKbVqOGlqxy0hXZdYC1nJt8\"",
		"mtime": "2026-09-11T03:29:28.771Z",
		"size": 23217,
		"path": "../dist/assets/link-BD1Rq-ON.js"
	},
	"/assets/slide-analytics-CXMPspbA.jpg": {
		"type": "image/jpeg",
		"etag": "\"14374-DN4wCEp4eJ6W5AIlMlvfTsuw1H4\"",
		"mtime": "2026-09-11T03:29:28.771Z",
		"size": 82804,
		"path": "../dist/assets/slide-analytics-CXMPspbA.jpg"
	},
	"/assets/index-Mh8xyKi-.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"6392b-ioLggt9xZ+WAdeOryqUb5xzsg74\"",
		"mtime": "2026-09-11T03:29:28.770Z",
		"size": 407851,
		"path": "../dist/assets/index-Mh8xyKi-.js"
	},
	"/assets/slide-security-KZA_1C_M.jpg": {
		"type": "image/jpeg",
		"etag": "\"e8bf-XjFgIyce8PJBuCiabA5ezDYiMjo\"",
		"mtime": "2026-09-11T03:29:28.771Z",
		"size": 59583,
		"path": "../dist/assets/slide-security-KZA_1C_M.jpg"
	},
	"/assets/slide-branding-OkW9vM-q.jpg": {
		"type": "image/jpeg",
		"etag": "\"1b71d-xoSqjBxHyUz2u+QIzYWihMtFyjw\"",
		"mtime": "2026-09-11T03:29:28.771Z",
		"size": 112413,
		"path": "../dist/assets/slide-branding-OkW9vM-q.jpg"
	},
	"/assets/styles-DPMeOEFR.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"14e54-UTXoHQAuC/49/FBMQi+7R5FkiFA\"",
		"mtime": "2026-09-11T03:29:28.772Z",
		"size": 85588,
		"path": "../dist/assets/styles-DPMeOEFR.css"
	},
	"/assets/slide-network-Cpxr4LZA.jpg": {
		"type": "image/jpeg",
		"etag": "\"21c4a-19qhVd3XD3rAXtZyvuaeWDNcsWM\"",
		"mtime": "2026-09-11T03:29:28.771Z",
		"size": 138314,
		"path": "../dist/assets/slide-network-Cpxr4LZA.jpg"
	},
	"/assets/slide-web-mQvBOWpu.jpg": {
		"type": "image/jpeg",
		"etag": "\"fe52-CiVlBqvzd5rnqYny/AeJh/pJM2c\"",
		"mtime": "2026-09-11T03:29:28.771Z",
		"size": 65106,
		"path": "../dist/assets/slide-web-mQvBOWpu.jpg"
	},
	"/assets/zebnex-logo-BXAx6TgH.png": {
		"type": "image/png",
		"etag": "\"d377-SnyKHRnE7vu6czHmbQzQvL9ha8o\"",
		"mtime": "2026-09-11T03:29:28.772Z",
		"size": 54135,
		"path": "../dist/assets/zebnex-logo-BXAx6TgH.png"
	}
};
//#endregion
//#region #nitro/virtual/public-assets-node
function readAsset(id) {
	const serverDir = dirname(fileURLToPath(globalThis.__nitro_main__));
	return promises.readFile(resolve(serverDir, public_assets_data_default[id].path));
}
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
function getAsset(id) {
	return public_assets_data_default[id];
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/static.mjs
var METHODS = /* @__PURE__ */ new Set(["HEAD", "GET"]);
var EncodingMap = {
	gzip: ".gz",
	br: ".br",
	zstd: ".zst"
};
var static_default = defineHandler((event) => {
	if (event.req.method && !METHODS.has(event.req.method)) return;
	let id = decodePath(withLeadingSlash(withoutTrailingSlash(event.url.pathname)));
	let asset;
	const encodings = [...(event.req.headers.get("accept-encoding") || "").split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort(), ""];
	for (const encoding of encodings) for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
		const _asset = getAsset(_id);
		if (_asset) {
			asset = _asset;
			id = _id;
			break;
		}
	}
	if (!asset) {
		if (isPublicAssetURL(id)) {
			event.res.headers.delete("Cache-Control");
			throw new HTTPError({ status: 404 });
		}
		return;
	}
	if (encodings.length > 1) event.res.headers.append("Vary", "Accept-Encoding");
	if (event.req.headers.get("if-none-match") === asset.etag) {
		event.res.status = 304;
		event.res.statusText = "Not Modified";
		return "";
	}
	const ifModifiedSinceH = event.req.headers.get("if-modified-since");
	const mtimeDate = new Date(asset.mtime);
	if (ifModifiedSinceH && asset.mtime && new Date(ifModifiedSinceH) >= mtimeDate) {
		event.res.status = 304;
		event.res.statusText = "Not Modified";
		return "";
	}
	if (asset.type) event.res.headers.set("Content-Type", asset.type);
	if (asset.etag && !event.res.headers.has("ETag")) event.res.headers.set("ETag", asset.etag);
	if (asset.mtime && !event.res.headers.has("Last-Modified")) event.res.headers.set("Last-Modified", mtimeDate.toUTCString());
	if (asset.encoding && !event.res.headers.has("Content-Encoding")) event.res.headers.set("Content-Encoding", asset.encoding);
	if (asset.size > 0 && !event.res.headers.has("Content-Length")) event.res.headers.set("Content-Length", asset.size.toString());
	return readAsset(id);
});
//#endregion
//#region #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = [{
		name: "headers",
		route: "/assets/**",
		handler: headers,
		options: { "cache-control": "public, max-age=31536000, immutable" }
	}];
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		let s = p.split("/");
		if (s.length > 1) {
			if (s[1] === "assets") r.unshift({
				data: $0,
				params: { "_": s.slice(2).join("/") }
			});
		}
		return r;
	};
})();
var _lazy_j21Qvj = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_j21Qvj
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
var globalMiddleware = [toEventHandler(static_default)].filter(Boolean);
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new NodeResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
//#endregion
//#region #nitro/virtual/app
function createNitroApp() {
	const captureError = (error, errorCtx) => {
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks: void 0,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
	h3App["~middleware"].push(...globalMiddleware);
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		const routeRules = getRouteRules(method, pathname);
		event.context.routeRules = routeRules?.routeRules;
		if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
		middleware.push(...h3App["~middleware"]);
		if (route?.data?.middleware?.length) middleware.push(...route.data.middleware);
		return middleware;
	};
	return h3App;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	return instance;
}
function getRouteRules(method, pathname) {
	const m = findRouteRules(method, pathname);
	if (!m?.length) return { routeRuleMiddleware: [] };
	const routeRules = {};
	for (const layer of m) for (const rule of layer.data) {
		const currentRule = routeRules[rule.name];
		if (currentRule) {
			if (rule.options === false) {
				delete routeRules[rule.name];
				continue;
			}
			if (typeof currentRule.options === "object" && typeof rule.options === "object") currentRule.options = {
				...currentRule.options,
				...rule.options
			};
			else currentRule.options = rule.options;
			currentRule.route = rule.route;
			currentRule.params = {
				...currentRule.params,
				...layer.params
			};
		} else if (rule.options !== false) routeRules[rule.name] = {
			...rule,
			params: layer.params
		};
	}
	const middleware = [];
	const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
	for (const rule of orderedRules) {
		if (rule.options === false || !rule.handler) continue;
		middleware.push(rule.handler(rule));
	}
	return {
		routeRules,
		routeRuleMiddleware: middleware
	};
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/hooks.mjs
function _captureError(error, type) {
	console.error(`[${type}]`, error);
	useNitroApp().captureError?.(error, { tags: [type] });
}
function trapUnhandledErrors() {
	process.on("unhandledRejection", (error) => _captureError(error, "unhandledRejection"));
	process.on("uncaughtException", (error) => _captureError(error, "uncaughtException"));
}
//#endregion
//#region #nitro/virtual/tracing
var tracingSrvxPlugins = [];
//#endregion
//#region node_modules/nitro/dist/presets/node/runtime/node-server.mjs
var _parsedPort = Number.parseInt(process.env.NITRO_PORT ?? process.env.PORT ?? "");
var port = Number.isNaN(_parsedPort) ? 3e3 : _parsedPort;
var host = process.env.NITRO_HOST || process.env.HOST;
var cert = process.env.NITRO_SSL_CERT;
var key = process.env.NITRO_SSL_KEY;
var nitroApp = useNitroApp();
serve({
	port,
	hostname: host,
	tls: cert && key ? {
		cert,
		key
	} : void 0,
	fetch: nitroApp.fetch,
	plugins: [...tracingSrvxPlugins]
});
trapUnhandledErrors();
var node_server_default = {};
//#endregion
export { node_server_default as default };
