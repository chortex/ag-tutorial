import React, { Component } from 'react'

export default class Movement extends Component {
  render() {
    return (
      <React.Fragment>
        <div className='pb-4'>
          <p>
            Every good FPS game has its own, particular style of movement. HLDM:AG is no different in that regard; 
            yes there are some movement similarities with other games, but HLDM:AG offers a few unique moves which 
            set it aside from your average game and which we hope to outline in this tutorial.
          </p>
          <h4 className='font-weight-bold pb-3'>Basic Movement</h4>
          <h5 className='pb-2 font-weight-bold text-muted'>Running</h5>
          <p>
            Running is the most basic of movements and is the default speed at which your player will move. 
            For reference, the base movement speed in HLDM:AG is 300ups. Press your movement keys and you will run. 
            It may be nice to move at a decent speed but there is a downside - you will trigger sounds from the various 
            surfaces you move across, and these sounds can be heard by other players.
          </p>
          <p>The commands for moving forward, backwards, left and right are the following:</p>
          <p>
            <code>
              +forward <br />
              +back <br />
              +moveleft <br />
              +moveright <br />
            </code>
            <small className='text-muted'>Common keys for moving are W,A,S,D or indeed the arrow keys</small>
          </p>
          
          <h5 className='pb-2 font-weight-bold text-muted'>Walking</h5>
          <p>
            Walking, or sometimes referred to as sneaking, is essentially running with decreased speed but with 
            the upside of not triggering any surface sounds. In HLDM:AG the basic movement speed is set higher 
            then in HLDM. This means that strafing whilst walking can actually trigger sound. To prevent this 
            problem it is common to use an alias/script for walking to avoid triggering unwanted sound which is 
            provided below.
          </p>
          <p>
            <code>
              alias "+walk" "+speed;cl_forwardspeed 400;cl_sidespeed 400;cl_backspeed 400" <br />
              alias "-walk" "-speed;cl_forwardspeed 500;cl_sidespeed 500;cl_backspeed 500" <br />
              bind "key" "+walk"
            </code><br />
            <small className='text-muted'>If you dont wish to use a script the command for walking/sneaking is <code>+speed</code></small>
          </p>
          <h5 className='pb-2 font-weight-bold text-muted'>Crouching</h5>
          <p>
            Crouching or ducking is the method used to crawl into vents or through small passages. 
            A benefit of crouching is that sounds don't get triggered just like walking/sneaking but beware your 
            speed is decreased (more than that of walking/sneaking). Crouching can also be useful for dodging shots, 
            you basically shrink to 50% of your height, thus making you more difficult to hit.
          </p>
          <p><small className='text-muted'>The crouching command is <code>+duck</code></small></p>
          <h5 className='pb-2 font-weight-bold text-muted'>Jumping</h5>
          <p>
            If you find you can't get passed an object, or you would like to be on top of some crates, 
            you will need to be able to jump. Jumping elevates your model into the air and by doing so allows you 
            to reach locations in a map you couldn't reach by walking or crouching. Uniquely, in HLDM:AG you are 
            able to control (to some extent) your movement in the air. This grants you the ability to jump around 
            corners, crates or other obstacles. But beware, jumping from great heights may cause a damage of 10 HP.
          </p>
          <p><small className='text-muted'>Jumping is usually achieved by pressing the key assigned to <code>+jump</code></small></p>
          <h5 className='pb-2 font-weight-bold text-muted'>Swimming</h5>
          <p>
            Yes you really did just read "Swimming". In HLDM:AG you can safely swim in the water or sometimes even 
            through sewage. But some maps contain pools of liquid that are dangerous or even radioactive and any 
            swimming endeavour could leave a dint in your health and/or armour. Insofar as movement is concerned, 
            swimming is basically the same as running with the one difference that you can move up and down. 
            Note that swimming under water will cause damage to your health if you run out of air. 
            Therefore you don't require any commands to swim.
          </p>
          <p><small className='text-muted'>You just use your keys for running and your mouse to point you in the direction you want to swim</small></p>
          <h5 className='pb-2 font-weight-bold text-muted'>Climbing</h5>
          <p>
            Ladders, ropes and even some vegetation can allow you climbing access into another area. You can also 
            crouch/duck whilst climbing and the triggered climbing sound is reduced considerably. Also note that when 
            you jump whilst on a climbable object you will lose contact with the ladder/rope/vegetation and fall. 
            Just like swimming it does not require any special commands.
          </p>
          <p><small className='text-muted'>You simply run/walk into a ladder and move your mouse up or down to choose the direction</small></p>

          <h4 className='font-weight-bold pb-3'>Bhop</h4>
          <p>Bunnyhop is one of the most important thing in Adrenaline Gamer mod. It's actually the main difference from Half-Life Multiplayer. 
            It makes game one of the fastest fps whole over the world. Learning bhop allow you to be fast, collect stuff 
            faster and occupy positions better.
          </p>
          <p>
            Bunnyhopping or bunnyjumping makes up the core movement of HLDM:AG. It allows you to gain speed while 
            jumping by increasing the area covered with each jump, and therefore increasing your speed, allowing you 
            to get from a to b quicker, or to jump over long chasms.
          </p>
          <p>Bunnyhop consists of <b>strafe</b> jumps. Once if you hold jump button you will jump with the same speed, 
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
            <iframe width="560" height="315" src="https://www.youtube.com/embed/Lw5lKtvpv4g" frameBorder="0" title='Bunnyhopping tips & tricks for beginners' allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen='yes'></iframe>
          </div>

          <p>Usually first jump is very important, because it's allow you to rise speed from the beginning and also a lot 
            of game moments need few jumps only.
          </p>
          <p>To make successful first jump before strafe you must do good pre-strafe. It means that you have to start your strafe 
            before you press jump button. To practice with pre-strafe and your first jump you can train on map <em>ag_longjump2</em>. 
            Try to use techniques like this
          </p>
          <div className='d-flex justify-content-center pt-5 pb-5'>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/vvlZ7bwTLf0" frameBorder="0" title='ag_longjump2 | 382 longjump (hlspbunny AG settings)' allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen='yes'></iframe>
          </div>
          <p>
            Standard speed when you are walking in Adrenaline Gamer is 300 units/sec. With successful pre-strafe your speed is ~ 450 units/sec.
            There is another way to get 450 units/sec speed called <b>wallstrafing</b>. In case any wall is around you have 
            to stay close to wall and press <code>W</code> + <code>A</code> (wall is left side to you) or <code>W</code> + <code>D</code> 
            (wall is right side to you). It work's the same for backwards walking. This trick works similar when you are climbing a ladder.
          </p>
          <p>For practicing your bhop techniques you can use maps <em>agtricks, destructo_hops, ztricks</em> and similar. This maps 
          requires most of important movement techniques and are good for beginners.
          </p>
          <div className='d-flex justify-content-center pt-5 pb-5'>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/Q_Y9Mn-wAiQ" frameBorder="0" title='[Half-Life] ztricks in 37.52' allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen='yes'></iframe>
          </div>
          <div className='d-flex justify-content-center pt-5 pb-5'>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/L7-p0IuWOwc" frameBorder="0" title='agtricks in 31.128' allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen='yes'></iframe>
          </div>
          <div className='d-flex justify-content-center pt-5 pb-5'>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/-5Vlq8KLcBw" frameBorder="0" title='hoptrack by execut4ble' allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen='yes'></iframe>
          </div>
          <p>
            For advanced bhopping the best way of training is practicing on HLKZ SourceRuns servers by playing bhop maps. Feel free to check out 
            map list on ESKIYAAAAAA's youtube channel in list called <b>BEST BHOP MAPS</b>
          </p>
          <div className='d-flex justify-content-center pt-5 pb-5'>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/1GhoWbQzvuo" frameBorder="0" title='[HLKZ] nobkz_mst_honduras_h in 03m59s by ESKIYAAAAAA' allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen='yes'></iframe>
          </div>
          <p>Techniques describes above are good for practicing your bhop but it's not enough for good movement in multiplayer. 
            You have to learn multiplayer maps routes. For the beginning I'd recommend to learn main routes on maps <em>boot_camp, stalkyard, crossfire, stalkx. </em>
            That maps includes most of required movement techniques you need for other maps and also I'd add that maps <em>boot_camp, stalkyard</em> are 
            the most complicated maps for movement. It means if you learn this maps other maps gonna be simple for you.
          </p>
        </div>
        <div className='pb-4'>
          <h4 className='font-weight-bold pb-3'>Scripted movement</h4>
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
            Longjumping is only possible if you have obtained the Longjump item. Longjumping combines crouching/ducking 
            with jumping to allow you to leap forward with increased speed and jump height. In order to longjump you 
            need to press a movement key, hold down <code>+duck</code>, then press <code>+jump</code> immediately after. 
            The direction in which 
            you longjump depends on which movement key you use, with the exception of the <code>+back</code> key - it will cause a 
            shorter longjump.
          </p>
          <p>
            Many players use a script/alias for longjumping, however there are different model animations for longjump, 
            some of which can only be achieved using a script (which is considered lame or exploitative). 
            Here we provide the default-animation longjump here and would recommend players to use this one.
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
          <h5 className='pb-2 font-weight-bold text-muted'>Silent Longjump</h5>
          <p>
            Silent jumping is a feature caused by longjumping. While longjumping you trigger sounds on different 
            surfaces. Silent jumping is a technique which allows you to longjump without triggering a sound, if done 
            correctly. In order to silent jump you need the longjump item. To execute a silent longjump you longjump 
            but release your movement (duck and jump key) while still in the air. After you release those keys you 
            press your <code>+back</code> key to deccelerate. It takes a bit of practice to get the right amount of decceleration 
            in order to be silent.
          </p>
          <p>
            <code>
              alias "+silent_lj" "+forward;wait;wait;+duck;wait;+jump;-forward" <br />
              alias "-silent_lj" "-jump;-duck;wait;+back;-back" <br />
            </code>
          </p>
          <h5 className='pb-2 font-weight-bold text-muted'>Double Duck</h5>
          <p>
            Another feature of the HL engine is double-ducking. When you press your <code>+duck</code> key, release it, and 
            immediately press it again, you will notice that for a brief time your model is in the air. This little 
            boost can be used to climb stacked crates and it can also be used to slide over ground.
          </p>
          <p>
            This script is very useful for fast passing small boxes or barriers. Most of AG players use it. To try 
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
            Duck bounce is a technique only achieved through the use of a script - there are few players who make use 
            of it, but it falls into the category of a movement technique, so it shall be outlined. Essentially 
            this makes use of the double-duck feature, where you gain a small amount of height from pressing duck 
            quickly after ducking, but it is looped and when the duck-bounce key is held, the player appears to be 
            bouncing. It is mostly used for maintaining speed when bunnyhopping but it also allows you to pick up 
            items on the ground, or move through doorways without slowing momentum.
          </p>
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
              alias -duckroll "alias ds;-duck;cl_autojump 1" <br />
            </code>
            <small className='text-muted'>Only available if you are using OpenAG client</small>
          </p>
        </div>

        <div className='pb-4'>
          <h4 className='font-weight-bold pb-3'>Advanced tricks</h4>
          <h5 className='pb-2 font-weight-bold text-muted'>Ramp Slides</h5>
          <p>
            Once you have mastered bunnyjumping you are probably asking yourself how do I maintain that speed going 
            up ramps? This can be done by timing a <code>+duck</code> or doubleduck just before you would normally get slowed down 
            or be stopped by clipping the edge of the ramp. Like silent longjumping this requires a bit of practice, 
            but once you get the timing right you can maintain your speed and bunny onwards.
          </p>
          <h5 className='pb-2 font-weight-bold text-muted'>Wall Hugging {'&'} Wall Sliding</h5>
          <p>
            This covers 2 similar and effective movements. Another way to increase your speed without bunnyhopping, 
            is wall-hugging. This can be achieved by running alongside a wall, and pressing forward as well as your 
            moveleft/right key to hug the wall. This achieves greater speed than simply moving forward.
          </p>
          <p>
            The next is wall sliding. In some maps you will notice sloped walls and when you jump against them, 
            you slide down. This trick allows you to slide against them, to maintain and even accelerate your speed. 
            To do this you must jump against the wall (and face parallel to the wall) and hold down moveleft/right to 
            hug the wall. Note: you must release your forward key after the jump, otherwise you will just slide off 
            the wall. You can use your mouse to steer as you slide to prevent from falling - if you steer correctly, 
            sliding up and down the wall, you can accelerate your slide.
          </p>
          <h5 className='pb-2 font-weight-bold text-muted'>Floating on Water</h5>
          <p>
            When you jump into water or any other liquid substance you are immediately immersed and are under the water. 
            However you can prevent yourself from diving by pressing and holding your <code>+jump</code> key. This can also be 
            useful for example when you longjump into the water and want to maintain speed to reach the other side 
            quicker - you can strafe across the surface of the water far quicker than if you swam.
          </p>
          <h5 className='pb-2 font-weight-bold text-muted'>Fast Climbing</h5>
          <p>
            Climbing on ladders, ropes or any other climbable obstacles can be sped up by pressing your <code>+forward</code> key 
            and holding down your <code>+moveleft/right</code> key whilst steering your mouse in the opposite direction to 
            prevent you from falling off.
          </p>
          <h5 className='pb-2 font-weight-bold text-muted'>Weapon Jumps</h5>
          <p>
            In addition to the previously stated advanced movement techniques, there are also numerous ways to 
            utilize your weapons to give you increased speed or to overcome chasms/obstacles. 
            You can find out more information about the weapons and their uses in tactics section.
          </p>
        </div>
      </React.Fragment>
    )
  }
}