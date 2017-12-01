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

INDOOR= Category.create(name:"INDOOR")
SPORT= Category.create(name:"SPORT")
SOCIAL= Category.create(name:"SOCIAL")
CASUAL= Category.create(name:"CASUAL")
NIGHT= Category.create(name:"NIGHT LIFE")
AQUATIC= Category.create(name:"AQUATIC")
OUDOOR= Category.create(name:"OUDOOR")


event1 = Event.create!(
    userId: User.first.id,
    name: "Kid Towners Presents: a night with kites",
    startDate: DateTime.new(2017,11,18,7,30 ),
    endDate: DateTime.new(2017,11,18,8,30),
    header: "Kite Surfing with the stars",
    description:" late night kite surfing for the bold and the adventurous. Must sign liability forms in duplicate. We will meet up at point reyes at the start time and head out to a secret beach location to get some sweet winds",
    areaCode: 925,
    categoryId: 1,
    imgURL: "https://res.cloudinary.com/flyakite/image/upload/v1512107132/4507582475_3b4abbb78c_o_scma4l.jpg"
    )

event2 = Event.create!(
    categoryId: 3,
    userId: User.first.id,
    name: "Oakley Annual kite-a-thon",
    startDate: DateTime.new(2017,9,18,7,30 ),
    endDate: DateTime.new(2017,11,18,8,30),
    header: 'A community centered event for everyone',
    description:"the return of the world famous Annual oakley fields comunity kite-a-thon. Bring your kids, bring your wife, no need to to hide. we will have high flying kites and slow cooked ribs. Bring a kite or bring a friend",  
    areaCode: 530,
    city: "Sacremento",
    state: "CA",
    imgURL: "http://res.cloudinary.com/flyakite/image/upload/v1512107545/4508220980_8f351f254e_o_bez5rn.jpg"

 )

 event3 = Event.create!(
     categoryId: 1,
    userId: User.all[3].id,
    name: "Learn to draw: kites and kites",
    startDate: DateTime.new(2017,9,18,7,30 ),
    endDate: DateTime.new(2017,11,18,8,30),
    header: "learn photoshop by drawing kites",
    description:"this will be a multi day course in the intricacies and subtleties of kites and drawing them. although this is open to he public it is advised to have atleast 20 years entry level experience in professional level photoshop.  ",  
    areaCode: 530,
    city: "Friessland",
    state: "CA",
    imgURL: "http://res.cloudinary.com/flyakite/image/upload/v1512107581/12979-colorful-kites-1680x1050-digital-art-wallpaper_ftlbnl.jpg"

 )

 event4 = Event.create!(
     categoryId: 3,
    userId: User.all[3].id,
    name: "Save The Children kite drive",
    startDate: DateTime.new(2017,9,18,7,30 ),
    endDate: DateTime.new(2017,11,18,8,30),
    header: "a charity drive for our kids",
    description:"we are collecting donations and kites to help get kids off of drugs. Kiteing is a safe, communal, and drug free hobby everyone enjoys. Help us help the community and give back. Every Donation is rewarded with a free kite. ",  
    areaCode: 530,
    city: "Burgandy",
    state: "CA",
    imgURL: "http://res.cloudinary.com/flyakite/image/upload/v1512107570/10268473_kite_xfylfx.jpg"

 )

  event5 = Event.create!(
     categoryId: 6,
    userId: User.all[4].id,
    name: "GCKC presents father son Kite day",
    startDate: DateTime.new(2017,10,28,2,30 ),
    endDate: DateTime.new(2017,10,28,8,30),
    header: "a day at the beach for families",
    description:"reconnect and untether with a fun day on the beach with kites and family. An all day kite-a-thon on the beach be prepared to get wet and salty and catch some nice winds. Get sandy and bring sandy too.  ",  
    areaCode: 530,
    city: "Oakland",
    state: "CA",
    imgURL: "https://res.cloudinary.com/flyakite/image/upload/v1512107679/14378441-Happy-little-boy-flies-a-kite-in-the-sunny-sky-Stock-Photo_1_e9phrn.jpg"
  )

    event6 = Event.create!(
     categoryId: 7,
    userId: User.all[3].id,
    name: "Octopus Kite: the gathering",
    startDate: DateTime.new(2018,1,28,2,30 ),
    endDate: DateTime.new(2018,2,28,8,30),
    header: "an informal gathering for octipus kite owners",
    description:"too long have octopus having kite owners been held back and brought down by the community at large. Our reach may not be long, but its multi tenticaled. Octopus kites are a special of breed of kites and as their stewards its up to us to see that they are accepted for thier inehrent superiority.",  
    areaCode: 530,
    city: "San Fransisco",
    state: "CA",
    imgURL: "http://res.cloudinary.com/flyakite/image/upload/v1512107570/kites_in_the_sky_16_x76aps.jpg"
  )

      event6 = Event.create!(
     categoryId: 1,
    userId: User.all[3].id,
    name: "synapse presents: flight",
    startDate: DateTime.new(2018,1,28,2,30 ),
    endDate: DateTime.new(2018,2,28,8,30),
    header: "a class on kite aurodynamics",
    description:"a rare public lecure from Dr Ph.D Professor Dumbledum on the advanced quantum aurodynamics of post aligned kites. Professor Dumbledum has long been regarded as the foremost export on kites and astrophysics, his new lecture tour focus' on kites interaction with the medium through which it moves and exlains the startling revelation that as far as the most presice equipment can measure, kites do not experience time or space dilation even at speds approaching 10m/s",  
    areaCode: 530,
    city: "San Fransisco",
    state: "CA",
    imgURL: "http://res.cloudinary.com/flyakite/image/upload/v1512107570/prism-kites-synapse-p5-flying-sky-mango_z2jhwc.jpg "
  )

      event7 = Event.create!(
     categoryId: 4,
    userId: User.all[3].id,
    name: "Dheli Kite chain",
    startDate: DateTime.new(2018,2,28,2,30 ),
    endDate: DateTime.new(2018,3,12,8,30),
    header: "the worlds longest running kite chain",
    description:"back in 1202 bc Aburghbal the Chainer chained the first kites together, starting an irreversble chain reaction which has lead to the modern Kite chain. Come add your kite to the Delhi kite chain and channel the cosmic energy that will come your way",  
    areaCode: 354,
    city: "Piedmont",
    state: "CA",
    imgURL: "htthttp://res.cloudinary.com/flyakite/image/upload/v1512107681/OKLMHLMF_banner_x1pvtt.jpghttp://res.cloudinary.com/flyakite/image/upload/v1512107681/OKLMHLMF_banner_x1pvtt.jpgp://res.cloudinary.com/flyakite/image/upload/v1512107675/Delhi-KiteFlying_mau2ni.jpg"
  )

        event7 = Event.create!(
     categoryId: 5,
    userId: User.all[3].id,
    name: "Veterans Kite Share",
    startDate: DateTime.new(2018,2,28,2,30 ),
    endDate: DateTime.new(2018,3,12,8,30),
    header: "Veterans from around the world will demonstrate the various ways kites have been used in warfare.",
    description:"back in 1202 bc Aburghbal the Chainer chainedthe first kites together, starting an irreversble chain reaction which has lead to the modern Kite chain. Come add your kite to the Delhi kite chain and channel the cosmic energy that will come your way",  
    areaCode: 354,
    city: "Piedmont",
    state: "CA",
    imgURL: "http://res.cloudinary.com/flyakite/image/upload/v1512107680/scr_070624-A-2013C-047a_kbo8zh.jpg"
  )

