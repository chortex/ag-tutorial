import React, { Component } from 'react';
import {Jumbotron as Jumbo, Container} from 'react-bootstrap';


export default class Jumbotron extends Component {
  render() {
    return (
      <Jumbo fluid className='jumbo d-block'>
        <div className='overlay'></div>
        <Container className='pt-3 pl-3'>
          <h1 className='display-4' style={{fontWeight: "500"}}>Welcome!</h1>
          <h4 style={{fontWeight: "500"}}>Learn to play AG from my guide</h4>
        </Container>
      </Jumbo>
    )
  }
}