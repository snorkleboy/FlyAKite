class Api::CategoriesController < ApplicationController
  
    def index
    @cats = Category.all
    # @events =  Event.all

    # @cats = Category.all.includes(:events)
    # @events = []
    # @cats.each{|category| @events.concat(category.events)  }
  end

  # def create
  #   if (params[:lists])
  #     if (params[:lists][:categoryList]) 
  #       @cats = Category.where("id NOT IN (?)", cat_params[:categoryList])
  #     else
  #       @cats = Category.all
  #     end
  #     if (params[:lists][:eventList]) 
  #       @events =  Event.where("id NOT IN (?)", cat_params[:eventList])
  #     else
  #       @events = Event.all
  #     end
  #   else
  #     @cats = Category.all
  #     @events = Event.all
  #   end
  #   # @cats = Category.all
  #   # @events =  Event.all
  #   render :index
  # end

    def cat_params
    params.require(:lists).permit(
      :eventList,
      :categoryList
    )
  end
end
