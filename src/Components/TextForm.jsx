import React, { useState } from 'react';

const TextForm = (props) => {

    const [text, settext] = useState("");

    const handleonChange = (event) => {
        settext(event.target.value);
    }

    const handleupClick = () => {
        let newText = text.toUpperCase();
        settext(newText)
        props.showAlert("Converted to Upper Case!", "success");
    }
    const handlelowClick = () => {
        let newText = text.toLowerCase();
        settext(newText)
        props.showAlert("Converted to Lower Case!", "success");
    }
    const handleclear = () => {
        settext("");
        props.showAlert("All Text Cleared!", "success");
    }
    const handlecopy = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to clipboard!", "success");
    }
    const handleextraspaces = () => {
        let spc = text.split(/[ ]+/);
        settext(spc.join(" "))
        props.showAlert("Extra spaces removed!", "success");
    }

    return (
        <>
            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h2>TextUtils... </h2>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleonChange} id="myBox" rows="8" style={{ backgroundColor: props.mode === 'dark' ? 'black' : 'white', color: props.mode === 'dark' ? 'white' : '#042743' }}>
                    </textarea>
                </div>

                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1 " onClick={handleupClick}>Convert to Uppercase</button>
                <button disabled={text.length === 0} className="btn btn-info mx-1 my-1" onClick={handlelowClick}>Convert to Lowercase</button>
                <button disabled={text.length === 0} className="btn btn-warning mx-1 my-1" onClick={handleclear}>Clear Text</button>
                <button disabled={text.length === 0} className="btn btn-success mx-1 my-1" onClick={handlecopy}>Copy text</button>
                <button disabled={text.length === 0} className="btn btn-danger mx-1 my-1" onClick={handleextraspaces}>Remove Extra Spaces</button>

            </div>

            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h3>Your Text Summary</h3>

                {/* calculate no.of words typed */}
                <p>
                    {text.split(/\s+/).filter((ele) => {
                        return (
                            ele.length !== 0
                        )
                    }).length} Words and {text.length} Characters
                </p>

                {/* approx time to read a word is 0.008sec - internet says so */}
                <p>
                    {0.008 * text.split(" ").filter((ele) => { return (ele.length !== 0) }).length} Minutes-to-read
                </p>

                <h3>Preview:-- </h3>
                <p>{text.length > 0 ? text : "Enter something in the textbox above to preview it here......"}</p>
            </div>
        </>
    )
}

export default TextForm;