const mongoose = require('mongoose')

const connectToDatabase = async () => {
    try{
      await mongoose.connect(

      `mongodb+srv://${process.env.MONGODB_USERS}:${process.env.MONGODB_PASSWORD}@database.ocogcky.mongodb.net/?appName=database`, 
      )
      console.log('Conexão ao banco de dados realizada com suecsso!')
    } catch(error) {
      return console.log('Ocorreu um erro ao se conectar com o banco de dados', error.message)
      
    }

  
}



module.exports = connectToDatabase;