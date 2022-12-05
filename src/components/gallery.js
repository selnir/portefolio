import * as React from 'react';
import Cards from './cards';
import Next from './button_next';


function Gallery(){

    return<section className='gallery'><h1>Mes Projets</h1><article className='grid_portefolio'>
    <Cards urlext="https://selnir.github.io/Front-End-Fisheye/" image="./Fisheye.jpg"></Cards>
    <Cards urlext="https://selnir.github.io/GameOn-website-FR/" image="./game_on_site_screeenshots.jpg"></Cards>
    <Cards urlext="https://selnir.github.io/kasa/" image="./Kasa_screenshots.jpg"></Cards>
    <Cards urlext="https://selnir.github.io/Projet-7_les_petits_plats/" image="./Les_petits_plats_screenchots.jpg"></Cards>
    <Cards urlext="https://selnir.github.io/ohmyfood/" image="./ohmyfood_screenshots.jpg"></Cards>
    </article><div><Next target="contact"></Next></div></section>


}export default Gallery