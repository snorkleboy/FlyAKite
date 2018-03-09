
json.extract! event, :id, :categoryId, :userId, :name, :startDate, :endDate, :header, :description, :imgURL, :price, :stripeKey

json.currentUsersEvent currentUsersEvent
json.registered registered
json.bookmarked bookmarked
json.set! :location do
  json.areaCode event.areaCode
  json.state event.state
  json.city event.city
end
