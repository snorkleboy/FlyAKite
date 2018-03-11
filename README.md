# [FlyaKite](https://flyakite.herokuapp.com)
### FlyaKite is a full-stack web application inspired by EventBrite. It is a react/redux front end paired with a Ruby on Rails backend. The purpose of the site is to allow users to create events and see events created by other users organized into a variety of categories. Users can also bookmark and register for events and search for them in a variety of ways.


<a name="redirecting and Route control"/>
# Features & Implementation

## Google Maps integration
  ![google maps](http://res.cloudinary.com/flyakite/image/upload/v1514410484/gMaps_pxgdi4.png)


I abstracted Google maps into its own more or less presentational component that takes in a location. It only renders a div with a ref and then onMount I let google scripts take over.

You put in the address of an event when you create it and I use Google Geo Coder API to turn the adress into a latitude and longitude. Then I use Google Maps Script to display the map on component mount.

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

 ## Stripe Integration
 when creating an event, if the price isnt free you are prompted to enter a stripe key which will be used when calling stripes checkout api when users click to register. 

  The event handler for registration buttons looks at the price and returns either a free registration handler or a handler which opens a modal component to handle paid registration. It is given a close() callback which closes the modal, a register() callback which takes in user,event, and stripe data and sends it to the backend, and the event data itself, like so;

then inside the registration Modal I setup stripe on mount

```
componentDidMount(){
  let Skey = this.props.event.stripeKey;

  this.handler = StripeCheckout.configure({
      key: Skey,
      image: this.props.event.imgURL,
      locale: 'auto'
  });
  // Close Checkout on page navigation:
  window.addEventListener('popstate', function () {
      if (this.handler) this.handler.close();       
  });
}
```
and define a function to open Stripe populated with data from whatever event was passed in as a prop. This function is then bound to the registration button
```
openStripe(e){
    // Open Checkout with further options:
    this.handler.open({
        name: this.props.event.name,
        description: this.props.event.header,
        zipCode: true,
        amount: this.props.event.price,
        token: this.props.register,
    });
    e.preventDefault();
}
```

the token property is a callback which is called with the token that stripe responds with. The callback sends the data to the backend to be registered, then if it was a success the modal is closed. 

```
handleStripeRegistration(token,args){
    this.props.makeRegistration(
        this.props.match.params.eventId,
        this.props.currentUser,
        token
    )
    .then(success =>  this.setState({registrationOpen: false}) );
}
```
 
 since registration requires a user to be signed in, and Stripe registration is only for paid events, I assign different handlers depending on if the user is logged in and if the event is paid. 

 ```
conditionalRegister(){
  if (this.props.currentUser && !this.props.event.registered){ 
    if (this.props.event.price>0){
      return this.openRegistration
    }else{
      return this.handleRegister
    }      
  }else{
    return this.redirect
  }
}
```
 Seed data sites have Stripe Test keys which allow you to put in any of [these](https://stripe.com/docs/testing#cards) cards to test it out. A positive response returns a transaction token which I store in the backend. I do not actually finalize transaction and send those token back to stripe. 
 ![Stripe](http://res.cloudinary.com/flyakite/image/upload/v1514410484/stripe_qrohsj.png)
## cloudinary integration
![cloudinary demo](http://res.cloudinary.com/flyakite/image/upload/v1512163911/cloudinarydemo_fz6q2b.gif)

All images on the site are actually hosted by Cloudinary which offers a powerful set of tools for manipulating images on the fly. I integrated the Cloudinary widget into my form, letting users seamlessly upload their photos to my Cloudinary account, get a preview of that image, and not be redirected from my form.

Other than bootstrapping Cloudinary_options (a api key and a account name), its as easy as binding the following function to a button

```
    upload(e){    
        const resultsCallBack = function (error, results) {
            if (!error) this.setState({ 'imgURL': results[0].url   });
        }
        window.cloudinary.openUploadWidget(window.Cloudinary_options, resultsCallBack.bind(this) );
    }

```

## redirecting and Route control
![redirection](http://res.cloudinary.com/flyakite/image/upload/v1512163922/redirectdemo_irfgjx.gif)

I use higher order components to ensure that users are logged in before visiting certain sections of the site or using some features (such as registration and bookmarking).

this Protected components purpose is to generate a route or a redirect depending on whether or not a logged in user has been put into the Redux Store. 

A pattern I follow is to always redirect with a location state object to allow me to redirect back. 
```
const Protected = ({ component: Component, path, loggedIn }) =>{
  const renderFunction = (props) => (
    loggedIn ? 
        <Component {...props} path={path} />
    : 
        <Redirect push to={{
            pathname: '/signup',
            state: { redirectedFrom: path }
          }} 
        />
    )
  return (
    <Route
        path={path}
        render={renderFunction}
    />
  )
};

```

then this Protected route can be used alongside the regular route system
```
<Route path="/events/:eventId" component={ShowPageContainer} />
<ProtectedRoute path="/events/:eventId/edit" component={CreateEventContainer} />

```

and in the Signup component, a successful signing up or logging in results in a logged in user being put in the store. Then, when the sign in component receives the logged-in prop it can check whether the user has been previously redirected to redirect them back, or otherwise simply go to the index page. 

```
componentWillReceiveProps(nextProps) {
  if (nextProps.loggedIn) {
    if (this.props.location.state){
      this.props.history.push(this.props.location.state.redirectedFrom)
    }else{
      this.props.history.push('/')
    }
  }
}
```

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

Registration and Bookmarking is similarly restful, but event and registration data is sent over with events and user data so there is no separate get request for it. Registration optionally takes in a body parameter of a Stripe payment token and email. 

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
