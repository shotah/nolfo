// your last one was better. Sorry I didn't hit accept.
// I'm going to go ahead and do that now.

import React, {Dispatch, SetStateAction} from 'react';
// import {Routes, Route} from 'react-router-dom';
import {CustomProvider, Container} from 'rsuite';
import CustomNavbar from '../components/navbar';
// import CustomModal from '../components/modal';
import '../App.css';
import human_dog from '../assets/imgs/human_dog.png';
import alone_cat from '../assets/imgs/alone_cat.png';
import squirrel from '../assets/imgs/squirrel.png';
import tuna from '../assets/imgs/tuna.png';
import caged from '../assets/imgs/caged.png';

// Lets make the home page!

function Home(props: {
  theme: 'light' | 'dark';
  toggleTheme: (checked: boolean) => void;
  activeKey: string | null;
  setActiveKey: Dispatch<SetStateAction<null>>;
}) {
  const {setActiveKey, activeKey, toggleTheme, theme} = props;
  return (
    <CustomProvider>
      <Container className="App" data-testid="Container">
        <CustomNavbar
          onSelect={setActiveKey}
          activeKey={activeKey}
          toggleTheme={toggleTheme}
          theme={theme}
        />

        <div className="home">
          <h1>Welcome to the Home Page!</h1>
          <p>
            This is a simple page to show off some of the features of the
            application.
          </p>
          <h2>Images:</h2>
          <div className="images">
            <img src={human_dog} alt="human_dog" width={150} height={150} />
            <img src={alone_cat} alt="alone_cat" width={150} height={150} />
            <img src={squirrel} alt="squirrel" width={150} height={150} />
            <img src={tuna} alt="tuna" width={150} height={150} />
            <img src={caged} alt="caged" width={150} height={150} />
          </div>
        </div>
      </Container>
    </CustomProvider>
  );
}

export default Home;
