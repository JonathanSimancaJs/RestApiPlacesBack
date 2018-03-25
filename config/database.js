//Conexion a la base de datos de mongoose

const mongoose = require('mongoose')

mongoose.Promise = global.Promise

const dbName = 'places_facilito_api_course'

module.exports = {
  connect: ()=> mongoose.connect('mongodb://localhost/'+dbName,{useMongoClient:true}),
  dbName,
  connection: ()=>{
    if(mongoose.connection)
      return mongoose.connection
    return this.connect()
  }
}
