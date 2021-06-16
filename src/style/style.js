import styled, { keyframes } from 'styled-components';
import { pulse } from 'react-animations';

const ContactsContainer = styled.div({
    textAlign: "center",
    backgroundColor: "rgba(255,255,255, .2)",
    borderRadius: "5px",
    width: "310px",
    padding: "20px",
    boxShadow: "0 0 10px rgba(0,0,0,0.5)",
});

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
    animation: 2s ${keyframes`${pulse}`} infinite`;

export { ContactsContainer, MainContainerStyle, CommentsContainerStyle, CommentCardStyle, CommentCardTitle, CommentCardFooter, ViewSourceStyle, PulseAnim };