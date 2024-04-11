"use client";
import Rectangle from "./rectangle";
import gsap from "gsap";
import { useEffect } from "react";	
export default function Mission() {
	const innovate_img = "/imgs/innovate_real.svg";
	const individualize_img = "/imgs/individualize_real.svg";
	const impact_img = "/imgs/impact_real.svg";

	useEffect(() => {
		gsap.fromTo(
			".content-left-fade",
			{ x: -1000, opacity: 0.5 },
			{ x: 0, opacity: 1, duration: 2, ease: "power1.inOut" }
		);

		const backFadeElement = document.querySelector(".back-fade");

		if (backFadeElement) {
			gsap.fromTo(
				backFadeElement,
				{
					opacity: 0,
					y: "45vh",
				},
				{
					opacity: 1,
					x: "0%",
					duration: 4,
					ease: "power2.inOut",
				}
			);
		}
	}, []);

	return (
		<div className="w-full h-auto">
			<div
				className="content-left-fade flex absolute title w-full"
				style={{ top: "10%", left: "40%" }}
			>
				<div className="text-[2.5vw] font-extralight">
					<p>WHAT WE DO</p>
				</div>
				<div
					className="absolute font-bold text-[5vw] text-[#1CB47C]"
					style={{ top: "60%", left: "-7%" }}
				>
					<p>Our Mission</p>
				</div>
			</div>
			<div className="back-fade">
				<Rectangle
					height="50vh"
					width="30vw"
					left="2%"
					picture={innovate_img}
					pictureLeft="33%"
					pictureTop="-46%"
					title="Innovate"
					description="At our core, we're innovators. We thrive on pushing
						boundaries, exploring new ideas, and finding creative
						solutions to complex problems. We're pretty excited
						about this whole 'innovation' thing. It's what fuels us
						to create incredible solutions that keep our clients
						ahead of the curve in this ever-evolving world."
				/>
				<Rectangle
					height="50vh"
					width="30vw"
					left="34.5%"
					picture={impact_img}
					pictureLeft="31%"
					pictureTop="-44%"
					title="Impact"
					description="Our mission is to make a lasting impact. We believe in
						leveraging technology to drive positive change and
						create meaningful experiences for our clients and their
						audiences. From impactful designs to robust solutions,
						we aim to leave a lasting impression that drives
						results."
				/>
				<Rectangle
					height="50vh"
					width="30vw"
					left="67%"
					picture={individualize_img}
					pictureLeft="32%"
					pictureTop="-46%"
					title="Individualize"
					description="We understand that every client is unique. That's why we
						take a personalized approach to every project, tailoring
						our solutions to meet the specific needs and goals of
						each client. When we focus on individualization, we get
						to know your business inside and out. That way, we can
						craft strategies and solutions that are perfect for you,
						helping you stand out from the crowd."
				/>
			</div>
		</div>
	);
}
