class MonstersController < ApplicationController

  def index
    render json: Monster.all
  end

  def show
    render json: Monster.find(params[:id])
  end

end