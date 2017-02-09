Rails.application.routes.draw do
  devise_for :users

  root "shows#index"

  resources :shows do
    resources :submissions
  end

  resources :users

  resources :teams

  resources :home, only: [:index]

  namespace :api do
    namespace :v1 do
      resources :teams
      resources :users
      resources :shows do
        resources :submissions
      end
    end
  end

end
