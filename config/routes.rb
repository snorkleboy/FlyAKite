Rails.application.routes.draw do


  namespace :api do
    get 'bookmarks/create'
  end

  namespace :api do
    get 'bookmarks/destroy'
  end

  namespace :api, defaults: {format: :json} do
    resources :categories, only: [:index, :all, :create]
    resources :users, only: [:show, :create, :update, :index]
    resource :session, only: [:create, :destroy, :show]
    resources :events
    match 'registration/:eventId/:userId', to: 'registrations#create', via: [:post]
    match 'registration/:eventId', to: 'registrations#destroy', via: [:delete]

    match 'bookmarks/:eventId/', to: 'bookmarks#create', via: [:post]
    match 'bookmarks/:eventId', to: 'bookmarks#destroy', via: [:delete]
  end

  #/events/:eventID/user/User.id
  root "static_pages#root"

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
