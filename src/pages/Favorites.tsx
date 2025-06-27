// import { useEffect, useState } from "react";
// import { api } from "../services/api";
// import type { Livro, Autor } from "../types/livro";
// import { BookCard } from "../components/BookCard";
// import { AuthorCard } from "../components/AuthorCard";

// export function Favorites() {
//   const [livros, setLivros] = useState<Livro[]>([]);
//   const [autores, setAutores] = useState<Autor[]>([]);

//   useEffect(() => {
//   api.get("/favoritos/livros").then(res => {
//     console.log("Livros favoritos:", res.data);
//     setLivros(res.data);
//   });

//   api.get("/favoritos/autores").then(res => {
//     console.log("Autores favoritos:", res.data);
//     setAutores(res.data);
//   });
// }, []);


//   return (
//     <div className="p-4">
//       <h1 className="text-2xl font-bold mb-4">Favoritos</h1>
//       <h2 className="text-xl mt-4">Livros</h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//         {livros.map(l => <BookCard key={l.id} livro={l} />)}
//       </div>
//       <h2 className="text-xl mt-6">Autores</h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//         {autores.map((a, i) => <AuthorCard key={i} autor={a} />)}
//       </div>
//     </div>
//   );
// }
import { useEffect, useState } from "react";
import { api } from "../services/api";
import type { Livro, Autor } from "../types/livro";
import { getResumoFromPlainText } from "../utils/getResumo";

export function Favorites() {
  const [livros, setLivros] = useState<Livro[]>([]);
  const [autores, setAutores] = useState<Autor[]>([]);
  const [resumos, setResumos] = useState<{ [id: number]: string }>({});




  useEffect(() => {
    api.get("/favoritos/livros").then(res => {
      console.log("Livros favoritos:", res.data);
      if (Array.isArray(res.data)) setLivros(res.data);

      res.data.forEach(async (livro: Livro) => {
  const url = livro.formats?.["text/plain; charset=utf-8"];
  if (url) {
    const resumo = await getResumoFromPlainText(url);
    setResumos(prev => ({ ...prev, [livro.id]: resumo }));
  }
});

    });

    api.get("/favoritos/autores").then(res => {
      console.log("Autores favoritos:", res.data);
      if (Array.isArray(res.data)) setAutores(res.data);
    });
  }, []);

  return (
    <div className="max-w-5xl mx-auto p-6 font-inknut">
      <h1 className="text-3xl font-bold mb-8 text-center">Meus Livros Favoritos</h1>

      {livros.map((livro, i) => (
        <div key={i} className="bg-white p-6 mb-6 rounded shadow">
          <div className="flex flex-col md:flex-row gap-6">
            <img
              src={livro.formats?.["image/jpeg"] || "/logo.png"}
              alt={livro.titulo}
              className="w-40 h-60 object-cover"
            />
            <div>
              <h2 className="text-xl font-bold">{livro.titulo}</h2>
              <p className="text-md mb-2">{livro.autores?.[0]?.nome || "Autor Desconhecido"}</p>
              <p className="text-sm mb-4">Idioma: {livro.idioma} | Downloads: {livro.downloads}</p>
              <div>
                <strong>Summary:</strong>
                <p className="text-sm mt-1 whitespace-pre-wrap">
  {resumos[livro.id] || "Carregando resumo..."}
</p>

              </div>
            </div>
          </div>
        </div>
      ))}

      <h1 className="text-3xl font-bold mb-8 mt-12 text-center">Meus Autores Favoritos</h1>

      {autores.map((autor, i) => (
        <div key={i} className="bg-white p-6 mb-6 rounded shadow">
          <div className="flex flex-col md:flex-row gap-6">
            <img
              src="/logo.png"
              alt="Autor Favorito"
              className="w-40 h-60 object-cover"
            />
            <div>
              <h2 className="text-xl font-bold">{autor.nome}</h2>
              <p className="text-sm mb-4">Nascimento: {autor.anoNascimento} | Falecimento: {autor.anoFalecimento ?? "?"}</p>
              <div>
                <strong>Summary:</strong>
                <p className="text-sm mt-1">
                  "Pride and Prejudice" by Jane Austen is a classic novel written in the early 19th century...
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
