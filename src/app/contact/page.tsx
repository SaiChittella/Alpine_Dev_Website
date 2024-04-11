"use client";
import Textbox from "@/components/Textbox";
import { useState } from "react";
import Slideshow from "./slideshow";
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
		// Need to change this....
		alert("Sent!");
	};

	return (
		<div className="">
			<div className="flex-grow max-w-full text-center text-[13px] sm:text-[15px] md:text-[17px] xl:text-[19px]">
				<p
					style={{
						position: "absolute",
						top: "calc(100vh / 11.3)",
						left: "50%",
						transform: "translateX(-50%)",
					}}
				>
					Level up your brand!
				</p>
				<p
					className="font-bold text-[45px] sm:text-[50px] md:text-[53px] xl:text-[56px]"
					style={{
						color: "#1CB47C",
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
				className="absolute w-3/5 mx-auto h-2/3"
				style={{
					top: "calc(100vh / 3.5)",
					left: "67%",
					transform: "translateX(-50%)",
				}}
			>
				<Slideshow />
			</div>
			<div className="max-w-full">
				<Textbox
					divTop="calc(100vh / 3.2)"
					divLeft="4%"
					inputText="Name"
					placeHolder="Your Name"
					inputWidth="30vw"
					inputHeight="5.5vh"
					value={name}
					onChange={handleNameChange}
				/>
				<Textbox
					divTop="calc(100vh / 2.25)"
					divLeft="4%"
					inputText="Email"
					placeHolder="you@company.com"
					inputWidth="30vw"
					inputHeight="5.5vh"
					value={email}
					onChange={handleEmailChange}
				/>
				<Textbox
					divTop="calc(100vh / 1.75)"
					divLeft="4%"
					inputText="How can we help?"
					placeHolder="Tell us about the project..."
					inputWidth="30vw"
					inputHeight="26vh"
					value={message}
					onChange={handleMessageChange}
				/>
			</div>

			<div
				style={{
					position: "absolute",
					top: "calc(100vh / 1.13)",
					left: "4%",
					fontSize: "15px",
					width: "30vw",
				}}
			>
				<p>
					Here is our email, just in case:{" "}
					<span className="text-[#1CB47C]">
						alpinedevservice@gmail.com
					</span>
				</p>
			</div>
			<button
				className="py-1.5 px-9 bg-[#3A6436] rounded-full text-H4 font-bold"
				onClick={handleSubmit}
				style={{
					position: "absolute",
					top: "94vh",
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
					top: "110%",
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
					height="100vh"
					width="100vw"
					style={{
						position: "relative",
						left: "105%",
						marginTop: "-25%",
					}}
				/>
			</div>
		</div>
	);
}
