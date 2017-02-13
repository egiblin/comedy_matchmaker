class Api::V1::UsersController < ApplicationController
  skip_before_filter :verify_authenticity_token

  def index
    @users = User.all
    render json: @users
  end

  def show
    @user = User.find(params[:id])
    @users = User.all
    @teams = @user.teams
    @shows = @user.shows
    @all_teams = Team.all
    respond_to do |format|
      format.json  { render :json => {:user => @user, :users => @users, :teams => @teams, :shows => @shows, :all_teams => @all_teams }}
    end
  end

end
