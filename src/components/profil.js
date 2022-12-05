import * as React from 'react';
import Avatar from './avatar';
import Next from './button_next';
import Navigation from './navigation';
import { Link } from 'react-scroll';


function Profil(){

    return  <section className='profil'><article><Navigation></Navigation><h1> Rémi</h1><h2>Je suis développeur d'application javascript React.</h2>
    <p> si vous cherchez un collaborateur dans le développement de votre visibilité sur le web <Link className='contactlink'  to="contact" spy={true} smooth={true}>n'hésitez pas à me contacter.</Link></p><Next target="apropos"></Next></article><Avatar></Avatar></section>

}export default Profil