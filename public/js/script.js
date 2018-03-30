/*document.addEventListener('DOMContentLoaded',function(){
var btn = [];
for(i=301;i<340;i++){
	btn[i-301] = document.getElementById(i);
	btn[i-301].addEventListener('click',getHttp,false);	
};});
function getHttp(){
	console.log(this.id);
	window.location.pathname+='/'+this.id;
};*/
var btn = [];
if(window.location.pathname=='/glavnaya'){
	console.log('Tut glavnaya');
	for(var i=301;i<=339;i++){
		btn[i-301] = document.getElementById(i);
		btn[i-301].addEventListener('click',getHttp,false);
	}
	function getHttp(){
		console.log(this.id);
		window.location.pathname+='/'+this.id;
	}
}
if(window.location.pathname=='/kolca'){
	console.log('Tut kolca');
	for(var i=301;i<=306;i++){
		btn[i-301] = document.getElementById(i);
		btn[i-301].addEventListener('click',getHttp,false);
	}
	function getHttp(){
		console.log(this.id);
		window.location.pathname+='/'+this.id;
	}
}
if(window.location.pathname=='/podveski'){
	console.log('Tut podveski');
	for(var i=316;i<=320;i++){
		btn[i-301] = document.getElementById(i);
		btn[i-301].addEventListener('click',getHttp,false);
	}
	function getHttp(){
		console.log(this.id);
		window.location.pathname+='/'+this.id;
	}
}
if(window.location.pathname=='/kuloni'){
	console.log('Tut kuloni');
	for(var i=307;i<=313;i++){
		if(i==309) continue;
		btn[i-301] = document.getElementById(i);
		btn[i-301].addEventListener('click',getHttp,false);
	}
	function getHttp(){
		console.log(this.id);
		window.location.pathname+='/'+this.id;
	}
}
if(window.location.pathname=='/sergi'){
	console.log('Tut sergi');
	for(var i=321;i<=324;i++){
		btn[i-301] = document.getElementById(i);
		btn[i-301].addEventListener('click',getHttp,false);
	}
	function getHttp(){
		console.log(this.id);
		window.location.pathname+='/'+this.id;
	}
}
if(window.location.pathname=='/cepochki'){
	console.log('Tut cepochki');
	for(var i=325;i<=339;i++){
		btn[i-301] = document.getElementById(i);
		btn[i-301].addEventListener('click',getHttp,false);
	}
	function getHttp(){
		console.log(this.id);
		window.location.pathname+='/'+this.id;
	}
}
