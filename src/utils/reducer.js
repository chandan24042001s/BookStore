// reducer.js
import { SET_LOADING, SET_BOOKS, SET_SEARCH_TERM, SET_RESULT_TITLE } from './actions';

const initialState = {
  loading: false,
  books: [],
  searchTerm: '',
  resultTitle: '',
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return { ...state, loading: action.payload };
    case SET_BOOKS:
      return { ...state, books: action.payload };
    case SET_SEARCH_TERM:
      return { ...state, searchTerm: action.payload };
    case SET_RESULT_TITLE:
      return { ...state, resultTitle: action.payload };
    default:
      return state;
  }
};