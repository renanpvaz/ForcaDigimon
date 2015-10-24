function substituirPorUnderline(palavra){
  var teste = palavra.replace(/[^\s-]/g, '_').split('').join('');
  return teste;
}

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

function buscarPalavra(dificuldade){
  var urlBusca = 'http://localhost:3000/' + dificuldade;

  return $.ajax({
    url: urlBusca,
    type: 'GET'
  });
}
