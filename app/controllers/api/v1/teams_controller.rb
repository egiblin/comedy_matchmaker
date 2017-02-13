class Api::V1::TeamsController < ApplicationController
  skip_before_filter :verify_authenticity_token

  def index
    @teams = Team.all
    @current_user = current_user
    if @current_user
      @user_teams = @current_user.teams
      respond_to do |format|
        format.json  { render :json => {:teams => @teams, :current_user => @current_user, :user_teams => @user_teams }}
      end
    else
      respond_to do |format|
        format.json  { render :json => {:teams => @teams, :current_user => @current_user, :user_teams => [] }}
      end
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
    team = Team.new(name: data["name"], location: data["location"], team_photo: data["team_photo"])
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
