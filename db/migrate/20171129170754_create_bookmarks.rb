class CreateBookmarks < ActiveRecord::Migration[5.1]
  def change
    create_table :bookmarks do |t|
      t.integer :userId
      t.integer :eventId

      t.timestamps
    end

    add_index :bookmarks, [ :userId, :eventId ], unique: true
  end
end
