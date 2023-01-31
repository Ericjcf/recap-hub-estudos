import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 350px;
  justify-content: center;
  align-items: center;

  hr {
    width: 100vw;
    border: 1px solid var(--gray2);
  }
`;
export const Topo = styled.header`
  display: flex;
  flex-direction: row;
  width: 50%;
  min-width: 350px;
  justify-content: space-between;
  align-items: center;
  margin: 15px 0;
  h1 {
    color: var(--rosa);
  }
`;
export const Meio = styled.section`
  display: flex;
  flex-direction: row;
  width: 50%;
  min-width: 350px;
  justify-content: center;
  align-items: center;
  justify-content: space-between;
  margin: 15px 0;
  span {
    font-size: 13px;
    color: var(--gray1);
  }
`;
export const Conteudo = styled.section`
  display: flex;
  flex: 1;
  flex-direction: column;
  width: 50%;
  min-width: 350px;
  justify-content: center;
  align-items: center;
  background: var(--gray2);
  border-radius: 3px;
  margin: 15px 0;
  padding: 10px;
`;
