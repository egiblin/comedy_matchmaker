class Api::V1::SubmissionsController < ApplicationController
  skip_before_filter :verify_authenticity_token

  def index
    data = JSON.parse(request.body.read)
    show = Show.find(data["show"].to_i)
    submissions = show.submissions
    respond_to do |format|
      format.json { render :json => {:show => show, :submissions => submissions}}
    end
  end


  def create
    data = JSON.parse(request.body.read)
    show = Show.find(data["show"].to_i)
    submission = Submission.new(pitch: data["pitch"], show: show,
    user: current_user, team: data["team"], improv: data["improv"], selected: data["selected"])
    binding.pry
    if submission.save
      flash[:notice] = "Submission added successfully!"
      shows = Show.all
      render json: shows
    else
      flash[:notice] = submission.errors.full_messages.to_sentence
      shows = Show.all
      render json: shows
    end
  end

  def new
    @submission = Submission.new
  end

  def update

  end

end
