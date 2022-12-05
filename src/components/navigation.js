import {Link} from 'react-scroll'

function Navigation(props){

    return <><nav>
            <ul className='navigation'>
        <li><Link  to="apropos" spy={true} smooth={true}>À propos</Link></li>
          <li><Link  to="gallery" spy={true} smooth={true}>Mes Projets</Link></li>
          <li><Link  to="contact" spy={true} smooth={true}>Contactez moi</Link></li>

            </ul>
  </nav></>

}export default Navigation

