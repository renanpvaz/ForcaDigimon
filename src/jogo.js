function Jogo(nomeJogador, dificuldade){
  pegarPalavraAleatoria(dificuldade);
  this.palavra = $('li').html();
  this.espacosPalavra = this.palavra.substituirPorUnderline() ;
  this.countErros = 0;
  this.nomeJogador = nomeJogador;
  this.dificuldade = dificuldade;
}

//var jogo = new Jogo($('#Nome').val(), 0 || 1 )

Jogo.prototype.incrementarErros = function(){
  this.erros += 1;
}
