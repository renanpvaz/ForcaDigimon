function substituirPorUnderline(palavra){
  var teste = palavra.replace(/[^\s-]/g, '_').split('').join('');
  return teste;
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
