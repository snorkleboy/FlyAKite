class AddStripe < ActiveRecord::Migration[5.1]
  def change
    add_column :registrations, :stripeEmail, :string
    add_column :registrations, :stripeKey, :string
  end
end
