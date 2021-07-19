import { styled } from "solid-styled-components";

const isDev = !import.meta.env.PROD;

export const Container = styled("main")`
  background-color: ${({ theme }) => theme.colors.bg};
  font-family: "Roboto", "Helvetica Neue", Helvetica, sans-serif, Arial !important;
  min-width: 380px;
  min-height: 390px;
  max-width: 380px;
  max-height: 450px;
  color: ${({ theme }) => theme.colors.primary};
  margin: 0 auto;
  padding: 1.25rem;
  border: ${isDev ? "3px dotted " : "0"}
    ${({ theme }) => theme.colors.secondary};
  border-radius: ${isDev ? "1rem" : "0"};
`;
