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