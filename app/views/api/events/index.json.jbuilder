json.byIDs do 
    @events.each do |event|
        json.set! event.id do
            json.partial! "api/events/event", event: event
        end
    end
end


json.order @events, :id, :created_at


