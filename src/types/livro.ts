export interface Autor {
  nome: string;
  anoNascimento: number;
  anoFalecimento: number;
}

export interface Livro {
  id: number;
  titulo: string;
  idioma: string;
  downloads: number;
  autores: Autor[];
  formats?: { [key: string]: string };
}
