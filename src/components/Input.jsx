import React, { useState } from "react";

function Input(props) {
  const [additems, setitems] = useState([]);
  const [addlists, setlists] = useState("");
  const [myindex, setMyindex] = useState("");
  function addlist(event) {
    setlists(event.target.value);
  }
  return (
    <div className="form">
      <input onChange={addlist} value={addlists} type="text" />
      <button
        onClick={() => {
          props.onAdd(addlists);
          setlists("");
        }}>
        <span>Add</span>
      </button>
    </div>
  );
}
export default Input;
