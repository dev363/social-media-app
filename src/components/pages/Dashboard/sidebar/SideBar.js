"use client";
import React from "react";
import {
  FaHome,
  FaBriefcase,
  FaUserFriends,
  FaImages,
  FaVideo,
  FaToolbox,
  FaQuestionCircle,
  FaCopy,
  FaSnapchatSquare,
  FaTimes,
} from "react-icons/fa";
import SubMenu from "./SubMenu";
import { Nav, Button } from "@/lib/bootstrap";
import classNames from "classnames";

function SideBarCompoent(props) {
  return (
    <div className={classNames("sidebar ", { "is-open": props.isOpen })}>
      <div className="sidebar-header">
        <Button
          variant="link"
          onClick={props.toggle}
          style={{ color: "#fff" }}
          className="mt-4"
        >
          <FaTimes size={20} />
        </Button>
        <FaSnapchatSquare size={55} color={"#ffc107"} />
      </div>

      <Nav className="flex-column pt-2 " bg="dark" data-bs-theme="dark">
        {/* <p className="ml-3">Heading</p> */}

        <Nav.Item className="active">
          <Nav.Link href="/">
            <FaHome size={20} />
            <span>Home</span>
          </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link href="/friends">
            <FaUserFriends size={20} />
            <span>Friends</span>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/gallary">
            <FaImages size={20} />
            <span>Gallary</span>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/videos">
            <FaVideo size={20} />
            <span>Videos</span>
          </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link href="/faq">
            <FaQuestionCircle size={20} />
            <span>FAQ</span>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/settings">
            <FaToolbox size={20} />
            <span>Settings</span>
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
}

export default SideBarCompoent;
