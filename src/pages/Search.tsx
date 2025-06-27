import { useState } from "react";
import { api } from "../services/api";
import type { Livro } from "../types/livro";
import { BookCard } from "../components/BookCard";

export function Search() {
  const [busca, setBusca] = useState("");
  const [livros, setLivros] = useState<Livro[]>([]);

  const buscar = async () => {
    const resp = await api.get(`/livros/titulo?titulo=${busca}`);
    setLivros(resp.data.results);
  };

  const favoritar = async (livro: Livro) => {
    await api.post("/favoritos/livro", livro);
    alert("Livro favoritado!");
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Buscar Livro</h1>
      <div className="flex gap-2 mb-4">
        <input
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
          className="border p-2 rounded flex-grow"
          placeholder="Título ou autor..."
        />
        <button onClick={buscar} className="bg-green-600 text-white px-4 py-2 rounded">
          Buscar
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {livros.map((l) => (
          <BookCard key={l.id} livro={l} onFavorite={() => favoritar(l)} />
        ))}
      </div>
    </div>
  );
}
