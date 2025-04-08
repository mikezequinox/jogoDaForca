const palavras = [
    "PROCESSADOR",
    "MEMORIA",
    "ALGORITMO",
    "PYTHON",
    "CIBERNETICO",
    "INTERNET",
    "BACKEND",
    "FRONTEND",
]

let palavraSecreta = ""
let letrasAcertadas = []
let tentativasErradas = 0
const maxTentativas = 6


function escolherPalavraAleatoria(palavras)
{
    return palavras[Math.floor(Math.random() * palavras.length)]
}

function iniciarJogo()
{
    palavraSecreta = escolherPalavraAleatoria(palavras)
    letrasAcertadas = []
    tentativasErradas = 0
    document.getElementById("tentativas").textContent = maxTentativas;
    document.getElementById("tentativasX").textContent = "X X X X X X"
    document.getElementById("reiniciar").style.display = "none"
    criarTeclado()
    atualizarDisplay()
    atualizarForca()
}
  
function criarTeclado()
{
    const teclado = document.getElementById("teclado")
    teclado.innerHTML = ""
    for (let i = 65; i <= 90; i++)
    {
        const letra = String.fromCharCode(i)
        const botao = document.createElement("button")
        botao.textContent = letra
        botao.classList.add("letra")
        botao.onclick = () => tentarLetra(letra, botao)
        teclado.appendChild(botao)
    }
}
  
function atualizarForca()
{
    const partes = ["cabeca", "corpo", "bracoE", "bracoD", "pernaE", "pernaD"];
    partes.forEach((parte, index) => {
        const el = document.querySelector("." + parte);
        el.style.display = index < tentativasErradas ? "block" : "none";
    });
}

function tentarLetra(letra, botao) {
    botao.disabled = true
    botao.classList.add("usada")
  
    if (palavraSecreta.includes(letra)){
      letrasAcertadas.push(letra)
    }else{
      atualizarTentativasX()
      atualizarForca()
    }
  
    atualizarDisplay();
    verificarFimDeJogo();
}

function atualizarTentativasX() {
    tentativasErradas++
    document.getElementById("tentativas").textContent = maxTentativas - tentativasErradas;

    const xRestantes = maxTentativas - tentativasErradas;
    let xString = "";
    for (let i = 0; i < xRestantes; i++) {
      xString += "X ";
    }

    document.getElementById("tentativasX").textContent = xString.trim();
}

function atualizarDisplay()
{
    const palavraSeparada = palavraSecreta.split("")
    const display = palavraSeparada.map( (letra) => (letrasAcertadas.includes(letra)? letra : "_")).join(" ")

    document.getElementById("palavra").textContent = display
}


function verificarFimDeJogo() {
    const vetorDeLetras = palavraSecreta.split("")
    const fim = vetorDeLetras.every((letra) => letrasAcertadas.includes(letra));

    if(fim){
        alert("Parabéns! Você venceu!");
        document.getElementById("reiniciar").style.display = "block"
    } else if (tentativasErradas >= maxTentativas) {
        alert(`Você perdeu! A palavra era: ${palavraSecreta}`);
        document.getElementById("reiniciar").style.display = "block"
    }
}

document.getElementById("reiniciar").onclick = iniciarJogo
window.onload = iniciarJogo