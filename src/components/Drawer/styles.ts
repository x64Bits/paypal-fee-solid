import { css, styled } from "solid-styled-components";

export const Container = styled("div")`
  position: absolute;
  height: 100%;
  min-width: 13vw;
  background-color: rgba(9, 6, 37, 1);
  /* backdrop-filter: blur(5px); */
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
  font-size: 1.3em;
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 0.2rem 0;

  &:hover {
    opacity: 0.8;
  }
`;

export const DrawerStyle = css`
  margin-left: 0.4rem;
`;
