import styled, { keyframes } from 'styled-components';
import { pulse } from 'react-animations';
import CovertBack from '../media/img/convert.jpg';

const CustomLink = styled.a`
    text-decoration: none;
    color: lime;
`;

const Convert = styled.div`
    background: url(${CovertBack});
    background-size: cover;
    box-shadow: 0 0 20px rgba(0,0,0,0.5);
    border-radius: 2px;
    width: 90%;
    height: 400px;
    transform: rotate(-5deg);
    color: black;
    padding: 15px;

    @media (min-width: 1024px) {
        width: 940px;
    }
`;

const WaterMark = styled.div`
    width: 108px;
    padding: 4px;
    background-color: gray;
    outline-color: red;
    outline-style: dashed;
    outline-width: 2px;
`;

const LabelConvert = styled.div`
    margin: 20px;
    width: 90%;
`;

const TextConvert = styled.div`
    position: absolute;
    margin-bottom: 20px;
    bottom: 0;
`;

const MainContainerStyle = styled.div(props => ({
    width: props.width ? props.width : "100vw",
    color: 'white',
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    height: '80vh',
    padding: '20px',
}));

const CommentsContainerStyle = styled.div({
    color: 'white',
    margin: '10px'
});

const CommentCardStyle = styled.div({
    marginBottom: '10px',
    padding: '10px',
    borderRadius: '10px',
    backgroundColor: 'rgba(91,100,120, .2)',
    boxShadow: ' 0 0 10px rgba(0,0,0,1)'
});

const CommentCardTitle = styled.div({
    textAlign: 'right',
    fontFamily: 'Noto Sans JP, sans-serif',
    paddingBottom: '15px'
});

const CommentCardFooter = styled.div({
    textAlign: 'right',
    fontFamily: 'Noto Sans JP, sans-serif',
    paddingTop: '15px',
    fontSize: '70%'
});

const ViewSourceStyle = styled.div({
    position: 'fixed',
    bottom: 0,
    left: 0,
    color: 'white',
    margin: '15px'
});

const PulseAnim = styled.div`
    animation: 2s ${keyframes`${pulse}`} infinite
`;

export { CustomLink, Convert, WaterMark, LabelConvert, TextConvert, MainContainerStyle, CommentsContainerStyle, CommentCardStyle, CommentCardTitle, CommentCardFooter, ViewSourceStyle, PulseAnim };