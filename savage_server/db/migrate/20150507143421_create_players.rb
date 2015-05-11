class CreatePlayers < ActiveRecord::Migration
  def change
    create_table :players do |t|
      t.string :username
      t.string :password_digest
      t.string :first_name
      t.string :last_name
      t.integer :level
      t.integer :max_health
      t.integer :hp
      t.integer :attack
      t.integer :defense
      t.integer :exp
      t.integer :gold
      t.integer :steps

      t.timestamps
    end
  end
end
