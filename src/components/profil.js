import * as React from 'react';
import Avatar from './avatar';
import Next from './button_next';
import Navigation from './navigation';
import { Link } from 'react-scroll';


function Profil(){

    return  <section className='profil'><article><Navigation></Navigation><h1> Remi</h1><h2>Je suis developpeur d'application javascript React.</h2>
    <p> si vous chercher un colaborateur dans le devellopement de votre visibilite sur le web <Link className='contactlink'  to="contact" spy={true} smooth={true}>n'hesitez pas a me contacter.</Link></p><Next target="apropos"></Next></article><Avatar></Avatar></section>

}export default Profil