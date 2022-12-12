const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const session = require('express-session');
const connection = require('./database/database');

const categoriesController = require('./categories/CategoriesController');
const articlesController = require('./articles/ArticlesController');
const usersController = require('./users/UsersController');

const Article = require('./articles/Article');
const Category = require('./categories/Category');
const User = require('./users/User');
const router = require('./categories/CategoriesController');

// View Engine (EJS, no caso)

app.set('view engine', 'ejs') // definindo e view engine (necessario uma pasta chamada 'views')

// Sessions
app.use(
  session({
  secret: "abc123@",
  cookie: { maxAge: 30000000 }
}))

// Static archives
app.use(express.static('public')) // dizendo para o express aceitar arquivos estaticos (css, imagens, enfim) e dizendo a pasta dos arquivos

//Body parser
app.use(bodyParser.urlencoded({ extended: false })) // dizendo para o body parser aceitar dados de formularios
app.use(bodyParser.json()) // dizendo para o body parser aceitar dados no formato json

//Database

connection
  .authenticate()
  .then(() => {
    console.log('Conexão com o banco de dados feita com sucesso!')
  })
  .catch(error => {
    console.log(error)
  })

// Rotas
app.use('/', categoriesController);
app.use('/', articlesController);
app.use('/', usersController);


app.get('/', (req, res) => {
  Article.findAll({
    order: [['id', 'DESC']],
    limit: 4
  }).then(articles => {
    Category.findAll().then(categories => {
      res.render('index', { articles: articles, categories: categories })
    })
  })
})

app.get('/:slug', (req, res) => {
  let slug = req.params.slug
  Article.findOne({
    where: {
      slug: slug
    }
  })
    .then(article => {
      if (article != undefined) {
        Category.findAll().then(categories => {
          res.render('article', { article: article, categories: categories })
        })
      } else {
        res.redirect('/')
      }
    })
    .catch(err => {
      res.redirect('/')
    })
})

app.get('/category/:slug', (req, res) => {
  let slug = req.params.slug
  Category.findOne({
    where: {
      slug: slug
    },
    include: [{ model: Article }]
  })
    .then(category => {
      if (category != undefined) {
        Category.findAll().then(categories => {
          res.render('index', {
            articles: category.articles,
            categories: categories
          })
        })
      } else {
        res.redirect('/')
      }
    })
    .catch(err => {
      res.redirect('/')
    })
})

app.listen(8080, () => {
  // abrindo servidor
  console.log('O servidor está rodando!')
})
