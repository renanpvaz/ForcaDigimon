function Jogo(jogador, dificuldade){
  atribuirPalavraAleatoria (dificuldade);
  this.palavra = $('#palavra').text();
  console.log(this.palavra);
  this.espacosPalavra = substituirPorUnderline(this.palavra);
  this.countErros = 0;
  this.dificuldade = dificuldade;
  this.pontuacao = 0;
  this.jogador = jogador;
  $('#mostraFrase').text(this.espacosPalavra);
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

Jogo.prototype.substituirPosicaoPorLetra = function(letra){
  var self = this;
  var espacos = self.espacosPalavra.split('');
  var palavra = self.palavra.toLowerCase();
  var letra = letra.toLowerCase();

  if(palavra.includes(letra)){
    self.pontuacao += 1;
    espacos.forEach(function(elem, index){
      if(palavra[index] == letra)
        espacos.splice(index, 1, letra);
      });
      self.espacosPalavra = espacos.join('');
      return self;
    }else{
      self.countErros += 1;
    }
  }

function atribuirPalavraAleatoria (dificuldade){
    buscarPalavra(dificuldade).done(
      function(response){
      var palavra = response[Math.floor(Math.random() * (4 - 0 + 1)) + 0];
    $("#palavra").text(palavra);
     });
};

function ordenaTopFive(){
  var pontuacao = 'pontuacao';
  buscaTopFive().done(
    function(response){
      ordenaProAtributo(response,pontuacao)
      })
    };

function ordenaProAtributo(response,pontuacao){
    var topFive = response.sort(function(valorA,valorB){
    return valorA[pontuacao] < valorB[pontuacao];
  });
    for(var i = 0; i < 5;i++){
      var listaPontuacao = 'Nome:' + topFive[i].nome+' Pontuação:'+ topFive[i].pontuacao;
      $('#showTopFive').append(listaPontuacao);
      $('#showTopFive').append('<br>');
    }
}
