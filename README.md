# [FlyaKite](https://flyakite.herokuapp.com)
### FlyaKite is a full-stack web application inspired by EventBrite. It is a react/redux front end paired with a Ruby on Rails backend. The purpose of the site is to allow users to create events and see events created by other users organized into a variety of categories. Users can also bookmark and register for events to consider later. 



## Features & Implementation



### cloudinary integration
![cloudinary demo](http://res.cloudinary.com/flyakite/image/upload/v1512163911/cloudinarydemo_fz6q2b.gif)

#### All images on the site are actually hosted by cloudinary which offers a powerful set of tools for manipulating images on the fly. I integrated the cloudinary widget into my form, letting users seamlessly upload thier photos to my cloudinary account, get a preview of that image, and not be redirected from my form.






### Clear and Easy Navigation
![navigation](http://res.cloudinary.com/flyakite/image/upload/v1512163917/navigationDemo_fbamfq.gif)

##### I created and styled a good looking sidebar for easy navigation across the site. It allows users to get back to the index or specific category from anywhere on the site. 





### redirecting
![redirection](http://res.cloudinary.com/flyakite/image/upload/v1512163922/redirectdemo_irfgjx.gif)

##### I used higher order componets to protect various routes within my site. The main part of the site that is rotected in such a way is the create event page which redirects unsigned in users to the sign up page. I implimented it in such a way that if the user was redirected, after they sign up they are redirected back to the page they were trying to visit in the first place


### refreshability

##### I made it so that the site stays stable and consistent if refreshed on any page. This presented some difficulties with keeping a user logged in past a page refresh.  accomplished this by bootstrapping some minimal information about the current user to the window which the front end uses to initialize itself. 




## Ideas for impovements

##### rework the fetching system to rely on more api calls for less data. For example only fetch 10 events on the index page.

##### make the index page into a infinite scroll page once its only fetching a few at a time. 

##### implement search to allow users to find events by name or author

##### add google maps functionality 

##### make a most-recent list of events which are updated in realtime using websocket. 

##### integrate registration with a call to some payment system
