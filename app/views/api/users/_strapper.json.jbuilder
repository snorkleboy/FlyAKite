json.current_user do
    json.extract! user, :id, :username
end
# registered_events = user.registered_events
# json.registrations do
#     json.array! registered_events.map{|registered_event| registered_event.id}
# end