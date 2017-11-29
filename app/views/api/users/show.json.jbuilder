json.current_user do
    json.partial! "api/users/user", user: @user
end
json.registrations do
    @registrations.each do |registration|
        json.set! registration.eventId do
            json.extract! registration, :eventId, :id
        end
    end                         #.map{|registered_event| registered_event.id}
end