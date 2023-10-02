import {
    Container,
    Navbar,
    Nav,
    NavDropdown,
    NavbarBrand,
    NavbarToggle,
    NavbarCollapse,
    NavDropdownItem,
    NavDropdownDivider,
    NavLink,
    Button,
    Badge,
  } from "@/lib/bootstrap";
  import {
    FaUserFriends,
    FaHome,
    FaVideo,
    FaFacebookMessenger,
    FaSnapchatSquare,
  } from "react-icons/fa";
  import Styles from "@/styles/components/NavBar.module.scss";
  
const Header = () => {
  return (
    <Navbar
      bg="dark"
      data-bs-theme="dark"
      collapseOnSelect
      expand="lg"
      className={`bg-body-tertiary ${Styles.mainNavBar}`}
    >
      <Container fluid={true}>
        <NavbarBrand href="#home" title={"Social Media App"}>
          <FaSnapchatSquare size={35} color={"#ffc107"} />
        </NavbarBrand>
        <NavbarToggle aria-controls="responsive-navbar-nav" />
        <NavbarCollapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavLink className={Styles.navLink} href="/">
              <FaHome />
              <span> Home</span>
            </NavLink>
            <NavLink className={Styles.navLink} href="/friends">
              <FaUserFriends />
              <span>Friends</span>
            </NavLink>
            <NavLink className={Styles.navLink} href="#pricing">
              <FaVideo />
              <span>Videos</span>
            </NavLink>
            <NavLink className={Styles.navLink} href="/chat">
              <FaFacebookMessenger />
              <span>Messages</span>
            </NavLink>
          </Nav>
          <Nav>
            <NavLink eventKey={2} href="#memes">
              <Button variant="warning">Sign In / Sign Up</Button>
            </NavLink>
          </Nav>
        </NavbarCollapse>
      </Container>
    </Navbar>
  );
};
export default Header;
