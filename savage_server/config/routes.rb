Rails.application.routes.draw do

  resources :players, except: [:new, :edit]
  resources :monsters, only: [:index, :show]
  get '/players/:id/monsters' => 'players#monsters'

  post 'sessions' => 'sessions#create'
  delete 'sessions' => 'sessions#destroy'

  put 'players/:id/:hp' => 'players#hp_update'
  put 'players/:id/:hp/:exp/:gold' => 'players#hp_gold_exp_update'

end
