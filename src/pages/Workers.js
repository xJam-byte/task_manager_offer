import React, { useState } from "react";
import axios from "axios";

function Workers() {
  const [fisrtname, setfisrtname] = useState("");
  const [lastname, setlastname] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");

  const onChangeName = (e) => {
    setfisrtname(e.target.value);
  };
  const onChangeSurname = (e) => {
    setlastname(e.target.value);
  };
  const onChangeEmail = (e) => {
    setemail(e.target.value);
  };
  const onChangePhone = (e) => {
    setphone(e.target.value);
  };
  const onClickSend = async () => {
    const resp = await axios.post("https://localhost:7021/api/User", {
      name: fisrtname,
      seconName: lastname,
      email: email,
      phone: phone,
    });
    console.log(resp.data);
  };
  return (
    <div className="wrapper">
      <div className="form">
        <h2>Add Worker</h2>
        <input
          type="text"
          placeholder="first name"
          value={fisrtname}
          onChange={(e) => onChangeName(e)}
        />
        <input
          type="text"
          placeholder="Second name"
          value={lastname}
          onChange={(e) => onChangeSurname(e)}
        />
        <input
          type="text"
          placeholder="e-mail"
          value={email}
          onChange={(e) => onChangeEmail(e)}
        />
        <input
          type="text"
          placeholder="phone number"
          value={phone}
          onChange={(e) => onChangePhone(e)}
        />
        <button onClick={onClickSend}>Submit</button>
      </div>
    </div>
  );
}

export default Workers;
