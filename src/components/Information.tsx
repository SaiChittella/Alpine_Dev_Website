interface ProcessProps {
	title: string;
	description: string;
}

const Process: React.FC<ProcessProps> = ({ title, description }) => {
	return (
		<div>
			<div className="relative text-center">
				<p style={{ fontSize: "48px", color: "#E2EBE2" }}>{title}</p>
			</div>
			<div>
				<div className="w-full border-t border-line border-gray-600 absolute"></div>
			</div>
			<div>
				<p
					style={{
						position: "relative",
						fontSize: "16px",
						textAlign: "center",
						color: "#FFFFFF",
						maxWidth: "600px",
						marginLeft: "2%",
						marginTop: "2vh",
					}}
				>
					{description}
				</p>
			</div>
		</div>
	);
};

export default Process;
