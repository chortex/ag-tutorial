import React, { Component } from 'react'

export default class Movement extends Component {
  render() {
    return (
      <React.Fragment>
        <div className='pb-4'>
          <h4 className='font-weight-bold pb-3'>Bhop</h4>
          <p>Bunnyhop is basic thing in Adrenaline Gamer mod. It's actually the main difference from Half-Life Multiplayer. 
            It makes game one of the fastest fps whole over the world. Learning bhop allow you to be fast, collect stuff 
            faster and occupy positions better.
          </p>
          <p>Bunnyhop consists of strafe jumps. Once if you hold jump button you will jump with the same speed, 
            but when you will strafe your speed gonna rise. To make left strafe press <code>jump</code> (default is space button) + 
            <code> A</code> + turn smoothly mouse left, <code>SPACE</code> + <code>D</code> + mouse right to make right strafe jump. 
            Combinations of <b>left strafe - right strafe</b> is bunnyhop. You have to make your strafes as smooth as you can, it defines 
            how succesfull your strafes are. For best speed rising try to make as much strafes as you can.
          </p>

          <p>For more advanced players it's also suppose to make "round" strafes by using <code>W</code> or <code>S</code> buttons. 
          But this kind of bhop is not as useful.
          </p>

          <p>To learn more about strafes watch this video tutorial by <a href='https://steamcommunity.com/id/execut4ble' target='_blank' rel="noopener noreferrer">execut4ble</a></p>
          <div className='d-flex justify-content-center pt-5 pb-5'>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/Lw5lKtvpv4g" frameborder="0" title='Bunnyhopping tips & tricks for beginners' allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen='yes'></iframe>
          </div>

          <p>Usually first jump is very important, because it's allow you to rise speed from the beginning and also a lot 
            of game moments need few jumps only.
          </p>
          <p>To make succesfull first jump before strafe you must do good pre-strafe. It means that you have to start your strafe 
            before you press jump button. To practice with pre-strafe and your first jump you can train on map <em>ag_longjump2</em>. 
            Try to use techniques like this
          </p>
          <div className='d-flex justify-content-center pt-5 pb-5'>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/vvlZ7bwTLf0" frameborder="0" title='ag_longjump2 | 382 longjump (hlspbunny AG settings)' allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen='yes'></iframe>
          </div>
          <p>For practicing your bhop techniques you can also use maps <em>agtricks, destructo_hope, ztricks</em>.</p>
          <div className='d-flex justify-content-center pt-5 pb-5'>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/Q_Y9Mn-wAiQ" frameborder="0" title='[Half-Life] ztricks in 37.52' allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen='yes'></iframe>
          </div>
          <p>Techniques describes above are good for practicing your bhop but it's not enough for good movement in multiplayer. 
            You have to learn multiplayer maps routes. For the beginning I'd recommend to learn main routes on maps <em>boot_camp, stalkyard, crossfire, stalkx. </em>
            That maps includes most of required movement techniques you need for other maps and also I'd add that maps <em>boot_camp, stalkyard</em> are 
            the most complicated maps for movement. It means if you learn this maps other maps gonna be simple for you. In this tutorial I'll show main routes 
            on that maps.
          </p>
        </div>
        <div className='pb-4'>
          <h4 className='font-weight-bold pb-3'>Scripts</h4>
          <h5 className='pb-2 font-weight-bold text-muted'>Bhop</h5>
          <p>For those who use OpenAG client bhop script already work's by default, just make sure you have 
            <code> bind "SPACE" "+jump"</code> in your config. 
          </p>
          <p>
            Those who still using an old AG 6.6 client need to add bhop script to config
          </p>
          <code>
            bind "KEY" "+bunnyhop"
            <br />
            alias "+bunnyhop" "alias _zpecial @bunnyhop;@bunnyhop"
            <br />
            alias "-bunnyhop" "alias _zpecial"
            <br />
            alias "@bunnyhop" "zpecial;wait;+jump;wait;-jump"
          </code>
          <p>
            <small className='text-muted'>Make sure that your current Half-Life version allow bhop (HL update before 2013)
              otherwise this script might not work.</small>
          </p>
          <h5 className='pb-2 font-weight-bold text-muted'>Long Jump</h5>
          <p>
            By default long jump work's in combination <code>CTRL + SPACE</code> or <code>jump</code> + <code>duck</code> commands if you use other keys.
             To use long jump with bind instead of combination 
            add long jump script to your config
          </p>
          <p>
            <code>
              bind "KEY" "+lj"
              <br />
              alias "+lj" "+duck;wait;+jump"
              <br />
              alias "-lj" "-jump;wait;-duck"
            </code>
          </p>
          <h5 className='pb-2 font-weight-bold text-muted'>Double Duck</h5>
          <p>This script is very useful for fast passing small boxes or barriers. Most of AG players use it. To try 
            double duck script add to your config
          </p>
          <p>
            <code>
              bind "KEY" "+d"
              <br />
              alias "+d" "+duck;wait;-duck;wait;+duck"
              <br />
              alias "-d" "-duck"
            </code>
          </p>
          <h5 className='pb-2 font-weight-bold text-muted'>Duck roll</h5>
          <p>
            Duck roll script is useful for moments when you can't count distance for your jump properly, it helps you to 
            skip a few steps to make jump whenever you need it without speed losing.
          </p>
          <p>
            <code>
              bind "KEY" "+duckroll"
              <br />
              alias ds1 "+duck;alias ds ds2;append ds"
              <br />
              alias ds2 "wait;alias ds ds3;append ds"
              <br />
              alias ds3 "-duck;alias ds ds4;append ds"
              <br />
              alias ds4 "wait;alias ds ds1;append ds"
              <br />
              alias +duckroll "cl_autojump 0;ds1"
              <br />
              alias -duckroll "alias ds;-duck;cl_autojump 1"
            </code>
          </p>
        </div>
        <div className='pb-4'>
        
        </div>
      </React.Fragment>
    )
  }
}