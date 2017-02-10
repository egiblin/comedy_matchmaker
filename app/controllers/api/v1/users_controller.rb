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
    respond_to do |format|
      format.json  { render :json => {:user => @user, :users => @users, :teams => @teams, :shows => @shows }}
    end
  end

end
