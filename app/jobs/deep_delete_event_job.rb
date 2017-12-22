class DeepDeleteEventJob < ApplicationJob
  queue_as :default

  def perform(event_id)
    registrations = Registration.where('"eventId" = ?',event_id)
    bookmarks = Bookmark.where('"eventId" = ?',event_id)
    destroy([registrations,bookmarks])
  end

  def destroy(arr)
    arr.each do |modelsarr|
      modelsarr.each{|item| item.destroy}
    end
  end
end
