import React, { useState } from "react";

const Exone = () => {
  const [name, setName] = useState("");

  const handleChange = (e) => {
    setName(e.target.value);
  };

  return (
    <div className="App">
      {/* //whenever you change the value the method handleChange will betriggered */}
      <input placeholder="typhere" onChange={handleChange} />
      <div>Hi {name}</div>
    </div>
  );
};

export default Exone;
