Rails.application.routes.draw do
  root :to => 'home#index'

  namespace :api do
    get 'workouts', to: 'workouts#show'
  end
end
