import React, { useState } from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/esm/Button";
import axios from "axios";

export const NewEntry = () => {
  const [entry, setEntry] = useState({
    title: "",
    detail: "",
  });

  const GetEntryValue = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    entry[name] = value;
    setEntry(entry);
  };

  const AddEntry = (e) => {
    axios
      .post("http://localhost:1337/api/entries", {
        data: {
          title: entry.title,
          detail: entry.detail,
        },
      })
      .then((res) => console.log(res));

      e.preventDefault();
  };

  return (
    <div>
      <Container>
        <Row>
          <Col md={{ span: 4, offset: 4 }}>
            <Form onSubmit={AddEntry}>
              <Form.Group className="mb-3">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="text"
                  name="title"
                  placeholder="Title"
                  onChange={GetEntryValue}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Detail</Form.Label>
                <Form.Control
                  type="text"
                  name="detail"
                  placeholder="Detail"
                  onChange={GetEntryValue}
                />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
