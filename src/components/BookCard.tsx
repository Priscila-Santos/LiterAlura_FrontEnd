import type { Livro } from "../types/livro";

interface Props {
  livro: Livro;
  onFavorite?: () => void;
}

export function BookCard({ livro, onFavorite }: Props) {
  const imagem = livro.formats?.["image/jpeg"];

  return (
    <div className="border p-4 rounded-lg shadow-md bg-white">
      {imagem && (
        <img
          src={imagem}
          alt={livro.titulo}
          className="w-full h-60 object-cover rounded mb-2"
        />
      )}
      <h2 className="text-xl font-bold">{livro.titulo}</h2>
      <p><strong>Idioma:</strong> {livro.idioma}</p>
      <p><strong>Downloads:</strong> {livro.downloads}</p>
      <div>
        <strong>Autores:</strong>
        <ul className="ml-4 list-disc">
          {livro.autores?.map((a, i) => (
          <li key={i}>
            {a.nome} ({a.anoNascimento} – {a.anoFalecimento})
          </li>
        ))}

        </ul>
      </div>
      {onFavorite && (
        <button
          onClick={onFavorite}
          className="mt-2 bg-blue-600 text-white px-3 py-1 rounded"
        >
          Favoritar
        </button>
      )}
    </div>
  );
}
