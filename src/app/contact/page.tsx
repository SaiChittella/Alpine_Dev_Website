"use client";
import Textbox from "@/components/Textbox";
import { useState } from "react";

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
		// This is just a placeholder, we will need to change this so that it acc sends emails to our email
		alert("Submitted!" + name + email + message);
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
				className="absolute bg-[#152115] w-3/5 mx-auto h-2/3"
				style={{
					top: "calc(100vh / 3.5)",
					left: "67%",
					transform: "translateX(-50%)",
					borderRadius: "3%",
				}}
			/>
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
						idk_example@gmail.com
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
