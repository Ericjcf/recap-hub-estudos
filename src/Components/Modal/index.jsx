import Button from "../Button";
import Input from "../Input";
import Select from "../Select";
import { FiX } from "react-icons/fi";
import { ModalTotal, Container, ContainerTopo } from "./styles";
import { set, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../Services/api";

const Modal = ({ user, setUser, children, fechaModal }) => {
  const token = JSON.parse(localStorage.getItem("@kenzieHub:token"));
  console.log("modal:token ", token);

  const formSchema = yup.object().shape({
    title: yup.string().required("Informe a tecnologia"),
    status: yup.string().required("Informe o Status da atividade"),
  });

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onsubmitFunction = ({ title, status }) => {
    const data = { title, status: "Iniciante" };
    console.log("modal: data enviado: ", data);
    api
      .post(`/users/techs`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      })
      .then(() => {
        api
          .get(`/users/${user.id}`)
          .then((response) =>
            localStorage.setItem(
              "@kenzieHub:user",
              JSON.stringify(response.data),
              console.log("modal: Resposta do get techs: ", response.data),
              setUser(response.data)
            )
          );
      })
      .catch((err) => console.log("erro ao adicionar a tecnologia"));
    fechaModal();
  };

  return (
    <ModalTotal>
      <ContainerTopo>
        <h2>Adicionar nova tecnologia</h2>
        <Button onClick={fechaModal} tipo="edicao" colorSchema="">
          <FiX />
        </Button>
      </ContainerTopo>
      <Container>
        <form onSubmit={handleSubmit(onsubmitFunction)}>
          <Input
            register={register}
            name="title"
            placeholder="Tecnologia"
            label=""
          ></Input>
          <Select
            color="cinza"
            register={register}
            name="status"
            placeholder="Nível de conhecimento"
            label=""
          >
            <option disabled>Escolha um</option>
            <option>Iniciante</option>
            <option>Intermediário</option>
            <option>Avançado</option>
          </Select>
          <Button type="submit">Salvar</Button>
        </form>
      </Container>
    </ModalTotal>
  );
};
export default Modal;
