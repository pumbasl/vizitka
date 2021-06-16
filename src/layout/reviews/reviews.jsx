import React, { Component, createRef } from 'react';
import { Button, Form, Container } from 'react-bootstrap';
import ReCAPTCHA from "react-google-recaptcha";

import { CommentsContainerStyle, CommentCardStyle, CommentCardTitle, CommentCardFooter } from '../../style/style.js';

import './style.scss';

const ClientSiteKey = "6LceHDMbAAAAAFwTA_KEV0FF28XCwrhHRaRN3USD";
const DELAY = 1500;
const poz = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export default class Reviews extends Component {
    constructor(props, ...args) {
        super(props);
        this.state = {
            callback: 'not fired',
            value: false,
            load: false,
            expired: false
        };
        this._reCaptchaRef = createRef();
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount(){
        setTimeout(() => {
            this.setState({ load: true });
        }, DELAY);
        console.log("didMount - reCaptcha Ref-", this._reCaptchaRef);
    }

    handleClick(){
        if(this.state.value) console.log('КАПТЧА ПРОЙДЕНА');
        else console.log('КАПТЧА НЕ ПРОЙДЕНА');
    }

    handleChange = value => {
        console.log("Captha value:", value);
        console.log(this.state)
        this.setState({ value });
        if(value === null) this.setState({ expired: true });
    };
    
    asyncScriptOnLoad = () => {
        this.setState({ callback: "called!" });
        console.log("scriptLoad - reCaptcha Ref-", this._reCaptchaRef);
    };

    render(){
        return(
            <Container>
                <div className="wrapper">
                    <Form className="boxForm">
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
                            <Form.Control as="textarea" rows={3} placeholder="Введите Ваш отзыв" />
                        </Form.Group>
                        <ReCAPTCHA
                            sitekey={ClientSiteKey}
                            ref={this._reCaptchaRef}
                            onChange={this.handleChange}
                            theme="dark"
                            asyncScriptOnLoad={this.asyncScriptOnLoad}
                        />
                        <div className="text-center mt-2">
                            <Button variant="danger" onClick={this.handleClick} className="ml-2">Отправить</Button>
                        </div>
                    </Form>
                    <CommentsContainerStyle>
                        {poz.map((id) => (
                            <CommentCardStyle key={id}>
                                <CommentCardTitle>NAME AUTHOR</CommentCardTitle>
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. 
                                Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
                                Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. 
                                Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, 
                                venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus 
                                elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend 
                                ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,
                                <CommentCardFooter>DATE | TIME</CommentCardFooter>
                            </CommentCardStyle>
                        ))}
                    </CommentsContainerStyle>
                </div>
            </Container>
        );
    }
}