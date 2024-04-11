"use server";
import { sendMail } from "@/lib/mail";
export default async function HandleSubmit() {
	await sendMail({
		from: "alpinedevservice@gmail.com",
		name: "Sai Chittella",
		message: "<h1>TESTING</h1>",
	});
}
