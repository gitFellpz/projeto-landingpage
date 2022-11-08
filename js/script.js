// Funcionalidade para o scroll ao clicar nas opções do menu ficarem mais "suaves".
// Define o seletor
    // Variável para as tags a
    let anchorSelector = 'a[href^="#"]';
      
    // Selecionar todas as tags a
    let anchorList = document.querySelectorAll(anchorSelector);
          
    // Iterar através de cada um dos links
    anchorList.forEach(link => {
        link.onclick = function (e) {
      
            // Evitar a rolagem se o valor de hash estiver em branco
            e.preventDefault();
          
            // Obtenha o destino para rolar usando a propriedade hash
            let destination = document.querySelector(this.hash);
          
            // Role até o destino usando o método scrollIntoView
            destination.scrollIntoView({
                behavior: 'smooth'
                // smooth = suave
            });
        }
    });