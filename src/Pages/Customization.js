import React, { Component } from 'react';
import { Container, Tab, Row, Col, Nav } from 'react-bootstrap';
import Settings from '../Components/Settings';
import Textures from '../Components/Textures';
import Models from '../Components/Models';
import Sprites from '../Components/Sprites';

export default class Customization extends Component {
  render() {
    return (
      <React.Fragment>
        <Container>
          <div className='row d-flex justify-content-between pt-5 pb-3'>
            <i className="fas fa-cogs fa-4x text-primary col-md-3 pb-2 d-flex justify-content-center align-items-center"></i>
            <div className='col-md-9'>
              <h3 className='d-flex justify-content-center'>Customize Half-Life</h3>
              <p>Customization is an important part of game. It helps you to make your client individual and comfortable. 
                First of all you have to change your keyboard commands such as weapons / movement binds etc. Also you can customize
                your textures, models, sprites etc. This is step by step guide about AG customization.
              </p>
            </div>
          </div>
          <hr></hr>
        </Container>

        <Container>
          <Tab.Container id='customization-tabs' defaultActiveKey='settings'>
            <Row>
              <Col sm={3}>
                <Nav variant='pills' className='flex-column sticky-top' style={{top: "95px"}}>
                  <Nav.Item className='pl-5 pr-5 pb-3'>
                    <Nav.Link eventKey='settings' className='customization-nav-link'>Settings</Nav.Link>
                  </Nav.Item>
                  <Nav.Item className='pl-5 pr-5 pb-3'>
                    <Nav.Link eventKey='textures' className='customization-nav-link'>Textures</Nav.Link>
                  </Nav.Item>
                  <Nav.Item className='pl-5 pr-5 pb-3'>
                    <Nav.Link eventKey='models' className='customization-nav-link'>Models</Nav.Link>
                  </Nav.Item>
                  <Nav.Item className='pl-5 pr-5 pb-3'>
                    <Nav.Link eventKey='sprites' className='customization-nav-link'>Sprites</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col sm={9}>
                <Tab.Content>
                  <Tab.Pane eventKey='settings'>
                    <Settings />
                  </Tab.Pane>
                  <Tab.Pane eventKey='textures'>
                    <Textures />
                  </Tab.Pane>
                  <Tab.Pane eventKey='models'>
                    <Models />
                  </Tab.Pane>
                  <Tab.Pane eventKey='sprites'>
                    <Sprites />
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </Container>
      </React.Fragment>
    )
  }
}
