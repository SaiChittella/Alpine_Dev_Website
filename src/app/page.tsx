import Image from "next/image";
import Navbar from "@/components/ui/Navbar";

export default function Home() {
	const img =
		"https://www.digitalsilk.com/wp-content/uploads/2020/06/website-development-process-flowchart.jpg";

	return (
		<div>
			<Navbar />
			<div className="grid grid-rows-3 h-screen">

				<div></div>

				{/* Title */}
				<div className="text-H1 leading-none">
					<p className="text-center mb-4 font-medium">
						Reaching new heights with a
					</p>

					<div className="text-center mb-4">
						<p className=" font-extrabold">
							<span className="bg-gradient-to-r from-[#126F4C] to-[#9CD298] text-transparent bg-clip-text">
								website for you
							</span>
						</p>
					</div>
				</div>

				<div className="text-center">
					<a
						href="#contact"
						className="btn-contact bg-green-500 font-bold relative overflow-hidden"
						style={{
							animation:
								"glow-animation 1.5s ease-in-out infinite alternate",
						}}
					>
						<span className="glow absolute inset-0"></span>
						<span className="relative z-10">Contact Us</span>
					</a>
				</div>


			</div>
		</div>
	);
}
