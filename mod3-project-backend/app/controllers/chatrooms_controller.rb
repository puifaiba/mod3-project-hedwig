class ChatroomsController < ApplicationController
    def index
        chatrooms = Chatroom.all
        render json: chatrooms
    end
 
    def show
        chatroom = Chatroom.find_by(id: params[:id])
        render json: chatroom
    end

    def create
        @chatroom = Chatroom.create!(chatroom_params) 
        render json: @chatroom
    end

    def chatroom_params
        params.permit(:title)
    end

    def destroy
        @chatroom = Chatroom.find_by(id: params[:id])
        @chatroom.destroy
        render json: @chatroom
    end
end
