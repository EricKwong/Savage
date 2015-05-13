class PlayersController < ApplicationController
  def index
    render json: Player.all
  end

  def show
    render json: Player.find(params[:id])
  end

  def create
    @player = Player.new(player_params)
    # @player.save
    if @player.save
      render json: @player
      # if player saves send back good response, else bad response
      # if response is good it will login and trigger main view in app
    end
  end

  def update
    @player = Player.find(params[:id])
    @player.update(player_params)
    render json: @player
  end

  def hp_update
    @player = Player.find(params[:id])
    @hp = params[:hp]
    @player.hp = @hp
    @player.save
    render json: @player
  end

  def hp_gold_exp_update
    @player = Player.find(params[:id])
    @hp = params[:hp]
    @exp = params[:exp]
    @gold = params[:gold]
    @player.hp = @hp
    @player.gold = @gold
    @player.exp = @exp
    @player.save
    render json: @player
  end

  def destroy
    @player = Player.find(params[:id])
    if @player.destroy
      # if player destroys send them back to login view
      # else show error
    end
  end

  def monsters
    @player = Player.find(params[:id])
    render json: @player.monsters
  end

  private

  def player_params
    params.permit(:first_name, :last_name, :username, :password, :password_confirmation, :hp, :gold, :exp)
  end

end