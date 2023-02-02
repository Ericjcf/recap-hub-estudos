import React from "react";
import { Container, InputContainer } from "./styles";

export default function Input({ register, name, label, ...rest }) {
  return (
    <Container>
      {label === "" ? null : (
        <div>
          {label}
          {/* <span>Aviso de erro!!</span> */}
        </div>
      )}
      <InputContainer>
        <input {...register(name)} {...rest} />
      </InputContainer>
    </Container>
  );
}
