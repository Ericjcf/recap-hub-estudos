import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  /* background: ${(props) => (props.color === "cinza" ? "#343B41" : "red")}; */
  label {
    font-size: 12px;
  }
  select {
    background-color: ${(props) =>
      props.color === "cinza" ? "#343B41" : "#212529"};
    margin-top: 10px;
    padding: 5px;
    height: 40px;
    border: none;
    border-radius: 4px;

    color: var(--gray1);
    option {
      border-radius: 4px;
    }
    :hover {
      opacity: 0.9;
    }
  }
`;
