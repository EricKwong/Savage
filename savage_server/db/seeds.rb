Player.destroy_all
Monster.destroy_all
Encounter.destroy_all


Player.create!({
  username: 'PoopySamurai',
  password_digest: 'poop',
  first_name: 'Eric',
  last_name: 'Kwong',
  level: 10,
  max_health: 300,
  hp: 180,
  attack: 30,
  defense: 30,
  exp: 1000,
  gold: 15000,
  steps: 1000
})
Player.create!({
  username: 'mck',
  password_digest: 'mck',
  first_name: 'mck',
  last_name: 'mck',
  level: 4,
  max_health: 200,
  hp: 150,
  attack: 30,
  defense: 30,
  exp: 1000,
  gold: 15000,
  steps: 1000
})

4.times do
  Monster.create!({
    name: 'Booboo',
    attack: 15,
    defense: 17,
    hp: 150,
    rarity: 4,
    exp: 100,
    bounty: 180
  })
end

Encounter.create!({
  player_id: 7,
  monster_id: 25
})

Encounter.create!({
  player_id: 7,
  monster_id: 26
}) 

Encounter.create({
  player_id: 8,
  monster_id: 27
})