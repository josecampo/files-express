const router = require('express').Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

let fs = require('fs')

fs.readdir('.', (err, files) =>{
    if (err) console.log(`Error ${err.message}`)
    return ficheros = files
}); 

fs.readFile('readme.md', 'UTF-8', (err, content) =>
{
if (err) console.log(err.message)
  contenido = content
  console.log(contenido)
});    

module.exports = router;
