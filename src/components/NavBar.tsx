import { Link } from "react-router-dom";

export function NavBar() {
  return (
    // <nav className="bg-gray-100 flex justify-between items-center px-6 py-4 shadow font-inknut">
    //   <Link to="/" className="flex items-center gap-2">
    //     <img src="/logo.png" alt="Logo" className="h-10" />
    //     <span className="text-xl font-bold">Liter Alura</span>
    //   </Link>
    //   <div className="flex gap-4">
    //     <Link to="/favoritos/livros" className="hover:underline">Livros Favoritos</Link>
    //     <Link to="/favoritos/autores" className="hover:underline">Autores Favoritos</Link>
    //   </div>
    // </nav>
            <nav className="bg-gray-100 flex justify-between items-center px-6 py-4 shadow font-inknut">
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="Liter Alura" className="h-12" />
            <span className="font-inknut text-2xl font-bold">Liter Alura</span>
          </div>
          <div className="flex gap-6 text-lg pr-4">
            <Link to="/" className="hover:underline">Livros Favoritos</Link>
            <Link to="/favoritos" className="hover:underline">Autores Favoritos</Link>
          </div>
        </nav>
  );
}
