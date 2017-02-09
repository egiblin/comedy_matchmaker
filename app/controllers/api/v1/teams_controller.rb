class Api::V1::TeamsController < ApplicationController
  skip_before_filter :verify_authenticity_token

  def index
    @teams = Team.all
    @current_user = current_user
    respond_to do |format|
      format.json  { render :json => {:teams => @teams, :current_user => @current_user }}
    end
  end

  def show
    @team = Team.find(params[:id])
    @users = @team.users
    respond_to do |format|
      format.json  { render :json => {:team => @team, :users => @users }}
    end
  end

  def create
    data = JSON.parse(request.body.read)
    team = Team.new(name: data["name"], location: data["location"])
    if team.save
      Userteam.create(user: current_user, team: team)
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
