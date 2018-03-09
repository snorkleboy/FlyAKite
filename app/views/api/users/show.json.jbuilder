json.current_user do
  json.partial! 'api/users/user', user: @user
end
json.registrations do
  json.array! @registrations.map(&:eventId)
end

json.bookmarks do
  json.array! @bookmarks.map(&:eventId)
end
