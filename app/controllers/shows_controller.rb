class ShowsController < ApplicationController
  def index
    @shows = Show.all.order("date DESC")
    @current_user = current_user
    respond_to do |format|
      format.html
      format.json { render json: {:shows => @shows, :current_user => @current_user }}
    end
  end

  def show
    @show = Show.find(params[:id])
    @performers = @show.users
    @teams = Team.all
    @teams.each do |team|
      team.shows.each do |show|
        if show.name == @show.name
          team.users.each do |user|
            unless @performers.include?(user)
              @performers << user
            end
          end
        end
      end
    end
  end

  def create
    @show = Show.new(params_strong)
    if @show.save
      flash[:notice] = "Show added successfully!"
      redirect_to shows_path
    else
      flash[:notice] = @show.errors.full_messages.to_sentence
      render :new
    end
  end

  def new
    @show = Show.new
  end

  private

  def params_strong
    params.require(:show).permit(
      :name,
      :location,
      :date,
      :time,
      :duration,
      :slots,
      :creator,
      :price,
      :show_photo
      )
    end
end
