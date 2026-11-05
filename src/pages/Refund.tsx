import { useState } from "react";
import { useNavigate } from "react-router";

import { CATEGORIES, CATEGORIES_KEYS } from "../utils/categories";

import { Input } from "../components/Input";
import { Select } from "../components/Select";
import { Upload } from "../components/Upload";
import { Button } from "../components/Button";

export function Refund() {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");
  const [file, setFile] = useState<File | null>(null);

  const [loading] = useState(false);

  const navigate = useNavigate();

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    navigate("/confirm", { state: { fromSubmit: true } });
  }

  return (
    <form
      action="submit"
      onSubmit={onSubmit}
      className="bg-gray-500 w-full rounded-xl flex flex-col p-10 gap-6 max-w-2xl lg:max-w-2xl"
    >
      <header>
        <h1 className="text-xl font-bold text-gr  ay-100">
          Solicitação de Reembolso
        </h1>
        <p className="text-sm text-gray-100 mt-2 mb-4">
          Dados da despesa para solicitar reembolso.
        </p>
      </header>

      <Input
        required
        legend="Solicitação"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <div className="flex gap-4">
        <Select
          required
          legend="Categoria"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          {CATEGORIES_KEYS.map((category) => (
            <option key={category} value={category}>
              {CATEGORIES[category].name}
            </option>
          ))}
        </Select>

        <Input
          legend="Valor"
          required
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>

      <Upload
        legend="Comprovante"
        filename={file && file.name}
        onChange={(e) => e.target.files && setFile(e.target.files[0])}
      ></Upload>

      <Button type="submit" isLoading={loading}>
        Enviar
      </Button>
    </form>
  );
}
