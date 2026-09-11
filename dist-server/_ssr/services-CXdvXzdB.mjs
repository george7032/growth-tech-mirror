import { i as require_jsx_runtime } from "../_libs/@radix-ui/react-label+[...].mjs";
import { t as CtaBand } from "./CtaBand-X-h8ueQG.mjs";
import { t as PageHeader } from "./PageHeader-ga8U6oTB.mjs";
import { o as SERVICES } from "./site-data-Cp-8uK8J.mjs";
import { a as slide_web_default, i as slide_security_default, n as slide_branding_default, r as slide_network_default, t as slide_analytics_default } from "./slide-web-2MY0h6c-.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/services-CXdvXzdB.js
var import_jsx_runtime = require_jsx_runtime();
var VISUALS = {
	"web-development": slide_web_default,
	networking: slide_network_default,
	"data-analysis": slide_analytics_default,
	cybersecurity: slide_security_default,
	branding: slide_branding_default
};
var STEPS = [
	{
		title: "Consultation",
		body: "We start by understanding your business, your challenges, and what success looks like for you."
	},
	{
		title: "Proposal",
		body: "We put together a clear scope and quote, so you know exactly what you're getting and what it costs."
	},
	{
		title: "Execution",
		body: "Our team gets to work, with regular check-ins so you're never left wondering about progress."
	},
	{
		title: "Delivery & Support",
		body: "We hand over what we've built with proper documentation and training, and remain available for ongoing support."
	}
];
function ServicesPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			eyebrow: "Services",
			title: "Solutions Built Around Your Business",
			subtitle: "From the infrastructure that keeps you running to the brand that makes you memorable, our services are designed to work together — or stand entirely on their own.",
			image: slide_branding_default
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "container-page py-20",
			children: SERVICES.map((service, index) => {
				const visual = VISUALS[service.slug];
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					id: service.slug,
					className: `scroll-mt-24 grid gap-10 py-14 lg:grid-cols-2 lg:items-center lg:gap-16 ${index > 0 ? "border-t border-border" : ""}`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: visual && index % 2 === 1 ? "lg:order-2" : "",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "eyebrow",
								children: ["0", index + 1]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-4 text-3xl font-semibold",
								children: service.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 font-display text-base text-navy",
								children: service.tagline
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "hairline mt-6" }),
							service.body.map((paragraph) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-5 leading-relaxed text-muted-foreground",
								children: paragraph
							}, paragraph.slice(0, 24))),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-7 rounded-lg border border-border bg-secondary/40 p-5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "eyebrow",
									children: "What's included"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm leading-relaxed text-muted-foreground",
									children: service.included
								})]
							})
						]
					}), visual ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "overflow-hidden rounded-lg border border-border shadow-card",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: visual,
							alt: service.title,
							loading: "lazy",
							className: "h-full w-full object-cover"
						})
					}) : null]
				}, service.slug);
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-y border-border bg-secondary/30 py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-page",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow",
						children: "How we work"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-4 text-3xl font-semibold",
						children: "A Simple, Transparent Process"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
						className: "mt-12 grid gap-8 md:grid-cols-4",
						children: STEPS.map((step, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "flex size-11 items-center justify-center rounded-full border border-navy font-display text-sm font-semibold text-navy",
								children: i + 1
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-5 font-display text-base font-semibold",
								children: step.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm leading-relaxed text-muted-foreground",
								children: step.body
							})
						] }, step.title))
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaBand, {
			title: "Not Sure Which Service You Need?",
			body: "That's exactly what the free consultation is for — tell us what you're trying to achieve, and we'll help you figure out the right starting point.",
			buttonLabel: "Get a Free Consultation"
		})
	] });
}
//#endregion
export { ServicesPage as component };
