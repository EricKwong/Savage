Rails.application.routes.draw do

  resources :players, except: [:new, :edit]
  resources :monsters, only: [:index, :show]

  post 'sessions' => 'sessions#create'
  delete 'sessions' => 'sessions#destroy'

end
