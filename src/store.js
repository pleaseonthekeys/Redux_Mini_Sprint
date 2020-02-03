import { createStore, combineReducers } from "redux";

const addNewMessageActionCreator = ({ userName, text }) => ({
  type: "ADD_MESSAGE",
  payload: { userName, text }
});

// const addNewToCurrentChatActionCreator = ({ chatGroup, message }) => ({
//   type: "ADD_TO_CURRENT_CHAT",
//   payload: { chatGroup, message }
// });

const addUserActionCreator = ({ userName }) => ({
  type: "ADD_USER",
  payload: { userName }
});

const defaultAppState = { userName: "default state", text: "default state" };

const messagesReducer = function(previousState = defaultAppState, action) {
  // console.log(">>> ACTION OF Type >>> curr " + action.type);
  // console.log(">>> ACTION's PAYLOAD IS >>> curr ", action.payload);
  switch (action.type) {
    case "ADD_MESSAGE":
      return {
        userName: action.payload.userName,
        text: action.payload.text
      };
    default:
      return previousState;
  }
};

const usersReducer = function(previousState = { userList: [] }, action) {
  // console.log(">>> ACTION OF Type >>> user " + action.type);
  //console.log(">>> ACTION's PAYLOAD IS >>> user ", action.payload);
  switch (action.type) {
    case "ADD_USER":
      return {
        userList: [...previousState.userList, action.payload]
      };
    case "ADD_MESSAGE":
      return { userList: [...previousState.userList, action.payload] };
    default:
      return previousState;
  }
};

const chatRoomReducer = function(previousState = [], action) {
  switch (action.type) {
    case "ADD_MESSAGE":
      return [...previousState, action.payload];
    default:
      return previousState;
  }
};

const rootReducer = combineReducers({
  messages: messagesReducer,
  users: usersReducer,
  chatList: chatRoomReducer
});

const storeInitialState = {
  messages: { userName: "", text: "" },
  users: {
    userList: []
  },
  chatList: []
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
  addNewMessageActionCreator({
    userName: "Lauren",
    text: "Where should we go out to eat?"
  })
);

store.dispatch(
  addNewMessageActionCreator({
    userName: "Trevor",
    text: "Anywhere, I'm SO HUNGRY!!"
  })
);

store.dispatch(
  addUserActionCreator({
    userName: "Jimmy Cliff"
  })
);

store.dispatch(
  addUserActionCreator({
    userName: "Jackson 5"
  })
);

console.log(
  "Current state after dispatching action with action creator >>>",
  store.getState()
);

export default store;
