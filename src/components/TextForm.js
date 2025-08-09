import React, { useState } from 'react'

function TextForm(props) {
    const upperCase = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Text converted to uppercase","success");

    }
    const lowerCase = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Text converted to lowercase","success");
    }
    const copy = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text copied to clipboard","success");
    }
    const removeExtraSpaces = () => {
        let newText = text.trim().replace(/\s+/g, ' ');
        setText(newText);
        props.showAlert("Extra spaces has been removed","success");
    }

    const removeNumbers = () =>  {
        let newText =text.replace(/[0-9]/g, '');
        setText(newText);
        props.showAlert("Numbers from text has been removed","success");
      }
     const removePunctuation= () => {
        let newText = text.replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, '');
        setText(newText);
        props.showAlert("Punctuation from text has been removed","success");
      }
      const reverseText = () => {
        let newText = text.split('').reverse().join('');
        setText(newText);
        props.showAlert("Text has been reversed","success");
      }
      const capitalizeWords = () => {
        let newText = text.replace(/\b\w/g, char => char.toUpperCase());
        setText(newText);
        props.showAlert("Each word has been capitalized","success");
      }
      
    const clearText = () => {
        setText("");
        props.showAlert("Text has been cleared","success");

    }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    
    const [text, setText] = useState("");
    return (
        <>
            <div className='container' style={{ color: props.mode === "dark" ? "white" : "black" }}>
                <h2 >{props.heading}</h2>
                <div className="mb-3" >
                    <textarea className="form-control" value={text} onChange={handleOnChange} 
                    style={{backgroundColor: props.mode === 'dark' ? '#434040' : 'white', 
                            color: props.mode === 'light' ? 'black' : 'white',
                            border: props.mode === 'light' ? '2px solid black' : '2px solid white',
                            borderRadius: props.mode === 'light' ? '14px' : '14px' }} 
                        id="myBox" rows="6"></textarea>
                </div>
                <button disabled={text.length===0} className="btn btn-primary mr-2 mb-1" onClick={upperCase}>Uppercase</button>
                <button disabled={text.length===0} className="btn btn-primary mr-2 mb-1" onClick={lowerCase}>Lowercase</button>
                <button disabled={text.length===0} className="btn btn-primary mr-2 mb-1" onClick={copy}>Copy</button>
                <button disabled={text.length===0} className="btn btn-primary mr-2 mb-1" onClick={removeExtraSpaces}>Remove Extra Spaces</button>
                <button disabled={text.length===0} className="btn btn-primary mr-2 mb-1" onClick={removeNumbers}>Remove Numbers</button>
                <button disabled={text.length===0} className="btn btn-primary mr-2 mb-1" onClick={removePunctuation}>Remove Punctuation</button>
                <button disabled={text.length===0} className="btn btn-primary mr-2 mb-1" onClick={reverseText}>Reverse Text</button>
                <button disabled={text.length===0} className="btn btn-primary mr-2 mb-1" onClick={capitalizeWords}>Capitalize Words</button>
                <button disabled={text.length===0} className="btn btn-primary mr-2 mb-1" onClick={clearText}>Clear</button>
            </div>
            <div className="container my-4" style={{ color: props.mode === "dark" ? "white" : "black" }}>
                <h3>Text Summary</h3>
                <p>{text.trim() === '' ? 0 : text.trim().split(/\s+/).length} words, {text.length} characters</p>
                <p>{0.008 * (text.trim() === '' ? 0 :  text.trim().split(/\s+/).length)} minutes read</p>

                <h3>Preview</h3>
                <p style={{ color: props.mode === "dark" ? "silver" : "black" }}>{text.length>0 ? text:"Enter something in textbox to preview it here"}</p>
            </div>
        </>
    )
}

export default TextForm