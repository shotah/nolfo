import React from 'react';
import {Toggle, Navbar, Nav} from 'rsuite';
import {Icon} from '@rsuite/icons';
import {FaMoon, FaSun} from 'react-icons/fa';

type NavbarProps = {
  onSelect: React.Dispatch<React.SetStateAction<null>>;
  activeKey: string | null;
  toggleTheme: (checked: boolean) => void;
  theme: 'light' | 'dark';
};

export default function CustomNavbar(props: NavbarProps): JSX.Element {
  const {onSelect, activeKey, toggleTheme, theme, ...rest} = props;
  return (
    <Navbar {...rest}>
      <Nav onSelect={onSelect} activeKey={activeKey}>
        <Nav.Item eventKey="1">NOLFO</Nav.Item>
      </Nav>
      <Nav pullRight>
        <Nav.Item>
          <Toggle
            checked={theme === 'light'}
            checkedChildren={<Icon as={FaSun} style={{fontSize: 16}} />}
            unCheckedChildren={<Icon as={FaMoon} style={{fontSize: 16}} />}
            onChange={toggleTheme}
            onClick={() => toggleTheme(theme === 'light' ? false : true)}
          />
        </Nav.Item>
      </Nav>
    </Navbar>
  );
}
