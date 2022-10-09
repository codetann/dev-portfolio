import styled, { css } from "styled-components";
import { useState, useEffect, useRef } from "react";
import { Fade } from "./animations";

const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 10rem;
  width: 100%;
  position: relative;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.colors.gray[600]};
  padding: 0.7rem 1.5rem;
  border-radius: 10rem;
  gap: 2rem;
  position: sticky;
  top: 1rem;
  left: 0;
  border: 1px solid ${({ theme }) => theme.colors.gray[400]};

  @media (max-width: 900px) {
    display: none;
  }
`;

const NavLink = styled.a`
  color: #fff;
  text-decoration: none;
  font-size: ${({ theme }) => theme.fontSize.sm};
`;

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <Header>
      <Nav>
        {LINKS.map(({ href, label }) => (
          <NavLink href={href}>{label}</NavLink>
        ))}
      </Nav>
      <Menu />
    </Header>
  );
}

const MenuContainer = styled.div<{ isOpen?: boolean }>`
  display: none;
  justify-content: center;
  align-items: center;
  justify-content: flex-end;
  position: sticky;
  top: 1rem;
  right: 1rem;
  width: 100%;
  z-index: 100;
  height: 0;
  transition: all 0.2s ease-in-out;

  ${({ isOpen }) =>
    isOpen &&
    css`
      height: 100vh;
      backdrop-filter: blur(5px);
    `};

  @media (max-width: 900px) {
    display: flex;
    right: 0;
  }
`;

const MenuButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.colors.gray[600]};
  padding: 0.7rem 1.5rem;
  border-radius: 10rem;
`;

const MenuLinksContainer = styled.div<{ isOpen?: boolean }>`
  display: flex;
  height: 0;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;

  ${({ isOpen }) =>
    isOpen &&
    css`
      display: flex;
      flex-direction: column;
      justify-content: start;
      align-items: center;
      height: 100vh;
      /* background: ${({ theme }) => theme.colors.gray[600]}; */
      /* backdrop-filter: blur(5px); */
    `};
`;
const MenuLinks = styled.div<{ isOpen: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.colors.gray[600]};
  transform: scale(0.96);
  position: relative;
  z-index: 900;
  width: 100%;
  height: 40vh;
  border-radius: 1rem;
`;

const MenuLink = styled.a`
  color: #fff;
  text-decoration: none;
  font-size: ${({ theme }) => theme.fontSize.sm};
`;

function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const body = document.querySelector("body");
    if (isOpen) {
      body!.style.overflow = "hidden";
    } else {
      ref.current!.style.opacity = "0";

      setTimeout(() => {
        body!.style.overflow = "auto";
      }, 2000);
    }
  }, [isOpen]);

  return (
    <>
      <MenuContainer isOpen={isOpen}>
        <MenuButton onClick={() => setIsOpen(!isOpen)}>Menu</MenuButton>
      </MenuContainer>
      <Fade in={isOpen} timeout={300}>
        <MenuLinksContainer ref={ref} isOpen={isOpen}>
          <MenuLinks isOpen={isOpen}>
            {LINKS.map(({ href, label }) => (
              <MenuLink href={href} onClick={() => setIsOpen(false)}>
                {label}
              </MenuLink>
            ))}
          </MenuLinks>
        </MenuLinksContainer>
      </Fade>
    </>
  );
}
