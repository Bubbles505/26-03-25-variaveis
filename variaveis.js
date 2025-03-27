// Variáveis

var nomeDaVariavel = "Valor da Variável"; // altera o valor da variavel

let nomeDaVariavelTemporaria = "Valor Temporário da Variável"; // 

const nomeDaVariavelSomenteLeitura = "Valor Somente leitura da Variável";

console.log("nomeDaVariavel:", nomeDaVariavel);

console.log("nomeDaVariavelTemporaria:", nomeDaVariavelTemporaria);

console.log("nomeDaVariavelSomenteLeitura:", nomeDaVariavelSomenteLeitura);

var matriz = ["vetor1 , vetor2 , vetor3 , vetor4 , vetor5"];

//console.log("matriz, vetor1:", matriz{0});

for (let i =0; i < matriz.length; i++) {
    console.log("matriz[" + i + "]:", matriz[i]);
}

class NomeDoObjeto { // declaração de classe NomeDoObjeto, a qual se transformará em um novo objeto, quando declarada em uma variavel novoObjeto (p.ex)
    constructor (parametroUm, parametroDois) {  // declaração do metodo construtor, o qual vai receber os parametros iniciais, os quais se converterão em propriedades de classe
      //this.parametroUm = "Valor Um";
      //this.parametroDois = "Valor Dois";
      this.parametroUm = parametroUm; // parametro (quando declarado com this.) é uma propriedade
      this.parametroDois = parametroDois;
    }
    metodoMostrarParametros(parametroUm, parametroDois) { // declaração do método que vai mostrar os parametros, NÃO AS PROPRIEDADES
        //this.parametroUm = "Valor 1";
        //this.parametroDois = "Valor 2";
        this.parametroUm = parametroUm;
        this.parametroDois = parametroDois;
        return this.parametroUm + " - " + this.parametroDois; // "return" faz o método retornar o valor declarado após o "return"
    }
}
const novoObjeto = new NomeDoObjeto(); 
console.log(novoObjeto.metodoMostrarParametros("um", "dois"));


class Livro {
    constructor ( papel, textura, largura, peso, quantidade, variedades, generos, tempo, capaDoLivro, numeroDePaginas, preco, editora, anoDePublicacao, titulo, autor, idioma, avaliacoes, dimensoes, categoria, resumo, sinopse, formato, subcategoria, cor) {
        this.papel = papel;
        this.textura = textura;
        this.largura = largura;
        this.peso = peso;
        this.quantidade = quantidade;
        this.variedades = variedades;
        this.generos = generos;
        this.tempo = tempo;
        this.capaDoLivro = capaDoLivro;
        this.numeroDePaginas = numeroDePaginas;
        this.preco = preco;
        this.editora = editora;
        this.anoDePublicacao = anoDePublicacao;
        this.titulo = titulo;
        this.autor = autor;
        this.idioma = idioma;
        this.avaliacoes = avaliacoes;
        this.dimensoes = dimensoes;
        this.categoria = categoria;
        this.reusmo = resumo;
        this.sinopse = sinopse;
        this.formato = formato;
        this.subcategoria = subcategoria;
        this.cor = cor;
    }

    metodoMostrarParametros( papel, textura, largura, peso, quantidade, variedades, generos, tempo, capaDoLivro, numeroDePaginas, preco, editora, anoDePublicacao, titulo, autor, idioma, avaliacoes, dimensoes, categoria, resumo, sinopse, formato, subcategoria, cor) {
        this.papel = papel;
        this.textura = textura;
        this.largura = largura;
        this.peso = peso;
        this.quantidade = quantidade;
        this.variedades = variedades;
        this.generos = generos;
        this.tempo = tempo;
        this.capaDoLivro = capaDoLivro;
        this.numeroDePaginas = numeroDePaginas;
        this.preco = preco;
        this.editora = editora;
        this.anoDePublicacao = anoDePublicacao;
        this.titulo = titulo;
        this.autor = autor;
        this.idioma = idioma;
        this.avaliacoes = avaliacoes;
        this.dimensoes = dimensoes;
        this.categoria = categoria;
        this.reusmo = resumo;
        this.sinopse = sinopse;
        this.formato = formato;
        this.subcategoria = subcategoria;
        this.cor = cor;
        return papel + " - " + textura + " - " + largura + " - " + peso + " - " + quantidade + " - " + variedades + " - " + generos + " - " + tempo + " - " + capaDoLivro + " - " + numeroDePaginas + " - " + preco + " - " + editora + " - " + anoDePublicacao + " - " + titulo + " - " + autor + " - " + idioma + " - " + avaliacoes + " - " + dimensoes + " - " + categoria + " - " + resumo + " - " + sinopse + " - " + formato + " - " + subcategoria + " - " + cor;
    }
}
const livro = new Livro(); // "const" somente leitura
console.log(livro.metodoMostrarParametros("papel", "textura", "largura", "peso", "quantidade", "variedades", "generos", "tempo", "capaDoLivro", "numeroDePaginas", "preco", "editora", "anoDePublicacao", "titulo", "autor", "idioma", "avaliacoes", "dimensoes", "categoria", "resumo", "sinopse", "formato", "subcategoria", "cor" ));