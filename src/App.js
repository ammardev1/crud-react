import logo from "./logo.svg";
import "./App.css";
import Create from "./components/create/Create";
import Read from "./components/read/Read";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Update from "./components/update/Update";
import Updateee from "./components/update/Updateee";
import Login from "./components/login/Login";
import Register from "./components/register/register";

function App() {
  return (
    <Router>
      <div className="">
        <div className="heading">
          <h2>Crud Operations</h2>
        </div>
        <Routes>
          <>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/" element={<Read />} />
            <Route path="/create" element={<Create />} />
            <Route path="/update/:id" element={<Update />} />
          </>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
