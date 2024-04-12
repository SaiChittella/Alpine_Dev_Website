"use client";

import React, { useState, useEffect } from "react";

interface IconBarProps {
    URLs: string[]
}

const IconBar: React.FC<IconBarProps> = ({ URLs }) => {
    const [columns, setColumns] = useState(0);

    useEffect(() => {
        function calcCols() {
            setColumns(Math.floor(window.innerWidth / 60));
        }

        calcCols();

        window.addEventListener("resize", calcCols);

        // Cleanup function to remove event listener
        return () => {
            window.removeEventListener("resize", calcCols);
        };
    }, []);

    function returnImgs(index: number): string {
        const remainder: number = index % 3;

        if (remainder === 0) {return URLs[0]}
        else if (remainder === 1) {return URLs[1]}
        else if (remainder === 2) {return URLs[2]}
        else {console.log("Error returning strings");return "";}
    }

    return (
        <div
            className="w-full gap-x-2 px-5"
            style={{
                display: "grid",
                gridTemplateColumns: `repeat(${columns}, 1fr)`,
            }}
        >
            {Array.from({ length: columns }, (_, index) => (
                <img
                    className="icons"
                    key={index}
                    src={returnImgs(index)}
                    alt="bike"
                />
            ))}
        </div>
    );
}

export default IconBar