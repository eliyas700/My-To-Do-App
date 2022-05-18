import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import AddTodo from "./Pages/ToDo/TodoItem/AddTodo";
import Header from "./Pages/Header/Header";
import HomePage from "./Pages/HomePage/HomePage";
import { Toaster } from "react-hot-toast";
import Login from "./Pages/Authentication/Login/Login";
import SignUp from "./Pages/Authentication/SignUp/SignUp";
function App() {
  return (
    <div>
      <Header></Header>

      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path="/addTask" element={<AddTodo></AddTodo>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
