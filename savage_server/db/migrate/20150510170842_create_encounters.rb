class CreateEncounters < ActiveRecord::Migration
  def change
    create_table :encounters do |t|
      t.integer :player_id
      t.integer :monster_id
      t.integer :encounters, :default => 0
    end
  end
end
