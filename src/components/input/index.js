import React, { useState } from 'react';
import './style.css';


function Index({ placeholder, name, parentChangeHandler }) {
  const [inputs, setInputs] = useState("");

  const onChangeHandler = (e) => {
    setInputs(e.target.value)
    parentChangeHandler({ name: e.target.name, value: e.target.value });
  }
  
  return (
    <div className="input-box">
      <input
        name={name}
        placeholder={placeholder}
        value={inputs.value}
        onChange={onChangeHandler}
      />

    </div>
  )
}

export default Index;
