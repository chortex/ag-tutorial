import React, { Component } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from '../assets/logo.png';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';

import Main from '../Pages/Main';
import Customization from '../Pages/Customization';
import Guides from '../Pages/Guides';
import Resources from '../Pages/Resources';
import NoMatch from '../Components/NoMatch'

export default class Header extends Component {
  render() {
    return (
      <>
      <Router>
        <Navbar collapseOnSelect expand='md' bg='dark' variant='dark'>
          <Container>
            <Navbar.Brand href='/' className='d-flex align-items-center'>
              <img
                src={logo}
                height='45'
                width='auto'
                className='d-inline-block align-top logo-image'
                alt='Logo'
              />{" "}
              Half-Life Pro
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='responsive-navbar-nav' />
            <Navbar.Collapse id='responsive-navbar-nav'>
              <Nav className='mr-auto d-flex align-items-center'>
                <Nav.Link as={NavLink} exact to='/' activeStyle={{color: '#008CBA'}}> Main </Nav.Link>
                <Nav.Link as={NavLink} to='/customization' activeStyle={{color: '#008CBA'}}> Customization </Nav.Link>
                <Nav.Link as={NavLink} to='/guides' activeStyle={{color: '#008CBA'}}> Guides </Nav.Link>
                <Nav.Link as={NavLink} to='/resources' activeStyle={{color: '#008CBA'}}> Resources </Nav.Link>
              </Nav>
              <a href='/' target='_blank' className='btn btn-primary btn-lg'>Later</a>
              {/* <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
              <input type="hidden" name="cmd" value="_s-xclick" />
              <input type="hidden" name="hosted_button_id" value="4239P89NJYWMS" />
              <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
              <img alt="" border="0" src="https://www.paypal.com/en_UA/i/scr/pixel.gif" width="1" height="1" />
              </form> */}
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Switch>
          <Route exact path='/' component={Main} />
          <Route path='/customization' component={Customization} />
          <Route path='/guides' component={Guides} />
          <Route path='/resources' component={Resources} />
          <Route component={NoMatch} />
        </Switch>
      </Router>
      </>
    )
  }
}
