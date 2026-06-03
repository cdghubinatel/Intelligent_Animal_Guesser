let perguntas = [
  {
  chave: "quatroPatas",
  texto: "O animal tem quatro patas?"
  },

  {
  chave: "voa",
  texto: "O animal voa?"
  },

  {
  chave: "domestico",
  texto: "É um animal doméstico?"
  },

  {
  chave: "aquatico",
  texto: "O animal vive na água?"
  },

  {
  chave: "mia",
  texto: "O animal mia?"
  },

  {
  chave: "carnivoro",
  texto: "O animal é carnívoro?"
  },

  {
  chave: "herbivoro",
  texto: "O animal é herbívoro?"
  },

  {
  chave: "omnivoro",
  texto: "O animal é onívoro?"
  },

  {
  chave: "pequeno",
  texto: "O animal é pequeno?"
  },

  {
  chave: "grande",
  texto: "O animal é grande?"
  },

  {
  chave: "temCauda",
  texto: "O animal tem cauda?"
  },

  {
  chave: "temPenas",
  texto: "O animal tem penas?"
  },

  {
  chave: "temEscamas",
  texto: "O animal tem escamas?"
  },

  {
  chave: "fazSom",
  texto: "O animal faz som?"
  },

  {
  chave: "inteligente",
  texto: "O animal é inteligente?"
  },

  {
  chave: "selvagem",
  texto: "O animal é selvagem?"
  },

  {
    chave: "temCrina",
    texto: "O animal tem crina?"
  },

  {
    chave: "temPescoçoComprido",
    texto: "O animal tem pescoço comprido?"
  },

  {
    chave: "temTromba",
    texto: "O animal tem tromba?"
  },

  {
    chave: "temJuba",
    texto: "O animal tem juba?"
  },
  {
    chave: "temListras",
    texto: "O animal tem listras?"
  },
  {
    chave: "temManchas",
    texto: "O animal tem manchas?"
  },
  {
    chave: "temCaudaPreensil",
    texto: "O animal tem cauda preênsil?"
  },
  {
    chave: "ouveUivar",
    texto: "O animal uiva?"
  }
];

