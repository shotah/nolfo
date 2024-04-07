import React from 'react';
import {CustomProvider, Container, Nav} from 'rsuite';
import CustomNavbar, {NavLink} from '../components/navbar';
import '../App.css';

import tuna from '../assets/imgs/tuna.png';

function Tuna() {
  return (
    <CustomProvider>
      <Container className="App" data-testid="Container">
        <CustomNavbar />
        <div className="tuna">
          <Nav className="center">
            <Nav.Item as={NavLink} href="/">
              <img src={tuna} alt="tuna" className="bigCorners" />
            </Nav.Item>
          </Nav>
          <h1 style={{textAlign: 'center'}}>This is tuna</h1>
        </div>
      </Container>
    </CustomProvider>
  );
}

export default Tuna;
