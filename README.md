<h1> Sobre o Projeto </h1>
Este projeto foi desenvolvido utilizando Node.js, ExpressJS, Sequelize, EJS, MySql e outras bibliotecas e ferramentas. <br>continue lendo para entender como foi desenvolvido.
<br>
utilizei o Framework ExpressJS para a construção do servidor e gerenciar requisições e respostas de diferentes verbos HTTP em diferentes rotas.

<h1> Sistema de Login e Autenticação </h1>
A base do sistema de login é feita atraves de uma autenticação com uma Session e um middleware, para salvar os dados sensiveis (como por exemplo a senha neste projeto) foi utilizado o bcrypt, que é um método de criptografia do tipo hash para senhas, bem mais seguro que base64 por exemplo.

<h1> Banco de Dados </h1> 
No desenvolvimento deste projeto optei por utilizar MySQL, o projeto conta com um sistema de relações entre tabelas (categorias e artigos = 1:N), utilizando a ORM Sequelize para fácil manutenção, mais padronizado e mais legivel.

<h1> Padrão MVC </h1>
Todo o projeto segue o padrão MVC, além de organizado e dinâmico, é muito mais simples de fazer manutenção no futuro e faz com que a aplicação fique leve e independente.

<h1> Ferramentas adicionais </h1>
Algumas das ferramentas que utilizei foram: <br>
Body-Parser: utilizado para converter o body da requisição para o formato JSON, para facilitar o manipulamento de dados. <br>
Slugify: utilizado para converter o nome de categoria e artigos para o formato slug.
TinyMCE: utiliado para auxiliar no cadastro de um artigo, sendo ele um editor de texto que tem a capacidade de converter campos de área de texto HTML ou outros elementos HTML.
