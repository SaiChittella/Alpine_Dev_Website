"use client";
import Textbox from "@/components/Textbox";
import Link from "next/link";
import React, { useState } from "react";

export default function ContactUs() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");

	const handleNameChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setName(e.target.value);
	};

	const handleEmailChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setEmail(e.target.value);
	};

	const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setMessage(e.target.value);
	};

	const handleSubmit = () => {
        // We will need to change this; this is just a placeholder for right now, we need to make it so that it takes all this data and then sends it to like our email or something
		console.log("Submitted!", name, email, message);
	};

	return (
		<div>
			<div>
				<p
					className="max-w-full text-center font-bold"
					style={{
						color: "#1CB47C",
						fontSize: "74px",
						position: "absolute",
						top: "calc(100vh / 19)",
						left: "50%",
						transform: "translateX(-50%)",
					}}
				>
					Contact Us!
				</p>
			</div>

			<div
				className="absolute bg-[#0a5c0228]"
				style={{
					width: "775px",
					height: "792px",
					top: "calc(100vh / 6)",
					left: "23%",
					borderRadius: "3%",
				}}
			/>

			<div
				style={{
					position: "absolute",
					top: "165px",
					left: "377px",
				}}
			>
				<p className="font-bold" style={{ fontSize: "25px" }}>
					Level up your brand!
				</p>
				<p className="py-1" style={{ fontSize: "20px" }}>
					You can reach us at any time via{" "}
					<span className="text-[#1CB47C]">
						idk_example@gmail.com
					</span>
				</p>
			</div>

			<Textbox
				divTop="270px"
				divLeft="471px"
				inputText="First and Last name"
				placeHolder="Your name"
				inputWidth="532px"
				inputHeight="64px"
				value={name}
				onChange={handleNameChange}
			/>
			<Textbox
				divTop="400px"
				divLeft="471px"
				inputText="Email Address"
				placeHolder="you@company.com"
				inputWidth="532px"
				inputHeight="64px"
				value={email}
				onChange={handleEmailChange}
			/>
			<Textbox
				divTop="530px"
				divLeft="471px"
				inputText="How can we help?"
				placeHolder="Tell us about your project..."
				inputWidth="532px"
				inputHeight="226px"
				value={message}
				onChange={handleMessageChange}
			/>

			<button
				className="py-2 px-5 bg-[#3A6436] rounded-full text-H4 font-light"
				onClick={handleSubmit}
				style={{
					position: "absolute",
					top: "840px",
					left: "650px",
				}}
			>
				Submit
			</button>
		</div>
	);
}
