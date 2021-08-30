import React from 'react';
import { Image } from 'react-bootstrap';

//media
import Baiden from '../../media/img/baiden.png';
//

//components
import MainContainer from '../../components/MainContainer/MainContainer';
import Convert from '../../components/Convert/Convert';
//

//СТИЛИ
import { CustomLink } from '../../style/style';
import './style.scss';
//------------------

export default function Contacts() {
    return (
        <MainContainer>
            <Convert.Container>
                <Convert.Label className="clearfix">
                    <Convert.Mark className="float-end">
                        <Image src={Baiden} width="100px" height="100px" />
                    </Convert.Mark>
                </Convert.Label>
                <Convert.Label>
                    <Convert.Text className="text-light">
                        <h5>Контакты:</h5>
                        <div>Почта: <CustomLink target="_blank" href="mailto:pumbasl60@gmail.com">pumbasl60@gmail.com</CustomLink></div>
                        <div>Telegram: <CustomLink target="_blank" href="https://t.me/deniswiberg">@deniswiberg</CustomLink></div>
                        <div>Discord: fino#3479</div>
                    </Convert.Text>
                </Convert.Label>
            </Convert.Container>
        </MainContainer>
    );
}