

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
export const selectUserEvents = (events, arrayOfEventIds) =>{
    let list = SelectEventsInOrder(events);

    list = list.filter((event) => arrayOfEventIds.includes(event.id));
   
    return list;

};


export const SelectByCategory = (events, catId) => {
    let catEventList = SelectEventsInOrder(events);
    if ( catId === 0){
        return catEventList;
    }
     let a = catEventList.filter ( ( event )=> event.categoryId === catId)
    return a;
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