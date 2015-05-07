class PlayersController < ApplicationController
  def index
    render json: Player.all
  end

  def show
    render json: Player.find(params[:id])
  end

  def create
    @player = Player.new(player_params)
    if @player.save
      # if player saves send back good response, else bad response
      # if response is good it will login and trigger main view in app
    end
  end

  def update
    @player = Player.find(params[:id])
    player.update(person_params)
    render json: @player
  end

  def destroy
    @player = Player.find(params[:id])
    if @player.destroy
      # if player destroys send them back to login view
      # else show error
    end
  end

  private

  def player_params
    params.require(:player).permit(:username, :password, :password_confirmation,
      :first_name, :last_name)
  end

end