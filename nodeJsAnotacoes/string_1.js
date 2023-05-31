{
    const cifrao = '\u0024'
    const aMaiusculo = '\u0041'
    const tique = '\u2705'
    const hiragana = '\u3041'

    console.log(cifrao)
    console.log(aMaiusculo)
    console.log(tique)
    console.log(hiragana)
}
{

    const cidade = "belo horizonte";
    const input = "Belo Horizonte";

    console.log(cidade === input); // false
}
{
    const cidade2 = "belo horizonte";
    const input2 = "Belo Horizonte";

    const inputMinusculo = input2.toLowerCase();

    console.log(cidade2 === inputMinusculo); // true
}

{   //Outro exemplo: qualquer inserção de texto que exija uma quantidade mínima de caracteres,
    // como uma senha ou um nome. A propriedade length pode ser utilizada para sabermos
    // quantos caracteres uma string contém:
    const senha = "iago"
    console.log(senha.length) // 13 caracteres

}

{
    let telefone = 12341234;
    console.log("O telefone é " + String(telefone)); // teremos a conversão do número 12341234 para uma string 
    //“12341234” e assim poderemos fazer a concatenação entre as strings

    let telefone2 = 12341234;
    console.log("O telefone é " + telefone2.toString()); // o .toString() é uma outra forma para  
    //fazer essa conversão, que é mais parecida com outras linguagens de programação.
    console.log(`O telefone é : ${telefone2}.`);//outras formas 

    let usuarioConectado = false;
    console.log(String(usuarioConectado)); // teremos a conversão da booleana para string, nesse caso teremos uma string “false”.
    usuarioConectado = true;
    console.log(String(usuarioConectado)); // agora teremos uma string “true”.

    // Vamos calcular a área de um retângulo
    let largura = "10";
    let altura = "5";
    console.log(Number(largura) * Number(altura)); // teremos a conversão de String para números, possibilitando
    // a realização da multiplicação

}