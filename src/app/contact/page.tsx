"use client";
import Textbox from "@/components/Textbox";
import { validateHeaderValue } from "http";
import React, { useState } from "react";

export default function ContactUs() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const arrow = "/imgs/arrow.png";

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
			<div className="max-w-full text-center">
				<p
					style={{
						position: "absolute",
						top: "calc(100vh / 11.3)",
						left: "44%",
						fontSize: "19px",
					}}
				>
					Level up your brand!
				</p>
				<p
					className="font-bold"
					style={{
						color: "#1CB47C",
						fontSize: "56px",
						position: "absolute",
						top: "calc(100vh / 10)",
						left: "50%",
						transform: "translateX(-50%)",
					}}
				>
					Contact Us
				</p>
			</div>
			<div
				className="absolute bg-[#152115]"
				style={{
					width: "800px",
					height: "570px",
					top: "calc(100vh / 3.5)",
					left: "42%",
					borderRadius: "3%",
				}}
			/>
			<Textbox
				divTop="calc(100vh / 3.2)"
				divLeft="4%"
				inputText="Name"
				placeHolder="Your Name"
				inputWidth="400px"
				inputHeight="50px"
				value={name}
				onChange={handleNameChange}
			/>
			<Textbox
				divTop="calc(100vh / 2.25)"
				divLeft="4%"
				inputText="Email"
				placeHolder="you@company.com"
				inputWidth="400px"
				inputHeight="50px"
				value={email}
				onChange={handleEmailChange}
			/>
			<Textbox
				divTop="calc(100vh / 1.75)"
				divLeft="4%"
				inputText="How can we help?"
				placeHolder="Tell us about the project..."
				inputWidth="400px"
				inputHeight="227px"
				value={message}
				onChange={handleMessageChange}
			/>
			<div
				style={{
					position: "absolute",
					top: "calc(100vh / 1.13)",
					left: "4%",
					fontSize: "15px",
				}}
			>
				<p>
					Here is our email, just in case:{" "}
					<span className="text-[#1CB47C]">
						idk_example@gmail.com
					</span>
				</p>
			</div>
			<button
				className="py-1.5 px-9 bg-[#3A6436] rounded-full text-H4 font-bold"
				onClick={handleSubmit}
				style={{
					position: "absolute",
					top: "calc(100vh / 1.08)",
					left: "4%",
					fontSize: "18px",
				}}
			>
				Send
			</button>

			<div
				className="pb-5"
				style={{
					position: "absolute",
					top: "calc(100vh / 0.95)",
					left: "25%",
					fontSize: "16px",
				}}
			>
				<p>
					Here are some of our projects... Let's put{" "}
					<span className="text-[#1CB47C]">your's</span> on here!
				</p>
				<img
					src={arrow}
					alt=""
					height="100px"
					width="100px"
					style={{
						position: "absolute",
						left: "105%",
						top: "-180%",
					}}
				/>
			</div>
		</div>
	);
}
