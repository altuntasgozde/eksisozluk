import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Sidebar } from "../components/Sidebar";
import { EntryArea } from "../components/EntryArea";
import axios from "axios";

export const Home = () => {
  const [data, setData] = useState([]);
  const [choosenTitle, setChoosenTitle] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:1337/api/entries")
      .then((res) => setData(res.data.data));
  }, []);

  const GetTitle = (id) => {
    setChoosenTitle(data.filter((item) => item.id == id));
  };

  return (
    <div>
      <Container>
        <Row>
          <Col md={4}>
            <Sidebar data={data} GetTitle={GetTitle} />
          </Col>
          <Col md={8}>
            {choosenTitle.length == 0 ? null : (
              <EntryArea choosenTitle={choosenTitle} />
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
};
