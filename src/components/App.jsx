import React, { useState } from "react";
import Input from "./Input";

function App() {
  const [additems, setitems] = useState([]);
  const [addlists, setlists] = useState("");
  const [myindex, setMyindex] = useState();
  
  function additem(addlists) {
    setitems([...additems, addlists]);
   
  }
  function remove(index) {
    setitems(additems.filter(item => item.index !== index));
  }
  const [isDone, setDone] = useState("");
  function strike() {
    // setitems(additems.filter(<style> text-Decoration:linethrough</style>))
    // document.getElementById("mn").style.textDecoration = "line-through";
    setDone("true");
    // setitems(additems.map((ite,index)=>(
    // style:textDecoration="line-through";
    // )))
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <Input
      onAdd={additem}
      />
      <div>
        <ul>
          {additems.map((items, index) => (
            <li
              onClick={strike}
              style={{ textDecoration: isDone ? "line-through" : "none" }}
              id="mn"
              onClick={() =>
                setitems(
                  additems.filter(item => additems.indexOf(item) !== index)
                )
              }
            >
              {items}
            </li>
          ))}
        </ul>
        <button onClick={strike}>strike off</button>
      </div>
    </div>
  );
}

export default App;
