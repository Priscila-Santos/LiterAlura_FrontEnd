import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Search } from "./pages/Search";
import { FavoritosLivros } from "./pages/FavoritosLivros";
import { FavoritosAutores } from "./pages/FavoritosAutores";

function App() {
  return (
    <BrowserRouter>
      <div className="bg-blue-100 min-h-screen font-serif">
        <nav className="bg-gray-100 p-4 flex items-center justify-between shadow">
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="Liter Alura" className="h-12" />
            <span className="font-inknut text-2xl font-bold">
              <Link to="/" className="hover:underline" >Liter Alura</Link>
            </span>
            
          </div>
          <div className="flex gap-6 text-lg pr-4">
            <Link to="/favoritos/livros" className="hover:underline">Livros Favoritos</Link>
            <Link to="/favoritos/autores" className="hover:underline">Autores Favoritos</Link>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Search />} />
          <Route path="/favoritos/livros" element={<FavoritosLivros />} />
          <Route path="/favoritos/autores" element={<FavoritosAutores />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
