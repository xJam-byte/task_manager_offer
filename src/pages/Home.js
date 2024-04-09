import React from "react";
import AppContext from "../context";
import Product from "../components/Product";
import ProductWorker from "../components/ProductWorker";

function Home() {
  const { tasks, workers } = React.useContext(AppContext);
  return (
    <div className="wrapper">
      <h2>Барлық тапсырмалар</h2>
      <div className="grid">
        {tasks.map((task) => (
          <Product key={task.id} task={task} />
        ))}
      </div>
      <br />
      <br />
      <h2>Барлық жұмысшылар</h2>
      <div className="grid">
        {workers.map((worker) => (
          <ProductWorker key={worker.id} worker={worker} />
        ))}
      </div>
      {/* <h2>Add task</h2>
      <input type="text" placeholder="Task title" /> */}
    </div>
  );
}

export default Home;
