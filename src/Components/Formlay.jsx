import React, { useState } from "react";
import { useEffect } from "react";
// import Stack from '@mui/material/Stack';
// import Button from '@mui/material/Button';

const Formlay = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
   
  });

  const ChangeHandler=(e)=>{
    setData({
      ...data,
      [e.target.name]: e.target.value
    })

  }


  const formSubmission = (e) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <div>
      <form action="#" onSubmit={formSubmission}>
        <div>
          <input
            type="text"
            name="name"
            value={data.name}
            onChange={ChangeHandler}
          />
        </div>

        <div>
          <input
            type="email"
            name="email"
            value={data.email}
            onChange={ChangeHandler}

          />
        </div>

        <div>
          <input
            type="password"
            name="password"
            value={data.password}
            onChange={ChangeHandler}

          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Formlay;
