const mongoose = require('mongoose') 
mongoose.Promise = global.Promise;

const DB_URL = 'mongodb://localhost:27017/reprograma'

const connect = () => {
    mongoose.connect(DB_URL, {useNewUrlParser: true,  useUnifiedTopology: true }) 
    const connection = mongoose.connection 
    connection.on('error', () => console.error('Erro ao conectar com o MongoDB'))
    connection.once('open', () => console.log('Estamos conectadas')) 
}

module.exports = {connect}