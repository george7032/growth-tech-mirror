import { f as lazyRouteComponent, j as notFound, p as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as POSTS } from "./site-data-Cp-8uK8J.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/blog._slug-CBwGo_p3.js
var $$splitComponentImporter = () => import("./blog._slug-oub5CoB7.mjs");
var Route = createFileRoute("/blog/$slug")({
	loader: ({ params }) => {
		const post = POSTS.find((p) => p.slug === params.slug);
		if (!post) throw notFound();
		return { post };
	},
	head: ({ loaderData }) => {
		if (!loaderData) return { meta: [{ title: "Unavailable" }, {
			name: "robots",
			content: "noindex"
		}] };
		const { post } = loaderData;
		return { meta: [
			{ title: `${post.title} | Zebnex Insights` },
			{
				name: "description",
				content: post.excerpt
			},
			{
				property: "og:title",
				content: post.title
			},
			{
				property: "og:description",
				content: post.excerpt
			},
			{
				property: "og:type",
				content: "article"
			}
		] };
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
