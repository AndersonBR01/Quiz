
// 1° declaração das const 
const titulo = document.querySelector('#titulo');
const instrucoes = document.querySelector('#instrucoes');
const aviso = document.querySelector('#aviso');

//2° montando as const das questoes
const questao = document.querySelector('.questao');
const nQuestao = document.querySelector('#nQuestao');
const pergunta = document.querySelector('#pergunta');

//3° declarando as alternativas
const a = document.querySelector('#a');
const b = document.querySelector('#b');
const c = document.querySelector('#c');
const d = document.querySelector('#d');

const numero = document.querySelector('#numero');
const total = document.querySelector('#total');

titulo.textContent = 'Quiz de Animes';
const totalDeQuestoes = 0;
numero.textContent = 1;

//4° declarando as variaveis do placar
let pontos = " ";
const placar =document.querySelector('.placar');

//5° colocando o som
const somAcerto = document.querySelector('#somAcerto');
const somErro = document.querySelector('#somErro');
const somAplausos = document.querySelector('#somAplausos');

//6° colocando endereço json
const url = 'data.json'

function pegarDados(i) {
    fetch(url).then(response => {
        return response.json();

    }).then(data => {
        if(data.erro) {
            console.log("erro ao acesar o json");
            return
        }
        //passar as quantidade de questoes
        let qtdQuestoes = (data.questoes.length)-1;
        //escrever a quantidades para o total
        total.textContent = parseInt(qtdQuestoes);

        //passar o valor do i no parametro
        atribuirDados(data,i);
    });
}; //fim de pegarDados

//atribuir dados a uma função
function atribuirDados(data,i){
    if( i >= data.questoes.length) {
        console.log('Fim das questoes');
        i = 1;
    }

    nQuestao.textContent = data.questoes[i].numQuestao;
    pergunta.textContent = data.questoes[i].pergunta;

    a.textContent = data.questoes[i].alternativaA;
    b.textContent = data.questoes[i].alternativaB;
    c.textContent = data.questoes[i].alternativaC;
    d.textContent = data.questoes[i].alternativaD;

    numero.textContent = data.questoes[i].numQuestao;

    const certa = document.querySelector('#correct');
    certa.value = data.questoes[i].correta;
    console.log(resposta)
    
}

// começar o quiz
const questaoAtual = 1;
pegarDados(1);

function proximaQuestao(numQuestao) {
    const proxima = parseInt(numQuestao);
    pegarDados(proxima)
}



