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