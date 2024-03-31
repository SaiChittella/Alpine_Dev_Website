
interface VerticalPosition {
    top: string;
    left: string;
    height: string;
    width: string;
    name: string;
}


const Vertical: React.FC<VerticalPosition> = ({top, left, height, width, name}) => {
    return (
        <div
            className={name}
            style={{
                top: top,
                left: left,
                borderColor: "#1CB47C",
                height: height,
                width: width,
            }}
        ></div>
    );
}

export default Vertical;