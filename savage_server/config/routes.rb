Rails.application.routes.draw do

  resources :players, except: [:new, :edit]
  resources :monsters, only: [:index, :show]

end
