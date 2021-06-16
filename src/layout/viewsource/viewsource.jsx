import { Button } from 'react-bootstrap';
import { ViewSourceStyle, PulseAnim } from '../../style/style.js';

import GitHubLogo from '../../media/img/GitHub-Mark-Light-120px-plus.png';

import './style.scss';

export default function ViewSource(){
    return(
        <ViewSourceStyle>
            <PulseAnim>
                <Button href="https://github.com/pumbasl/pumbasl.github.io" variant="dark">
                    <img width="20px" src={GitHubLogo} alt="GitHubLogo" /> <span className="textSource">View source</span>
                </Button>
            </PulseAnim>
        </ViewSourceStyle>
    );
}