import React, { Component } from 'react'

export default class Tactics extends Component {
  render() {
    return (
      <React.Fragment>
        <h4 className='font-weight-bold pb-3'>Weapons and items</h4>
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
        <h5 className='font-weight-bold pt-3 text-center'>Weapons characteristics</h5>
        <div className='w-100 characteristics-table'>
        <table className="table table-hover mt-4">
          <thead>
            <tr>
              <th scope="col">Weapon</th>
              <th scope="col" className='text-center'>Damage</th>
              <th scope="col" className='text-center'>HS Damage</th>
              <th scope="col" className='text-center'>Reload time</th>
              <th scope="col" className='text-center'>Max ammo</th>
              <th scope="col" className='text-center'>Gun pickup ammo</th>
              <th scope="col" className='text-center'>Ammo held in box</th>
              <th scope="col" className='text-center'>Rate of fire* (RPM)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Crowbar</th>
              <td className='text-center'>25 HP</td>
              <td className='text-center'>75 HP</td>
              <td className='text-center'>-</td>
              <td className='text-center'>-</td>
              <td className='text-center'>-</td>
              <td className='text-center'>-</td>
              <td className='text-center'>-</td>
            </tr>
            <tr>
              <th scope="row">9mmhandgun primary</th>
              <td className='text-center'>12 HP</td>
              <td className='text-center'>36 HP</td>
              <td className='text-center'>1.5 sec</td>
              <td className='text-center'>17/250</td>
              <td className='text-center'>17</td>
              <td className='text-center'>17</td>
              <td className='text-center'>200</td>
            </tr>
            <tr>
              <th scope="row">9mmhandgun secondary</th>
              <td className='text-center'>12 HP</td>
              <td className='text-center'>36 HP</td>
              <td className='text-center'>1.5 sec</td>
              <td className='text-center'>17/250</td>
              <td className='text-center'>17</td>
              <td className='text-center'>17</td>
              <td className='text-center'>300</td>
            </tr>
            <tr>
              <th scope="row">Magnum .357</th>
              <td className='text-center'>40 HP</td>
              <td className='text-center'>120 HP</td>
              <td className='text-center'>2 sec</td>
              <td className='text-center'>6/36</td>
              <td className='text-center'>6</td>
              <td className='text-center'>6</td>
              <td className='text-center'>80</td>
            </tr>
            <tr>
              <th scope="row">9mmAR 9mm</th>
              <td className='text-center'>12 HP</td>
              <td className='text-center'>36 HP</td>
              <td className='text-center'>1.5 sec</td>
              <td className='text-center'>50/250</td>
              <td className='text-center'>25</td>
              <td className='text-center'>17</td>
              <td className='text-center'>600</td>
            </tr>
            <tr>
              <th scope="row">9mmAR grenade</th>
              <td className='text-center'>100 HP</td>
              <td className='text-center'>300 HP</td>
              <td className='text-center'>-</td>
              <td className='text-center'>10</td>
              <td className='text-center'>-</td>
              <td className='text-center'>2</td>
              <td className='text-center'>60</td>
            </tr>
            <tr>
              <th scope="row">Shotgun primary</th>
              <td className='text-center'>80 HP</td>
              <td className='text-center'>240 HP</td>
              <td className='text-center'>4.5 sec</td>
              <td className='text-center'>8/125</td>
              <td className='text-center'>12</td>
              <td className='text-center'>12</td>
              <td className='text-center'>?</td>
            </tr>
            <tr>
              <th scope="row">Shotgun secondary</th>
              <td className='text-center'>160 HP</td>
              <td className='text-center'>480 HP</td>
              <td className='text-center'>4.5 sec</td>
              <td className='text-center'>8/125</td>
              <td className='text-center'>12</td>
              <td className='text-center'>12</td>
              <td className='text-center'>?</td>
            </tr>
            <tr>
              <th scope="row">Crossbow primary</th>
              <td className='text-center'>60 HP</td>
              <td className='text-center'>80 HP</td>
              <td className='text-center'>4.5 sec</td>
              <td className='text-center'>5/50</td>
              <td className='text-center'>5</td>
              <td className='text-center'>5</td>
              <td className='text-center'>80</td>
            </tr>
            <tr>
              <th scope="row">Crossbow secondary</th>
              <td className='text-center'>120 HP</td>
              <td className='text-center'>360 HP</td>
              <td className='text-center'>4.5 sec</td>
              <td className='text-center'>5/50</td>
              <td className='text-center'>5</td>
              <td className='text-center'>5</td>
              <td className='text-center'>?</td>
            </tr>
            <tr>
              <th scope="row">RPG</th>
              <td className='text-center'>120 HP</td>
              <td className='text-center'>360 HP</td>
              <td className='text-center'>1.5 sec</td>
              <td className='text-center'>1/5</td>
              <td className='text-center'>2</td>
              <td className='text-center'>2</td>
              <td className='text-center'>30</td>
            </tr>
            <tr>
              <th scope="row">Gauss primary</th>
              <td className='text-center'>20 HP</td>
              <td className='text-center'>60 HP</td>
              <td className='text-center'>-</td>
              <td className='text-center'>100</td>
              <td className='text-center'>20</td>
              <td className='text-center'>20</td>
              <td className='text-center'>?</td>
            </tr>
            <tr>
              <th scope="row">Gauss secondary (1 cell)</th>
              <td className='text-center'>67 HP</td>
              <td className='text-center'>201 HP</td>
              <td className='text-center'>-</td>
              <td className='text-center'>100</td>
              <td className='text-center'>20</td>
              <td className='text-center'>20</td>
              <td className='text-center'>?</td>
            </tr>
            <tr>
              <th scope="row">Gauss secondary (full charge)</th>
              <td className='text-center'>200 HP</td>
              <td className='text-center'>600 HP</td>
              <td className='text-center'>-</td>
              <td className='text-center'>100</td>
              <td className='text-center'>20</td>
              <td className='text-center'>20</td>
              <td className='text-center'>?</td>
            </tr>
            <tr>
              <th scope="row">Egon (TDM gamemode)</th>
              <td className='text-center'>25 HP</td>
              <td className='text-center'>75 HP</td>
              <td className='text-center'>-</td>
              <td className='text-center'>100</td>
              <td className='text-center'>20</td>
              <td className='text-center'>20</td>
              <td className='text-center'>?</td>
            </tr>
            <tr>
              <th scope="row">Egon (HLCCL gamemode)</th>
              <td className='text-center'>12.5 HP</td>
              <td className='text-center'>37.5 HP</td>
              <td className='text-center'>-</td>
              <td className='text-center'>100</td>
              <td className='text-center'>20</td>
              <td className='text-center'>20</td>
              <td className='text-center'>?</td>
            </tr>
            <tr>
              <th scope="row">Hornet primary</th>
              <td className='text-center'>10 HP</td>
              <td className='text-center'>10 HP</td>
              <td className='text-center'>4.5 sec</td>
              <td className='text-center'>8</td>
              <td className='text-center'>8</td>
              <td className='text-center'>-</td>
              <td className='text-center'>240</td>
            </tr>
            <tr>
              <th scope="row">Hornet secondary</th>
              <td className='text-center'>10 HP</td>
              <td className='text-center'>10 HP</td>
              <td className='text-center'>4.5 sec</td>
              <td className='text-center'>8</td>
              <td className='text-center'>8</td>
              <td className='text-center'>-</td>
              <td className='text-center'>600</td>
            </tr>
            <tr>
              <th scope="row">Handgrenade</th>
              <td className='text-center'>101 HP</td>
              <td className='text-center'>303 HP</td>
              <td className='text-center'>-</td>
              <td className='text-center'>15</td>
              <td className='text-center'>5</td>
              <td className='text-center'>-</td>
              <td className='text-center'>-</td>
            </tr>
            <tr>
              <th scope="row">Satchel</th>
              <td className='text-center'>120 HP</td>
              <td className='text-center'>360 HP</td>
              <td className='text-center'>-</td>
              <td className='text-center'>5</td>
              <td className='text-center'>1</td>
              <td className='text-center'>-</td>
              <td className='text-center'>-</td>
            </tr>
            <tr>
              <th scope="row">Tripmine</th>
              <td className='text-center'>150 HP</td>
              <td className='text-center'>450 HP</td>
              <td className='text-center'>-</td>
              <td className='text-center'>5</td>
              <td className='text-center'>1</td>
              <td className='text-center'>-</td>
              <td className='text-center'>-</td>
            </tr>
            <tr>
              <th scope="row">Snark</th>
              <td className='text-center'>10 HP</td>
              <td className='text-center'>10 HP</td>
              <td className='text-center'>-</td>
              <td className='text-center'>10</td>
              <td className='text-center'>5</td>
              <td className='text-center'>-</td>
              <td className='text-center'>-</td>
            </tr>
          </tbody>
        </table>
        </div>
        <p className='text-muted'>
          <small>
            * Rate of Fire - is a quantity of ammo you can shoot per 1 sec. It is measured in RPM (rounds per minute)
          </small>
        </p>
        <h5 className='font-weight-bold pt-3 text-center'>Weapons description</h5>
        <p>
          This section not only covers the basic handling or usage of the weapons but it will also explain some of the 
          unique features of these weapons.
        </p>
        <h5 className='pb-2 font-weight-bold text-muted'>Crowbar ( weapon_crowbar )</h5>
        <p>
          The crowbar is the trademark melee weapon of HLDM:AG. It is one of the two weapons you spawn with. Unlike most of 
          the other weapons the crowbar only has one single attack/fire mode but it can be useful in close combat situations, 
          or even to break vent covers, or breakable boxes. The crowbar doesn't require any ammo to work.
        </p>
        <h5 className='pb-2 font-weight-bold text-muted'>Handgun ( weapon_9mmhandgun )</h5>
        <p>
          The handgun is the second weapon you spawn with. It is loosely based on the Glock 17 but unlike its real life 
          counterpart, this gun has two fire modes - semi automatic and automatic. Its primary fire mode (semi-automatic) 
          shoots a single bullet, without recoil, at the point you are aiming at, it is very accurate at all ranges. 
          The second fire mode is automatic and has an increased rate of fire but of course there is a downside - it is only 
          accurate in close range. Both fire modes deal the same amount of damage, but it is low and so to do any real damage 
          it would be wise to aim for the head.
        </p>

        <h5 className='pb-2 font-weight-bold text-muted'>Magnum ( weapon_357 )</h5>
        <p>
          The .357 Magnum or Colt Python as it is sometimes called, is the only other handgun weapon in HLDM:AG. 
          Unlike the 9mm handgun, this revolver is deadly accurate and really packs a punch with 40 damage dealt 
          per body shot. It's secondary fire is a useful zoom function for increased accuracy over long range. 
          There are a few drawbacks however - it has a limited clip capacity, only holding 6 bullets and compared with 
          the handgun, this weapon has a slower rate of fire and takes longer to reload. Having said this, if you manage 
          to land a headshot, this weapon will do 120 damage and can certainly be a game changer.
        </p>

        <h5 className='pb-2 font-weight-bold text-muted'>Shotgun ( weapon_shotgun )</h5>
        <p>
          Every good first person shooter must have it's shotgun. The shotgun in HLDM:AG is based upon the powerful 
          pump-action shotgun, the SPAS-12 and is primarily a short range weapon. It has two fire modes. The primary 
          fire is the 6-gauge mode, firing one shell which splatters into 6 pellets. The second is the 12-gauge mode, 
          it fires two shells with a wider range than primary fire, but at a cost - the fire rate is decreased. This short 
          delay in time between firing can however be lowered by switching to another weapon and then back to the shotgun. 
          Having said this, the shotgun is one of the core weapons in half-life, it is the only weapon that allows you to 
          fire whilst reloading and because the bullet spread is random, it can sometimes result a high damage hit even at 
          mid to long range.
        </p>

        <h5 className='pb-2 font-weight-bold text-muted'>MP5 ( weapon_9mmAR )</h5>
        <p>
          The next weapon is the Heckler & Koch MP5, simply known as the Submachine Gun or MP5. The MP5 in half-life is 
          unique as it has two very different fire modes. With primary fire it lets you attack with a high rate of fire 
          and is very accurate at close range, producing only a small amount of recoil, but more importantly is its 
          secondary fire - the grenade launcher. This is what makes the MP5 special.
        </p>
        <p>
          From the onset this weapon behaves just like any normal MP5, but the ability to throw grenades which deal a 
          great amount of damage to your opponant is what makes the MP5 one of the core weapons in HLDM:AG. These 
          grenades have a medium sized blast radius, and so can cause damage to opponants even if you're grenade isn't 
          100% accurate. Another useful tip when using the MP5 is that you can even fire grenades when you are out of 
          active 9mm ammo, but only before the reload animation has started. Perhaps a lesser known feature of the MP5 
          is grenade jumping - using the explosion of the grenade to launch you into the air. But beware, this severely 
          damages your health and is only practical on certain maps.
        </p>

        <h5 className='pb-2 font-weight-bold text-muted'>Crossbow ( weapon_crossbow )</h5>
        <p>
          The crossbow is the sniper weapon in HLDM:AG and like the MP5 the crossbow has two different fire modes. 
          Primary fire shoots an explosive bolt at high velocity, exploding with a small blast radius - it's most 
          common use would be for destroying tripmines but similarly with the MP5, the explosion of the bolt can be 
          used to jump onto obstacles. Doing this will result in a smaller loss of health compared with the MP5's 
          grenade.
        </p>
        <p>
          The secondary fire enables the zoom function so you can home in on your target. Whilst in the zoom mode, 
          the bolts fired will act as an instant hitscan and will not explode. The damage is a lot higher whilst 
          zoomed and you can kill a freshly spawned player with just one shot.
        </p>
        <p>
          Some players use an alias/script which automatically zooms, fires, then zooms out almost instantaneosly 
          and is useful in close range combat. However this is easily achieved without the use of a script, 
          by zooming, firing and changing weapon in quick succession.
        </p>

        <h5 className='pb-2 font-weight-bold text-muted'>RPG ( weapon_rpg )</h5>
        <p>
          The RPG is half-life's adaptation of the rocket launcher, but with a twist. The RPG has two fire modes each 
          affecting how you aim at your target. A brief overview; this weapon fires a rocket which explodes and 
          creates a huge blast radius, dealing a lot of damage. But getting your rocket to explode on your desired 
          target can be done in two ways.
        </p>
        <p>
          When you pickup the RPG you will notice a dot sprite on your crosshair, this signifies the RPG's 
          laser-guided mode is active - allowing you to readjust the path of your rocket after it is fired. You can 
          switch between dot on / off with the secondary fire key. The "no dot" fire mode simply fires a rocket in a 
          straight line but in this mode the reload time of the RPG is greatly decreased by holding down your +reload 
          key and your +attack key, to fire rockets at a faster rate.
        </p>
        <p>
          When moving at high speed you must be careful with the rpg - if you fire the RPG at a target behind you, 
          sometimes the rocket will explode as it leaves the barrel, leaving you either dead, or severly injured. 
          Having said this, like every weapon which triggers explosions, the RPG blast can be used to gain height to 
          jump on top of obstacles, but due to the very high damage of the RPG, this would not be wise.
        </p>

        <h5 className='pb-2 font-weight-bold text-muted'>Gauss ( weapon_gauss )</h5>
        <p>
          This next weapon is the most defining weapon half-life has to offer - the Tau-Cannon or more commonly 
          called the Gauss. A prototype energy-based assault rifle, the gauss shares its depleted Uranium-235 ammo 
          with the gluon gun and also does not need to be reloaded. But wait, there's more...
        </p>
        <p>
          The gauss gun's primary fire shoots a single direct beam at your opponant, costing two ammo points each. 
          This fire mode burns up ammo very quickly and is not so useful. The second firemode however has a lot more 
          to offer - you can charge the gauss with secondary fire, using up to eleven ammo, and hold the charge for up 
          to ten seconds - any longer and the gun will overheat, it will lose its charge, and you'll recieve 50 damage. 
          But once you have the gauss charged, a few options are available to you.
        </p>
        <p>
          Firstly, you can simply release the charge, firing a powerful white-hot beam at your opponant - the damage 
          dealt is proportional to how much ammo is in the charge. These beams can shoot through multiple targets and 
          if aimed at walls, or corners, it creates a splash damage effect hitting players behind the target. The 
          gauss beam can also bounce off surfaces when fired at specific angles, resulting in shots that fire 
          "around corners" or sometimes shots which hit your opponant twice with one beam.
        </p>
        <p>
          The most prominant feature of the gauss is the movement capabilities it provides. For example, releasing 
          a charge on the ground beneath you will catapult you into the air. This burst of speed can be used in any 
          direction and when combined with bunnyhopping, allows you to navigate through maps at high speed.
        </p>
        <p>
          Despite the gauss being a very powerful weapon, it has its drawbacks and must be handled with caution. 
          For example, some surfaces when fired at produce a bounce which hurts yourself, sometimes called self-gauss. 
          Self-gauss can greatly damage your health and even kill you, so be warned. Another note to keep in mind 
          when using the gauss - you will need more than 12 ammo to fully charge the gauss, any less and the weapon 
          will release it's charge when your ammo reaches 0. Having said this, the gauss is the most useful weapon in 
          the game and in the right hands, it can produce exciting results.
        </p>

        <h5 className='pb-2 font-weight-bold text-muted'>Gluon Gun ( weapon_egon )</h5>
        <p>
          Like the gauss, the Gluon gun, sometimes called the Egon, is a highly powerful weapon. It emits a glowing 
          beam of energy which obliterates your opponants health and armour. It is a hitscan weapon, and is most 
          effective when you lock on to your opponant and aim for the head. Some of the beam is sprayed and can even 
          hit a player if they are standing close to a corner or edge, but be careful not to aim too close to a wall, 
          or indeed another player, because you will recieve splashback and it can damage your health / armour. If you 
          fire the egon whilst looking down and facing a wall, it will give you a momentary lift, allowing you to 
          reach slightly higher ground - the lift isn't much, but it can be useful if you don't have the longjump. 
          One noteable downside of this weapon would be the sound played when fired, the sound is very loud and makes 
          locating your opponant difficult, especially because when a player hears this sound, their reaction is 
          usually to run and hide.
        </p>
        <p>
          The gluon gun is possibly the most controversial weapon in the game, it's use is generally frowned upon and 
          certain gamemodes, such as hlccl, have reduced the damage it deals considerably. You can find out 
          more information on the reduced weapon damages in a table with weapons damage above.
        </p>

        <h5 className='pb-2 font-weight-bold text-muted'>Hornet gun ( weapon_hornetgun )</h5>
        <p>
          The Hornet gun, also called the Hivehand or Bee gun, is an organic weapon and could be best described as a 
          biologically engineered living assault rifle. This weapon has two fire modes, both shoot flying insect-like 
          creatures which eat away at the flesh of your opponant. With primary fire, the bees lock on to your opponant 
          and can even chase around corners, whereas the secondary fire shoots in a straight line at the point you aim, 
          but with an increased rate of fire. Once you have shot your 8 hornets, you must wait for for the weapon to 
          regenerate however you can fire again once the gun has generated 1 ammo. There is a nice little trick to 
          fully regenerate your ammo, by pressing your 'drop' key, then pick up the dropped weapon, and you will have 
          8 ammo once again. This weapon only deals a small amount of damage for each bee that hits, but it can be 
          useful in stalling your opponant, as the primary fire bee's will surround your enemy as they do damage, 
          interrupting their movement, providing you the opportunity to escape or switch to a stronger weapon and 
          finish them off.
        </p>

        <h4 className='font-weight-bold pt-3 pb-3'>Positioning</h4>
        <p>
          While you are playing you should keep in mind damages values and count total damage you affect your enemy. 
          Also pay attention where are an empty spots of weapons / armors / lj etc. It allow you to determine opponent's 
          position / stack.
        </p>
        <p>
          Positioning is very important. You should always try to get the most comfortable position for you to attack 
          and to defence as well. Also make sure that your position is disadvantageous for your opponent to attack you. 
          Knowledge and understanding of the spawn system allow you to determine your opponents position. To learn more about
          spawn system check out this tutorial
        </p>
        <div className='pb-5 pt-5 d-flex justify-content-center'>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/jAcENohrD_w" frameborder="0" title='HLDM & AG - Spawn System & Predictions Explained' allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen='yes'></iframe>
        </div>
        <p>
          Usually maps strategy also depends on spawn points. More details about every single map you can find in Strategy 
          section.
        </p>
        <p>Here are some tips how to hold better position:</p>
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
        <h4 className='font-weight-bold pt-3 pb-3'>Routine</h4>
        <p>
          The best way to learn how to fight in different situation with different weapons is to practice on game mode 
          called Arcade. 
        </p>
        <p>
          For close fighting use scenario like this on map justwar2
        </p>
        <div className='pb-5 pt-5 d-flex justify-content-center'>
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