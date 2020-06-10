import React, { Component } from 'react';
import { Card, Carousel } from 'react-bootstrap';

import bootGrid from '../assets/textures/cleanGridTextures/boot_clean_grid.jpg'
import crossGrid from '../assets/textures/cleanGridTextures/cross_clean_grid.jpg'
import stalkyGrid from '../assets/textures/cleanGridTextures/stalkyard_clean_grid.jpg'
import stalkxGrid from '../assets/textures/cleanGridTextures/stalkx_clean_grid.jpg'
import lv2Grid from '../assets/textures/cleanGridTextures/lv2_clean_grid.jpg'

import bootBlurred from '../assets/textures/blurredTextures/boot_blurred.jpg'
import crossBlurred from '../assets/textures/blurredTextures/cross_blurred.jpg'
import endcampBlurred from '../assets/textures/blurredTextures/endcamp_blurred.jpg'
import stalkxBlurred from '../assets/textures/blurredTextures/stalkx_blurred.jpg'
import lv2Blurred from '../assets/textures/blurredTextures/lv2_blurred.jpg'

import bootGreyscale from '../assets/textures/greyscaleTextures/boot_greyscale.jpg'
import crossGreyscale from '../assets/textures/greyscaleTextures/cross_greyscale.jpg'
import stalkyGreyscale from '../assets/textures/greyscaleTextures/stalky_greyscale.jpg'
import stalkxGreyscale from '../assets/textures/greyscaleTextures/stalkx_greyscale.jpg'
import lv2Greyscale from '../assets/textures/greyscaleTextures/lv2_greyscale.jpg'





export default class Textures extends Component {
  render() {
    return (
      <React.Fragment>
        <p>To apply custom textures do not forget to set <code>r_wadtextures 1</code> in your config</p>

        <Card className='mb-3'>
          <Card.Header>
            Clean grid textures
          </Card.Header>
          <Card.Body>
            <h5 class="card-title">Clean grid textures by rammy</h5>
            <Carousel className='pb-3'>
              <Carousel.Item>
                <Card.Img
                  src={bootGrid}
                />
              </Carousel.Item>
              <Carousel.Item>
                <Card.Img
                  src={crossGrid}
                />
              </Carousel.Item>
              <Carousel.Item>
                <Card.Img
                  src={stalkyGrid}
                />
              </Carousel.Item>
              <Carousel.Item>
                <Card.Img
                  src={stalkxGrid}
                />
              </Carousel.Item>
              <Carousel.Item>
                <Card.Img
                  src={lv2Grid}
                />
              </Carousel.Item>
            </Carousel>
            <p class="card-text">Just replace this files into your AG directory
            </p>
            <a href='https://drive.google.com/file/d/12LPdgQas7VVGzjpbXRaKP-S5BgaWfL7l/view?usp=sharing' target='_blank' rel="noopener noreferrer" className='p-0 m-0'><i className="fas fa-cloud-download-alt pr-2"></i>Download</a>
          </Card.Body>
        </Card>

        <Card className='mb-3'>
          <Card.Header>
            Blurred textures
          </Card.Header>
          <Card.Body>
            <h5 class="card-title">Blurred textures by rammy</h5>
            <Carousel className='pb-3'>
              <Carousel.Item>
                <Card.Img
                  src={bootBlurred}
                />
              </Carousel.Item>
              <Carousel.Item>
                <Card.Img
                  src={crossBlurred}
                />
              </Carousel.Item>
              <Carousel.Item>
                <Card.Img
                  src={endcampBlurred}
                />
              </Carousel.Item>
              <Carousel.Item>
                <Card.Img
                  src={stalkxBlurred}
                />
              </Carousel.Item>
              <Carousel.Item>
                <Card.Img
                  src={lv2Blurred}
                />
              </Carousel.Item>
            </Carousel>
            <p class="card-text">Just replace this files into your AG directory
            </p>
            <a href='https://drive.google.com/file/d/1La_O8FujjWJO6C-bFLg7lawVzp-ROmQY/view?usp=sharing' target='_blank' rel="noopener noreferrer" className='p-0 m-0'><i className="fas fa-cloud-download-alt pr-2"></i>Download</a>
          </Card.Body>
        </Card>

        <Card className='mb-3'>
          <Card.Header>
            Greyscale textures
          </Card.Header>
          <Card.Body>
            <h5 class="card-title">Greyscale textures by rammy</h5>
            <Carousel className='pb-3'>
              <Carousel.Item>
                <Card.Img
                  src={bootGreyscale}
                />
              </Carousel.Item>
              <Carousel.Item>
                <Card.Img
                  src={crossGreyscale}
                />
              </Carousel.Item>
              <Carousel.Item>
                <Card.Img
                  src={stalkyGreyscale}
                />
              </Carousel.Item>
              <Carousel.Item>
                <Card.Img
                  src={stalkxGreyscale}
                />
              </Carousel.Item>
              <Carousel.Item>
                <Card.Img
                  src={lv2Greyscale}
                />
              </Carousel.Item>
            </Carousel>
            <p class="card-text">Just replace this files into your AG directory
            </p>
            <a href='https://drive.google.com/file/d/1rdzs3N0d688jtk-lDAs_6WzLwRRQdCjr/view?usp=sharing' target='_blank' rel="noopener noreferrer" className='p-0 m-0'><i className="fas fa-cloud-download-alt pr-2"></i>Download</a>
          </Card.Body>
        </Card>
      </React.Fragment>
    )
  }
}
