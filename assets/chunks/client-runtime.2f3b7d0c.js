//#region rolldown:runtime
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function() {
	return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
	if (from && typeof from === "object" || typeof from === "function") for (var keys = __getOwnPropNames(from), i = 0, n = keys.length, key; i < n; i++) {
		key = keys[i];
		if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
			get: ((k) => from[k]).bind(null, key),
			enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
		});
	}
	return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
	value: mod,
	enumerable: true
}) : target, mod));

//#endregion
//#region node_modules/.pnpm/picocolors@1.1.1/node_modules/picocolors/picocolors.browser.js
var require_picocolors_browser = /* @__PURE__ */ __commonJS({ "node_modules/.pnpm/picocolors@1.1.1/node_modules/picocolors/picocolors.browser.js": ((exports, module) => {
	var x = String;
	var create = function() {
		return {
			isColorSupported: false,
			reset: x,
			bold: x,
			dim: x,
			italic: x,
			underline: x,
			inverse: x,
			hidden: x,
			strikethrough: x,
			black: x,
			red: x,
			green: x,
			yellow: x,
			blue: x,
			magenta: x,
			cyan: x,
			white: x,
			gray: x,
			bgBlack: x,
			bgRed: x,
			bgGreen: x,
			bgYellow: x,
			bgBlue: x,
			bgMagenta: x,
			bgCyan: x,
			bgWhite: x,
			blackBright: x,
			redBright: x,
			greenBright: x,
			yellowBright: x,
			blueBright: x,
			magentaBright: x,
			cyanBright: x,
			whiteBright: x,
			bgBlackBright: x,
			bgRedBright: x,
			bgGreenBright: x,
			bgYellowBright: x,
			bgBlueBright: x,
			bgMagentaBright: x,
			bgCyanBright: x,
			bgWhiteBright: x
		};
	};
	module.exports = create();
	module.exports.createColors = create;
}) });

//#endregion
//#region utils/logger.ts
var import_picocolors_browser = /* @__PURE__ */ __toESM(require_picocolors_browser(), 1);
const isColorSupported = !!import_picocolors_browser.default.isColorSupported;
const MAIN_NAME = "vitepress-rendering-strategies";
let colors = null;
if (isColorSupported) colors = import_picocolors_browser.default;
const isNodeRuntime = typeof process !== "undefined" && !!(process.versions && process.versions.node);
const isProductionEnv = typeof import.meta !== "undefined" && import.meta.env?.PROD === true || typeof process !== "undefined" && false;
const lightGeneralLogger = (type, message, group, options) => {
	const { immediate = true } = options || {};
	let icon = "✓";
	let iconColor = "color: #13ef3e";
	let messageColor = "color: #2ba245";
	switch (type) {
		case "success":
			icon = "✓";
			iconColor = "color: #13ef3e";
			messageColor = "color: #2ba245";
			break;
		case "error":
			icon = "✗";
			iconColor = "color:rgb(233, 63, 80)";
			messageColor = "color: #dc3545";
			break;
		case "info":
			icon = "info";
			iconColor = "color:rgb(149, 155, 160)";
			messageColor = "color: #6c757d";
			break;
		case "warn":
			icon = "⚠";
			iconColor = "color:rgb(255, 248, 32)";
			messageColor = "color: #ffc107";
			break;
		case "debug":
			icon = "debug";
			iconColor = "color:rgb(149, 155, 160)";
			messageColor = "color: #6c757d";
			break;
	}
	const groupDisplayText = group ? group : "";
	if (immediate) console.log(`%c${MAIN_NAME}%c${groupDisplayText ? `[${groupDisplayText}]` : ""}%c: » %c${icon}%c ${message}`, "color: #2579d9; font-weight: bold;", "color: #e28a00; font-weight: bold;", "color: gray;", iconColor, messageColor);
	else return `
      console.log(
        \`%c${MAIN_NAME}%c${groupDisplayText ? `[${groupDisplayText}]` : ""}%c: » %c${icon}%c ${message}\`,
        'color: #2579d9; font-weight: bold;',
        'color: #e28a00; font-weight: bold;', 
        'color: gray;',                      
        '${iconColor};',
        '${messageColor};'
      );
    `;
};

