import React from 'react';
import {CustomProvider, Container, Nav} from 'rsuite';
import CustomNavbar, {NavLink} from '../components/navbar';
import './index.css';

import cat from '../assets/imgs/alone_cat.png';

function Cat() {
  return (
    <CustomProvider>
      <Container className="App" data-testid="Container">
        <CustomNavbar />
        <div className="cat">
          <Nav className="center">
            <Nav.Item as={NavLink} href="/">
              <img src={cat} alt="cat" className="bigCorners" />
            </Nav.Item>
          </Nav>
          <h1 style={{textAlign: 'center'}}>This is a lone cat</h1>
        </div>
      </Container>
    </CustomProvider>
  );
}

export default Cat;
