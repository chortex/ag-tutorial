import React, { Component } from 'react';
import Jumbotron from '../Components/Jumbotron';
import Progress from '../Components/Progress';
import About from '../Components/About';


export default class Main extends Component {
  render() {
    return (
      <React.Fragment>
        <div>
          <Jumbotron />
          <Progress />
          <About />
        </div>
      </React.Fragment>
    )
  }
}