import React, { Component } from 'react';
import sensitivityUsage from '../assets/Mouse sensitivity measured.svg';

export default class Aiming extends Component {
  render() {
    return (
      <React.Fragment>
        <div className='pb-4'>
          <h4 className='font-weight-bold pb-3'>Sensitivity</h4>
          <p>
            In FPS (First-person shooter) mouse sensitivity is one of the most important client setting. Basically 
            it defines how much you will turn in-game when you move your mouse an arbitrary distance. Talking about 
            sensitivity there are few parameters affect it such as <b>Windows sensitivity</b> (I'd recommend to set 
            default value 6/11), <b>in-game sensitivity</b> (check out settings section), <b>Mouse DPI</b> (Dot Per 
            Inch). So the best way to talk about the only value of sensitivity is to use universal measurement such 
            as <b>cm/360</b> (Turn Circumference) which is how many centimetres it takes to do one full 360 degrees 
            turn in-game. Also do not forget to turn off acceleration (check out settings section).
          </p>
          <p>
            If you decided to play with acceleration check out this <a href='https://docs.google.com/document/d/1wuQln99lQVBU9L8_QbpifrarpJ1xjPuKsKD2FY026Hc/edit#heading=h.su39hgja2lde' target='_bleank' rel="noopener noreferrer">Mouse Accel 101 guide</a>
          </p>
          <p>
            In this guide we will use sensitivity values in format <code>"value" cm</code> which means cm/360.
          </p>
          <p>
            To know your sensitivity value you shouldn't measure it with a ruler. The easier way is to 
            use <a href='https://aiming.pro/mouse-sensitivity-calculator' target='_blank' rel="noopener noreferrer">sensitivity calculator</a>.
            <br />
            This calculator is also working in an opposite way, you can input sensitivity (cm/360) and DPI to count in-game sensitivity <br />
            <small className='text-muted'>
              Use Quake Live value as Game because Quake and HLDM:AG have similar mouse settings.
              <br />
              NOTE: calculator consider you use 6/11 Windows sensitivity.
            </small>
          </p>
          <h5 className='pb-2 font-weight-bold text-muted'>USB Polling Rate {"&"} Mouse DPI</h5>
          <p>
            USB Polling Rate is how frequent your computer checks for signal from the mouse. By default, USB polling rate is 
            125 Hz in Microsoft Windows and Linux, meaning, 125 times per second, or every 0.008 second. Many gaming mouses can set polling 
            rate to a high number, such as 500/1000 Hz, meaning, 500/1000 times per second. Higher polling rate value as better.
          </p>
          <p>
            DPI means Dot Per Inch. In theory, if a mouse has 1600 DPI, then, if you move your mouse one inch (2.54 cm), the mouse pointer 
            will move 1600 pixels. The higher the DPI, the more sensitive the mouse is. That is, you move the mouse even a tiny bit, the pointer 
            will move a huge distance across the screen. DPI is a marketing ploy for gaming mouse. The importance of DPI is a undying myth. 
            Does DPI Matter in Gaming Mouse? you might ask. The short answer is: No. Even cheap mouse today have at least 1600 DPI, which is enough. 
            Higher DPI than that is hard to control the cursor position.
          </p>
          <p>
            So what values should you use? It's a personal choice for everyone but here is my recommendations: <br />
            - Use the highest value USB Polling Rate your mouse supports <br />
            - I'd recommend to use 400, 600 or 800 DPI because it gives you the biggest range of sensitivity value which means the lower DPI is 
            more accurate
          </p>
          <h5 className='pb-2 font-weight-bold text-muted'>Effective sensitivity range</h5>
          <p>
            Different sensitivities use different parts of the body to aim. The main components that used are the wrist, 
            arm and fingertips. It has to be taken to account when you are deciding what sensitivity range is good for you. 
            Lets just show the dependencies of usage different parts of the body from your sensitivity value. This graph is 
            generalised because other parametres such as angles, player's height and hand length, knowing how to use the body 
            parts didn't count.
          </p>
          <div className='d-flex justify-content-center pt-3'>
            <img
              src={sensitivityUsage}
              alt='Mouse sensitivity measured'
              className='w-75 mw-100'
            />
          </div>
          <p className='text-center font-weight-light pb-4'>Mouse sensitivity measured (cm)</p>
          <p>
            Also you have to choose optimal mouse grip. To learn more about grips and which mouse fits best for you check out this 
            video tutorial
          </p>
          <div className='pb-5 pt-5 d-flex justify-content-center'>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/-t3nmLdd6so" title='Best Way to Choose a Mouse and Mouse Grip for Best Aim' frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen='yes'></iframe>
          </div>
          <p>
            So lets summarize all the above and talk about effective sensitivity range. Using more body parts allow you to get 
            better mouse control. As we can see on the graph above, equal and proportional usage different body parts with well 
            chosen mouse grip are in range <b>15 cm</b> {"<"} <b>sensitivity</b> {"<"} <b>45 cm</b>.
          </p>
          <p>
            Yes, I know it's a big range so let's take a look closer. I'd outline 3 different sensitivities: <br />
          </p>
          <ul>
            <li>High sensitivity (<b>15 cm</b> {"<"} <b>sensitivity</b> {"<"} <b>25 cm</b>)</li>
            <li>Middle sensitivity (<b>25 cm</b> {"<"} <b>sensitivity</b> {"<"} <b>35 cm</b>)</li>
            <li>Low sensitivity (<b>35 cm</b> {"<"} <b>sensitivity</b> {"<"} <b>45 cm</b>)</li>
          </ul>
          <p>
            High sensitivity allow you to get more speed with the same force on the mouce compared to low sensitivity. It's also 
            better for tracking because your hands move is smaller for the same target tracking. With low sensitivity you will 
            be slower but it allow you to get more control and stopping on the target power and also your click aiming is rising 
            with sensitivity. Middle sensitivity allow you to find balance between speed and clicking priorities. Actually it has 
            always been a problem to chose sensitivity. It's depend on your gamestyle and your physical conditions, there are 
            benefits for all ranges.
          </p>
          <h5 className='pb-2 font-weight-bold text-muted'>Sensitivity selection</h5>
          <p>
            <small className='text-muted'>This method is empirical and it is NOT a rule. If you have your own method and you think it's better feel free to use it.</small><br />
            {/* The plan how we are going to choose the best sensitivity value is next: */}
            Coming soon...
          </p>
        </div>

        <div className='pb-4'>
          <h4 className='font-weight-bold pb-3'>Aiming methodologies</h4>
          <p>Coming soon...</p>
        </div>

        <div className='pb-4'>
          <h4 className='font-weight-bold pb-3'>HLDM:AG Aiming</h4>
          <p>Coming soon...</p>
        </div>

        <div className='pb-4'>
          <h4 className='font-weight-bold pb-3'>Routine</h4>
          <p>Coming soon...</p>
        </div>
      </React.Fragment>
    )
  }
}