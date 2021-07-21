import { JSX } from "solid-js/jsx-runtime";
import { css, styled } from "solid-styled-components";

export const FormGroup = styled("div")`
  display: flex;
  flex-direction: column;
`;

export const Label = styled("label")`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 14px;
`;

export const InputContainer = styled("div")`
  background-color: ${({ theme }) => theme.colors.fieldBg};
  border: 2px solid ${({ theme }) => theme.colors.fieldBorder};
  border-radius: 0.75rem;
  display: flex;
  flex-direction: row;
  padding: 0 0.75rem;
  align-items: center;
  margin-top: 0.75rem;
`;

export const CurrencySymbol = styled("span")`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.currency};
  margin-right: 0.3rem;
`;

export const Field = styled("input")`
  background-color: ${({ theme }) => theme.colors.fieldBg};
  width: 100%;
  padding: 0.5rem 0;
  border: 0;
  font-size: 24px;
  color: ${({ theme }) => theme.colors.primary};
`;

export const ArrowsContainer = styled("div")`
  width: 1.2rem;
  background-color: ${({ theme }) => theme.colors.fieldBorder};
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0.4rem 0;
`;

export const ArrowStyle = css`
  cursor: pointer;

  &:hover {
    opacity: 0.5;
  }
`;
