import styled from "styled-components";

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

const Link = styled.a`
  color: #fff;
  text-decoration: none;
  font-size: ${({ theme }) => theme.fontSize.sm};
`;

const Relative = styled.header`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 8rem;
  width: 100%;
  padding: 0 1rem;
  position: absolute;
  top: 0;
  left: 0;
`;

const Sticky = styled.div`
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

export { Relative, Sticky, Overlay, Nav, Link };
