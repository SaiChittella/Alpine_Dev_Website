import React from "react";

function MyComponent() {
	const impact_img = "/imgs/impact.png";
	const individualize_img = "/imgs/individualize.png";
	const innovate_img = "/imgs/innovate.png";

	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<h1
				style={{
					fontSize: "1.5em",
					marginTop: 55,
				}}
			>
				WHAT WE DO
			</h1>
			<h2
				style={{
					color: "#1CB47C",
					fontSize: "3em",
					marginBottom: "1em",
					fontWeight: "bold",
				}}
			>
				Our Mission
			</h2>
			<div
				style={{
					display: "flex",
					justifyContent: "center",
				}}
			>
				<div
					style={{
						width: "400px",
						height: "400px",
						backgroundColor: "#0D150D",
						margin: "5px 10px 10px 10px",
						borderRadius: "25px",
						position: "relative",
						top: "10px", // Moved the first box 50px down
					}}
				>
					<img
						src={impact_img}
						alt="Impact"
						style={{
							width: "145px",
							height: "140px",
							borderRadius: "50%",
							top: "-60px",
							right: "-297px",
							position: "absolute",
							backgroundColor: "white",
							objectFit: "cover",
							zIndex: 2,
						}}
					/>
					<h1
						style={{
							fontSize: "4em",
							marginTop: 75, // For innovate, left box
							fontWeight: "bold",
							marginLeft: 70,
						}}
					>
						Innovate
					</h1>
					<h2
						style={{
							fontSize: "1em",
							marginTop: 5,
							marginLeft: 40,
						}}
					>
						At our core, we're innovators. We thrive on pushing
						boundaries, exploring new ideas, and finding creative
						solutions to complex problems. We're pretty excited
						about this whole 'innovation' thing. It's what fuels us
						to create incredible solutions that keep our clients
						ahead of the curve in this ever-evolving world.
					</h2>
				</div>
				<div
					style={{
						width: "400px",
						height: "400px",
						backgroundColor: "#0D150D",
						margin: "5px 10px 10px 10px",
						borderRadius: "25px",
						position: "relative",
						top: "10px", // Moved the second box 50px down
					}}
				>
					<img
						src={individualize_img}
						alt="Individualize"
						style={{
							width: "145px",
							height: "140px",
							borderRadius: "50%",
							top: "-60px",
							right: "-297px",
							position: "absolute",
							backgroundColor: "white",
							objectFit: "cover",
							zIndex: 2,
						}}
					/>
					<h1
						style={{
							fontSize: "4em",
							marginTop: 75, // For impact, middle box
							fontWeight: "bold",
							marginLeft: 100,
						}}
					>
						Impact
					</h1>
					<h2
						style={{
							fontSize: "1em",
							marginTop: 5,
							marginLeft: 40,
						}}
					>
						Our mission is to make a lasting impact. We believe in
						leveraging technology to drive positive change and
						create meaningful experiences for our clients and their
						audiences. From impactful designs to robust solutions,
						we aim to leave a lasting impression that drives
						results.
					</h2>
				</div>
				<div
					style={{
						width: "400px",
						height: "400px",
						backgroundColor: "#0D150D",
						margin: "5px 10px 10px 10px",
						borderRadius: "25px",
						position: "relative",
						top: "10px", // Moved the third box 50px down
					}}
				>
					<img
						src={innovate_img}
						alt="Innovate"
						style={{
							width: "145px",
							height: "140px",
							borderRadius: "50%",
							top: "-60px",
							right: "955px",
							position: "absolute",
							backgroundColor: "white",
							objectFit: "cover",
							zIndex: 2,
						}}
					/>
					<h1
						style={{
							fontSize: "3.75em",
							marginTop: 75, // For individualize, right box
							fontWeight: "bold",
							marginLeft: 20,
						}}
					>
						Individualize
					</h1>
					<h2
						style={{
							fontSize: "1em",
							marginTop: 5,
							marginLeft: 40,
						}}
					>
						We understand that every client is unique. That's why we
						take a personalized approach to every project, tailoring
						our solutions to meet the specific needs and goals of
						each client. When we focus on individualization, we get
						to know your business inside and out. That way, we can
						craft strategies and solutions that are perfect for you,
						helping you stand out from the crowd.
					</h2>
				</div>
				<div
					style={{
						width: "150px",
						height: "150px",
						backgroundColor: "white",
						borderRadius: "50%",
						position: "absolute",
						top: "160px", // Moved the first circle 200px down
						right: "1015px",
						zIndex: 1,
					}}
				></div>
				<div
					style={{
						width: "150px",
						height: "150px",
						backgroundColor: "white",
						borderRadius: "50%",
						position: "absolute",
						top: "160px", // Moved the second circle 200px down
						right: "600px",
					}}
				></div>
				<div
					style={{
						width: "150px",
						height: "150px",
						backgroundColor: "white",
						borderRadius: "50%",
						position: "absolute",
						top: "160px", // Moved the third circle 200px down
						right: "185px",
					}}
				></div>
			</div>
		</div>
	);
}

export default MyComponent;
