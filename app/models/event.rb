

CONST_STATELIST = {
  'AL' => 'Alabama',
  'AK' => 'Alaska',
  'AS' => 'American Samoa',
  'AZ' => 'Arizona',
  'AR' => 'Arkansas',
  'CA' => 'California',
  'CO' => 'Colorado',
  'CT' => 'Connecticut',
  'DE' => 'Delaware',
  'DC' => 'District Of Columbia',
  'FM' => 'Federated States Of Micronesia',
  'FL' => 'Florida',
  'GA' => 'Georgia',
  'GU' => 'Guam',
  'HI' => 'Hawaii',
  'ID' => 'Idaho',
  'IL' => 'Illinois',
  'IN' => 'Indiana',
  'IA' => 'Iowa',
  'KS' => 'Kansas',
  'KY' => 'Kentucky',
  'LA' => 'Louisiana',
  'ME' => 'Maine',
  'MH' => 'Marshall Islands',
  'MD' => 'Maryland',
  'MA' => 'Massachusetts',
  'MI' => 'Michigan',
  'MN' => 'Minnesota',
  'MS' => 'Mississippi',
  'MO' => 'Missouri',
  'MT' => 'Montana',
  'NE' => 'Nebraska',
  'NV' => 'Nevada',
  'NH' => 'New Hampshire',
  'NJ' => 'New Jersey',
  'NM' => 'New Mexico',
  'NY' => 'New York',
  'NC' => 'North Carolina',
  'ND' => 'North Dakota',
  'MP' => 'Northern Mariana Islands',
  'OH' => 'Ohio',
  'OK' => 'Oklahoma',
  'OR' => 'Oregon',
  'PW' => 'Palau',
  'PA' => 'Pennsylvania',
  'PR' => 'Puerto Rico',
  'RI' => 'Rhode Island',
  'SC' => 'South Carolina',
  'SD' => 'South Dakota',
  'TN' => 'Tennessee',
  'TX' => 'Texas',
  'UT' => 'Utah',
  'VT' => 'Vermont',
  'VI' => 'Virgin Islands',
  'VA' => 'Virginia',
  'WA' => 'Washington',
  'WV' => 'West Virginia',
  'WI' => 'Wisconsin',
  'WY' => 'Wyoming'
}.freeze

class Event < ApplicationRecord
  # user id validation through assocation with user
  validates :categoryId, :name, :startDate, :header, :description, :areaCode, :imgURL, :price, presence: true

  before_validation :ensure_stripe_key

  belongs_to :author,
             primary_key: :id,
             foreign_key: :userId,
             class_name: :User

  belongs_to :category,
             primary_key: :id,
             foreign_key: :categoryId,
             class_name: :Category

  has_many :registrations,
           primary_key: :id,
           foreign_key: :eventId,
           class_name: :Registration,
           dependent: :destroy

  has_many :registered_users,
           through: :registrations

  has_many :book_markings,
           primary_key: :id,
           foreign_key: :eventId,
           class_name: :Bookmark

  has_many :bookmarked_users,
           through: :book_markings,
           source: :user

  def ensure_stripe_key
    unless stripeKey
      self.stripeKey = ''
      save
    end
  end

  def self.search(fields)
    p ["SEARCH", fields]
    if fields[:time] && fields[:time].to_i > -1
      if fields[:categoryId] && fields[:categoryId].to_i > -1
        self.find_by_category_string_and_time(fields[:time], fields[:categoryId], fields[:pattern])
      else
        self.find_by_time_and_string(fields[:time], fields[:pattern])
        end
    elsif fields[:categoryId] && fields[:categoryId].to_i > -1
      self.find_by_category_and_string(fields[:categoryId], fields[:pattern])
    else
      p ["JUST PATTERN SEARCH", fields]
      self.find_by_string(fields[:pattern] || '')
    end
  end

  def self.find_by_string(pattern = '')
    Event.where('lower(name) LIKE lower(?)', "%#{pattern}%")
  end

  def self.find_by_category_and_string(categoryId, pattern = '')
    Event.where('"categoryId" = ? AND lower(name) LIKE lower(?)', categoryId, "%#{pattern}%")
  end

  def self.find_by_category_string_and_time(time, categoryId, pattern = '')
    now = DateTime.now
    later = now + time.to_i
    Event.where('"startDate" > ? AND "startDate" <= ? AND "categoryId" = ? AND lower(name) LIKE lower(?)', now, later, categoryId, "%#{pattern}%")
  end

  def self.find_by_time_and_string(time, pattern = '')
    now = DateTime.now
    later = now + time.to_i
    Event.where('"startDate" > ? AND "startDate" <= ? AND lower(name) LIKE lower(?)', now, later, "%#{pattern}%")
  end
end
