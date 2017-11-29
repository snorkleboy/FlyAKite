class Api::BookmarksController < ApplicationController
  def create
        @bookmark = Bookmark.new( userId:current_user().id , eventId: params[:eventId] )
        if (@bookmark.save!)
            render json: params[:eventId], status: 200
        else
            render json: @bookmark.errors.full_messages, status: 401
        end
  end

  def destroy
        @bookmark = current_user().Bookmark.find_by(eventId:params[:eventId]) 
        if (@bookmark.destroy!)
            render json: {}, status: 200
        else
            render json: @bookmark.errors.full_messages, status: 401
        end
  end
end
