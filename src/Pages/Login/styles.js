import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 350px;
  justify-content: center;
  align-items: center;
  margin: 50px;
  background-color: var(--gray4);

  form {
    display: flex;
    min-width: 350px;
    flex-direction: column;
    width: 40%;
    background: var(--gray3);
    padding: 2rem;
    align-items: center;
    border-radius: 4px;
    h1 {
      font-size: 20px;
    }
    span {
      margin-top: 20px;
      font-size: 12px;
      color: var(--gray1);
    }
    div {
      margin-top: 5px;
      width: 100%;
    }
    button {
      margin-top: 40px;
      width: 100%;
    }
  }
`;
