import { r as __toESM } from "../_runtime.mjs";
import { t as about_team_default } from "./about-team-dDQVOF3Z.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { E as isRedirect, g as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as require_jsx_runtime, t as Root } from "../_libs/@radix-ui/react-label+[...].mjs";
import { S as CircleCheck, f as MapPin, o as Phone, p as Mail } from "../_libs/lucide-react.mjs";
import { t as PageHeader } from "./PageHeader-ga8U6oTB.mjs";
import { t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { n as Input, r as cn, t as Button } from "./input-BZBVMCdW.mjs";
import { r as CONTACT } from "./site-data-Cp-8uK8J.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as getServerFnById } from "../__23tanstack-start-server-fn-resolver-D1YJCIYS.mjs";
import { c as createServerFn, i as TSS_SERVER_FUNCTION } from "./createServerFn-CIHAFgYl.mjs";
import { i as stringType, n as literalType, r as objectType, t as enumType } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-BBmtFhai.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function useServerFn(serverFn) {
	const router = useRouter();
	return import_react.useCallback(async (...args) => {
		try {
			const res = await serverFn(...args);
			if (isRedirect(res)) throw res;
			return res;
		} catch (err) {
			if (isRedirect(err)) {
				err.options._fromLocation = router.stores.location.get();
				return router.navigate(router.resolveRedirect(err).options);
			}
			throw err;
		}
	}, [router, serverFn]);
}
var labelVariants = cva("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70");
var Label = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root, {
	ref,
	className: cn(labelVariants(), className),
	...props
}));
Label.displayName = Root.displayName;
var Textarea = import_react.forwardRef(({ className, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
		className: cn("flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
		ref,
		...props
	});
});
Textarea.displayName = "Textarea";
var createSsrRpc = (functionId) => {
	const url = "/_serverFn/" + functionId;
	const serverFnMeta = { id: functionId };
	const fn = async (...args) => {
		return (await getServerFnById(functionId, { origin: "server" }))(...args);
	};
	return Object.assign(fn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var ContactSchema = objectType({
	name: stringType().trim().min(2).max(100),
	email: stringType().trim().email().max(255),
	phone: stringType().trim().max(40).optional().or(literalType("")),
	service: enumType([
		"Web Development",
		"Networking",
		"Database Management",
		"Data Analysis",
		"Cloud Services",
		"Cybersecurity",
		"Software Development",
		"Branding",
		"Other"
	]),
	message: stringType().trim().min(10).max(2e3)
});
var submitEnquiry = createServerFn({ method: "POST" }).inputValidator((input) => ContactSchema.parse(input)).handler(createSsrRpc("3477bbe8085620ba9289f59e66cf1dd7377291ec33cebc9aefe265ae382244ea"));
var SERVICES = [
	"Web Development",
	"Networking",
	"Database Management",
	"Data Analysis",
	"Cloud Services",
	"Cybersecurity",
	"Software Development",
	"Branding",
	"Other"
];
var FAQS = [
	{
		q: "How quickly can you start a project?",
		a: "Typically within 1–2 weeks of an agreed proposal, depending on project scope and our current workload."
	},
	{
		q: "Do you work with businesses outside Nairobi?",
		a: "Yes — many of our services (web, software, cloud, branding) can be delivered fully remotely, and we can arrange on-site visits for networking and infrastructure work when needed."
	},
	{
		q: "What does the free consultation actually involve?",
		a: "A short call or meeting to understand your needs and give you an honest sense of what's possible, what it would cost, and whether we're the right fit — no obligation."
	}
];
function ContactPage() {
	const send = useServerFn(submitEnquiry);
	const [sending, setSending] = (0, import_react.useState)(false);
	const [done, setDone] = (0, import_react.useState)(false);
	async function handleSubmit(event) {
		event.preventDefault();
		const form = new FormData(event.currentTarget);
		setSending(true);
		try {
			await send({ data: {
				name: String(form.get("name") ?? ""),
				email: String(form.get("email") ?? ""),
				phone: String(form.get("phone") ?? ""),
				service: String(form.get("service") ?? "Other"),
				message: String(form.get("message") ?? "")
			} });
			setDone(true);
		} catch {
			toast.error("We couldn't send that. Please call us on +254 115 339 092 instead.");
		} finally {
			setSending(false);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
		eyebrow: "Contact",
		title: "Let's Build Something Together",
		subtitle: "Whether you have a specific project in mind or just want to explore what's possible, we'd love to hear from you. Reach out and we'll get back to you promptly.",
		image: about_team_default
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "container-page grid gap-14 py-20 lg:grid-cols-[1fr_1.2fr]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-2xl font-semibold",
				children: "Contact details"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
				className: "mt-8 space-y-7",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "mt-1 size-5 shrink-0 stroke-[1.5] text-navy" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted-foreground",
							children: "Phone"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: CONTACT.phoneHref,
							className: "font-display text-base font-medium",
							children: CONTACT.phone
						})] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "mt-1 size-5 shrink-0 stroke-[1.5] text-navy" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted-foreground",
							children: "Email"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: `mailto:${CONTACT.email}`,
							className: "font-display text-base font-medium break-all",
							children: CONTACT.email
						})] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "mt-1 size-5 shrink-0 stroke-[1.5] text-navy" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-muted-foreground",
								children: "Location"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-base font-medium",
								children: CONTACT.location
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-muted-foreground",
								children: CONTACT.hours
							})
						] })]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow",
					children: "Social"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground",
					children: CONTACT.socials.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: s.url,
						target: "_blank",
						rel: "noreferrer noopener",
						className: "hover:text-navy",
						children: s.name
					}) }, s.name))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 overflow-hidden rounded-lg border border-border",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
					title: "Zebnex Tech Solutions location",
					src: "https://www.google.com/maps?q=Pioneer%20Trading%20Centre%20Utawala%20Nairobi&output=embed",
					loading: "lazy",
					className: "h-64 w-full"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-10 rounded-lg border border-border bg-secondary/40 p-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-display text-base font-semibold",
					children: "Prefer to Talk Directly?"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-2 text-sm leading-relaxed text-muted-foreground",
					children: [
						"Call us at ",
						CONTACT.phone,
						", or reach out on any of our social channels — we're active and responsive across Instagram, Facebook, LinkedIn, X and TikTok if you'd rather message us there."
					]
				})]
			})
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rounded-lg border border-border bg-card p-8 shadow-card",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-2xl font-semibold",
				children: "Send Us a Message"
			}), done ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 flex gap-3 rounded-md border border-border bg-secondary/40 p-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "mt-0.5 size-5 shrink-0 text-navy" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm leading-relaxed",
					children: "Thanks for reaching out! A member of our team will get back to you within 1 business day."
				})]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "mt-8 space-y-6",
				onSubmit: handleSubmit,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "name",
							children: "Full name *"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "name",
							name: "name",
							required: true,
							maxLength: 100,
							autoComplete: "name"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "email",
							children: "Email address *"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "email",
							name: "email",
							type: "email",
							required: true,
							maxLength: 255,
							autoComplete: "email"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "phone",
							children: "Phone number"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "phone",
							name: "phone",
							type: "tel",
							maxLength: 40,
							autoComplete: "tel"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "service",
							children: "Service of interest"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
							id: "service",
							name: "service",
							defaultValue: "Web Development",
							className: "h-10 w-full rounded-md border border-input bg-background px-3 text-sm outline-none focus:border-navy",
							children: SERVICES.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: s,
								children: s
							}, s))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "message",
							children: "Message *"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
							id: "message",
							name: "message",
							required: true,
							rows: 6,
							maxLength: 2e3
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "submit",
						disabled: sending,
						className: "w-full sm:w-auto",
						children: sending ? "Sending…" : "Send Message"
					})
				]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-2xl font-semibold",
				children: "Frequently asked"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
				className: "mt-8",
				children: FAQS.map((faq, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: i > 0 ? "border-t border-border pt-6" : "",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
						className: "font-display text-base font-semibold",
						children: faq.q
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
						className: "mt-2 pb-6 text-sm leading-relaxed text-muted-foreground",
						children: faq.a
					})]
				}, faq.q))
			})]
		})] })]
	})] });
}
//#endregion
export { ContactPage as component };
