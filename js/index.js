var language = 'pt'
var pending = 0;

function initialize() {
	var mapCanvas = document.getElementById('map');
	var mapOptions = {
		center: new google.maps.LatLng(38.6926783, -9.3027091,17),
		zoom: 15,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	}

	var map = new google.maps.Map(mapCanvas, mapOptions, marker);
	var marker = new google.maps.Marker({
		position: new google.maps.LatLng(38.6926783, -9.3027091,17),
		map: map
	});
}

google.maps.event.addDomListener(window, 'resize', initialize);
google.maps.event.addDomListener(window, 'load', initialize);



function translate_to(lang){
	if(language == 'en'){
		/*************************ENGLISH**********************************/
		document.getElementById("about-text").innerHTML = " About"
		document.getElementById("contacts-text").innerHTML = " Contact"
		document.getElementById("resume-text").innerHTML = " Résumé"
		document.getElementById("lang-text").innerHTML = " En"
		document.getElementById("about-title").innerHTML = "About"
		
		document.getElementById("moment").innerHTML = "present day"
		document.getElementById("about-sentence").innerHTML = "My name is Ivan Freire and I have a master's degree in information" +
		" systems and computer engineering."

		document.getElementById("about-sentence2").innerHTML = "Interest in this area has awakened very early when I had" +
		" my first computer and whenever there was a problem with it I always tried to solve it myself."

		document.getElementById("about-sentence3").innerHTML = "I liked to change the source code of" +
		" web pages to see the changes taking place and made my first site at about 14 years of age."

		document.getElementById("about-sentence4").innerHTML = "I'm very curious," +
		" eager to learn and I love challenges, trying to be the best at what I do, both personally and professionally." +
		" These personal characteristics were reflected in my academic career because I had to learn most of the materials" +
		" alone while reconciling work with a course without an after-hours option."
		
		
		document.getElementById("about-sentence5").innerHTML = "I've always had a fascination for artificial intelligence and my thesis was about monitoring people in domestic environments based on the intelligent houses of the future" +
" and the creation of activity patterns of the inhabitants in order to generate automatic alerts in situations of risk and deviations from normal patterns of activity. I recently attended the" +
" machine learning course from Open Data Science that involved participation in kaggle competitions which aroused great interest in this area."

		document.getElementById("education-text").innerHTML = "Education"
		document.getElementById("experience").innerHTML = "Professional Experience"
		document.getElementById("bachelor").innerHTML = "Bachelor's in Information Systems and Computer Engineering"
		document.getElementById("masters").innerHTML = "Master's in Information Systems and Computer Engineering"
		document.getElementById("12th-grade").innerHTML = "12th Grade"
		
		document.getElementById("sen").innerHTML = "Senior Consultant"
		document.getElementById("sen-text").innerHTML = "Workers Compensation Project in the core of a major international insurer. I was involved in adapting the product and the various modules for the old laws" +
" in order to migrate the policies of this product that were in the old core of the company and, consequently, assisted in the effective migration of the referred policies to the current core. I was in the warranty period and" +
" in the corrective and evolutive maintenance of this product."
		document.getElementById("sen-technology-used").innerHTML = "Technology used:"
		document.getElementById("sen-date").innerHTML = "September 2018"
		
		document.getElementById("solan").innerHTML = "Solutions Analist"
		document.getElementById("solan-text").innerHTML = "Workers Compensation Project in the core of a major international insurance company. I was responsible for building the pensions module." +
" The construction of this module has undergone functional and technical analysis, the creation of pension management forms, the application of business rules and current Workers Compensation law and the beneficiaries' management. " +
" In addition, I was responsible for the creation of several Workers Compensation processes, such as automatic payments of monthly installments, updating rates and salary volumes," +
" updating pensions after updates by the Workers Compensation fund and changing the monthly pensions values taking into account the age of the beneficiaries so that their pensions remain in accordance with the current law."
		document.getElementById("solan-technology-used").innerHTML = "Technology used:"
		document.getElementById("solan-date").innerHTML = "September 2017"
		
		
		document.getElementById("solass").innerHTML = "Solutions Assistant"
		document.getElementById("solass-text").innerHTML = "Projects in the core of a major international insurance company - Civil Liability, Personal Accidents (Illness) and Workers Compensation. I was responsible for building the screens" +
" for the products and their respective validations for filled fields as well as the creation of letters to send to the clients, through the construction of XML files, and the tariff rules of the various products. I was also involved in sending information through the layer" +
" of services for the quotation and simulation of policies made by an external simulator using the SOAP protocol. I also had to create reports by extracting data and building excels from it."
		document.getElementById("solass-technology-used").innerHTML = "Technology used:"
		document.getElementById("solass-date").innerHTML = "September 2015"
		
		

		document.getElementById("internship").innerHTML = "Summer Internship"
		document.getElementById("internship-text").innerHTML = "The internship lasted a month during which I was in charge of" +
		" individually developing a mobile application in which it would be possible to consult" +
    " company news, check the current value of the meal card, mark absences and check whether they have been accepted and consult a chart" +
    " with all the absences with the possibility of adding filters to it (absence type, date, approved, pending or rejected)." +
    " It was an enriching experience that allowed me to see the professional environment of an IT company."
		document.getElementById("technology-used").innerHTML = "Technology used:"
		document.getElementById("internship-evaluation").innerHTML = "Internship evaluation:"
		document.getElementById("internship-evaluation-value").innerHTML = "Very Good"
		document.getElementById("internship-date").innerHTML = "July 2014"

		document.getElementById("teleoperator").innerHTML = "Teleoperator"
		document.getElementById("mcall-text").innerHTML = "For about a year and a half I had to contact High Value members of Nespresso Club" +
		" as my main objective in order to verify their degree of satisfaction, presenting them with Nespresso accessories and informing them" +
		" about new flavors and available limited editions. Was also carrying out registration of new members and making appointments for" +
		" machine repairs."
		document.getElementById("mcall-text2").innerHTML = "With a similar main objective, I also contacted members of Clube de Vinhos e" +
		" Sabores (Wines and Flavors Club)."
		document.getElementById("goals-achieved").innerHTML = "Goals achieved:"
		document.getElementById("goals-achieved-text").innerHTML = "1st place in a sales competition of Clube de Vinhos e Sabores"
		document.getElementById("teleoperator-date").innerHTML = "July 2013"

		document.getElementById("telemarketer").innerHTML = "Lead Generation Telemarketer"
		document.getElementById("telemarketer-text").innerHTML = "I was involved in two projects which consisted in presenting" +
		" solutions to a selected range of companies. Interested companies were marked as a ‘Lead’ and would then be contacted by the client company" +
		" to schedule a meeting, where the solutions would be presented in person."
		document.getElementById("telemarketer-text2").innerHTML = "1st project - Oracle: Presentation of solutions for databases referencing" +
		" features like data recovery, security against attacks (e.g. sql injections), concurrency control, etc"
		document.getElementById("telemarketer-text3").innerHTML = "2nd project - Critical Software: providing solutions for control and" +
		" maintenance of wind and solar power parks."
		document.getElementById("telemarketer-date").innerHTML = "February 2013"

		document.getElementById("pt-sales").innerHTML = "D2D Salesman"
		document.getElementById("pt-sales-text").innerHTML = "I was a member of Portugal Telecom’s Alpha Team, doing face-to-face sales of meo" +
		" and sapo products and being in charge of a portfolio of clients. It was necessary to follow up all the process since the signing" +
		" of the contract, installation and activation of the service and during the first few weeks to ensure full satisfaction of the new client."
		document.getElementById("pt-sales-goals").innerHTML = "Goals achieved:"
		document.getElementById("pt-sales-goals-text").innerHTML = "2nd place in the August month's top sales chart."
		document.getElementById("pt-sales-date").innerHTML = "July 2012"

		document.getElementById("store").innerHTML = "Store's Employee"
		document.getElementById("store-text").innerHTML = "I was in charge of the customer attendance for equipment sales, receiving computers for repair," +
		" computer assembly, formatting and software installation."
		document.getElementById("store-date").innerHTML = "April 2008"

		document.getElementById("tech-skills").innerHTML = "Technical Skills"
		document.getElementById("projects").innerHTML = "Projects"
		document.getElementById("contacts-title").innerHTML = "Contact"

		var elements = document.getElementsByClassName("view-github"), n = elements.length;
		for (var i = 0; i < n; i++){
			var e = elements[i];
			e.innerHTML = "View on Github"
		}
	}
	/*************************PORTUGUESE**********************************/
	else{
		document.getElementById("about-text").innerHTML = " Sobre"
		document.getElementById("contacts-text").innerHTML = " Contacto"
		document.getElementById("resume-text").innerHTML = " Currículo"
		document.getElementById("lang-text").innerHTML = " Pt"
		document.getElementById("about-title").innerHTML = "Sobre"
		
		document.getElementById("moment").innerHTML = "o momento"
		
		document.getElementById("about-sentence").innerHTML = "O meu nome é Ivan Freire e sou licenciado em engenharia" +
		" informática e de computadores."

		document.getElementById("about-sentence2").innerHTML = "O interesse por esta área despertou muito cedo, quando" +
		" tive o meu primeiro computador e sempre que surgia algum problema com o mesmo eu tentava sempre resolvê-lo sozinho."

		document.getElementById("about-sentence3").innerHTML = "Gostava de alterar o código fonte de páginas web para ver as" +
		" alterações que ocorriam e fiz o meu primeiro site por volta dos 14 anos."

		document.getElementById("about-sentence4").innerHTML = "Sou muito curioso, com vontade de aprender e adoro desafios," +
		" tentando ser sempre o melhor possível no que faço, tanto a nível pessoal como profissional. Estas características" +
		" pessoais reflectiram-se no meu percurso académico pois, uma vez que este curso não disponibilizava regime pós-laboral," +
		" tive de aprender a maior parte das matérias sozinho enquanto conciliava o mesmo com o trabalho."
		
		document.getElementById("about-sentence5").innerHTML = "Sempre tive algum fascínio por inteligência artifical e fiz a minha tese em monitorização de pessoas em ambientes domésticos tendo por base as casas inteligentes do futuro" +
					" e a criação de padrões de atividade dos habitantes por forma a gerar alertas automáticos em situações de risco e de desvio dos padrões normais de atividade. Recentemente, frequentei o curso de" +
					" machine learning da Open Data Science que envolvia participações em competições da kaggle o que despertou um grande interesse por esta área."
		
		

		document.getElementById("education-text").innerHTML = "Educação"
		document.getElementById("experience").innerHTML = "Experiência Profissonal"
		document.getElementById("bachelor").innerHTML = "Licenciatura em Engenharia Informática e de Computadores"
		document.getElementById("masters").innerHTML = "Mestrado em Engenharia Informática e de Computadores"
		document.getElementById("12th-grade").innerHTML = "12º Ano de Escolaridade"
		
		
		document.getElementById("sen").innerHTML = "Senior Consultant"
		document.getElementById("sen-text").innerHTML = "Projeto de Acidentes de Trabalho (AT) no core de uma grande seguradora internacional. Estive envolvido na adaptação do produto de AT e dos vários módulos para as leis antigas" +
				  " por forma a migrar as apólices deste produto que se encontravam no core antigo da seguradora e, consequentemente, auxiliei na migração efetiva das apólices referidas para o core atual. Estive no período de garantia e" +
				  " na manutenção corretiva e evolutiva deste produto."
		document.getElementById("sen-technology-used").innerHTML = "Tecnologias utilizadas:"
		document.getElementById("sen-date").innerHTML = "Setembro 2018"
		
		
		
		
		document.getElementById("solan").innerHTML = "Solutions Analist"
		document.getElementById("solan-text").innerHTML = "Projeto de Acidentes de Trabalho (AT) no core de uma grande seguradora internacional. Estive responsável pela construção do módulo de pensões do produto de AT." +
				 " A construção deste módulo passou pela análise funcional e técnica, criação de ecrãs de gestão de pensões, pela aplicação das regras de negócio e da lei atual de AT e pela gestão de pagamentos de" +
				 " prestações aos beneficiários. Adicionalmente, fui responsável pela criação de vários processos de AT como os pagamentos automáticos das prestações mensais, atualização de taxas e volumes salariais," +
				 " atualização de pessoas seguras, atualização de pensões mediante atualizações do fundo de AT e alteração mensal das pensões tendo em conta a idade dos beneficiários para que as respetivas pensões se mantenham de acordo com a lei atual."
		
		document.getElementById("solan-technology-used").innerHTML = "Tecnologias utilizadas:"
		document.getElementById("solan-date").innerHTML = "Setembro 2017"
		
		
		
		document.getElementById("solan").innerHTML = "Solutions Analist"
		document.getElementById("solan-text").innerHTML = "Projeto de Acidentes de Trabalho (AT) no core de uma grande seguradora internacional. Estive responsável pela construção do módulo de pensões do produto de AT." +
				 " A construção deste módulo passou pela análise funcional e técnica, criação de ecrãs de gestão de pensões, pela aplicação das regras de negócio e da lei atual de AT e pela gestão de pagamentos de" +
				 " prestações aos beneficiários. Adicionalmente, fui responsável pela criação de vários processos de AT como os pagamentos automáticos das prestações mensais, atualização de taxas e volumes salariais," +
				 " atualização de pessoas seguras, atualização de pensões mediante atualizações do fundo de AT e alteração mensal das pensões tendo em conta a idade dos beneficiários para que as respetivas pensões se mantenham de acordo com a lei atual."
		
		document.getElementById("solan-technology-used").innerHTML = "Tecnologias utilizadas:"
		document.getElementById("solan-date").innerHTML = "Setembro 2017"
		
		
		
		
		
		
		document.getElementById("solass").innerHTML = "Solutions Assistant"
		document.getElementById("solass-text").innerHTML = "Projetos no core de uma grande seguradora internacional - Responsabilidade Civil, Acidentes Pessoais (Doença) e Acidentes de Trabalho. Estive responsável pela construção de ecrãs" +
				"  para os produtos e as respetivas validações dos campos preenchidos assim como a criação de cartas para os clientes através da construção de ficheiros XML e regras de tarifação dos vários produtos. Estive também envolvido no envio de informação através da camada" + 
" de serviços para a emissão e simulação de apólices efetuados por simulador externo utilizando o protocolo SOAP. Tive também de criar reports através da extração de dados e construção de exceis a partir dos mesmos."

		document.getElementById("solass-technology-used").innerHTML = "Tecnologias utilizadas:"
		document.getElementById("solass-date").innerHTML = "Setembro 2015"
		
		

		document.getElementById("internship").innerHTML = "Estágio de Verão"
		document.getElementById("internship-text").innerHTML = "O estágio teve a duração de um mês durante o qual estive encarregue" +
		" de desenvolver individualmente uma aplicação móvel na qual fosse possível consultar" +
    " notícias da empresa, verificar o valor actual do cartão de refeição, marcar ausências e verificar se as mesmas foram aceites" +
		" e consultar um gráfico com todas as ausências até à data e com a possibilidade de adicionar filtros ao mesmo (tipo de ausência," +
		" data, aprovada, pendente ou rejeitada). Foi uma experiência enriquecedora que me deu a conhecer o ambiente profissional de uma empresa de IT."
		document.getElementById("technology-used").innerHTML = "Tecnologias utilizadas:"
		document.getElementById("internship-evaluation").innerHTML = "Avaliação de estágio:"
		document.getElementById("internship-evaluation-value").innerHTML = "Muito Bom"
		document.getElementById("internship-date").innerHTML = "Julho 2014"

		document.getElementById("teleoperator").innerHTML = "Teleoperador"
		document.getElementById("mcall-text").innerHTML = "Durante cerca de um ano e meio tive como principal objectivo contactar membros" +
		" High Value do Clube Nespresso com o intuito de verificar o seu grau de satisfação, presenteando-os com acessórios e informando-os" +
		" sobre novos aromas e edições limitadas disponíveis. Efectuava também o registo de novos membros e fazia marcações para reparação de" +
		" máquinas."
		document.getElementById("mcall-text2").innerHTML = "Com o mesmo objetivo principal, contactava também membros do Clube de Vinhos e Sabores."
		document.getElementById("goals-achieved").innerHTML = "Objectivos alcançados:"
		document.getElementById("goals-achieved-text").innerHTML = "Classificação em 1º lugar em competição de vendas do Clube de Vinhos e Sabores."
		document.getElementById("teleoperator-date").innerHTML = "Julho 2013"

		document.getElementById("telemarketer").innerHTML = "Operador de Telemarketing Lead Generation"
		document.getElementById("telemarketer-text").innerHTML = "Estive envolvido em dois projectos que consistiam na apresentação de soluções a um leque" +
		" seleccionado de empresas. As empresas interessadas eram marcadas como uma 'Lead' e seriam posteriormente contactadas" +
		" para marcação de uma reunião, onde seriam apresentadas as soluções presencialmente."
		document.getElementById("telemarketer-text2").innerHTML = "1º projecto - Oracle: apresentação de soluções para bases de dados referenciando" +
		" funcionalidades como a recuperação de dados, segurança contra ataques (e.g. injecções de sql), controle de concorrência, etc."
		document.getElementById("telemarketer-text3").innerHTML = "2º projecto - Critical Software: apresentação de soluções para controle e manutenção de" +
		" parques de energia eólica e solar."
		document.getElementById("telemarketer-date").innerHTML = "Fevereiro 2013"

		document.getElementById("pt-sales").innerHTML = "Gestor Comercial D2D"
		document.getElementById("pt-sales-text").innerHTML = "Fiz parte da equipa alfa da Portugal Telecom, efectuando a venda presencial de produtos" +
		" meo e sapo e ficando encarregue de uma carteira de clientes. Era necessário um acompanhamento desde a assinatura do contracto, instalação" +
		" e activação do serviço e durante as primeiras semanas, para garantir a total satisfação do novo cliente."
		document.getElementById("pt-sales-goals").innerHTML = "Objectivos alcançados:"
		document.getElementById("pt-sales-goals-text").innerHTML = "Classificação em 2º lugar no top de vendas do mês de Agosto."
		document.getElementById("pt-sales-date").innerHTML = "Julho 2012"

		document.getElementById("store").innerHTML = "Empregado de loja"
		document.getElementById("store-text").innerHTML = "Era encarregue do atendimento de clientes para venda de equipamentos, recepção de computadores" +
		" para reparação, montagem de computadores para venda e formatação e instalação de software."
		document.getElementById("store-date").innerHTML = "Abril 2008"

		document.getElementById("tech-skills").innerHTML = "Competências Técnicas"
		document.getElementById("projects").innerHTML = "Projectos"
		document.getElementById("contacts-title").innerHTML = "Contacto"

		var elements = document.getElementsByClassName("view-github"), n = elements.length;
		for (var i = 0; i < n; i++){
			var e = elements[i];
			e.innerHTML = "Ver no Github"
		}

	}
}

