interface ProcessProps {
	title: string;
	description: string;
}

const Process: React.FC<ProcessProps> = ({ title, description }) => {
	return (
		<div>
			<div className="relative text-center">
				<p
					className="text-[20px] sm:text-[42px] md:text-[44px] xl:text-[48px]"
					style={{
						color: "#E2EBE2",
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
					className="text-[12px] sm:text-[13px] md:text-[14px] xl:text-[16px]"
					style={{
						position: "relative",
						textAlign: "center",
						color: "#FFFFFF",
						maxWidth: "calc(100% - 2.5rem)",
						minWidth: "auto",
						marginLeft: "auto",
						marginRight: "auto",
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
