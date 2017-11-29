json.current_user do
    json.extract! user, :id, :username
end

registrations = user.registrations

json.registrations do
    registrations.each do |registration|
        json.set! registration.eventId do
            json.extract! registration, :eventId, :id
        end
    end                         #.map{|registered_event| registered_event.id}
end