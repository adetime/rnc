import { combineReducers } from 'redux';
import LibraryReducer from './LibraryReducer';
import SelectionReducer from './SelectionReducer';

// Combina os reduceres e define quem deve ser responsável pelo valor de cada
// pedaço do estado da App
export default combineReducers({
  libraries: LibraryReducer,
  selectedlibraryId: SelectionReducer
});
// O valor de libraries (parte do estado) é definido pelo reducer LibraryReducer
// O valor de selectedlibraryId (parte do estado) é definido pelo reducer
// SelectionReducer
