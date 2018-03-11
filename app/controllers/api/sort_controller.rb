class Api::SortController < ApplicationController
  def most_recent
    @events = Event.all.order('created_at').limit(params[:limit] || 10).offset(params[:offset] || 0)
    indexRender
  end

  def upcoming
    @events = Event.where('"startDate" > ?', DateTime.now)
                   .order('"startDate"')
                   .limit(params[:limit] || 10)
                   .offset(params[:offset] || 0)
    indexRender
  end

  def search
    @events = Event.search(params)
    p @events
    indexRender
  end

  def category
    if params[:categoryId] == '-1'
      most_recent
    else
      @events = Event.where(categoryId: params[:categoryId])
                     .limit(params[:limit] || 10)
                     .offset(params[:offset] || 0)
      indexRender
    end
  end

  def my_events
    @events = current_user.events
    indexRender
  end

  def registered
    @events = current_user.registered_events
    indexRender
  end

  def bookmarked
    @events = current_user.bookmarked_events
    indexRender
  end

  def indexRender
    render 'api/events/index'
  end
end
