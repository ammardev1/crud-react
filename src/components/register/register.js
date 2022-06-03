import React, { useEffect, useState } from "react";
import { Button, Form } from "semantic-ui-react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Register() {
  const [data, setData] = useState({
    userName: "",
    password: "",
  });
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [errorMessageUserName, setErrorMessageUserName] = useState("");
  const [errorMessagePassword, setErrorMessagePassword] = useState("");

  //   useEffect(() => {
  //     const items = JSON.parse(localStorage.getItem("UserName"));
  //     console.log(items);
  //   });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validateForm();
    if (data.userName && data.password) {
      localStorage.setItem("UserName", JSON.stringify(data.userName));
      localStorage.setItem("Password", JSON.stringify(data.password));
      navigate("/login");
    }

    // axios
    //   .post("https://62906fdf27f4ba1c65b8ed2d.mockapi.io/Crud", data)
    //   .then(() => {
    //     setLoading(false);
    //     navigate("/");
    //   });
  };

  const validateForm = () => {
    if (!data.userName) {
      setErrorMessageUserName("entered value in UserName field");
    } else if (!data.password) {
      setErrorMessagePassword("entered value in Password field");
    }
  };

  return (
    <div>
      <Form className="form ">
        <h2 style={{ color: "#de5550", marginBottom: "25px" }}> Register </h2>
        <Form.Field>
          <label>User Name</label>
          <input
            type="text"
            name="userName"
            onChange={handleChange}
            placeholder="emailAddress"
            value={data.userName}
            required
          />
          <p
            style={{
              marginTop: "3px",
              marginBottom: "5px",
              marginLeft: "5px",
              color: "#de5420",
            }}
          >
            {errorMessageUserName}
          </p>
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input
            type="password"
            name="password"
            onChange={handleChange}
            placeholder="password"
            value={data.password}
            required
          />
          <p
            style={{
              marginTop: "3px",
              marginBottom: "5px",
              marginLeft: "5px",
              color: "#de5420",
            }}
          >
            {errorMessagePassword}
          </p>
        </Form.Field>
        <Button
          style={{
            padding: "15px 35px",
            fontSize: "18px",
            marginBottom: "10px",
          }}
          color="red"
          type="submit"
          onClick={handleSubmit}
        >
          {loading ? "Loading" : "Register"}
        </Button>
      </Form>
    </div>
  );
}
export default Register;
