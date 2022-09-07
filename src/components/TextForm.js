
// rfc reactFuctionalComponent
import React, { useState } from 'react'


export default function TextForm(props) {

    const handlerOnChange = (e) => {
        setText(e.target.value);
    }
    const handlerUpperCaseClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase!", "success")
    }
    const handlerLowerCaseClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase!", "success")

    }
    const handlerClearText = () => {
        let newText = "";
        setText(newText)
        props.showAlert("Cleared Text!", "success")

    }
    const handlerCopy = () => {
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to Clipboard!", "success")

    }
    const handlerRemoveExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Removed Extra Spaces!", "success")

    }

    const [text, setText] = useState("");
    return (
        <>
            <div className='container' style={{ color: props.mode === "light" ? "black" : "white" }}>
                <h2>{props.heading}</h2>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handlerOnChange}
                        style={{
                            backgroundColor: props.mode === "light" ? "white" : "rgb(20 22 49)",
                            color: props.mode === "light" ? "black" : "white",
                            border: props.mode === "light" ? "2px solid black" : "2px solid white"
                        }} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handlerUpperCaseClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-1" onClick={handlerLowerCaseClick}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-1" onClick={handlerClearText}>Clear Text</button>
                <button className="btn btn-primary mx-1" onClick={handlerCopy}>Copy Text</button>
                <button className="btn btn-primary mx-1" onClick={handlerRemoveExtraSpaces}>Remove Extra Spaces</button>
            </div>

            <div className="container my-3" style={{ color: props.mode === "light" ? "black" : "white" }}>
                <h2>Your text summary</h2>
                <p>{text.split(" ").length -1} words  {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Minutes read</p>
                <h3>Preview</h3>
                <p>{text.length > 0 ? text : "Enter your text in TEXTBOX above to preview here..."}</p>
            </div>
        </>
    )
}