$('#en-lang').click(function () {
	if(language != 'en'){
		language = 'en'
		translate_to('en')
	}

})

$('#pt-lang').click(function () {
	if(language != 'pt'){
		language = 'pt'
		translate_to('pt')
	}
})

$(document).on('click','.navbar-collapse',function() {
		$(this).collapse('hide');
});

$(document).on('click','.navbar-toggle',function() {
		$(this).blur()
});

$("#nav-menu li a").click(function() {
	if($(this).attr('id') != "lang"){
		$(this).parent().addClass('active').siblings().removeClass('active');
		$('.navbar-collapse').collapse('hide');
	}
});

//PROJECT LINKS
$('.project-button').click(function(){
	button = $(this).attr('id')

	switch(button){
		case "phonegap-button":
			window.location = "https://github.com/ivanfreire87/Phonegap-App"
			break
		case "ai-button":
			window.location = "https://github.com/ivanfreire87/Artificial-Intelligence"
			break
		case "barista-button":
			window.location = "https://github.com/ivanfreire87/Barista"
			break
		case "chilrear-button":
			window.location = "https://github.com/ivanfreire87/Chilrear"
			break
		case "minijava-button":
			window.location = "https://github.com/ivanfreire87/Minijava-Compiler"
			break
		case "os-button":
			window.location = "https://github.com/ivanfreire87/Operating-Systems"
			break
		case "pacman-button":
			window.location = "https://github.com/ivanfreire87/Pacman"
			break
		case "tarjan-button":
			window.location = "https://github.com/ivanfreire87/Tarjan-Algorithm"
			break
	}
});

