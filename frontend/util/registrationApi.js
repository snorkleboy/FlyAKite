export const createRegistration = (eventId, userId) => $.ajax({
    url: `api/registration/${eventId}/${userId}`,
    method: "POST"
});

export const deleteRegistration = (eventId) => $.ajax({
    url: `api/registration/${eventId}`,
    method: "DELETE"
});