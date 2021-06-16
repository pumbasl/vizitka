import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

//Стиль стр
import './style.scss';
//---------

export default function Header(){
    return(
        <Navbar expand="sm" variant="dark" className="navbar-custom">
            <NavLink to="/" className="navbar-brand ms-2">Wiberg-corp</NavLink>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav>
                    <NavLink to="/example" className="nav-link">Примеры работ</NavLink>
                    <NavLink to="/reviews" className="nav-link">Отзывы</NavLink>
                    <NavLink to="/contacts" className="nav-link">Контакты</NavLink>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};