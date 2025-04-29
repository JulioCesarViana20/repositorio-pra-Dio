function NomedoPlayer(nome) {
    return nome;
}

let jogadores = [
    { nome: "felipe", desempenho: 76 },
    { nome: "ana", desempenho: 12 },
    { nome: "bruno", desempenho: 5 },
    { nome: "lara", desempenho: 88 },
    { nome: "joão", desempenho: 110 },
];

for (let i = 0; i < jogadores.length; i++) {
    let nome = NomedoPlayer(jogadores[i].nome);
    let desempenho = jogadores[i].desempenho;

    if (desempenho <= 10) {
        console.log(nome + " é ferro");
    }

    if (desempenho >= 11 && desempenho <= 20) {
        console.log(nome + " é bronze");
    }

    if (desempenho >= 21 && desempenho <= 50) {
        console.log(nome + " é prata");
    }

    if (desempenho >= 51 && desempenho <= 80) {
        console.log(nome + " ouro ");
    }

    if (desempenho >= 81 && desempenho <= 90) {
        console.log(nome + " é diamante");
    }

    else if (desempenho >= 91 && desempenho <= 100) {
        console.log(nome + " é lendário");
    }

    if (desempenho >= 101) {
        console.log(nome + " é imortal");
    }
}