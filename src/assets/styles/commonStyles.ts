import styled from "styled-components";

export const Input = styled.input`
  width: 300px;
  color: black;
  padding: 0.4rem 0.7rem;
  border-radius: 0.4rem;
  border: 1px solid #ccc;
  &:focus-within {
    outline: none;
  }
`;

export const Button = styled.button`
  border: 1px solid #ccc;
  padding: 0.4rem 0.7rem;
  border-radius: 0.4rem;
  cursor: pointer;
  &:hover {
    background-color: #6d779c;
  }
`;
