import React from 'react';
import {Container, Nav} from 'rsuite';
import CustomNavbar, {NavLink} from '../components/navbar';
import './index.css';
import human_dog from '../assets/imgs/human_dog.png';

export default () => {
  return (
    <Container className="App" data-testid="Container">
      <CustomNavbar />
      <Nav className="center">
        <Nav.Item as={NavLink} href="/">
          <img
            src={human_dog}
            alt="human_dog"
            className="bigCorners"
            loading="lazy"
          />
        </Nav.Item>
      </Nav>
      <h1 style={{textAlign: 'center'}}>This is a dog loving his human</h1>
    </Container>
  );
};
