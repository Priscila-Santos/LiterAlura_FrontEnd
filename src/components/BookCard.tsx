// import type { Livro } from "../types/livro";

// interface Props {
//   livro: Livro;
//   onFavorite?: () => void;
// }

// export function BookCard({ livro, onFavorite }: Props) {
//   const imagem = livro.formats?.["image/jpeg"];

//   return (
//     <div className="border p-4 rounded-lg shadow-md bg-white">
//       {imagem && (
//         <img
//           src={imagem}
//           alt={livro.titulo}
//           className="w-full h-60 object-cover rounded mb-2"
//         />
//       )}
//       <h2 className="text-xl font-bold">{livro.titulo}</h2>
//       <p><strong>Idioma:</strong> {livro.idioma}</p>
//       <p><strong>Downloads:</strong> {livro.downloads}</p>
//       <div>
//         <strong>Autores:</strong>
//         <ul className="ml-4 list-disc">
//           {livro.autores?.map((a, i) => (
//           <li key={i}>
//             {a.nome} ({a.anoNascimento} – {a.anoFalecimento})
//           </li>
//         ))}

//         </ul>
//       </div>
//       {onFavorite && (
//         <button
//           onClick={onFavorite}
//           className="mt-2 bg-blue-600 text-white px-3 py-1 rounded"
//         >
//           Favoritar
//         </button>
//       )}
//     </div>
//   );
// }
import type { Livro } from "../types/livro";

interface Props {
  livro: Livro;
  onFavorite?: () => void;
}

export function BookCard({ livro, onFavorite }: Props) {
  const imagem = livro.formats?.["image/jpeg"];

  //const autor = livro.autores?.[0]?.nome ?? "Autor Desconhecido";

  return (
    <div className="bg-white p-3 rounded-lg shadow flex flex-col items-center">
      <h2 className="text-base font-semibold mt-2">{livro.titulo}</h2>
      <p className="text-sm text-gray-700">{livro.autores?.[0]?.nome || "Autor Desconhecido"}</p>
      {imagem ? (
        <img src={imagem} alt={livro.titulo} className="w-40 h-60 object-cover rounded" />
      ) : (
        <div className="w-40 h-60 bg-gray-300 rounded" />
      )}
      {onFavorite && (
        <button
          onClick={onFavorite}
          className="mt-3 bg-[#6e1f1f] text-white px-4 py-1 rounded shadow hover:bg-[#841f1f]"
        >
          Favoritar♡
        </button>
      )}
    </div>
  );
}
