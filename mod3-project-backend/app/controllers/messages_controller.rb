class MessagesController < ApplicationController
    def index
        messages = Message.all
        render json: messages
    end
 
    def show
        message = Message.find_by(id: params[:id])
        render json: message
    end
end
