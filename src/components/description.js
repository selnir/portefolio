import * as React from 'react';
import Next from './button_next';


function Description(){

    return<section className='apropos'><h1>À propos</h1>
    <p>        
        À travers des UX modernes et de qualités, nous pourrons promouvoir ensemble vos activités et celles de vos clients.<br /> 
        Mon rôle sera de vous accompagner dans la création et l'amélioration de l'interface de vos applications, qu'elles soient mobile ou desktop.<br /> 
        Je serais présent de la définiton de vos besoins jusqu'à la mise en production, en passant par l'accessibilité et les tests.<br />
    </p>
    <article className='icon_details'>
    <figure className='cards_descr'><img className='icone' src="./ic_devices_black_48dp.png" alt='device'></img><h3>développement mobile-first responsive</h3></figure>
    <figure className='cards_descr'><img className='icone' src="./file-javascript.png" alt='javascript'></img><h3>Javascript</h3></figure>
    <figure className='cards_descr'><img className='icone' src="./react_1.png" alt='react'></img><h3>React17</h3></figure>
    <figure className='cards_descr'><img className='icone' src="./file-html5.png" alt='html5'></img><h3>HTML5</h3></figure>
    <figure className='cards_descr'><img className='icone' src="./file-css.png" alt='css'></img><h3>CSS3</h3></figure>
    </article>
    <Next target="gallery"></Next></section>

}export default Description