"use client";
import React, { Fragment } from "react";
import {
  Button,
  Col,
  Row,
  ButtonGroup,
  Dropdown,
  DropdownButton,
} from "@/lib/bootstrap";
import { FaHandPointRight } from "react-icons/fa";
import Image from "next/image";

const FriendProfile = ({ friend }) => {
  return (
    <section className=" section-bg friend-profile p-10">
      {!friend ? (
        <h5>
          Select profile <FaHandPointRight />
        </h5>
      ) : (
        <Fragment>
          <Row>
            <Col md={4}>
              <Image
                src={friend?.image}
                alt="Profile Picture"
                className="img-fluid rounded-circle"
                width={300}
                height={300}
              />
            </Col>
            <Col md={8}>
              <h2>{friend?.name}</h2>
              <h5>{friend?.position}</h5>
              <p>Bio:{friend?.about}</p>
              <ul>
                <li>Email: user@example.com</li>
                <li>Location: City, Country</li>
                <li>
                  Website: <a href="https://www.example.com">example.com</a>
                </li>
              </ul>
            </Col>
          </Row>
          <Row>
            <Col md={4}></Col>
            <Col>
              <Button variant="success">Add Friend</Button>{" "}
              <ButtonGroup>
                <DropdownButton
                  as={ButtonGroup}
                  title="More"
                  id="bg-nested-dropdown"
                >
                  <Dropdown.Item eventKey="1">Block</Dropdown.Item>
                  <Dropdown.Item eventKey="2">Report</Dropdown.Item>
                </DropdownButton>
              </ButtonGroup>
            </Col>
          </Row>
        </Fragment>
      )}
    </section>
  );
};

export default React.memo(FriendProfile);
