const express = require('express'); // invocar a biblioteca no projeto
const mysql = require ('mysql2'); 
const bodyParser = require ('body-parser');
const cors = require ('cors');

const app = express(); //para de fato para usar a biblioteca
const port = 3000; //estabelece a porta usada

app.use(bodyParser.json()); //o express vai usar o bodyParser para traduzir a linguagem json em MySQL
app.use(cors());

const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'urbanoConnect'
}); //conexão com MyQSL

connection.connect((err)=>{
    if (err) {
        console.log('Deu ruim" + err.stack')
    }//caso a conexão dê erro, exibe no console a mensagem

    console.log('Consegui me conectar')
});//verifica a conexão com MySQL, correspondendo no MySQL ao clicar na instância do MySQL