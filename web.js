var express = require("express");
var mysql = require("mysql");
//var logger = require('logger');
var app = express();
//app.use(express.logger({stream: logFile}));
var bodyParser = require("body-parser");

/*
var express = require('express');
var favicon = require('serve-favicon');
var logger = require('morgan');
var session = require('express-session');
var bodyParser = require('body-parser');
var errorHandler = require('errorhandler');
var path = require('path');




app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

*/
var fs = require('fs');
var connection = mysql.createConnection({
    host:'us-cdbr-iron-east-05.cleardb.net',
    user:'bb9474bf4ac705',
    password: 'c0dd17c2',
    database: 'heroku_1c61ee94c89ed4b',
    port: 3306 // required mysql
});


process.env.PWD = process.cwd();

connection.connect();
setInterval(function () {
    connection.query('SELECT 1');
}, 5000); // for permanent connection
//code goes below
var array_foto = [];
var array_menu = [];

app.use(express.static(__dirname + '/public/'));

connection.query('select * from galereya',function(error,result){
    var array_foto = result;

    console.log(array_foto);

    app.disable('x-powered-by');

    var store = {
        klub:{
            page: 'Клуб'
        },
        galereya:{
            page: 'Галерея',
            arr_foto: array_foto
        },
        sobitiya:{
            page:'События'
        },
        menu:{
            page: 'Меню',
            arr_menu: array_menu
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

    app.use(express.static(__dirname + '/public/'));
    app.use(bodyParser.urlencoded({encoded:true}));
    app.get('/about',function(req,res){
        res.render('about.jade',{
            links: storeKeys
        });
    });

    app.get('/klub',function(req,res){

        var store = {
            klub:{
                page: 'Клуб'
            },
            galereya:{
                page: 'Галерея',
                arr_foto: array_foto
            },
            sobitiya:{
                page:'События'
            },
            menu:{
                page: 'Меню',
                arr_menu: array_menu
            },
            kontakti:{
                page: 'Контакты'
            }
        },storeKeys = Object.keys(store);
        var page = 'klub', data;
        if(!page) page = 'klub';
        data = store[page];
        if(!data) {
            res.redirect('/');
            return; }
        data.links = storeKeys;
        console.log(array_foto);
        //data.links = storeKeys;
        res.render('klub.jade',data);
    });

    app.get('/galereya',function(req,res){
        connection.query('select * from galereya where(id_event=1)',function(error,result){
            var array_foto = result;
            console.log(array_foto[0].foto);
            var store = {
                klub:{
                    page: 'Клуб'
                },
                galereya:{
                    page: 'Галерея',
                    arr_foto: array_foto
                },
                sobitiya:{
                    page:'События'
                },
                menu:{
                    page: 'Меню',
                    arr_menu: array_menu
                },
                kontakti:{
                    page: 'Контакты'
                }
            },storeKeys = Object.keys(store);
            var page = 'galereya', data;
            if(!page) page = 'klub';
            data = store[page];
            if(!data) {
                res.redirect('/');
                return; }
            data.links = storeKeys;
            console.log(array_foto);
            //data.links = storeKeys;
            res.render('galereya.jade',data);
        });
    });

    app.get('/sobitiya',function(req,res){
        var store = {
            klub:{
                page: 'Клуб'
            },
            galereya:{
                page: 'Галерея',
                arr_foto: array_foto
            },
            sobitiya:{
                page:'События'
            },
            menu:{
                page: 'Меню',
                arr_menu: array_menu
            },
            kontakti:{
                page: 'Контакты'
            }
        },storeKeys = Object.keys(store);
        var page = 'sobitiya', data;
        if(!page) page = 'klub';
        data = store[page];
        if(!data) {
            res.redirect('/');
            return; }
        data.links = storeKeys;
        res.render('sobitiya.jade',data);
    });

    var array_menu;

    app.get('/menu',function(req,res){
        connection.query('select * from menu where(Kod_dish>=201)',function(error,result){
            var array_menu = result;
            console.log(array_menu);
            var store = {
                klub:{
                    page: 'Клуб'
                },
                galereya:{
                    page: 'Галерея',
                    arr_foto: array_foto
                },
                sobitiya:{
                    page:'События'
                },
                menu:{
                    page: 'Меню',
                    arr_menu: array_menu
                },
                kontakti:{
                    page: 'Контакты'
                }
            },storeKeys = Object.keys(store);
            var page = 'menu', data;
            if(!page) page = 'klub';
            data = store[page];
            if(!data) {
                res.redirect('/');
                return; }
            data.links = storeKeys;
            res.render('menu.jade',data);
        });
    });

    app.get('/kontakti',function(req,res){
        var store = {
            klub:{
                page: 'Клуб'
            },
            galereya:{
                page: 'Галерея',
                arr_foto: array_foto
            },
            sobitiya:{
                page:'События'
            },
            menu:{
                page: 'Меню',
                arr_menu: array_menu
            },
            kontakti:{
                page: 'Контакты'
            }
        },storeKeys = Object.keys(store);
        var page = 'kontakti', data;
        if(!page) page = 'klub';
        data = store[page];
        if(!data) {
            res.redirect('/');
            return; }
        data.links = storeKeys;
        console.log(array_foto);
        //data.links = storeKeys;
        res.render('kontakti.jade',data);
    });

    //app.use('/:page/:id?', express.static(__dirname + '/public'));

    app.get('/galereya/:id?',function(req,res){
        var id = req.params.id, foto_render;
        connection.query('select foto from galereya where(id_foto=("'+id+'"))',function(error,result){
            foto_render = {foto:result[0].foto};
            res.render('foto.jade',foto_render);
        });
    });

    var array_pin = [];
    var array_dj =[];

    app.get('/sobitiya/pin-up?',function(req,res){
        var data = {};
        connection.query('select id_foto,foto from galereya where(id_event=2)',function(error,result){
            var array_pin = result;
            console.log(array_pin);
            data.array_pin = array_pin;
            res.render('sobitie_pin_up.jade',data);
        });
    });

    app.get('/sobitiya/dj_list?',function(req,res){
        var data = {};
        connection.query('select id_foto,foto,opisanie_foto from galereya where(id_event=3)',function(error,result){
            var array_dj = result;
            console.log(array_dj);
            data.array_dj = array_dj;
            res.render('sobitie_dj.jade',data);
        });
    });

    app.use('/:page/:id?', express.static(__dirname + '/public/'));

    app.get('/sobitiya/pin-up/:id?',function(req,res){
        var data = {};
        connection.query('select id_foto,foto from galereya where(id_foto=("'+req.params.id+'"))',function(error,result){
            var array_pin = result;
            console.log(array_pin);
            data.array_pin = array_pin;
            res.render('sobitie_pin_up_picture.jade',data);
        });
    });

    app.use('/sobitiya/pin-up/:id?', express.static(__dirname + '/public'));

    app.use('/:page/:name?', express.static(__dirname + '/public'));
    app.get('/:page?',function(req,res){
        var page = req.params.page, data;
        if(!page) page = 'klub';
        data = store[page];
        if(!data) {
            res.redirect('/');
            return; }
        data.links = storeKeys;
        data.query = req.query;
        res.render('klub.jade', data);

    });
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
    console.log("Listening on " + port);
});