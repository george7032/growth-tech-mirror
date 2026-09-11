import { t as hero_office_default } from "./hero-office-B4AOEpZw.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as require_jsx_runtime } from "../_libs/@radix-ui/react-label+[...].mjs";
import { C as ChartColumn, _ as Globe, b as CodeXml, c as Network, f as MapPin, h as Layers, i as ShieldCheck, n as TrendingUp, r as ShieldHalf, s as Palette, w as ArrowRight, x as Cloud, y as Database } from "../_libs/lucide-react.mjs";
import { t as CtaBand } from "./CtaBand-X-h8ueQG.mjs";
import { a as PROJECTS, i as POSTS, n as CLIENTS, o as SERVICES } from "./site-data-Cp-8uK8J.mjs";
import { a as slide_web_default, i as slide_security_default, n as slide_branding_default, r as slide_network_default, t as slide_analytics_default } from "./slide-web-2MY0h6c-.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BLIfSJJl.js
var import_jsx_runtime = require_jsx_runtime();
var project_tenant_default = "/assets/project-tenant-BT2gtRl9.jpg";
var project_ticketing_default = "/assets/project-ticketing-OnZAqboz.jpg";
function ImageMarquee({ slides }) {
	const loop = [...slides, ...slides];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		"aria-label": "Our work",
		className: "overflow-hidden border-y border-border bg-secondary/30 py-14",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "container-page mb-8 flex items-end justify-between gap-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "eyebrow",
				children: "In the field"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-3 text-2xl font-semibold sm:text-3xl",
				children: "Work we're proud of"
			})] })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "group relative",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex w-max animate-marquee gap-6 group-hover:[animation-play-state:paused]",
				children: loop.map((slide, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
					className: "w-[300px] shrink-0 overflow-hidden rounded-lg border border-border bg-card shadow-card sm:w-[420px]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: slide.src,
						alt: slide.label,
						loading: "lazy",
						className: "h-[200px] w-full object-cover sm:h-[260px]"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
						className: "p-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-sm font-semibold",
							children: slide.label
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-muted-foreground",
							children: slide.caption
						})]
					})]
				}, `${slide.label}-${i}`))
			})
		})]
	});
}
var ICONS = {
	"web-development": Globe,
	networking: Network,
	"database-management": Database,
	"data-analysis": ChartColumn,
	"cloud-services": Cloud,
	cybersecurity: ShieldHalf,
	"software-development": CodeXml,
	branding: Palette
};
var SLIDES = [
	{
		src: slide_network_default,
		label: "Network & infrastructure",
		caption: "Structured cabling, wireless design and monitoring."
	},
	{
		src: project_ticketing_default,
		label: "TUK Ticketing System",
		caption: "Mobile and kiosk ticketing for a transport operator."
	},
	{
		src: project_tenant_default,
		label: "Tenant Management System",
		caption: "Units, leases, rent invoicing and arrears in one place."
	},
	{
		src: slide_branding_default,
		label: "Brand identity",
		caption: "Logos, palettes and guidelines that stay consistent."
	},
	{
		src: slide_web_default,
		label: "Websites & web apps",
		caption: "Fast, responsive sites that are easy to maintain."
	}
];
var REASONS = [
	{
		icon: Layers,
		title: "One partner, many disciplines",
		body: "No juggling multiple vendors for web, network, cloud and brand work."
	},
	{
		icon: ShieldCheck,
		title: "Security-first thinking",
		body: "Every system we build considers protection from day one, not as an afterthought."
	},
	{
		icon: MapPin,
		title: "Local understanding, global standards",
		body: "We build for the realities of doing business in Kenya, to the standards used internationally."
	},
	{
		icon: TrendingUp,
		title: "Solutions that scale with you",
		body: "What we build today is designed to grow with your business, not to be replaced in a year."
	}
];
var POST_IMAGES = {
	security: slide_security_default,
	network: slide_network_default,
	branding: slide_branding_default,
	web: slide_web_default,
	analytics: slide_analytics_default
};
function HomePage() {
	const latest = POSTS.slice(0, 3);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative isolate overflow-hidden bg-navy-deep",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: hero_office_default,
					alt: "Team collaborating in a modern office",
					width: 1920,
					height: 1088,
					className: "absolute inset-0 size-full object-cover opacity-60"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/90 to-navy-deep/30" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "container-page relative py-28 sm:py-40",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "max-w-2xl animate-rise",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "eyebrow text-silver/70",
								children: "Zebnex Tech Solutions"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "mt-6 text-4xl leading-[1.08] font-semibold text-primary-foreground sm:text-5xl lg:text-6xl",
								children: "Technology and Identity, Built for Growth"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mt-8 h-px w-24 bg-silver/70" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-8 text-base leading-relaxed text-primary-foreground/75 sm:text-lg",
								children: "Zebnex Tech Solutions helps businesses run securely, connect confidently, and stand out in the market — through smart, reliable technology and branding that leaves a lasting impression. Whether you're building your first website, securing your network, or reimagining your brand identity, we bring the technical depth and creative eye to get it right."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-10 flex flex-wrap gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/contact",
									className: "group inline-flex items-center gap-2 rounded-md bg-primary-foreground px-7 py-4 text-sm font-medium text-navy transition-colors hover:bg-silver-muted",
									children: ["Book a Free Consultation", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4 transition-transform group-hover:translate-x-1" })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/services",
									className: "inline-flex items-center gap-2 rounded-md border border-primary-foreground/30 px-7 py-4 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-foreground/10",
									children: "Explore our services"
								})]
							})
						]
					})
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-page grid gap-12 py-20 lg:grid-cols-2 lg:items-center lg:gap-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow",
					children: "End to end"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-3xl font-semibold sm:text-4xl",
					children: "Your Technology Partner, End to End"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "hairline mt-6" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 leading-relaxed text-muted-foreground",
					children: "Most businesses don't need a dozen different vendors — they need one partner who understands the whole picture. From the servers that keep your business running, to the software that solves your unique problems, to the brand that makes customers remember you, Zebnex brings it all under one roof."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 leading-relaxed text-muted-foreground",
					children: "We work with startups taking their first digital steps and established companies scaling into new markets, tailoring every solution to where you are and where you're headed."
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "overflow-hidden rounded-lg border border-border shadow-card",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: slide_network_default,
					alt: "Server room supporting business operations",
					width: 1600,
					height: 1e3,
					loading: "lazy",
					className: "h-full w-full object-cover"
				})
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImageMarquee, { slides: SLIDES }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-page py-20",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow",
					children: "What we do"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 max-w-2xl text-3xl font-semibold sm:text-4xl",
					children: "A full spectrum of technology and branding services"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 max-w-2xl text-muted-foreground",
					children: "Designed to work together or stand alone — whatever your business needs right now."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4",
					children: SERVICES.map((service) => {
						const Icon = ICONS[service.slug];
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/services",
							hash: service.slug,
							className: "group rounded-lg border border-border bg-secondary/30 p-6 transition-all hover:-translate-y-1 hover:bg-card hover:shadow-lift",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-6 stroke-[1.4] text-navy transition-colors group-hover:text-navy-deep" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-5 font-display text-base font-semibold",
									children: service.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm leading-relaxed text-muted-foreground",
									children: service.tagline
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "mt-4 inline-flex items-center gap-1 text-sm font-medium text-navy",
									children: ["Learn more", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-3.5 transition-transform group-hover:translate-x-1" })]
								})
							]
						}, service.slug);
					})
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-y border-border bg-secondary/30 py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-page",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow",
						children: "Selected work"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-4 text-3xl font-semibold sm:text-4xl",
						children: "Systems we've built"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-12 grid gap-6 md:grid-cols-2",
						children: PROJECTS.map((project, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "overflow-hidden rounded-lg border border-border bg-card shadow-card",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: i === 0 ? project_ticketing_default : project_tenant_default,
								alt: project.title,
								width: 1400,
								height: 1e3,
								loading: "lazy",
								className: "h-56 w-full object-cover"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "p-7",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-display text-lg font-semibold",
										children: project.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 text-sm leading-relaxed text-muted-foreground",
										children: project.summary
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
										className: "mt-5 flex flex-wrap gap-2",
										children: project.tags.map((tag) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
											className: "rounded-full border border-border px-3 py-1 text-xs text-muted-foreground",
											children: tag
										}, tag))
									})
								]
							})]
						}, project.title))
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-page py-20",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow",
					children: "Why businesses choose Zebnex"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-3xl font-semibold sm:text-4xl",
					children: "Reliability You Can Build On"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4",
					children: REASONS.map((reason) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(reason.icon, { className: "size-6 stroke-[1.4] text-navy" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-5 font-display text-base font-semibold",
							children: reason.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm leading-relaxed text-muted-foreground",
							children: reason.body
						})
					] }, reason.title))
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-y border-border py-16",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-page text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-2xl font-semibold sm:text-3xl",
						children: "Trusted by Businesses Across Kenya"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mx-auto mt-4 max-w-2xl text-sm text-muted-foreground",
						children: "We're proud to have earned the trust of organizations across different industries — from education and hospitality to security and professional services."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-10 flex flex-wrap items-center justify-center gap-x-12 gap-y-6",
						children: CLIENTS.map((client) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							className: "font-display text-sm font-medium tracking-wide text-muted-foreground/70 transition-colors hover:text-navy",
							children: client
						}, client))
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-page py-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-end justify-between gap-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow",
					children: "From our blog"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-3xl font-semibold sm:text-4xl",
					children: "Insights & ideas"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/blog",
					className: "group inline-flex items-center gap-1 text-sm font-medium text-navy",
					children: ["View All Insights", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4 transition-transform group-hover:translate-x-1" })]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 grid gap-6 md:grid-cols-3",
				children: latest.map((post) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/blog/$slug",
					params: { slug: post.slug },
					className: "group overflow-hidden rounded-lg border border-border bg-card transition-all hover:-translate-y-1 hover:shadow-lift",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: POST_IMAGES[post.image],
						alt: "",
						loading: "lazy",
						className: "h-44 w-full object-cover"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-6",
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
								className: "mt-2 text-sm text-muted-foreground",
								children: post.excerpt
							})
						]
					})]
				}, post.slug))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaBand, {
			title: "Ready to Build Something That Lasts?",
			body: "Whether you need a secure network, a standout website, or a brand people remember — let's talk about what's next for your business.",
			buttonLabel: "Get a Free Consultation"
		})
	] });
}
//#endregion
export { HomePage as component };
