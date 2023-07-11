import {useState} from "react";

function Body() {

    const [text, setText]= useState("");

    const handleOnChange = function (e) {
        setText(e.target.value);
    }

      return (
    <div className="body">
        <input value={text} onChange={handleOnChange}/>
        <div>{text}</div>
    </div>
  );
}

export default Body;
