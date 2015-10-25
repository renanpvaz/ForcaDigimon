function Jogo(nomeJogador, dificuldade){
  atribuirPalavraAleatoria (dificuldade);
  this.palavra = $('#palavra').text();
  console.log(this.palavra);
  this.espacosPalavra = substituirPorUnderline(this.palavra);
  //console.log(espacosPalavra);
  this.countErros = 0;
  this.nomeJogador = nomeJogador;
  this.dificuldade = dificuldade;
  $('#mostraPalavra').text(this.espacosPalavra);
}

//var jogo = new Jogo($('#Nome').val(), 0 || 1 )

Jogo.prototype.incrementarErros = function(){
  this.erros += 1;
}


Jogo.prototype.pegarPalavra = function(){
  pegarPalavraAleatoria(this.dificuldade, this)
}

Jogo.prototype.atribuirPalavraAleatoria = function(){
  var self = this;
    buscarPalavra(self.dificuldade).done(
      function(response){
        self.palavra = response[Math.floor(Math.random() * (4 - 0 + 1)) + 0];
      })
      .done(
        function(){
          self.espacosPalavra = jogo.palavra.substituirPorUnderline()
        });
}

function atribuirPalavraAleatoria (dificuldade){
    buscarPalavra(dificuldade).done(
      function(response){
      var palavra = response[Math.floor(Math.random() * (4 - 0 + 1)) + 0];
    $("#palavra").text(palavra);
     });
};
