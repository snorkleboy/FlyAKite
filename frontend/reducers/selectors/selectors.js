

export const SelectEventsInOrder = (events) => {
        let eventslist=[];
        events.order.forEach( (Id) => {eventslist.push(events.byIDs[Id] );} );
    return (eventslist);
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