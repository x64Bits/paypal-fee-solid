import { styled } from "solid-styled-components";

const Hr = styled("hr")`
  border: 0;
  border-top-width: 1px;
  border-top-style: solid;
  border-top-color: ${({ theme }) => theme.colors.separator};
  margin: 0.45rem 0;
`;

const Separator = () => <Hr />;

export default Separator;
