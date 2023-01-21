import styled from "styled-components";

const Container = styled.div`
  padding: 1rem;
  border: 1px solid ${({ theme }) => theme.colors.gray[600]};
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1rem;

  @media (max-width: 900px) {
    width: 100%;
  }
`;

const Info = styled.div`
  display: flex;
  gap: 0.7rem;
  align-items: center;
`;

const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.gray[200]};

  /* background-color: ${({ theme }) => theme.colors.gray[400]}; */
`;

const Title = styled.p`
  color: ${({ theme }) => theme.colors.gray[50]};
  font-size: ${({ theme }) => theme.fontSize.sm}; ;
`;

export { Container, Info, Icon, Title };
