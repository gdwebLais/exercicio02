const navegacaoDiv = document.getElementById("navegacao");

fetch("livros.xml")
  .then((response) => response.text())
  .then((xmlText) => {
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xmlText, "text/xml");

    const segundoLivro = xmlDoc.getElementsByTagName("livro")[1];
    const autor = segundoLivro.getElementsByTagName("autor")[0];

    const livroPai = autor.parentNode;
    const titulo = livroPai.getElementsByTagName("titulo")[0].textContent;

    const p = document.createElement("p");
    p.textContent = `Título do segundo livro: ${titulo}`;
    navegacaoDiv.appendChild(p);
  })
  .catch((error) => {
    console.error("Erro ao carregar o arquivo XML:", error);
  });
