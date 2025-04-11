fetch("livros.xml")
  .then((response) => response.text())
  .then((xmlText) => {
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xmlText, "text/xml");

    const primeiroLivro = xmlDoc.getElementsByTagName("livro")[0];

    // let node = primeiroLivro.firstChild;
    // while (node && node.nodeType !== 1) {
    //   node = node.nextSibling;
    // }
    // let autorNode = node.nextSibling;
    // while (autorNode && autorNode.nodeType !== 1) {
    //   autorNode = autorNode.nextSibling;
    // }

    const nomeAutor = primeiroLivro.getElementsByTagName("autor")[0].textContent;
    // const nomeAutor = autorNode.firstChild.nodeValue;

    const autorDiv = document.getElementById("primeiro_autor");
    const autorElement = document.createElement("p");
    autorElement.textContent = `Primeiro autor: ${nomeAutor}`;
    autorDiv.appendChild(autorElement);
  })
  .catch((error) => {
    console.error("Erro ao carregar o arquivo XML:", error);
  });