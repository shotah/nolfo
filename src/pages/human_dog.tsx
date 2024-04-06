// this page is for the human dog image, it should only display the human dog image with a caption and nav bar.
// the caption should say "This is a human and a dog"
// the nav bar should have the following links:
// - Home
// - Cat
// - Squirrel
// - Tuna
// - Caged
// - Human Dog
//
// the nav bar should have the following functionality:
// - Home should take you to the home page
// - Cat should take you to the cat page
// - Squirrel should take you to the squirrel page
// - Tuna should take you to the tuna page
// - Caged should take you to the caged page
// - Human Dog should take you to the human dog page
//

import React, {Dispatch, SetStateAction} from 'react';
import {CustomProvider, Container} from 'rsuite';
import CustomNavbar from '../components/navbar';
import '../App.css';
import human_dog from '../assets/imgs/human_dog.png';

function HumanDog(props: {
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
          <img src={human_dog} alt="human_dog" width={500} height={500} />
          <h1>This is a human and a dog</h1>
        </div>
      </Container>
    </CustomProvider>
  );
}

export default HumanDog;
