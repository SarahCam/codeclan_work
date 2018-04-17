use farm;
db.dropDatabase();

use farm;
db.animals.insert({
  name: "Erik",
  type: "Polar Bear"
});

db.animals.insert({
  name: "Blue",
  type: "Monkey"
});

db.animals.insert({
  name: "Blue",
  type: "Dog"
});

db.animals.find();      // Returns ALL animals

db.animals.find({name: "Blue"});    // Returns animals with name proprty 'Blue'

db.animals.find({name: "Blue", type: "Dog"});

db.animals.update({name: "Erik"}, {   // Updates first match ONLY
  $set: {type: "Goose"}
});

db.animals.find();      // Returns ALL

db.animals.remove({name: "Erik"});    // Removes ALL that match

db.animals.find();      // Returns ALL
