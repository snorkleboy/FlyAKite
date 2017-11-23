export const TOGGLE_LOGIN_FORM ="TOGGLE_LOGIN_FORM";
export const CLOSE_LOGIN_FORM = "CLOSE_LOGIN_FORM";
export const OPEN_LOGIN_FORM = "OPEN_LOGIN_FORM";
export const TOGGLE_PROFILE = "TOGGLE_PROFILE";
export const CLOSE_PROFILE = "CLOSE_PROFILE";
export const OPEN_PROFILE = "OPEN_PROFILE";

export const toggleLoginForm = ()=>({
    type: TOGGLE_LOGIN_FORM
});
export const closeLoginForm = () =>({
    type: CLOSE_LOGIN_FORM
});
export const openLoginForm = ()=>({
    type: OPEN_LOGIN_FORM
});

export const openProfile = () => ({
    type: OPEN_LOGIN_FORM
});
export const closeProfile = () => ({
    type: CLOSE_LOGIN_FORM
});
export const toggleProfile = () => ({
    type: TOGGLE_PROFILE
});