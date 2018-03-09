class Api::CategoriesController < ApplicationController
  def index
    @cats = Category.all
end

  def cat_params
    params.require(:lists).permit(
      :eventList,
      :categoryList
    )
  end
end
