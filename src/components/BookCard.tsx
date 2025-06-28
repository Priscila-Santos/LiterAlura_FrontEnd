import type { Livro } from "../types/livro";

interface Props {
  livro: Livro;
  onFavorite?: () => void;
}

export function BookCard({ livro, onFavorite }: Props) {
  const imagem = livro.formats?.["image/jpeg"];
  const autorPrincipal = livro.autores?.[0]?.nome ?? "Autor Desconhecido";
  const tituloLivro = livro.titulo ?? "Título Desconhecido";

  return (
    <div className="flex flex-col bg-white p-4 rounded-lg shadow-md items-center justify-between w-full h-[420px] max-w-xs mx-auto">
      {imagem ? (
        <img
          src={imagem}
          alt={tituloLivro}
          className="w-full h-60 object-cover rounded"
        />
      ) : (
        <div className="w-full h-60 bg-gray-300 rounded" />
      )}

      <div className="mt-4 text-center flex flex-col flex-1 justify-between w-full h-[420px] max-w-xs mx-auto">
        <h2 className="text-base font-semibold line-clamp-2 break-words">{tituloLivro}</h2>
        <p className="text-sm text-gray-700 mb-4">{autorPrincipal}</p>

        {onFavorite && (
          <button
            onClick={onFavorite}
            className="bg-[#6e1f1f] text-white px-4 py-2 rounded shadow hover:bg-[#841f1f] w-full"
          >
            Favoritar ❤️
          </button>
        )}
      </div>
    </div>
  );
}
