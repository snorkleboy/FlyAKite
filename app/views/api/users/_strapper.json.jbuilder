json.currentUser do
  json.extract! user, :id, :username
end

registrations = user.registrations
bookmarks = user.bookmarks

json.registrations do
  json.array! registrations.map(&:eventId)
end

json.bookmarks do
  json.array! bookmarks.map(&:eventId)
end
