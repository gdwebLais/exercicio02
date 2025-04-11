const idsDiv = document.getElementById("ids");

fetch("livros.xml")
  .then((response) => response.text())
  .then((xmlText) => {
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xmlText, "text/xml");

    const livros = xmlDoc.getElementsByTagName("livro");

    for (let i = 0; i < livros.length; i++) {
      const idAttr = livros[i].getAttributeNode("id");
      const idValue = idAttr.nodeValue;

      const p = document.createElement("p");
      p.textContent = `ID do livro ${i + 1}: ${idValue}`;
      idsDiv.appendChild(p);
    }
  })
  .catch((error) => {
    console.error("Erro ao carregar o arquivo XML:", error);
  });
