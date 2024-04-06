import React, {LegacyRef} from 'react';
import {Link} from 'react-router-dom';
import {Toggle, Navbar, Nav} from 'rsuite';
import {Icon} from '@rsuite/icons';
import {FaMoon, FaSun} from 'react-icons/fa';

type NavbarProps = {
  onSelect: React.Dispatch<React.SetStateAction<null>>;
  activeKey: string | null;
  toggleTheme: (checked: boolean) => void;
  theme: 'light' | 'dark';
};

type NavLinkProps = {
  href: any;
  as: string;
};
const NavLink = React.forwardRef(
  (props: NavLinkProps, ref: LegacyRef<HTMLAnchorElement> | undefined) => {
    const {href, ...rest} = props;
    return <Link to={href} {...rest} ref={ref}></Link>;
  }
);

export default function CustomNavbar(props: NavbarProps): JSX.Element {
  const {onSelect, activeKey, toggleTheme, theme, ...rest} = props;

  return (
    <Navbar {...rest}>
      <Nav onSelect={onSelect} activeKey={activeKey}>
        <Nav.Item as={NavLink} href="/">
          Home
        </Nav.Item>
        <Nav.Item as={NavLink} href="/cat">
          Cat
        </Nav.Item>
        <Nav.Item as={NavLink} href="/squirrel">
          Squirrel
        </Nav.Item>
        <Nav.Item as={NavLink} href="/tuna">
          Tuna
        </Nav.Item>
        <Nav.Item as={NavLink} href="/caged">
          Caged
        </Nav.Item>
        <Nav.Item as={NavLink} href="/human_dog">
          Human Dog
        </Nav.Item>
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

{
  /* <Toggle
checked={theme === 'light'}
checkedChildren={<Icon as={FaSun} style={{fontSize: 16}} />}
unCheckedChildren={<Icon as={FaMoon} style={{fontSize: 16}} />}
onChange={toggleTheme}
onClick={() => toggleTheme(theme === 'light' ? false : true)}
/> */
}
