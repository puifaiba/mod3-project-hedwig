class HousesController < ApplicationController
    def show
        house = House.find_by(id: params[:id])
        render json: house
    end
end
