var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/blog');

var Faculdade = mongoose.model('Faculdades',{nome:String,sigla:String });
var novaFaculdade = new Faculdade({nome:'Fag',sigla:'FAG'});
var faculdade1 = new Faculdade({nome: 'união cascavel', sigla :'UUUUU'});
var astolfo = new Faculdade({nome: 'Astolfo', sigla :'PPPPP'});

novaFaculdade.save(function(err){
    if(err) throw err;
    console.log('Dados salvos com sucesso');
})

faculdade1.save(function(err){
    if(err) throw err;
    console.log('Dados salvos com sucesso');
})

astolfo.save(function(err){
    if(err) throw err;
    console.log('Dados salvos com sucesso');
})