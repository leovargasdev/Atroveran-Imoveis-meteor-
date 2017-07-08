Router.configure({
    layoutTemplate: 'pagina_home'
});

Router.map(function(){
    this.route('Pagina de Login',{
        path: '/',
        template: 'login'
    });
    this.route('Cadastro novo usuario', {
		path: '/cadastroUsuario',
		template: 'cadastroUsuario'
	});
    this.route('Cadastrar novo anuncio',{
        path: '/cadastroAnuncio',
        template: 'cadastroAnuncio'
    });
    this.route('Anuncios para venda',{
        path: '/anuncioVenda',
        template: 'anuncioVenda'
    });
    this.route('Anuncios para alugar',{
        path: '/anuncioAluga',
        template: 'anuncioAluga'
    });
    this.route('Sobre',{
        path: '/sobre',
        template: 'sobre'
    });
});
