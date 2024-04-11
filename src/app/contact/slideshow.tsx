import React, { useState } from "react";

const images = [
	"imgs/projects/skyline_theater.png",
	"imgs/projects/home_page.png",
	"imgs/projects/clean_climate.png",
];

const Slideshow: React.FC = () => {
	const [currentIndex, setCurrentIndex] = useState(0);

	const goToPrevious = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex === 0 ? images.length - 1 : prevIndex - 1
		);
	};

	const goToNext = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex === images.length - 1 ? 0 : prevIndex + 1
		);
	};

	return (
		<div className="relative">
			<img
				src={images[currentIndex]}
				alt="Slideshow"
				className="w-full"
			/>
			<button
				className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black p-2 rounded-full"
				onClick={goToPrevious}
			>
				{"<"}
			</button>
			<button
				className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black p-2 rounded-full"
				onClick={goToNext}
			>
				{">"}
			</button>
		</div>
	);
};

export default Slideshow;
