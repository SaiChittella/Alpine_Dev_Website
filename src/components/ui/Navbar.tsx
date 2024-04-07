"use client";
import Link from "next/link";
import React, { useState } from "react";

const NavBar: React.FC = () => {
	const [activeTab, setActiveTab] = useState<string>("home");

	const handleTabChange = (tab: string) => {
		setActiveTab(tab);
	};

	const scroll = (id: string) => {
		const missionSection = document.getElementById(id);
		if (missionSection) {
			missionSection.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<nav
			className="fixed flex justify-between items-center px-10 py-3 w-full"
			style={{ borderBottom: "1px solid #202320" }}
		>
			<div>
				<a
					href="/#home"
					className={`font-bold text-lg px-16 ${
						activeTab === "home" ? "text-green-400" : ""
					}`}
					onClick={() => {
						handleTabChange("home");
						scroll("home");
					}}
				>
					Alpine Dev
				</a>
				<img
					src="/imgs/logo.png"
					alt=""
					className="absolute h-5 w-10"
					style={{
						top: "16.5px",
						left: "56px",
					}}
				/>
			</div>

			<div className="flex items-center space-x-20 pr-10">
				<Link
					href="/mission"
					className={`nav-item ${
						activeTab === "mission" ? "text-green-400" : ""
					}`}
					onClick={() => {
						handleTabChange("mission");
						scroll("mission");
					}}
				>
					Process
				</Link>

				<a
					href="/about"
					className={`nav-item ${
						activeTab === "about" ? "text-green-400" : ""
					}`}
					onClick={() => {
						handleTabChange("about");
						scroll("about");
					}}
				>
					About Us
				</a>
				<a
					href="/projects"
					className={`nav-item ${
						activeTab === "projects" ? "text-green-400" : ""
					}`}
					onClick={() => {
						handleTabChange("projects");
						scroll("projects");
					}}
				>
					Projects
				</a>
			</div>
		</nav>
	);
};

export default NavBar;
