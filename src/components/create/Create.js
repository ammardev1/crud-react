import React, { useState } from "react";
import { Button, Form } from "semantic-ui-react";
import { useNavigate } from "react-router-dom";
import "./create.css";
import axios from "axios";

function Create() {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    setLoading(true);
    axios
      .post("https://62906fdf27f4ba1c65b8ed2d.mockapi.io/Crud", data)
      .then(() => {
        setLoading(false);
        navigate("/");
      });
  };

  return (
    <div>
      <Form className="form ">
        <h2 style={{ color: "#de5550", marginBottom: "25px" }}>Add</h2>
        <Form.Field>
          <label>First Name</label>
          <input
            name="firstName"
            onChange={handleChange}
            placeholder="First Name"
            value={data.firstName}
            required
          />
        </Form.Field>
        <Form.Field>
          <label>Last Name</label>
          <input
            name="lastName"
            onChange={handleChange}
            placeholder="Last Name"
            value={data.lastName}
            required
          />
        </Form.Field>
        <Button color="red" type="submit" onClick={handleSubmit}>
          {loading ? "Loading" : "Submit"}
        </Button>
      </Form>
    </div>
  );
}

export default Create;
