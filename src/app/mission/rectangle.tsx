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
				<div>
					<div
						style={{
							width: "15vw",
							height: "15vw",
							backgroundColor: "#E2EBE2",
							borderRadius: "50%",
							position: "relative",
							marginTop: "-30%",
							left: "25%",
							zIndex: 1,
						}}
					/>

					<img
						src={picture}
						style={{
							width: "11vw",
							height: "11vw",
							marginTop: "-46%",
							left: "34%",
							position: "relative",
							zIndex: 2,
						}}
					/>
				</div>

				<div
					className="flex relative font-bold text-[3.5vw] items-center justify-center"
					style={{ top: "12%" }}
				>
					<p>{title}</p>
				</div>
				<div
					className="flex relative text-[1.3vw] items-center justify-center w-[29vw]"
					style={{ top: "12%", textAlign: "center", left: "2%" }}
				>
					<p>{description}</p>
				</div>
			</div>
		</div>
	);
};

export default Rectangle;
