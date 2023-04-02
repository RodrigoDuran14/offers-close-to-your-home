<<<<<<< HEAD
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducer";

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
=======
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducer'
import { composeWithDevTools } from 'redux-devtools-extension';


const store = createStore(
    rootReducer,
    composeWithDevTools(
      applyMiddleware(thunk)
    )
  );


export default store;
>>>>>>> 043f331cafcd0650e6d11c914d79e7f3ff9b8b01
