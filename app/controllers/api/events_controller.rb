class Api::EventsController < ApplicationController
  rescue_from ActiveRecord::RecordNotFound, :with => :render_404
  
  def render_404
    render json: [@event.errors.full_messages], status: 404
  end

  def index
    #  search
    if (params[:pattern])
      if (params[:categoryId] )
        @events = Event.find_by_category_and_string(params[:categoryId],params[:pattern])
        .limit(params[:limit] || 99).offset(params[:offset] || 0)
      else
        @events = Event.find_by_string(params[:pattern])
        .limit(params[:limit] || 99).offset(params[:offset] || 0)
      end
    # get category
    elsif (params[:categoryId])
      @events = Event.where(categoryId: params[:categoryId])
      .limit(params[:limit] || 99).offset(params[:offset] || 0)
    # get with limit
    else
      @events = Event.all
      .limit(params[:limit] || 99).offset(params[:offset] || 0)
    end

  
    
  end

  def show
    @event = Event.find(params[:id])
    unless(@event)
      render json: ["couldnt find that event"]
    end
  end

  def new
  end

  def create
    @event = Event.new(event_params)
    if (@event.save)
      render "api/events/show"
    else
      render json: [@event.errors.full_messages], status: 404
    end
  end

  def edit
    @event = current_user.events.find(params[:eventId])
  end

  def update
    @event = current_user.events.find(event_params[:id])
    if @event.update_attributes!(event_params)
      render "api/events/show"
    else
      render json: [event.errors.full_messages], status: 404
    end
  end

  def delete
  end

    private 
  
  def event_params
    params.require(:event).permit(
      :categoryId,
      :id,
      :location,
      :userId,
      :name,
      :startDate,
      :header,
      :imgURL,
      :areaCode,
      :state,
      :endDate,
      :description, 
      :city,
      :limit,
      :offset
    )
  end
end

