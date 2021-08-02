import { css, keyframes, styled } from "solid-styled-components";

export const Container = styled("div")`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0.3rem 0;
  font-size: 14px;
`;

export const TypeLabel = styled("span")`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const TypeValue = styled("b")`
  margin-left: 3px;
`;

export const SwitchContainer = styled("button")`
  background-color: ${(props) =>
    props.active
      ? props.theme.colors.fieldBorder
      : props.theme.colors.secondary};
  transition: background-color 350ms;
  width: 56px;
  height: 28px;
  border-radius: 14px;
  display: flex;
  align-items: center;
  cursor: pointer;
  border: 0;
`;

export const SwitchIndicator = styled("div")`
  background-color: ${({ theme }) => theme.colors.primary};
  width: 20px;
  height: 20px;
  border-radius: 14px;
  animation-duration: 0.25s;
  animation-timing-function: linear;
`;
