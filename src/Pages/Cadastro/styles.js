import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 350px;
  justify-content: center;
  align-items: center;
  background-color: var(--gray4);
  padding: 50px;

  form {
    display: flex;
    min-width: 350px;
    flex-direction: column;
    width: 40%;
    background: var(--gray3);
    padding: 2rem;
    align-items: center;
    h1 {
      font-size: 20px;
    }
    span {
      margin-top: 20px;
      font-size: 12px;
      color: var(--gray1);
    }
    div {
      margin-top: 10px;
      width: 100%;
    }
    button {
      margin-top: 20px;
      width: 100%;
    }
  }
`;