$('a').click(function(event){
	event.preventDefault()
	if(pending == 0){
		pending = 1;
		if($(this).attr('id') != "pt-lang" && $(this).attr('id') != "en-lang" && $(this).attr('id') != "lang"){
			var distance = $( $.attr(this, 'href') ).offset().top - 200
		}
		about_waypoint.disable()
		resume_top_waypoint.disable()
		resume_bot_waypoint.disable()
		contacts_waypoint.disable()
		$('html, body').animate({
			scrollTop: distance
		}, 500, function() {
			about_waypoint.enable()
			resume_top_waypoint.enable()
			resume_bot_waypoint.enable()
			contacts_waypoint.enable()
			pending = 0;
	  });
	}
});


var distance_a = Math.max(document.documentElement.clientHeight, window.innerHeight || 0) - 600
var distance_b = Math.max(document.documentElement.clientHeight, window.innerHeight || 0) - 400
var distance_c = Math.max(document.documentElement.clientHeight, window.innerHeight || 0) - 200

var skills_waypoint = new Waypoint({
  element: document.getElementById('skills'),
  handler: function() {
		jQuery('.skillbar').each(function(){
			jQuery(this).find('.skillbar-bar').animate({
				width:jQuery(this).attr('data-percent')
			},1500)
		});
  },
	offset: distance_b
})

/*change the active tab*/
/*about*/
var about_waypoint = new Waypoint({
  element: document.getElementById('about-data'),
  handler: function() {
		$('#about').parent().addClass('active').siblings().removeClass('active');
		document.activeElement.blur()
  },
})

/*resume from top*/
var resume_top_waypoint = new Waypoint({
  element: document.getElementById('resume-data'),
  handler: function() {
		$('#resume').parent().addClass('active').siblings().removeClass('active');
		document.activeElement.blur()
  },
	offset: distance_a
})

/*resume from bottom*/
var resume_bot_waypoint = new Waypoint({
  element: document.getElementById('resume-data-end'),
  handler: function() {
		$('#resume').parent().addClass('active').siblings().removeClass('active');
		document.activeElement.blur()
  },
	offset: distance_c
})

/*contacts*/
var contacts_waypoint = new Waypoint({
  element: document.getElementById('contacts-data'),
  handler: function() {
		$('#contacts').parent().addClass('active').siblings().removeClass('active');
		document.activeElement.blur()
  },
	offset: distance_c
})
