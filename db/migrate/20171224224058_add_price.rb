class AddPrice < ActiveRecord::Migration[5.1]
  def change
    add_column :events, :price, :integer
  end
end
