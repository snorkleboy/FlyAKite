//         Prefix Verb   URI Pattern                    Controller#Action
//      api_users GET    /api/users(.:format)           api/users#index {:format=>:json}
//                POST   /api/users(.:format)           api/users#create {:format=>:json}
//       api_user PATCH  /api/users/:id(.:format)       api/users#update {:format=>:json}
//                PUT    /api/users/:id(.:format)       api/users#update {:format=>:json}
//    api_session GET    /api/session(.:format)         api/sessions#show {:format=>:json}
//                DELETE /api/session(.:format)         api/sessions#destroy {:format=>:json}
//                POST   /api/session(.:format)         api/sessions#create {:format=>:json}
//     api_events GET    /api/events(.:format)          api/events#index {:format=>:json}
//                POST   /api/events(.:format)          api/events#create {:format=>:json}
//  new_api_event GET    /api/events/new(.:format)      api/events#new {:format=>:json}
// edit_api_event GET    /api/events/:id/edit(.:format) api/events#edit {:format=>:json}
//      api_event GET    /api/events/:id(.:format)      api/events#show {:format=>:json}
//                PATCH  /api/events/:id(.:format)      api/events#update {:format=>:json}
//                PUT    /api/events/:id(.:format)      api/events#update {:format=>:json}
//                DELETE /api/events/:id(.:format)      api/events#destroy {:format=>:json}
//           root GET    /                              static_pages#root



export const fetchAllEvents = () => $.ajax({
    url: '/api/events'
});

export const fetchEvent = (eventId) => $.ajax({
    url: `api/events/${eventId}`
});

export const fetchbyCategory = (id) => $.ajax({
    url: '/api/category',
    data: { categoryId: id }
});
export const fetchBookmarked = (id) => $.ajax({
    url: '/api/bookmarked',
});
export const fetchRegistered = () => $.ajax({
    url: '/api/registered'
});
export const fetchMyEvents = () => $.ajax({
    url: '/api/myevents'
});
export const fetchbySearch = (pattern, catId) => $.ajax({
    url: '/api/search',
    data:{pattern, catId}
});






export const createEvent = (event) =>  $.ajax({
    url: '/api/events',
    method:"POST",
    data: {event}
});

export const updateEvent = (event) => {
    
    return $.ajax({
    url: `/api/events/${event.id}`,
    method:"PATCH",
    data: {event}
    });
};