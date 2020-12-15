import React from 'react'
import { Navbar,Button,Nav,Form,FormControl } from 'react-bootstrap';
//
function NavBarr() {
    return (
        <div>
       
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">Victor Hugo</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-light">Search</Button>
    </Form>
  </Navbar>

        </div>
    )
}

export default NavBarr
