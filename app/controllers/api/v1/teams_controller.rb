class Api::V1::TeamsController < ApplicationController
  skip_before_filter :verify_authenticity_token

  def index
    @teams = Team.all
    render json: @teams
  end

  def show
    @team = Team.find(params[:id])
    render json: @team
  end
end
