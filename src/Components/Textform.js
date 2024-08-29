import React, { useState } from "react";

export default function Textform(props) {
  const [count, setCount] = useState("");
//*********************************** */
  const [mystyle, setmystyle] = useState({});

  const handleupclick = () => {
    let newtext = count.toUpperCase();
    setCount(newtext);
    props.showalert("success","Text converted to upper case")
  };
  const handleloclick = () => {
    let newtext = count.toLowerCase();
    setCount(newtext);
    props.showalert("success","Text converted to lower case")
  };
  const handleunclick = () => {
    setCount("");
    props.showalert("success","Text is cleared")
  };
  const handleextraspaces = () => {
    let newtext = count.split(/[ ]+/)
    setCount(newtext.join(" "))
    props.showalert("success","Extra spaces are removed")
  };
  const handlecopy = () => {
    const text = document.getElementById("mybox");
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges()
    props.showalert("success","Text Copied")
  };

  const handleboclick = () => {
    if (mystyle.fontWeight === "bold") {
      setmystyle({});
      props.showalert("success","Text converted to Normal")
    } else {
      setmystyle({
        fontWeight: "bold",
      });
      props.showalert("success","Text converted to Bold")
    }
    
  };

  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = count;
    window.speechSynthesis.speak(msg);
    props.showalert("success","Text is been spoken")
  };
  const handleonchange = (event) => {
    setCount(event.target.value);
  };
//************************************* */
  return (
    <>
      <div >
        <h1 className={`text-${props.mode==="dark"?"light":"dark"}`}>{props.heading}</h1>
        <div className="mb-3">
          <textarea
             className={`form-control mb-2 bg-${props.mode==="dark"?"dark":"light"} text-${props.mode==="dark"?"light":"dark"}`}
            placeholder="Enter text here"
            value={count}
            style={mystyle}
            onChange={handleonchange}
            id="mybox"
            rows="8"
          ></textarea>
          <button disabled={count.length===0} className="btn btn-primary my-1 mx-1" onClick={handleupclick}>
            Convert to Upper case
          </button>
          <button disabled={count.length===0} className="btn btn-primary my-1 mx-1" onClick={handleloclick}>
            Convert to lower case
          </button>
          <button disabled={count.length===0} className="btn btn-secondary my-1 mx-1" onClick={handleextraspaces}>
            Remove extra spaces
          </button>
          <button disabled={count.length===0} className="btn btn-dark my-1 mx-1" onClick={handleboclick}>
            Change font to bold/Normal
          </button>
          <button disabled={count.length===0} className="btn btn-warning my-1 mx-1" onClick={speak}>
            Speak Text
          </button>
          <button disabled={count.length===0} className="btn btn-success my-1 mx-1" onClick={handlecopy}>
            Copy Text
          </button>
          <button disabled={count.length===0} className="btn btn-danger my-1 mx-1" onClick={handleunclick}>
            Clear all
          </button>
        </div>
      </div>
      <div className={`container bg-${props.mode==="dark"?"":"light"} text-${props.mode==="dark"?"light":"dark"}`}>
        <h1>Your text preview</h1>
        <p>{count.split(/\s/).filter((e)=>{return e.length !==0}).length} words</p>
        <p>{count.length} characters </p>
      </div>
    </>
  );
}
