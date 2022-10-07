import styled, { css } from "styled-components";
import { useState, useEffect, useRef } from "react";
import { Fade } from "@components";
import {
  RelativeContainer,
  Nav,
  NavLink,
  MenuButton,
  StickyContainer,
  Overlay,
  MenuLinks,
} from "./Header.styles";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <RelativeContainer>
        <StickyContainer>
          <Nav>
            {LINKS.map(({ href, label }) => (
              <NavLink href={href}>{label}</NavLink>
            ))}
          </Nav>
          <MenuButton onClick={() => setIsOpen(true)}>Menu</MenuButton>
        </StickyContainer>
      </RelativeContainer>
      <Menu isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
}

function Menu({ isOpen, setIsOpen }: any) {
  return (
    <Fade in={isOpen} timeout={150}>
      <MenuLinks>
        <button onClick={() => setIsOpen(false)}>Exit</button>
        {LINKS.map(({ href, label }) => (
          <NavLink href={href}>{label}</NavLink>
        ))}
      </MenuLinks>
      <Overlay />
    </Fade>
  );
}
