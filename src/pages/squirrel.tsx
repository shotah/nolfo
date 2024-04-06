import React, {Dispatch, SetStateAction} from 'react';
import {CustomProvider, Container} from 'rsuite';
import CustomNavbar from '../components/navbar';
import '../App.css';

import squirrel from '../assets/imgs/squirrel.png';

function Squirrel(props: {
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
          <img src={squirrel} alt="squirrel" width={500} height={500} />
          <h1>This is a squirrel</h1>
        </div>
      </Container>
    </CustomProvider>
  );
}

export default Squirrel;
