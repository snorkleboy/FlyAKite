# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'date'

guestUser1 = User.create(username:"guest", password:"password")
seeduser1 = User.create(username:"tim kharshan", password:"passwordd")
seeduser2 = User.create(username:"john smith", password:"123123")
seeduser3 = User.create(username:"john bender", password:"32132131")
seeduser4 = User.create(username:"chris rock", password:"32a13213a1")




event1 = Event.create!(
    userId: User.first.id,
    name: "Kite Surfing",
    startDate: DateTime.new(2017,11,18,7,30 ),
    endDate: DateTime.new(2017,11,18,8,30),
    header: "Kite Surfing with the stars",
    description:" late night kite surfing for the bold and the adventurous. Must sign liability forms in duplicate. We will meet up at point reyes at the start time and head out to a secret beach location to get some sweet winds",
    areaCode: 925,
    imgURL: "https://cdn.pixabay.com/photo/2013/07/12/17/59/kites-152760_960_720.png"
    )

event2 = Event.create!(
    userId: User.first.id,
    name: "Kite Hike",
    startDate: DateTime.new(2017,9,18,7,30 ),
    endDate: DateTime.new(2017,11,18,8,30),
    header: "2 month kite hike through the urban jungle of oakland",
    description:"we will trek through oakland using only our kites for warmth and navigation. Experienced kite hikers only, and please bring your own kite and kite themed food. ",  
    areaCode: 530,
    city: "oakland",
    state: "CA",
    imgURL: "http://www.star2.com/wp-content/uploads/2017/05/amkiteman_annmarie_2-1170x779.jpg"

 )

 event3 = Event.create!(
    userId: User.all[3].id,
    name: "kite fight",
    startDate: DateTime.new(2017,9,18,7,30 ),
    endDate: DateTime.new(2017,11,18,8,30),
    header: "Historic kite race through sceneic dog down Oakland",
    description:"were gonna go through dowgtown oakland and kite race. First person to reach the finish line wins a Nagatoshi sv500 turboFlyer kite and HE quarternion equipped handle bars for kiting on the go ",  
    areaCode: 530,
    city: "oakland",
    state: "CA",
    imgURL: "https://upload.wikimedia.org/wikipedia/commons/c/c0/Kite_festival_Vung_Tau_2009%2C_06.jpg"

 )

 event3 = Event.create!(
    userId: User.all[2].id,
    name: "Kite Hike",
    startDate: DateTime.new(2017,9,18,7,30 ),
    endDate: DateTime.new(2017,11,18,8,30),
    header: "2 month kite hike through the urban jungle of oakland",
    description:"we will trek through oakland using only our kites for warmth and navigation. Experienced kite hikers only, and please bring your own kite and kite themed food. ",  
    areaCode: 530,
    city: "oakland",
    state: "CA",
    imgURL: "https://i.ytimg.com/vi/TfvoeN3H53w/maxresdefault.jpg"

 )

#dates=  [DateTime.new(2017,8,18,2,30 ),dateTime.new(2017,8,18,8,30), dateTime.new(2017,11,18,8,30), dateTime.new(2017,12,11,8,30)


##############coppies:

event1 = Event.create!(
    userId: User.first.id,
    name: "Kite Surfing",
    startDate: DateTime.new(2017,11,18,7,30 ),
    endDate: DateTime.new(2017,11,18,8,30),
    header: "Kite Surfing with the stars",
    description:" late night kite surfing for the bold and the adventurous. Must sign liability forms in duplicate. We will meet up at point reyes at the start time and head out to a secret beach location to get some sweet winds",
    areaCode: 925,
    imgURL: "https://cdn.pixabay.com/photo/2013/07/12/17/59/kites-152760_960_720.png"
    )

event2 = Event.create!(
    userId: User.first.id,
    name: "Kite Hike",
    startDate: DateTime.new(2017,9,18,7,30 ),
    endDate: DateTime.new(2017,11,18,8,30),
    header: "2 month kite hike through the urban jungle of oakland",
    description:"we will trek through oakland using only our kites for warmth and navigation. Experienced kite hikers only, and please bring your own kite and kite themed food. ",  
    areaCode: 530,
    city: "oakland",
    state: "CA",
    imgURL: "http://www.star2.com/wp-content/uploads/2017/05/amkiteman_annmarie_2-1170x779.jpg"

 )

 event3 = Event.create!(
    userId: User.all[3].id,
    name: "kite fight",
    startDate: DateTime.new(2017,9,18,7,30 ),
    endDate: DateTime.new(2017,11,18,8,30),
    header: "Historic kite race through sceneic dog down Oakland",
    description:"were gonna go through dowgtown oakland and kite race. First person to reach the finish line wins a Nagatoshi sv500 turboFlyer kite and HE quarternion equipped handle bars for kiting on the go ",  
    areaCode: 530,
    city: "oakland",
    state: "CA",
    imgURL: "https://upload.wikimedia.org/wikipedia/commons/c/c0/Kite_festival_Vung_Tau_2009%2C_06.jpg"

 )

 event3 = Event.create!(
    userId: User.all[2].id,
    name: "Kite Hike",
    startDate: DateTime.new(2017,9,18,7,30 ),
    endDate: DateTime.new(2017,11,18,8,30),
    header: "2 month kite hike through the urban jungle of oakland",
    description:"we will trek through oakland using only our kites for warmth and navigation. Experienced kite hikers only, and please bring your own kite and kite themed food. ",  
    areaCode: 530,
    city: "oakland",
    state: "CA",
    imgURL: "https://i.ytimg.com/vi/TfvoeN3H53w/maxresdefault.jpg"

 )