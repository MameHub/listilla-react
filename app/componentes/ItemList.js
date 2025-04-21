import Item from "./Item";

export default function ItemList({texto1, texto2, texto3}) {
    return(
        <>
            <Item text={texto1}/>
            <br/>
            <Item text={texto2}/>
            <br/>
            <Item text={texto3}/>
        </>
    );
}