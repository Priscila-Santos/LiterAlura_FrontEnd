import { useEffect, useState } from "react";
import { api } from "../services/api";
import type { Livro, Autor } from "../types/livro";
import { BookCard } from "../components/BookCard";
import { AuthorCard } from "../components/AuthorCard";

export function Favorites() {
  const [livros, setLivros] = useState<Livro[]>([]);
  const [autores, setAutores] = useState<Autor[]>([]);

  useEffect(() => {
    api.get("/favoritos/livros").then(res => setLivros(res.data));
    api.get("/favoritos/autores").then(res => setAutores(res.data));
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Favoritos</h1>
      <h2 className="text-xl mt-4">Livros</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {livros.map(l => <BookCard key={l.id} livro={l} />)}
      </div>
      <h2 className="text-xl mt-6">Autores</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {autores.map((a, i) => <AuthorCard key={i} autor={a} />)}
      </div>
    </div>
  );
}