const animaisIniciais = [
  {
    nome: "Cachorro",
    imagem: "images/cachorro.jpg",
    quatroPatas: true,
    voa: false,
    domestico: true,
    aquatico: false,
    mia: false,
    carnivoro: true,
    herbivoro: false,
    omnivoro: false,
    pequeno: false,
    grande: true,
    temCauda: true,
    temPenas: false,
    temEscamas: false,
    fazSom: true,
    inteligente: true,
    selvagem: false
  },
  {
    nome: "Gato",
    imagem: "images/gato.jpg",
    quatroPatas: true,
    voa: false,
    domestico: true,
    aquatico: false,
    mia: true,
    carnivoro: true,
    herbivoro: false,
    omnivoro: false,
    pequeno: true,
    grande: false,
    temCauda: true,
    temPenas: false,
    temEscamas: false,
    fazSom: true,
    inteligente: true,
    selvagem: false
  },
  {
    nome: "Leão",
    imagem: "images/leao.jpg",
    quatroPatas: true,
    voa: false,
    domestico: false,
    aquatico: false,
    mia: false,
    carnivoro: true,
    herbivoro: false,
    omnivoro: false,
    pequeno: false,
    grande: true,
    temCauda: true,
    temPenas: false,
    temEscamas: false,
    fazSom: true,
    inteligente: true,
    selvagem: true,
    temJuba: true,
    temListras: false,
    temManchas: false,
    temCaudaPreensil: false,
    ouveUivar: false
  },
  {
    nome: "Águia",
    imagem: "images/aguia.jpg",
    quatroPatas: false,
    voa: true,
    domestico: false,
    aquatico: false,
    mia: false,
    carnivoro: true,
    herbivoro: false,
    omnivoro: false,
    pequeno: false,
    grande: true,
    temCauda: true,
    temPenas: true,
    temEscamas: false,
    fazSom: true,
    inteligente: true,
    selvagem: true
  },
  {
    nome: "Peixe",
    imagem: "images/peixe.jpg",
    quatroPatas: false,
    voa: false,
    domestico: false,
    aquatico: true,
    mia: false,
    carnivoro: false,
    herbivoro: true,
    omnivoro: false,
    pequeno: true,
    grande: false,
    temCauda: true,
    temPenas: false,
    temEscamas: true,
    fazSom: false,
    inteligente: false,
    selvagem: true
  },
  {
    nome: "Cavalo",
    imagem: "images/cavalo.jpg",
    quatroPatas: true,
    voa: false,
    domestico: false,
    aquatico: false,
    mia: false,
    carnivoro: false,
    herbivoro: true,
    omnivoro: false,
    pequeno: false,
    grande: true,
    temCauda: true,
    temPenas: false,
    temEscamas: false,
    fazSom: true,
    inteligente: true,
    selvagem: true,
    temCrina: true,
    temPescoçoComprido: false,
    temTromba: false
  },
  {
    nome: "Coelho",
    imagem: "images/coelho.jpg",
    quatroPatas: true,
    voa: false,
    domestico: true,
    aquatico: false,
    mia: false,
    carnivoro: false,
    herbivoro: true,
    omnivoro: false,
    pequeno: true,
    grande: false,
    temCauda: true,
    temPenas: false,
    temEscamas: false,
    fazSom: true,
    inteligente: true,
    selvagem: false
  },
  {
    nome: "Porco",
    imagem: "images/porco.jpg",
    quatroPatas: true,
    voa: false,
    domestico: true,
    aquatico: false,
    mia: false,
    carnivoro: false,
    herbivoro: true,
    omnivoro: true,
    pequeno: false,
    grande: true,
    temCauda: true,
    temPenas: false,
    temEscamas: false,
    fazSom: true,
    inteligente: true,
    selvagem: false
  },
  {
    nome: "Pato",
    imagem: "images/pato.jpg",
    quatroPatas: false,
    voa: true,
    domestico: true,
    aquatico: true,
    mia: false,
    carnivoro: false,
    herbivoro: true,
    omnivoro: true,
    pequeno: true,
    grande: false,
    temCauda: true,
    temPenas: true,
    temEscamas: false,
    fazSom: true,
    inteligente: true,
    selvagem: false
  },
  {
    nome: "Galinha",
    imagem: "images/galinha.jpg",
    quatroPatas: false,
    voa: true,
    domestico: true,
    aquatico: false,
    mia: false,
    carnivoro: false,
    herbivoro: true,
    omnivoro: true,
    pequeno: true,
    grande: false,
    temCauda: true,
    temPenas: true,
    temEscamas: false,
    fazSom: true,
    inteligente: true,
    selvagem: false
  },
  {
    nome: "Tigre",
    imagem: "images/tigre.jpg",
    quatroPatas: true,
    voa: false,
    domestico: false,
    aquatico: false,
    mia: false,
    carnivoro: true,
    herbivoro: false,
    omnivoro: false,
    pequeno: false,
    grande: true,
    temCauda: true,
    temPenas: false,
    temEscamas: false,
    fazSom: true,
    inteligente: true,
    selvagem: true,
    temJuba: false,
    temListras: true,
    temManchas: false,
    temCaudaPreensil: false,
    ouveUivar: false
  },
  {
    nome: "Lobo",
    imagem: "images/lobo.jpg",
    quatroPatas: true,
    voa: false,
    domestico: false,
    aquatico: false,
    mia: false,
    carnivoro: true,
    herbivoro: false,
    omnivoro: false,
    pequeno: false,
    grande: true,
    temCauda: true,
    temPenas: false,
    temEscamas: false,
    fazSom: true,
    inteligente: true,
    selvagem: true,
    temJuba: false,
    temListras: false,
    temManchas: false,
    temCaudaPreensil: false,
    ouveUivar: true
  },
  {
    nome: "Leopardo",
    imagem: "images/leopardo.jpg",
    quatroPatas: true,
    voa: false,
    domestico: false,
    aquatico: false,
    mia: false,
    carnivoro: true,
    herbivoro: false,
    omnivoro: false,
    pequeno: false,
    grande: true,
    temCauda: true,
    temPenas: false,
    temEscamas: false,
    fazSom: true,
    inteligente: true,
    selvagem: true,
    temJuba: false,
    temListras: false,
    temManchas: true,
    temCaudaPreensil: false,
    ouveUivar: false
  },
  {
    nome: "Jacaré",
    imagem: "images/jacare.jpg",
    quatroPatas: true,
    voa: false,
    domestico: false,
    aquatico: true,
    mia: false,
    carnivoro: true,
    herbivoro: false,
    omnivoro: false,
    pequeno: false,
    grande: true,
    temCauda: true,
    temPenas: false,
    temEscamas: true,
    fazSom: false,
    inteligente: true,
    selvagem: true
  },
  {
    nome: "Sapo",
    imagem: "images/sapo.jpg",
    quatroPatas: true,
    voa: false,
    domestico: false,
    aquatico: true,
    mia: false,
    carnivoro: false,
    herbivoro: true,
    omnivoro: false,
    pequeno: true,
    grande: false,
    temCauda: true,
    temPenas: false,
    temEscamas: false,
    fazSom: false,
    inteligente: false,
    selvagem: true
  },
  {
    nome: "Cisne",
    imagem: "images/cisne.jpg",
    quatroPatas: false,
    voa: true,
    domestico: false,
    aquatico: true,
    mia: false,
    carnivoro: false,
    herbivoro: true,
    omnivoro: false,
    pequeno: false,
    grande: true,
    temCauda: true,
    temPenas: true,
    temEscamas: false,
    fazSom: true,
    inteligente: true,
    selvagem: true
  },
  {
    nome: "Golfinho",
    imagem: "images/golfinho.jpg",
    quatroPatas: false,
    voa: false,
    domestico: false,
    aquatico: true,
    mia: false,
    carnivoro: true,
    herbivoro: false,
    omnivoro: false,
    pequeno: false,
    grande: true,
    temCauda: true,
    temPenas: false,
    temEscamas: false,
    fazSom: true,
    inteligente: true,
    selvagem: true
  },
  {
    nome: "Polvo",
    imagem: "images/polvo.jpg",
    quatroPatas: false,
    voa: false,
    domestico: false,
    aquatico: true,
    mia: false,
    carnivoro: true,
    herbivoro: false,
    omnivoro: false,
    pequeno: true,
    grande: false,
    temCauda: false,
    temPenas: false,
    temEscamas: true,
    fazSom: false,
    inteligente: true,
    selvagem: true
  },
  {
    nome: "Macaco",
    imagem: "images/macaco.jpg",
    quatroPatas: true,
    voa: false,
    domestico: false,
    aquatico: false,
    mia: false,
    carnivoro: true,
    herbivoro: false,
    omnivoro: false,
    pequeno: false,
    grande: true,
    temCauda: true,
    temPenas: false,
    temEscamas: false,
    fazSom: true,
    inteligente: true,
    selvagem: true,
    temJuba: false,
    temListras: false,
    temManchas: false,
    temCaudaPreensil: true,
    ouveUivar: false
  },
  {
    nome: "Papagaio",
    imagem: "images/papagaio.jpg",
    quatroPatas: false,
    voa: true,
    domestico: true,
    aquatico: false,
    mia: false,
    carnivoro: false,
    herbivoro: true,
    omnivoro: false,
    pequeno: true,
    grande: false,
    temCauda: true,
    temPenas: true,
    temEscamas: false,
    fazSom: true,
    inteligente: true,
    selvagem: false
  },
  {
    nome: "Rato",
    imagem: "images/rato.jpg",
    quatroPatas: true,
    voa: false,
    domestico: true,
    aquatico: false,
    mia: false,
    carnivoro: false,
    herbivoro: true,
    omnivoro: false,
    pequeno: true,
    grande: false,
    temCauda: true,
    temPenas: false,
    temEscamas: false,
    fazSom: true,
    inteligente: true,
    selvagem: false
  },
  {
    nome: "Girafa",
    imagem: "images/girafa.jpg",
    quatroPatas: true,
    voa: false,
    domestico: false,
    aquatico: false,
    mia: false,
    carnivoro: false,
    herbivoro: true,
    omnivoro: false,
    pequeno: false,
    grande: true,
    temCauda: true,
    temPenas: false,
    temEscamas: false,
    fazSom: true,
    inteligente: true,
    selvagem: true,
    temCrina: false,
    temPescoçoComprido: true,
    temTromba: false
  },
  {
    nome: "Elefante",
    imagem: "images/elefante.jpg",
    quatroPatas: true,
    voa: false,
    domestico: false,
    aquatico: false,
    mia: false,
    carnivoro: false,
    herbivoro: true,
    omnivoro: false,
    pequeno: false,
    grande: true,
    temCauda: true,
    temPenas: false,
    temEscamas: false,
    fazSom: true,
    inteligente: true,
    selvagem: true,
    temCrina: false,
    temPescoçoComprido: false,
    temTromba: true
  },
  {
    nome: "Coruja",
    imagem: "images/coruja.jpg",
    quatroPatas: false,
    voa: true,
    domestico: false,
    aquatico: false,
    mia: false,
    carnivoro: true,
    herbivoro: false,
    omnivoro: false,
    pequeno: true,
    grande: false,
    temCauda: true,
    temPenas: true,
    temEscamas: false,
    fazSom: true,
    inteligente: true,
    selvagem: true
  },
  {
    nome: "Tartaruga",
    imagem: "images/tartaruga.jpg",
    quatroPatas: true,
    voa: false,
    domestico: false,
    aquatico: true,
    mia: false,
    carnivoro: false,
    herbivoro: true,
    omnivoro: false,
    pequeno: true,
    grande: false,
    temCauda: true,
    temPenas: false,
    temEscamas: true,
    fazSom: false,
    inteligente: true,
    selvagem: true
  }
];

