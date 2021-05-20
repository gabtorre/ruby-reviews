Rails.application.routes.draw do

  root 'pages#index'
  
  namespace :api do
    namespace :v1 do
      resources :sessions, only: [:create]
      resources :registrations, only: [:create]
      delete :logout, to: "sessions#logout"
      get :logged_in, to: "sessions#logged_in"
      resources :places, param: :slug
      resources :reviews, only: [:index, :create, :destroy]
    end
  end

  get '*path', to: 'pages#index', via: :all
end
