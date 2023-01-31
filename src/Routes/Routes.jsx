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
  }, [autenticado]);
  return (
    <Switch>
      <Route autenticado={autenticado} exact path="/">
        <Login />
      </Route>
      <Route
        autenticado={autenticado}
        setAutenticado={setAutenticado}
        path="/cadastro"
      >
        <Cadastro />
      </Route>
      <Route
        autenticado={autenticado}
        setAutenticado={setAutenticado}
        path="/dashboard"
      >
        <Dashboard />
      </Route>
    </Switch>
  );
}
