import React from 'react';
import { Card, Button } from 'react-bootstrap';

import SiteImage from '../../media/img/pikcha.svg';

import MainContainer from '../../components/MainContainer/MainContainer'

//data
import data from '../../store/example';
//

//style
import './style.scss'
//

export default function Example(){
    return(
        <>
            <MainContainer>
                {data.map((value, id) => (
                    <Card key={id} className="me-2 mt-2 text-dark custom-card">
                        <Card.Img variant="top" height="180px" src={SiteImage} />
                        <hr />
                        <Card.Body>
                            <Card.Title>{value.title}</Card.Title>
                            <Card.Text>
                                {value.text}
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className="text-center">
                            <Button href={value.link} variant="danger">
                                Посмотреть
                            </Button>
                        </Card.Footer>
                    </Card>
                ))}
            </MainContainer>
        </>
    );
}