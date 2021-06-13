import { MainContainerStyle } from '../../style/style.js';

const MainContainer = (props) => {
    return(
        <MainContainerStyle width={props.width}>
            {props.children}
        </MainContainerStyle>
    );
};

export default MainContainer;