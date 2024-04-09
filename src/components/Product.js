import React from "react";
import { Link } from "react-router-dom";

function Product({ task }) {
  return (
    <div className="two">
      <div className="px-3">
        <h4 className="name">{task.title}</h4>
        <p className="quote2">{task.description}.</p>
      </div>
      <div className="d-flex justify-content-start px-3 align-items-center">
        <i className="mdi mdi-view-comfy task"></i>
        <span className="quote2 pl-2">Task: Practice</span>
      </div>
      <div className="d-flex justify-content-between  px-3 align-items-center pb-3">
        <div className="d-flex justify-content-start align-items-center">
          <i className="mdi mdi-calendar-clock date"></i>
          <span className="quote2 pl-2">Date: {task.deadline}</span>
        </div>
      </div>
      {/* <Link to={"/Tasks?id=" + task.id}>View task</Link> */}
      <Link style={{ marginLeft: 15 }} to={"/Tasks/" + task.id}>
        Edit task
      </Link>
    </div>
  );
}

export default Product;
