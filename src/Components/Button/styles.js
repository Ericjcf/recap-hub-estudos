import styled from "styled-components";

export const Container = styled.button`
  background-color: ${(props) =>
    props.colorSchema === "preto"
      ? "#121214"
      : props.colorSchema === "cinza"
      ? "#343B41"
      : "#FF577F"};
  width: ${(props) =>
    props.tipo === "voltar"
      ? "100px"
      : props.tipo === "edicao"
      ? "30px"
      : "100%"};
  height: 40px;
  border: none;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 500;
  color: var(--gray0);

  :hover {
    opacity: 0.8;
  }

  @media (min-width: 700px) {
    font-size: 16px;
  }
`;
