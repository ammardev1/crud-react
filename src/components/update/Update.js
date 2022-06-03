import React, { useEffect, useState } from "react";
import { Button, Form } from "semantic-ui-react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function Update() {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
  });
  const [loading, setloading] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getParticularData();
  }, []);

  const getParticularData = () => {
    axios
      .get("https://62906fdf27f4ba1c65b8ed2d.mockapi.io/Crud/" + id)
      .then(({ data }) => {
        setData(data);
      });
  };

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    setloading(true);
    axios
      .put(`https://62906fdf27f4ba1c65b8ed2d.mockapi.io/Crud/${id}`, data)
      .then(() => {
        setloading(false);
        navigate("/");
      });
  };
  return (
    <div>
      <Form>
        <h2 style={{ color: "#de5550", marginBottom: "25px" }}>Update</h2>
        <Form.Field>
          <label>First Name</label>
          <input
            name="firstName"
            value={data.firstName}
            onChange={handleChange}
            placeholder="First Name"
            required
          />
        </Form.Field>
        <Form.Field>
          <label>Last Name</label>
          <input
            name="lastName"
            value={data.lastName}
            onChange={handleChange}
            placeholder="Last Name"
            required
          />
        </Form.Field>

        <Button type="submit" onClick={handleSubmit}>
          {loading ? "Loading" : "Update"}
        </Button>
      </Form>
    </div>
  );
}

export default Update;