let animais = JSON.parse(localStorage.getItem("animaisIA")) || animaisIniciais;

perguntas.forEach(pergunta => {
    animais.forEach(animal => {
        if (animal[pergunta.chave] === undefined) {
            animal[pergunta.chave] = false;
        }
    });
});

let possibilidades = [...animais];
let respostas = {};
let perguntaAtual = null;

const perguntaEl = document.getElementById("pergunta");
const contadorEl = document.getElementById("contador");
const resultadoEl = document.getElementById("resultado");

function encontrarMelhorPergunta() {
    let melhorPergunta = null;
    let melhorPontuacao = -1;

    perguntas.forEach(pergunta => {
        if (respostas[pergunta.chave] !== undefined) return;

        let sim = 0;
        let nao = 0;

        possibilidades.forEach(animal => {
            if (animal[pergunta.chave] === true) {
                sim++;
            } else if (animal[pergunta.chave] === false) {
                nao++;
            }
        });

        if (sim === 0 && nao === 0) return;

        const menorGrupo = Math.min(sim, nao);
        if (menorGrupo > melhorPontuacao) {
            melhorPontuacao = menorGrupo;
            melhorPergunta = pergunta;
        }
    });

    return melhorPergunta;
}

function atualizarTela() {
    contadorEl.innerText = possibilidades.length;

    if (possibilidades.length === 0) {
        mostrarResultado();
        return;
    }

    if (possibilidades.length === 1) {
        mostrarResultado();
        return;
    }

    perguntaAtual = encontrarMelhorPergunta();

    if (!perguntaAtual) {
        mostrarResultado(true);
        return;
    }

    perguntaEl.innerText = perguntaAtual.texto;
}

