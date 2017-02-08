Rails.application.routes.draw do
  devise_for :users

  root "shows#index"

  resources :shows

  resources :users

  resources :teams

  resources :home, only: [:index]

  namespace :api do
    namespace :v1 do
      resources :teams
      resources :users
      resources :shows
    end
  end

end
