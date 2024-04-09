import React from "react";
import { Link } from "react-router-dom";

function ProductWorker({ worker }) {
  return (
    // <div classNameName="product">
    //   <h3>
    //     {worker.name} {worker.seconName}
    //   </h3>
    //   <p>{worker.email}</p>
    // </div>
    <div className="two">
      <div className="px-3">
        <h4 className="name">
          {worker.name} {worker.seconName}
        </h4>
      </div>
      <div className="d-flex justify-content-start px-3 align-items-center">
        <i className="mdi mdi-view-comfy task"></i>
        <span className="quote2 pl-2">Email: {worker.email}</span>
      </div>
      <div className="d-flex justify-content-between  px-3 align-items-center pb-3">
        <div className="d-flex justify-content-start align-items-center">
          <i className="mdi mdi-calendar-clock date"></i>
          <span className="quote2 pl-2">Phone: {worker.phone}</span>
        </div>
      </div>
      <Link style={{ marginLeft: 15 }} to={"/Workers/" + worker.id}>
        Edit worker
      </Link>
    </div>
  );
}

export default ProductWorker;
