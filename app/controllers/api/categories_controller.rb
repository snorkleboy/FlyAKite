class Api::CategoriesController < ApplicationController
    def index
    @cats = Category.all.includes(:events)
    @events = []
    @cats.each{|category| @events.concat(category.events)  }
  end

  def all
    @cats = Category.all
  end
end
