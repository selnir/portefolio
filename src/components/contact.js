import * as React from 'react';
import Top from './button_top';


function Contact(){

    return<section className='contact'><article className='icone_ext'>
        <a href='https://www.linkedin.com/in/r%C3%A9mi-chambiet/' target="_blank" rel="noopener noreferrer"><img src="./linkedin.png" alt='linkedin'></img></a>
        <a href='https://github.com/selnir?tab=repositories' target="_blank" rel="noopener noreferrer"><img src="./github.png" alt='linkedin'></img></a>
        </article><Top target="profil"></Top><p className="reserved">© 2022 Remi Chambiet. All rights reserved</p></section>

}export default Contact