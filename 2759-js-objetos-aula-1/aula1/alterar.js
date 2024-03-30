const pessoa = {//alterar const por let, para poder atribuir
  nome: "Luma", //pode ser alterado
  profissao: "Engenheira",  //pode ser alterado
};

console.log(pessoa.nome);

console.log(pessoa.telefone);

pessoa.telefone = "11 2223333444"; //add

console.log(pessoa.telefone);

pessoa.nome = "Luma Silva"; //add

console.log(pessoa);

const novaPessoa = { //erro
  nome: "Pedro",
};

pessoa = novaPessoa;
