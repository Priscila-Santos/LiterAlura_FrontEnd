// import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// import { Search } from "./pages/Search";
// import { Favorites } from "./pages/Favorites";

// function App() {
//   return (
//     <BrowserRouter>
//       <div className="bg-gray-100 min-h-screen">
//         <nav className="bg-white p-4 shadow">
//           <Link className="mr-4 text-blue-600" to="/">Buscar</Link>
//           <Link className="text-blue-600" to="/favoritos">Favoritos</Link>
//         </nav>
//         <Routes>
//           <Route path="/" element={<Search />} />
//           <Route path="/favoritos" element={<Favorites />} />
//         </Routes>
//       </div>
//     </BrowserRouter>
//   );
// }

// export default App;
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Search } from "./pages/Search";
import { Favorites } from "./pages/Favorites";

function App() {
  return (
    <BrowserRouter>
      <div className="bg-blue-100 min-h-screen font-serif">
        <nav className="bg-gray-100 p-4 flex items-center justify-between shadow">
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="Liter Alura" className="h-12" />
            <span className="font-inknut text-2xl font-bold">Liter Alura</span>
          </div>
          <div className="flex gap-6 text-lg pr-4">
            <Link to="/" className="hover:underline">Livros Favoritos</Link>
            <Link to="/favoritos" className="hover:underline">Autores Favoritos</Link>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Search />} />
          <Route path="/favoritos" element={<Favorites />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
