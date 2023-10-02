import React, { Fragment } from "react";
import Header from "./Header";
import { Container } from "@/lib/bootstrap";
import Footer from "./Footer";
interface RootLayoutProps {
  children: React.ReactNode;
}
const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <Fragment>
      <Header />
      <Container fluid={true}>{children}</Container>
      <Footer />
    </Fragment>
  );
};
export default RootLayout;
