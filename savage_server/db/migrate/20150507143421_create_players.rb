class CreatePlayers < ActiveRecord::Migration
  def change
    create_table :players do |t|
      t.string :username
      t.string :password_digest
      t.string :first_name
      t.string :last_name
      t.integer :level, default: 1
      t.integer :max_health, default: 100
      t.integer :hp, default: 100
      t.integer :attack, default: 10
      t.integer :defense, default: 8
      t.integer :exp, default: 0
      t.integer :gold, default: 1000
      t.integer :steps, default: 0

      t.timestamps
    end
  end
end
