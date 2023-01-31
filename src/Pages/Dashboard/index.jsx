import React, { useEffect } from "react";
import { Redirect, useHistory } from "react-router-dom";
import Cards from "../../Components/Cards";
import Button from "../../Components/Button";
import Modal from "../../Components/Modal";
import ModalEdit from "../../Components/ModalEdit";
import { useState } from "react";
import { Container, Topo, Conteudo, Meio } from "./styles";
import api from "../../Services/api";

export default function Dashboard({ autenticado, setAutenticado }) {
  const [modalVisible, setModalVisible] = useState(false);
  const fechaModal = () => setModalVisible(false);
  const [modalEditVisible, setModalEditVisible] = useState(false);
  const fechaModalEdit = () => setModalEditVisible(false);
  const [idEdit, setIdEdit] = useState("");
  const history = useHistory();
  const token = JSON.parse(localStorage.getItem("@kenzieHub:token"));

  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("@kenzieHub:user") || {})
  );
  // useEffect(() => {
  //   setUser(JSON.parse(localStorage.getItem("@kenzieHub:user")));
  //   console.log("Dash: User atualizado ", user);
  // }, [modalVisible]);

  function editModal(id) {
    return setModalEditVisible(true), setIdEdit(id);
  }

  function deslogar() {
    history.push("/");
    setAutenticado(false);
    localStorage.clear();
    setUser({});
  }

  const deletarTech = (id) => {
    api
      .delete(`/users/techs/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      })
      .then(() => console.log("dashboard: tecnologia deletada"))
      .catch((err) => console.log(err));
  };

  if (autenticado === false) {
    return <Redirect to="/login" />;
  }

  return (
    <Container>
      <Topo>
        <h1>Kenzie HUB</h1>
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
          <Modal user={user} setUser={setUser} fechaModal={fechaModal}>
            Modal aberto, agora feche!
          </Modal>
        ) : null}
        {modalEditVisible ? (
          <ModalEdit idEdit={idEdit} fechaModalEdit={fechaModalEdit}>
            Modal aberto, agora feche!
          </ModalEdit>
        ) : null}
      </Conteudo>
    </Container>
  );
}
