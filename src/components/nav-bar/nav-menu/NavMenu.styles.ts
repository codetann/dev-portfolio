import styled, { css } from "styled-components";

interface ContainerProps {
  show: boolean;
}

const Container = styled.div<ContainerProps>`
  display: none;
  justify-content: center;
  align-items: center;
  justify-content: flex-end;
  position: sticky;
  top: 2rem;
  right: 5rem;
  width: 100%;
  z-index: 100;

  transition: all 0.2s ease-in-out;

  @media (max-width: 900px) {
    display: flex;
    right: 0;
  }
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.colors.gray[600]};
  padding: 0.7rem 1.5rem;
  border-radius: 10rem;
  position: fixed;
  top: 1rem;
  right: 1rem;
  @media (min-width: 900px) {
    display: none;
  }
`;

const Wrapper = styled.div<{ isOpen?: boolean }>`
  display: flex;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
`;
const Links = styled.div<{ isOpen: boolean }>`
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

const Link = styled.a`
  color: #fff;
  text-decoration: none;
  font-size: ${({ theme }) => theme.fontSize.sm};
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  z-index: 800;
  transition: all 0.3s ease-in-out;
  backdrop-filter: blur(5px);
`;

export { Container, Button, Wrapper, Links, Link, Overlay };
