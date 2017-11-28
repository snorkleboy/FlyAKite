class Api::EventsController < ApplicationController
  rescue_from ActiveRecord::RecordNotFound, :with => :render_404
  
  def render_404
    render json: [@event.errors.full_messages], status: 404
  end

  def index
    @events = Event.all   #.where("id NOT IN (?)", params[:eventList])
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
    @event = Event.find(params[:eventId])
  end

  def update
    @event = current_user.events.find(event_params[:id])
    if @event.update_attributes(event_params)
      render "api/events/show"
    else
      render json: ["event update error"], status: 404
    end
  end

  def delete
  end

    private 
  
  def event_params
    params.require(:event).permit(
      :categoryId,
      :id,
      :userId,
      :name,
      :startDate,
      :header,
      :imgURL,
      :areaCode,
      :state,
      :endDate,
      :description, 
      :city
    )
  end
end

