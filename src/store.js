import { createStore, combineReducers } from "redux";

//action creators can be used in multiple reducers and
//individual reducers can handle multiple action creators

const studentActionCreator = ({ name, favorite }) => ({
  type: "ADD_STUDENT",
  payload: { name, favorite }
});

const playListActionCreator = ({ artist, songTitle }) => ({
  type: "ADD_TO_GROUP_PLAYLIST",
  payload: { artist, songTitle }
});

//why do you think creating a default state is good practice?
const defaultAppState = { name: "", favorite: "" };

//what do you expect to see when you log action.type?
//how about action.payload?
//make your predictions then uncomment the console.log to find out
const currentStudentReducer = function(
  previousState = defaultAppState,
  action
) {
  // console.log(">>> ACTION OF Type >>> curr " + action.type);
  // console.log(">>> ACTION's PAYLOAD IS >>> curr ", action.payload);
  switch (action.type) {
    case "ADD_STUDENT":
      return { name: action.payload.name, favorite: action.payload.favorite };
    default:
      return previousState;
  }
};

//action types are available to all reducers so that they can all be handled as needed, which is why we need a switch statement
//what do you see when you log action.type in this econd reducer?

const studentsReducer = function(previousState = { list: [] }, action) {
  // console.log(">>> ACTION OF Type >>> stud " + action.type);
  //console.log(">>> ACTION's PAYLOAD IS >>> stud ", action.payload);
  switch (action.type) {
    case "ADD_STUDENT":
      return {
        list: [...previousState.list, action.payload],
        total: previousState.total++
      };
    default:
      return previousState;
  }
};

//write a playlist reducer
const playListReducer = function(previousState = { playList: [] }, action) {
  switch (action.type) {
    case "ADD_TO_GROUP_PLAYLIST":
      return {
        playList: [...previousState.playList, action.payload]
      };
    default:
      return previousState;
  }
};

//add the playListReducer to the rootReducer
const rootReducer = combineReducers({
  current: currentStudentReducer,
  students: studentsReducer,
  playList: playListReducer
});

// store.getState();
// store.dispatch(actionCreator("arg"));
// store.getState();

const storeInitialState = {
  current: { name: "", favorite: "" },
  students: {
    list: [],
    total: 0
  }
};

const store = createStore(rootReducer, storeInitialState);
window.__store = store;

//to add items to the store in the browser, write the statement below in the brower's console:
//let store = window.__store
//then dispatch your action creators in the console as an argument inside dispatch like so:
/*store.dispatch({
  type: "ADD_STUDENT",
  payload: { name: "Brittany", favorite: "Hit Me Baby One More Time" }
}) */

//NOT like so:
/*store.dispatch(studentActionCreator({ name: "Lauren2", favorite: "Stay with Me" })*/

//first dispatch but because are not handling...returns previous
store.dispatch(
  studentActionCreator({ name: "Lauren", favorite: "Stay with Me" })
);

store.dispatch(
  studentActionCreator({
    name: "Brittany",
    favorite: "Hit Me Baby One More Time"
  })
);

store.dispatch(
  playListActionCreator({
    artist: "Hello",
    songTitle: "Whats up??"
  })
);

// store.dispatch();
// store.dispatch({ type: "CHANGE_STUDENT_NAME" });
// store.dispatch({ type: "CHANGE_STUDENT_FAVORITE_SONG" });
//now try to handle that action
//once you write (or uncomment) the case and return, we are now handling the action
console.log("This is the current State >>>", store.getState());

export default store;
