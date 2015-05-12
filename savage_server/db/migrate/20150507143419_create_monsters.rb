class CreateMonsters < ActiveRecord::Migration
  def change
    create_table :monsters do |t|
      t.string :name
      t.integer :attack
      t.integer :defense
      t.integer :hp
      t.integer :rarity
      t.integer :bounty
      t.integer :exp
      t.string :avatar

      t.timestamps
    end
  end
end
