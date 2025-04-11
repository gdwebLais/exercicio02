const livroDiv = document.getElementById("livro_especifico");

fetch("livros.xml")
  .then((response) => response.text())
  .then((xmlText) => {
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xmlText, "text/xml");

    const primeiroLivro = xmlDoc.getElementsByTagName("livro")[0];
    const id = primeiroLivro.getAttribute("id");

    const titulo = primeiroLivro.getElementsByTagName("titulo")[0].textContent;
    const autor = primeiroLivro.getElementsByTagName("autor")[0].textContent;
    const ano = primeiroLivro.getElementsByTagName("ano")[0].textContent;

    const info = `ID: ${id}, Título: ${titulo}, Autor: ${autor}, Ano: ${ano}`;

    const infoElement = document.createElement("p");
    infoElement.textContent = info;
    livroDiv.appendChild(infoElement);
  })
  .catch((error) => {
    console.error("Erro ao carregar o arquivo XML:", error);
  });
