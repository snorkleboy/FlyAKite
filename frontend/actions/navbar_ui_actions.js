export const TOGGLE_LOGIN_FORM ="TOGGLE_LOGIN_FORM";
export const TOGGLE_PROFILE = "TOGGLE_PROFILE";
export const CLOSE_ALL = "CLOSE_ALL";



export const closeAll = () =>({
    type: CLOSE_ALL
});

export const toggleLoginForm = ()=>({
    type: TOGGLE_LOGIN_FORM
});

export const toggleProfile = () => ({
    type: TOGGLE_PROFILE
});