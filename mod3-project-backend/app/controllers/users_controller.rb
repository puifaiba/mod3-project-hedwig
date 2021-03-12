class UsersController < ApplicationController
     before_action :user_params, only: [:create]

    def index
        users = User.all
        render json: users
    end
 
    def show
        user = User.find_by(id: params[:id])
        render json: user
    end

    def create
        @user = User.create!(user_params) 
        render json: @user
    end

    private
        def user_params
            params.permit(:username)
        end
end
