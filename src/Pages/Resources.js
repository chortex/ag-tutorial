import React, { Component } from 'react';
import {Container} from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import gamepad from '../assets/gamepad.jpg'


export default class Resources extends Component {
  render() {
    return (
      <React.Fragment>
        <Container>
          <div className='row ml-3 mr-3 mb-3'>
            <div className='col-lg-4 m-auto order-2 order-lg-1 p-0'>
              <h3 className='pb-3'>Adrenaline Gamer resources</h3>
              <p>
                This section collects the most important resources related to Half-Life and Adrenaline Gamer. 
                If you want to know more, 
                add a useful page, or the resource you are looking for is not here feel free to ask in discord.
              </p>
              <a href='https://discord.com/invite/3XYqFDd' target='_blank' rel="noopener noreferrer" className='btn btn-primary'>AG discord</a>
            </div>
            <div className='col-lg-8 order-1 order-lg-2 d-flex justify-content-center'>
              <img src={gamepad} alt='Gamepad' className='w-75' />
            </div>
          </div>
          
            <Card className='mb-3 ml-3 mr-3'>
              <Card.Header>
                <a href='https://webchat.quakenet.org/' target='_blank' rel="noopener noreferrer">Slag player database</a>
              </Card.Header>
              <Card.Body>
                <h5 className="card-title">Adrenaline Gamer players database (Slag)</h5>
                <p className="card-text">This service allow you to check any player. You can check VAC or Slag banned players here. 
                  Everything you need is to know steam id. Feel free to use it below.
                </p>
                <p>
                  Enter your Nickname and channel, as channel value type <code>#scdm</code> (Adrenaline Gamer irc channel).
                  To check out player type <code>!f STEAM_0:0:XXXXXXXXX</code> where 0:0:XXXXXXXXX is player's steam id.
                </p>
                <iframe src="https://webchat.quakenet.org/?channels=scdm&uio=d4" title='Slag player database' width="100%" height="400" style={{border: "1px solid #eee"}} className='p-1'></iframe>
              </Card.Body>
            </Card>

            <Card className='mb-3 ml-3 mr-3'>
              <Card.Header>
                <a href='https://www.youtube.com/user/thesacrisant' target='_blank' rel="noopener noreferrer">Thesacrisant youtube</a>
              </Card.Header>
              <Card.Body>
                <h5 className="card-title">The biggest AG demos pack.</h5>
                <p className="card-text">This is great resource for learning gameplay, it includes demos of most known AG tournaments and players.</p>
                <p>
                  You want to upload a video from a demo you have? Go to the startpage of this channel , click "over" and click on the right side above of 
                  the page on "message" and send it.
                </p>
                <div className='d-flex justify-content-center'>
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/4U7KNM5CGDo" frameBorder="0" title='Friendly 1vs1 | HR|Alex vs kuviCk | stalkyard ( POV Alex )' allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen='yes'></iframe>
                </div>
              </Card.Body>
            </Card>

            <Card className='mb-3 ml-3 mr-3'>
              <Card.Header>
                <a href='https://forum.half-life.pro/' target='_blank' rel="noopener noreferrer">Elite Half-Life League</a>
              </Card.Header>
              <Card.Body>
                <h5 className="card-title">EHLL website</h5>
                <p className="card-text">
                  Elite Half-Life League was the biggest AG league for last 15 years. They stopped in 2019. 
                  Hopefully it only a break and we will see a new tournaments soon.
                </p>
              </Card.Body>
            </Card>

            <Card className='mb-3 ml-3 mr-3'>
              <Card.Header>
                <a href='http://adrenalinegamer.org/' target='_blank' rel="noopener noreferrer">AG demos database</a>
              </Card.Header>
              <Card.Body>
                <h5 className="card-title">AG demos database (inactive).</h5>
                <p className="card-text">This is demos database from all the official tournaments and matches until 2012. 
                  Friendly matches are included as well. The latest update in 2012.
                </p>
              </Card.Body>
            </Card>

            <Card className='mb-3 ml-3 mr-3'>
              <Card.Header>
                <a href='https://sourceruns.org/' target='_blank' rel="noopener noreferrer">SourceRuns</a>
              </Card.Header>
              <Card.Body>
                <h5 className="card-title">SourceRuns community</h5>
                <p className="card-text"></p>
                <p>
                  SourceRuns is a community of speedrunners who are focused on Valve games and their mods, such as Portal, Half-Life, Half-Life 2 etc.
                </p>
                <p>
                  SourceRuns originated from the HL2DQ team in 2009 and has since grown to host speedrunning marathons and competitions, 
                  as well as representing Valve game's speedrunning scenes in other live events.
                </p>
                <div className='d-flex justify-content-center'>
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/LgHsPpbXocU" title='SourceRuns Half-Life Jump Map Cup #4 Teaser' frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen='yes'></iframe>
                </div>
              </Card.Body>
            </Card>

            <Card className='mb-3 ml-3 mr-3'>
              <Card.Header>
                <a href='https://www.youtube.com/channel/UCaS3GR5jeHwN9NxcCr0kyRw' target='_blank' rel="noopener noreferrer">Alex youtube</a>
              </Card.Header>
              <Card.Body>
                <h5 className="card-title">HR|Alex youtube channel.</h5>
                <p className="card-text">Alex is one of the best AG player whole over the world. He is also a clan leader of Hell Raisers.</p>
                <p>
                  On his channel Alex is streaming his AG games, he has his own AG school and he also host's tournaments.
                </p>
                <div className='d-flex justify-content-center'>
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/6rNAscC50rI" title='Half Life Adrenaline Gamer movie by Alex - mid2018' frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen='yes'></iframe>
                </div>
              </Card.Body>
            </Card>

            <Card className='mb-3 ml-3 mr-3'>
              <Card.Header>
                <a href='https://www.youtube.com/channel/UCSQJD85nGg0vs1Blje94rrA' target='_blank' rel="noopener noreferrer">execut4ble youtube</a>
              </Card.Header>
              <Card.Body>
                <h5 className="card-title">execut4ble youtube channel.</h5>
                <p className="card-text">execut4ble is one of the best speedrunners and decent AG player, he is also one of openAG creators. Also he host's a lot of AG tournaments.</p>
                <div className='d-flex justify-content-center'>
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/O25eItpdZUI" title='Is Adrenaline Gamer dead?' frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen='yes'></iframe>
                </div>
              </Card.Body>
            </Card>

            <Card className='mb-3 ml-3 mr-3'>
              <Card.Header>
                <a href='https://www.youtube.com/channel/UCe_93WO35BOjQ4xBIGfqKiw' target='_blank' rel="noopener noreferrer">rammy youtube</a>
              </Card.Header>
              <Card.Body>
                <h5 className="card-title">rammy youtube channel.</h5>
                <p className="card-text">rammy is one of the best AG player. He is also aiming expert, he is usually streaming his aiming training.</p>
                <div className='d-flex justify-content-center'>
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/DjjbUNT8JEI" title='KovaaK FPS Aim Trainer | Close Long Strafes Invincible | 18594.2 78.79% | 28/12/2018' frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen='yes'></iframe>
                </div>
              </Card.Body>
            </Card>

            <Card className='mb-3 ml-3 mr-3'>
              <Card.Header>
                <a href='https://www.youtube.com/channel/UCzR8Xt_oWZgOAmKyTM09Q-g' target='_blank' rel="noopener noreferrer">Half-Life Bhopper youtube</a>
              </Card.Header>
              <Card.Body>
                <h5 className="card-title">ESKIYAAAAAA youtube channel.</h5>
                <p className="card-text">ESKIYAAAAAA is one of the best bhoppers in AG. He has the most highlights on KZ maps whole over the world.</p>
                <div className='d-flex justify-content-center'>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/LAY-GVRQLu4" title='[HLKZ] kzua_mk_posteriori_d in 05m47s by ESKIYAAAAAA [SUPERGAY MAP]' frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen='yes'></iframe>
                </div>
              </Card.Body>
            </Card>

            <Card className='mb-3 ml-3 mr-3'>
              <Card.Header>
                <a href='https://sites.google.com/site/ecs1v1championship/home' target='_blank' rel="noopener noreferrer">Elite Championship Series</a>
              </Card.Header>
              <Card.Body>
                <h5 className="card-title">ECS website (inactive)</h5>
                <p className="card-text">
                  ECS were a series of 1v1 tournaments on different maps and they stopped in 2013. They have their rank system and big pack of demos.
                </p>
                <Card.Img
                  src="https://sites.google.com/site/ecs1v1championship/_/rsrc/1375647983564/home/banner.jpg"
                />
              </Card.Body>
            </Card>
        </Container>
      </React.Fragment>
    )
  }
}
