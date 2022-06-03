import React from "react";
import { Button } from "semantic-ui-react";
import { useNavigate } from "react-router-dom";

function Logout() {
  const navigate = useNavigate();

  const handleSubmit = () => {
    //localStorage.clear();
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <>
      <Button
        style={{ marginRight: "20px", fontSize: "17px" }}
        color="red"
        onClick={handleSubmit}
      >
        Logout
      </Button>
    </>
  );
}
export default Logout;