//#endregion
//#region src/shared/runtime/css-loading.ts
function createCSSLoadingConfig(environment$1 = "production") {
	const baseConfig = {
		development: {
			timeout: 1e4,
			retryCount: 3,
			retryDelay: 1e3,
			enablePerformanceMonitoring: true,
			enableDuplicateDetection: true,
			failureStrategy: "partial"
		},
		production: {
			timeout: 6e3,
			retryCount: 1,
			retryDelay: 300,
			enablePerformanceMonitoring: false,
			enableDuplicateDetection: true,
			failureStrategy: "partial"
		},
		debug: {
			timeout: 15e3,
			retryCount: 3,
			retryDelay: 500,
			enablePerformanceMonitoring: true,
			enableDuplicateDetection: true,
			failureStrategy: "strict"
		}
	};
	return baseConfig[environment$1] ?? baseConfig.production;
}
/**
* CSS loading runtime
*
* Features:
* 1. Timeout protection - Prevent infinite waiting.
* 2. Enhanced fault tolerance - Support partial loading success strategy.
* 3. Performance monitoring - Detailed loading time and status tracking.
* 4. Duplicate loading detection - Avoid loading duplicate CSS.
* 5. Retry mechanism - Automatic retry when network is unstable.
* 6. Progressive failure strategy - Balance completeness and performance.
*
* @param highPriorityRenderStyles - CSS file URL array.
* @param options - Configuration options.
* @returns Loading result details.
*/
function loadHighPriorityStyles(highPriorityRenderStyles, options = {}) {
	const { timeout = 8e3, retryCount = 2, retryDelay = 500, enablePerformanceMonitoring = true, enableDuplicateDetection = true, failureStrategy = "partial" } = options;
	return new Promise((resolve) => {
		const startTime = performance.now();
		let loadedCount = 0;
		let failedCount = 0;
		const totalStyles = highPriorityRenderStyles.length;
		let isResolved = false;
		const loadResults = /* @__PURE__ */ new Map();
		const performanceMetrics = {
			totalStartTime: startTime,
			individualLoadTimes: /* @__PURE__ */ new Map(),
			duplicatesDetected: 0,
			retriesPerformed: 0
		};
		if (totalStyles === 0) {
			resolve({
				success: true,
				loadedCount: 0,
				failedCount: 0,
				totalCount: 0,
				timedOut: false,
				metrics: performanceMetrics
			});
			return;
		}
		const timeoutId = setTimeout(() => {
			if (!isResolved) {
				isResolved = true;
				const endTime = performance.now();
				performanceMetrics.totalLoadTime = endTime - startTime;
				if (enablePerformanceMonitoring) lightGeneralLogger("warn", `CSS loading timeout after ${timeout}ms. Loaded: ${loadedCount}/${totalStyles}, Failed: ${failedCount}`, "css-loading-runtime");
				resolve({
					success: failureStrategy === "partial" ? loadedCount > 0 : false,
					loadedCount,
					failedCount,
					totalCount: totalStyles,
					timedOut: true,
					metrics: performanceMetrics
				});
			}
		}, timeout);
		const checkCompletion = () => {
			if (isResolved) return;
			const completedCount = loadedCount + failedCount;
			if (completedCount === totalStyles) {
				isResolved = true;
				clearTimeout(timeoutId);
				const endTime = performance.now();
				performanceMetrics.totalLoadTime = endTime - startTime;
				if (enablePerformanceMonitoring) {
					lightGeneralLogger("success", `Success rate: ${loadedCount}/${totalStyles} (${(loadedCount / totalStyles * 100).toFixed(1)}%)`, "css-loading-runtime");
					if (performanceMetrics.duplicatesDetected > 0) lightGeneralLogger("info", `Detected and skipped ${performanceMetrics.duplicatesDetected} duplicate CSS files`, "css-loading-runtime");
					if (performanceMetrics.retriesPerformed > 0) lightGeneralLogger("info", `Performed ${performanceMetrics.retriesPerformed} retries`, "css-loading-runtime");
				}
				const success = failureStrategy === "strict" ? failedCount === 0 : loadedCount > 0;
				resolve({
					success,
					loadedCount,
					failedCount,
					totalCount: totalStyles,
					timedOut: false,
					metrics: performanceMetrics
				});
			}
		};
		const loadStyleWithRetry = (styleUrl, retries = 0) => {
			const loadStartTime = performance.now();
			if (enableDuplicateDetection) {
				const existingLink = document.querySelector(`link[href="${styleUrl}"]`);
				if (existingLink) {
					performanceMetrics.duplicatesDetected++;
					loadedCount++;
					loadResults.set(styleUrl, {
						success: true,
						cached: true
					});
					checkCompletion();
					return;
				}
			}
			const link = document.createElement("link");
			link.rel = "stylesheet";
			link.href = styleUrl;
			link.dataset.vriteCssBundle = styleUrl;
			link.crossOrigin = "anonymous";
			const onLoad = () => {
				const loadTime = performance.now() - loadStartTime;
				performanceMetrics.individualLoadTimes.set(styleUrl, loadTime);
				loadedCount++;
				loadResults.set(styleUrl, {
					success: true,
					loadTime,
					retries
				});
				if (enablePerformanceMonitoring && loadTime > 1e3) lightGeneralLogger("warn", `Slow CSS loading detected: ${styleUrl} took ${loadTime.toFixed(2)}ms`, "css-loading-runtime");
				checkCompletion();
			};
			const onError = () => {
				if (retries < retryCount) {
					performanceMetrics.retriesPerformed++;
					lightGeneralLogger("error", `CSS loading failed for ${styleUrl}, retrying (${retries + 1}/${retryCount})`, "css-loading-runtime");
					if (link.parentNode) link.parentNode.removeChild(link);
					setTimeout(() => {
						loadStyleWithRetry(styleUrl, retries + 1);
					}, retryDelay * (retries + 1));
				} else {
					const loadTime = performance.now() - loadStartTime;
					failedCount++;
					loadResults.set(styleUrl, {
						success: false,
						loadTime,
						retries,
						error: "Load failed"
					});
					if (enablePerformanceMonitoring) lightGeneralLogger("error", `CSS loading failed permanently: ${styleUrl} after ${retries} retries`, "css-loading-runtime");
					checkCompletion();
				}
			};
			link.onload = onLoad;
			link.onerror = onError;
			document.head.appendChild(link);
		};
		highPriorityRenderStyles.forEach((styleUrl) => {
			loadStyleWithRetry(styleUrl);
		});
	});
}
const environment = (() => {
	if (typeof window !== "undefined") {
		if (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1") return "development";
		if (window.location.search.includes("debug=true") || window.location.search.includes("css-debug")) return "debug";
	}
	return "production";
})();
const cssLoadingConfig = createCSSLoadingConfig(environment);
async function cssLoadingRuntime(highPriorityRenderStyles) {
	const loadResult = await loadHighPriorityStyles(highPriorityRenderStyles, cssLoadingConfig);
	if (typeof window !== "undefined" && (window.location.hostname === "localhost" || window.location.search.includes("debug"))) {
		if (loadResult.timedOut) lightGeneralLogger("error", `CSS loading timed out. Loaded: ${loadResult.loadedCount}/${loadResult.totalCount}`, "css-loading-runtime");
		else if (loadResult.failedCount > 0) lightGeneralLogger("error", `Some CSS files failed to load: ${loadResult.failedCount}/${loadResult.totalCount} failed`, "css-loading-runtime");
		if (loadResult.metrics && loadResult.metrics.totalLoadTime) lightGeneralLogger("success", `Total CSS loading time: ${loadResult.metrics.totalLoadTime.toFixed(2)}ms`, "css-loading-runtime");
	}
	return loadResult;
}

//#endregion
export { cssLoadingRuntime as __CSS_LOADING_RUNTIME__ };