module.exports = {
  name: "register",
  description: "As new citizen you need to register",
  aliases: ["reg"],
  execute(message, args , db){
   
    // [ DATABASE SECTION ]
  const author = message.author.id
  const ukwon = db.get(`ukwon.${author}`);
  const stamina = db.get(`stamina.${author}`);
  const level = db.get(`level.${author}`);
  const location = db.get(`location.${author}`);
  const exp = db.get(`exp.${author}`);
  const register = db.get(`register.${author}`) || false;
  // [ DATABASE SECTION END ]
    
    
    if(register === false){
    db.set(`ukwon.${author}` , 0);
    db.set(`stamina.${author}` , 10);
    db.set(`level.${author}` , 1);
    db.set(`exp.${author}` , 0);
    db.set(`location.${author}`, "Beach");
    db.set(`register.${author}` , true);
    db.set(`location_emoji.${author}` , "<:beach:870675049286365225>");
      
      message.channel.send("Now you are registered as the Unknown Species, to know yourself, use `u!profile`")
    } else {
      message.channel.send("You already registered as Unknown species, check with `u!profile`")
      }
  }
}