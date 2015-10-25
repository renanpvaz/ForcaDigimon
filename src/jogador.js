function Jogador(nomeJogador){
  this.nomeJogador = nomeJogador;
  this.palavras = [];
 }

 Jogador.prototype.armazenaPalavras = function(palavra){
   this.palavras.push(palavra);
   this.adicionarPalavrasCache();
 };

 Jogador.prototype.verificarPalavras = function(palavra){
   if (localStorage.getItem(jogador.nomeJogador)){
     var palavrasJogador = JSON.parse(localStorage.getItem(jogador.nomeJogador)).palavras;
     return palavrasJogador.join('').includes(palavra);
   }
 }

 Jogador.prototype.adicionarPalavrasCache = function(){
   localStorage.setItem(jogador.nomeJogador,JSON.stringify(jogador));
 }
