import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Container } from "./styles";
import Button from "../../Components/Button";
import Input from "../../Components/Input";
import Select from "../../Components/Select";
import api from "../../Services/api";
import { Link, Redirect, useHistory } from "react-router-dom";

export default function Cadastro({ autenticado }) {
  const history = useHistory();
  const formSchema = yup.object().shape({
    email: yup
      .string()
      .email("Formato inválido!")
      .required("Email obrigatório"),
    password: yup
      .string()
      .min(8, "A senha deve ter ao menos 8 dígitos")
      .required("Campo obrigatório"),
    confirm_password: yup
      .string()
      .oneOf([yup.ref("password")], "As senhas estão diferentes")
      .required("Campo obrigatório"),
    name: yup.string().required("Email obrigatório"),
    bio: yup.string().required("Campo obrigatório"),
    contact: yup.string().required("Campo obrigatório"),
    course_module: yup.string().required("Campo obrigatório"),
  });

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(formSchema),
  });

  function logando() {
    return history.push("/");
  }

  const onsubmitFunction = ({
    name,
    email,
    password,
    bio,
    contact,
    course_module,
  }) => {
    console.log("tentando cadastro!!");
    const user = {
      name,
      email,
      password,
      bio: "Lorem",
      contact: "Lorem",
      course_module: "Lorem",
    };

    api
      .post("/users", user)
      .then((response) => {
        console.log("response: ", response.data);
        logando();
      })
      .catch((err) => console.log("erro ao logar"));
  };

  if (autenticado) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Container>
      <form onSubmit={handleSubmit(onsubmitFunction)}>
        <h1>Cadastro</h1>
        <span>Rápido e grátis, vamos lá!</span>

        <Input
          register={register}
          name="email"
          label="Email"
          placeholder="Email"
        ></Input>
        <Input
          register={register}
          name="password"
          type="password"
          label="Senha"
          placeholder="Senha"
        ></Input>
        <Input
          register={register}
          type="password"
          name="confirm_password"
          label="Confirme a senha"
          placeholder="Repita a senha"
        ></Input>
        <Input
          register={register}
          name="name"
          label="Nome"
          placeholder="Nome"
        ></Input>
        <Input
          register={register}
          name="bio"
          label="Bio"
          placeholder="Biografia"
        ></Input>
        <Input
          register={register}
          name="contact"
          label="Contato"
          placeholder="link ou número para contato"
        ></Input>
        <Select
          color="cinza"
          register={register}
          name="course_module"
          label="Selecione o Modulo do curso"
        >
          <option>Primeiro módulo (Introdução ao Frontend)</option>
          <option>Segundo módulo (Frontend Avançado)</option>
          <option>Terceiro módulo (Introdução ao Backend)</option>
          <option>Quarto módulo (Backend Avançado)</option>
        </Select>

        <Button type="submit">Cadastrar</Button>
        <span>
          Já possui uma conta? faça o <Link to="/">Login</Link>
        </span>
      </form>
    </Container>
  );
}

// {
//   "email": "ericjames@kenzie.com.br",
//   "password": "123456",
//   "name": "Eric James",
//   "bio": "Lorem ipsum dolor emet",
//   "contact": "123456789",
//   "course_module": "2o Módulo (Frontend avançado)"
//   }
