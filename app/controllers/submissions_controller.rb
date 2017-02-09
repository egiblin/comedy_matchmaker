class SubmissionsController < ApplicationController
  def create
    @submission = Submission.new(params_strong)
    if @submission.save
      flash[:notice] = "Submission added successfully!"
      redirect_to teams_path
    else
      flash[:notice] = @team.errors.full_messages.to_sentence
      render :new
    end
  end

  def new
    @team = Submission.new
  end

  private

  def params_strong
    params.require(:team).permit(
      :name,
      :location,
      :team_photo
      )
  end
end
