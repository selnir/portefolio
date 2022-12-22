import * as React from 'react';
import Carousel from './carousel';
import Next from './button_next';


function Gallery(){

    const feed=[<a href="https://selnir.github.io/Front-End-Fisheye/" target="_blank" rel="noopener noreferrer"><img src="./Fisheye.jpg" alt="Fisheye"></img></a>,
   <a href="https://selnir.github.io/GameOn-website-FR/" target="_blank" rel="noopener noreferrer"> <img src="./game_on_site_screeenshots.jpg" alt="GameOnSite"></img></a>,
    <a href="https://selnir.github.io/kasa/" target="_blank" rel="noopener noreferrer"><img src="./Kasa_screenshots.jpg" alt="Kasa"></img></a>,
    <a  href="https://selnir.github.io/Projet-7_les_petits_plats/" target="_blank" rel="noopener noreferrer"><img src="./Les_petits_plats_screenchots.jpg" alt="LesPetitsPlats"></img></a>,
    <a href="https://selnir.github.io/ohmyfood/" target="_blank" rel="noopener noreferrer"><img src="./ohmyfood_screenshots.jpg" alt="Ohmyfood"></img></a>,


]

    return<section className='gallery'><h1>Mes Projets</h1><article className='grid_portefolio'>
    <Carousel>{feed}</Carousel>
    </article><Next target="contact"></Next></section>


}export default Gallery

{/* <Cards urlext="https://selnir.github.io/Front-End-Fisheye/" image="./Fisheye.jpg"></Cards>
    <Cards urlext="https://selnir.github.io/GameOn-website-FR/" image="./game_on_site_screeenshots.jpg"></Cards>
    <Cards urlext="https://selnir.github.io/kasa/" image="./Kasa_screenshots.jpg"></Cards>
    <Cards urlext="https://selnir.github.io/Projet-7_les_petits_plats/" image="./Les_petits_plats_screenchots.jpg"></Cards>
    <Cards urlext="https://selnir.github.io/ohmyfood/" image="./ohmyfood_screenshots.jpg"></Cards> */}