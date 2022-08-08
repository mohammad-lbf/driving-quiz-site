import { createStore  } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { testReducer } from "./test/testReducer";

const store = createStore(testReducer , composeWithDevTools());

export default store;