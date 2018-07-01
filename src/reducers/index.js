import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';

const rootReducer = combineReducers({
  //Books is the piece of state, BooksReducer is the data
  books: BooksReducer
});

export default rootReducer;
