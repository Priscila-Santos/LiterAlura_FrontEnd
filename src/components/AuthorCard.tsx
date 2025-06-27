import type { Autor } from "../types/livro";

export function AuthorCard({ autor }: { autor: Autor }) {
  return (
    <div className="border p-4 rounded-lg shadow-md bg-white">
      <h2 className="text-lg font-semibold">{autor.nome}</h2>
      <p>
        {autor.anoNascimento} – {autor.anoFalecimento ?? "?"}
      </p>
    </div>
  );
}
