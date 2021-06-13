import styled from 'styled-components';

const ContactsContainer = styled.div({
    textAlign: "center",
    backgroundColor: "rgba(255,255,255, .2)",
    borderRadius: "5px",
    width: "310px",
    padding: "20px",
    boxShadow: "0 0 10px rgba(0,0,0,0.5)",
});

const MainContainerStyle = styled.div({
    width: props => props.width ? props.width : "100vw",
    color: 'white',
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    height: '80vh',
    padding: '20px',
});

// const DefaultCenterCont

const FooterStyle = styled.div({
    position: 'fixed',
    bottom: 0,
    color: 'white',
    textAlign: 'center',
    width: '100%',
    height: '5vh',
    backgroundColor: 'rgba(54, 0, 95, .3)',
    paddingTop: '10px'
});

export { ContactsContainer, MainContainerStyle, FooterStyle };