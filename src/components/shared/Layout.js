import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function Layout(props){
    
    return (
    <>
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Employee Mangement</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            
            <NavDropdown title="Employee" id="basic-nav-dropdown">
              <NavDropdown.Item href="add-employee">Add Employee</NavDropdown.Item>
              <NavDropdown.Item href="/">
                View Employee
              </NavDropdown.Item>
              
            </NavDropdown>

            <NavDropdown title="Department" id="basic-nav-dropdown">
              <NavDropdown.Item href="add-department">Add Department</NavDropdown.Item>
              <NavDropdown.Item href="all-department">
                View Department
              </NavDropdown.Item>
              
            </NavDropdown>

            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    <Container>{props.children}</Container>
    </>
    );
}
export default Layout;