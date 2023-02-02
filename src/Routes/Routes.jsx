import React from "react";
import { Switch, Route } from "react-router-dom";
import Cadastro from "../Pages/Cadastro";
import Login from "../Pages/Login";
import Dashboard from "../Pages/Dashboard";
import { useEffect, useState } from "react";

export default function Routes() {
  const [autenticado, setAutenticado] = useState(false);

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("@kenzieHub:token"));
    if (token) {
      setAutenticado(true);
    }
    console.log("useEffect: token: ", token, "autenticado: ", autenticado);
  }, [autenticado]);

  return (
    <Switch>
      <Route exact path="/">
        <Login autenticado={autenticado} setAutenticado={setAutenticado} />
      </Route>
      <Route path="/cadastro">
        <Cadastro autenticado={autenticado} />
      </Route>
      <Route path="/dashboard">
        <Dashboard autenticado={autenticado} setAutenticado={setAutenticado} />
      </Route>
    </Switch>
  );
}
