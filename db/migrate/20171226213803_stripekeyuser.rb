class Stripekeyuser < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :stripeKey, :string
    add_column :events, :stripeKey, :string

    add_index :events, :startDate
  end
end
