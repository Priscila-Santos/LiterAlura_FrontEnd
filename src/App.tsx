import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Search } from "./pages/Search";
import { Favorites } from "./pages/Favorites";

function App() {
  return (
    <BrowserRouter>
      <div className="bg-gray-100 min-h-screen">
        <nav className="bg-white p-4 shadow">
          <Link className="mr-4 text-blue-600" to="/">Buscar</Link>
          <Link className="text-blue-600" to="/favoritos">Favoritos</Link>
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



// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
