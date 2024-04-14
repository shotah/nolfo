import React from 'react';
import {Container, Nav} from 'rsuite';
import CustomNavbar, {NavLink} from '../components/navbar';
import './index.css';
import caged from '../assets/imgs/caged.png';

export default () => {
  return (
    <Container className="App" data-testid="Container">
      <CustomNavbar />
      <Nav className="center">
        <Nav.Item as={NavLink} href="/">
          <img src={caged} alt="caged" className="bigCorners" loading="lazy" />
        </Nav.Item>
      </Nav>
      <h1 style={{textAlign: 'center'}}>This is a caged animal</h1>
    </Container>
  );
};
