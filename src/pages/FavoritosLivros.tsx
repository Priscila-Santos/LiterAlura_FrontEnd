import { useEffect, useState } from "react";
import { api } from "../services/api";
import type { Livro } from "../types/livro";

export function FavoritosLivros() {
  const [livros, setLivros] = useState<Livro[]>([]);

  useEffect(() => {
    carregarFavoritos();
  }, []);

  const carregarFavoritos = async () => {
    try {
      const res = await api.get("/favoritos/livros");
      console.log(res.data); // 👈 veja como está vindo
      if (Array.isArray(res.data)) setLivros(res.data);
    } catch (error) {
      console.error("Erro ao carregar favoritos:", error);
    }
  };

  const removerFavorito = async (id: number) => {
    try {
      await api.delete(`/favoritos/livro/${id}`);
      setLivros((prev) => prev.filter((livro) => livro.id !== id));
    } catch (error) {
      console.error("Erro ao remover favorito:", error);
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-6 font-inknut">
      <h1 className="text-3xl font-bold mb-8 text-center">Meus Livros Favoritos</h1>
      {livros.map((livro) => (
        <div key={livro.id} className="bg-white p-6 mb-6 rounded shadow">
          <div className="flex flex-col md:flex-row gap-6">
            <img
              src={livro.formats?.["image/jpeg"] || "/logo.png"}
              alt={livro.titulo}
              className="w-40 h-60 object-cover"
            />
            <div className="flex-1">
              <h2 className="text-xl font-bold">{livro.titulo}</h2>
              <p className="text-md">
                {livro.autores?.[0]?.nome || "Autor Desconhecido"}
              </p>
              <p className="text-sm mb-4">
                Idioma: {livro.idioma} | Downloads: {livro.downloads}
              </p>
              <strong>Resumo:</strong>
              <p className="text-sm mt-2 whitespace-pre-wrap">
                {livro.resumo || "Resumo não disponível."}
              </p>
              <button
                onClick={() => removerFavorito(livro.id)}
                className="mt-4 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
              >
                Remover dos Favoritos ✖
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
