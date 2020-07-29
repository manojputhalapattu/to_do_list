import React, { useState } from "react";

function App() {
  const [additems, setitems] = useState([]);
  const [addlists, setlists] = useState("");
  const [myindex, setMyindex] = useState();
  function addlist(event) {
    setlists(event.target.value);
  }
  function additem(event) {
    setitems([...additems, addlists]);
    setlists("");
  }
  function remove(index) {
    setitems(additems.filter(item => item.index !== index));
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={addlist} value={addlists} type="text" />
        <button onClick={additem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {additems.map((items, index) => (
            <li className="mn" onClick={()=>(setitems(additems.filter(item=>additems.indexOf(item)!==index)))}>
              {items}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
