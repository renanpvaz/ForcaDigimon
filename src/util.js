String.prototype.substituirPorUnderline = function(){
return this.replace(/[^\s-]/g, '_').split('').join('');
}

//TODO: corrigir ultima posição

Array.prototype.substituirPosicaoPorLetra = function(palavra, letra){
  var self = this;
  var last = palavra[palavra.lenght-1];
  if(palavra.includes(letra)){
    self.forEach(function(elem){
      self.splice(palavra.indexOf(letra), 1, letra);
      palavra = palavra.replace(letra, '_');
      });
      return self;
    }
  }

  function pegaNumeroAleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function pegarPalavraAleatoria(dificuldade){

    var urlPalavras;

    if(dificuldade === 0){
      urlPalavras = 'http://localhost:3000/0';
    }else{
      urlPalavras = 'http://localhost:3000/1';
    }

    //TODO: retornar palavraAleatoria invés de usar .append()
      $.get(urlPalavras).done(
        function(palavras){
          var random = pegaNumeroAleatorio(0, palavras.length - 1);
          var palavraAleatoria = palavras[random];
          $('ul').append($('<li>').html(palavraAleatoria));
      })
  }
