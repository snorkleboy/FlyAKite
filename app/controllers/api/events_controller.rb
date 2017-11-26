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
    @event = Event.new(params)
    if (event.save)
      render "api/users/show"
    else
      render json: ["Invalid username/password combination"], status: 401
    end
  end

  def edit
  end

  def update
  end

  def delete
  end

    private 
  
  def event_params
    params.require(:event).permit(
      :name,
      :startDate,
      :header,
      :imgURL,
      :areaCode,
      :state,
      :endDate,
      :description, 
    )
  end
end
