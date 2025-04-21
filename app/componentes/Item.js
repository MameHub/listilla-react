export default function Item({text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. [...]"}) {

    function handleClick() {
        alert(text);
    }

    return(
        <div>
            <p onClick={handleClick}>{text}</p>
        </div>
    );
}