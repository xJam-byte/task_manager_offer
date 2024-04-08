import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import AppContext from "../context";
import { useNavigate, useParams } from "react-router-dom";

function EditTaskPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { tasks } = useContext(AppContext);
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDesc, setTaskDesc] = useState("");
  const [taskDeadline, setTaskDeadline] = useState("");
  const [taskTo, setTaskTo] = useState(0);
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
      setTaskTo(current.assignedToId);
      setInitialValuesSet(true);
    }
  }, [tasks, id]);

  if (!initialValuesSet) {
    return <div>Loading...</div>;
  }
  const onClickSend = async () => {
    const resp = await axios.put(`https://localhost:7021/api/Tasks/${id}`, {
      id: Number(id),
      title: taskTitle,
      description: taskDesc,
      deadline: taskDeadline,
      status: 200,
      assignedToId: 1,
    });
    console.log(resp);
    navigate("/");
    window.location.reload();
  };

  return (
    <div className="wrapper">
      <div className="form">
        <h2>Edit task</h2>
        <input
          type="text"
          placeholder="task title"
          value={taskTitle}
          onChange={onChangeTitle}
        />
        <input
          type="text"
          placeholder="task description"
          value={taskDesc}
          onChange={onChangeDesc}
        />
        <input
          type="text"
          placeholder="task deadline"
          value={taskDeadline}
          onChange={onChangeDeadline}
        />
        <input
          type="number"
          placeholder="assigned to"
          value={taskTo}
          onChange={onChangeTo}
        />
        <button onClick={onClickSend}>Send</button>
      </div>
    </div>
  );
}

export default EditTaskPage;
