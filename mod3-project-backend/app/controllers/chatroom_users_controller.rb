class ChatroomUsersController < ApplicationController
    def index
        chatroom_users = ChatroomUser.all
        render json: chatroom_users
    end
 
    def show
        chatroom_user = ChatroomUser.find_by(id: params[:id])
        render json: chatroom_user
    end

    def create
        @chatroom_user = ChatroomUser.create!(chatroom_user_params) 
        render json: @chatroom_user
    end

    def chatroom_user_params
        params.permit(:chatroom_id, :user_id)
    end
end
