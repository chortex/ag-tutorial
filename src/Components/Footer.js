import React, { Component } from 'react';
import { Container } from 'react-bootstrap';




export default class Footer extends Component {
  render() {
    return (
      <React.Fragment>
        <div className='bg-secondary'>
          <hr></hr>
          <Container>
            <div className='pt-3 pb-3'>
              <div className='pb-2'>
                <a href='https://discord.com/invite/3XYqFDd' target='_blank' rel="noopener noreferrer" className='text-dark'>
                  <i className="fab fa-discord pr-3" style={{width: '20px'}}></i>
                  <b className='pl-2'>AG discord channel</b>
                </a>
              </div>
              <div>
                <a href='https://www.youtube.com/user/thesacrisant' target='_blank' rel="noopener noreferrer" className='text-dark'>
                  <i className="fab fa-youtube pr-3" style={{width: '20px'}}></i>
                  <b className='pl-2'>AG demos pack</b>
                </a>
              </div>
            </div>
          </Container>
          <hr></hr>
          <Container className='mb-0 d-flex justify-content-round'>
            <h6 className='pb-3 text-muted'><small>Developed and created by <a href='https://steamcommunity.com/id/chort' target='_blank' rel="noopener noreferrer" className='text-secondary'><b>chrtx</b></a></small></h6>
            <h6 className='pb-3 pl-5 text-muted'><small>&copy; Half-Life Pro 2020</small></h6>
          </Container>
        </div>
      </React.Fragment>
    )
  }
}