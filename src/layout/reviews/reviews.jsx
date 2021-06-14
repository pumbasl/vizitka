import React from 'react';
import { Button, Form } from 'react-bootstrap';
import ReCAPTCHA from "react-google-recaptcha";

import { CommentsContainerStyle, CommentCardStyle } from '../../style/style.js';

import './style.scss';

const poz = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export default function Reviews(){
    const [ captcha, setCaptcha ] = React.useState(false);
    return(
        <>
            <div className="inputHolder">
                <Form>
                    <div className="boxForm">
                        <Form.Group controlId="reviewsFormEmail">
                            <Form.Label className="text-light">Ваш Email:</Form.Label>
                            <Form.Control type="email" placeholder="Введите Вашу почту" />
                        </Form.Group>
                        <Form.Group controlId="reviewsFormName">
                            <Form.Label className="text-light">Ваше имя:</Form.Label>
                            <Form.Control type="text" placeholder="Введите Ваше имя" />
                        </Form.Group>
                        <Form.Group controlId="reviewsFormText">
                            <Form.Label className="text-light">Ваш отзыв:</Form.Label>
                            <Form.Control as="textarea" style={{width: "500px"}} rows={3} placeholder="Введите Ваш отзыв" />
                        </Form.Group>
                        <ReCAPTCHA
                            sitekey="6LceHDMbAAAAAFwTA_KEV0FF28XCwrhHRaRN3USD"
                            onChange={() => {setCaptcha(true)}}
                            theme="dark"
                        />
                        <div className="text-center mt-2">
                            <Button variant="danger" className="ml-2">Отправить</Button>
                        </div>
                    </div>
                </Form>
            </div>
            <CommentsContainerStyle>
                {poz.map((id) => (
                    <CommentCardStyle key={id}>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. 
                        Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
                        Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. 
                        Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, 
                        venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus 
                        elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend 
                        ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,
                    </CommentCardStyle>
                ))}
            </CommentsContainerStyle>
        </>
    );
}