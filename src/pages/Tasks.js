import React, { useContext, useState } from "react";
import axios from "axios";
import AppContext from "../context";
import { useNavigate } from "react-router-dom";

function Tasks() {
  const [taskTitle, setTaskTitle] = useState("");
  const { workers } = useContext(AppContext);
  const navigate = useNavigate();

  const [taskDesc, setTaskDesc] = useState("");
  const [taskDeadline, setTaskDeadline] = useState("");
  const [taskTo, setTaskTo] = useState("");

  const onChangeTitle = (e) => {
    setTaskTitle(e.target.value);
  };
  const onChangeDesc = (e) => {
    setTaskDesc(e.target.value);
  };
  const onChangeDeline = (e) => {
    setTaskDeadline(e.target.value);
  };
  const onChangeTo = (e) => {
    setTaskTo(e.target.value);
  };

  const onClickSend = async () => {
    console.log(taskTitle, taskDesc, taskDeadline, taskTo);
    const current = workers.find((t) => t.email === taskTo);
    if (current) {
      console.log(current.id);
      const resp = await axios.post("https://localhost:7021/api/Tasks", {
        id: 0,
        title: taskTitle,
        description: taskDesc,
        deadline: taskDeadline,
        status: 0,
        assignedToId: current.id,
      });
      console.log(resp.data);
    }
    navigate("/");
    window.location.reload();
  };

  return (
    <div className="wrapper">
      <div className="form">
        <h2>Тапсырма қосу</h2>
        <input
          type="text"
          placeholder="тапсырма тақырыбы"
          value={taskTitle}
          onChange={(e) => onChangeTitle(e)}
        />
        <input
          type="text"
          placeholder="тапсырма сипаттамасы"
          value={taskDesc}
          onChange={(e) => onChangeDesc(e)}
        />
        <input
          type="text"
          placeholder="тапсырманың орындалу мерзімі"
          value={taskDeadline}
          onChange={(e) => onChangeDeline(e)}
        />
        <input
          type="text"
          placeholder="тапсырма тапсырылды"
          value={taskTo}
          onChange={(e) => onChangeTo(e)}
        />
        <button onClick={onClickSend}>Жіберу</button>
      </div>
    </div>
  );
}

export default Tasks;
