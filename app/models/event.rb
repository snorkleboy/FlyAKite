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
#  imgURL      :text             not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  city        :string
#  areaCode    :integer          not null
#  state       :string
#  categoryId  :integer          not null
#

        CONST_STATELIST = {
    "AL"=> "Alabama",
    "AK"=> "Alaska",
    "AS"=> "American Samoa",
    "AZ"=> "Arizona",
    "AR"=> "Arkansas",
    "CA"=> "California",
    "CO"=> "Colorado",
    "CT"=> "Connecticut",
    "DE"=> "Delaware",
    "DC"=> "District Of Columbia",
    "FM"=> "Federated States Of Micronesia",
    "FL"=> "Florida",
    "GA"=> "Georgia",
    "GU"=> "Guam",
    "HI"=> "Hawaii",
    "ID"=> "Idaho",
    "IL"=> "Illinois",
    "IN"=> "Indiana",
    "IA"=> "Iowa",
    "KS"=> "Kansas",
    "KY"=> "Kentucky",
    "LA"=> "Louisiana",
    "ME"=> "Maine",
    "MH"=> "Marshall Islands",
    "MD"=> "Maryland",
    "MA"=> "Massachusetts",
    "MI"=> "Michigan",
    "MN"=> "Minnesota",
    "MS"=> "Mississippi",
    "MO"=> "Missouri",
    "MT"=> "Montana",
    "NE"=> "Nebraska",
    "NV"=> "Nevada",
    "NH"=> "New Hampshire",
    "NJ"=> "New Jersey",
    "NM"=> "New Mexico",
    "NY"=> "New York",
    "NC"=> "North Carolina",
    "ND"=> "North Dakota",
    "MP"=> "Northern Mariana Islands",
    "OH"=> "Ohio",
    "OK"=> "Oklahoma",
    "OR"=> "Oregon",
    "PW"=> "Palau",
    "PA"=> "Pennsylvania",
    "PR"=> "Puerto Rico",
    "RI"=> "Rhode Island",
    "SC"=> "South Carolina",
    "SD"=> "South Dakota",
    "TN"=> "Tennessee",
    "TX"=> "Texas",
    "UT"=> "Utah",
    "VT"=> "Vermont",
    "VI"=> "Virgin Islands",
    "VA"=> "Virginia",
    "WA"=> "Washington",
    "WV"=> "West Virginia",
    "WI"=> "Wisconsin",
    "WY"=> "Wyoming"
}

class Event < ApplicationRecord


    # user id validation through assocation with user
    validates :categoryId,:name, :startDate, :header, :description,:areaCode,:imgURL, presence: true

    belongs_to :author,
    primary_key: :id,
    foreign_key: :userId,
    class_name: :User,
    dependent: :destroy

    belongs_to :category,
    primary_key: :id,
    foreign_key: :categoryId,
    class_name: :Category


    has_many :registrations,
    primary_key: :id,
    foreign_key: :eventId,
    class_name: :Registration

    has_many :registered_users,
    through: :registrations,
    source: :user



    has_many :book_markings,
    primary_key: :id,
    foreign_key: :eventId,
    class_name: :Bookmark

    has_many :bookmarked_users,
    through: :book_markings,
    source: :user



end
