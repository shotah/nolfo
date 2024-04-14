import React from 'react';
import {Container, Nav} from 'rsuite';
import CustomNavbar, {NavLink} from '../components/navbar';
import './index.css';
import squirrel from '../assets/imgs/squirrel.png';

export default () => {
  return (
    <Container className="App" data-testid="Container">
      <CustomNavbar />

      <Nav className="center">
        <Nav.Item as={NavLink} href="/">
          <img src={squirrel} alt="squirrel" className="bigCorners" />
        </Nav.Item>
      </Nav>
      <h1 style={{textAlign: 'center'}}>This is a squirrel</h1>
    </Container>
  );
};