function responder(valor) {
    respostas[perguntaAtual.chave] = valor;
    possibilidades = possibilidades.filter(animal => animal[perguntaAtual.chave] === valor);
    atualizarTela();
}

function mostrarResultado(multiplo = false) {
    document.getElementById("botoesPergunta").style.display = "none";

    if (possibilidades.length === 0) {
        pedirNovoAnimal();
        return;
    }

    if (possibilidades.length === 1 || multiplo) {
        let listaAnimais = multiplo ? possibilidades.map(a => a.nome).join(", ") : possibilidades[0].nome;
        let imgSrc = multiplo ? "images/default.jpg" : possibilidades[0].imagem;

        resultadoEl.innerHTML = `
            <h2>🤖 Acho que é:</h2>
            <img class="imagem-animal" src="${imgSrc}">
            <h1>${listaAnimais}</h1>
            <br>
            <button class="btn-acertou" onclick="acertou()">Acertou!</button>
            <button class="btn-errou" onclick="errou()">Errou!</button>
        `;
    }
}

function acertou() {
    resultadoEl.innerHTML = `
        <div class="vitoria">
            <div class="confetes">🎉 🎊 ✨ 🐾 🎉 🎊 ✨</div>
            <h2 class="texto-vitoria">🎯 Acertei!</h2>
            <p class="sub-vitoria">A IA descobriu seu animal!</p>
            <button class="btn-jogar" onclick="reiniciar()">Jogar Novamente</button>
        </div>
    `;
}

