"use client";
import React, { Fragment, useState, useEffect } from "react";
import "@/styles/pages/dashboard.css";
import Header from "./Header";
import { Container } from "@/lib/bootstrap";
import Footer from "./Footer";
import SideBar from "@/components/pages/Dashboard/sidebar/SideBar";
import Content from "@/components/pages/Dashboard/content/Content";

interface RootLayoutProps {
  children: React.ReactNode;
}
const DashboardLayout = ({ children }: RootLayoutProps) => {
  const [isOpen, setIsOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(true);

  let previousWidth = -1;

  const updateWidth = () => {
    const width = window.innerWidth;
    const widthLimit = 576;
    const isMobile = width <= widthLimit;
    const wasMobile = previousWidth <= widthLimit;

    if (isMobile !== wasMobile) {
      setIsOpen(!isMobile);
    }

    previousWidth = width;
  };

  useEffect(() => {
    updateWidth();
    window.addEventListener("resize", updateWidth);

    return () => {
      window.removeEventListener("resize", updateWidth);
    };
  }, []);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Fragment>
      <Container fluid={true} className="dashboard-container">
        <div className="App wrapper">
          <SideBar toggle={toggle} isOpen={isOpen} />
          <Content toggle={toggle} isOpen={isOpen}>
            {children}
          </Content>
        </div>
      </Container>
      <Footer />
    </Fragment>
  );
};
export default DashboardLayout;
