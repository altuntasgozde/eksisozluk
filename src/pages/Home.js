import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Sidebar } from "../components/Sidebar";
import { EntryArea } from "../components/EntryArea";

export const Home = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col md={4}>
            <Sidebar />
          </Col>
          <Col md={8}>
            <EntryArea />
          </Col>
        </Row>
      </Container>
    </div>
  );
};
