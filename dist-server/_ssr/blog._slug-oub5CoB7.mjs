import { t as ceo_ian_kariuki_default } from "./ceo-ian-kariuki-BNSciZmP.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as require_jsx_runtime } from "../_libs/@radix-ui/react-label+[...].mjs";
import { T as ArrowLeft, w as ArrowRight } from "../_libs/lucide-react.mjs";
import { t as CtaBand } from "./CtaBand-X-h8ueQG.mjs";
import { i as POSTS } from "./site-data-Cp-8uK8J.mjs";
import { a as slide_web_default, i as slide_security_default, n as slide_branding_default, r as slide_network_default, t as slide_analytics_default } from "./slide-web-2MY0h6c-.mjs";
import { t as Route } from "./blog._slug-CBwGo_p3.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/blog._slug-oub5CoB7.js
var import_jsx_runtime = require_jsx_runtime();
var IMAGES = {
	security: slide_security_default,
	network: slide_network_default,
	branding: slide_branding_default,
	web: slide_web_default,
	analytics: slide_analytics_default
};
var CLOSING_CTA = {
	"Cybersecurity Tips": {
		title: "Concerned about your business's security?",
		body: "Get a free security consultation and an honest view of where your gaps are."
	},
	"Branding Strategy": {
		title: "Thinking about your brand?",
		body: "Let's talk about whether a refresh or a rebuild makes more sense for you."
	},
	"Cloud Adoption": {
		title: "Planning a move to the cloud?",
		body: "We'll help you size it properly before anything gets migrated."
	},
	"Tech Trends": {
		title: "Want to talk this through for your business?",
		body: "Book a free consultation and we'll give you a straight answer."
	}
};
function formatDate(value) {
	return new Date(value).toLocaleDateString("en-GB", {
		day: "numeric",
		month: "long",
		year: "numeric"
	});
}
function PostPage() {
	const { post } = Route.useLoaderData();
	const related = POSTS.filter((p) => p.category === post.category && p.slug !== post.slug).slice(0, 3);
	const cta = CLOSING_CTA[post.category] ?? {
		title: "Want to talk it through?",
		body: "Book a free consultation and we'll help you find the right next step."
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "border-b border-border bg-secondary/30",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-page max-w-3xl py-16",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/blog",
						className: "inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-navy",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "size-4" }), "All insights"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow mt-8",
						children: post.category
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-4 text-3xl leading-tight font-semibold sm:text-4xl",
						children: post.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-5 text-sm text-muted-foreground",
						children: [
							formatDate(post.date),
							" · ",
							post.readTime
						]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "container-page max-w-4xl pb-16",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: IMAGES[post.image],
					alt: "",
					loading: "lazy",
					className: "h-72 w-full rounded-lg border border-border object-cover sm:h-96"
				})
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-page max-w-3xl py-14",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-lg leading-relaxed",
					children: post.excerpt
				}),
				post.body.map((section) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "mt-12",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-xl font-semibold",
						children: section.heading
					}), section.paragraphs.map((paragraph) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 leading-relaxed text-muted-foreground",
						children: paragraph
					}, paragraph.slice(0, 20)))]
				}, section.heading)),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-14 flex items-center gap-4 border-t border-border pt-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: ceo_ian_kariuki_default,
						alt: "Ian Kariuki",
						loading: "lazy",
						className: "size-14 rounded-full object-cover"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-sm font-semibold",
						children: "Ian Kariuki"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted-foreground",
						children: "CEO & Founder of Zebnex Tech Solutions"
					})] })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-10 rounded-lg border border-border bg-secondary/40 p-7",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-lg font-semibold",
							children: cta.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted-foreground",
							children: cta.body
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/contact",
							className: "mt-5 inline-flex items-center gap-2 rounded-md bg-navy px-5 py-3 text-sm font-medium text-primary-foreground",
							children: ["Talk to us", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
						})
					]
				})
			]
		}),
		related.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-t border-border py-16",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-page",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-2xl font-semibold",
					children: "Related reading"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 grid gap-6 md:grid-cols-3",
					children: related.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/blog/$slug",
						params: { slug: item.slug },
						className: "rounded-lg border border-border p-6 transition-all hover:-translate-y-1 hover:shadow-card",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow",
							children: item.category
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-3 font-display text-base leading-snug font-semibold",
							children: item.title
						})]
					}, item.slug))
				})]
			})
		})
	] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaBand, {
		title: "Still Have Questions?",
		body: "No question is too small — reach out and let's figure out the right next step for your business.",
		buttonLabel: "Send a Message"
	})] });
}
//#endregion
export { PostPage as component };
