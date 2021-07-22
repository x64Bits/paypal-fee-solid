import { styled } from "solid-styled-components";

export const OutputContainer = styled("div")`
  margin-top: 0.75rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  text-align: center;
  position: relative;
`;

export const OutputLabel = styled("span")`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.secondary};
  user-select: none;
`;

export const OutputValueContainer = styled("div")`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 80px;
`;

export const OutputValue = styled("button")`
  font-size: 3.75rem;
  font-weight: 800;
  background-color: transparent;
  border-width: 0;
  color: ${({ theme }) => theme.colors.primary};
  margin: 0.3rem 0;
  cursor: pointer;
  padding: 0 0.55rem;
  height: 70px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.copy};
    border-radius: 5px;
  }
`;

export const OutputDescription = styled("p")`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.secondary};
`;

export const OutputCommission = styled("b")`
  color: ${({ theme }) => theme.colors.primary};
  margin-right: 2px;
`;

export const PrevResult = styled("div")`
  user-select: none;
`;

export const CurrentResult = styled("div")`
  user-select: none;
`;

export const ToastContainer = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  top: 0;
  background-color: red;
`;

export const CopyToast = styled("div")`
  position: absolute;
  background-color: ${({ theme }) => theme.colors.fieldBg};
  color: ${({ theme }) => theme.colors.primary};
  padding: 1rem 2rem;
  border-radius: 12px;
  animation-duration: 2s;
  animation-timing-function: ease-in-out;
  animation-fill-mode: backwards;
  display: flex;
  align-self: center;
`;
