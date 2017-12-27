# [FlyaKite](https://flyakite.herokuapp.com)
### FlyaKite is a full-stack web application inspired by EventBrite. It is a react/redux front end paired with a Ruby on Rails backend. The purpose of the site is to allow users to create events and see events created by other users organized into a variety of categories. Users can also bookmark and register for events to consider later. 



## Features & Implementation


### Searching and Filtering on Custom routing
  I created a controller to handle a variety of searching, fetching and sorting requests, all defined with optional parameters to define how many to fetch and at what offset.
  
    the user can put in any of these fields:
  ![searchbar](http://res.cloudinary.com/flyakite/image/upload/v1514414844/search_rifri5.png)
  
  which sends to this route
  ```
  namespace :api
   match 'search(/:limit/:offset)', to: 'sort#search', via: [:get]
   
    ///can come in with these parameters
  Parameters: {"pattern"=>"pattern", "categoryId"=>"1", "time"=>"30"}
  ```
  
    hitting the search route with any of those parameters will call Event.search which calls or makes smaller where calls if the parameters arent presnt
  ```
  Event.where('"startDate" > ? AND "startDate" <= ? AND lower(name) LIKE lower(?)',now,later, "%#{pattern}%" )
  ```
  
  the Sort controllers methods optionally take a limit and an offset or use defaults. This is the controller action which the previous route matches to. with no parameters it returns the 10 events closest upcoming events in order. 
  ```
  @events = Event.where('"startDate" > ?',DateTime.now).order('"startDate"').limit(params[:limit] || 10).offset(params[:offset] || 0)
  ```
  

 ### Google Maps integration
 
 when creating a site just put in the address. I use google's geocoder api to turn adresses into latitudes and longitudes and then use that to display google maps
 ![google maps](http://res.cloudinary.com/flyakite/image/upload/v1514410484/gMaps_pxgdi4.png)
 ### Stripe Integration
 when creating an event, if the price isnt free you are prompted to enter a stripe key which will be used when calling stripes checkout api when users click to register. Seed data sites have Stripe Test keys which allow you to put in any of [these](https://stripe.com/docs/testing#cards) cards to test it out. A positive response returns a transaction token which I could then use to send back to stripe to actually initiate the transaction.
 ![Stripe](http://res.cloudinary.com/flyakite/image/upload/v1514410484/stripe_qrohsj.png)
### cloudinary integration
![cloudinary demo](http://res.cloudinary.com/flyakite/image/upload/v1512163911/cloudinarydemo_fz6q2b.gif)

#### All images on the site are actually hosted by cloudinary which offers a powerful set of tools for manipulating images on the fly. I integrated the cloudinary widget into my form, letting users seamlessly upload thier photos to my cloudinary account, get a preview of that image, and not be redirected from my form.
### tasks to handle deep deletion of associated records.

events have bookmarkings and registrations which need to be deleted when the event is deleted which can become cumbersome. Mostly for fun but also for scalability I put the code into a task which can be easily integrated into herou sheduler or something like sidekiq:

    task :event,[:id] => :environment do
        id = args[:id]
        Registration.find_by(eventId:id).destroy_all
        Bookmark.find_by(eventId:id).destroy_all
    end


### redirecting
![redirection](http://res.cloudinary.com/flyakite/image/upload/v1512163922/redirectdemo_irfgjx.gif)

##### I used higher order componets to protect various routes within my site. The main part of the site that is protected in such a way is the create event page which redirects unsigned in users to the sign up page. I implimented it in such a way that if the user was redirected, after they sign up they are redirected back to the page they were trying to visit in the first place

these are components defined like:
```
const Protected = ({component: Component, path, loggedIn, saveRedirected }) =>
```

and render the component passed in like:
```
    return (
        <Route
            path={path}
            render={props => (renderAction(props))}
        />
    );
```
where render action either returns a component to render or redirects and dispatches an action which uses the global store to set a value for the signup page to know whether to route you back in history or to the index page. 
```
    const renderAction = (props) => {
        if (loggedIn) {
            return (<Component {...props} />);
        } else {
            saveAndRedirect();
            null
        }
    };
 ```


## Ideas for impovements

##### make the index page into a infinite scroll page once its only fetching a few at a time. 

##### make a most-recent list of events which are updated in realtime using websocket. 

##### flesh out searching and sorting

##### add a user account page where you could handle your account details, add a stripe key for all your events, and see information about your events such as total number of registrations, bookmarks, $sold, etc.

##### add comments
