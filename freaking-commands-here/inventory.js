module.exports = {
  name: "inventory",
  description: "every bois have inventory, so why not?",
  execute(message, args, db){
    const author = message.author.id;
    // [DATABASE SECTION]
    const wood = db.get(`wood.${author}`);
    const stick = db.get(`stick.${author}`);
    const leaf = db.get(`leaf.${author}`);
    const rock = db.get(`rock.${author}`);
    const clay = db.get(`clay.${author}`);
    const soil = db.get(`soil.${author}`);
    const sand = db.get(`sand.${author}`);
    const crab_meat= db.get(`crab_meat.${author}`);
    const coconut = db.get(`coconut.${author}`);
    
    // [DATABASE SECTION END]
  }
}