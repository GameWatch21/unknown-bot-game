const db = require("quick.db");

module.exports = {
  execute(message,args){
  const author = message.author.id
  const ukwon = db.get(`ukwon.${author}`);
  const stamina = db.get(`stamina.${author}`) || false;
  const level = db.get(`level.${author}`) || false;
  const location = db.get(`location.${author}`) || false;
  const exp = db.get(`exp.${author}`) || false;
  const register = db.get(`register.${author}`);
  
  }
}

