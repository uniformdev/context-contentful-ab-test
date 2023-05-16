import { useUniformContext } from "@uniformdev/context-react";
import { Navbar, Container, Nav } from "react-bootstrap"

export const SiteNavbar = () => {
  const {
    context
  } = useUniformContext();

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Uniform + Contentful AB Testing Demo</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href="#"
              onClick={async (e) => {
                e.preventDefault();

                await context.forget(true);
                window.location.reload();
              }}
            >
              Forget Me
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}