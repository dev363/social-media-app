import React from "react";
import classNames from "classnames";
import { Container } from "@/lib/bootstrap";
import NavBar from "./Navbar";

function Content(props) {
  return (
    <Container
      fluid
      className={classNames("content", { "is-open": props.isOpen })}
    >
      <NavBar toggle={props.toggle} isOpen={props.isOpen} />
      <Container fluid={true}>{props.children}</Container>
    </Container>
  );
}

export default Content;
