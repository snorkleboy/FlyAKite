

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