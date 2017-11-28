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

category1= Category.create(name:"INDOOR")
category2= Category.create(name:"SPORT")
category3= Category.create(name:"SOCIAL")
category4= Category.create(name:"CASUAL")
category5= Category.create(name:"NIGHT LIFE")
category6= Category.create(name:"AQUATIC")
category7= Category.create(name:"OUDOOR")


event1 = Event.create!(
    userId: User.first.id,
    name: "Kite Surfing",
    startDate: DateTime.new(2017,11,18,7,30 ),
    endDate: DateTime.new(2017,11,18,8,30),
    header: "Kite Surfing with the stars",
    description:" late night kite surfing for the bold and the adventurous. Must sign liability forms in duplicate. We will meet up at point reyes at the start time and head out to a secret beach location to get some sweet winds",
    areaCode: 925,
    categoryId: 1,
    imgURL: "http://wattsstreet.org/wp-content/uploads/2017/02/kite.jpg"
    )

event2 = Event.create!(
    categoryId: 2,
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
     categoryId: 3,
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

 event4 = Event.create!(
     categoryId: 4,
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

#  /////////////

event1 = Event.create!(
    userId: User.first.id,
    name: "Kite Surfing",
    startDate: DateTime.new(2017,11,18,7,30 ),
    endDate: DateTime.new(2017,11,18,8,30),
    header: "Kite Surfing with the stars",
    description:" late night kite surfing for the bold and the adventurous. Must sign liability forms in duplicate. We will meet up at point reyes at the start time and head out to a secret beach location to get some sweet winds",
    areaCode: 925,
    categoryId: 5,
    imgURL: "http://wattsstreet.org/wp-content/uploads/2017/02/kite.jpg"
    )

event2 = Event.create!(
    categoryId: 6,
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
     categoryId: 7,
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

 event4 = Event.create!(
     categoryId: 1,
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

 ################

 event1 = Event.create!(
    userId: User.first.id,
    name: "Kite Surfing",
    startDate: DateTime.new(2017,11,18,7,30 ),
    endDate: DateTime.new(2017,11,18,8,30),
    header: "Kite Surfing with the stars",
    description:" late night kite surfing for the bold and the adventurous. Must sign liability forms in duplicate. We will meet up at point reyes at the start time and head out to a secret beach location to get some sweet winds",
    areaCode: 925,
    categoryId: 2,
    imgURL: "http://wattsstreet.org/wp-content/uploads/2017/02/kite.jpg"
    )

event2 = Event.create!(
    categoryId: 3,
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
     categoryId: 4,
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

 event4 = Event.create!(
     categoryId: 5,
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
