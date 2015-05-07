Player.destroy_all
Monster.destroy_all


4.times do
  Player.create!({
    username: 'PoopySamurai',
    password_digest: 'poop',
    first_name: 'Eric',
    last_name: 'Kwong',
    level: 10,
    hp: 300,
    attack: 30,
    defense: 30,
    exp: 1000,
    gold: 15000,
    steps: 1000
  })
end

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