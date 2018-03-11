# [FlyaKite](https://flyakite.herokuapp.com)
### FlyaKite is a full-stack web application inspired by EventBrite. It is a react/redux front end paired with a Ruby on Rails backend. The purpose of the site is to allow users to create events and see events created by other users organized into a variety of categories. Users can also bookmark and register for events and search for them in a variety of ways.



# Features & Implementation


## RESTFUL API
  most of the interactions with the database are mediated through a restful API, with slight deviations for user authentication and searching and sorting. All these routes return json. 
  
### Events
Events are created, updated and fetched through a restful API
```
method route                              contoller#method
GET    /api/events                        api/events#index 
POST   /api/events                        api/events#create 
GET    /api/events/:id                    api/events#show 
PATCH  /api/events/:id                    api/events#update 
PUT    /api/events/:id                    api/events#update 
DELETE /api/events/:id                    api/events#destroy 
```

Registration and Bookmarking is similarly restful, but event and registration data is sent over with events and user data so there is no separate get request for it. 

```
method route                              contoller#method
POST   /api/registration/:eventId/:userId api/registrations#create 
DELETE /api/registration/:eventId         api/registrations#destroy 
POST   /api/bookmarks/:eventId            api/bookmarks#create 
DELETE /api/bookmarks/:eventId            api/bookmarks#destroy 
```
### User Authentication
User authentication is handled through these routes. A Post request for api/users as or api/session with proper parameters results in signing up and logging in, or just logging in. When being logged in a you are sent back a token that is to store in your session cookies that is also stored in the database.
```
method route                              contoller#method
GET    /api/users                         api/users#index 
POST   /api/users                         api/users#create 
GET    /api/users/:id                     api/users#show 
PATCH  /api/users/:id                     api/users#update 
PUT    /api/users/:id                     api/users#update 
GET    /api/session                       api/sessions#show 
DELETE /api/session                       api/sessions#destroy 
POST   /api/session                       api/sessions#create 
```
Most of the code for authentication is on the User model. Raw passwords are not actually saved to the database. I overwrite the password asignment method so that when I instantiate a new User with a password, it is automatically converted into a hashed and salted password_digest, and the password field itself is not part of the database schema. 
```
  def password=(password)
    self.password_digest = BCrypt::Password.create(password)
  end
  
  def is_password?(password)
    BCrypt::Password.new(password_digest).is_password?(password)
  end
```

Users can then be looked up with a username and password to be authenticated. 
```
  def self.find_by_cred(username, password)
    user = User.find_by(username: username)
    return user if user && user.is_password?(password)
    nil
  end
```

### Search, sort, and categories on custom routes
search and sort is a bit less restful. The following are for general groupings like most recent events or events that match a specific category. each route comes with optional wildcard parameters to set the limit and offset of the data to make it easy to scroll through data. All of them are handled by thier own controller.  
```
method route                              contoller#method
GET    /api/mostrecent(/:limit/:offset)   api/sort#most_recent 
GET    /api/bookmarked(/:limit/:offset)   api/sort#bookmarked 
GET    /api/registered(/:limit/:offset)   api/sort#registered 
GET    /api/upcoming(/:limit/:offset)     api/sort#upcoming 
GET    /api/myevents(/:limit/:offset)     api/sort#my_events 
GET    /api/category(/:limit/:offset)     api/sort#category 
```
![searchbar](http://res.cloudinary.com/flyakite/image/upload/v1514414844/search_rifri5.png)
actual searching is done through the sort route. It takes any combination of body parameters of a string pattern to match, a category, and/or a date to be within. 
```
method route                              contoller#method
GET    /api/search(/:limit/:offset)       api/sort#search

parameters: {"pattern"=>"pattern", "categoryId"=>"1", "time"=>"30"}
```
most of the actual searching work is done in the Event model, whose search method calls different searches depending on parameters, such as
```
Event.where('"categoryId" = ? AND lower(name) LIKE lower(?)', categoryId, "%#{pattern}%")
```
allowing the search controller method is simply
```
  def search
    @events = Event.search(params)
    indexRender
  end
```
  
 ### Google Maps integration
  ![google maps](http://res.cloudinary.com/flyakite/image/upload/v1514410484/gMaps_pxgdi4.png)
I abstracted Google maps into its own more or less presentational component. Ir renders simply a div with a ref, the onMount I let google scripts take over

 ```
   componentDidMount() {
    mapCenter(this.props.location).then((response) => {
      const map = ReactDOM.findDOMNode(this.refs.map);
      const LatLng = response.results[0].geometry.location;
      const options = {
        center: LatLng,
        zoom: 13
      };
      this.map = new google.maps.Map(map, options);
      const pos = new google.maps.LatLng(LatLng.lat, LatLng.lng);
      const marker = new google.maps.Marker({
        position: pos,
        map: this.map
      });

    });
  }

```

You put in the adress of an event when you create it, and I use google GeoCoder API to turn it into a latitude and longitude and Google Maps script to display the map on Component mount.

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
