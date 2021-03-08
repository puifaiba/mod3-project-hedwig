class HouseUsersController < ApplicationController
    def index
        house_users = HouseUser.all
        render json: house_users
    end
 
    def show
        house_user = HouseUser.find_by(id: params[:id])
        render json: house_user
    end
end
