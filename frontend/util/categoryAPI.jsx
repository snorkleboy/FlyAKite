
export const fetchIndex = () => $.ajax({
    url: "/api/categories"
});

// export const fetchIndexDiff = (lists) => $.ajax({
//     url: "/api/categories"
// });


export const fetchAllCategories = () => $.ajax({
    url: '/api/categories'
});