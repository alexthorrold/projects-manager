import React from 'react';
import { Button, Form, FormControl, Nav } from 'react-bootstrap';

const Navbar = () => {
    return (
        <div className="App">
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">Project Manager</Navbar.Brand>
                <Nav className="mr-auto">
                    <Button variant="outline-info" className="mr-2">
                        Sort by Project Name
                    </Button>
                    <Button variant="outline-info">Sort by Start Date</Button>
                </Nav>
                <Form inline>
                    <FormControl
                        type="text"
                        placeholder="Search"
                        className="mr-sm-2"
                    />
                    <Button variant="outline-info">Search</Button>
                </Form>
            </Navbar>
            {/* rest of your code */}
        </div>
    );
};

export default Navbar;
