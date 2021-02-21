import {
    GET_BOOKS,
    ADD_BOOK,
    UPDATE_BOOK,
    DELETE_BOOK,
    BOOKS_ERRORS
} from '../actions/types';

const initialState = {
    allBooks: [],
    bookToEdit: {},
    booksErrors: [],
    addBookDialogueOpen: false,
    editBookDialogueOpen: false
};

export default (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case GET_BOOKS:
            return {
                ...state,
                allBooks: payload
            };
    
        default:
            return state;
    }
};