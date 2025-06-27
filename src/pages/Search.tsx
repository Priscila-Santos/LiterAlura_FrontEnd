// import { useState } from "react";
// import { api } from "../services/api";
// import type { Livro } from "../types/livro";
// import { BookCard } from "../components/BookCard";

// export function Search() {
//   const [busca, setBusca] = useState("");
//   const [livros, setLivros] = useState<Livro[]>([]);

//   const buscar = async () => {
//     const resp = await api.get(`/livros/titulo?titulo=${busca}`);
//     setLivros(resp.data.results);
//   };

//   const favoritar = async (livro: Livro) => {
//     await api.post("/favoritos/livro", livro);
//     alert("Livro favoritado!");
//   };

//   return (
//     <div className="p-4">
//       <h1 className="text-2xl font-bold mb-4">Buscar Livro</h1>
//       <div className="flex gap-2 mb-4">
//         <input
//           value={busca}
//           onChange={(e) => setBusca(e.target.value)}
//           className="border p-2 rounded flex-grow"
//           placeholder="Título ou autor..."
//         />
//         <button onClick={buscar} className="bg-green-600 text-white px-4 py-2 rounded">
//           Buscar
//         </button>
//       </div>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//         {livros.map((l) => (
//           <BookCard key={l.id} livro={l} onFavorite={() => favoritar(l)} />
//         ))}
//       </div>
//     </div>
//   );
// }
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

  return (
    <div className="p-6 text-center">
      <div className="flex justify-center mb-4">
        <img src="/logo.png" alt="Logo" className="h-28" />
      </div>
      <h1 className="text-xl font-semibold mb-2">
        Pesquise por seus Livros e Autores Favoritos
      </h1>
      <div className="flex justify-center mb-4">
        <input
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
          placeholder="Digite o título de um livro ou autor"
          className="border border-gray-300 px-4 py-2 rounded-l-md w-96"
        />
        <button
          onClick={buscar}
          className="bg-[#c7c241] text-white px-4 py-2 rounded-r-md font-semibold"
        >
          Pesquisar
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-6 px-4">
        {livros.map((livro) => (
          <BookCard key={livro.id} livro={livro} onFavorite={() => {
            api.post("/favoritos/livro", livro);
            alert("Livro favoritado!");
          }} />
        ))}
      </div>
    </div>
  );
}
