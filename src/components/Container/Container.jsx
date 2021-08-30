import React from 'react';
import { Container } from 'react-bootstrap';


export default function ContainerComp({ children, size }){
    if(!size) size = true;

    return(
        <Container fluid={size}>
            {children}
        </Container>
    );
}