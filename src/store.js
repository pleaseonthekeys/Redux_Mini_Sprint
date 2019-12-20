import { createStore, combineReducers } from "redux";

//action creators can be used in multiple reducers

const studentActionCreator = ({ name, favorite }) => ({
  type: "FILL_ME_IN",
  payload: { name, favorite }
});

const playListActionCreator = ({ artist, songTitle }) => ({
  //complete this action creator
});

//why do you think creating a default state is good practice?
const defaultCurrentStudentAppState = { name: "", favorite: "" };

//what do you expect to see when you log action.type?
//how about action.payload?
//make your predictions then uncomment the console.log to find out
const currentStudentReducer = function(
  previousState = defaultAppState,
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

const defaultStudentsAppState = {list: []}
//what do you see when you log action.type in this second reducer?
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


//what is the purpose of creating an initial state for the store?
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
  payload: { name: "Brittany", favorite: "Hit Me Baby One More Time" }
})

NOT like so:
store.dispatch(studentActionCreator({ name: "Lauren2", favorite: "Stay with Me" })

*/

console.log("This is the current State before dispatching any actions with the action creator >>>", store.getState());

/* In currentStudentReducer, comment out the "case" after the switch statement 
as well as the return statement right below the case.
call the dispatch function below. 
Because we are not handling the action type, note that the previous state is returned.
Uncomment the case and return statement and note the current state. */

store.dispatch(
  studentActionCreator({ name: "Lauren", favorite: "Stay with Me" })
  );
  
  console.log("This is the current State after dispatching the action with the action creator >>>", store.getState());
  // store.dispatch(
  //   studentActionCreator({
  //     name: "Brittany",
  //     favorite: "Hit Me Baby One More Time"
  //   })
  //   );
    
    // store.dispatch(
    //   playListActionCreator({
    //     artist: "Hello",
    //     songTitle: "Whats up??"
    //   })
    //   );
      
      // store.dispatch();
      // store.dispatch({ type: "CHANGE_STUDENT_NAME" });
      // store.dispatch({ type: "CHANGE_STUDENT_FAVORITE_SONG" });
      //now try to handle that action
      //once you write (or uncomment) the case and return, we are now handling the action
      
      // store.getState();
      // store.dispatch(actionCreator("arg"));
      // store.getState();

export default store;
