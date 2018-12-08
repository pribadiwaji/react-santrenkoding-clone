import React, { Component } from 'react';
import Logo from '../Assets/logo.png'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button } from 'reactstrap';
  import '../Assets/Custom-style.css';

class Header extends Component{
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div class="ant-affix">
        <Navbar color="light" light expand="md">
            <NavbarBrand href=""><img style = {{width:46}} src={Logo} alt= 'santren koding'></img></NavbarBrand>
            <NavbarBrand href = "" onClick={()=>this.props.changePage("Home")}>Santren Koding</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href = "#" onClick={()=>this.props.changePage("Kajian")}>Kajian Koding</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href = "#" onClick={()=>this.props.changePage("Mondok")}>Mondok Koding</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href = "#" onClick={()=>this.props.changePage("Kitab")}>Kitab Koding</NavLink>
              </NavItem>
              <Button outline color="primary">Masuk/Daftar</Button>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
export default Header;