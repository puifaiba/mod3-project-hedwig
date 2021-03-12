class MessagesController < ApplicationController
    def index
        messages = Message.all
        render json: messages
    end
 
    def show
        message = Message.find_by(id: params[:id])
        render json: message
    end

    def create
        @message = Message.create!(user_params) 
        render json: @message
    end

    def user_params
        params.permit(:chatroom_id, :user_id, :body)
    end

    def destroy
        @message = Message.find_by(id: params[:id])
        @message.destroy
        render json: @message
    end
end
