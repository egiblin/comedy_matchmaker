class Api::V1::ShowsController < ApplicationController
  skip_before_filter :verify_authenticity_token

  def index
    @shows = Show.all
    @current_user = current_user
    if @current_user
      @user_shows = @current_user.shows
    end
    respond_to do |format|
      format.json  { render :json => {:shows => @shows, :current_user => @current_user, :user_shows => @user_shows }}
    end
  end

  def show
    @show = Show.find(params[:id])
    @current_user = nil
    if current_user
      @current_user = current_user
      @teams = current_user.teams
    end
    @submissions = @show.submissions
    @users = User.all
    respond_to do |format|
      format.json  { render :json => {:show => @show, :teams => @teams, :current_user => @current_user, :submissions => @submissions, :users => @users }}
    end
  end

  def create
    data = JSON.parse(request.body.read)
    creator = (current_user.first_name + " " + current_user.last_name)
    show = Show.new(name: data["name"], location: data["location"], date: data["date"],
    time: data["time"], duration: data["duration"], slots: data["slots"], creator: creator,
    price: data["price"], show_photo: data["show_photo"])
    if show.save
      Usershow.create(user: current_user, show: show)
      flash[:notice] = "Show added successfully!"
      shows = Show.all
      render json: shows
    else
      flash[:notice] = show.errors.full_messages.to_sentence
      shows = Show.all
      render json: shows
    end
  end

  def new
    @show = Show.new
  end

end
