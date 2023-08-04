const instrucoes = document.querySelector("#instrucoes");
const aviso = document.querySelector("#aviso");
const titulo = document.querySelector("#titulo");


//questoes
const questao = document.querySelector(".questao");
const nQuestao = document.querySelector("#nQuestao");
const pergunta = document.querySelector("pergunta");

const a = document.querySelector("#a");
const b = document.querySelector("#b");
const c = document.querySelector("#c");
const d = document.querySelector("#d");

const numero = document.querySelector("#numero");
const total = document.querySelector("#total");

titulo.innerHTML = "Quizz"
const totalDeQuestoes = 0
numero.innerHTML = 1

const pontos = 0
const placar = document.querySelector(".placar")

const somAcerto = document.querySelector("#somAcerto");
const somErro = document.querySelector("#somErro");
const somAplausos = document.querySelector("#somAplausos");

//arquivo json
const url = "data.json"

function pegarDados(i){

    fetch(url).then(response =>{
        return response.json()       

        }).then(data => {
        if (data.erro) {
            console.log(response);
            return
        }

        //quantidade de questao
        let qtdQuestoes = (data.questoes.lenght) -1
        console.log(qtdQuestoes +"10 questoes")
        //total 
        total.textContent = parseInt(qtdQuestoes)

        //passar valor de i no parametro
        atribuirDados(data, i)

    })
}

function atribuirDados(data, i ) {
    if (i >data.questoes.lenght){
        console.log(data)
    }
}





