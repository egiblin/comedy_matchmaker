class Api::V1::ShowsController < ApplicationController
  skip_before_filter :verify_authenticity_token

  def index
    @shows = Show.all
    render json: @shows
  end

  def show
    @show = Show.find(params[:id])
    render json: @show
  end

  def create
    data = JSON.parse(request.body.read)
    binding.pry
    show = Show.new(name: data["name"], location: data["location"], date: data["date"],
    time: data["time"], duration: data["duration"], slots: data["slots"], creator: current_user,
    price: data["price"])
    if show.save
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
