import React, {Dispatch, SetStateAction} from 'react';
import {CustomProvider, Container} from 'rsuite';
import CustomNavbar from '../components/navbar';
import '../App.css';

import tuna from '../assets/imgs/tuna.png';

function Tuna(props: {
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
          <img src={tuna} alt="tuna" width={500} height={500} />
          <h1>This is a tuna</h1>
        </div>
      </Container>
    </CustomProvider>
  );
}

export default Tuna;
