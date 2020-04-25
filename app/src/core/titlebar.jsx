import React from "react";
import ROUTES from "Constants/routes";
import { Link } from "react-router-dom";

// reactstrap imports
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap'

class TitleBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      setIsOpen: false
    };

    // this.toggle = this.toggle.bind(this);
  }

  

  setIsOpen() {
    !isOpen
  }

  render() {
    return (
      <div class='NavArea'>
        <Navbar color='dark' dark expand="md">
          <NavbarBrand href="/">Custom Spotify</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/components/">Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Option 1
                </DropdownItem>
                <DropdownItem>
                  Option 2
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Reset
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavbarText>Simple Text</NavbarText>
        </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default TitleBar;