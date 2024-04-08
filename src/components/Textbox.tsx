// interface TextboxProps {
// 	divTop: string;
// 	divLeft: string;
// 	inputText: string;
// 	inputType: string;
// 	placeHolder: string;
// 	inputWidth: string;
// 	inputHeight: string;
// }

// const Textbox: React.FC<TextboxProps> = ({
// 	divTop,
// 	divLeft,
// 	inputText,
// 	inputType,
// 	placeHolder,
// 	inputWidth,
// 	inputHeight,
// }) => {
// 	return (
// 		<div className="textbox">
// 			<div
// 				style={{
// 					position: "absolute",
// 					top: divTop,
// 					left: divLeft,
// 					fontSize: "20px",
// 				}}
// 			>
// 				<p className="font-bold">{inputText}</p>
// 				<div>
// 					<input
// 						type={inputType}
// 						placeholder={placeHolder}
// 						className="absolute bg-[#0a5c0264] text-white px-4 py-2"
// 						style={{
// 							width: inputWidth,
// 							height: inputHeight,
// 							top: "calc(100vh / 25)",
// 							wordWrap: "break-word",
// 						}}
// 					/>
// 				</div>
// 			</div>
// 		</div>
// 	);
// };

// export default Textbox;

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
			<p className="font-bold">{inputText}</p>
			<div style={{ position: "relative" }}>
				<textarea
					placeholder={placeHolder}
					className="bg-[#0a5c0264] text-white px-4 py-2 resize-none"
					style={{
						width: inputWidth,
						height: inputHeight,
					}}
					value={value}
					onChange={onChange}
				/>
			</div>
		</div>
	);
};

export default Textbox;
