import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Name = styled.div`
  font-weight: 600;
  color: ${({ theme }) => theme.colors.gray[50]};
`;

export const Title = styled.div`
  color: ${({ theme }) => theme.colors.gray[100]};
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-weight: 400;
`;

export const Comment = styled.div`
  margin-top: 0.5rem;
  font-weight: 400;
  line-height: 1.5rem;
  color: ${({ theme }) => theme.colors.gray[200]};
  font-size: ${({ theme }) => theme.fontSize.sm};
`;

export const Details = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Image = styled.img`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  object-fit: contain;
  object-position: center;
`;