function errou() {
    resultadoEl.innerHTML = `
        <div class="erro-animado">
            <div class="emoji-triste">😵 ❌ 🤖</div>
            <h2 class="texto-erro">Ops... eu errei!</h2>
            <p class="sub-erro">Me ensine qual era o animal.</p>
        </div>
    `;

    setTimeout(() => {
        pedirNovoAnimal();
    }, 1800);
}

function pedirNovoAnimal() {
    let perguntasHTML = "";
    const perguntasNaoRespondidas = perguntas.filter(pergunta => respostas[pergunta.chave] === undefined);

    perguntasNaoRespondidas.forEach(pergunta => {
        perguntasHTML += `
            <div class="pergunta-extra">
                <p>${pergunta.texto}</p>
                <select id="campo_${pergunta.chave}" class="input-animal">
                    <option value="false">Não</option>
                    <option value="true">Sim</option>
                </select>
            </div>
        `;
    });

    resultadoEl.innerHTML = `
        <h2>😅 Não consegui descobrir.</h2>
        <p style="margin-top:10px;">Qual era o animal?</p>
        <input type="text" id="novoAnimal" class="input-animal" placeholder="Digite o animal">
        <p style="margin-top:20px;">Qual característica diferencia esse animal?</p>
        <input type="text" id="novaCaracteristica" class="input-animal" placeholder="Ex: É inteligente">
        ${perguntasNaoRespondidas.length > 0 ? `<p class="titulo-caracteristicas">Responda às perguntas sobre o animal:</p>${perguntasHTML}` : ""}
        <p style="margin-top:20px;">Escolha uma imagem do animal</p>
        <input type="file" id="imagemAnimal" accept="image/*" class="input-animal">
        <br>
        <button class="novo-btn" onclick="adicionarAnimal()">Adicionar Animal</button>
    `;
}

function adicionarAnimal() {
    const nome = document.getElementById("novoAnimal").value;
    const caracteristicaTexto = document.getElementById("novaCaracteristica").value;
    const arquivoImagem = document.getElementById("imagemAnimal").files[0];

    if (!nome.trim()) {
        alert("Digite o nome do animal.");
        return;
    }

    if (!caracteristicaTexto.trim()) {
        alert("Digite uma característica do animal.");
        return;
    }

    const chaveCaracteristica = caracteristicaTexto
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/\s+/g, "_");

    const perguntaNova = {
        chave: chaveCaracteristica,
        texto: "O animal " + caracteristicaTexto + "?"
    };

    if (!perguntas.some(pergunta => pergunta.chave === chaveCaracteristica)) {
        perguntas.push(perguntaNova);
    }

    animais.forEach(animal => {
        if (animal[chaveCaracteristica] === undefined) {
            animal[chaveCaracteristica] = false;
        }
    });

    function salvarAnimal(imagemBase64) {
        const novoAnimal = { nome, imagem: imagemBase64 };

        perguntas.forEach(pergunta => {
            const campo = document.getElementById(`campo_${pergunta.chave}`);
            if (campo) {
                novoAnimal[pergunta.chave] = campo.value === "true";
            } else {
                novoAnimal[pergunta.chave] = respostas[pergunta.chave] || false;
            }
        });

        novoAnimal[chaveCaracteristica] = true;
        animais.push(novoAnimal);
        localStorage.setItem("animaisIA", JSON.stringify(animais));

        resultadoEl.innerHTML = `
            <h2>✅ Novo animal aprendido!</h2>
            <img class="imagem-animal" src="${imagemBase64}">
            <p style="margin-top:15px;">Nova característica: <strong>${caracteristicaTexto}</strong></p>
            <br>
            <button onclick="reiniciar()">Jogar Novamente</button>
        `;
    }

    if (arquivoImagem) {
        const leitor = new FileReader();
        leitor.onload = function(evento) {
            salvarAnimal(evento.target.result);
        };
        leitor.readAsDataURL(arquivoImagem);
    } else {
        salvarAnimal("images/default.jpg");
    }
}

function reiniciar() {
    possibilidades = [...animais];
    respostas = {};
    perguntaAtual = null;
    resultadoEl.innerHTML = "";
    document.getElementById("botoesPergunta").style.display = "grid";
    atualizarTela();
}

atualizarTela();
