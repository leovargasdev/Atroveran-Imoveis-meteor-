Template.cadastroAnuncio.rendered = function() {}
Template.cadastroAnuncio.events({
	"submit .form-Anuncio": function(event){
        var tipo = event.target.tipo.value;
        var preco = event.target.preco.value;
		var quant = event.target.quant.value;
		var endereco = event.target.endereco.value;
        var vender = false;
        if(tipo == "vender" || tipo == "Vender"){
            vender = true;
        }
        if (isNotEmpty(preco) && isNotEmpty(quant) && isNotEmpty(endereco)) {
            Meteor.call('addAnuncio', preco, vender, quant, endereco);
			event.target.tipo.value = "";
			event.target.preco.value = "";
			event.target.quant.value = "";
            event.target.endereco.value = "";
			Bert.alert("Anuncio cadastrado com sucesso!", "success", "growl-top-right");
            Router.go("/cadastroAnuncio");
            return false;
		} else {	
			Bert.alert("Preencha todos os campos", "danger", "growl-top-right");
            return false;
		}
		return false;
	}
});
var isNotEmpty = function(value){
	if (value && value !== ''){
		return true;
	}
	Bert.alert("Este campo esta com problemas", "danger", "growl-top-right");
	return false;
};