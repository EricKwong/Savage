class CreateEncounters < ActiveRecord::Migration
  def change
    create_table :encounters do |t|
      t.belongs_to :player, index: true
      t.belongs_to :monster, index: true

      t.timestamps  
    end
  end
end
