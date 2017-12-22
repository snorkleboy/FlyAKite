
currentUser = current_user
registered_ids = []
bookmarked_ids = []
if (currentUser)
    registered_ids =  current_user.registered_events.ids
    bookmarked_ids = current_user.bookmarked_events.ids
end

json.byIDs do 
    @events.each do |event|
        currentUsersEvent = currentUser ?  currentUser.id == event.userId : false
        registered = registered_ids.include?(event.id)
        bookmarked = bookmarked_ids.include?(event.id)
        json.set! event.id do
            json.partial! "api/events/event", event: event, currentUsersEvent:currentUsersEvent,registered:registered, bookmarked:bookmarked
        end
    end
end || json.byIDs({})

json.order do
    json.array! @events.map{|event| event.id}
end

