import axios from 'axios';
import {
    GET_BOOKS,
    ADD_BOOK,
    UPDATE_BOOK,
    DELETE_BOOK,
    BOOKS_ERRORS
} from './types';

export const getBooks = () => async (dispatch) => {
    try {
        const res = await axios.get('/api/books');
        dispatch({
            type: GET_BOOKS,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: BOOKS_ERRORS,
            payload: err.response
        });
    }
};