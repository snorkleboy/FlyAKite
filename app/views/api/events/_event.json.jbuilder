json.extract! event, :id, :categoryId , :userId, :name, :startDate, :endDate, :header, :description, :imgURL
json.currentUsersEvent event.id == current_user.id

json.set! :location do
    json.areaCode event.areaCode
    json.state event.state
    json.city event.city
end

