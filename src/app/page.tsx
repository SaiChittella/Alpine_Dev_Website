import Hero from "@/components/Hero";
import Process from "@/components/Information";

export default function Home() {
	return (
		<div>
			<div id="home">
				<Hero />
			</div>
			<div id="mission">
				<p
					className="max-w-full text-center text-6xl font-bold"
					style={{ color: "#1CB47C" }}
				>
					Our Mission
				</p>
				<div className="flex justify-center">
					<p className="max-w-screen-50 mx-auto p-6 text-center text-lg">
						Our mission is to empower local clubs, businesses, and
						organizations through the creation of impactful websites
						tailored to their specific needs. As high school
						students deeply passionate about STEM and Computer
						Science, we are committed to utilizing our skills to
						make a significant difference in the world. We invite
						you to join us on this journey as we endeavor to
						innovate and enhance online presence for businesses and
						communities alike.
					</p>
				</div>

				{/* Left side of the content */}
				<div style={{ maxWidth: "70%" }}>
					<div className="pt-8 flex justify-center h-full">
						<div
							className="flex items-center font-bold underline-green"
							style={{ marginRight: "35%" }}
						>
							<p
								className="text-4xl"
								style={{ color: "#27C188" }}
							>
								The Process
							</p>
						</div>
					</div>
					<div className="pt-3 text-left ml-8">
						<Process
							title="Partner with local clubs"
							description="test"
						/>
						<Process
							title="Partner with local clubs"
							description="test"
						/>
					</div>
				</div>

				{/* Right Side (Image) */}
				<div className="flex flex-grow justify-end pr-4">
					<img
						src="imgs/web_dev_img.png"
						alt="Web Dev Image"
						style={{
							maxWidth: "500px",
						}}
					/>
				</div>
			</div>
		</div>
	);
}
