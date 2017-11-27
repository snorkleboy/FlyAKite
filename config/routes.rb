Rails.application.routes.draw do


  namespace :api, defaults: {format: :json} do
    resources :categories, only: [:index, :all]
    resources :users, only: [:create, :update, :index]
    resource :session, only: [:create, :destroy, :show]
    resources :events
  end

  root "static_pages#root"

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
