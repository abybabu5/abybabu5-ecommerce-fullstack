import React, {createContext, useContext, useReducer} from "react";
//prepares the data layout
export  const StateContext = createContext();
//Wrap our app and provide the data layer to the components
export const StateProvider = ({reducer, initialState, children}) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);
//pull info from the data layer
export const useStateValue = () => useContext(StateContext);

export class useState {
}
