var mobileMenu = document.getElementById('Mobile-menu');
var menu = document.getElementById('Menu');

mobileMenu.addEventListener("click", function(){
	menu.classList.toggle('open');
	if (document.querySelector(".menu-mobile.active")){
		document.querySelector('.congregacao').style.visibility = `visible`;
		if (document.getElementById('data').value !== 'select'){
	   	 document.getElementById('dts').style.display =`block`;
	   	 document.getElementById('dts2').style.display = `block`;
	   	 document.getElementById('dts').style.position = `relative`;
	   	 document.getElementById('dts2').style.position = `relative`;
		}
	}else{
		  if (document.getElementById('data').value !== 'select'){
	   	document.querySelector('.congregacao').style.visibility = `hidden`;
	   	document.getElementById('dts').style.display =`none`;
	   	document.getElementById('dts2').style.display = `none`;
	   	document.getElementById('dts').style.position = `absolute`;
	   	document.getElementById('dts2').style.position = `absolute`;
	   	}
	}
	/*if (document.querySelector(".menu-mobile.active")){
		window.alert("yes");
	}else{
		window.alert("not");
	}*/
})


//cabeçalho
function home(){
	mobileMenu.click()
	window.open("index.html");
}

function congregations(){
	mobileMenu.click()
	window.open("congregations.html");
}

function projects(){
	window.alert("Esta página ainda não foi desenvolvida pois preciso entrar em contato com a sede para mais informações!");
}

function events(){
	window.alert("Esta página ainda não foi desenvolvida pois preciso entrar em contato com a sede para mais informações!");
}

function about_developer(){
	window.open("developer.html"); 
}

//rodapé
function contact(){
	window.alert("Esta página ainda não foi desenvolvida pois preciso entrar em contato com a sede para pegar as informações de contato!");
}
function privacy_policy(){
	window.open("privacy_policy.html");
}

function terms(){
	window.open("terms.html");
}

function notifications(){
	window.open("register.html");
}

function feedback(){
	window.open("feedback.html");
}

function license(){
	window.alert(`Licença MIT

 Copyright (c) 2021 sa-mods

 A permissão é concedida, gratuitamente, a qualquer pessoa que obtenha uma cópia
 deste software e arquivos de documentação associados (o "Software"), para lidar
 no Software sem restrição, incluindo, sem limitação, os direitos
 para usar, copiar, modificar, mesclar, publicar, distribuir, sublicenciar e / ou vender
 cópias do Software, e para permitir que as pessoas a quem o Software é
 fornecido para fazê-lo, sujeito às seguintes condições:

 O SOFTWARE É FORNECIDO "COMO ESTÁ", SEM GARANTIA DE QUALQUER TIPO, EXPRESSA OU
 IMPLÍCITA, INCLUINDO, MAS NÃO SE LIMITANDO ÀS GARANTIAS DE COMERCIALIZAÇÃO,
 ADEQUAÇÃO A UMA FINALIDADE ESPECÍFICA E NÃO VIOLAÇÃO.  EM NENHUMA HIPÓTESE OS
 AUTORES OU TITULARES DE DIREITOS AUTORAIS SÃO RESPONSÁVEIS POR QUALQUER RECLAMAÇÃO, DANOS OU OUTRAS
 RESPONSABILIDADES, SEJA EM AÇÃO DE CONTRATO, DELITO OU DE OUTRA FORMA, DECORRENTE DE,
 FORA DE OU EM CONEXÃO COM O SOFTWARE OU O USO OU OUTRAS NEGOCIAÇÕES NO PROGRAMA.`);
}

class MobileNavbar {
  constructor(mobileMenu, navlist, navlinks) {
    this.mobileMenu = document.querySelector(mobileMenu);
    this.navlist = document.querySelector(navlist);
    this.navlinks = document.querySelectorAll(navlinks);
    this.activeClass = "active"

    this.handleClick = this.handleClick.bind(this);
  }
  
  animateLinks() {
    this.navlinks.forEach((link, index) => {
      link.style.animation
        ? (link.style.animation = "")
        : (link.style.animation = `navLinkFade 0.5s ease forwards ${
            index / 7 + 0.3
          }s`);
    });
  }

  handleClick() {
    this.mobileMenu.classList.toggle(this.activeClass);
    this.navlist.classList.toggle(this.activeClass);
    this.animateLinks();
  }

  addClickEvent() {
    this.mobileMenu.addEventListener("click", this.handleClick);
  }

  init() {
    if (this.mobileMenu) {
      this.addClickEvent();
    }
    return this;
  }
}

const mobileNavbar = new MobileNavbar(
  ".mobile-menu",
  ".menu-mobile",
  ".menu-mobile span",
);
mobileNavbar.init();

window.onload = function(){
	window.alert("Olá seja bem vindo(a), este site está em desenvolvimento portanto se porventura encontrar algum bug por favor desconsidere-o!");
	document.getElementById("copyright").innerHTML = `© IEADEM - ${new Date().getFullYear()}`;
}
