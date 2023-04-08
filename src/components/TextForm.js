
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
        navigator.clipboard.writeText(text);
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
                <h2 className='mb-4' >{props.heading}</h2>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handlerOnChange}
                        style={{
                            backgroundColor: props.mode === "light" ? "white" : "rgb(20 22 49)",
                            color: props.mode === "light" ? "black" : "white",
                            border: props.mode === "light" ? "2px solid black" : "2px solid white"
                        }} id="myBox" rows="8"></textarea>
                </div>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handlerUpperCaseClick}>Convert to Uppercase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handlerLowerCaseClick}>Convert to Lowercase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handlerClearText}>Clear Text</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handlerCopy}>Copy Text</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handlerRemoveExtraSpaces}>Remove Extra Spaces</button>
            </div>

            <div className="container my-3" style={{ color: props.mode === "light" ? "black" : "white" }}>
                <h3>Your Text Summary</h3>
                <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words  {text.length} characters</p>
                <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
                <h4>Preview Text</h4>
                <p>{text.length > 0 ? text : "Nothing to preview!"}</p>
            </div>
        </>
    )
}
