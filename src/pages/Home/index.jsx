import React, {useState} from "react";
import * as C from './style';
import Card from '../../components/Card';
import Header from "../../components/Header";

import pobreza from '../../assets/pobreza.png';
import esgoto from '../../assets/esgoto.png';
import saude from '../../assets/saude.png';
import lixo from '../../assets/lixo.png';
import educacao from '../../assets/educacao.png';

import Modal from "../../components/Modal";

export default function Home() {

    const projects = [
        {
            id: 1,
            title: 'Erradicação da pobreza',
            description: 'Erradicar a pobreza, gerando oportunidades para os mais necessitados',
            image: pobreza,
            background: '#e5243b'
        },
        {
            id: 2,
            title: 'Saneamento básico',
            description: 'Garantir saneamento básico nas ruas, diminuindo a poluição do bairro',
            image: esgoto,
            background: '#bf8b2e'
        },
        {
            id: 3,
            title: 'Saúde e bem estar',
            description: 'Abertura de postos de saúde para garantir rápido atendimento em casos de emergência',
            image: saude,
            background: '#4c9f38'
        },
        {
            id: 4,
            title: 'Coleta de lixo',
            description: 'Fixar pontos de coleta de lixo para diminuir a quantidade de lixo nas ruas',
            image: lixo,
            background: '#19486a'
        },
        {
            id: 5,
            title: 'Educação de qualidade',
            description: 'Garantir um ensino de qualidade nas escolas públicas do bairro',
            image: educacao,
            background: '#0a97d9'
        }
    ]

    const [showModal, setShowModal] = useState(false);
    const [modalData, setModalData] = useState({});

    function toggleShowModal(item) {
        setShowModal(!showModal);
        setModalData(item);
    }

    return(
        <>
            <C.Container>
                <Header/>
                <C.Content>
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
                        {projects.map((item) => (
                            <div key={item.id} onClick={() => {toggleShowModal(item)}}>
                                <Card item={item}/>
                            </div>
                        ))}
                    </C.Wrapper>
                </C.Content>
            </C.Container>

            {showModal && 
            
            <Modal
            data={modalData}
            close={toggleShowModal}
            />

            }
        </>
    )
}