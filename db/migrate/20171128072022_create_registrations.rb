class CreateRegistrations < ActiveRecord::Migration[5.1]
  def change
    create_table :registrations do |t|
      t.integer :userId, null: false
      t.integer :eventId, null:false

      t.timestamps
    end

    add_index :registrations, [ :userId, :eventId ], unique: true
  end
end
