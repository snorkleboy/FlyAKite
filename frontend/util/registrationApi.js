export const createRegistration = (eventId, userId, stripeDet) => $.ajax({
        url: `api/registration/${eventId}/${userId}`,
        method: "POST",
        data:stripeDet ? {stripeKey: stripeDet.id, stripeEmail: stripeDet.email} : null
    });


export const deleteRegistration = (eventId) => $.ajax({
    url: `api/registration/${eventId}`,
    method: "DELETE"
});