import React from 'react';
import {Container} from './style';

export default function Card({item}){
    return(
        <Container background={item.background}>
            <div className='card-information'>
                <h2>{item.id}</h2>
                <h5>{item.title}</h5>
            </div>
            <img src={item.image} alt={item.title} />
        </Container>
    )
}