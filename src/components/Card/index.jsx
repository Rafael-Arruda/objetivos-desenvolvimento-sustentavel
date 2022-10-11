import React from 'react';
import {Container} from './style';

export default function Card({id, title}){
    return(
        <Container>
            <div className='card-information'>
                <h2>{id}</h2>
                <h5>{title}</h5>
            </div>
        </Container>
    )
}