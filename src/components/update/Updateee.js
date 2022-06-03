import React, { useEffect, useState } from "react";
import { Button, Form } from "semantic-ui-react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function Updateee() {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
  });
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

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
    setLoading(true);
    axios
      .put(`https://62906fdf27f4ba1c65b8ed2d.mockapi.io/Crud/${id}`, data)
      .then(() => {
        setLoading(false);
        navigate("/");
      });
  };

  return (
    <div>
      <Form>
        <Form.Field>
          <label>First Name</label>
          <input
            name="firstName"
            value={data.firstName}
            onChange={handleChange}
            placeholder="First Name"
          />
        </Form.Field>
        <Form.Field>
          <label>Last Name</label>
          <input
            name="lastName"
            value={data.lastName}
            onChange={handleChange}
            placeholder="last Name"
          />
        </Form.Field>
        <Button type="submit" onClick={handleSubmit}>
          {loading ? "Loading" : "Updated"}
        </Button>
      </Form>
    </div>
  );
}
export default Updateee;
