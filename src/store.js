import { createStore, combineReducers } from "redux";

const studentActionCreator = ({ name, favorite }) => ({
  type: "ADD_STUDENT",
  payload: { name, favorite }
});

const playListActionCreator = ({ artist, songTitle }) => ({
  type: "ADD_TO_GROUP_PLAYLIST",
  payload: { artist, songTitle }
});

const defaultAppState = { name: "default state", favorite: "default state" };

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

const playListReducer = function(previousState = [], action) {
  switch (action.type) {
    case "ADD_TO_GROUP_PLAYLIST":
      return [...previousState, action.payload];
    default:
      return previousState;
  }
};

const rootReducer = combineReducers({
  current: currentStudentReducer,
  students: studentsReducer,
  playList: playListReducer
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
console.log(
  "Current State before dispatching actions with action creator >>>",
  store.getState()
);
/* In currentStudentReducer, comment out the "case" after the switch statement 
as well as the return statement right below the case.
call the dispatch function below. 
Because we are not handling the action type, note that the previous state is returned.
Now let's handle that action by uncommenting the case and return statement. Note the new current state. */
store.dispatch(
  studentActionCreator({
    name: "Lauren",
    favorite: "You Can Get It If You Really Want"
  })
);

store.dispatch(
  studentActionCreator({
    name: "Trevor",
    favorite: "I Want You Back"
  })
);

store.dispatch(
  playListActionCreator({
    artist: "Jimmy Cliff",
    songTitle: "You Can Get It If You Really Want"
  })
);

store.dispatch(
  playListActionCreator({
    artist: "Jackson 5",
    songTitle: "I Want You Back"
  })
);

console.log(
  "Current state after dispatching action with action creator >>>",
  store.getState()
);

export default store;
