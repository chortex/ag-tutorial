import React, { Component } from 'react'

export default class Tactics extends Component {
  render() {
    return (
      <React.Fragment>
        <p>
          Combat tactics in AG requires to understand weapons parameters and skill of usage different weapons. 
          Also you have to learn to occupy best position and what is very important to know which weapon to 
          use in different situation.
        </p>
        <p>
          This information is known but it is strongly recommend to keep in mind while you are playing.
        </p>
        <p>
          All weapons/ammos respawning each 20 seconds.
        </p>
        <p>
          Armors, Long Jump, HEV are respawning once per 30 seconds. A common mistake I saw as for new 
          players as for an experienced is to use HEV while it recharging. 
          Recharging will start over and over again each time you try to use it.
        </p>
        <p>
          Armor is very important in Adrenaline Gamer. 1 armor equal 2 health points. It means when you collect 100/100 
          (hp/armors) your total health is 300 HP.
        </p>
        <h5 className='font-weight-bold pt-3 text-center'>Weapons damage</h5>
        <table className="table table-hover mt-4">
          <thead>
            <tr>
              <th scope="col">Weapon</th>
              <th scope="col">Damage</th>
              <th scope="col">HS Damage</th>
              <th scope="col">Reload time</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Crowbar</th>
              <td>25 HP</td>
              <td>75 HP</td>
              <td>-</td>
            </tr>
            <tr>
              <th scope="row">9mmhandgun primary</th>
              <td>12 HP</td>
              <td>36 HP</td>
              <td>1.5 sec</td>
            </tr>
            <tr>
              <th scope="row">9mmhandgun secondary</th>
              <td>12 HP</td>
              <td>36 HP</td>
              <td>1.5 sec</td>
            </tr>
            <tr>
              <th scope="row">Magnum .357</th>
              <td>40 HP</td>
              <td>120 HP</td>
              <td>2 sec</td>
            </tr>
            <tr>
              <th scope="row">9mmAR 9mm</th>
              <td>12 HP</td>
              <td>36 HP</td>
              <td>1.5 sec</td>
            </tr>
            <tr>
              <th scope="row">9mmAR grenade</th>
              <td>100 HP</td>
              <td>300 HP</td>
              <td>-</td>
            </tr>
            <tr>
              <th scope="row">Shotgun primary</th>
              <td>80 HP</td>
              <td>240 HP</td>
              <td>4.5 sec</td>
            </tr>
            <tr>
              <th scope="row">Shotgun secondary</th>
              <td>160 HP</td>
              <td>480 HP</td>
              <td>4.5 sec</td>
            </tr>
            <tr>
              <th scope="row">Crossbow primary</th>
              <td>60 HP</td>
              <td>80 HP</td>
              <td>4.5 sec</td>
            </tr>
            <tr>
              <th scope="row">Crossbow secondary</th>
              <td>120 HP</td>
              <td>360 HP</td>
              <td>4.5 sec</td>
            </tr>
            <tr>
              <th scope="row">RPG</th>
              <td>120 HP</td>
              <td>360 HP</td>
              <td>1.5 sec</td>
            </tr>
            <tr>
              <th scope="row">Gauss primary</th>
              <td>20 HP</td>
              <td>60 HP</td>
              <td>-</td>
            </tr>
            <tr>
              <th scope="row">Gauss secondary (1 cell)</th>
              <td>67 HP</td>
              <td>201 HP</td>
              <td>-</td>
            </tr>
            <tr>
              <th scope="row">Gauss secondary (full charge)</th>
              <td>200 HP</td>
              <td>600 HP</td>
              <td>-</td>
            </tr>
            <tr>
              <th scope="row">Egon (TDM gamemode)</th>
              <td>25 HP</td>
              <td>75 HP</td>
              <td>-</td>
            </tr>
            <tr>
              <th scope="row">Egon (HLCCL gamemode)</th>
              <td>12.5 HP</td>
              <td>37.5 HP</td>
              <td>-</td>
            </tr>
            <tr>
              <th scope="row">Hornet primary</th>
              <td>10 HP</td>
              <td>10 HP</td>
              <td>4.5 sec</td>
            </tr>
            <tr>
              <th scope="row">Hornet secondary</th>
              <td>10 HP</td>
              <td>10 HP</td>
              <td>4.5 sec</td>
            </tr>
            <tr>
              <th scope="row">Handgrenade</th>
              <td>101 HP</td>
              <td>303 HP</td>
              <td>-</td>
            </tr>
            <tr>
              <th scope="row">Satchel</th>
              <td>120 HP</td>
              <td>360 HP</td>
              <td>-</td>
            </tr>
            <tr>
              <th scope="row">Tripmine</th>
              <td>150 HP</td>
              <td>450 HP</td>
              <td>-</td>
            </tr>
            <tr>
              <th scope="row">Snark</th>
              <td>10 HP</td>
              <td>10 HP</td>
              <td>-</td>
            </tr>
          </tbody>
        </table>
        <p>
          While you are playing you should keep in mind damages values and count total damage you affect your enemy. 
          Also pay attention where are an empty spots of weapons / armors / lj etc. It allow you to determine opponent's 
          position / stack.
        </p>
        <p>
          Positioning is very important. You should always try to get the most comfortable position for you to attack 
          and to defence as well. Also make sure that your position is disadvantageous for your opponent to attack you. 
          Here are some tips how to take best position:
        </p>
        <p>
          Try to stay out of walls where you are vulnerable to attack with grenades, RPG or gauss wg.
        </p>
        <p>
          Try to hide your body from enemy if he is hitting you with direct shot weapons (Crossbow, Shotgun, .357 etc).
        </p>
        <p>
          When you are fighting face to face with your enemy you should strafe. But it's easy to hit you when you are 
          strafing only using <code>A</code> and <code>D</code> because your movement is predictable. To make your movement 
          unpredictable it's better to use <code>A</code> + <code>W / S</code> and <code>D</code> + <code>W / S</code>
        </p>
        <p>
          Always try to get position above your enemy. It's harder to hit you but keep in mind to stay away from walls 
          where you are vulnerable to attack with grenades, RPG or gauss wg. This is useful for non direct shots. 
          But remember that it's harder to hit enemy with Crossbow for example if enemy is below you.
        </p>
        <p>
          For long distance fight the most useful weapons are Crossbow, Magnum, Gauss, 9mmhandgun, 9mmAR.
        </p>
        <p>
          For mid distance fight the most useful weapons are Gauss, Egon, Crossbow, RPG, Magnum, 9mmhandgun, 9mmAR, Shotgun 
          (primary).
        </p>
        <p>
          For close fight the most useful weapons are Shotgun (secondary), Crossbow (fast zoom), 9mmAR grenades, Gauss.
        </p>
        <p>
          Possibility of successful fight is rising if you are unpredictable for your enemy. Try to hide your 
          position until you are ready to attack. That's why you have to learn trick called silent Long Jump. To make 
          silent Long Jump press buttons to make Long Jump but before landing press <code>S</code>. It should be jump 
          without any sound.
        </p>
        <p>
          Also as mentioned above try to determine a position of your enemy. If you are prepared to fight possibility 
          of successful fight is much bigger.
        </p>
        <h4 className='font-weight-bold pt-4'>Routine</h4>
        <p>
          The best way to learn how to fight in different situation with different weapons is to practice on game mode 
          called Arcade. 
        </p>
        <p>
          For close fighting use scenario like this on map justwar2
        </p>
        <div className='pb-4'>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/FiBfEvuB0MA?start=2037" title='close fighting arcade' frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen='yes'></iframe>
        </div>
        <p>
          For mid and long distance fighting it's better to play Arcade on maps stalkx / boot_camp / thunderstruck. 
          In most cases the best way to fight on long distances is direct aiming, more details about training in Aiming 
          section.
        </p>
      </React.Fragment>
    )
  }
}