import { Routes, Route } from "react-router";
import { Refund } from "../pages/Refund";
import { Error404 } from "../pages/Error404";
import { AppLayout } from "../layouts/AppLayout";
import { Confirm } from "../pages/Confirm";

//Essas são as rotas de um usuário, a tela padrão ao logar no sistema.

export function UserRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route path="/" element={<Refund />} />
        <Route path="/confirm" element={<Confirm />} />
      </Route>
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
}
