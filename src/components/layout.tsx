import styled from "styled-components";

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  min-height: 100vh;
  max-width: 1200px;
  border: 1px solid ${({ theme }) => theme.colors.gray[500]};
  background: ${({ theme }) => theme.colors.gray[800]};
  padding: 10rem 5rem 5rem 5rem;

  @media (max-width: 900px) {
    padding: 0rem;
  }
`;

export default Layout;
