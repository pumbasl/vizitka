import React from 'react';
import { Link } from 'react-router-dom';

import MainContainer from '../../components/MainContainer/MainContainer';
import { Button } from 'react-bootstrap';

import './style.scss';

export default function Main(){
    return(
        <MainContainer>
            <div className="mainContainer">
                <div className="avatar"></div>
                <div className="info">
                    <div className="scaleTitleName">
                        <div className="titleName"><h1>DENIS MASSON</h1></div>
                    </div>
                    <div className="otherInfo">
                        <div className="descJob">
                            <h3>FullStack Developer.</h3>
                        </div>
                        <div className="descOpinion">
                            <p>Я буду счастлив работать с Вами. Приветствую на своем сайте и призываю начать со мной работу прямо сейчас!</p>
                        </div>
                    </div>
                    <Button as={Link} variant="danger" to="/contacts">Связаться со мной.</Button>
                </div>
            </div>
        </MainContainer>
    )
};