Template.anuncioAluga.helpers({
	aluga: function() {
		var aluga = Atroveran.find({tipo: false});
		return aluga;
	}
});