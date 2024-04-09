import React, { useContext, useEffect, useState } from "react";
import AppContext from "../context";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function EditWorkerPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { workers } = useContext(AppContext);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState(0);
  const [initialValuesSet, setInitialValuesSet] = useState(false);

  const onChangeName = (e) => {
    setName(e.target.value);
  };
  const onChangeSurname = (e) => {
    setSurname(e.target.value);
  };
  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const onChangePhone = (e) => {
    setPhone(e.target.value);
  };

  useEffect(() => {
    const current = workers.find((t) => t.id === Number(id));
    if (current) {
      setName(current.name);
      setSurname(current.seconName);
      setEmail(current.email);
      setPhone(current.phone);
      setInitialValuesSet(true);
    }
  }, [workers, id]);

  if (!initialValuesSet) {
    return <div>Loading...</div>;
  }
  const onClickSend = async () => {
    const resp = await axios.put(`https://localhost:7021/api/User/${id}`, {
      id: Number(id),
      name: name,
      seconName: surname,
      email: email,
      phone: phone,
    });
    console.log(resp);
    navigate("/");
    window.location.reload();
  };

  const onClickDelete = async () => {
    const resp = await axios.delete(`https://localhost:7021/api/User/${id}`);
    console.log(resp);
    navigate("/");
    window.location.reload();
  };

  return (
    <div className="wrapper">
      <div className="form">
        <h2>Edit worker</h2>
        <input
          type="text"
          placeholder="жұмысшының аты"
          value={name}
          onChange={onChangeName}
        />
        <input
          type="text"
          placeholder="жұмысшының тегі"
          value={surname}
          onChange={onChangeSurname}
        />
        <input
          type="text"
          placeholder="жұмысшының электрондық поштасы"
          value={email}
          onChange={onChangeEmail}
        />
        <input
          type="text"
          placeholder="жұмысшының телефоны"
          value={phone}
          onChange={onChangePhone}
        />
        <button style={{ marginTop: 10 }} onClick={onClickSend}>
          Жіберу
        </button>
        <button style={{ marginTop: 10 }} onClick={onClickDelete}>
          Жұмысшыны жою
        </button>
      </div>
    </div>
  );
}

export default EditWorkerPage;
