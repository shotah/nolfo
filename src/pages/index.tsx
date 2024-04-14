import React from 'react';
import {Container, Nav} from 'rsuite';
import CustomNavbar, {NavLink} from '../components/navbar';
import './index.css';
import human_dog from '../assets/imgs/human_dog.png';
import alone_cat from '../assets/imgs/alone_cat.png';
import squirrel from '../assets/imgs/squirrel.png';
import tuna from '../assets/imgs/tuna.png';
import caged from '../assets/imgs/caged.png';
// const lazyCaged = lazy(() => import('../assets/imgs/caged.png'));

function Home() {
  return (
    <Container className="App" data-testid="Container">
      <CustomNavbar />
      <div className="images">
        <br />
        <Nav className="row">
          <Nav.Item as={NavLink} href="/cat">
            <img
              src={alone_cat}
              alt="cat"
              className="smallCorners"
              loading="lazy"
            />
          </Nav.Item>
          <Nav.Item as={NavLink} href="/squirrel">
            <img
              src={squirrel}
              alt="squirrel"
              className="smallCorners"
              loading="lazy"
            />
          </Nav.Item>
          <Nav.Item as={NavLink} href="/tuna">
            <img
              src={tuna}
              alt="tuna"
              className="smallCorners"
              loading="lazy"
            />
          </Nav.Item>
        </Nav>
        <Nav className="row">
          <Nav.Item as={NavLink} href="/caged">
            <img
              src={caged}
              alt="caged"
              className="smallCorners"
              loading="lazy"
            />
          </Nav.Item>
          <Nav.Item as={NavLink} href="/human_dog">
            <img
              src={human_dog}
              alt="human_dog"
              className="smallCorners"
              loading="lazy"
            />
          </Nav.Item>
        </Nav>
      </div>
    </Container>
  );
}

export default Home;
