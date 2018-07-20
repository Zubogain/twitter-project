import axios from "axios";

export const getProfile = () => (dispatch, getState) => {
    const state = getState();
    if(state.auth !== null) {
        const id = state.auth.localId;
        const token = state.auth.idToken;
        axios.get(`https://twitter-project-3a9f5.firebaseio.com/users/${id}.json?auth=${token}`).then(response => {
            dispatch({ type: "RESPONSE_PROFILE_SUCCESS", payload: response.data });
        });
    } else {
        dispatch({ type: 'NOT_AUTH', payload: null });
    }
};

export const updateProfile = (name) => (dispatch, getState) => {
    const state = getState();
    const id = state.auth.localId;
    const token = state.auth.idToken;

    if(name && name !== state.profile.name) {
        axios.patch(`https://twitter-project-3a9f5.firebaseio.com/users/${id}.json?auth=${token}`, {
            name
        }).then(response => {
            dispatch({ type: "RESPONSE_PROFILE_SUCCESS", payload: response.data });
        });
    }
};

export const createProfile = () => (dispatch, getState) => {
    const state = getState();
    const id = state.auth.localId;
    const token = state.auth.idToken;

    axios.put(`https://twitter-project-3a9f5.firebaseio.com/users/${id}.json?auth=${token}`, {
        name: '',
    }).then(response => {
        dispatch({ type: "RESPONSE_CREATE_PROFILE_SUCCESS", payload: response.data });
    });
};

export const clearProfile = () => {
    return { type: "CLEAR_PROFILE", payload: null };
};