import React from 'react';
import {CustomProvider, Container, Nav} from 'rsuite';
import CustomNavbar, {NavLink} from '../components/navbar';
import './index.css';
import human_dog from '../assets/imgs/human_dog.png';

function HumanDog() {
  return (
    <CustomProvider>
      <Container className="App" data-testid="Container">
        <CustomNavbar />
        <div className="human_dog">
          <Nav className="center">
            <Nav.Item as={NavLink} href="/">
              <img src={human_dog} alt="human_dog" className="bigCorners" />
            </Nav.Item>
          </Nav>
          <h1 style={{textAlign: 'center'}}>This is a dog loving his human</h1>
        </div>
      </Container>
    </CustomProvider>
  );
}

export default HumanDog;
