export async function getResumoFromPlainText(url: string): Promise<string> {
  try {
    const response = await fetch(url);
    const text = await response.text();

    // Remove cabeçalho do Projeto Gutenberg
    const start = text.indexOf("*** START OF THIS PROJECT GUTENBERG EBOOK");
    const cleanText = start > -1 ? text.substring(start + 50) : text;

    // Divide por parágrafos e pega os 3 primeiros
    const paragraphs = cleanText
      .split(/\n\s*\n/)
      .map(p => p.trim())
      .filter(p => p.length > 100); // ignora parágrafos muito curtos

    return paragraphs.slice(0, 3).join("\n\n");
  } catch (error) {
    console.error("Erro ao buscar resumo:", error);
    return "Resumo indisponível.";
  }
}
