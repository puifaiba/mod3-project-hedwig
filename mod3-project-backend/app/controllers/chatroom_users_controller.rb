class ChatroomUsersController < ApplicationController
    def index
        chatroom_users = ChatroomUser.all
        render json: chatroom_users
    end
 
    def show
        chatroom_user = ChatroomUser.find_by(id: params[:id])
        render json: chatroom_user
    end
end
