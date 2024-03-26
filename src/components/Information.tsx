interface ProcessProps {
	title: string;
	description: string;
}

const Process: React.FC<ProcessProps> = ({ title, description }) => {
	return (
		<div>
			<p style={{ fontSize: "20px", color: "#35D086" }}>{title}</p>
			<p>{description}</p>
		</div>
	);
};

export default Process;
