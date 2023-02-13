import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  div {
    display: flex;
    flex-direction: row;
    font-size: 12px;
  }
`;
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px;
  border-radius: 4px;
  border: none;
  background: var(--gray2);
  color: var(--gray0);

  input {
    margin-top: 5px;
    background: none;
    flex: 1;
    border: none;

    &::placeholder {
      color: var(--gray1);
      font-size: 13px;
      font-weight: 600;
    }
  }
`;
