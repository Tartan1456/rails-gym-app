Rails.application.routes.draw do
  root :to => 'home#index'

  namespace :api do
    resources :workouts, only: [:index, :show]
    resources :results
  end
end
