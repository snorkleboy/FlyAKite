class Api::EventsController < ApplicationController
  rescue_from ActiveRecord::RecordNotFound, with: :render_404

  def render_404
    render json: [@event.errors.full_messages], status: 404
  end

  def index
    @events = Event.all
                   .limit(params[:limit] || 10).offset(params[:offset] || 0)
  end

  def show
    @event = Event.find(params[:id])
    render json: ['couldnt find that event'] unless @event
  end

  def new; end

  def create
    @event = Event.new(event_params)
    if @event.save
      render 'api/events/show'
    else
      render json: [@event.errors.full_messages], status: 404
    end
  end

  def edit
    @event = current_user.events.find(params[:eventId])
  end

  def update
    @event = current_user.events.find(event_params[:id])
    if @event.update!(event_params)
      render 'api/events/show'
    else
      render json: [event.errors.full_messages], status: 404
    end
  end

  def destroy
    event = current_user.events.find(params[:id])
    if event
      DeepDeleteEventJob.perform_later(event.id)
      event.destroy
      @event = event
      render 'api/events/show'
    else
      render json: [event.errors.full_messages], status: 404
    end
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
      :offset,
      :stripeKey,
      :price
    )
  end
end
