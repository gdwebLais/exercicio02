const ultimoAnoDiv = document.getElementById("ultimo_ano");

fetch("livros.xml")
  .then((response) => response.text())
  .then((xmlText) => {
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xmlText, "text/xml");

    const livros = xmlDoc.getElementsByTagName("livro");
    const ultimoLivro = livros[livros.length - 1];

    // let noAtual = ultimoLivro.lastChild;
    // while (noAtual && noAtual.nodeType !== 1) {
    //   noAtual = noAtual.previousSibling;
    // }

    // const anoTexto = noAtual.firstChild.nodeValue;

    const anoTexto = ultimoLivro.getElementsByTagName("ano")[0].textContent;

    const p = document.createElement("p");
    p.textContent = `Ano do último livro: ${anoTexto}`;
    ultimoAnoDiv.appendChild(p);
  })
  .catch((error) => {
    console.error("Erro ao carregar o arquivo XML:", error);
  });
