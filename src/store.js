import { createStore, combineReducers } from "redux";

const studentActionCreator = ({ name, favorite }) => ({
  type: "FILL_ME_IN",
  payload: { name, favorite }
});

const playListActionCreator = ({ artist, songTitle }) => ({
  //complete this action creator
});

const defaultCurrentStudentAppState = { name: "", favorite: "" };

const currentStudentReducer = function(
  previousState = defaultCurrentStudentAppState,
  action
) {
  // console.log(">>> ACTION OF Type >>> currentStudent " + action.type);
  // console.log(">>> ACTION's PAYLOAD IS >>> currentStudent ", action.payload);
  switch (action.type) {
    case "ADD_STUDENT":
      return { name: action.payload.name, favorite: action.payload.favorite };
    default:
      return previousState;
  }
};

const defaultStudentsAppState = {list: [], total: 0}
const studentsReducer = function(previousState = defaultStudentsAppState, action) {
  // console.log(">>> ACTION OF Type >>> students " + action.type);
  //console.log(">>> ACTION's PAYLOAD IS >>> stududents ", action.payload);
  switch (/* fill me in */) {
    case "FILL_ME_IN":
      return {
        list: [...previousState.list, action.payload],
        total: previousState.total++
      };
    default:
      return /* fill me in */;
  }
};

const playListReducer = function(previousState = [], action) {
  //complete this reducer function
};

const rootReducer = combineReducers({
  current: currentStudentReducer
  //add the rest of the reducers
});

const storeInitialState = {
  current: { name: "", favorite: "" },
  students: {
    list: [],
    total: 0
  },
  playList: []
};

const store = createStore(rootReducer, storeInitialState);
window.__store = store;

/* 
To add items to the store in the browser, write the statement below in the brower's console:
let store = window.__store
then dispatch your action creators in the console as an argument inside dispatch like so:
store.dispatch({
  type: "ADD_STUDENT",
  payload: { name: "Michael", favorite: "Hit Me Baby One More Time" }
})

NOT like so:
store.dispatch(studentActionCreator({ name: "Michael", favorite: "Hit Me Baby One More Time" })

*/

console.log("Current State before dispatching actions with action creator >>>", store.getState());

/* In currentStudentReducer, comment out the "case" after the switch statement 
as well as the return statement right below the case.
call the dispatch function below. 
Because we are not handling the action type, note that the previous state is returned.
Now let's handle that action by uncommenting the case and return statement. Note the new current state. */

store.dispatch(
  studentActionCreator({ name: "Lauren", favorite: "Carry On" })
  );
  
  console.log("Current state after dispatching action with action creator >>>", store.getState());
  
  
  store.dispatch(/* dispatch more studentActionCreators */);
  store.dispatch(/* dispatch playListActionCreators */);
  
  console.log("Current state after dispatching action with action creator >>>", store.getState());
  
export default store;
