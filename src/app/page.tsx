import Image from "next/image";
import Navbar from "@/components/ui/Navbar";

export default function Home() {
	return (
		<div>
			<Navbar />
			<div className="flex flex-col items-center justify-center h-screen">
				<p className="text-5xl text-center mb-4 font-bold">
					Reaching new heights with a
				</p>
				<div className="text-center mb-4">
					<p className="text-6xl font-bold">
						<span className="bg-gradient-to-r from-green-400 to-green-500 text-transparent bg-clip-text">
							website
						</span>
						&nbsp;
						<span className="bg-gradient-to-r from-green-500 to-green-500 text-transparent bg-clip-text">
							for
						</span>
						&nbsp;
						<span className="bg-gradient-to-r from-green-500 to-green-600 text-transparent bg-clip-text">
							you
						</span>
					</p>
				</div>

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

			<div>
				<p className="text-center text-4xl text-green-500 font-bold">
					Our Mission
				</p>
			</div>
		</div>
	);
}
