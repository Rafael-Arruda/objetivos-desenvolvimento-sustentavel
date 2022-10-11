import React from "react";
import * as C from './style';
import Card from '../../components/Card';

export default function Home() {
    return(
        <C.Container>
            <h1>
                Os Objetivos de Desenvolvimento Sustentável 
                no Bairro Nova Metrópole.
            </h1>
            <p>
                Os Objetivos de Desenvolvimento Sustentável 
                são um apelo global à ação para acabar com a 
                pobreza, proteger o meio ambiente e o clima e 
                garantir que as pessoas, em todos os lugares, 
                possam desfrutar de paz e de prosperidade. 
                Estes são os objetivos para os quais as Nações
                Unidas estão contribuindo a fim de que possamos 
                atingir a Agenda 2030 no Brasil.
            </p>
            <C.Wrapper>
                <Card id='1' title='Erradicação da pobreaza'/>
                <Card id='2' title='Saneamento básico'/>
                <Card id='3' title='Saúde e bem estar'/>
                <Card id='4' title='Coleta de lixo'/>
                <Card id='5' title='Educação de qualidade'/>
            </C.Wrapper>
        </C.Container>
    )
}