class User < ApplicationRecord
    has_many :chatroom_users
    has_many :chatrooms, through: :chatroom_users
    has_many :messages
    has_many :house_users
    has_many :houses, through: :house_users
end
