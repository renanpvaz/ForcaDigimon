function Jogador(nomeJogador){
  this.nomeJogador = nomeJogador;
  this.palavras = [];
 }

 Jogador.prototype.armazenaPalavras = function(palavra){
   this.palavras.push(palavra);
   this.adicionarPalavrasCache();
 };

 Jogador.prototype.verificarPalavras = function(palavra){
   palavra = palavra.toLowerCase();
   if(jogador.nomeJogador,JSON.stringify(jogador)){
     return this.palavras.join('').includes(palavra);
   }
 }

 Jogador.prototype.adicionarPalavrasCache = function(){
   localStorage.setItem(jogador.nomeJogador,JSON.stringify(jogador));
 }
