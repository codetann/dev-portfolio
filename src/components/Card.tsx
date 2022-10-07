import styled from "styled-components";

const CardContainer = styled.div`
  padding: 1rem;
  border: 1px solid ${({ theme }) => theme.colors.gray[600]};
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (max-width: 900px) {
    width: 100%;
  }
`;

const CardInfo = styled.div`
  display: flex;
  gap: 0.7rem;
  align-items: center;
`;

const CardIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.gray[200]};

  /* background-color: ${({ theme }) => theme.colors.gray[400]}; */
`;

const CardTitle = styled.p`
  color: ${({ theme }) => theme.colors.gray[50]};
  font-size: ${({ theme }) => theme.fontSize.sm}; ;
`;

export function Card({ icon, title, children }: any) {
  return (
    <CardContainer>
      <CardInfo>
        <CardIcon>{icon}</CardIcon>
        <CardTitle>{title}</CardTitle>
      </CardInfo>
      {children}
    </CardContainer>
  );
}
