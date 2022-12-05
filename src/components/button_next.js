import * as React from 'react';
import { Link } from 'react-scroll';




function Next(props){



    return  <div className='next_container'><Link  to={props.target} spy={true} smooth={true}><button className='next' ><i class="fa-solid fa-circle-chevron-down"></i></button></Link></div>

}export default Next