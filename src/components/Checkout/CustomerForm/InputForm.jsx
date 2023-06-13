
import React from "react";

function InputForm(props) {
  return (
    <div style={{ display: "flex", marginBottom: 12 }}>
      <label style={{width: "30%",marginRight: 6 }}>{props.title}</label>
      <input style={{width: "70%" }}
        required
        value={props.value}
        name={props.name}
        type="text"
        onChange={props.onChange}
      />
    </div>
  );
}
export default InputForm;