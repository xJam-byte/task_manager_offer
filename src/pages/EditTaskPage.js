import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import AppContext from "../context";
import { useNavigate, useParams } from "react-router-dom";

function EditTaskPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { tasks, workers } = useContext(AppContext);
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDesc, setTaskDesc] = useState("");
  const [taskDeadline, setTaskDeadline] = useState("");
  const [taskTo, setTaskTo] = useState(1);
  const [initialValuesSet, setInitialValuesSet] = useState(false);

  const onChangeTitle = (e) => {
    setTaskTitle(e.target.value);
  };
  const onChangeDesc = (e) => {
    setTaskDesc(e.target.value);
  };
  const onChangeDeadline = (e) => {
    setTaskDeadline(e.target.value);
  };
  const onChangeTo = (e) => {
    setTaskTo(e.target.value);
  };

  useEffect(() => {
    const current = tasks.find((t) => t.id === Number(id));
    if (current) {
      setTaskTitle(current.title);
      setTaskDeadline(current.deadline);
      setTaskDesc(current.description);
      const we = workers.find((t) => t.id === current.assignedToId);
      setTaskTo(we.email);
      setInitialValuesSet(true);
    }
  }, [tasks, id, workers]);

  if (!initialValuesSet) {
    return <div>Loading...</div>;
  }
  const onClickSend = async () => {
    const current = workers.find((t) => t.email === taskTo);
    if (current) {
      await axios.put(`https://localhost:7021/api/Tasks/${id}`, {
        id: Number(id),
        title: taskTitle,
        description: taskDesc,
        deadline: taskDeadline,
        status: 0,
        assignedToId: current.id,
      });
    }
    navigate("/");
    window.location.reload();
  };

  const onClickDelete = async () => {
    const resp = await axios.delete(
      `https://localhost:7021/api/Tasks/issues/${id}`
    );
    console.log(resp);
    navigate("/");
    window.location.reload();
  };

  return (
    <div className="wrapper">
      <div className="form">
        <h2>Тапсырманы өңдеу</h2>
        <input
          type="text"
          placeholder="тапсырма тақырыбы"
          value={taskTitle}
          onChange={onChangeTitle}
        />
        <input
          type="text"
          placeholder="тапсырма сипаттамасы"
          value={taskDesc}
          onChange={onChangeDesc}
        />
        <input
          type="text"
          placeholder="тапсырманың орындалу мерзімі"
          value={taskDeadline}
          onChange={onChangeDeadline}
        />
        <input
          type="text"
          placeholder="тапсырма тапсырылды"
          value={taskTo}
          onChange={onChangeTo}
        />
        <button style={{ marginTop: 10 }} onClick={onClickSend}>
          Жіберу
        </button>
        <button style={{ marginTop: 10 }} onClick={onClickDelete}>
          Тапсырманы жою
        </button>
      </div>
    </div>
  );
}

export default EditTaskPage;
