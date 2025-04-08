import Item from "./Item";

export default function ItemList({texto}) {
    return(
        <>
            <Item texto/>
            <br/>
            <Item/>
            <br/>
            <Item/>
        </>
    );
}