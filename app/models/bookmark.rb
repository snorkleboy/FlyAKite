class Bookmark < ApplicationRecord

    belongs_to :event,
    primary_key: :id,
    foreign_key: :eventId,
    class_name: :Event

    belongs_to :user,
    primary_key: :id,
    foreign_key: :userId,
    class_name: :User

end
