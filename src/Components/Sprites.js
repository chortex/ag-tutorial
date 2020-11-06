import React, { Component } from 'react';
import { Card } from 'react-bootstrap';



export default class Sprites extends Component {
  render() {
    return (
      <React.Fragment>
        <div className='pb-4'>
          <h4 className='font-weight-bold pb-3'>Custom crosshairs</h4>
          <p>Custom crosshairs allow you to generate any kind of crosshair you want straight from the console. 
            This eliminates the need of crosshair sprite files, while also making the crosshair look sharp 
            and just the way you like!
          </p>
          <p><code>crosshair 0</code> - turn off your crosshairs files</p>
          <p><code>cl_cross 1</code> — draw your custom crosshair</p>
          <p><code>cl_cross_alpha</code> — crosshair opacity. Value range: 0–255</p>
          <p><code>cl_cross_circle_radius</code> — controls the radius of the circle that is drawn around the crosshair. 
            Set to 0 to disable it completely
          </p>
          <p><code>cl_cross_color "R G B"</code> — the color of the crosshair in RGB format. For example: "0 255 128"</p>
          <p><code>cl_cross_dot_size</code> — size of the dot at the center of the crosshair. Set to 0 to disable it completely</p>
          <p><code>cl_cross_dot_color</code> — the color of the crosshair dot in RGB format. 
            If empty, dot is the same color as the rest of the crosshair
          </p>
          <p><code>cl_cross_gap</code> — crosshair gap size</p>
          <p><code>cl_cross_size</code> — controls the size/length of the crosshair</p>
          <p><code>cl_cross_thickness</code> — controls the thickness of the crosshair</p>
          <p><code>cl_cross_outline</code> — controls the size of an outline around the crosshair. 
            Set to 0 if you do not wish to have an outline
          </p>
        </div>
        <p>An example of custom crosshair (red dot with black outline)</p>
        <p><code>crosshair 0</code></p>
        <p><code>cl_cross 1</code></p>
        <p><code>cl_cross_size 0</code></p>
        <p><code>cl_cross_dot_size 4</code></p>
        <p><code>cl_cross_color "255 0 0"</code></p>
        <p><code>cl_cross_outline 1</code></p>

        <div className='pb-4'>
          <h4 className='font-weight-bold pb-3'>Sprites</h4>
          <p>Feel free to download and use any of it.</p>

          <Card className='mb-3'>
            <Card.Header>
              Sprites and crosshairs by rammy
            </Card.Header>
            <Card.Body>
              <h5 class="card-title">Custom sprites and crosshairs by rammy</h5>
              <p class="card-text">Just replace this files into your AG/sprites directory
              </p>
              <a href='https://drive.google.com/file/d/1_T2nI1rEkbP2AtKSibOwdqnJLStggv8Z/view?usp=sharing' target='_blank' rel="noopener noreferrer" className='p-0 m-0'><i className="fas fa-cloud-download-alt pr-2"></i>Download</a>
            </Card.Body>
          </Card>

          <Card className='mb-3'>
            <Card.Header>
              chrtx sprites
            </Card.Header>
            <Card.Body>
              <h5 class="card-title">chrtx sprites and crosshairs</h5>
              <p class="card-text">Just replace this files into your AG/sprites directory
              </p>
              <a href='https://drive.google.com/file/d/1Y2MkXpg8UOFCKUY9Bjo46vQRz-Jfgjma/view?usp=sharing' target='_blank' rel="noopener noreferrer" className='p-0 m-0'><i className="fas fa-cloud-download-alt pr-2"></i>Download</a>
            </Card.Body>
          </Card>

          <Card className='mb-3'>
            <Card.Header>
              Alex sprites and crosshairs
            </Card.Header>
            <Card.Body>
              <h5 class="card-title">Alex sprites and crosshairs</h5>
              <p class="card-text">Just replace this files into your AG/sprites directory
              </p>
              <a href='https://drive.google.com/file/d/1zHtqyv7Lvn00m5uXehcjLL_wetj-AI1t/view?usp=sharing' target='_blank' rel="noopener noreferrer" className='p-0 m-0'><i className="fas fa-cloud-download-alt pr-2"></i>Download</a>
            </Card.Body>
          </Card>

        </div>
      </React.Fragment>
    )
  }
}