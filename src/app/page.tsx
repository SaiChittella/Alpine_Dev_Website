import Hero from "@/components/Hero";

export default function Home() {
	return (
		<div>
			<div id="home">
				<Hero />
			</div>
			<div id="mission">
				<p className="text-center text-4xl text-green-500 font-bold">
					Our Mission
				</p>
			</div>
		</div>
	);
}
