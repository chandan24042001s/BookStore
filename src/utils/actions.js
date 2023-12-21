// actions.js
export const SET_LOADING = 'SET_LOADING';
export const SET_BOOKS = 'SET_BOOKS';
export const SET_SEARCH_TERM = 'SET_SEARCH_TERM';
export const SET_RESULT_TITLE = 'SET_RESULT_TITLE';

export const setLoading = (loading) => ({ type: SET_LOADING, payload: loading });
export const setBooks = (books) => ({ type: SET_BOOKS, payload: books });
export const setSearchTerm = (searchTerm) => ({ type: SET_SEARCH_TERM, payload: searchTerm });
export const setResultTitle = (resultTitle) => ({ type: SET_RESULT_TITLE, payload: resultTitle });