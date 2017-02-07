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

end
