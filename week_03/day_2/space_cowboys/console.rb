require('pry')

require_relative('models/bounty')

bounty1 = Bounty.new({
  'name' => 'Damian',
  'species' => 'Wolf',
  'bounty_value' => '5',
  'danger_level' => 'Medium'
  })

bounty2 = Bounty.new({
  'name' => 'Riva',
  'species' => 'Tiger',
  'bounty_value' => '10',
  'danger_level' => 'High'
  })

bounty1.save()
bounty2.save()

bounty1.name = "Kravos"
bounty1.update()

this_bounty = bounty1.find_me()

other_bounty =  Bounty.find_id(2)
another_bounty = Bounty.find_name("Riva")

bounty2.delete()

binding.pry
nil
