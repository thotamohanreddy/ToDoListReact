import React,{useState} from "react";
function Input(props)
{
    const [inputText, setInputText] = useState("");
    function handleChange(event)
    {
      const newtext = event.target.value;
      setInputText(newtext);
    }
    return (
        <div className='form'>
        <input type="text" onChange={handleChange} value={inputText} />
            <button onClick={() => {
                props.onAdd(inputText);
                setInputText("");
            }}>
          <span>Add</span>
        </button>
    </div>
    );
}
export default Input;