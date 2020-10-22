
 function clicou (){
     document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>"
     
 }
 function redirecionar(){
     window.open("https://google.com.br"); //cria uma nova aba
     //window.location.href = "https://uol.com.br" // abre o link na mesma pagina
 }

 function trocar(elemento){
    //  document.getElementById("mousemove").innerHTML= 'Obrigado por passar o mouse';
    elemento.innerHTML = "Obrigado por passar o mouse";     
    //alert("trocar texto");
 }
 function voltar(elemento){
    //document.getElementById("mousemove").innerHTML="Passe o mouse aqui";
elemento.innerHTML = " Passe o mouse aqui"
}

function load (){
    alert("Pagina carregada")
}

function funcaoChange (elemento){
    console.log(elemento.value)
}
/*
function soma(n1,n2){
    return n1+n2;
    }
*/
    /*
    var validar;
  function validaIdade (idade){
      if (idade>= 18){
          validar= true;
      }else{
          validar= true
      }
      return validar;
  }

  var idade = prompt("Qual a sua idade");
  console.log(validaIdade(idade))
  */
  // alert (soma(52, 10));
  /*
var d = new Date();
alert(d.getMonth()+1);
alert(d.getHours());
alert(d.getMinutes());
*/

/*
var count ;
for(count=0 ; count <= 5 ; count ++){
    console.log (count)
}
*/
/*
var count = 0;
 while (count <= 5 ){
     console.log(count);
     count = count + 1 ;
 }
*/
/*
var idade = prompt ("Qual a sua idade");
if(idade >=18){
    alert("Maior de idade");
}else{
    alert("Menor de idade");
}
*/

/*
var frutas = [{nome:"maça", cor :"vermelha"},{nome:"uva", cor:"roxa"}];
console.log(frutas);
alert(frutas[0].cor);
*/
/*
var fruta = {nome:"maça", cor :"vermelha"}
console.log(fruta.nome);
alert(fruta.cor);
*/
 //var lista ["maçã"  "pera" "laranja" ];
//lista.push("uva");
//lista.pop();
//console.log(lista.lenght);
//console.log(lista.toString());
//console.log(lista.join(" - "))


//var nome = "Marcio Santos";
//var n1 = 34;
//var n2 = 10;
//var frase = "Japão é o melhor time do mundo!";
//alert (nome + " tem " + idade + " anos");
//alert (idade + idade2);
//console.log(nome);
//console.log(n1+n2);
//console.log(frase.tolowerCase());
//alert (frase.replace("Japão" , "Brasil"));