

export const SelectEventsInOrder = (events) => {
        let eventslist=[];
        events.order.forEach( (Id) => {eventslist.push(events.byIDs[Id] );} );
    return (eventslist);
};



export const SelectEntityInOrder = (EntityObject) => {
    let list = [];
    EntityObject.order.forEach((Id) => { list.push(EntityObject.byIDs[Id]); });
    return (list);
};

export const sortByCategory = (events, catId) => {
    let catEventList = [];
    Object.values(events.byIDs).forEach( (event) => {

        if ( event.categoryId === catId ) catEventList.push(event);
    });

    return catEventList;
};

export const GetAll = (events) =>{
    let eventlist = [];
    return Object.keys(events.byIDs);
};



// {
//     this.props.events.order.map((eventID, index) => {
//         let event = this.props.events.byIDs[eventID];
//         return (
//             <div className='event-item-anchor'>
//                 <EventListItem key={index + eventID} event={event} />

//             </div>
//         );
//     })
// }

// export default SelectEventsInOrder;