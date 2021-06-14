import React from 'react';
import { Card, Button } from 'react-bootstrap';

import MainContainer from '../../components/MainContainer/MainContainer';

export default function Example(){
    return(
        <MainContainer>

            <Card style={{ width: '18rem', height: '420px', color: 'black' }} className="mr-2 mt-2">
                <Card.Img variant="top" height="180px" src="https://picsum.photos/200/" />
                <Card.Body>
                    <Card.Title>Сайт визитка (Старая)</Card.Title>
                    <Card.Text>
                        Мой сайт визитка который был написал год назад. Немного PHP + bootstrap v5.0.
                    </Card.Text>
                    <footer>
                        <div className="text-center">
                            <Button variant="info">Посмотреть</Button>
                        </div>
                    </footer>
                </Card.Body>
            </Card>

            <Card style={{ width: '18rem', height: '420px', color: 'black' }} className="mr-2 mt-2">
            <Card.Img variant="top" height="180px" src="https://picsum.photos/200/" />
                <Card.Body>
                    <Card.Title>Сайт со спектром не больших услуг</Card.Title>
                    <Card.Text>
                        Сайт с использованием Bootstrap V5.0. Был сделан Pixel Perfect с макета фигмы.
                    </Card.Text>
                    <footer>
                        <div className="text-center">
                            <Button variant="info">Посмотреть</Button>
                        </div>
                    </footer>
                </Card.Body>
            </Card>

            <Card style={{ width: '18rem', height: '420px', color: 'black' }} className="mr-2 mt-2">
            <Card.Img variant="top" height="180px" src="https://picsum.photos/200/" />
                <Card.Body>
                    <Card.Title>Сайт на котором Вы сейчас находитесь)</Card.Title>
                    <Card.Text>
                        Мой сайт визитка который был на React + ReactBootstrap и немного авторской верстки
                    </Card.Text>
                    <footer>
                        <div className="text-center">
                            <Button variant="info">Посмотреть</Button>
                        </div>
                    </footer>
                </Card.Body>
            </Card>
        </MainContainer>
    );
}