import React, { Component } from 'react'

export default class Donate extends Component {
  render() {
    return (
      <div className='p-5'>
        <h4 className='text-center'>Thank you for support this project!</h4>
        <h6 className='text-center text-muted mt-3'>You can support by donation.</h6>
        <div className='d-flex justify-content-center mt-3 mb-5 row'>
          <a href='https://paypal.me/chortex/10' className='mt-3 m-3' target='_blank' rel="noopener noreferrer"><i className="fab fa-cc-paypal fa-3x"></i></a>
          <a href='https://www.donationalerts.com/r/chrtx' className='mt-3 m-3' target='_blank' rel="noopener noreferrer"><i class="fab fa-cc-visa fa-3x"></i></a>
          <a href='https://www.donationalerts.com/r/chrtx' className='mt-3 m-3' target='_blank' rel="noopener noreferrer"><i class="fab fa-cc-mastercard fa-3x"></i></a>
        </div>
      </div>
    )
  }
}