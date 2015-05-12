Rails.application.routes.draw do

  resources :players, except: [:new, :edit]
  resources :monsters, only: [:index, :show]
  get '/players/:id/monsters' => 'players#monsters'

  post 'sessions' => 'sessions#create'
  delete 'sessions' => 'sessions#destroy'

end
