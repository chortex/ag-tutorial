import React, { Component } from 'react';
import { Card } from 'react-bootstrap';


export default class Settings extends Component {
  render() {
    return (
      <React.Fragment>
        <div className='pb-4'>
          <h4 className='font-weight-bold pb-3'>Operating system settings</h4>
          <p>There are few operating system parameters you have to set up before started customizing your game client.</p>
          <p>First of all you must turn off your vertical synchronizer. Otherwise your fps limit will be 60 fps. 
            More details how deactivate vertical synchronizer you can find <a href='https://nvidia.custhelp.com/app/answers/detail/a_id/2469/~/turning-off-v-sync-to-boost-performance-on-quadro-based-cards'>here</a>.
          </p>
          <p>Also you have to turn off mouse acceleration. There are a couple of players who play with acceleration but they are exceptations. 
            To get best mouse control you have to deactivate acceleration. More details about deactivation mouse acceleration you can find <a href='https://www.wepc.com/how-to/turn-off-mouse-acceleration-in-windows/'>here</a>.
          </p>
          <p>To deactivate acceleration in OpenAG add this command to your cfg file <code>m_rawinput 1</code></p>
          <p>For those who still use an old AG 6.6 client is required to add <code>-noforcemaccel -noforcemparms</code> in startup parameters</p>
        </div>
        <div className='pb-4'>
          <h4 className='font-weight-bold pb-3'>Config</h4>
          <p>Config is file inside game directory which contains configurations of your client. Default config called <code>userconfig.cfg</code></p>
          <p>You can modify your userconfig file by adding your configurations there. Also you can create your own config. To run your config type in game console <code>exec name.cfg</code>.
           You must type this every time you run your game. To set your config as default find in game directory file <code>autoexec.cfg</code>. It contains <code>autoexec userconfig.cfg</code>. 
           Change it to <code>autoexec name.cfg</code>
          </p>
          <p>Below is config template. You can just type your binds there and feel free to use it.</p>

          <Card className='mb-3'>
            <Card.Header>
              name.cfg
            </Card.Header>
            <Card.Body>
              <h5 class="card-title">Config template</h5>
              <p class="card-text">Feel free to change binds and settings if needed or add your custom settings. 
              This template based on chrtx config.
              </p>
              <a href='https://drive.google.com/file/d/1TyQpfLSJS25XRpTaIey0f-V9qEE0Q9S9/view?usp=sharing' target='_blank' rel="noopener noreferrer" className='p-0 m-0'><i className="fas fa-cloud-download-alt pr-2"></i>Download</a>
            </Card.Body>
          </Card>

          <Card className='mb-3'>
            <Card.Header>
              template.cfg
            </Card.Header>
            <Card.Body>
              <h5 class="card-title">Config template</h5>
              <p class="card-text">Feel free to change binds and settings if needed or add your custom settings. 
              This template based on rammy config.
              </p>
              <a href='https://drive.google.com/file/d/1eIKYdPz2L5whqYCOjLgR-r7n1I10G4EG/view?usp=sharing' target='_blank' rel="noopener noreferrer" className='p-0 m-0'><i className="fas fa-cloud-download-alt pr-2"></i>Download</a>
            </Card.Body>
          </Card>

          <p>Also here are configs examples of known AG players. Feel free to use any of it.</p>

          <Card className='mb-3'>
            <Card.Header>
              chrtx.cfg
            </Card.Header>
            <Card.Body>
              <h5 class="card-title">Config by chrtx</h5>
              <p class="card-text">Feel free to change it and use.
              </p>
              <a href='https://drive.google.com/file/d/1btLDLcpVZEs4IhTVjn3RVojT1WCtI6Op/view?usp=sharing' target='_blank' rel="noopener noreferrer" className='p-0 m-0'><i className="fas fa-cloud-download-alt pr-2"></i>Download</a>
            </Card.Body>
          </Card>

          <Card className='mb-3'>
            <Card.Header>
              Alex.cfg
            </Card.Header>
            <Card.Body>
              <h5 class="card-title">Config by Alex</h5>
              <p class="card-text">Feel free to change it and use.
              </p>
              <a href='https://drive.google.com/file/d/1De_RbtU4bKPxO9HaqNSz9X8TOA2NMF79/view?usp=sharing' target='_blank' rel="noopener noreferrer" className='p-0 m-0'><i className="fas fa-cloud-download-alt pr-2"></i>Download</a>
            </Card.Body>
          </Card>

          <Card className='mb-3'>
            <Card.Header>
              rammy.cfg
            </Card.Header>
            <Card.Body>
              <h5 class="card-title">Config by rammy</h5>
              <p class="card-text">Feel free to change it and use.
              </p>
              <a href='https://drive.google.com/file/d/1YUfWF09g753xP7KEVyuYqJHsV3NszTNX/view?usp=sharing' target='_blank' rel="noopener noreferrer" className='p-0 m-0'><i className="fas fa-cloud-download-alt pr-2"></i>Download</a>
            </Card.Body>
          </Card>

          <Card className='mb-3'>
            <Card.Header>
              execut4ble.cfg
            </Card.Header>
            <Card.Body>
              <h5 class="card-title">Config by execut4ble</h5>
              <p class="card-text">Feel free to change it and use.
              </p>
              <a href='https://drive.google.com/file/d/1q58zyLHHoenk1rUbhI4pCL-ZbWjE9W8s/view?usp=sharing' target='_blank' rel="noopener noreferrer" className='p-0 m-0'><i className="fas fa-cloud-download-alt pr-2"></i>Download</a>
            </Card.Body>
          </Card>

        </div>
        <div className='pb-4'>
          <h4 className='font-weight-bold pb-3'>Commands</h4>
          <p>This is not full list of commands but here are an explanation of the most important client commands</p>
          <p><code>sensitivity " "</code> - your mouse sensitivity. Depends on your mouse dpi chose comfotable value. 
            Sensitivity is one of the most important setting which influence on your gameplay. More details how to chose 
            sensitivity correct you can find in aiming part of section <a href='/guides'>guides</a>.
          </p>
          <p><code>fps_max "142.8571"</code> - your FPS value (recommended). Also recommended values are: <code>"125"</code>, <code>"111.1111"</code>, <code>"100"</code>. 
            FPS is very important because in Half-Life game physic depends on your FPS value. To learn more read this <a href='https://wiki.sourceruns.org/wiki/FPS_Effects' target='_blank' rel="noopener noreferrer">article</a>
          </p>
          <p><code>developer "1"</code> - is a developer mode which uncaps fps and also puts console output on the top left corner</p>
          <p><code>fps_override "1"</code> - allow to use FPS > 100</p>
          <p><code>default_fov " "</code> - field of view. Recommended values are in range <code>"90"</code> - <code>"105"</code></p>
          <p><code>r_drawiewmodel "1"</code> - show your weapon. If you won't see your current weapon use value <code>"0"</code></p>
          <p><code>r_wadtextures "1"</code> - apply custom textures</p>
          <p><code>m_rawinput "1"</code> - use device driver input, can be used to get rid of mouse acceleration</p>
          <p><code>rate "100000"</code> - defines max value of rates server send to client</p>
          <p><code>cl_cmdrate "100"</code> - defines quantity of requests from server to client per second</p>
          <p><code>cl_updaterate "100"</code> - defines quantity of requests from client to server per second</p>
          <p><code>ex_interp "0.05"</code> - this command interpolate client picture based on data from server.Also recommended value is <code>"0.1"</code> if your ping is more than 50.</p>
          <p className='pt-3'>To see full list of settings check out <a href='http://www.murka-terroristka.de/cvars/' target='_blank' rel="noopener noreferrer">documentation</a></p>
          <p>OpenAG custom commands you can find <a href='https://openag.pro/docs/#commands' target='_blank' rel="noopener noreferrer">here</a></p>
        </div>
      </React.Fragment>
    )
  }
}
