const db = require("quick.db");

module.exports = {
  execute(message,args){
  const author = message.author.id
  const ukwon = db.get(`ukwon.${author}`);
  const stamina = db.get(`stamina.${author}`);
  const level = db.get(`level.${author}`);
  const location = db.get(`location.${author}`);
  }
}uick.db");

