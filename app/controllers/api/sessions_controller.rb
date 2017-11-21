class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_cred(params[:user][:username],params[:user][:password] )
    if (@user)
      login(@user)
      render "api/users/show"
    else
      render json: ["Invalid username/password combination"], status: 401
    end
  end

  def destroy
      @user= current_user
      logout
      render "api/users/show"
  
  end

  private
    def user_params
    params.require(:user).permit(:username, :password)
  end
end
