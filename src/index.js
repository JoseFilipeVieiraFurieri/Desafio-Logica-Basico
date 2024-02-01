let heroName = "Jurandir";
let xp = 8500;
let rankHeroi = "";

if (xp <= 1000) {
    rankHeroi = "Ferro";
} else if (xp > 1000 && xp <= 2000) {
    rankHeroi = "Bronze";
} else if (xp > 2000 && xp <= 6000) {
    rankHeroi = "Prata";
} else if (xp > 6000 && xp <= 7000) {
    rankHeroi = "Ouro";
} else if (xp > 7000 && xp <= 8000) {
    rankHeroi = "Platina";
} else if (xp > 8000 && xp <= 9000) {
    rankHeroi =  "Ascendente";
} else if (xp > 9000 && xp <= 10000) {
    rankHeroi =  "Imortal";
} else {
    rankHeroi =  "Radiante";
}

console.log(`O Herói de nome ${heroName} está no nível de ${rankHeroi}`);