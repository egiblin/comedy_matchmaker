class TeamsController < ApplicationController
  def index
    @teams = Team.all.order("name DESC")
  end

  def show
    @team = Team.find(params[:id])
  end

  def create
    @team = Team.new(params_strong)
    if @team.save
      flash[:notice] = "Team added successfully!"
      redirect_to teams_path
    else
      flash[:notice] = @team.errors.full_messages.to_sentence
      render :new
    end
  end

  def new
    @team = Team.new
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
