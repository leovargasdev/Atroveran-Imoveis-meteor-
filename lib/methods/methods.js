if (Meteor.isServer){
	Meteor.methods({
		addAnuncio: function(preco, tipo, quant, endereco){
			// conferir se o usuario esta logado, para cadastrar uma carona
            if(!Meteor.userId()) {
				throw new Meteor.Error('not authorized');
				return false;
			} else {
                var autor = Meteor.user().username;
                Atroveran.insert({
                    autor: autor,
                    preco: preco,
                    quant: quant,
                    tipo: tipo,
                    endereco: endereco,
                });
            }
        }
	});
}