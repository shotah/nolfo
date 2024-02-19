import React from 'react';
import {CustomProvider, Content, Container, Stack} from 'rsuite';
import CustomNavbar from './components/navbar';
import CustomModal from './components/modal';
import './App.css';
import img1 from './assets/imgs/num_1.gif';
import img2 from './assets/imgs/num_2.gif';
import img3 from './assets/imgs/num_3.gif';
import img4 from './assets/imgs/num_4.gif';
import img5 from './assets/imgs/num_5.gif';

function App() {
  const [theme, setTheme] = React.useState<'light' | 'dark'>('dark');
  const [activeKey, setActiveKey] = React.useState(null);
  const toggleTheme = (checked: boolean) => {
    setTheme(checked ? 'light' : 'dark');
  };

  return (
    <CustomProvider theme={theme} disableRipple={false}>
      <Container className="App" data-testid="Container">
        <CustomNavbar
          onSelect={setActiveKey}
          activeKey={activeKey}
          toggleTheme={toggleTheme}
          theme={theme}
        />
        <Content className="App-header" data-testid="Content">
          <Stack
            spacing={10}
            direction={'row-reverse'}
            alignItems={'center'}
            justifyContent={'space-around'}
            data-testid="Stack"
          >
            <CustomModal image={img1} />
            <CustomModal image={img2} />
            <CustomModal image={img3} />
          </Stack>
          <Stack
            spacing={10}
            direction={'row-reverse'}
            alignItems={'center'}
            justifyContent={'space-around'}
            data-testid="Stack"
          >
            <CustomModal image={img4} />
            <CustomModal image={img5} />
          </Stack>
        </Content>
      </Container>
    </CustomProvider>
  );
}

export default App;
