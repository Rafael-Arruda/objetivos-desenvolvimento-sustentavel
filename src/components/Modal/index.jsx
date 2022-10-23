import React from "react";
import * as C from './style';

import {MdOutlineClose} from 'react-icons/md';

export default function Modal({data, close}) {
    return(
        <C.Container>
            <C.Area background={data.background}>
                <MdOutlineClose onClick={close} size={25} color='#000'/>
                <div className="info">
                    <span>Objetivo de Desenvolvimento Sustentável</span>
                    <h2>{data.id}</h2>
                    <h1>{data.title}</h1>
                    <span>{data.description}</span>
                </div>
                <img src={data.image} alt={data.title} />
            </C.Area>
        </C.Container>
    )
}