import React, { Component } from 'react'

export default class Donate extends Component {
  render() {
    return (
      <div className='p-5'>
        <h4 className='text-center'>Thank you for support this project!</h4>
        <h6 className='text-center text-muted mt-3'>You can support by donation.</h6>
        <div className='d-flex justify-content-center mt-3 mb-5 row'>
          <a href='https://paypal.me/chortex/1' className='btn btn-success btn-lg mt-3 m-3' target='_blank' rel="noopener noreferrer">PayPall</a>
          <a href='https://www.donationalerts.com/r/chrtx' className='btn btn-success btn-lg mt-3 m-3' target='_blank' rel="noopener noreferrer">Donate</a>
        </div>
      </div>
    )
  }
}