Player.destroy_all
Monster.destroy_all
Encounter.destroy_all


# Player.create!({
#   username: 'PoopySamurai',
#   password_digest: 'poop',
#   first_name: 'Eric',
#   last_name: 'Kwong',
#   level: 10,
#   max_health: 300,
#   hp: 180,
#   attack: 30,
#   defense: 30,
#   exp: 1000,
#   gold: 15000,
#   steps: 1000
# })

# Player.create!({
#   username: 'mck',
#   password_digest: 'mck',
#   first_name: 'mck',
#   last_name: 'mck',
#   level: 4,
#   max_health: 200,
#   hp: 150,
#   attack: 30,
#   defense: 30,
#   exp: 1000,
#   gold: 15000,
#   steps: 1000
# })

Monster.create!({
  name: 'Shruem',
  attack: 15,
  defense: 17,
  hp: 150,
  rarity: 4,
  exp: 100,
  bounty: 180,
  avatar: 'http://fc08.deviantart.net/fs71/f/2011/043/f/c/cc__mushroom_monster_by_violetmoonshade-d39e6w4.gif'
})

Monster.create!({
  name: 'Crawk',
  attack: 25,
  defense: 20,
  hp: 250,
  rarity: 6,
  exp: 300,
  bounty: 300,
  avatar: 'http://fc07.deviantart.net/fs70/f/2011/326/5/5/crawmangler_sprite_by_pearlzu-d4gzkwn.gif'
})

Monster.create!({
  name: 'Johnny',
  attack: 10,
  defense: 10,
  hp: 70,
  rarity: 3,
  exp: 70,
  bounty: 100,
  avatar: 'http://fc04.deviantart.net/fs26/f/2008/184/c/1/Apple_Sprite_by_ApplePoo.gif'
})

2.times do
  Encounter.create!({
    player_id: 1,
    monster_id: 1
  })
end

Encounter.create!({
  player_id: 1,
  monster_id: 2
})

Encounter.create!({
  player_id: 1,
  monster_id: 3
})

3.times do
  Encounter.create!({
    player_id: 2,
    monster_id: 2
  }) 
end
