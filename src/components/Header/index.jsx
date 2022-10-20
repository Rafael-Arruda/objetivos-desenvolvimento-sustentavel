import React from "react";
import * as C from './style';

import logo from '../../assets/logo-onu.svg';

export default function Header(){
    return(
        <C.Container>
            <C.Logo>
                <img src={logo} alt="logo" />
                <div>
                    <h5>Nações unidas</h5>
                    <span>Brasil</span>
                </div>
            </C.Logo>
            <div className="vertical-line"></div>
            <C.Title>
                <span>Nações unidas</span>
                <h3>Brasil</h3>
            </C.Title>
        </C.Container>
    )
}