import React, { Component } from 'react';
import { Container } from 'react-bootstrap';



export default class About extends Component {
  render() {
    return (
      <React.Fragment>
        <Container>
          <div className='pt-5 pl-3 pr-3 pb-3'>
            <h3 className='pt-2 pb-3 d-flex justify-content-center'>What is Half-Life Adrenaline Gamer?</h3>
            <p>Half-Life Adrenaline Gamer is mod for professional HL multiplayer gaming. It includes "bunnyhop" and customization for your client.
              There are also regular tournaments, leagues and LAN cups. This resource created to help new players to join this competitive game 
              and also it might be helpfull for advanced players to improve their skills. To know more about what is Adrenaline Gamer check out this frag movie
            </p>
            <div className='d-flex justify-content-center pt-5 pb-5'>
              <iframe title='Adrenaline Gamer frag movie' width="560" height="315" src="https://www.youtube.com/embed/fi9bzr9ywNM" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen='yes'></iframe>
            </div>
          </div>
          
        </Container>
      </React.Fragment>
    )
  }
}