
var matrizDeFrutas = ["Banana", "Maçã", "Mamão"]; // declarando matriz de frutas, ela recebe os nomes das frutas, cada vetor é uma "string"

matrizDeFrutas.push("Abacate"); // "push" faz parte da classe de "string", principal do JavaScript (faz parte da classe array), empurra o "Acabte" para frente do "Mamão"

console.log(matrizDeFrutas.toString()); //envia a matriz "frutas" já convertido em "string", "string" é texto

// removendo vetores de uma matriz

var indexadorDovetor = matrizDeFrutas.indexOf("Maçã"); // Aqui é feita um busca pelo texto "maçã" e, se encontrado o texto, retorna o número do vetor na matriz, iniciando por 0

matrizDeFrutas.splice(indexadorDovetor, 1); // Aqui é retirado o vetor, ora antes encontrado na variável indexadorDoVeor, sendo o número 1 a indicação da quantidade de vetores; este mesmo métdp também é utilizado para substituir vetores em uma matriz

console.log(matrizDeFrutas.toString());