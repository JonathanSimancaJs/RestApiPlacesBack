const Application = require('../models/Application')
const Unless = require('express-unless')

module.exports = function(options){
  let AuthApp = function(req,res,next){
    Application.count({}).then(appCount=>{
      if(appCount > 0 && !req.application) return next(new Error('An application is required to consume this API'))

      if(!req.validRequest) return next(new Error('Origin invalid'))
      req.validApp = true
      next()
    }).catch(next)
  }

  AuthApp.unless = Unless

  return AuthApp

}
