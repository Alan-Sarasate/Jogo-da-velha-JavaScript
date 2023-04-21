const jogador1 = document.querySelector("input#player1")
const jogador2 = document.querySelector("input#player2")

const h2 = document.getElementById("jogadorDaVez")
const h4 = document.getElementById("jogadores")

const section = document.getElementById("tabuleiro")
section.remove()

let qJogadas = 0, jogadaAtual = "X", vitoria = 0

document.querySelector("button#salvar").addEventListener("click", (ev) => {
    ev.preventDefault()

    if(!jogador1.value) jogador1.value = "Jogador1"
    if(!jogador2.value) jogador2.value = "Jogador2"
    console.log(jogador1.value, jogador2.value)
    document.getElementById("nomes").remove()

    h4.innerText = `Jogador1: ${jogador1.value} (X)\nJogador2: ${jogador2.value} (O)`

    jogadorDaVez()

    document.body.appendChild(section)
})

function jogadorDaVez(){
    jogadaAtual == "X"? 
        h2.innerText = `Jogador da vez: ${jogador1.value}` : 
        h2.innerText = `Jogador da vez: ${jogador2.value}`
}



function marcar(elemento){
    if(!elemento.innerText){
        elemento.innerText = jogadaAtual
        verificarJogada()
        jogadorDaVez()
        qJogadas++
        if(qJogadas == 9 && vitoria == 0){
            reiniciar(confirm(`Deu velha!\n\nPressione 'OK' para reiniciar ou 'Cancelar' para resetar.`))
        }
        
    }
    setTimeout(verificarVitoria, 50)
}

function verificarJogada(){
    jogadaAtual == "X"? jogadaAtual = "O": jogadaAtual = "X"
}

function verificarVitoria(){
    const q = document.querySelectorAll("div")
    if(qJogadas >= 5){
        if(q[0].innerText && (q[0].innerText == q[1].innerText && q[1].innerText == q[2].innerText)){
            jogadorVencedor(q[0].innerText)
        }else if(q[3].innerText && (q[3].innerText == q[4].innerText && q[4].innerText == q[5].innerText)){
            jogadorVencedor(q[3].innerText)
        }else if(q[6].innerText && (q[6].innerText == q[7].innerText && q[7].innerText == q[8].innerText)){
            jogadorVencedor(q[6].innerText)
        }else if(q[0].innerText && (q[0].innerText == q[3].innerText && q[3].innerText == q[6].innerText)){
            jogadorVencedor(q[0].innerText)
        }else if(q[1].innerText && (q[1].innerText == q[4].innerText && q[4].innerText == q[7].innerText)){
            jogadorVencedor(q[1].innerText)
        }else if(q[2].innerText && (q[2].innerText == q[5].innerText && q[5].innerText == q[8].innerText)){
            jogadorVencedor(q[2].innerText)
        }else if(q[0].innerText && (q[0].innerText == q[4].innerText && q[4].innerText == q[8].innerText)){
            jogadorVencedor(q[0].innerText)
        }else if(q[2].innerText && (q[2].innerText == q[4].innerText && q[4].innerText == q[6].innerText)){
            jogadorVencedor(q[2].innerText)
        }
        
    }
}

function jogadorVencedor(elemento){
    vitoria = 1
    if(elemento == "X"){
        reiniciar(confirm(`${jogador1.value} VENCEU!!!!!\n\nPressione 'OK' para reiniciar ou 'Cancelar' para resetar.`))
    }else {
        reiniciar(confirm(`${jogador2.value} VENCEU!!!!!\n\nPressione 'OK' para reiniciar ou 'Cancelar' para resetar.`))
    }
}

function reiniciar(booleano){
    if(booleano){
        qJogadas = 0
        jogadaAtual = "X"
        vitoria = 0
        let aux = jogador1.value
        jogador1.value = jogador2.value
        jogador2.value = aux
        console.log(jogador1.value, jogador2.value)
        h4.innerText = `Jogador1: ${jogador1.value} (X)\nJogador2: ${jogador2.value} (O)`
        const q = document.querySelectorAll("div")
        for(i in q){
            q[i].innerText = ""
        }
    }else{
        window.location.reload(true)
    }
}




/*
- destacar as linhas
*/
