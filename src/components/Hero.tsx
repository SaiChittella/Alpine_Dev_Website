export default function Hero() {
	return (
		<div className="grid grid-rows-3 h-screen">
			{/* Title */}
			<div className="row-start-2 text-center text-H1 leading-tight ">
				<span className="font-medium">Reaching new heights with a</span>
				<span className="block font-extrabold bg-gradient-to-r from-[#126F4C] to-[#9CD298] text-transparent bg-clip-text">
					website for you
				</span>
			</div>

			{/* Button */}
			<div className="row-start-3 text-center">
				<a
					href="#contact"
					className="py-2 px-5 bg-[#3A6436] rounded-full text-H4 font-light"
					style={{
						animation:
							"glow-animation 2s ease-out infinite alternate",
					}}
				>
					Contact Us
				</a>
			</div>
		</div>
	);
}
