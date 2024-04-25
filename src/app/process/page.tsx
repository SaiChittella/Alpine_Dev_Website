"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect } from "react";

import Info from "@/components/Information";
import VerticalLine from "@/components/Vertical";

export default function Process() {
	const client_needs_img = "/imgs/client_needs.png";
	const web_design_img = "/imgs/design.png";
	const code_img = "/imgs/build.png";

	useEffect(() => {
		gsap.fromTo(
			".left-content",
			{ x: -1000, opacity: 0.5 },
			{ x: "-50%", opacity: 1, duration: 2 }
		);
		gsap.fromTo(
			".right-content",
			{ x: 1000, opacity: 0.5 },
			{ x: "-15%", opacity: 1, duration: 2 }
		);
	}, []);

	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);

		gsap.fromTo(
			".content-left-fade",
			{ x: -1000, opacity: 0 },
			{
				x: "0vw",
				opacity: 1,
				duration: 2,
				scrollTrigger: {
					trigger: ".content-left-fade",
					start: "top bottom",
					end: "center center",
					scrub: true,
				},
			}
		);
		gsap.fromTo(
			".content-left-fade-2",
			{ x: -1000, opacity: 0 },
			{
				x: "5%",
				opacity: 1,
				duration: 2,
				scrollTrigger: {
					trigger: ".content-left-fade-2",
					start: "top 100%",
					end: "bottom bottom",
					scrub: true,
				},
			}
		);

		gsap.fromTo(
			".content-right-fade",
			{ x: 1000, opacity: 0 },
			{
				x: "0vw",
				opacity: 1,
				duration: 2,
				scrollTrigger: {
					trigger: ".content-right-fade",
					start: "top bottom",
					end: "center center",
					scrub: true,
				},
			}
		);

		gsap.fromTo(
			".content-right-fade-2",
			{ x: 1000 },
			{
				x: "5vw",
				opacity: 1,
				duration: 2,
				scrollTrigger: {
					trigger: ".content-right-fade-2",
					start: "top 100%",
					end: "bottom bottom",
					scrub: true,
				},
			}
		);
	}, []);

	return (
		<div>
			<div>
				<div className="processTitle">
					<p
						className="max-w-full text-center font-bold"
						style={{
							color: "#1CB47C",
							position: "absolute",
							fontSize: "5vw",
							top: "calc(100vh / 12)",
							left: "50%",
							transform: "translateX(-50%)",
						}}
					>
						Our Process
					</p>
				</div>
				<div
					className="flex left-content"
					style={{
						position: "absolute",
						top: "calc(100vh / 4)",
						left: "27.5%",
						width: "50vw",
					}}
				>
					<Info
						title="Understanding Client Needs"
						description="To understand client needs, we take this very seriously. To ensure that our clients are getting exactly what they want and deserve, we will either set up a meeting via Zoom, or shoot them an email, where we will take diligent notes on exactly what it is that they want in their website."
					/>
				</div>

				<div className="right-content items-center">
					<img
						src={client_needs_img}
						style={{
							position: "absolute",
							left: "75%",
							transform: "translateY(50%)",
							width: "35vw",
							height: "55vh",
							objectFit: "contain",
						}}
					/>
				</div>
				<div className="items-center">
					<img
						className="content-left-fade"
						src={web_design_img}
						style={{
							position: "absolute",
							left: "25%",
							top: "120%",
							transform: "translateX(-50%)",
							width: "35vw",
							height: "55vh",
							objectFit: "contain",
						}}
					/>
				</div>
				<div className="items-center">
					<img
						className="content-right-fade-2"
						src={code_img}
						alt=""
						style={{
							position: "absolute",
							left: "70%",
							top: "215%",
							transform: "translateX(-50%)",
							width: "35vw",
							height: "55vh",
							objectFit: "contain",
						}}
					/>
				</div>

				<VerticalLine
					top="49%"
					left="25%"
					height="50vh"
					width=""
					name="border-l border-dashed absolute"
				/>
				<VerticalLine
					top="99%"
					left="25%"
					height="60vh"
					width="52vw"
					name="border-t border-dashed absolute"
				/>
				<VerticalLine
					top="99%"
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
						left: "53.5%",
					}}
				>
					<Info
						title="Design Ideas"
						description="Now comes the most important part, the designing process. We will take the notes that we have gathered from the client and start designing the website. We will send the client a few designs to choose from, and once they have chosen one, we will start building the website."
					/>
				</div>

				<VerticalLine
					top="158.5%"
					left="77%"
					height="30vh"
					width=""
					name="border-l border-dashed absolute"
				/>
				<VerticalLine
					top="188.5%"
					left="25%"
					height="60vh"
					width="52vw"
					name="border-t border-dashed absolute"
				/>
				<VerticalLine
					top="188.5%"
					left="25%"
					height="35vh"
					width="84.5vw"
					name="border-l border-dashed absolute"
				/>

				<div
					className="flex content-left-fade-2"
					style={{
						position: "absolute",
						top: "calc(100vh / 0.445)",
						left: "1.5%",
						maxWidth: "50%",
					}}
				>
					<Info
						title="Build"
						description="Now, we build. Using our design plan and the popular frameworks Next.JS and TailwindCSS, we will build the website. We will send the client updates on the website as we build it, and once it is finished, we will send them the final product, where they can request any changes that they would like."
					/>
				</div>
			</div>
		</div>
	);
}
