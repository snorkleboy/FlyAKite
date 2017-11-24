json.extract! event, :id,  :userId, :name, :startDate, :endDate, :header, :description, :imgURL


json.set! :location do
    json.areaCode event.areaCode
    json.state event.state
    json.city event.city
end

#heroku run pg:reset
