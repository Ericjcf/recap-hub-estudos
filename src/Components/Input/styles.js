import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  div {
    display: flex;
    flex-direction: row;
    font-size: 14px;
  }
`;
export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 12px;
  border-radius: 4px;
  border: none;
  background: var(--gray2);
  color: var(--gray0);

  input {
    background: transparent;
    flex: 1;
    border: none;

    &::placeholder {
      color: var(--gray1);
      font-size: 12px;
    }
  }
`;
