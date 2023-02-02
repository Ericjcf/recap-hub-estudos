import styled from "styled-components";

export const ModalTotal = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--gray0);
  color: black;
  width: 40%;

  max-width: 350px;

  padding: 20px;
  border-radius: 4px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  justify-content: space-between;
  align-items: center;

  form {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    div {
      margin: 1px;
      border-radius: 3px;
      width: 200px;
      :hover {
        opacity: 0.9;
      }
    }
    input {
      font-size: 12px;
      color: var(--gray0);
    }
    button {
      margin-top: 20px;
    }
  }
`;
export const ContainerTopo = styled.header`
  display: flex;
  flex-direction: row;
  background-color: var(--rosa);
  color: var(--gray0);
  border-radius: 4px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  width: 40%;
  height: 30px;
  padding: 20px;
  justify-content: space-between;
  align-items: center;

  max-width: 350px;
  button {
    font-size: 25px;
  }
`;
