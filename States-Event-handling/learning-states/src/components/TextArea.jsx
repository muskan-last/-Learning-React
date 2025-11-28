import { useState } from "react";

function TextArea(props) {


  const handleOnclick = () => {
    console.log("Upper Case was Clicked" + text);
    let newText = text.toUpperCase();
    setText(newText)
  }

  const handleonchange = (event) => {
    console.log("on change");
    setText(event.target.value);
  }
  const [text, setText] = useState('Enter the Text here ');

  return (
    <div>
      <h1>{props.heading}</h1>

      <div className="mb-3">
        <textarea className="form-control" onChange={handleonchange} id="myBox" rows="8" value={text}></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleOnclick}>Convert to Uppercase</button>
    </div >
  );
}
export default TextArea;