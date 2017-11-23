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
#

class Event < ApplicationRecord
end
