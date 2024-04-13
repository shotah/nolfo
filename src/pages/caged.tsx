import React from 'react';
import {CustomProvider, Container, Nav} from 'rsuite';
import CustomNavbar, {NavLink} from '../components/navbar';
import './index.css';

import caged from '../assets/imgs/caged.png';

function Caged() {
  return (
    <CustomProvider>
      <Container className="App" data-testid="Container">
        <CustomNavbar />
        <div className="caged">
          <Nav className="center">
            <Nav.Item as={NavLink} href="/">
              <img src={caged} alt="caged" className="bigCorners" />
            </Nav.Item>
          </Nav>
          <h1 style={{textAlign: 'center'}}>This is a caged animal</h1>
        </div>
      </Container>
    </CustomProvider>
  );
}

export default Caged;