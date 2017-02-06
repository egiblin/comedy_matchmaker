class Api::V1::UsersController < ApplicationController
  skip_before_filter :verify_authenticity_token

  def index
    @users = User.all
    render json: @users
  end

end
