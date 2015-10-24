function Jogo(nomeJogador, dificuldade){
  pegarPalavraAleatoria(dificuldade);
  this.palavra = document.getElementById("palavra").textContent;
  this.espacosPalavra = substituirPorUnderline(this.palavra);
  console.log(espacosPalavra);
  this.countErros = 0;
  this.nomeJogador = nomeJogador;
  this.dificuldade = dificuldade;
  document.getElementById("mostraPalavra").innerHTML = this.espacosPalavra;
}

//var jogo = new Jogo($('#Nome').val(), 0 || 1 )

Jogo.prototype.incrementarErros = function(){
  this.erros += 1;
}
