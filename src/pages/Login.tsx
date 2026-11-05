import { useState } from "react";

import { Button } from "../components/Button";
import { Input } from "../components/Input";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  function onSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(email, password);
  }

  return (
    <form onSubmit={onSubmit} className="w-full flex flex-col gap-8">
      <Input
        required
        legend="E-mail"
        type="email"
        placeholder="nome@email.com"
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        required
        legend="Senha"
        type="password"
        placeholder=""
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button type="submit" isLoading={loading}>
        Entrar
      </Button>
      <a
        href="/register"
        className="text-sm underline 
        text-gray-200 mt-5 mb-4 
        text-center hover:text-green-800
        transition ease-linear"
      >
        Não tem uma conta?
      </a>
    </form>
  );
}
