import React from "react";
import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { FormControl } from "react-bootstrap";
import { Button } from "react-bootstrap";

function Navigation() {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand className="text-primary" href="#home">
            The YAY Company
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto" variant="pills" defaultActiveKey="/home">
              <Nav.Link className="text-dark" href="/home">
                Home
              </Nav.Link>
              <Nav.Link eventKey="link-1" className="text-dark" href="/news">
                News
              </Nav.Link>
              <Nav.Link eventKey="link-2" className="text-dark" href="/contact">
                Contact
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="mr-2 search_label"
                aria-label="Search"
              />
              <Button variant="primary">Go</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigation;
