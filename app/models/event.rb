# == Schema Information
#
# Table name: events
#
#  id          :integer          not null, primary key
#  userId      :integer          not null
#  name        :string           not null
#  startDate   :datetime         not null
#  endDate     :datetime
#  header      :text             not null
#  description :text             not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  location    :string
#


class Event < ApplicationRecord
    # user id validation through assocation with user
    # location and end date are optional
    validates :name, :startDate, :endDate, :header, :description, presence: true

    belongs_to :author, dependent: :destroy
    primary_key: :id,
    foreign_key: :userId,
    class_name: :User
end
