import { r as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { c as HeadContent, d as Outlet, f as lazyRouteComponent, g as useRouter, h as Link, m as createRootRouteWithContext, p as createFileRoute, s as Scripts, u as createRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as require_jsx_runtime } from "../_libs/@radix-ui/react-label+[...].mjs";
import { a as Send, d as Menu, g as Instagram, l as Music2, m as Linkedin, o as Phone, p as Mail, t as X, u as MessageSquare, v as Facebook } from "../_libs/lucide-react.mjs";
import { n as Input, t as Button } from "./input-BZBVMCdW.mjs";
import { r as CONTACT } from "./site-data-Cp-8uK8J.mjs";
import { n as Route$6 } from "./blog-DCh6DQFI.mjs";
import { n as toast, t as Toaster } from "../_libs/sonner.mjs";
import { t as Route$7 } from "./blog._slug-CBwGo_p3.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { t as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-Dp38L4iF.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var zebnex_logo_default = "/assets/zebnex-logo-BXAx6TgH.png";
var ICONS = {
	Instagram,
	Facebook,
	LinkedIn: Linkedin,
	TikTok: Music2
};
function XIcon({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		viewBox: "0 0 24 24",
		"aria-hidden": true,
		className,
		fill: "currentColor",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M18.2 2.5h3.3l-7.2 8.2 8.5 10.8h-6.7l-5.2-6.6-6 6.6H1.6l7.5-8.5L1 2.5h6.8l4.9 6.2 5.5-6.2Zm-1.2 17.1h1.8L7 4.3H5.1L17 19.6Z" })
	});
}
function Footer() {
	const [email, setEmail] = (0, import_react.useState)("");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "border-t border-border bg-secondary/40",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-page grid gap-12 py-16 lg:grid-cols-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: zebnex_logo_default,
							alt: "",
							width: 512,
							height: 512,
							loading: "lazy",
							className: "h-10 w-10"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display font-semibold",
							children: "Zebnex Tech Solutions"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-xs text-sm text-muted-foreground",
						children: "Empowering Businesses Through Technology & Identity"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-sm font-semibold",
					children: "Quick links"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-4 space-y-2 text-sm text-muted-foreground",
					children: [
						{
							to: "/",
							label: "Home"
						},
						{
							to: "/about",
							label: "About"
						},
						{
							to: "/services",
							label: "Services"
						},
						{
							to: "/blog",
							label: "Blog"
						},
						{
							to: "/contact",
							label: "Contact"
						}
					].map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: l.to,
						className: "transition-colors hover:text-foreground",
						children: l.label
					}) }, l.to))
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-sm font-semibold",
						children: "Get in touch"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "mt-4 space-y-3 text-sm text-muted-foreground",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: CONTACT.phoneHref,
									className: "hover:text-foreground",
									children: CONTACT.phone
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "size-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: `mailto:${CONTACT.email}`,
									className: "break-all hover:text-foreground",
									children: CONTACT.email
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								className: "text-xs leading-relaxed",
								children: CONTACT.location
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-5 flex items-center gap-4",
						children: CONTACT.socials.map((s) => {
							const Icon = ICONS[s.name];
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: s.url,
								target: "_blank",
								rel: "noreferrer noopener",
								"aria-label": s.name,
								className: "text-muted-foreground transition-colors hover:text-foreground",
								children: Icon ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(XIcon, { className: "size-4" })
							}, s.name);
						})
					})
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-sm font-semibold",
						children: "Newsletter"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-sm text-muted-foreground",
						children: "Get tech tips and updates in your inbox"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						className: "mt-4 flex gap-2",
						onSubmit: (e) => {
							e.preventDefault();
							if (!email.trim()) return;
							setEmail("");
							toast.success("You're subscribed — thanks for joining us.");
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
							variant: "secondary",
							children: "Subscribe"
						})]
					})
				] })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-border/70",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-page py-6 text-xs text-muted-foreground",
				children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" Zebnex Tech Solutions. All rights reserved."
				]
			})
		})]
	});
}
var NAV = [
	{
		to: "/",
		label: "Home"
	},
	{
		to: "/about",
		label: "About"
	},
	{
		to: "/services",
		label: "Services"
	},
	{
		to: "/blog",
		label: "Insights"
	},
	{
		to: "/contact",
		label: "Contact"
	}
];
function Header() {
	const [open, setOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "sticky top-0 z-40 border-b border-border/70 bg-background/90 backdrop-blur",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-page flex h-18 items-center justify-between gap-6 py-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					className: "flex items-center gap-3",
					onClick: () => setOpen(false),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: zebnex_logo_default,
						alt: "Zebnex Tech Solutions",
						width: 512,
						height: 512,
						className: "h-10 w-10"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "font-display text-base leading-tight font-semibold",
						children: ["Zebnex", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block text-[11px] tracking-[0.16em] text-muted-foreground uppercase",
							children: "Tech Solutions"
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden items-center gap-8 md:flex",
					children: NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: item.to,
						className: "text-sm text-muted-foreground transition-colors hover:text-foreground [&.active]:text-foreground [&.active]:font-medium",
						activeOptions: { exact: item.to === "/" },
						children: item.label
					}, item.to))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "hidden md:block",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/contact",
							children: "Book a Free Consultation"
						})
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					"aria-label": open ? "Close menu" : "Open menu",
					className: "md:hidden",
					onClick: () => setOpen((v) => !v),
					children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-6" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-6" })
				})
			]
		}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-border bg-background md:hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "container-page flex flex-col py-2",
				children: [NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: item.to,
					onClick: () => setOpen(false),
					className: "border-b border-border/60 py-3 text-sm",
					children: item.label
				}, item.to)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					className: "my-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/contact",
						onClick: () => setOpen(false),
						children: "Book a Free Consultation"
					})
				})]
			})
		})]
	});
}
var STORAGE_KEY = "zebnex-chat-v1";
var GREETING = {
	role: "assistant",
	content: "Hi! I'm the Zebnex assistant. Ask me about web development, networking, cloud, cybersecurity or branding — or tell me what your business needs and I'll point you to the right starting point."
};
function ChatWidget({ open, onOpenChange }) {
	const [messages, setMessages] = (0, import_react.useState)([GREETING]);
	const [input, setInput] = (0, import_react.useState)("");
	const [sending, setSending] = (0, import_react.useState)(false);
	const [error, setError] = (0, import_react.useState)(null);
	const scrollRef = (0, import_react.useRef)(null);
	const inputRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		try {
			const raw = window.localStorage.getItem(STORAGE_KEY);
			if (raw) {
				const parsed = JSON.parse(raw);
				if (Array.isArray(parsed) && parsed.length) setMessages(parsed);
			}
		} catch {}
	}, []);
	(0, import_react.useEffect)(() => {
		try {
			window.localStorage.setItem(STORAGE_KEY, JSON.stringify(messages.slice(-40)));
		} catch {}
		scrollRef.current?.scrollTo({
			top: scrollRef.current.scrollHeight,
			behavior: "smooth"
		});
	}, [messages]);
	(0, import_react.useEffect)(() => {
		if (open) inputRef.current?.focus();
	}, [open, sending]);
	async function send() {
		const text = input.trim();
		if (!text || sending) return;
		const next = [...messages, {
			role: "user",
			content: text
		}];
		setMessages(next);
		setInput("");
		setSending(true);
		setError(null);
		try {
			const res = await fetch("/api/chat", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ messages: next.slice(-16) })
			});
			if (!res.ok || !res.body) throw new Error(await res.text().catch(() => "failed"));
			const reader = res.body.pipeThrough(new TextDecoderStream()).getReader();
			let reply = "";
			setMessages([...next, {
				role: "assistant",
				content: ""
			}]);
			while (true) {
				const { value, done } = await reader.read();
				if (done) break;
				reply += value;
				setMessages([...next, {
					role: "assistant",
					content: reply
				}]);
			}
			if (!reply.trim()) setMessages([...next, {
				role: "assistant",
				content: "I couldn't put that into words just now. Could you rephrase, or reach us on +254 115 339 092?"
			}]);
		} catch {
			setError("The assistant is unavailable right now. Please try again or message us on WhatsApp.");
		} finally {
			setSending(false);
		}
	}
	if (!open) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fixed right-4 bottom-24 z-50 flex h-[min(560px,72vh)] w-[min(380px,calc(100vw-2rem))] flex-col overflow-hidden rounded-xl border border-border bg-card shadow-lift sm:right-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-3 border-b border-border bg-navy px-4 py-3 text-primary-foreground",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: zebnex_logo_default,
						alt: "",
						width: 512,
						height: 512,
						className: "size-8 rounded"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-sm font-semibold",
							children: "Zebnex Assistant"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-primary-foreground/70",
							children: "Usually replies instantly"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						"aria-label": "Close chat",
						onClick: () => onOpenChange(false),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" })
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				ref: scrollRef,
				className: "flex-1 space-y-4 overflow-y-auto px-4 py-4",
				children: [
					messages.map((m, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: m.role === "user" ? "flex justify-end" : "",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: m.role === "user" ? "max-w-[85%] rounded-lg rounded-br-sm bg-navy px-3.5 py-2.5 text-sm whitespace-pre-wrap text-primary-foreground" : "max-w-full text-sm leading-relaxed whitespace-pre-wrap text-foreground",
							children: m.content
						})
					}, i)),
					sending && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "animate-pulse text-sm text-muted-foreground",
						children: "Thinking…"
					}),
					error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-destructive",
						children: error
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("form", {
				className: "border-t border-border p-3",
				onSubmit: (e) => {
					e.preventDefault();
					send();
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-end gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
						ref: inputRef,
						rows: 1,
						value: input,
						onChange: (e) => setInput(e.target.value),
						onKeyDown: (e) => {
							if (e.key === "Enter" && !e.shiftKey) {
								e.preventDefault();
								send();
							}
						},
						placeholder: "Ask about our services…",
						className: "max-h-28 flex-1 resize-none rounded-md border border-input bg-background px-3 py-2.5 text-sm outline-none focus:border-navy"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "submit",
						"aria-label": "Send message",
						disabled: sending || !input.trim(),
						className: "flex size-10 shrink-0 items-center justify-center rounded-md bg-navy text-primary-foreground transition-opacity disabled:opacity-40",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "size-4" })
					})]
				})
			})
		]
	});
}
function ChatLauncher({ onClick, open }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		onClick,
		"aria-label": open ? "Close assistant" : "Chat with the Zebnex assistant",
		className: "flex size-13 items-center justify-center rounded-full bg-navy text-primary-foreground shadow-lift transition-transform hover:scale-105",
		children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageSquare, { className: "size-5" })
	});
}
function WhatsAppIcon({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		viewBox: "0 0 24 24",
		fill: "currentColor",
		"aria-hidden": true,
		className,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12.04 2c-5.46 0-9.9 4.44-9.9 9.9 0 1.75.46 3.45 1.32 4.95L2 22l5.3-1.39c1.45.79 3.08 1.2 4.74 1.2 5.46 0 9.9-4.44 9.9-9.9S17.5 2 12.04 2Zm0 18.03c-1.5 0-2.98-.4-4.27-1.16l-.31-.18-3.15.83.84-3.07-.2-.32a8.13 8.13 0 0 1-1.25-4.33c0-4.49 3.65-8.14 8.14-8.14 4.49 0 8.14 3.65 8.14 8.14s-3.65 8.23-7.94 8.23Zm4.47-6.1c-.24-.12-1.44-.71-1.66-.79-.22-.08-.39-.12-.55.12-.16.25-.63.79-.77.95-.14.16-.28.18-.52.06-.24-.12-1.02-.38-1.94-1.2-.72-.64-1.2-1.43-1.34-1.67-.14-.24-.02-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.55-1.32-.75-1.8-.2-.47-.4-.4-.55-.41h-.47c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2 0 1.18.86 2.32.98 2.48.12.16 1.68 2.65 4.08 3.62 2.4.96 2.4.64 2.83.6.43-.04 1.4-.57 1.6-1.12.2-.55.2-1.02.14-1.12-.06-.1-.22-.16-.46-.28Z" })
	});
}
function FloatingActions() {
	const [open, setOpen] = (0, import_react.useState)(false);
	const message = encodeURIComponent("Hello Zebnex, I'd like to talk about a project.");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChatWidget, {
		open,
		onOpenChange: setOpen
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fixed right-4 bottom-5 z-50 flex flex-col items-center gap-3 sm:right-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
			href: `https://wa.me/${CONTACT.whatsapp}?text=${message}`,
			target: "_blank",
			rel: "noreferrer noopener",
			"aria-label": "Chat with us on WhatsApp",
			className: "flex size-13 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lift transition-transform hover:scale-105",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppIcon, { className: "size-6" })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChatLauncher, {
			open,
			onClick: () => setOpen((v) => !v)
		})]
	})] });
}
var Toaster$1 = ({ ...props }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
		className: "toaster group",
		toastOptions: { classNames: {
			toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
			description: "group-[.toast]:text-muted-foreground",
			actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
			cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
		} },
		...props
	});
};
var styles_default = "/assets/styles-DPMeOEFR.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
	const message = error instanceof Response ? `Response ${error.status}${error.url ? ` at ${error.url}` : ""}` : error instanceof Error ? error.message : String(error);
	const stack = error instanceof Error ? error.stack : void 0;
	window.__lovableReportRuntimeError?.({
		message,
		...stack !== void 0 && { stack },
		filename: window.location.pathname
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$5 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Zebnex Tech Solutions | Technology & Branding in Kenya" },
			{
				name: "description",
				content: "Zebnex Tech Solutions builds secure networks, cloud systems, custom software, websites and brand identities for businesses across Kenya."
			},
			{
				name: "author",
				content: "Zebnex Tech Solutions"
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600&display=swap"
			},
			{
				rel: "icon",
				type: "image/png",
				href: "/favicon.png"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$5.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(QueryClientProvider, {
		client: queryClient,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex min-h-screen flex-col",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
						className: "flex-1",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FloatingActions, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster$1, {})
		]
	});
}
var $$splitComponentImporter$3 = () => import("./routes-BLIfSJJl.mjs");
var Route$4 = createFileRoute("/")({
	head: () => ({ meta: [
		{ title: "Zebnex Tech Solutions | Technology & Branding for Kenyan Business" },
		{
			name: "description",
			content: "Secure networks, cloud, custom software, websites and brand identity — one technology partner for growing businesses in Kenya. Book a free consultation."
		},
		{
			property: "og:title",
			content: "Technology and Identity, Built for Growth"
		},
		{
			property: "og:description",
			content: "Zebnex Tech Solutions helps businesses run securely, connect confidently and stand out in the market."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./about-DjkYByOl.mjs");
var Route$3 = createFileRoute("/about")({
	head: () => ({ meta: [
		{ title: "About Zebnex Tech Solutions | Built on Trust" },
		{
			name: "description",
			content: "Zebnex Tech Solutions combines technical depth in networks, cloud and software with branding expertise, serving businesses across Kenya."
		},
		{
			property: "og:title",
			content: "Built on Trust. Driven by Technology."
		},
		{
			property: "og:description",
			content: "Our story, leadership, mission and values — one partner for a business's technical backbone and its identity."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./contact-BBmtFhai.mjs");
var Route$2 = createFileRoute("/contact")({
	head: () => ({ meta: [
		{ title: "Contact Zebnex Tech Solutions | Free Consultation" },
		{
			name: "description",
			content: "Talk to Zebnex Tech Solutions about your website, network, cloud, security or brand. Call +254 115 339 092 or send a message."
		},
		{
			property: "og:title",
			content: "Let's Build Something Together"
		},
		{
			property: "og:description",
			content: "Reach out about a specific project or just explore what's possible."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./services-CXdvXzdB.mjs");
var Route$1 = createFileRoute("/services")({
	head: () => ({ meta: [
		{ title: "Services | Web, Cloud, Security & Branding — Zebnex" },
		{
			name: "description",
			content: "Web development, networking, databases, data analysis, cloud, cybersecurity, custom software and branding — tailored to your business."
		},
		{
			property: "og:title",
			content: "Solutions Built Around Your Business"
		},
		{
			property: "og:description",
			content: "From the infrastructure that keeps you running to the brand that makes you memorable."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var SYSTEM_PROMPT = `You are the assistant for Zebnex Tech Solutions, a Kenyan technology and branding partner based in Utawala, Nairobi.

Services: web development, networking, database management, data analysis, cloud services, cybersecurity, software development and branding. Past work includes a TUK ticketing system and a tenant management system.
Contact: +254 115 339 092, info@zebnextechsolutions.co.ke. Free consultations are available and projects usually start within 1-2 weeks of an agreed proposal. Remote delivery countrywide, with on-site visits for networking work.

Be warm, concise and practical. Keep answers under 120 words, avoid jargon, never invent prices or promises, and when someone is ready to act, invite them to book a free consultation on the Contact page or message on WhatsApp.`;
function isMessage(value) {
	if (typeof value !== "object" || value === null) return false;
	const m = value;
	return (m["role"] === "user" || m["role"] === "assistant") && typeof m["content"] === "string";
}
var Route = createFileRoute("/api/chat")({ server: { handlers: { POST: async ({ request }) => {
	const body = await request.json().catch(() => null);
	const incoming = Array.isArray(body?.messages) ? body.messages.filter(isMessage) : [];
	if (!incoming.length) return new Response("No messages provided", { status: 400 });
	const key = process.env["LOVABLE_API_KEY"];
	if (!key) return new Response("Assistant is not configured", { status: 500 });
	const upstream = await fetch("https://ai.gateway.lovable.dev/v1/responses", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			"Lovable-API-Key": key,
			"X-Lovable-AIG-SDK": "fetch"
		},
		body: JSON.stringify({
			model: "openai/gpt-6-astra",
			stream: true,
			store: false,
			reasoning: { effort: "low" },
			max_output_tokens: 1200,
			input: [{
				role: "system",
				content: SYSTEM_PROMPT
			}, ...incoming.slice(-16).map((m) => ({
				role: m.role,
				content: m.content.slice(0, 2e3)
			}))]
		})
	});
	if (!upstream.ok || !upstream.body) {
		const detail = await upstream.text().catch(() => "");
		console.error(`AI gateway error [${upstream.status}]: ${detail}`);
		return new Response("The assistant is unavailable right now.", { status: upstream.status === 429 ? 429 : 502 });
	}
	const reader = upstream.body.pipeThrough(new TextDecoderStream()).getReader();
	const encoder = new TextEncoder();
	let buffer = "";
	const stream = new ReadableStream({
		async pull(controller) {
			const { value, done } = await reader.read();
			if (done) {
				controller.close();
				return;
			}
			buffer += value;
			const events = buffer.split("\n\n");
			buffer = events.pop() ?? "";
			for (const event of events) for (const line of event.split("\n")) {
				if (!line.startsWith("data:")) continue;
				const payload = line.slice(5).trim();
				if (!payload || payload === "[DONE]") continue;
				try {
					const parsed = JSON.parse(payload);
					if (parsed["type"] === "response.output_text.delta") {
						const delta = parsed["delta"];
						if (typeof delta === "string" && delta) controller.enqueue(encoder.encode(delta));
					}
				} catch {}
			}
		},
		cancel() {
			reader.cancel();
		}
	});
	return new Response(stream, { headers: {
		"Content-Type": "text/plain; charset=utf-8",
		"Cache-Control": "no-cache"
	} });
} } } });
var IndexRoute = Route$4.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$5
});
var AboutRoute = Route$3.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$5
});
var BlogRoute = Route$6.update({
	id: "/blog",
	path: "/blog",
	getParentRoute: () => Route$5
});
var ContactRoute = Route$2.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$5
});
var ServicesRoute = Route$1.update({
	id: "/services",
	path: "/services",
	getParentRoute: () => Route$5
});
var ApiChatRoute = Route.update({
	id: "/api/chat",
	path: "/api/chat",
	getParentRoute: () => Route$5
});
var BlogRouteChildren = { BlogSlugRoute: Route$7.update({
	id: "/$slug",
	path: "/$slug",
	getParentRoute: () => BlogRoute
}) };
var rootRouteChildren = {
	IndexRoute,
	AboutRoute,
	BlogRoute: BlogRoute._addFileChildren(BlogRouteChildren),
	ContactRoute,
	ServicesRoute,
	ApiChatRoute
};
var routeTree = Route$5._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	const queryClient = new QueryClient();
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
