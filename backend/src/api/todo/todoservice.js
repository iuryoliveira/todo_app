const Todo = require('./todo')

Todo.methods(['get', 'post', 'put', 'delete'])
Todo.updateOptions({ new: true, runValidators: true }) //Ao rodar update, retorna o registro atualizado e realiza as validações

module.exports = Todo