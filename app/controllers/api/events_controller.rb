class Api::EventsController < ApplicationController
  def index
    @events = Event.all
  end

  def show
    @event = Event.find(params[:id])
  end

  def new
  end
# ///t.integer "userId", null: false
# ///
# // t.string "name", null: false
# // t.datetime "startDate", null: false
# // t.text "header", null: false
# // t.text "description", null: false
# // t.text "imgURL", null: false
# // t.integer "areaCode", null: false
# //////optional
# // t.string "state"
# // t.string "city"
# // t.datetime "endDate"
  def create
    @event = Event.new(event_params)
    if (@event.save)
      render "api/events/show"
    else
      render json: ["invalid params"], status: 401
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
      render json: ["invalid params"], status: 401
    end
  end

  def delete
  end

    private 
  
  def event_params
    params.require(:event).permit(
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

