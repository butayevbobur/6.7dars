import { createContext, useReducer } from "react";

export const GlobalContext = createContext();
const changeState = (state, action) => {
  switch (action.type) {
    case "LOG_IN":
      return { ...state, user };
  }
};

function GlobalContextProvider({ children }) {
  const [state, dispatch] = useReducer(changeState, {
    user: false,
  });
  dispatch({
    type: "LOG_OUT",
    payload: {
      name: "Bobur",
      age: 16,
    },
  });

  return (
    <GlobalContext.Provider value={{ ...state }}>
      {children}
    </GlobalContext.Provider>
  );
}
