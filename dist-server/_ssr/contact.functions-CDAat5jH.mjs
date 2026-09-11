import { c as createServerFn, i as TSS_SERVER_FUNCTION } from "./createServerFn-CIHAFgYl.mjs";
import { i as stringType, n as literalType, r as objectType, t as enumType } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact.functions-CDAat5jH.js
var createServerRpc = (serverFnMeta, splitImportFn) => {
	const url = "/_serverFn/" + serverFnMeta.id;
	return Object.assign(splitImportFn, {
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
var submitEnquiry_createServerFn_handler = createServerRpc({
	id: "3477bbe8085620ba9289f59e66cf1dd7377291ec33cebc9aefe265ae382244ea",
	name: "submitEnquiry",
	filename: "src/lib/contact.functions.ts"
}, (opts) => submitEnquiry.__executeServer(opts));
var submitEnquiry = createServerFn({ method: "POST" }).inputValidator((input) => ContactSchema.parse(input)).handler(submitEnquiry_createServerFn_handler, async ({ data }) => {
	console.info(`New enquiry — service: ${data.service}; from: ${data.name} <${data.email}>; phone: ${data.phone || "not provided"}`);
	return { ok: true };
});
//#endregion
export { submitEnquiry_createServerFn_handler };
