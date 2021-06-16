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
    color: 'black',
    margin: '10px'
});

const CommentCardStyle = styled.div({
    backgroundColor: 'white',
    marginBottom: '10px',
    padding: '10px'
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

export { ContactsContainer, MainContainerStyle, CommentsContainerStyle, CommentCardStyle, ViewSourceStyle, PulseAnim };