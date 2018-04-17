use codeclan;

db.dropDatabase();

db.students.insert([{
  name: "Chris",
  favFood: "pizza"
},
{
  name: "Danny",
  favFood: "burgers"
}
]);

db.students.find();

db.instructors.insert([{
  name: "Colin",
  favFood: "knowledge"
},
{
  name: "Louise",
  favFood: 'peanuts'
}
]);

db.instructors.find();

show collections;

// db.listCommands();

db.collection.stats();
