avengers = {

iron_man: {
  name: "Tony Stark",
  moves: {
    punch: 10,
    kick: 100
  },
  attack_moves: [{punch: 10}, {kick: 100}]
},

hulk: {
  name: "Bruce Banner",
  moves: {
    smash: 1000,
    roll: 500
  },
  attack_moves: [{smash: 1000}, {roll: 500}]
}

}

p "Iron Man: " + avengers[:iron_man][:name]
p "Hulk: " + avengers[:hulk][:name]
p "Hulk's Smash: " + avengers[:hulk][:moves][:smash].to_s()
p "Hulk's first move: " + avengers[:hulk][:attack_moves][0][:smash].to_s()
