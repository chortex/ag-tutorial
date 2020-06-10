import React, { Component } from 'react';
import { Card, Carousel } from 'react-bootstrap';

import contrastRed from '../assets/models/Contrast red, blue, green models/contrastRed.jpg';
import contrastBlue from '../assets/models/Contrast red, blue, green models/contrastBlue.jpg';

import rammyRed from '../assets/models/Contrast models by rammy/rammyRed.jpg';
import rammyBlue from '../assets/models/Contrast models by rammy/rammyBlue.jpg';

import boxesModels1 from '../assets/models/Weapons world models (boxes)/boxesModels1.jpg';
import boxesModels2 from '../assets/models/Weapons world models (boxes)/boxesModels2.jpg';
import boxesModels3 from '../assets/models/Weapons world models (boxes)/boxesModels3.jpg';

import rammyGauss from '../assets/models/Weapons models by rammy/rammyGauss.jpg';
import rammyHandgun from '../assets/models/Weapons models by rammy/rammyHandgun.jpg';

import kensanGauss from '../assets/models/K3NS4N models/kensanGauss.jpg';
import kensanHandgun from '../assets/models/K3NS4N models/kensanHandgun.jpg';
import kensanWorld1 from '../assets/models/K3NS4N models/kensanWorld1.jpg';
import kensanWorld2 from '../assets/models/K3NS4N models/kensanWorld2.jpg';



