import React from 'react';
import { Container } from 'react-bootstrap';

export const NoMatch = () => (
  <Container className='mt-5 mb-5' style={{height: '55vh', marging: '0px'}}>
    <h1 className='text-warning font-weight-bold text-center mb-3 display-3 pt-5'>404</h1>
    <h2 className='font-weight-bold text-center'>Oops! Page not found</h2>
    <p className='text-center'>Sorry, but the page you are looking for is not found. Please, make sure you have typed the current URL</p>
  </Container>
)

export default NoMatch