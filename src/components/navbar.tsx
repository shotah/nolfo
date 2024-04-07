import React, {Ref} from 'react';
import {Link} from 'react-router-dom';
import {Navbar, Nav} from 'rsuite';

type NavLinkProps = {
  href: string;
  as: string;
};
export const NavLink = React.forwardRef(
  (props: NavLinkProps, ref: Ref<HTMLAnchorElement> | undefined) => {
    const {href, ...rest} = props;
    return <Link to={href} {...rest} ref={ref}></Link>;
  }
);

export default function CustomNavbar(): JSX.Element {
  return (
    <Navbar>
      <Nav>
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
    </Navbar>
  );
}
