import React from 'react';
import {Container, Nav} from 'rsuite';
import CustomNavbar, {NavLink} from '../components/navbar';
import '../App.css';
import tuna from '../assets/imgs/tuna.png';

export default () => {
  return (
    <Container className="App" data-testid="Container">
      <CustomNavbar />
      <Nav className="center">
        <Nav.Item as={NavLink} href="/">
          <img src={tuna} alt="tuna" className="bigCorners" loading="lazy" />
        </Nav.Item>
      </Nav>
      <h1 style={{textAlign: 'center'}}>This is tuna</h1>
    </Container>
  );
};
