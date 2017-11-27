class Category < ApplicationRecord
    validates :name, presence: true, uniqueness: true

    has_many :events,
    primary_key: :id,
    foreign_key: :categoryId,
    class_name: :Event

end
