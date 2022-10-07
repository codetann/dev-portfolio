import styled from "styled-components";

const ArticleContainer = styled.article`
  display: flex;
  position: relative;
  flex-direction: column;
  gap: 1rem;
  transition: all 0.15s ease-in-out;
  cursor: pointer;

  &:before {
    content: "";
    position: absolute;
    /* padding: 2rem; */
    top: 0rem;
    left: 0rem;
    transform: scale(1, 1.3);
    transition: all 0.15s ease-in-out;
    opacity: 0;
    width: 100%;
    height: 100%;
    background: #ffffff30;

    border-radius: 1rem;
  }

  &:hover {
    &:before {
      content: "";
      position: absolute;
      opacity: 0.08;
      /* padding: 2rem; */

      transform: scale(1.08, 1.4);
    }
  }
`;

const ArticleDate = styled.p`
  opacity: 0.7;
  line-height: 1;
  color: ${({ theme }) => theme.colors.gray[200]};
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-weight: 300;
  padding-left: 0.5rem;
  border-left: 2px solid ${({ theme }) => theme.colors.gray[300]};
`;

const ArticleTitle = styled.h2`
  color: ${({ theme }) => theme.colors.gray[50]};
  font-size: ${({ theme }) => theme.fontSize.md};
  font-weight: 500;
`;

const ArticleDescription = styled.p`
  color: ${({ theme }) => theme.colors.gray[200]};
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-weight: 300;
  line-height: 24px;
`;

const ArticleLink = styled.a`
  color: #75b0e1;
  font-size: ${({ theme }) => theme.fontSize.sm};
`;

interface Props {
  title: string;
  description: string;
  date: string;
}

export default function Article({ title, description, date }: Props) {
  return (
    <ArticleContainer>
      <ArticleDate>{date}</ArticleDate>
      <ArticleTitle>{title}</ArticleTitle>
      <ArticleDescription>{description}</ArticleDescription>
      <ArticleLink>Read article</ArticleLink>
    </ArticleContainer>
  );
}
