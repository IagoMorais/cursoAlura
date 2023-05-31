const cliente = {
  nome: "Andre",
  idade: 32,
  cpf: "1122233345",
  email: "andre@dominio.com",
 // altura: 1.85, pode ser acrescentada
};

console.log(
  `O nome do cliente é ${cliente["nome"]} e essa pessoa tem ${cliente["idade"]} anos.`
);

const chaves = ["nome", "idade", "cpf", "email", "altura"]; //pode buscas os objetos os elementos.

chaves.forEach((chave) => {
  console.log(`A chave ${chave} tem valor ${cliente[chave]}`);
});
