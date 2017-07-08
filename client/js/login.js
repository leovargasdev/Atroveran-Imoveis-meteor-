Tracker.autorun(function(){
	if(Meteor.userId()){
		Router.go("/cadastroAnuncio");
	}
});
Template.login.rendered = function() {}
Template.login.events({
	"submit .form-login": function(event){
		var email = trimInput(event.target.email.value);
		var password = trimInput(event.target.senha.value);
		if( isNotEmpty(email) && isNotEmpty(password) && isEmail(email)){
			Meteor.loginWithPassword(email, password, function(err){
				if(err) {
					Bert.alert(err.reason, "danger", "growl-top-right");
					return false;
				} else {
					Router.go("/cadastroAnuncio");
					Bert.alert("Você está logado", "success", "growl-top-right");
				}
			});
		}
		return false; // Prevent Submit
	}
});

// Validation Rules

// Trim Helper
var trimInput = function(val){
	return val.replace(/^\s*|\s*$/g, "");
};

var isNotEmpty = function(value){
	if (value && value !== ''){
		return true;
	}
	Bert.alert("Por favor preencha todos os campos", "danger", "growl-top-right");
	return false;
};

// Validate Email
isEmail = function(value) {
	var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	if(filter.test(value)) {
		return true;
	}
	Bert.alert("Por favor preencha um e-mail válido", "danger", "growl-top-right");
	return false;
};
