import React, { Component } from 'react';
import { Container, Tab, Row, Col, Nav } from 'react-bootstrap';
import Movement from '../Components/Movement';
import Aiming from '../Components/Aiming';
import Tactics from '../Components/Tactics';
import Strategies from '../Components/Strategies';

export default class Guides extends Component {
  render() {
    return (
      <React.Fragment>
        <Container>
          <div className='row d-flex justify-content-between pt-5 pb-3'>
            <i className="fas fa-chess fa-4x text-primary col-md-3 pb-2 d-flex justify-content-center align-items-center"></i>
            <div className='col-md-9'>
              <h3 className='d-flex justify-content-center'>Adrenaline Gamer Gameplay</h3>
              <p>Conventionally, the gameplay can be divided into several main components. 
                I would out 4 main components of the gameplay: movement, aiming, combat tactics, map strategy. 
                In this section, I would like to describe each component of the gameplay, 
                as well as share my thoughts on how best to progress in each of that.
              </p>
            </div>
          </div>
          <hr></hr>
        </Container>

        <Container>
          <Tab.Container id='customization-tabs' defaultActiveKey='movement'>
            <Row>
              <Col md={3}>
                <Nav variant='pills' className='flex-column sticky-top' style={{top: "95px"}}>
                  <Nav.Item className='pl-5 pr-5 pb-3'>
                    <Nav.Link eventKey='movement' className='customization-nav-link'>Movement</Nav.Link>
                  </Nav.Item>
                  <Nav.Item className='pl-5 pr-5 pb-3'>
                    <Nav.Link eventKey='tactics' className='customization-nav-link'>Tactics</Nav.Link>
                  </Nav.Item>
                  <Nav.Item className='pl-5 pr-5 pb-3'>
                    <Nav.Link eventKey='aiming' className='customization-nav-link'>Aiming</Nav.Link>
                  </Nav.Item>
                  <Nav.Item className='pl-5 pr-5 pb-3'>
                    <Nav.Link eventKey='strategies' className='customization-nav-link'>Strategies</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col md={9}>
                <p className='text-muted'>
                  <small>
                  These materials are only a subjective vision of the authors and are based only on their
                  own experience and observations.
                  </small>
                </p>
                <Tab.Content>
                  <Tab.Pane eventKey='movement'>
                    <Movement />
                  </Tab.Pane>
                  <Tab.Pane eventKey='aiming'>
                    <Aiming />
                  </Tab.Pane>
                  <Tab.Pane eventKey='tactics'>
                    <Tactics />
                  </Tab.Pane>
                  <Tab.Pane eventKey='strategies'>
                    <Strategies />
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
