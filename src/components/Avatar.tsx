import styled from "styled-components";

export const Avatar = styled.img`
  width: 4.5rem;
  height: 4.5rem;
  border-radius: 50%;
  object-fit: contain;
  position: relative;
  // box shadow ring
  box-shadow: 0 0 0 6px ${({ theme }) => theme.colors.gray[500]};
`;
