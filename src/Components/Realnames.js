import React, { Component } from 'react';
import { Card } from 'react-bootstrap';



export default class Realnames extends Component {
  render() {
    return (
      <React.Fragment>
        <div className='pb-4'>
          <h4 className='font-weight-bold pb-3'>Realnames</h4>
          <p>
            In HLDM:AG there is a little known feature which allows you 
            to save Steam_ID's and link a name to them, helping you identify unknown players in a game.
          </p>
          <p>
            For this to work, you must have a realnames.txt file saved in your common\Half-Life\ag folder.
          </p>

          <Card className='mb-3'>
            <Card.Header>
              Realnames
            </Card.Header>
            <Card.Body>
              <h5 className="card-title">Realnames by Nurdik</h5>
              <p className="card-text">
                Put a <b>realnames.txt</b> to your <i>common\Half-Life\ag</i> folder
              </p>
              <p className='text-muted'>
                <small>Last updated: 10/2020</small>
              </p>
              <a href='https://drive.google.com/file/d/1RA3GD3oyK3IMN51X0IXRsQFnyu2DrGn2/view?usp=sharing' target='_blank' rel="noopener noreferrer" className='p-0 m-0'><i className="fas fa-cloud-download-alt pr-2"></i>Download</a>
            </Card.Body>
          </Card>

          <p>
            To check the realnames in a server, you must use the <code>loadauthid</code> and <code>unloadauthid</code> commands, 
            but here is a simple script which makes the process easier. 
            Just press your +realnames key to view the scoreboard with realnames enabled.
          </p>
          <p>
            <code>
            alias "+realnames" "loadauthid;+showscores"
            <br></br>
            alias "-realnames" "unloadauthid;-showscores"
            </code>
          </p>
          <p>
            <code>
            bind "key" "+realnames"
            </code>
          </p>
          <p>
          To use, bind a key to <code>+realnames</code>
          </p>

        </div>
      </React.Fragment>
    )
  }
}