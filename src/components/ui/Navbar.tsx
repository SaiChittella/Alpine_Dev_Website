"use client";
import React, { useState } from "react";

const NavBar: React.FC = () => {
	const [activeTab, setActiveTab] = useState<string>("home");

	const handleTabChange = (tab: string) => {
		setActiveTab(tab);
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
					onClick={() => handleTabChange("home")}
				>
					Alpine Dev
				</a>
			</div>

			<div className="flex items-center space-x-20 pr-10">
				<a
					href="/#mission"
					className={`nav-item ${
						activeTab === "mission" ? "text-green-400" : ""
					}`}
					onClick={() => handleTabChange("mission")}
				>
					Mission
				</a>
				<a
					href="/#about"
					className={`nav-item ${
						activeTab === "about" ? "text-green-400" : ""
					}`}
					onClick={() => handleTabChange("about")}
				>
					About Us
				</a>
				<a
					href="/#projects"
					className={`nav-item ${
						activeTab === "projects" ? "text-green-400" : ""
					}`}
					onClick={() => handleTabChange("projects")}
				>
					Projects
				</a>
			</div>
		</nav>
	);
};

export default NavBar;
