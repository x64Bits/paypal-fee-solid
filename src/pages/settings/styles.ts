import { css, styled } from "solid-styled-components";

export const ButtonContainer = styled("div")`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 1rem;
`;

export const ButtonBack = styled("button")`
  border: 0;
  background-color: ${({ theme }) => theme.colors.fieldBorder};
  padding: 0.7rem 2.5rem;
  color: ${({ theme }) => theme.colors.primary};
  border-radius: 8px;
  font-size: 1rem;
  border: 2px solid ${({ theme }) => theme.colors.bg};
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const buttonStyle = css`
  margin-right: 0.3rem;
`;
