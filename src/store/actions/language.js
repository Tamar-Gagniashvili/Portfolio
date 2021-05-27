import * as actionTypes from './actionTypes';

export const changeLanguage = (lang) => {
    return {
        type: actionTypes.CHANGE_LANGUAGE,
        payload: lang
    };
};
export const initLanguage = () => {
    return {
        type: actionTypes.INIT_LANGUAGE
    };
};