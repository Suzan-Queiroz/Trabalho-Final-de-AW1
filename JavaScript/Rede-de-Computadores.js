/* Aula 20 MaiaQuiz  */

let titulo = document.querySelector('h1')
let instrucoes = document.querySelector('#instrucoes')
let aviso = document.querySelector('#aviso')
//let respostaEsta = document.querySelector('#respostaEsta')
let pontos = 0 // pontos para o placar
let placar = 0 // placar

// PERGUNTA
let numQuestao = document.querySelector('#numQuestao')
let pergunta   = document.querySelector('#pergunta')

// ALTERNATIVAS
let a = document.querySelector('#a')
let b = document.querySelector('#b')
let c = document.querySelector('#c')

// article com a class questoes
let articleQuestoes = document.querySelector('.questoes')
// ol li com as alternativas
let alternativas = document.querySelector('#alternativas')

const q0 = {
    numQuestao   : 0,
    pergunta     : "Pergunta",
    alternativaA : "Alternativa A",
    alternativaB : "Alternativa B",
    alternativaC : "Alternativa C",
    correta      : "0",
}

const q1 = {
    numQuestao   : 1,
    pergunta     : "O que é o conceito de Rede de Computadores no mundo da Tecnologia da Informação?",
    alternativaA : "Malha que interliga milhares de sistemas computacionais para a transmissão de dados",
    alternativaB : "Coleção organizada de informações (ou dados) estruturadas, normalmente armazenadas eletronicamente em um sistema de computador",
    alternativaC : "Conjunto de linguagens de programação",
    correta      : "Malha que interliga milhares de sistemas computacionais para a transmissão de dados",
}

const q2 = {
    numQuestao   : 2,
    pergunta     : "Para que serve/utilidade de uma Rede de Computadores no mundo da Tecnologia da Informação?",
    alternativaA : "Jogos: permite que usuários joguem simultaneamente, mesmo estando em locais diferentes",
    alternativaB : "Acesso e utilização de aplicativos: permite acessar e utilizar aplicações através da rede",
    alternativaC : "Ambas as respostas estão corretas",
    correta      : "Ambas as respostas estão corretas",
}

const q3 = {
    numQuestao   : 3,
    pergunta     : "O que significa a sigla TCP/IP no meio de Rede de Computadores?",
    alternativaA : "Transmission Control Protocol/Internet Protocol",
    alternativaB : "Transmission Control Protocol/Web Protocol",
    alternativaC : "Transmission Control Protocol/HTML Protocol",
    correta      : "Transmission Control Protocol/Internet Protocol",
}

const q4 = {
    numQuestao   : 4,
    pergunta     : "O que significa o conceito de Endereço IP no meio de Rede de Computadores?",
    alternativaA : "Identificador único que serve para indicar a origem ou o destino da transmissão",
    alternativaB : "Identificador que serve para indicar a origem ou o destino de arquivos Word",
    alternativaC : "Identificador que serve para indicar a origem ou o destino de arquivos jsp",
    correta      : "Identificador único que serve para indicar a origem ou o destino da transmissão",
}

const q5 = {
    numQuestao   : 5,
    pergunta     : "Quais dos tipos abaixo são consideradas tipos de Redes de Computadores?",
    alternativaA : "Rede sem fio",
    alternativaB : "Rede local",
    alternativaC : "Ambas as respostas estão corretas",
    correta      : "Ambas as respostas estão corretas",
}

// CONSTANTE COM UM ARRAY DE OBJETOS COM TODAS AS QUESTOES
const questoes = [q0, q1, q2, q3, q4, q5]

let numero = document.querySelector('#numero')
let total  = document.querySelector('#total')

numero.textContent = q1.numQuestao

let totalDeQuestoes = (questoes.length)-1
console.log("Total de questões " + totalDeQuestoes)
total.textContent = totalDeQuestoes

// MONTAR A 1a QUESTAO COMPLETA, para iniciar o Quiz
numQuestao.textContent = q1.numQuestao
pergunta.textContent   = q1.pergunta
a.textContent = q1.alternativaA
b.textContent = q1.alternativaB
c.textContent = q1.alternativaC

// CONFIGURAR O VALUE INICIAL DA 1a QUESTAO COMPLETA
a.setAttribute('value', '1A')
b.setAttribute('value', '1B')
c.setAttribute('value', '1C')

// PARA MONTAR AS PROXIMAS QUESTOES
function proximaQuestao(nQuestao) {
    numero.textContent = nQuestao
    numQuestao.textContent = questoes[nQuestao].numQuestao
    pergunta.textContent   = questoes[nQuestao].pergunta
    a.textContent = questoes[nQuestao].alternativaA
    b.textContent = questoes[nQuestao].alternativaB
    c.textContent = questoes[nQuestao].alternativaC
    a.setAttribute('value', nQuestao+'A')
    b.setAttribute('value', nQuestao+'B')
    c.setAttribute('value', nQuestao+'C')
}

function bloquearAlternativas() {
    a.classList.add('bloqueado')
    b.classList.add('bloqueado')
    c.classList.add('bloqueado')
}

function desbloquearAlternativas() {
    a.classList.remove('bloqueado')
    b.classList.remove('bloqueado')
    c.classList.remove('bloqueado')
}

function verificarSeAcertou(nQuestao, resposta) {

    let numeroDaQuestao = nQuestao.value
    console.log("Questão " + numeroDaQuestao)

    let respostaEscolhida = resposta.textContent
    //console.log("RespU " + respostaEscolhida)

    let certa = questoes[numeroDaQuestao].correta
    //console.log("RespC " + certa)

    if(respostaEscolhida == certa) {
        //console.log("Acertou")
        //respostaEsta.textContent = "Correta 😊"
        pontos += 10 // pontos = pontos + 10
    } else {
        //console.log("Errou!")
        //respostaEsta.textContent = "Errada 😢"
    }

    // atualizar placar
    placar = pontos
    instrucoes.textContent = "Pontos " + placar

    // bloquear a escolha de opcoes
    bloquearAlternativas()

    setTimeout(function() {
        //respostaEsta.textContent = '...'
        proxima = numeroDaQuestao+1

        if(proxima > totalDeQuestoes) {
            console.log('Fim do Jogo!')
            fimDoJogo()
        } else {
            proximaQuestao(proxima)
        }
    }, 250)
    desbloquearAlternativas()
}

function fimDoJogo() {
    instrucoes.textContent = "Fim de Jogo!"
    numQuestao.textContent = ""

    let pont = ''
    pontos == 0 ? pont = 'ponto' : pont = 'pontos'

    pergunta.textContent   = "Você conseguiu " + pontos + " " + pont

    aviso.textContent = "Você conseguiu " + pontos + " " + pont

    a.textContent = ""
    b.textContent = ""
    c.textContent = ""

    a.setAttribute('value', '0')
    b.setAttribute('value', '0')
    c.setAttribute('value', '0')

    // OCULTAR O ARTICLE DA QUESTAO
    articleQuestoes.style.display = 'none'

    setTimeout(function() {
        pontos = 0 // zerar placar
        location.reload();
    }, 2000)
}