class Api::BookmarksController < ApplicationController
  def create
        @bookmark = Bookmark.new( userId:current_user().id , eventId: params[:eventId] )
        if (@bookmark.save!)
            @event = @bookmark.event
            render "api/events/show"
        else
            render json: @bookmark.errors.full_messages, status: 401
        end
  end

  def destroy
        @bookmark = current_user().bookmarks.find_by(eventId:params[:eventId]) 
        if (@bookmark.destroy!)
            @event = @bookmark.event
            render "api/events/show"
        else
            render json: @bookmark.errors.full_messages, status: 401
        end
  end
end
