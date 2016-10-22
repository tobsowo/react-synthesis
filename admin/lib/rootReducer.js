// rootReducer.js
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

// core plugins that we store
import user from './userReducer';
import components from './componentsReducer';
// all post that are in the store
// we might want to only store the title and id's in the store
import posts from './posts';
// current single post  being view or edited
import post from './post';

const rootReducer = combineReducers({user, components, posts, post, routing: routerReducer});

export default rootReducer;