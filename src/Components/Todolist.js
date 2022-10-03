import React from "react";

function Todolist(props)
{
    // const [crossOver, setCrossOver] = useState(false);

    // function handleClick()
    // {
    //     setCrossOver(prevValue =>
    //     {
    //         return !prevValue;
    //     });
    // }
    // function handleClick()
    // {

    // }
    return (
        <li onClick={() => {
            props.onChecked(props.id);
        }}>{props.Todoitem}</li>
    );
}
export default Todolist;