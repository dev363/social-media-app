"use client";
import React, { useState } from "react";
import { Accordion, Nav } from "@/lib/bootstrap";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import classNames from "classnames";

function SubMenu(props) {
  const [collapsed, setCollapsed] = useState(true);

  const { icon, title, items } = props;

  const toggleNavbar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Nav.Item className={classNames({ open: !collapsed })}>
      <Accordion>
        <Accordion.Toggle
          as={Nav.Link}
          variant="link"
          eventKey="0"
          onClick={toggleNavbar}
        >
          {title}
          {collapsed ? <FaCaretDown /> : <FaCaretUp />}
        </Accordion.Toggle>

        <Accordion.Collapse eventKey="0">
          <nav className="nav flex-column">
            {items.map((item) => (
              <a
                className={`nav-link nav-item pl-5 ${
                  item === "Active" ? "active" : ""
                } `}
                href="/"
                key={item}
              >
                {item}
              </a>
            ))}
          </nav>
        </Accordion.Collapse>
      </Accordion>
    </Nav.Item>
  );
}

export default SubMenu;
