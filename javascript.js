/*const nome = prompt("Qual seu nome")
const idade = prompt("sua idade ?")
const linguagem = prompt("Qual linguagem de programação você está estudando")

const msg_ = `olá ${nome} você tem ${idade} anos e já estuda ${linguagem}`

var msg = document.querySelector(".mensagem")
msg.textContent = msg_//meu conteudo recebe a minha mensagem dos prompts*/



/*const gosta = prompt(`você gosta de estudar ${linguagem} ? entre com 1- Sim ou 2- Não `)

if (gosta == 1) {
  let msgosta = ("muito bom vc terá sucesso continue estudando")
  msg.textContent = msgosta
}
if (gosta == 2) {
  alert("há que pena já estudou outras linguagens")
}*/



const nome = prompt("Qual seu nome")
const area = prompt(" Escolha sua Area ! 1- Front-End  2- Back-end ")

if (area == 1) {

  const texto = (`Olá ${nome} você escolheu Front-End , você pode aprender React ou Vue`)
  alert(texto)

}

if (area == 2) {
  //*alert("back-end")
  texto = (`Olá ${nome} você escolheu Back-End , você pode aprender c# ou java`)
  alert(texto)
}

const opcao = prompt("você quer seguir se especializando ? -01 ou você quer  seguir se desenvolvendo para Fullstack ?- 02")
if (opcao == 1) {
  alert("você vai ficar mais craque ainda se especializando !")
}
if (opcao == 2) {
  alert("continue ainda como fullstack ! e chegue em outro nível !")
}

//entrada dados array
let item = prompt("adicione uma tecnologia que você quer estudar ?......")//entrada dado
const lista = [] //array vazio
lista.push(item)//adicionando o dado dentro do array
alert("tecnologia adicionada com sucesso seu nome é : " + lista)//mostra dado
if (item == "java") {
  alert("Linguagem top parabéns pela escolha")
  alert(lista)
}

//loop
var cont = 0
while (cont < lista.length) {
  item = prompt("tem mais alguma tecnologia que vc gostaria de aprender ? .... caso queira sair Digite (sair)")
  lista.push(item)
  cont++
  //condicional
  if (item == "python") {
    alert("Linguagem mineração de dados")
    alert(lista)
  }
  else if (item == "html") {
    alert("aprenda mais html que você vai longe !")
    alert(lista)
  }
  else if (item == "javascript") {
    alert("Linguagem ótima para web")
    alert(lista)
  }
  else if (item == "") {
    alert("essa linguagem não está na lista ")

  }
  else if (item == "sair") {
    break
  }
  alert(lista)
}



























