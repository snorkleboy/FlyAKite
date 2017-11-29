class Api::UsersController < ApplicationController
  
  def create
    @user = User.new(user_params)
    if (@user.save)   
      @registered_events = @user.registered_events
      login(@user)   
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end

  end
#/////////////////////////////
    def show
      if (params[:id] === current_user.id)
        @user = current_user
        @registered_events = @user.registered_events
        render "api/users/show"
      end
    end
#//////////////////////////////
  def update
    @user = User.new(user_params)
    if (@user.save)      
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def index
    @users = Users.all
    render "api/user/index"
  end

  private 
  
  def user_params
    params.require(:user).permit(:username, :password)
  end
end
