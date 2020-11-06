import React, { Component } from 'react';
import { Container } from 'react-bootstrap';




export default class Footer extends Component {
  render() {
    return (
      <React.Fragment>
        <div className='bg-secondary'>
          <hr></hr>
          <Container>
              <div className='row'>
                <div className='col-md-6'>
                  <div className='pt-3 pb-3'>
                    <div className='pb-2'>
                      <a href='https://discord.com/invite/3XYqFDd' target='_blank' rel="noopener noreferrer" className='text-dark'>
                        <i className="fab fa-discord pr-3" style={{width: '20px'}}></i>
                        <b className='pl-2'>AG discord channel</b>
                      </a>
                    </div>
                    <div className='pb-2'>
                      <a href='https://www.youtube.com/user/thesacrisant' target='_blank' rel="noopener noreferrer" className='text-dark'>
                        <i className="fab fa-youtube pr-3" style={{width: '20px'}}></i>
                        <b className='pl-2'>AG demos pack</b>
                      </a>
                    </div>
                    <div>
                      <a href='https://github.com/chortex/ag-tutorial/tree/master' target='_blank' rel="noopener noreferrer" className='text-dark'>
                        <i className="fab fa-github pr-3" style={{width: '20px'}}></i>
                        <b className='pl-2'>View project on GitHub</b>
                      </a>
                    </div>
                  </div>
                </div>
                <div className='col-md-3 pt-3 pb-3 d-flex justify-content-md-end'>
                  <div className='d-flex flex-column'>
                    <h6>Co-authors:</h6>
                    <h6 className='text-muted'><small><a href='https://steamcommunity.com/id/chort' target='_blank' rel="noopener noreferrer" className='text-secondary'><b>chrtx</b></a></small></h6>
                    <h6 className='text-muted'><small><a href='https://steamcommunity.com/id/peacefulthroughout/' target='_blank' rel="noopener noreferrer" className='text-secondary'><b>rammy</b></a></small></h6>
                  </div>
                </div>
                <div className='col-md-3 pt-3 pb-3 d-flex justify-content-md-end'>
                  <div className='d-flex flex-column'>
                    <h6>Special thanks:</h6>
                    <h6 className='text-muted'><small><a href='https://steamcommunity.com/id/execut4ble' target='_blank' rel="noopener noreferrer" className='text-secondary'><b>execut4ble</b></a></small></h6>
                    <h6 className='text-muted'><small><a href='https://www.youtube.com/channel/UCaS3GR5jeHwN9NxcCr0kyRw' target='_blank' rel="noopener noreferrer" className='text-secondary'><b>Alex</b></a></small></h6>
                    <h6 className='text-muted'><small><a href='https://www.youtube.com/channel/UCzR8Xt_oWZgOAmKyTM09Q-g' target='_blank' rel="noopener noreferrer" className='text-secondary'><b>ESKIYAAAAAA</b></a></small></h6>
                    <h6 className='text-muted'><small><a href='https://steamcommunity.com/id/vendami' target='_blank' rel="noopener noreferrer" className='text-secondary'><b>vendami</b></a></small></h6>
                  </div>
                </div>
              </div>
          </Container>
          <hr></hr>
          <Container className='mb-0 d-flex justify-content-round'>
            <h6 className='pb-3 text-muted'><small>Developed and created by <a href='https://steamcommunity.com/id/chort' target='_blank' rel="noopener noreferrer" className='text-secondary'><b>chrtx</b></a></small></h6>
            <h6 className='pb-3 pl-4 text-muted'><small>&copy; Half-Life Pro 2020</small></h6>
          </Container>
        </div>
      </React.Fragment>
    )
  }
}