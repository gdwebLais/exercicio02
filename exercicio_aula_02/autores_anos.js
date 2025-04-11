const autoresAnosDiv = document.getElementById("autores_anos");

fetch("livros.xml")
  .then((response) => response.text())
  .then((xmlText) => {
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xmlText, "text/xml");
    const livros = xmlDoc.getElementsByTagName("livro");

    for (let i = 0; i < livros.length; i++) {
      const livro = livros[i];

      const autor = livro.getElementsByTagName("autor")[0].textContent;
      const ano = livro.getElementsByTagName("ano")[0].textContent;

      const infoElement = document.createElement("p");
      infoElement.textContent = `Autor: ${autor}, Ano: ${ano}`;
      autoresAnosDiv.appendChild(infoElement);
    }
  })
  .catch((error) => {
    console.error("Erro ao carregar o arquivo XML:", error);
  });
