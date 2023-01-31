import React from "react";
import { Container } from "./styles";
import Button from "../Button";
import { FiEdit, FiTrash2 } from "react-icons/fi";

export default function Cards({ id, title, status, deletarTech, editModal }) {
  return (
    <Container>
      <span>{title}</span>
      <div>
        <span>{status}</span>
        <Button onClick={() => editModal(id)} tipo="edicao" colorSchema="cinza">
          <FiEdit />
        </Button>
        <Button
          // deletarTech={deletarTech}
          // id={id}
          onClick={() => deletarTech(id)}
          tipo="edicao"
          colorSchema="cinza"
        >
          <FiTrash2 />
        </Button>
      </div>
    </Container>
  );
}
