// Lista de Heróis

const herois = [
{ nome: "Arqueiro Verde", xp: 800 },
{ nome: "Homem de Ferro", xp: 3000 },
{ nome: "Mulher Maravilha", xp: 1500 },
{ nome: "Capitão América", xp:12000 },
{ nome: "Super Mario", xp:6500 },
{ nome: "Doutor Estranho", xp: 8500 },
{ nome: "Hulk", xp: 9500 },
{ nome: "Thor", xp: 3000 }
];

//Função para classificar o nível do herói

function classificarHeroi(xp) {
  if (xp < 1000) {
    return "Ferro";
  } else if (xp <= 2000) {
    return "Bronze";
  } else if (xp <= 5000) {
    return "Prata";
  } else if (xp <= 7000) {
    return "Ouro";
  } else if (xp <= 8000) {
    return "Platina";
  } else if (xp <= 9000) {
    return "Ascendente";
  } else if (xp <= 10000) {
    return "Imortal";
  } else {
    return "Radiante";
  }
}

// Laço para percorrer os heróis e exibir a mensagem

for (let i = 0; i < herois.length; i++) {
  const heroi = herois[i];
  const nivel = classificarHeroi(heroi.xp);
  console.log(`O Herói de nome ${heroi.nome} está no nível de ${nivel}`);
}