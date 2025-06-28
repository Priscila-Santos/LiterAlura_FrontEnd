import { useState } from "react";
import { api } from "../services/api";
import type { LivroDTO, Livro } from "../types/livro";
import { BookCard } from "../components/BookCard";

export function Search() {
  const [busca, setBusca] = useState("");
  const [livros, setLivros] = useState<Livro[]>([]);

  const buscar = async () => {
    const resp = await api.get(`/livros/titulo?titulo=${busca}`);
    const data: LivroDTO[] = resp.data.results;

    // Convertendo LivroDTO → Livro
    const adaptado: Livro[] = data.map((livro) => ({
      id: livro.id,
      titulo: livro.title,
      autores: livro.authors.map((a, index) => ({
        id: index, // gera um id temporário
        nome: a.name,
        anoNascimento: a.birth_year,
        anoFalecimento: a.death_year,
      })),
      idioma: livro.languages?.[0] || "desconhecido",
      downloads: livro.download_count,
      formats: livro.formats,
    }));

    setLivros(adaptado);
  };

  

  return (
    <div className="p-6 text-center">
      <div className="flex justify-center mb-4">
        <img src="/logo.png" alt="Logo" className="h-28" />
      </div>
      <h1 className="text-xl font-semibold mb-2">
        Pesquise por seus Livros e Autores Favoritos
      </h1>
      <div className="flex justify-center mb-4 ita">
        <input
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
          placeholder="Digite o título de um livro ou autor"
          className="border border-yellow-400 px-4 py-2 rounded-l-md w-96"
        />
        <button
          onClick={buscar}
          className="bg-[#CAC448] text-white px-4 py-2 rounded-r-md font-semibold"
        >
          Pesquisar
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-6 px-4">
        {livros.map((livro) => (
          <BookCard
            key={livro.id}
            livro={livro}
            onFavorite={() => {
              const dto: LivroDTO = {
                id: livro.id,
                title: livro.titulo,
                authors: livro.autores.map((a) => ({
  name: a.nome,
  birth_year: a.anoNascimento,
  death_year: a.anoFalecimento,
})),
                languages: [livro.idioma],
                download_count: livro.downloads,
                formats: livro.formats,
              };
              api.post("/favoritos/livro", dto);
              alert("Livro favoritado!");
            }}
          />
        ))}
      </div>
    </div>
  );
}
