let nickname = "Felipao";
let Xp = 8764;

if (Xp <= 1000) {
    Xp = "ferro";
}

if (Xp >= 1001 && Xp <= 2000) {
    classe = "bronze";
}

if (Xp >= 2001 && Xp <= 5000) {
    Xp = "prata";
}

if (Xp >= 5001 && Xp <= 7000) {
    Xp = "ouro";
}

if (Xp >=7001 && Xp <=8000) {
    Xp  = "platina";
}

if (Xp >=  8001 && Xp <= 9000) {
    Xp  = "Ascedente";
}

if (Xp >= 9001 && Xp <= 10000) {
    Xp  = "Imortal";
}

if (Xp >= 10001) {
    Xp  = "Radiante";
}

console.log(nickname+ " é da classe " + Xp);