function substituirPorUnderline(palavra){
  var palavraPronta = palavra.replace(/[^\s-]/g, '_').split('').join('');
  return palavraPronta;
}

String.prototype.substituirPorUnderline = function(){
return this.replace(/[^\s-]/g, '_').split('').join('');
}


function pegaNumeroAleatorio(min, max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function buscarPalavra(dificuldade){
  var urlBusca = 'http://localhost:3000/' + dificuldade;

 return $.ajax({
    url: urlBusca,
    type: 'GET',
    //async: false,
    complete: function(data){
      result = data;
    }
  });
}

function buscaJogadores(){
  var urlBusca = 'http://localhost:3000/2';

  return $.ajax({
    url: urlBusca,
    type: 'GET',
    complete: function(data){
      result = data;
    }
  });
};

function buscaTopFive(){
  var urlBusca = 'http://localhost:3000/2'

  return $.ajax({
    url: urlBusca,
    type: 'GET',
    complete: function(data){
      result = data
    }
  });
}

function musicaBtJogar(){
  myAudio = new Audio('sons/Redee.wav');
  myAudio.play();
}
