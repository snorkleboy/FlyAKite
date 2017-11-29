json.current_user do
    json.partial! "api/users/user", user: @user
end
json.registrations do
    json.array! @registered_events.map{|registered_event| registered_event.id}
end