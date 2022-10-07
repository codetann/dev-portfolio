import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    font-family: ui-sans-serif, system-ui, -apple-system, "system-ui", "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${({ theme }) => theme.colors.black};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    width:100%;
    overflow-x: hidden;

  }

  main {
    color: ${({ theme }) => theme.colors.gray[800]};
  }

  h1, h2, h3, h4, h5, h6 {
    color: ${({ theme }) => theme.colors.gray[50]};
  }

  h1 {
    font-size: ${({ theme }) => theme.fontSize.xl};
  }

  h2 {
    font-size: ${({ theme }) => theme.fontSize.lg};
  }

  p {
    color: ${({ theme }) => theme.colors.gray[200]};
    font-size: ${({ theme }) => theme.fontSize.sm};
  }

  input {
    color: ${({ theme }) => theme.colors.gray[50]};
    padding: .7rem 1rem;
    border: 1px solid ${({ theme }) => theme.colors.gray[400]};
    border-radius: 0.5rem;
    background-color:  ${({ theme }) => theme.colors.gray[700]};
    font-size: ${({ theme }) => theme.fontSize.sm};
    width: 100% ;



    &::placeholder {
      color: ${({ theme }) => theme.colors.gray[200]};
    }
  }

  button {
    color: #DDDDDE;
    background-color: ${({ theme }) => theme.colors.gray[400]};
    font-size: ${({ theme }) => theme.fontSize.sm};
    font-weight: 600 ;
    padding: .7rem .9rem;
    border: 1px solid ${({ theme }) => theme.colors.gray[400]};
    border-radius: 0.5rem;
    line-height: 1;

  }
`;
