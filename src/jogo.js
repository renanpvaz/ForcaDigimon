function Jogo(nomeJogador, dificuldade){
  atribuirPalavraAleatoria (dificuldade);
  this.palavra = document.getElementById("palavra").innerHTML;
  console.log(this.palavra);
  this.espacosPalavra = substituirPorUnderline(this.palavra);
  //console.log(espacosPalavra);
  this.countErros = 0;
  this.nomeJogador = nomeJogador;
  this.dificuldade = dificuldade;
  document.getElementById("mostraPalavra").innerHTML = this.espacosPalavra;
}

//var jogo = new Jogo($('#Nome').val(), 0 || 1 )

Jogo.prototype.incrementarErros = function(){
  this.erros += 1;
}


Jogo.prototype.pegarPalavra = function(){
  pegarPalavraAleatoria(this.dificuldade, this)
}
/*
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
*/
function atribuirPalavraAleatoria (dificuldade){
    buscarPalavra(dificuldade).done(
      function(response){
      var palavra = response[Math.floor(Math.random() * (4 - 0 + 1)) + 0];
      document.getElementById("palavra").style.visibility = "hidden";
        document.getElementById("palavra").innerHTML = palavra;
     });
};
