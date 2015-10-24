function Jogo(nomeJogador, dificuldade){
  pegarPalavraAleatoria(dificuldade);
  var palavraSorteada = $("#palavra").text();
  this.palavra = palavraSorteada;
  this.espacosPalavra = substituirPorUnderline(this.palavra);
  this.countErros = 0;
  this.nomeJogador = nomeJogador;
  this.dificuldade = dificuldade;
  document.getElementById("palavra").innerHTML = this.espacosPalavra;
  //document.getElementById("palavra").style.visibility = "initial";
}

//var jogo = new Jogo($('#Nome').val(), 0 || 1 )

Jogo.prototype.incrementarErros = function(){
  this.erros += 1;
}
