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
    name: 'Shroom',
    attack: 15,
    defense: 17,
    hp: 150,
    rarity: 4,
    exp: 100,
    bounty: 180,
    avatar: 'http://fc08.deviantart.net/fs71/f/2011/043/f/c/cc__mushroom_monster_by_violetmoonshade-d39e6w4.gif'
  })
end

3.times do
  Encounter.create!({
    player_id: 1,
    monster_id: 3
  })
end

2.times do
  Encounter.create!({
    player_id: 2,
    monster_id: 2
  }) 
end
