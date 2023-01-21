import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  gap: 5rem;

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 1rem;
  }
`;

export const ContainerColumn = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  @media (max-width: 900px) {
    width: 100%;
  }
`;

export const Articles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5rem;
  width: 70%;

  @media (max-width: 900px) {
    width: 100%;
  }
`;
