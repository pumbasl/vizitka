import ErrorNotFound from '../../media/img/errors/404.svg';

import MainContainer from '../../components/MainContainer/MainContainer';

const Error = (props) => {
    let errorid = 0;
    if(props.id === '404'){
        errorid = 404;
        return(
            <MainContainer>
                <h1><img width="300px" src={ErrorNotFound} alt="logo" /> - Not Fround</h1>
            </MainContainer>
        );
    }
    if(props.match.params.iderror === '1'){
        errorid = 1;
        return(
            <MainContainer>
                <h1>Authorization error</h1>
            </MainContainer>
        );
    }
    if(errorid === 0){
        return(
            <MainContainer>
                <h1>Error undefined</h1>
            </MainContainer>
        );
    }
};

export default Error;