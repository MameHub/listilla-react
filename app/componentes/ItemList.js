import Item from "./Item";
import { useState } from "react";

export default function ItemList() {
    const [texts, setTexts] = useState([
        "Primer elemento texto",
        "Segundo elemento texto",
        "Tercer elemento texto"
    ]);
    const [inputText, setInputText] = useState("");
    
    const handleInput = e => {
        setInputText(e.target.value);
    }

    const addText = () => {
        setTexts([...texts, inputText]);
        setInputText("");
    };

    const delText = () => {
        texts.length > 0 ? setTexts(texts.slice(0, -1)) : null;
    };

    return(
        <>
            {texts.map((text, index) =>
                <div key={index}>
                    <Item text={text} />
                </div>
            )}
            <input type="text" value={inputText} onChange={handleInput} placeholder="Introduce el nuevo texto"></input>
            <button onClick={addText}>Añadir texto</button>
            <br/>
            <button onClick={delText}>Eliminar texto</button>
        </>
    );
}