"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";

import Info from "@/components/Information";
import VerticalLine from "@/components/Vertical";

export default function Mission() {
	const client_needs_img =
		"https://media1.thehungryjpeg.com/thumbs2/ori_3846780_ihbghfsm731a8wm06ry3k6dmno06mg6rldn8r8i7_understanding-client-requirements-concept-icon.jpg";
	const web_design_img =
		"https://res.cloudinary.com/vistaprint/image/upload/c_scale,w_448,h_210,dpr_2/f_auto,q_auto/v1701191153/ideas-and-advice-prod/blogadmin/Web-Design.png?_i=AA";

	const code_img = "/imgs/code_img.jpg";

	useEffect(() => {
		gsap.fromTo(
			".left-content",
			{ x: -1000, opacity: 0.5 },
			{ x: -320, opacity: 1, duration: 2 }
		);
		gsap.fromTo(
			".right-content",
			{ x: 1000, opacity: 0.5 },
			{ x: 0, opacity: 1, duration: 2 }
		);
	}, []);

	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);

		gsap.fromTo(
			".content-left-fade",
			{ x: -1000, opacity: 0 },
			{
				x: 0,
				opacity: 1,
				duration: 2,
				scrollTrigger: {
					trigger: ".content-left-fade",
					start: "top bottom", // Adjust the start position as needed
					end: "center center", // Adjust the end position as needed
					scrub: true, // Smooth animation while scrolling
				},
			}
		);
		gsap.fromTo(
			".content-left-fade-2",
			{ x: -1000, opacity: 0 },
			{
				x: 5,
				opacity: 1,
				duration: 2,
				scrollTrigger: {
					trigger: ".content-left-fade-2",
					start: "top bottom", // Adjust the start position as needed
					end: "center center", // Adjust the end position as needed
					scrub: true, // Smooth animation while scrolling
				},
			}
		);

		gsap.fromTo(
			".content-right-fade",
			{ x: 1000, opacity: 0 },
			{
				x: 0,
				opacity: 1,
				duration: 2,
				scrollTrigger: {
					trigger: ".content-right-fade",
					start: "top bottom", // Adjust the start position as needed
					end: "center center", // Adjust the end position as needed
					scrub: true, // Smooth animation while scrolling
				},
			}
		);

		gsap.fromTo(
			".content-right-fade-2",
			{ x: 1000 },
			{
				x: 0,
				// opacity: 1,
				duration: 2,
				scrollTrigger: {
					trigger: ".content-right-fade-2",
					start: "top bottom", // Adjust the start position as needed
					end: "center center", // Adjust the end position as needed
					scrub: true, // Smooth animation while scrolling
				},
			}
		);
	}, []);

	return (
		<div>
			<div>
				<p
					className="max-w-full text-center font-bold"
					style={{
						color: "#1CB47C",
						fontSize: "48px",
						position: "absolute",
						top: "calc(100vh / 12)",
						left: "50%",
						transform: "translateX(-50%)",
					}}
				>
					Our Process
				</p>
				<div
					className="flex left-content"
					style={{
						position: "absolute",
						top: "calc(100vh / 4)",
						left: "27%",
						transform: "translateX(-50%)",
					}}
				>
					<Info
						title="Understanding Client Needs"
						description="To understand client needs, we take this very seriously. To ensure that our clients are getting exactly what they want and deserve, we will either set up a meeting via Zoom, or shoot them an email, where we will take diligent notes on exactly what it is that they want in their website."
					/>
				</div>
				<div className="right-content">
					<img
						src={client_needs_img}
						alt=""
						style={{
							position: "absolute",
							top: "calc(100vh / 4)",
							left: "75%",
							transform: "translateX(-50%)",
							height: "550px",
							width: "550px",
						}}
					/>
				</div>

				<VerticalLine
					top="calc(100vh / 2.07)"
					left="25%"
					height="50vh"
					width=""
					name="border-l border-dashed absolute"
				/>
				<VerticalLine
					top="calc(100vh / 1.0099)"
					left="25%"
					height="60vh"
					width="84.5vh"
					name="border-t border-dashed absolute"
				/>
				<VerticalLine
					top="calc(100vh / 1.01)"
					left="77%"
					height="35vh"
					width=""
					name="border-l border-dashed absolute"
				/>
				<div
					className="content-right-fade"
					style={{
						position: "absolute",
						top: "calc(100vh / 0.74)",
						left: "55%",
					}}
				>
					<Info
						title="Design Ideas"
						description="To understand client needs, we take this very seriously. To ensure that our clients are getting exactly what they want and deserve, we will either set up a meeting via Zoom, or shoot them an email, where we will take diligent notes on exactly what it is that they want in their website."
					/>
				</div>

				<div>
					<img
						className="content-left-fade"
						src={web_design_img}
						alt=""
						style={{
							position: "absolute",
							top: "calc(100vh / 0.87)",
							left: "27%",
							transform: "translateX(-50%)",
							height: "500px",
							width: "700px",
						}}
					/>
				</div>

				<VerticalLine
					top="calc(100vh / 0.63)"
					left="77%"
					height="30vh"
					width=""
					name="border-l border-dashed absolute"
				/>
				<VerticalLine
					top="calc(100vh / 0.53)"
					left="25%"
					height="60vh"
					width="84.5vh"
					name="border-t border-dashed absolute"
				/>
				<VerticalLine
					top="calc(100vh / 0.53)"
					left="25%"
					height="35vh"
					width="84.5vh"
					name="border-l border-dashed absolute"
				/>

				<div
					className="flex content-left-fade-2"
					style={{
						position: "absolute",
						top: "calc(100vh / 0.445)",
						left: "10%",
					}}
				>
					<Info
						title="Build"
						description="To understand client needs, we take this very seriously. To ensure that our clients are getting exactly what they want and deserve, we will either set up a meeting via Zoom, or shoot them an email, where we will take diligent notes on exactly what it is that they want in their website."
					/>
				</div>

				<div>
					<img
						className="content-right-fade-2"
						src={code_img}
						alt=""
						style={{
							position: "absolute",
							top: "calc(100vh / 0.478)",
							left: "68%",
							transform: "translateX(-50%)",
							height: "500px",
							width: "700px",
						}}
					/>
				</div>
			</div>
		</div>
	);
}
