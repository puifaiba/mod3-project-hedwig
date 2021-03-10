class ChatroomsController < ApplicationController
    def index
        chatrooms = Chatroom.all
        render json: chatrooms
    end
 
    def show
        chatroom = Chatroom.find_by(id: params[:id])
        render json: chatroom
    end
end