event7 = Event.create!(
     categoryId: 6,
    userId: User.all[3].id,
    name: "Scheveningen Kite Festival",
    startDate: DateTime.new(2018,3,28,2,30 ),
    endDate: Dathttp://res.cloudinary.com/flyakite/image/upload/v1512107681/OKLMHLMF_banner_x1pvtt.jpgeTime.new(2018,4,28,8,30),
    header: "A festival of festivals, the greatest Event ever",
    description:"A star studded Performer list including everyone from Bon Jovi to Wolfgang Amadeus Mozart. An expected 30 million people will gather at daytona beach for the kite-kick-off ceremony where we will release the kraken kite, which according to Professor DumbleDum will have enough lift to propel the earth towards a better dimension a our star studded perfomers play from inside my ipod mini. Food and concessions will be sold but tickets are free with a 20 dollar donation. ",  
    areaCode: 354,
    city: "San pablo",
    state: "CA",
    imgURL: "http://res.cloudinary.com/flyakite/image/upload/v1512107679/Scheveningen-Kite-Festival-Title_waybwl.jpg"
  )

  event7 = Event.create!(
     categoryId: 2,
    userId: User.all[3].id,
    name: "Equestrian league Kiting Kits",
    startDate: DateTime.new(2018,5,11,2,30 ),
    endDate: DateTime.new(2018,5,12,8,30),
    header: "Ride the winds and Straddle your life",
    description:"Horses have always inspired thoughts of kites, here at the Equestrian league we make sure people know that. Every that comes must have a horse kite and we will play various horse-kite games such as kite polo and pin the tail on the horse kite.",  
    areaCode: 354,
    city: "Oakland",
    state: "CA",
    imgURL: "http://res.cloudinary.com/flyakite/image/upload/v1512112167/kite-fest-1_tz3w07.jpg"
  )

   event7 = Event.create!(
     categoryId: 4,
    userId: User.all[3].id,
    name: "Winnie the Poo: Disney kite",
    startDate: DateTime.new(2018,5,11,2,30 ),
    endDate: DateTime.new(2018,5,12,8,30),
    header: "an annual gathering of disney lovers",
    description:"Come show your love for any story that has been taken over by disney. Mulan, starwars, winnie the pooh, all are welcome. No ocotpus kites",  
    areaCode: 222,
    city: "Oakland",
    state: "CA",
    imgURL: "http://res.cloudinary.com/flyakite/image/upload/v1512112168/21587410_1581520921870929_551166205825518593_o_k9nizy.jpg"
  )

    event7 = Event.create!(
     categoryId: 5,
    userId: User.all[3].id,
    name: "SriKanka Kite Festival",
    startDate: DateTime.new(2018,5,11,2,30 ),
    endDate: DateTime.new(2018,5,12,8,30),
    header: "Close your eyes and Open your mind",
    description:"A consciousness expansion festival aimed at getting your mind be as free as a kite. let nothingness be the wind that carries you forward. Greb your true self and fix the packet loss from being to far from the higher power.",  
    areaCode: 450,
    city: "San Fransisco",
    state: "CA",
    imgURL: "http://res.cloudinary.com/flyakite/image/upload/v1512112168/21587410_1581520921870929_551166205825518593_o_k9nizy.jpg"
  )

  event7 = Event.create!(
     categoryId: 3,
    userId: User.all[3].id,
    name: "Octopus Beach beach Kiting",
    startDate: DateTime.new(2018,5,11,2,30 ),
    endDate: DateTime.new(2018,5,12,8,30),
    header: "a full day of Ocopus Kiting at historic octopus beach",
    description:"a day at the beach and a beach a day. Thats the motto of the octopus kite. All we can do is do our best to abide. ",  
    areaCode: 450,
    city: "San Fransisco",
    state: "CA",
    imgURL: "http://res.cloudinary.com/flyakite/image/upload/v1512112171/12979-colorful-kites-1680x1050-digital-art-wallpaper_q7csr6.jpg"
  )

 event7 = Event.create!(
     categoryId: 1,
    userId: User.all[3].id,
    name: "Birds and Kites",
    startDate: DateTime.new(2018,5,23,2,30 ),
    endDate: DateTime.new(2018,6,25,8,30),
    header: "A lecture on the evolutionary history of kites and birds",
    description:"Professor Dumbledum, known for his lectures on the kite flux ratio, will be giving a brief two day long sermon on the evolutionary history of kites and how birds are just rudimentary implimentations of early kite designs. Please come early as Professor Dumbledum has acheieved asynchronicity and will start at an unpredictable time after the end of his daily tasks. ",  
    areaCode: 450,
    city: "San Fransisco",
    state: "CA",
    imgURL: "http://res.cloudinary.com/flyakite/image/upload/v1512107681/OKLMHLMF_banner_x1pvtt.jpg"
  )

  event7 = Event.create!(
     categoryId: 2,
    userId: User.all[3].id,
    name: "Noke Kite run",
    startDate: DateTime.new(2018,6,23,2,30 ),
    endDate: DateTime.new(2018,6,25,8,30),
    header: "A Noke Sneaker drink sponsored 300k kite run",
    description:"it has been called 'the most' grueling competition in the world. A 300k kite run. Standard rules apply, no octopus kites and a kite touching the ground is immediate disqualification.",  
    areaCode: 450,
    city: "San Fransisco",
    state: "CA",
    imgURL: "http://res.cloudinary.com/flyakite/image/upload/v1512107681/kite-festival-berck-sur-mer-3_kj0woo.jpg"
  )
  

  
  




  
