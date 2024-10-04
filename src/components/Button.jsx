import "./Button.css";
import React from "react";

export default function Button({ name = "", handler, defaultStyle = {} }) {
  return (
    <div>
      <button className="button-50" onClick={handler} style={defaultStyle}>
        {name || "submit"}
      </button>
    </div>
  );
}
