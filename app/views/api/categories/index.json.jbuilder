# json.events do
#     json.byIDs do 
#         @events.each do |event|
#             json.set! event.id do
#                 json.partial! "api/events/event", event: event
#             end
#         end
#     end
#     json.order do
#         json.array! @events.map{|event| event.id}
#     end
# end
# json.categories do
    json.byIDs do 
        @cats.each do |category|
            json.set! category.id do
               json.name category.name
            end
        end
    end
    json.order do
        json.array! @cats.map{|category| category.id}
    end
end


# json.events do
#     json.byIDs do 
#         events.each do |event|
#             json.set! event.id do
#                 json.partial! "api/events/event", event: event
#             end
#         end
#     end
#     json.order do
#         json.array! @events.map{|event| event.id}
#     end
# end
# json.categories do
#     json.byIDs do 
#         @cats.each do |category|
#             json.set! category.id do
#                json.name category.name
#             end
#         end
#     end
#     json.order do
#         json.array! @cats.map{|category| category.id}
#     end
# end

