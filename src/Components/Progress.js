import React, { Component } from 'react';
import { Container, Row } from 'react-bootstrap';
// import {Link} from 'react-router-dom'

export default class Progress extends Component {
  render() {
    return (
      <Container>
        <h2 className='d-flex justify-content-center pb-5'>Start to play Half-Life AG in few steps</h2>
        <Row className='d-flex justify-content-between pl-3 pr-3 pb-5'>
          <div className='step col-md-2'>
            <i className="fab fa-steam-symbol fa-2x text-primary pb-2 d-flex justify-content-center"></i>
            <a href='https://store.steampowered.com/app/70/HalfLife/' target='_blank' rel="noopener noreferrer" className='d-flex justify-content-center'>
              <span className='text-center'>Download Half-Life</span>
            </a>
          </div>
          <div className='step-between col-md-3'>
            <hr></hr>
          </div>
          <div className='step col-md-2'>
            <i className="fas fa-cloud-download-alt fa-2x text-primary pb-2 d-flex justify-content-center"></i>
            <a href='https://openag.pro/' target='_blank' rel="noopener noreferrer" className='d-flex justify-content-center'>
              <span className='text-center'>Download OpenAG</span>
            </a>
          </div>
          <div className='step-between col-md-3'>
            <hr></hr>
          </div>
          <div className='step col-md-2'>
            <i className="fas fa-cogs fa-2x text-primary pb-2 d-flex justify-content-center"></i>
            <a href='/customization' className='d-flex justify-content-center'>
              <span className='text-center'>Customize</span>
            </a>
          </div>
        </Row>
      </Container>
    )
  }
}
