var matrizDeFrutas = ["Banana", "Maçã", "Mamão"]; // declarando matriz de frutas, ela recebe os nomes das frutas, cada vetor é uma "string"

matrizDeFrutas.push("Abacate"); // "push" faz parte da classe de "string", principal do JavaScript (faz parte da classe array), empurra o "Acabte" para frente do "Mamão"

console.log(matrizDeFrutas.toString()); //envia a matriz "frutas" já convertido em "string", "string" é texto

// Editando vetores em uma matriz

matrizDeFrutas.splice(1,1, "Laranja"); // "1" significa editar, "0" significa adicionar, O primeiro parametro significa adicionar, o segundo parametro significa editar, o terceiro parametro é o vetor que será editado 

console.log(matrizDeFrutas.toString());