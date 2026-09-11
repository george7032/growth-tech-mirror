import { r as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as require_jsx_runtime } from "../_libs/@radix-ui/react-label+[...].mjs";
import { w as ArrowRight } from "../_libs/lucide-react.mjs";
import { t as CtaBand } from "./CtaBand-X-h8ueQG.mjs";
import { t as PageHeader } from "./PageHeader-ga8U6oTB.mjs";
import { n as Input, t as Button } from "./input-BZBVMCdW.mjs";
import { i as POSTS, t as CATEGORIES } from "./site-data-Cp-8uK8J.mjs";
import { a as slide_web_default } from "./slide-web-2MY0h6c-.mjs";
import { t as POST_IMAGES } from "./blog-DCh6DQFI.mjs";
import { n as toast } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/blog-BfEAen8O.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var FILTERS = ["All", ...CATEGORIES];
function formatDate(value) {
	return new Date(value).toLocaleDateString("en-GB", {
		day: "numeric",
		month: "long",
		year: "numeric"
	});
}
function BlogPage() {
	const [filter, setFilter] = (0, import_react.useState)("All");
	const [email, setEmail] = (0, import_react.useState)("");
	const [featured, ...rest] = filter === "All" ? POSTS : POSTS.filter((p) => p.category === filter);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			eyebrow: "Insights",
			title: "Insights & Ideas",
			subtitle: "Practical thinking on technology, security, and branding — written for business owners and decision-makers, not just engineers.",
			image: slide_web_default
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-page py-16",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-wrap gap-2",
					children: FILTERS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setFilter(item),
						className: `rounded-full border px-4 py-2 text-sm transition-colors ${filter === item ? "border-navy bg-navy text-primary-foreground" : "border-border text-muted-foreground hover:border-navy hover:text-navy"}`,
						children: item
					}, item))
				}),
				featured && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/blog/$slug",
					params: { slug: featured.slug },
					className: "group mt-12 grid overflow-hidden rounded-lg border border-border bg-card shadow-card transition-all hover:shadow-lift lg:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: POST_IMAGES[featured.image],
						alt: "",
						loading: "lazy",
						className: "h-64 w-full object-cover lg:h-full"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-8 lg:p-10",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "eyebrow",
								children: featured.category
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-4 font-display text-2xl leading-snug font-semibold sm:text-3xl",
								children: featured.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 leading-relaxed text-muted-foreground",
								children: featured.excerpt
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-6 text-xs text-muted-foreground",
								children: [
									formatDate(featured.date),
									" · ",
									featured.readTime
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "mt-6 inline-flex items-center gap-1 text-sm font-medium text-navy",
								children: ["Read More", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4 transition-transform group-hover:translate-x-1" })]
							})
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3",
					children: rest.map((post) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/blog/$slug",
						params: { slug: post.slug },
						className: "group flex flex-col overflow-hidden rounded-lg border border-border bg-card transition-all hover:-translate-y-1 hover:shadow-lift",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: POST_IMAGES[post.image],
							alt: "",
							loading: "lazy",
							className: "h-44 w-full object-cover"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-1 flex-col p-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "eyebrow",
									children: post.category
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-3 font-display text-base leading-snug font-semibold",
									children: post.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 flex-1 text-sm text-muted-foreground",
									children: post.excerpt
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-4 text-xs text-muted-foreground",
									children: [
										formatDate(post.date),
										" · ",
										post.readTime
									]
								})
							]
						})]
					}, post.slug))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-16 rounded-lg border border-border bg-secondary/40 p-8 md:flex md:items-center md:justify-between md:gap-10",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-xl font-semibold",
						children: "Enjoying our insights?"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted-foreground",
						children: "Get new articles delivered straight to your inbox."
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						className: "mt-5 flex gap-2 md:mt-0 md:w-96",
						onSubmit: (e) => {
							e.preventDefault();
							if (!email.trim()) return;
							setEmail("");
							toast.success("You're on the list — thanks for subscribing.");
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							type: "email",
							required: true,
							"aria-label": "Email address",
							placeholder: "you@company.co.ke",
							value: email,
							onChange: (e) => setEmail(e.target.value)
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "submit",
							children: "Subscribe"
						})]
					})]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaBand, {
			title: "Have a Topic You'd Like Us to Cover?",
			body: "We're always looking for the questions our clients are actually asking — reach out and let us know what you'd find useful.",
			buttonLabel: "Contact Us"
		})
	] });
}
//#endregion
export { BlogPage as component };
