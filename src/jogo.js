function Jogo(jogador, dificuldade){
  atribuirPalavraAleatoria(dificuldade);
  this.palavra = $('#palavra').text();
  this.espacosPalavra = substituirPorUnderline(this.palavra);
  this.countErros = 0;
  this.dificuldade = dificuldade;
  this.pontuacao = 0;
  this.jogador = jogador;
  this.letrasUsadas = new Array();
  $('#mostraFrase').text(this.espacosPalavra);
}

Jogo.prototype.incrementarErros = function(){
  this.erros += 1;
}


Jogo.prototype.pegarPalavra = function(){
  pegarPalavraAleatoria(this.dificuldade, this)
}

Jogo.prototype.atribuirPalavraAleatoria = function(){
  var self = this;
  var palavraResposta;

    buscarPalavra(self.dificuldade).done(
      function(response){

        var categoria = response[Math.floor(Math.random() * (5))];
        var palavraResposta = categoria.palavras[Math.floor(Math.random() * (categoria.palavras.length - 1))];

        while(self.jogador.verificarPalavras(palavraResposta)){
          palavraResposta = categoria.palavras[Math.floor(Math.random() * (categoria.palavras.length - 1))];
        };
        self.palavra = palavraResposta;
      })
      .done(
        function(){
          self.espacosPalavra = jogo.palavra.substituirPorUnderline()
        });
}

Jogo.prototype.chutarLetra = function(letra){
  var verificaLetra = $.inArray(letra, this.letrasUsadas);
  if(letra === ''){

  }
  else if(verificaLetra !== -1){

  }
  else{
      var self = this;
      var espacos = self.espacosPalavra.split('');
      var palavra = self.palavra.toLowerCase();
      var letra = letra.toLowerCase();

      self.letrasUsadas.push(letra);

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
  }

Jogo.prototype.chutarPalavra = function(palavra){

  if(palavra === this.palavra){
    $('#mostraPalavra').html(this.palavra);
  }else{
    this.countErros = 6;
  }
}

function atribuirPalavraAleatoria (dificuldade){
    buscarPalavra(dificuldade).done(
      function(response){
      var categoria = response[Math.floor(Math.random() * (5))];
      var palavra = categoria.palavras[Math.floor(Math.random() * (categoria.palavras.length - 1))];

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
    $('#showTopFive').html('');
    for(var i = 0; i < 5;i++){
      if(!topFive.length){
        $('#showTopFive').append('Ainda não temos pontuações!');
        break;
      }
      else{
        var listaPontuacao = 'Nome:' + topFive[i].nome+' Pontuação:'+ topFive[i].pontuacao;
        $('#showTopFive').append(listaPontuacao);
        $('#showTopFive').append('<br>');
    }
  }
}
