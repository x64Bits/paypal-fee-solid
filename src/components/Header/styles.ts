import { styled } from "solid-styled-components";

export const HeaderContainer = styled("div")`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const BrandContainer = styled("div")`
  display: flex;
  align-items: center;
`;

export const BrandLogo: any = styled("img")`
  width: auto;
  height: 40px;
`;

export const PayPalImg: any = styled("img")`
  width: auto;
  height: 30px;
  margin-left: 10px;
`;

export const SettingsButton = styled("button")`
  background-color: transparent;
  border-width: 0;
  cursor: pointer;
`;
