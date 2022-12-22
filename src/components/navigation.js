import {Link} from 'react-scroll'

function Navigation(props){

    return <nav><label for="id-show-menu" class="show-menu">
    <div class="nav-icon">
      <i class="fa fa-navicon"></i>
    </div>
  </label>
  <input type="checkbox" id="id-show-menu" class="checkbox-menu" role="button"></input>
  <div class="menu-block">
    <ul class="navUL">
    <li><Link  to="apropos" spy={true} smooth={true}>À propos</Link></li>
    <li><Link  to="gallery" spy={true} smooth={true}>Mes Projets</Link></li>
    <li><Link  to="contact" spy={true} smooth={true}>Contactez moi</Link></li>

    </ul>
  </div>
</nav>


}export default Navigation

