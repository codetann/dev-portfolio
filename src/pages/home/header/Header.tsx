import styled, { css } from "styled-components";
import { useState, useEffect, useRef } from "react";
import { Fade, Scale } from "@components";
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

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const body = document.querySelector("body");
    if (isOpen) {
      body!.style.overflow = "hidden";
    } else {
      body!.style.overflow = "auto";
    }
  }, [isOpen]);
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
    <>
      <Scale in={isOpen} timeout={150}>
        <MenuLinks>
          <button onClick={() => setIsOpen(false)}>x</button>
          {LINKS.map(({ href, label }) => (
            <NavLink href={href}>{label}</NavLink>
          ))}
        </MenuLinks>
      </Scale>
      <Fade in={isOpen} timeout={100}>
        <Overlay onClick={() => setIsOpen(false)} />
      </Fade>
    </>
  );
}
