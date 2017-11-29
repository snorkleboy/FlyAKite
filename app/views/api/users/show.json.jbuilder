json.current_user do
    json.partial! "api/users/user", user: @user
end
json.registrations do
    json.array! @registrations.map{|registration| registration.eventId}
end

json.bookmarks do
    json.array! @bookmarks.map{|bookmark| bookmark.eventId}
end