Rails.application.routes.draw do
  devise_for :users

  root "shows#index"

  resources :shows

  resources :users

end
