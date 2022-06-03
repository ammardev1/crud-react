import React, { useEffect, useState } from "react";
import { Button, Table } from "semantic-ui-react";
import axios from "axios";
import "./read.css";
import { Link } from "react-router-dom";
import Logout from "../logout/Logout";

export default function Read() {
  const [apiData, setApiData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    setLoading(true);
    axios
      .get("https://62906fdf27f4ba1c65b8ed2d.mockapi.io/Crud")
      .then(({ data }) => {
        setApiData(data);
        setLoading(false);
      });
  };

  const onDelete = (id) => {
    axios
      .delete(`https://62906fdf27f4ba1c65b8ed2d.mockapi.io/Crud/${id}`)
      .then(() => {
        getData();
      });
  };

  return (
    <div className="heading-margin">
      <div
        style={{
          display: "flex",
          alignItems: "space-between",
          justifyContent: "space-between",
        }}
      >
        <Link to="/create">
          <Button
            color="yellow"
            style={{ marginLeft: "20px", fontSize: "18px" }}
          >
            Add
          </Button>
        </Link>

        <Logout />
      </div>

      {loading ? (
        <h1>Loading</h1>
      ) : (
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Id</Table.HeaderCell>
              <Table.HeaderCell>FirstName</Table.HeaderCell>
              <Table.HeaderCell>LastName</Table.HeaderCell>
              <Table.HeaderCell>Update</Table.HeaderCell>
              <Table.HeaderCell>Delete</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {apiData.map((data) => {
              return (
                <Table.Row key={data.id}>
                  <Table.Cell>{data.id}</Table.Cell>
                  <Table.Cell>{data.firstName}</Table.Cell>
                  <Table.Cell>{data.lastName}</Table.Cell>
                  <Table.Cell>
                    <Link to={`/update/${data.id}`}>
                      <Button color="green">Update</Button>
                    </Link>
                  </Table.Cell>
                  <Table.Cell>
                    <Button color="red" onClick={() => onDelete(data.id)}>
                      Delete
                    </Button>
                  </Table.Cell>
                </Table.Row>
              );
            })}
          </Table.Body>
        </Table>
      )}
    </div>
  );
}
