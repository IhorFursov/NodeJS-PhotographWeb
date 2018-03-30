var express = require('express'),
	bodyParser = require('body-parser'),
	app = express();

var mysql = require('mysql');
var fs = require('fs');
var connection = mysql.createConnection({
	host:'us-cdbr-iron-east-05.cleardb.net',
	user:'b9bbfeebaa862b',
	password: '03190066',
	database:'heroku_005d897a805264a',
	port:3306,
	 });

connection.connect();
setInterval(function () {
    connection.query('SELECT 1');
}, 5000);

var array_IMG = [];

connection.query('select * from fotografia',function(error,result){
	var array_IMG = result;
	console.log(array_IMG[1].nazvanie_foto);
    app.disable('x-powered-by');

var store = {
	glavnaya:{
		page: 'Главная'
	},
	foto:{
		page: 'Примеры работ',
		arr_IMG: array_IMG
	},
	o_foto:{
		page:'О фотографии'
	},
	kontakti:{
		page: 'Контакты'
	}
},storeKeys = Object.keys(store);
console.log(storeKeys);
app.use(function(req,res,next){
	console.log('%s %s',req.method,req.url);
	next();
});

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({encoded:true}));

app.get('/glavnaya',function(req,res){
var store = {
	glavnaya:{
		page: 'Главная'
	},
	foto:{
		page: 'Примеры работ',
		arr_IMG: array_IMG
	},
	o_foto:{
		page:'О фотографии'
	},
	kontakti:{
		page: 'Контакты'
	}
},storeKeys = Object.keys(store);
	var page = 'glavnaya', data;
	if(!page) page = 'glavnaya';
	data = store[page];
	if(!data) {
		res.redirect('/');
		return; }
	data.links = storeKeys;
	console.log(array_IMG);
	//data.links = storeKeys;
	res.render('start.jade',data);
});

app.get('/foto',function(req,res){
	connection.query('select photo_src,opisanie from fotografia where (id_fotografii>=101 AND id_fotografii<=199)',function(error,result){
	var array_IMG = result;
	console.log(array_IMG[1].photo_src);
var store = {
	glavnaya:{
		page: 'Главная'
	},
	foto:{
		page: 'Примеры работ',
		arr_IMG: array_IMG
	},
	o_foto:{
		page:'О фотографии'
	},
	kontakti:{
		page: 'Контакты'
	}
},storeKeys = Object.keys(store);
	var page = 'foto', data;
	if(!page) page = 'glavnaya';
	data = store[page];
	if(!data) {
		res.redirect('/');
		return; }
	data.links = storeKeys;
	console.log(array_IMG);
	//data.links = storeKeys;
	res.render('primeri_foto.jade',data);
});
});

app.get('/o_foto',function(req,res){
	connection.query('select photo_src,opisanie from fotografia where (id_fotografii>=201 AND id_fotografii<=208)',function(error,result){
	var array_IMG = result;
	console.log(array_IMG.photo_jewelery);
var store = {
	glavnaya:{
		page: 'Главная'
	},
	foto:{
		page: 'Примеры работ',
		arr_IMG: array_IMG
	},
	o_foto:{
		page:'О фотографии',
		arr_IMG: array_IMG
	},
	kontakti:{
		page: 'Контакты'
	}
},storeKeys = Object.keys(store);
	var page = 'o_foto', data;
	data = store[page];
	if(!data) {
		res.redirect('/');
		return; }
	data.links = storeKeys;
	res.render('o_fotografii.jade',data);
});
});

app.get('/kontakti',function(req,res){
var store = {
	glavnaya:{
		page: 'Главная'
	},
	bluda:{
		page: 'Популярные блюда',
		arr_IMG: array_IMG
	},
	novosti:{
		page:'Новости'
	},
	kontakti:{
		page: 'Контакты'
	}
},storeKeys = Object.keys(store);
	var page = 'kontakti', data;
	if(!page) page = 'glavnaya';
	data = store[page];
	if(!data) {
		res.redirect('/');
		return; }
	data.links = storeKeys;
	console.log(array_IMG);
	//data.links = storeKeys;
	res.render('kontakti.jade',data);
});

app.use('/:page', express.static(__dirname + '/public'));
app.get('/:page?',function(req,res){
	var page = req.params.page, data;
	if(!page) page = 'glavnaya';
	data = store[page];
	if(!data) {
		res.redirect('/');
		return; }
	data.links = storeKeys;
	data.query = req.query; 
	res.render('start.jade', data);
		
});
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
    console.log("Listening on " + port);
});

 

