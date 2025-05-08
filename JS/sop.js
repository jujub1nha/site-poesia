// Array de poesias
const poesias = [
    "Na simplicidade das palavras, encontramos a profundidade da alma.",
    "Cada verso é um pedaço do meu coração entregue ao papel.",
    "O vento sussurra segredos que só os poetas podem ouvir.",
    "Em cada amanhecer, nasce uma nova poesia dentro de mim."
];

// Elementos do DOM
const poetrySection = document.getElementById("poetry");
const newPoetryBtn = document.getElementById("new-poetry-btn");

// Função para mostrar uma poesia aleatória
function mostrarPoesia() {
    const poesiaAleatoria = poesias[Math.floor(Math.random() * poesias.length)];
    poetrySection.textContent = poesiaAleatoria;
}

// Evento de clique para o botão
newPoetryBtn.addEventListener("click", mostrarPoesia);

// Mostrar uma poesia ao carregar a página
mostrarPoesia();

