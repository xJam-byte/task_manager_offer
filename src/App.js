import "./App.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import AppContext from "./context";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Tasks from "./pages/Tasks";
import Workers from "./pages/Workers";
import axios from "axios";
import EditTaskPage from "./pages/EditTaskPage";

function App() {
  const [tasks, setTasks] = useState([]);
  const [workers, setWorkers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const tasksResponse = await axios.get("https://localhost:7021/api/Tasks");
      const workersResponse = await axios.get(
        "https://localhost:7021/api/User"
      );

      setTasks(tasksResponse.data);
      setWorkers(workersResponse.data);
    };

    fetchData();
  }, []);

  return (
    <AppContext.Provider value={{ tasks, workers }}>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/tasks" element={<Tasks />} />
            <Route path="/workers" element={<Workers />} />
            <Route path="/Tasks/:id" element={<EditTaskPage />} />
          </Routes>
        </main>
        <br />
        <br />
        <Footer />
      </div>
    </AppContext.Provider>
  );
}

export default App;
