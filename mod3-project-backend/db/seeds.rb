# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.delete_all
House.delete_all
Chatroom.delete_all
Message.delete_all
ChatroomUser.delete_all
HouseUser.delete_all

# houses
gryffindor = House.create!(name: "Gryffindor")
hufflepuff = House.create!(name: "Hufflepuff")
ravenclaw = House.create!(name: "Ravenclaw")
slytherin = House.create!(name: "Slytherin")

# users
harry = User.create!(username: "mischiefmanaged")
hermione = User.create!(username: "wingardium_leviOsa")
ron = User.create!(username: "WeasleyYourKing")
george = User.create!(username: "thisweasleytwin") 
fred = User.create!(username: "thatweasleytwin")
draco = User.create!(username: "mind_if_i_slytherin")
tom = User.create!(username: "riddlewashere")
luna = User.create!(username: "loonylove")

# house_users
hu1 = HouseUser.create!(house_id: gryffindor.id, user_id: harry.id)
hu2 = HouseUser.create!(house_id: gryffindor.id, user_id: hermione.id)
hu3 = HouseUser.create!(house_id: gryffindor.id, user_id: ron.id)
hu4 = HouseUser.create!(house_id: gryffindor.id, user_id: george.id)
hu5 = HouseUser.create!(house_id: gryffindor.id, user_id: fred.id)
hu6 = HouseUser.create!(house_id: slytherin.id, user_id: draco.id)
hu7 = HouseUser.create!(house_id: slytherin.id, user_id: tom.id)
hu8 = HouseUser.create!(house_id: ravenclaw.id, user_id: luna.id)

# chatrooms
chat1 = Chatroom.create!(title: "passion-4-potions")
chat2 = Chatroom.create!(title: "D.A.D.A.")
chat3 = Chatroom.create!(title: "O.W.L. study group")
chat4 = Chatroom.create!(title: "N.E.W.T. for Naught")

#chat_user
cu1 = ChatroomUser.create!(chatroom_id: chat1.id, user_id: hermione.id)
cu2 = ChatroomUser.create!(chatroom_id: chat2.id, user_id: harry.id)
cu3 = ChatroomUser.create!(chatroom_id: chat2.id, user_id: hermione.id)
cu4 = ChatroomUser.create!(chatroom_id: chat2.id, user_id: ron.id)
cu5 = ChatroomUser.create!(chatroom_id: chat2.id, user_id: george.id)
cu6 = ChatroomUser.create!(chatroom_id: chat2.id, user_id: fred.id)

#messages
m1 = Message.create!(chatroom_id: chat1.id, user_id: ron.id, body: "I need some help over here!")
m2 = Message.create!(chatroom_id: chat1.id, user_id: hermione.id, body: "What is it now??")
