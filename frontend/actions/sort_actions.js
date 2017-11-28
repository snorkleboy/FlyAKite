export const SET_SORT = 'SORT_ACTION';
export const sortEvents = () =>({
    type: "SORT"
});
export const setSort = (sortType) =>({
    type: SET_SORT,
    payload: sortType
});
