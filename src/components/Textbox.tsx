import React from "react";

interface TextboxProps {
	divTop: string;
	divLeft: string;
	inputText: string;
	placeHolder: string;
	inputWidth: string;
	inputHeight: string;
	value: string;
	onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const Textbox: React.FC<TextboxProps> = ({
	divTop,
	divLeft,
	inputText,
	placeHolder,
	inputWidth,
	inputHeight,
	value,
	onChange,
}) => {
	return (
		<div
			className="textbox"
			style={{
				position: "absolute",
				top: divTop,
				left: divLeft,
				fontSize: "20px",
				display: "flex",
				flexDirection: "column",
			}}
		>
			<p>{inputText}</p>
			<div className="py-0.5" style={{ position: "relative" }}>
				<textarea
					placeholder={placeHolder}
					className="bg-[#E2EBE2] text-black px-4 py-2 resize-none"
					style={{
						width: inputWidth,
						height: inputHeight,
						borderRadius: "10px",
					}}
					value={value}
					onChange={onChange}
				/>
			</div>
		</div>
	);
};

export default Textbox;
