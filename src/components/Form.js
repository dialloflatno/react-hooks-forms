import React, { useState } from "react";

function Form() {

  const [firstName, setFirstName] = useState("John");
  const [lastName, setLastName] = useState("Henry");

  const handleFirstName = (e) => {
    setFirstName(e.target.value)
  }

  const handleLastName = (e) => {
    setLastName(e.target.value)
  }


  return (
    <form>
      <input type="text" onChange={handleFirstName} value={firstName} />
      <input type="text" onChange={handleLastName} value={lastName} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;

