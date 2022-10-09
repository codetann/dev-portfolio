import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  height: 60vh;
  gap: 1.5rem;
  width: 100%;
  margin-top: -5rem;

  @media (max-width: 900px) {
    padding: 1rem;
    justify-content: start;
    margin-top: 0;
  }

  p {
    max-width: 650px;
    line-height: 1.7rem;
    text-align: left;
    color: #a1a1aa;
    font-size: 16px;
    letter-spacing: normal;
    font-weight: 300;

    @media (max-width: 900px) {
      line-height: 28px;
    }
  }

  h1 {
    max-width: 800px;
    font-weight: 620;
    font-size: ${({ theme }) => theme.fontSize.xl};
    font-size: 48px;
    letter-spacing: -1.2px;

    @media (max-width: 900px) {
      font-size: 32px;
      max-width: 90%;
      letter-spacing: -0.5px;
    }
  }
`;

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  color: #a1a1aa;
  gap: 2rem;
`;
