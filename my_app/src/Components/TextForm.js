import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    console.log("Uppercase was clicked");
    setText(text.toUpperCase());
  };

  const handleDownClick = () => {
    console.log("Lowercase was clicked");
    setText(text.toLowerCase());
  };

  const handleOnChange = (event) => {
    console.log("On change");
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  return (
    <>
      <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            value={text}
            onChange={handleOnChange}
            rows="8"
          ></textarea>
        </div>
        <button className="button btn btn-primary mx-3" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button
          className="button btn btn-primary mx-3"
          onClick={handleDownClick}
        >
          Convert to Lowercase
        </button>
      </div>
      <h2 className="my-3">Your Text summary</h2>
      <div className="container">
        <p>No. of words : {text.split(" ").length}</p>
        <p>No. of characters : {text.length}</p>
        {console.log(text.split(" "))}
      </div>
      <h2>Preview</h2>
      <p>{text}</p>
    </>
  );
}
