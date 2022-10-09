import styled, { css } from "styled-components";
import { useState, useEffect, useRef } from "react";

const RelativeContainer = styled.header`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 8rem;
  width: 100%;
  padding: 0 1rem;

  @media (min-width: 900px) {
  }
`;

const StickyContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 1rem;
  width: 100%;
  z-index: 100;
  transition: all 0.2s ease-in-out;

  @media (max-width: 900px) {
    justify-content: flex-end;
  }
`;

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.colors.gray[600]};
  padding: 0.7rem 1.5rem;
  border-radius: 10rem;
  gap: 2rem;
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

const MenuButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.colors.gray[600]};
  padding: 0.7rem 1.5rem;
  border-radius: 10rem;
  z-index: 1000;
  cursor: pointer;

  @media (min-width: 900px) {
    display: none;
  }
`;

const MenuLinks = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 40vh;
  z-index: 200;
  background: ${({ theme }) => theme.colors.gray[800]};
  border-radius: 1rem;
  transform: scale(0.9);
  padding: 1rem;
`;

const Overlay = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 150vh;
  background: rgba(0, 0, 0, 0.512);
  backdrop-filter: blur(10px);
  z-index: 100;
`;

export {
  RelativeContainer,
  Nav,
  NavLink,
  StickyContainer,
  MenuButton,
  Overlay,
  MenuLinks,
};
