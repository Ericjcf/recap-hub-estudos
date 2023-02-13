import React from "react";
import { Redirect, useHistory } from "react-router-dom";
import Cards from "../../Components/Cards";
import Button from "../../Components/Button";
import Modal from "../../Components/Modal";
import ModalEdit from "../../Components/ModalEdit";
import { useState } from "react";
import { Container, Topo, Conteudo, Meio } from "./styles";
import { toast } from "react-toastify";
import api from "../../Services/api";

export default function Dashboard({ autenticado, setAutenticado }) {
  const [modalVisible, setModalVisible] = useState(false);
  const fechaModal = () => setModalVisible(false);
  const [modalEditVisible, setModalEditVisible] = useState(false);
  const fechaModalEdit = () => setModalEditVisible(false);
  const [idEdit, setIdEdit] = useState({});
  const history = useHistory();
  const token = JSON.parse(localStorage.getItem("@kenzieHub:token"));

  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("@kenzieHub:user") || {})
  );

  function editModal(id) {
    return setModalEditVisible(true), setIdEdit(id);
  }

  function deslogar() {
    localStorage.clear();
    setUser({});
    setAutenticado(false);
    history.push("/");
  }

  const deletarTech = (id) => {
    api
      .delete(`/users/techs/${id}`, {
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
              toast.success("🤓 Tech removida com sucesso!!"),
              console.log(
                "modalDelete: Resposta do get techs: ",
                response.data
              ),
              setUser(response.data)
            )
          );
        console.log("dashboard: tecnologia deletada");
      })
      .catch(
        (err) => console.log(err),
        toast.error("🫤 Tech removida com sucesso!!")
      );
  };

  if (autenticado === false) {
    return <Redirect to="/" />;
  }

  return (
    <Container>
      <Topo>
        <h1>HUB de estudos</h1>
        <Button colorSchema="cinza" tipo="voltar" onClick={deslogar}>
          Sair
        </Button>
      </Topo>
      <hr />

      <Meio>
        <p>{user.name}</p>
        <span>{user.course_module}</span>
      </Meio>
      <hr />

      <Meio>
        <p>Tecnologias</p>
        <Button
          colorSchema="cinza"
          tipo="voltar"
          onClick={() => setModalVisible(true)}
        >
          Adicionar
        </Button>
      </Meio>

      <Conteudo>
        {user.techs.length < 1 ? (
          <p>
            Aqui me parece meio vazio, adicione uma tecnologia para estudar{" "}
          </p>
        ) : (
          user.techs.map((techs) => (
            <Cards
              deletarTech={deletarTech}
              editModal={editModal}
              key={techs.id}
              id={techs.id}
              title={techs.title}
              status={techs.status}
            />
          ))
        )}
        {modalVisible ? (
          <Modal user={user} setUser={setUser} fechaModal={fechaModal} />
        ) : null}
        {modalEditVisible ? (
          <ModalEdit
            idEdit={idEdit}
            user={user}
            setUser={setUser}
            fechaModalEdit={fechaModalEdit}
          />
        ) : null}
      </Conteudo>
    </Container>
  );
}
