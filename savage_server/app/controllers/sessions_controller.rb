class SessionsController < ApplicationController

  def create
    username = params[:username]
    password = params[:password]

    player = Player.find_by(username: username)

    if player && player.authenticate(password)
      session[:current_user] = player.id
      render json: player
    else
      #need send error back
    end
  end

  def destroy
    session.clear
    #need to send back a trigger to login view
  end

end