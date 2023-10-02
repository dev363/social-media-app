"use client";
import React, { useState, useEffect } from "react";
import DashboardLayout from "@/components/layouts/DashboardLayout";
import { Container, Row, Col, Card, Button } from "@/lib/bootstrap";
import { MdTempleHindu } from "react-icons/md";
import { BsPostcardHeartFill } from "react-icons/bs";
import { FaUserFriends, FaRocketchat, FaNewspaper } from "react-icons/fa";
import Link from "next/link";

const Blocks = [
  {
    icon: <MdTempleHindu size={35} />,
    title: "Find a Church",
    desc: "With supporting text below as a natural lead-in to additional content.",
    link: "/find-a-church",
  },
  {
    icon: <FaUserFriends size={35} />,
    title: "Find Friends",
    desc: "With supporting text below as a natural lead-in to additional content.",
    link: "/friends",
  },
  {
    icon: <BsPostcardHeartFill size={35} />,
    title: "Create Post",
    desc: "With supporting text below as a natural lead-in to additional content.",
    link: "/create-post",
  },
  {
    icon: <FaRocketchat size={35} />,
    title: "Chat",
    desc: "With supporting text below as a natural lead-in to additional content.",
    link: "/chat",
  },
];

function DashboardPage() {
  return (
    <DashboardLayout>
      <section className="dashboard">
        <Row>
          <Col>
            <h3>Welcome to Social Media Hub :)</h3>
          </Col>
        </Row>
        <Row>
          {Blocks?.map((block, index) => (
            <Col md={3} xs={12} sm={6} key={index}>
              <CardBlock {...block} />
            </Col>
          ))}
        </Row>
      </section>
    </DashboardLayout>
  );
}

export default DashboardPage;

interface CardBlockProps {
  icon: React.ReactNode;
  title: string;
  desc: string;
  link: string;
}
const CardBlock = ({ icon, title, desc, link }: CardBlockProps) => {
  return (
    <Card className="link-blocks">
      <Card.Header>{icon}</Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{desc}</Card.Text>
        <Link href={link}>
          <Button variant="primary">Click</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};
