import { Routes, Route } from "react-router";
//Páginas
import { AuthLayout } from "../layouts/AuthLayout";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { Error404 } from "../pages/Error404";

//Essas são as telas de autenticação, como login, cadastro e erro.

export function AuthRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AuthLayout />}>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>

      <Route path="*" element={<Error404 />} />
    </Routes>
  );
}
