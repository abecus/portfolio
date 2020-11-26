import React from "react";

function TextInLine({ text }) {
  return (
    <div>
      <h2 className="mid-line">
        <span>{text}</span>
      </h2>
    </div>
  );
}

export default TextInLine;
