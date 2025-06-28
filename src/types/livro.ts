export interface Autor {
  id: number; 
  nome: string;
  anoNascimento?: number;
  anoFalecimento?: number;
}

export interface Livro {
  id: number;
  titulo: string;
  autores: Autor[]; 
  idioma: string;
  downloads: number;
  resumo?: string;
  formats?: {
    [key: string]: string;
  };
}

// Versão vinda da API Gutendex
export interface LivroDTO {
  id: number;
  title: string;
  authors: {
    name: string;
    birth_year?: number;
    death_year?: number;
  }[];
  languages: string[];
  download_count: number;
  formats?: {
    [key: string]: string;
  };
}
