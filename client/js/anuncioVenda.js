Template.anuncioVenda.helpers({
	vendas: function() {
		var vendas = Atroveran.find({tipo: true});
		return vendas;
	}
});