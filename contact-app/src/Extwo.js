import React, { useState } from "react";

const Extwo = () => {
  const [name, setName] = useState("");

  const handleClick = (e) => {
    console.log("btn clicked!");
  };

  return (
    <div className="App">
      <input placeholder="type here " />
      <button onClick={handleClick}>Submit</button>
      {/* both are same onClick written in two ways */}
      {/* <button onClick={()=>handleClick()}>Submit</button> */}
    </div>
  );
};

export default Extwo;
