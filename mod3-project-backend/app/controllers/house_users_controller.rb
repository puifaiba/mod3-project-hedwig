class HouseUsersController < ApplicationController
    def index
        house_users = HouseUser.all
        render json: house_users
    end
 
    def show
        house_user = HouseUser.find_by(id: params[:id])
        render json: house_user
    end

    def create
        @house_user = HouseUser.create!(house_user_params) 
        render json: @house_user
    end

    def house_user_params
        params.permit(:house_id, :user_id)
    end
end
