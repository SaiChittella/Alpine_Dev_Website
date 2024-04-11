interface ProcessProps {
	title: string;
	description: string;
}

const Process: React.FC<ProcessProps> = ({ title, description }) => {
	return (
		<div>
			<div className="relative text-center">
				<p
					style={{
						color: "#E2EBE2",
						fontSize: "3.4vw",
					}}
				>
					{title}
				</p>
			</div>
			<div>
				<div className="w-full border-t border-line border-gray-600 absolute"></div>
			</div>
			<div>
				<p
					style={{
						position: "relative",
						textAlign: "center",
						color: "#FFFFFF",
						fontSize: "1.3vw",
						width: "45vw",
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
