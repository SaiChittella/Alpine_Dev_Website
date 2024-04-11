// pages/api/sendEmail.ts

import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	if (req.method === "POST") {
		const { name, email, message } = req.body;

		try {
			const transporter = nodemailer.createTransport({
				host: "smtp.gmail.com", 
				port: 587, 
				secure: false, 
				auth: {
					user: "alpinedevservice@gmail.com", 
					pass: "olqd ymoy vobs kiah", 
				},
				debug: true,
			});

			const mailOptions = {
				from: email,
				to: "alpinedevservice@gmail.com",
				subject: "New Contact Form Submission",
				text: `From: ${name}\nEmail: ${email}\nMessage: ${message}`,
			};

			await transporter.sendMail(mailOptions);

			res.status(200).json({ message: "Email sent successfully!" });
		} catch (error) {
			console.error("Error sending email:", error);
			res.status(500).json({
				message: "An error occurred while sending the email.",
			});
		}
	} else {
		res.status(405).json({ message: "Method Not Allowed" });
	}
}
