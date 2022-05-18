import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import AddTodo from "./Pages/ToDo/TodoItem/AddTodo";
import Header from "./Pages/Header/Header";
import HomePage from "./Pages/HomePage/HomePage";
import { Toaster } from "react-hot-toast";
function App() {
  return (
    <div>
      <Header></Header>

      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path="/addTask" element={<AddTodo></AddTodo>}></Route>
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
