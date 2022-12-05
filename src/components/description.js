import * as React from 'react';
import Next from './button_next';


function Description(){

    return<section className='apropos'><h1>A Propos</h1>
    <p></p>
    <article className='icon_details'>
    <figure className='cards_descr'><img className='icone' src="./ic_devices_black_48dp.png" alt='device'></img><h3>devellopement mobile-first responsive</h3></figure>
    <figure className='cards_descr'><img className='icone' src="./file-javascript.png" alt='javascript'></img><h3>Javascript</h3></figure>
    <figure className='cards_descr'><img className='icone' src="./react_1.png" alt='react'></img><h3>React</h3></figure>
    <figure className='cards_descr'><img className='icone' src="./file-html5.png" alt='html5'></img><h3>HTML5</h3></figure>
    <figure className='cards_descr'><img className='icone' src="./file-css.png" alt='css'></img><h3>CSS3</h3></figure>
    </article>
    <Next target="gallery"></Next></section>

}export default Description