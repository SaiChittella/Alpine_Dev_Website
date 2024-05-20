import AboutUsSection from "./AboutUsSection";

export default function AboutUs() {
	const lalith = {
		name: "Lalith",
		position: "Co-Founder & CTO",
		paragraph: "*Insert Text Here*",
		urls: [
			"imgs/about/lalith/tabla.svg",
			"imgs/about/coding.svg",
			"imgs/about/lalith/singing.svg",
		],
		picture: "imgs/about/lalith/lalith.jpg",
	};
	const sai = {
		name: "Sai",
		position: "Co-Founder & CEO",
		paragraph: "*Insert Text Here*",
		urls: [
			"imgs/about/sai/gym.svg",
			"imgs/about/coding.svg",
			"imgs/about/sai/bike.svg",
		],
		picture: "imgs/about/sai/sai.jpg",
	};
	const tanush = {
		name: "Tanush",
		position: "Senior Developer & CFO",
		paragraph: "*Insert Text Here*",
		urls: [
			"imgs/about/tanush/chess.svg",
			"imgs/about/coding.svg",
			"imgs/about/tanush/basketball.svg",
		],
		picture: "imgs/about/tanush/Tanush.jpg",
	};
	const logan = {
		name: "Logan",
		position: "Head of Design & CIO",
		paragraph: "*Insert Text Here*",
		urls: [
			"imgs/about/logan/basketball.svg",
			"imgs/about/design.svg",
			"imgs/about/logan/piano.svg",
		],
		picture: "imgs/about/logan/logan.jpg",
	};

	return (
		<>
			<AboutUsSection
				pfp={lalith.picture}
				URLs={lalith.urls}
				paragraph={lalith.paragraph}
			/>
			<AboutUsSection
				pfp={sai.picture}
				URLs={sai.urls}
				paragraph={sai.paragraph}
			/>
			<AboutUsSection
				pfp={tanush.picture}
				URLs={tanush.urls}
				paragraph={tanush.paragraph}
			/>
			<AboutUsSection
				pfp={logan.picture}
				URLs={logan.urls}
				paragraph={logan.paragraph}
				scrollArrow={false}
			/>
		</>
	);
}
