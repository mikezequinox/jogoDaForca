// 1. Lista de palavras p o s s v e i s
const palavras = [" JAVASCRIPT ", " HTML ", "CSS ", " BOOTSTRAP ", "ALGORITMO "];
// 2. V a r i v e i s do jogo
let palavraSecreta = "";
let letrasAcertadas = [];
let tentativasErradas = 0;
const maxTentativas = 6;
// 3. Inicializar o jogo
function iniciarJogo () {
// Escolher palavra a l e a t r i a
// Inicializar array de letras acertadas
// Criar teclado virtual
// Atualizar display
}
// 4. Processar tentativa de letra
function tentarLetra ( letra ) {
// Verificar se a letra e s t na palavra
// Atualizar letras acertadas ou tentativas erradas
// Verificar v i t r i a / derrota
// Desabilitar b o t o da letra usada
}
// 5. Desenhar a forca ( opcional )
function desenharForca () {
    // Usar canvas ou divs para mostrar partes do enforcado
// Baseado em tentativasErradas
}
// 6. Verificar estado do jogo
function verificarFimDeJogo () {
// V i t r i a : todas as letras acertadas
// Derrota : tentativasErradas >= maxTentativas
}
// Iniciar primeiro jogo
window . onload = iniciarJogo ;