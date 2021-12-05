import styled from "styled-components";

export const Container = styled.div`
  margin: 2.75em 0;
`;
export const Title = styled.h1`
  font-size: 1.25rem;
`;

export const SubTitle = styled.h2`
  font-size: 1rem;
  margin: 2em 0;
`;

export const CardsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.31em;
  justify-content: space-between;
`;

export const Input = styled.input`
  border-radius: 8px;
  padding: 1em;
  border: 1px solid ${({ theme }) => theme.colors.palette.gray["800"]};
  outline: none;
  width: 100%;
  margin-bottom: 2em;
`;
