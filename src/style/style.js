import styled from 'styled-components';

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
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    color: 'black',
    marginTop: '15px'
});

const CommentCardStyle = styled.div({
    width: '630px',
    backgroundColor: 'white',
    marginBottom: '10px',
    padding: '10px'
});

export { ContactsContainer, MainContainerStyle, CommentsContainerStyle, CommentCardStyle };