export const createRegistration = (eventId, userId) => $.ajax({
    url: `api/registration/${eventId}/:${userId}`,
    method: "POST"
});

export const deleteRegistration = (regId) => $.ajax({
    url: `api/registration/${regId}`,
    method: "PATCH",
    data: event
});