import { useState } from "react";

import { Button } from "../components/Button";
import { Input } from "../components/Input";

export function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  function onSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(name, email, password, confirmPassword);
  }

  return (
    <form onSubmit={onSubmit} className="w-full flex flex-col gap-8">
      <Input
        required
        legend="Nome"
        type="text"
        placeholder="Nome completo"
        onChange={(e) => setName(e.target.value)}
      />

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
        placeholder="12345678"
        min={8}
        onChange={(e) => setPassword(e.target.value)}
      />

      <Input
        required
        legend="Confirme a Senha"
        type="password"
        placeholder="12345678"
        min={8}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />

      <Button type="submit" isLoading={loading}>
        Cadastrar-se
      </Button>
      <a
        href="/"
        className="text-sm underline 
        text-gray-200 mt-5 mb-4 
        text-center hover:text-green-800
        transition ease-linear"
      >
        Já possuo uma conta
      </a>
    </form>
  );
}
