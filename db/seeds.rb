# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'date'

guestUser1 = User.create!(username:"guest", password:"password")
seeduser1 = User.create(username:"guest1", password:"passwordd")
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
    imgURL: "https://goo.gl/images/7tzCSh"
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
    imgURL: "https://goo.gl/images/ffTioo"

 )

#dates=  [DateTime.new(2017,8,18,2,30 ),dateTime.new(2017,8,18,8,30), dateTime.new(2017,11,18,8,30), dateTime.new(2017,12,11,8,30)
