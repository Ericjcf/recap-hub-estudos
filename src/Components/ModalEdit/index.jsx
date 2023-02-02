import Button from "../Button";
import Input from "../Input";
import Select from "../Select";
import { FiX } from "react-icons/fi";
import { ModalTotal, Container, ContainerTopo } from "./styles";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../Services/api";

const ModalEdit = ({ user, idEdit, setUser, fechaModalEdit }) => {
  const token = JSON.parse(localStorage.getItem("@kenzieHub:token"));

  const formSchema = yup.object().shape({
    status: yup.string().required("Informe o Status da atividade"),
  });

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onEditFunction = (data) => {
    // const data = { status: "Avançado" };
    console.log("modal: data enviado: ", data);
    api
      .put(`/users/techs/${idEdit}`, data, {
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
              console.log("modalEdit: Resposta do get techs: ", response.data),
              setUser(response.data)
            )
          );
      })
      .catch((err) => console.log("erro ao atulizar o status da tecnologia"));
    fechaModalEdit();
  };

  return (
    <ModalTotal>
      <ContainerTopo>
        <h2>Alterar status da tecnologia</h2>
        <Button onClick={fechaModalEdit} tipo="edicao" colorSchema="">
          <FiX />
        </Button>
      </ContainerTopo>
      <Container>
        <form onSubmit={handleSubmit(onEditFunction)}>
          <Select
            register={register}
            name="status"
            label="Nível de conhecimento"
          >
            <option>Iniciante</option>
            <option>Intermediário</option>
            <option>Avançado</option>
          </Select>
          <Button type="submit">Atualizar</Button>
        </form>
      </Container>
    </ModalTotal>
  );
};
export default ModalEdit;
