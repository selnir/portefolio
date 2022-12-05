import * as React from 'react';


function Cards(props){

    return  <a href={props.urlext} target="_blank" rel="noopener noreferrer"><figure className='card'><img className='screenshot' src={props.image} alt="Remi Chambiet"></img></figure></a>

}export default Cards