Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: {format: :json} do

    resources :users, only: [:create, :show]
    resource :session, only: [:create, :destroy, :show]
    resources :listings, only: [:create, :show, :update, :destroy, :index]
    resources :reservations, only: [:create, :show, :index, :destroy]
    resources :reviews, only: [:create, :show, :index]
  end

  root to: "static_pages#root"
  
end
