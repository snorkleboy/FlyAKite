export const createBookmark = (eventId) => $.ajax({
    url: `api/bookmarks/${eventId}`,
    method: "POST"
});

export const deleteBookmark = (eventId) => $.ajax({
    url: `api/bookmarks/${eventId}`,
    method: "DELETE"
});