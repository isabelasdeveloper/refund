import { BrowserRouter } from "react-router";
//import { AuthRoutes } from "./AuthRoutes";
import { UserRoutes } from "./UserRoutes";

//Essas são as diferentes rotas que podem ser acessadas por um usuário.

export function Routes() {
  return (
    <BrowserRouter>
      {/* <AuthRoutes /> */}
      <UserRoutes />
    </BrowserRouter>
  );
}
