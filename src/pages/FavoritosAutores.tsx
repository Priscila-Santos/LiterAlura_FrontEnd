import { useEffect, useState } from "react";
import { api } from "../services/api";
import type { Autor } from "../types/livro";

export function FavoritosAutores() {
  const [autores, setAutores] = useState<Autor[]>([]);

  useEffect(() => {
    carregarAutores();
  }, []);

  const carregarAutores = async () => {
    const res = await api.get("/favoritos/autores");
    if (Array.isArray(res.data)) setAutores(res.data);
  };

  const removerAutor = async (id: number) => {
    await api.delete(`/favoritos/autor/${id}`);
    setAutores((prev) => prev.filter((autor) => autor.id !== id));
  };

  return (
    <div className="max-w-5xl mx-auto p-6 font-inknut">
      <h1 className="text-3xl font-bold mb-8 text-center">Meus Autores Favoritos</h1>
      {autores.map((autor, i) => (
        <div key={i} className="flex items-center gap-6 bg-white p-4 rounded shadow mb-4">
          <img src="/logo.png" alt="Autor" className="w-24 h-32 object-cover" />
          <div className="flex-1">
            <h2 className="text-xl font-bold"> {autor.nome}</h2>
            <p className="text-sm">Data de Nascimento: {autor.anoNascimento} | Data de Falecimento: {autor.anoFalecimento ?? "?"}</p>
            <button
              onClick={() => removerAutor(autor.id)}
              className="mt-2 bg-red-600 text-white px-4 py-1 rounded hover:bg-red-700"
            >
              Remover dos Favoritos ✖
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
