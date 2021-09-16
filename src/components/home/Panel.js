import React from "react";
import { Tabs } from "react-bootstrap";
import { Tab } from "react-bootstrap";
import { Container } from "react-bootstrap";

function Panel() {
  return (
    <Container fluid>
      <Tabs
        defaultActiveKey="profile"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="first" title="First" className="bg-white">
          <p>
            Morbi eget efficitur turpis. Vivamus pellentesque tortor massa,
            venenatis pharetra leo laoreet a. Nullam non eleifend justo, a
            ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed
            condimentum mattis rhoncus.{" "}
          </p>
        </Tab>
        <Tab eventKey="profile" title="Profile"></Tab>
        <Tab eventKey="contact" title="Contact" disabled></Tab>
      </Tabs>
    </Container>
  );
}

export default Panel;