export default class Models extends Component {
  render() {
    return (
      <React.Fragment>
        <div className='pb-4'>
          <h4 className='font-weight-bold pb-3'>Players models</h4>
          <p><b>Forcemodel</b> allows you to override the model of another player/team on the fly. 
            This is especially useful when they are using a model that is hard to see.
          </p>
          <p><code>cl_forcemodel "player" "model"</code> — Overrides the model of the specified player.
            You can also use SteamID or UserID (i.e. #123) instead of the name, 
            but writing only a half of the player's name works too.
          </p>
          <p><code>cl_forcemodel_list</code> — Lists existing model overrides.</p>
          <p><code>cl_forcemodel_remove "player"</code> — Removes model override for specified player.</p>
          <p>You can also use this set of commands to force models on teams:</p>
          <p><code>cl_forceteammodel "team" "model"</code> — Overrides the model of the specified team.</p>
          <p><code>cl_forceteammodel_list</code> — Lists existing team model overrides.</p>
          <p><code>cl_forceteammodel_remove team</code> — Removes model override for specified team.</p>
          <p><code>cl_forceteammatemodel "model"</code> — Overrides the models of all players on the same team as you. 
            Use <code>cl_forceteammatemodel ""</code> to reset.
          </p>
          <p><code>cl_forceenemymodel "model"</code> — Overrides the models of all players on other teams. 
            Use <code>cl_forceenemymodel ""</code> to reset.
          </p>

          <Card className='mb-3'>
            <Card.Header>
              Red, blue, green models
            </Card.Header>
            <Card.Body>
              <h5 class="card-title">Contrast red, blue, green models</h5>
              <Carousel className='pb-3'>
                <Carousel.Item>
                  <Card.Img
                    src={contrastRed}
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <Card.Img
                    src={contrastBlue}
                  />
                </Carousel.Item>
              </Carousel>
              <p class="card-text">Just replace this files into your AG/models/Player directory
              </p>
              <a href='https://drive.google.com/file/d/14W1o8ZGlOlFdC52y8HBGkOC4CpTxdFts/view?usp=sharing' target='_blank' rel="noopener noreferrer" className='p-0 m-0'><i className="fas fa-cloud-download-alt pr-2"></i>Download</a>
            </Card.Body>
          </Card>

          <Card className='mb-3'>
            <Card.Header>
              Red, blue, clanmodel, player models
            </Card.Header>
            <Card.Body>
              <h5 class="card-title">Contrast models by rammy</h5>
              <Carousel className='pb-3'>
                <Carousel.Item>
                  <Card.Img
                    src={rammyRed}
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <Card.Img
                    src={rammyBlue}
                  />
                </Carousel.Item>
              </Carousel>
              <p class="card-text">Just replace this files into your AG/models/Player directory
              </p>
              <a href='https://drive.google.com/file/d/1rO-nj4xVoAFMdIM4qKDfBRGwJ4dix89k/view?usp=sharing' target='_blank' rel="noopener noreferrer" className='p-0 m-0'><i className="fas fa-cloud-download-alt pr-2"></i>Download</a>
            </Card.Body>
          </Card>

        </div>

        <div className='pb-4'>
          <h4 className='font-weight-bold pb-3'>Weapons models</h4>
          <Card className='mb-3'>
            <Card.Header>
              Weapons boxes
            </Card.Header>
            <Card.Body>
              <h5 class="card-title">Weapon world models (boxes)</h5>
              <Carousel className='pb-3'>
                <Carousel.Item>
                  <Card.Img
                    src={boxesModels1}
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <Card.Img
                    src={boxesModels2}
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <Card.Img
                    src={boxesModels3}
                  />
                </Carousel.Item>
              </Carousel>
              <p class="card-text">Just replace this files into your AG/models directory
              </p>
              <a href='https://drive.google.com/file/d/1ozJ4DZqXbGXo8VsCE_pbXWDfLLUA4t_F/view?usp=sharing' target='_blank' rel="noopener noreferrer" className='p-0 m-0'><i className="fas fa-cloud-download-alt pr-2"></i>Download</a>
            </Card.Body>
          </Card>

          <Card className='mb-3'>
            <Card.Header>
              Contrasting color models
            </Card.Header>
            <Card.Body>
              <h5 class="card-title">Weapons transparent contrasting color models by rammy</h5>
              <p class="card-text">Just replace this files into your AG/models directory
              </p>
              <a href='https://drive.google.com/file/d/174wObJ7FN3Zr7YExZ19pGlIAtPAdBPl3/view?usp=sharing' target='_blank' rel="noopener noreferrer" className='p-0 m-0'><i className="fas fa-cloud-download-alt pr-2"></i>Download</a>
            </Card.Body>
          </Card>

          <Card className='mb-3'>
            <Card.Header>
              Weapons models by rammy
            </Card.Header>
            <Card.Body>
              <h5 class="card-title">Weapons world models (quake variety) by rammy</h5>
              <Carousel className='pb-3'>
                <Carousel.Item>
                  <Card.Img
                    src={rammyGauss}
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <Card.Img
                    src={rammyHandgun}
                  />
                </Carousel.Item>
              </Carousel>
              <p class="card-text">Just replace this files into your AG/models directory
              </p>
              <a href='https://drive.google.com/file/d/1oON-E4MVIL3T1eBPUx3CEzBRjyfGq-qY/view?usp=sharing' target='_blank' rel="noopener noreferrer" className='p-0 m-0'><i className="fas fa-cloud-download-alt pr-2"></i>Download</a>
            </Card.Body>
          </Card>

          <Card className='mb-3'>
            <Card.Header>
              Weapons models by K3NS4N
            </Card.Header>
            <Card.Body>
              <h5 class="card-title">Weapon world models by K3NS4N</h5>
              <Carousel className='pb-3'>
                <Carousel.Item>
                  <Card.Img
                    src={kensanGauss}
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <Card.Img
                    src={kensanHandgun}
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <Card.Img
                    src={kensanWorld1}
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <Card.Img
                    src={kensanWorld2}
                  />
                </Carousel.Item>
              </Carousel>
              <p class="card-text">Just replace this files into your AG/models directory
              </p>
              <a href='https://drive.google.com/file/d/1_Tzvsmhwy4w2mBMQreTHZL9xgcVMUbm1/view?usp=sharing' target='_blank' rel="noopener noreferrer" className='p-0 m-0'><i className="fas fa-cloud-download-alt pr-2"></i>Download</a>
            </Card.Body>
          </Card>


        </div>

      </React.Fragment>
    )
  }
}