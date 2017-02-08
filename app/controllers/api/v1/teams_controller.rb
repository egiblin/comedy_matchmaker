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

  def create
    data = JSON.parse(request.body.read)
    team = Team.new(name: data["name"], location: data["location"])
    if team.save
      flash[:notice] = "Team added successfully!"
      teams = Team.all
      render json: teams
    else
      flash[:notice] = team.errors.full_messages.to_sentence
      teams = Team.all
      render json: teams
    end
  end

  def new
    @team = Team.new
  end



end
