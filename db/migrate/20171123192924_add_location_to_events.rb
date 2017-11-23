class AddLocationToEvents < ActiveRecord::Migration[5.1]
  def change
    add_column :events, :city, :string
    add_column :events, :areaCode, :integer, null: false
    add_column :events, :state, :string
  end
end
