import { css, styled } from "solid-styled-components";

export const Container = styled("div")`
  position: absolute;
  height: 100%;
  min-width: 50%;
  background-color: rgba(9, 6, 37, 1);
  top: 0;
  right: 0;
  padding: 1.5rem 1.2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  animation-duration: 300ms;
  animation-timing-function: ease-in;
  animation-name: openDrawer;
`;

export const CloseContainer = styled("div")`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-bottom: 2rem;
  cursor: pointer;
`;

export const DrawerItem = styled("span")`
  font-size: 1.5em;
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 0.2rem 0;

  &:hover {
    opacity: 0.8;
  }
`;

export const DrawerStyle = css`
  margin-right: 0.4rem;
`;

export const OptionsContainer = styled("div")`
  position: absolute;
  top: 0;
  right: 0;
  background-color: ${({ theme }) => theme.colors.modalBg};
  padding: 1rem 0.8rem;
  border-radius: 0.5rem;
  margin-top: 2.1rem;
  z-index: 2;
  color: #fff;
  border: 1px solid ${({ theme }) => theme.colors.modalBorder};
`;
