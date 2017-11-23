class CreateEvents < ActiveRecord::Migration[5.1]
  def change
    create_table :events do |t|
      t.integer :userId, null: false
      t.string :name, null: false
      t.timestamp :startDate, null: false
      t.timestamp :endDate
      t.text :header, null: false
      t.text :description, null: false

      t.timestamps
    end
    add_index(:events, :userId)
  end
end
