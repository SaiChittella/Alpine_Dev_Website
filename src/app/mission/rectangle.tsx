interface RectangleProps {
	height: string;
	width: string;
	left: string;
	picture: string;
	title: string;
	description: string;
}

const Rectangle: React.FC<RectangleProps> = ({
	height,
	width,
	left,
	picture,
	title,
	description,
}) => {
	return (
		<div>
			<div
				style={{
					width: width,
					height: height,
					backgroundColor: "#0D150D",
					margin: "5px 10px 10px 10px",
					borderRadius: "25px",
					position: "absolute",
					left: left,
					top: "45%",
				}}
			>
				<img
					src={picture}
					alt="Impact"
					style={{
						width: "15vw",
						height: "25vh",
						borderRadius: "50%",
						top: "-30%",
						left: "25%",
						position: "absolute",
						backgroundColor: "white",
						objectFit: "cover",
						zIndex: 2,
					}}
				/>

				<div
					className="flex relative font-bold text-[3.5vw] items-center justify-center"
					style={{ top: "20%" }}
				>
					<p>{title}</p>
				</div>
				<div
					className="flex relative text-[1.4vw] items-center justify-center w-[30vw]"
					style={{ top: "20%", textAlign: "center"}}
				>
					<p>
						{description}
					</p>
				</div>
			</div>
		</div>
	);
};

export default Rectangle;
