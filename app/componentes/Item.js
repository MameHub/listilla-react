import { useState } from "react";

export default function Item({text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. [...]"}) {
    const [color, setColor] = useState("black");

    function handleClick() {
        setColor(prevColor => prevColor === "black" ? "blue" : "black");
    };

    return(
        <div>
            <p onClick={handleClick} style={{color:color}}>{text}</p>
        </div>
    );
}