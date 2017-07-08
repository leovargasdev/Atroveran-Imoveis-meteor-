Template.menu.rendered = function(){}
Template.menu.events({
	"click #sair": function(event){
		Meteor.logout(function(err){
			if(err) {
				Bert.alert(err.reason, "danger", "growl-top-right");
			} else {
				Router.go('/');
				Bert.alert("Você saiu da sua conta!", "success", "growl-top-right");
			}
		});
	},
});
