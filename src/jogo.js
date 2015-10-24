function Jogo(nomeJogador, dificuldade){
  this.palavra = 'aaaaa' || pegarPalavraAleatoria(dificuldade); //TODO: pegar .val() do <li>
  this.espacosPalavra = '_ _ _ _ _ _' || this.palavra.substituirPorUnderline().join('')  ;
  this.countErros = 0;
  this.nomeJogador = nomeJogador;
  this.dificuldade = dificuldade;
}

//var jogo = new Jogo($('#Nome').val(), 0 || 1 )

Jogo.prototype.incrementarErros = function(){
  this.erros += 1;
}
