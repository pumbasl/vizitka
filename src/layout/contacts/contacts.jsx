import React from 'react';
import { Badge, Row, Col } from 'react-bootstrap';

import MainContainer from '../../components/MainContainer/MainContainer';

//СТИЛИ СТР
import './style.scss';
import { ContactsContainer } from '../../style/style.js';
//------------------

export default function Contacts(){
    return(
        <MainContainer>
            <ContactsContainer>
                <Row>
                    <Col>Дискорд:</Col>
                    <Col><Badge variant="primary">fino#3479</Badge></Col>
                </Row>
                <Row>
                    <Col>Телеграмм:</Col>
                    <Col><Badge variant="primary">@deniswiberg</Badge></Col>
                </Row>
                <Row>
                    <Col>Cкайп:</Col>
                    <Col><Badge variant="primary">pumbasl</Badge></Col>
                </Row>
                <Row>
                    <Col>ВК:</Col>
                    <Col><Badge variant="primary">vk.com/niklauswiberg</Badge></Col>
                </Row>
            </ContactsContainer>
        </MainContainer>
    );
}