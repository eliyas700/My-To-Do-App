import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import AddTodo from "./Pages/ToDo/TodoItem/AddTodo";
import Header from "./Pages/Header/Header";
import HomePage from "./Pages/HomePage/HomePage";
import { Toaster } from "react-hot-toast";
import Login from "./Pages/Authentication/Login/Login";
import SignUp from "./Pages/Authentication/SignUp/SignUp";
import RequireAuth from "./Pages/Authentication/RequireAuth/RequireAuth";
import Footer from "./Pages/Footer/Footer";
function App() {
  return (
    <div>
      <Header></Header>

      <Routes>
        <Route
          path="/"
          element={
            <RequireAuth>
              <HomePage></HomePage>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/addTask"
          element={
            <RequireAuth>
              <AddTodo></AddTodo>
            </RequireAuth>
          }
        ></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
      </Routes>
      <Footer></Footer>
      <Toaster />
    </div>
  );
}

export default App;
