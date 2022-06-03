import React, { useState, useEffect } from "react";
import { Button, Form } from "semantic-ui-react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const [data, setData] = useState({
    userName: "",
    password: "",
  });
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [errorMessageUserName, setErrorMessageUserName] = useState("");
  const [errorMessagePassword, setErrorMessagePassword] = useState("");
  //const [errorMessageCredentials, setErrorMessageCredentials] = useState("");
  useEffect(() => {
    const getToken = localStorage.getItem("token");
    if (getToken) {
      navigate("/");
    }
  }, []);

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    // const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    // console.log("regUserName: " + reg.test(data.userName));
    if (!data.userName) {
      setErrorMessageUserName("UserName field is required");
    }

    //const regPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    //console.log("regPassword: " + regPassword.test(data.password));
    if (!data.password) {
      setErrorMessagePassword("Password field is required");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validate();
    // console.log("Username " + data.userName);
    // console.log("Password " + data.password);
    if (data.userName && data.password) {
      localStorage.setItem("token", true);
      navigate("/");
    }

    ////////// for fetching data from local storage  ////////////
    // let getUserName = JSON.parse(
    //   localStorage.getItem("UserName", data.userName)
    // );
    // let getPassword = JSON.parse(
    //   localStorage.getItem("Password", data.password)
    // );
    // console.log("getUserName " + getUserName);
    // console.log("getPassword " + getPassword);
    // if (data.userName === getUserName) {
    //   if (data.password === getPassword) {
    //     navigate("/");
    //   } else {
    //     setErrorMessageCredentials("Wrong Crendentials ");
    //   }
    // } else {
    //   setErrorMessageCredentials("Wrong Crendentials");
    // }
    ////////////
    // axios
    //   .post("https://62906fdf27f4ba1c65b8ed2d.mockapi.io/Crud", data)
    //   .then(() => {
    //     setLoading(false);
    //     navigate("/");
    //   });
  };

  // const validateForm = () => {
  //   if (!data.userName) {
  //     setErrorMessageUserName("entered value in UserName field");
  //   } else if (!data.password) {
  //     setErrorMessagePassword("entered value in Password field");
  //   }
  // };

  return (
    <div>
      <Form className="form ">
        <h2 style={{ color: "#de5550", marginBottom: "25px" }}> Login </h2>
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
          {loading ? "Loading" : "Login"}
        </Button>

        {/* <p             
          style={{
            marginTop: "5px",
            marginBottom: "15px",
            marginLeft: "85px",
            color: "#de5420",
            fontSize: "20px",
            letterSpacing: "1px",
          }}
        >
          {errorMessageCredentials}
        </p> */}

        {/* <div>
          <Link to="/register" style={{ marginLeft: "97px" }}>
            get registered here
          </Link>
        </div> */}
      </Form>
    </div>
  );
}
export default Login;
