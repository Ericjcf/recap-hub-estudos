import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  width: 95%;
  background: var(--gray3);
  border-radius: 3px;
  padding: 10px;
  margin: 5px 0;
  justify-content: space-between;
  align-items: center;
  font-size: 15px;
  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    button {
      margin-left: 10px;
    }
  }
  :hover {
    opacity: 0.7;
  }
`;
