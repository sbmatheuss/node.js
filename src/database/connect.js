const mongoose = require('mongoose')

const connectToDatabase = async () => {
    try{
      await mongoose.connect(

      `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@testedb.5089mpm.mongodb.net/?appName=testedb`, 
      )
      console.log('Conexão ao banco de dados realizada com suecsso!')
    } catch(error) {
      return console.log('Ocorreu um erro ao se conectar com o banco de dados', error.message)
      
    }

  
}



module.exports = connectToDatabase;