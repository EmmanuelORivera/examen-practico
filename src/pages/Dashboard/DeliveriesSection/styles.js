import styled from "styled-components";

export const Input = styled.input`
  border-radius: 8px;
  padding: 1em;
  border: 1px solid ${({ theme }) => theme.colors.palette.gray["800"]};
  outline: none;
  max-width: 22rem;
  margin-bottom: 2em;
`;
