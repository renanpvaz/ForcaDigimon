function Jogador(nomeJogador){
  this.nomeJogador = nomeJogador;
  this.palavras = [];
 }

 Jogador.prototype.armazenaPalavras = function(palavra){
   this.palavras.push(palavra);
   localStorage.setItem(jogador,JSON.stringify(jogador));
 }
